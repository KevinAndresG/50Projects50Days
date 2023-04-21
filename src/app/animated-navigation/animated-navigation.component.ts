import { Component } from '@angular/core';
import { faXmark, faWindowMinimize } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-animated-navigation',
  templateUrl: './animated-navigation.component.html',
  styleUrls: ['./animated-navigation.component.scss']
})
export class AnimatedNavigationComponent {
  faXmark = faXmark;
  faWindowMinimize = faWindowMinimize;
  open = false;
  closeNav() {
    this.open = !this.open
    console.log("This is - this.open = ", this.open);

  }
}
