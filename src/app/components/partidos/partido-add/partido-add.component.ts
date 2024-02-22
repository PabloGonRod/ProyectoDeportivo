import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Gol, Partido, Tarjeta } from 'src/app/data/mock/partidosData';
import { PartidosServiceService } from 'src/app/data/service/partidos-service.service';

@Component({
  selector: 'app-partido-add',
  templateUrl: './partido-add.component.html',
  styleUrls: ['./partido-add.component.css']
})
export class PartidoAddComponent implements OnInit {

  partidos: Partido[] = []
  partido: Partido | undefined

  idLocal: String | undefined
  idVisitante: String | undefined
  goles: Gol[] = []
  tarjetas: Tarjeta[] = []
  fecha: string = ''

  formularioPartido: FormGroup

  constructor(private service: PartidosServiceService, private router: Router, private fb : FormBuilder){}

  ngOnInit(): void {
    this.formularioPartido = this.fb.group({
      idLocal: ['', [Validators.required, Validators.minLength(5)]],
      idVisitante: ['', [Validators.required]],
      fecha: ['', [Validators.required]]
    })
  }

  onSubmit(){
    if (this.formularioPartido.valid) {
      // Procesar el formulario submit
      alert(this.formularioPartido.value);
    } else {
      // Mostrar errores de validación
      alert('Formulario no válido');
    }
  }

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
