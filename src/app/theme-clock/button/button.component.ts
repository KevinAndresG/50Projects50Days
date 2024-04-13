import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() text = '';
  @Input() mode = '';
  dark = false;
  @Input() onClick: Function = () => {};

  @Output() darkTheme = new EventEmitter<boolean>();
  changeTheme() {
    this.darkTheme.emit(!this.dark);
    this.dark = !this.dark;
  }
}
