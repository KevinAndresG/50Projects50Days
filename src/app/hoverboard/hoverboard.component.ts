import { Component } from '@angular/core';

@Component({
  selector: 'app-hoverboard',
  templateUrl: './hoverboard.component.html',
  styleUrls: ['./hoverboard.component.scss']
})
export class HoverboardComponent {
  bgColor: string = 'rgb(29, 29, 29)';
  colors: string[] = [
    'rgb(230, 126, 34)',
    'rgb(46, 204, 113)',
    'rgb(142, 68, 173)',
    'rgb(231, 76, 60)',
    'rgb(52, 152, 219)',
    'rgb(255, 255, 0)'];
  squares = new Array(500);
  hovered = -1;
  onMouseEnter(i: number) {
    let rand = this.colors[Math.floor(Math.random() * this.colors.length)];
    this.hovered = i;
    this.bgColor = rand;
  }
  onMouseLeave() {
    this.hovered = -1;
    this.bgColor = 'rgb(29, 29, 29)';
  }
}
