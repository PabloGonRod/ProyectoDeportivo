import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Gol, Partido, Tarjeta } from 'src/app/data/mock/partidosData';
import { PartidosServiceService } from 'src/app/data/service/partidos-service.service';

@Component({
  selector: 'app-partido-mod',
  templateUrl: './partido-mod.component.html',
  styleUrls: ['./partido-mod.component.css']
})
export class PartidoModComponent{

  partido: Partido | undefined

  idLocal: string = ""
  idVisitante: string = ""
  goles: Gol[] = []
  tarjetas: Tarjeta[] = []
  fecha: string = ""

  partidoMod: Partido = {
    id: 0,
    idLocal: this.idLocal,
    idVisitante: this.idVisitante,
    goles: this.goles,
    tarjetas: this.tarjetas,
    fecha: this.fecha
  }

  constructor(private service: PartidosServiceService, private router: Router, private activateRoute: ActivatedRoute){}


  modPartido(){
    let id = this.activateRoute.snapshot.params['id']
    this.service.modificarPartido(id, this.partidoMod)
    this.router.navigate(['partidos'])
  }



}
