import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VentasCComponent } from './ventas-c/ventas-c.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    VentasCComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    VentasCComponent
  ]
})
export class CinepolisModule { }
