import { Component } from '@angular/core';

@Component({
  selector: 'app-random-choice-picker',
  templateUrl: './random-choice-picker.component.html',
  styleUrls: ['./random-choice-picker.component.scss']
})
export class RandomChoicePickerComponent {
  choices: string[] = [];
  areChoices = false;
  textEnter = ''
  choicePosition = 0;
  addChoice(e: Event) {
    const text = e.target as HTMLTextAreaElement
    this.textEnter = text.value
    let toChoice: string[] = []
    if (text.value.length > 0) {
      toChoice = this.textEnter.split(',')
      if (toChoice.includes('')) {
        toChoice.pop()
        this.choices.pop()
      }
    } else {
      this.choices = []
    }
    toChoice.forEach((x, i) => {
      if (x.length >= 1) {
        if (toChoice.length < this.choices.length) {
          this.choices.splice(toChoice.length, this.choices.length)
        }
        this.choices[i] = x
      }
    })
  }
}
