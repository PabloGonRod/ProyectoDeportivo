import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartidosComponent } from './components/partidos/partidos.component';
import { EquiposComponent } from './components/equipos/equipos.component';
import { SucesosComponent } from './components/sucesos/sucesos.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'partidos', component: PartidosComponent,
  loadChildren: () => import('./components/partidos/partidos.module').then(m => m.PartidosModule)},
  {path: 'equipos', component: EquiposComponent,
  loadChildren: () => import('./components/equipos/equipos.module').then(m => m.EquiposModule)},
  {path: 'sucesos', component: SucesosComponent,
  loadChildren: () => import('./components/sucesos/sucesos.module').then(m => m.SucesosModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
