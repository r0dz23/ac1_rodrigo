import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './media.html',
  styleUrl: './media.css'
})
export class Media {
  ac1: number = 0;
  ac2: number = 0;
  ag: number = 0;
  af: number = 0;

  media: number = 0;
  resultado: string = '';

  calcular() {
    this.media = (this.ac1 * 0.15) + (this.ac2 * 0.30) + (this.ag * 0.10) + (this.af * 0.45);

    if (this.media >= 5) {
      this.resultado = 'Aprovado';
    } else {
      this.resultado = 'Reprovado';
    }
  }
}
