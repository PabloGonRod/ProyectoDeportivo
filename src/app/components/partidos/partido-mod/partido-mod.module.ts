import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartidoModComponent } from './partido-mod.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PartidoModComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PartidoModComponent
  ]
})
export class PartidoModModule { }
