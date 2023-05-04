import { Component } from '@angular/core';

@Component({
  selector: 'app-double-vertical-slider',
  templateUrl: './double-vertical-slider.component.html',
  styleUrls: ['./double-vertical-slider.component.scss']
})
export class DoubleVerticalSliderComponent {
  right = 0;
  left = -300;
  images: string[] = ['https://images.unsplash.com/photo-1508768787810-6adc1f613514?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e27f666…&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1519981593452-666cf05569a9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=90ed8055f06493290dad8da9584a13f7&auto=format&fit=crop&w=715&q=80',
    'https://images.unsplash.com/photo-1486899430790-61dbf6f6d98b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8ecdee5d1b3ed78ff16053b0227874a2&auto=format&fit=crop&w=1002&q=80',
    'https://images.unsplash.com/photo-1510942201312-84e7962f6dbb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=da4ca7a78004349f1b63f257e50e4360&auto=format&fit=crop&w=1050&q=80'
  ]
  upBack() {
    this.right -= 100;
    this.left += 100;
    if (this.right === -400) {
      this.right = 0
      this.left = -300;
    }
  }
  downBack() {
    this.right += 100;
    this.left -= 100;
    if (this.right === 100) {
      this.right = -300
      this.left = 0;
    }
  }
}
