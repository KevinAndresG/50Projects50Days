import { Component, ElementRef, ViewChild } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-double-click-heart',
  templateUrl: './double-click-heart.component.html',
  styleUrls: ['./double-click-heart.component.scss']
})
export class DoubleClickHeartComponent {
  @ViewChild('parentDiv') parentDivRef!: ElementRef;
  faHeart = faHeart
  lastClickTime: Date | any | number = 0;
  clicks = 0
  likes = 0
  doubleClick(event: MouseEvent) {
    const currentTime = new Date();
    console.log("This is - this.clicks = ", this.clicks);
    if (this.clicks <= 2) {
      this.clicks++
    }
    if (this.lastClickTime) {
      const timeDiff = currentTime.getTime() - this.lastClickTime;
      if (timeDiff < 1000) {
        if (this.clicks === 2) {
          this.onMouseClick(event);
          this.lastClickTime = undefined;
        }
        setTimeout(() => {
          this.showPopup = false
        }, 1000);
      } else {
        this.clicks = 1
      }
    }
    this.lastClickTime = currentTime.getTime();
  }
  showPopup = false;
  popupPosition = { x: 0, y: 0 };

  onMouseClick(event: MouseEvent) {
    const parentPosition = this.parentDivRef.nativeElement.getBoundingClientRect();
    const x = event.clientX - (parentPosition.left + 7);
    const y = event.clientY - (parentPosition.top + 7);
    this.popupPosition = { x, y };
    this.showPopup = true;
    this.clicks = 0
    this.likes++
  }
}
