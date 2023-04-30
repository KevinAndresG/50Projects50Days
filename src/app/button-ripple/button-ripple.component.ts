import { Component } from '@angular/core';

@Component({
  selector: 'app-button-ripple',
  templateUrl: './button-ripple.component.html',
  styleUrls: ['./button-ripple.component.scss']
})
export class ButtonRippleComponent {
  expand = false
  onClick(event: MouseEvent) {
    this.expand = true
    setTimeout(() => {
      this.expand = false
    }, 500);
  }
}
