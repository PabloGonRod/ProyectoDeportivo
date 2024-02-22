import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Equipo } from 'src/app/data/mock/equiposMock';
import { EquiposServiceService } from 'src/app/data/service/equipos-service.service';

@Component({
  selector: 'app-equipos-list',
  templateUrl: './equipos-list.component.html',
  styleUrls: ['./equipos-list.component.css']
})
export class EquiposListComponent implements OnInit {

  equipos: Equipo[] = []

  constructor(private service: EquiposServiceService, private router: Router){}
  ngOnInit(): void {
    this.service.getEquipos().subscribe(equipos =>
      this.equipos = equipos
      )
  }

}
