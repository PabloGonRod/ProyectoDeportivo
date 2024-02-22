import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartidoAddComponent } from './partido-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PartidoAddComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    PartidoAddComponent
  ]
})
export class PartidoAddModule { }
