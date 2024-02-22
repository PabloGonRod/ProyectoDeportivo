import { Injectable } from '@angular/core';
import { Observable, of, filter } from 'rxjs';
import { Equipo, EQUIPOS_MOCK } from '../mock/equiposMock';

@Injectable({
  providedIn: 'root'
})
export class EquiposServiceService {

  constructor() { }


  getEquipos(): Observable<Equipo[]>{
    return of(EQUIPOS_MOCK)
  }

  getEquipo(id: string | undefined): Observable<Equipo | undefined> {
    return of(EQUIPOS_MOCK.find(equipo => equipo.id === id))
    .pipe(
      filter((equipo) => equipo !== undefined),
    );
  }
}
