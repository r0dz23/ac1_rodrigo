import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-apolice',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './apolice.html',
  styleUrl: './apolice.css'
})
export class Apolice {
  nome: string = '';
  sexo: string = 'masculino';
  idade: number = 0;
  valor: number = 0;
  apolice: number = 0;

  calcular() {
    if (this.sexo == 'masculino' && this.idade <= 25) {
      this.apolice = this.valor * 0.15;
    } else if (this.sexo == 'masculino' && this.idade > 25) {
      this.apolice = this.valor * 0.10;
    } else {
      this.apolice = this.valor * 0.08;
    }
  }
}
