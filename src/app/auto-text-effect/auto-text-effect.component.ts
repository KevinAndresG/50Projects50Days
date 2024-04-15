import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auto-text-effect',
  templateUrl: './auto-text-effect.component.html',
  styleUrls: ['./auto-text-effect.component.scss'],
})
export class AutoTextEffectComponent implements OnInit {
  ngOnInit(): void {
    this.showItem(0);
  }
  speed = 1;
  speedCpy = 1;
  text = 'We Love Programming!'.split('');
  delay = 3000;
  currentIndex = 0;
  changeSpeed() {
    if (this.speed > this.speedCpy && this.speed <= 10) {
      this.delay = 3000 - (this.speed - 1) * 300;
      this.speedCpy = this.speed;
    } else if (this.speed < this.speedCpy && this.speed >= 1) {
      this.delay = 3000 - (this.speed - 1) * 300;
      this.speedCpy = this.speed;
    }
  }

  showItem(i: number) {
    this.currentIndex = i;
    if (this.currentIndex <= this.text.length - 1) {
      if (this.currentIndex === i) {
        setTimeout(() => {
          this.currentIndex++;
          this.showItem(this.currentIndex);
        }, this.delay / 10);
      }
    } else {
      this.currentIndex = 0;
      this.showItem(0);
    }
  }
}
