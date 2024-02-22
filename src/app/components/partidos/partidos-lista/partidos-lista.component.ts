import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Partido } from 'src/app/data/mock/partidosData';
import { PartidosServiceService } from 'src/app/data/service/partidos-service.service';

@Component({
  selector: 'app-partidos-lista',
  templateUrl: './partidos-lista.component.html',
  styleUrls: ['./partidos-lista.component.css']
})
export class PartidosListaComponent implements OnInit {

  partidos: Partido[] = []

  constructor(private service: PartidosServiceService, private router: Router){

  }

  ngOnInit(): void {
    this.service.getPartidos().subscribe(partidos =>
      this.partidos = partidos)
  }

  navigateToMod(){
    this.router.navigate(['mod'])
  }

  removePartidos(index: number | undefined){
    this.service.removePartido(index)
  }

}
