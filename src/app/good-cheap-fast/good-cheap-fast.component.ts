import { Component } from '@angular/core';

@Component({
  selector: 'app-good-cheap-fast',
  templateUrl: './good-cheap-fast.component.html',
  styleUrls: ['./good-cheap-fast.component.scss']
})
export class GoodCheapFastComponent {
  // good = false;
  // cheap = false;
  // fast = false;
  toggles = [false, false, false]
  checkeds = 0;
  toggle(e: Event) {
    const val = e.target as HTMLInputElement
    if (val.name === 'good' && val.checked) {
      if (this.checkeds < 2) {
        // this.toggles[this.checkeds] = true
        this.checkeds++;
      } else {
        this.toggles[2] = false
      }
    } else if (val.name === 'good' && !val.checked) {
      this.checkeds--;
    }
    if (val.name === 'cheap' && val.checked) {
      if (this.checkeds < 2) {
        // this.toggles[this.checkeds] = true
        this.checkeds++;
      } else {
        this.toggles[0] = false
      }
    } else if (val.name === 'cheap' && !val.checked) {
      this.checkeds--;
    }
    if (val.name === 'fast' && val.checked) {
      if (this.checkeds < 2) {
        // this.toggles[this.checkeds] = true
        this.checkeds++;
      } else {
        this.toggles[1] = false
      }
    } else if (val.name === 'fast' && !val.checked) {
      this.checkeds--;
    }
    console.log(this.checkeds);
  }

}
