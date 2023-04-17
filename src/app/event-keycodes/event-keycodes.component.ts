import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-event-keycodes',
  templateUrl: './event-keycodes.component.html',
  styleUrls: ['./event-keycodes.component.scss']
})
export class EventKeycodesComponent {
  keyPressed = false;
  keyData = {
    key: '',
    keyCode: 0,
    code: ''
  }
  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (event.key === ' ') {
      this.keyData.key = 'Space'
    } else {
      this.keyData.key = event.key
    }
    this.keyData.keyCode = event.keyCode
    this.keyData.code = event.code
    this.keyPressed = true
  }
}
