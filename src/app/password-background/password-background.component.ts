import { Component } from '@angular/core';

@Component({
  selector: 'app-password-background',
  templateUrl: './password-background.component.html',
  styleUrls: ['./password-background.component.scss']
})
export class PasswordBackgroundComponent {
  blurLevel = 10;
  value = ''
  valueCpy = -1
  passwordInput() {
    console.log("This is - this.value.length = ", this.value.length);
    console.log("This is -  this.valueCpy = ", this.valueCpy);
    if (this.value.length === 10) {
      this.valueCpy = this.value.length
    }
    if (this.value.length > this.valueCpy) {
      this.valueCpy = this.value.length
      this.blurLevel--;
    } else if (this.value.length <= this.valueCpy) {
      this.valueCpy = this.value.length
      if (this.blurLevel < 10) {
        this.blurLevel++;
      }
    }
    console.log("This is - this.blurLevel = ", this.blurLevel);
  }
}
