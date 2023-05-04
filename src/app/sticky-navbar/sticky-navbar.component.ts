import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-sticky-navbar',
  templateUrl: './sticky-navbar.component.html',
  styleUrls: ['./sticky-navbar.component.scss']
})
export class StickyNavbarComponent {
  down = false
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.pageYOffset > 400) {
      this.down = true
    } else {
      this.down = false
    }
  }
}
