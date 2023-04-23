import { Component } from '@angular/core';

@Component({
  selector: 'app-drink-water',
  templateUrl: './drink-water.component.html',
  styleUrls: ['./drink-water.component.scss']
})
export class DrinkWaterComponent {
  goal = 2000;
  glass = { value: 250, frac: 0.25 };
  remained = 2
  glassesComplete = -1
  numeroVasos: number[] = [1, 2, 3, 4, 5, 6, 7, 8]
  readyPorcent = 0;
  textHeight = 50
  porcentText = 30
  readyPorcentCopy = this.readyPorcent;
  fillGoal(cantidad: number) {
    this.porcentText = 0
    let cant = cantidad
    let mililitros = this.glass.value * (cant + 1)
    this.readyPorcent = (mililitros * 100) / this.goal;
    if (this.readyPorcent === 100) {
      this.textHeight = -5
    } else {
      this.textHeight = 50 - (this.readyPorcent / 2)
    }
    if (this.glassesComplete !== cant) {
      if (cant > this.glassesComplete) {
        this.remained = 2 - (this.glass.frac * (cant + 1))
      } else {
        this.remained = this.remained + this.glass.frac * (this.glassesComplete - cant)
      }
      this.glassesComplete = cant
    }
    else if (this.glassesComplete === cant) {
      if (this.glassesComplete === 0) {
        this.glassesComplete = -1
        this.remained = 2
        this.textHeight = 50
        this.readyPorcent = 0
        this.porcentText = 30
      }
    }
  }
}
