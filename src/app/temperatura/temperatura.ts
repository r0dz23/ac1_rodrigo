import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-temperatura',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './temperatura.html',
  styleUrl: './temperatura.css'
})
export class Temperatura {
  celsius: number = 0;
  fahrenheit: number = 0;
  kelvin: number = 0;

  converter() {
    this.fahrenheit = (this.celsius * 9/5) + 32;
    this.kelvin = this.celsius + 273.15;
  }
}
