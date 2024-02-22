import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquiposComponent } from './equipos.component';
import { EquiposListComponent } from './equipos-list/equipos-list.component';
import { EquiposDetalleComponent } from './equipos-detalle/equipos-detalle.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: EquiposListComponent },
  { path: 'equipo/:id', component: EquiposDetalleComponent }
]



@NgModule({
  declarations: [
    EquiposComponent,
    EquiposListComponent,
    EquiposDetalleComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    EquiposComponent,
    RouterModule
  ]
})
export class EquiposModule { }
