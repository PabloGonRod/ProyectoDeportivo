import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Gol, Partido, Tarjeta } from 'src/app/data/mock/partidosData';
import { PartidosServiceService } from 'src/app/data/service/partidos-service.service';

@Component({
  selector: 'app-partido-add',
  templateUrl: './partido-add.component.html',
  styleUrls: ['./partido-add.component.css']
})
export class PartidoAddComponent {

  partidos: Partido[] = []
  partido: Partido | undefined

  idLocal: String | undefined
  idVisitante: String | undefined
  goles: Gol[] = []
  tarjetas: Tarjeta[] = []
  fecha: string = ''


  constructor(private service: PartidosServiceService, private router: Router){}

  addPartido(idLocal: string, idVisitante: string, fecha: string){
    this.partido = {
      id: 0,
      idLocal: idLocal,
      idVisitante: idVisitante,
      fecha: fecha,
      goles: this.goles,
      tarjetas: this.tarjetas
    }
    this.service.addPartido(this.partido)

    this.router.navigate(['partidos'])
  }
}
