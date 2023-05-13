import { Component, OnInit } from '@angular/core';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-animated-countdown',
  templateUrl: './animated-countdown.component.html',
  styleUrls: ['./animated-countdown.component.scss']
})
export class AnimatedCountdownComponent implements OnInit {
  counter = 3
  numbers = [0, 1, 2, 3]
  faAnglesRight = faAnglesRight
  ngOnInit(): void {
    this.startCountDown();
  }
  replayCountDown() {
    this.counter = 3;
    this.startCountDown();
  }
  startCountDown() {
    setTimeout(() => {
      if (this.counter >= 0) {
        this.startCountDown();
        this.counter--
      }
    }, 1000);
  }
}
