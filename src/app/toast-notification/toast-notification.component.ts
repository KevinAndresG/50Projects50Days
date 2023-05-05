import { Component } from '@angular/core';

@Component({
  selector: 'app-toast-notification',
  templateUrl: './toast-notification.component.html',
  styleUrls: ['./toast-notification.component.scss']
})
export class ToastNotificationComponent {
  colors: string[] = ['rgb(255, 0, 0)', 'rgb(102, 51, 153)', 'rgb(0, 128, 0)', 'rgb(102, 51, 179)']
  texts: string[] = ['Message One', 'Message Two', 'Message Three', 'Message Four']
  noti: any = []
  toShow: any = []
  count = 0
  showNotification() {
    const colPos = Math.floor(Math.random() * this.colors.length)
    const textPos = Math.floor(Math.random() * this.texts.length)
    let col = this.colors[colPos]
    let text = this.texts[textPos]
    let toAdd = { message: text, color: col }
    this.toShow.push(toAdd)
    this.count++;
    setTimeout(() => {
      this.toShow.shift();
    }, 3500);
  }
}
