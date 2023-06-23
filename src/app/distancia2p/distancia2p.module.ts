import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculoD2PComponent } from './calculo-d2-p/calculo-d2-p.component';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CalculoD2PComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatRadioModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatListModule,
    MatSelectModule
  ],
  exports: [
    CalculoD2PComponent
  ]
})
export class Distancia2pModule { }
