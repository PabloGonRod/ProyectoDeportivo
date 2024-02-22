import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipo } from 'src/app/data/mock/equiposMock';
import { Partido } from 'src/app/data/mock/partidosData';
import { EquiposServiceService } from 'src/app/data/service/equipos-service.service';

@Component({
  selector: 'app-equipos-detalle',
  templateUrl: './equipos-detalle.component.html',
  styleUrls: ['./equipos-detalle.component.css']
})
export class EquiposDetalleComponent implements OnInit {

  id: string | undefined
  nombre: string | undefined
  equipoDet: Equipo | undefined
  partidos: Partido[] | undefined = [];


  constructor(private service: EquiposServiceService, private router: Router, private activateRoute: ActivatedRoute){}

  ngOnInit(): void {
    let idParam = this.activateRoute.snapshot.params[('id')]
    this.id = idParam
    this.service.getEquipo(this.id).subscribe(
      equipo => {
        this.id = equipo?.id,
        this.nombre = equipo?.nombre
        this.equipoDet = equipo,
        this.partidos = this.partidos = this.equipoDet?.partidos.filter(equipo => equipo.idLocal === this.equipoDet?.id || equipo.idVisitante === this.equipoDet?.id) || [];
      }
    )
  }

  navigateToList(){
    this.router.navigate(['equipos'])
  }
}
