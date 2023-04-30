import { Component, ElementRef, ViewChild, AfterViewInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-kinetic-loader',
  templateUrl: './kinetic-loader.component.html',
  styleUrls: ['./kinetic-loader.component.scss']
})
export class KineticLoaderComponent implements AfterViewInit, DoCheck {
  @ViewChild('up') up!: ElementRef;
  @ViewChild('down') down!: ElementRef;
  pause = false;
  pauseCopy = this.pause;
  rotateUp = 90;
  rotateUpCopy = 0;
  rotateDown = 0;
  up2: any
  down2: any
  ngDoCheck(): void {
    if (this.rotateUp !== this.rotateUpCopy) {
      this.rotateUpCopy = this.rotateUp
      setTimeout(() => {
        this.rotateUp += 180;
        setTimeout(() => {
          this.rotateDown += 180;
        }, 530);
      }, 1050);
    }
  }
  ngAfterViewInit(): void {
    this.up2 = this.up.nativeElement
    this.down2 = this.down.nativeElement
  }
}
