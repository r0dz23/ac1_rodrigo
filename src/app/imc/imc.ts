import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-imc',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './imc.html',
  styleUrl: './imc.css'
})
export class Imc {

  peso: number = 0;
  altura: number = 0;
  imc: number = 0;
  resultado: string = '';

  calcular() {

    this.imc = this.peso / (this.altura * this.altura);

    if (this.imc < 18.5) {
      this.resultado = "Abaixo do peso";
    } else if (this.imc < 25) {
      this.resultado = "Peso normal";
    } else if (this.imc < 30) {
      this.resultado = "Sobrepeso";
    } else if (this.imc < 35) {
      this.resultado = "Obesidade grau I";
    } else if (this.imc < 40) {
      this.resultado = "Obesidade grau II";
    } else {
      this.resultado = "Obesidade grau III";
    }

  }

}
