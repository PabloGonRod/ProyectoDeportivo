import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Partido, Gol, Tarjeta } from 'src/app/data/mock/partidosData';
import { PartidosServiceService } from 'src/app/data/service/partidos-service.service';

@Component({
  selector: 'app-partido-detalle',
  templateUrl: './partido-detalle.component.html',
  styleUrls: ['./partido-detalle.component.css']
})
export class PartidoDetalleComponent implements OnInit {

  partido: Partido | undefined

  idLocal: String | undefined
  idVisitante: String | undefined

  golesLocal: Gol[] = []
  golesVisitante: Gol[] = []

  tarjetaLocal: Tarjeta[] = []
  tarjetaVisitante: Tarjeta[] = []
  tarjetaLocalColor: String | undefined
  tarjetaVisitanteColor: String | undefined

  constructor(private service: PartidosServiceService, private router: Router, private activateRoute: ActivatedRoute){

  }

  ngOnInit(): void {
    let idStr = this.activateRoute.snapshot.params[('id')]
    if(idStr !== null){
      let id = parseInt(idStr)
      this.service.getPartido(id).subscribe(
        partido => {
          this.partido = partido
          this.idLocal = partido?.idLocal
          this.idVisitante = partido?.idVisitante

          this.golesLocal = this.partido?.goles.filter(gol => gol.idParticipante === this.partido?.idLocal) || [];
          this.golesVisitante = this.partido?.goles.filter(gol => gol.idParticipante === this.partido?.idVisitante) || [];

          this.tarjetaLocal = this.partido?.tarjetas.filter(tarjeta => tarjeta.idParticipante === this.partido?.idLocal) || []
          this.tarjetaVisitante = this.partido?.tarjetas.filter(tarjeta => tarjeta.idParticipante === this.partido?.idVisitante) || []
        }
      );
    }
  }

  navigateToList(){
    this.router.navigate(['partidos'])
  }




}
