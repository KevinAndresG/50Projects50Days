import { Component } from '@angular/core';
@Component({
  selector: 'app-form-input-wave',
  templateUrl: './form-input-wave.component.html',
  styleUrls: ['./form-input-wave.component.scss']
})
export class FormInputWaveComponent {
  moveE = false
  reversaE = false
  moveP = false
  reversaP = false
  moveEmail() {
    this.moveE = true
    this.reversaE = false
  }
  movePass() {
    this.moveP = true
    this.reversaP = false
  }
  notMoveEmail() {
    this.moveE = false
    this.reversaE = true
  }
  notMovePass() {
    this.reversaP = true
    this.moveP = false
  }
}
