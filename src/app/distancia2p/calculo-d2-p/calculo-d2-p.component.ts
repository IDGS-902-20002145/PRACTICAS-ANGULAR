import { Component } from '@angular/core';

@Component({
  selector: 'app-calculo-d2-p',
  templateUrl: './calculo-d2-p.component.html',
  styleUrls: ['./calculo-d2-p.component.css']
})
export class CalculoD2PComponent {
  x1!: number;
  y1!: number;
  x2!: number;
  y2!: number;
  resultado!: number;

  clacularDistancia() {
    this.resultado = Math.sqrt(Math.pow(this.x2 - this.x1, 2) + Math.pow(this.y2 - this.y1, 2));
  }
}
