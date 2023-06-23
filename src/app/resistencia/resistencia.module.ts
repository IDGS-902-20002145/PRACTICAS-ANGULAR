import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculosRComponent } from './calculos-r/calculos-r.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CalculosRComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CalculosRComponent
  ]
})
export class ResistenciaModule { }
