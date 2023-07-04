import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PedidosComponent } from './pedidos/pedidos.component';
@NgModule({
  declarations: [PedidosComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [PedidosComponent]
})
export class PizzeriaModule { }
