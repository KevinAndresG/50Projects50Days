import { Component } from '@angular/core';

@Component({
  selector: 'app-progress-steps',
  templateUrl: './progress-steps.component.html',
  styleUrls: ['./progress-steps.component.scss']
})
export class ProgressStepsComponent {
  ActualStep: number = 1;
  steps: number[] = [1, 2, 3, 4];
  nextStep() {
    if (this.ActualStep < this.steps.length) {
      this.ActualStep++
    }
  }
  prevStep() {
    if (this.ActualStep > 1) {
      this.ActualStep--
    }
  }
}
