import { Component, OnInit, DoCheck, HostListener, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-scroll-animation',
  templateUrl: './scroll-animation.component.html',
  styleUrls: ['./scroll-animation.component.scss']
})
export class ScrollAnimationComponent {
  cards: string[] = ['Content', 'Content', 'Content', 'Content', 'Content', 'Content', 'Content', 'Content', 'Content', 'Content', 'Content', 'Content', 'Content', 'Content', 'Content',]
  screenHeight: number = window.innerHeight;
  onScreenCards = Math.floor(this.screenHeight / 215);
  counter = 0;
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.onScreenCards = Math.floor(event.target.innerHeight / 215);
  }
  @ViewChild('myDiv') myDiv: any;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const elementPosition = this.myDiv.nativeElement.getBoundingClientRect().top + scrollPosition;
    const distanceFromBottom = windowHeight - (elementPosition - scrollPosition);
    this.onScreenCards = Math.floor(distanceFromBottom / 215)
  }
}
