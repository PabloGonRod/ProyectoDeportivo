import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartidoAddComponent } from './partido-add.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PartidoAddComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PartidoAddComponent
  ]
})
export class PartidoAddModule { }
