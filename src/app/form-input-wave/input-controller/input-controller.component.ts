import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-controller',
  templateUrl: './input-controller.component.html',
  styleUrls: ['./input-controller.component.scss']
})
export class InputControllerComponent {
  @Input() moveUp = false
  @Input() reversaDown = false
  @Input() text = ""
}
