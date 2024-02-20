import { Injectable } from '@angular/core';
import { Observable, filter, of } from 'rxjs';
import { DATOS_DEPORTES, Partido } from '../mock/partidosData';


@Injectable({
  providedIn: 'root'
})
export class DeportesServiceService {

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

}
