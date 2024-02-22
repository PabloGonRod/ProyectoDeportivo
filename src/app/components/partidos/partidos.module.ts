import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartidosComponent } from './partidos.component';
import { PartidosListaComponent } from './partidos-lista/partidos-lista.component';
import { RouterModule, Routes } from '@angular/router';
import { PartidoDetalleComponent } from './partido-detalle/partido-detalle.component';
import { PartidoDetalleModule } from './partido-detalle/partido-detalle.module';
import { PartidoAddComponent } from './partido-add/partido-add.component';
import { PartidoAddModule } from './partido-add/partido-add.module';
import { PartidoModComponent } from './partido-mod/partido-mod.component';
import { PartidoModModule } from './partido-mod/partido-mod.module';

const routes: Routes = [
  {path: '', component: PartidosListaComponent},
  {path: 'partido/:id', component: PartidoDetalleComponent,
  loadChildren:() => import('./partido-detalle/partido-detalle.module').then(m => m.PartidoDetalleModule)},
  {path: 'add', component: PartidoAddComponent,
  loadChildren:() => import('./partido-add/partido-add.module').then(m => m.PartidoAddModule)},
  {path: 'mod/:id', component: PartidoModComponent}
]


@NgModule({
  declarations: [
    PartidosComponent,
    PartidosListaComponent
  ],
  imports: [
    CommonModule,
    PartidoDetalleModule,
    PartidoAddModule,
    PartidoModModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    PartidosComponent,
    RouterModule
  ]
})
export class PartidosModule { }
