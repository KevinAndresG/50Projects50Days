import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-incrementing-counter',
  templateUrl: './incrementing-counter.component.html',
  styleUrls: ['./incrementing-counter.component.scss']
})
export class IncrementingCounterComponent implements OnInit {
  contadores = [{ target: 12000, value: 0 }, { target: 5000, value: 0 }, { target: 7500, value: 0 }]
  ngOnInit() {
    setInterval(() => {
      this.contadores.forEach((counter) => {
        const increment = counter.target / 200;
        if (counter.value < counter.target) {
          counter.value = Math.ceil(counter.value + increment);
        } else {
          counter.value = counter.target;
        }
      });
    }, 0);
  }
}
