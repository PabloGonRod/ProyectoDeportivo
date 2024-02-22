import { Injectable } from '@angular/core';
import { Observable, filter, of } from 'rxjs';
import { DATOS_DEPORTES, Partido } from '../mock/partidosData';
import { EQUIPOS_MOCK, Equipo } from '../mock/equiposMock';


@Injectable({
  providedIn: 'root'
})
export class PartidosServiceService {

  constructor() { }



  getPartidos() : Observable<Partido[]>{
    return of(DATOS_DEPORTES)
  }

  getPartido(id: number| undefined): Observable<Partido | undefined>{
    return of(DATOS_DEPORTES.find(partido => partido.id === id))
    .pipe(
      filter((partido) => partido !== undefined),
    );
  }
  addPartido(partido: Partido): Observable<Partido[]> {
    // Simular la asignación de un nuevo ID
    // Los tres puntos es por si tienes los id separados para que te los recoja
    partido.id = Math.max(...DATOS_DEPORTES.map(p => p.id)) + 1;

    // Agregar el nuevo partido a la lista
    DATOS_DEPORTES.push(partido);

    // Retornar la lista actualizada
    return of(DATOS_DEPORTES);
  }

  removePartido(id: number | undefined){
    let indicePartido = DATOS_DEPORTES.findIndex(partido => partido.id === id);
    if (indicePartido !== -1) {
      DATOS_DEPORTES.splice(indicePartido, 1);
    }
  }

  modificarPartido(id: number, partido: Partido){
    let indicePartido = DATOS_DEPORTES.findIndex(p => p.id === partido.id);
    if (indicePartido !== -1) {
      DATOS_DEPORTES[indicePartido] = partido;
    }
  }
}
