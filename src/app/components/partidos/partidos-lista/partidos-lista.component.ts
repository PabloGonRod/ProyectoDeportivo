import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Partido } from 'src/app/data/mock/partidosData';
import { DeportesServiceService } from 'src/app/data/service/deportes-service.service';

@Component({
  selector: 'app-partidos-lista',
  templateUrl: './partidos-lista.component.html',
  styleUrls: ['./partidos-lista.component.css']
})
export class PartidosListaComponent implements OnInit {

  partidos: Partido[] = []

  constructor(private service: DeportesServiceService, private router: Router){

  }

  ngOnInit(): void {
    this.service.getPartidos().subscribe(partidos =>
      this.partidos = partidos)
  }

}
