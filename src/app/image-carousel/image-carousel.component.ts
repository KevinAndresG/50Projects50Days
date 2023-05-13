import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss']
})
export class ImageCarouselComponent implements OnInit, DoCheck {
  images: string[] = [
    'https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1458&q=80',
    'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    'https://images.unsplash.com/photo-1599423300746-b62533397364?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    'https://images.unsplash.com/photo-1599561046251-bfb9465b4c44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1492&q=80'
  ];
  counter = 0;
  position = 0;
  click = false
  ngDoCheck(): void {
    if (this.counter === this.images.length) {
      this.counter = 0
      // this.swipeCarrouselAuto()
    }
  }
  ngOnInit(): void {
    this.swipeCarrouselAuto()
  }
  swipeCarrouselAuto() {
    if (!this.click) {
      setTimeout(() => {
        if (this.counter < this.images.length) {
          this.position -= 500;
          if (this.position < -1500) {
            this.position = 0
          }
          this.counter++
          this.swipeCarrouselAuto();
        }
      }, 2500);
    }
  }
  swipeCarrouselClick(side: string) {
    this.click = true
    setTimeout(() => {
      this.click = false
    }, 1000);
    if (side === 'next') {
      this.counter++;
      this.position -= 500
    } else if (side === 'prev') {
      this.counter--;
      this.position += 500
    }
    if (this.position < -1500) {
      this.position = 0
    }
    else if (this.position > 0) {
      this.position = -1500
    }
  }
}
