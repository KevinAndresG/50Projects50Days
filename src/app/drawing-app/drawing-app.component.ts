import { Component, AfterViewInit, ViewChild, ElementRef, DoCheck } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-drawing-app',
  templateUrl: './drawing-app.component.html',
  styleUrls: ['./drawing-app.component.scss']
})
export class DrawingAppComponent implements AfterViewInit, DoCheck {
  ngDoCheck(): void {
    if (this.brushSize > 50) {
      this.brushSize = 50
    }
    else if (this.brushSize < 10) {
      this.brushSize = 10
    }
  }
  @ViewChild('canvas') canvasRef!: ElementRef;
  brushSize = 10
  brushColor = 'black'
  ctx: any;
  canvas: any;
  ngAfterViewInit() {
    this.canvas = this.canvasRef.nativeElement;
    this.ctx = this.canvas.getContext('2d');
    let initialX: any;
    let initialY: any;
    const drawFunc = (cursorX: any, cursorY: any) => {
      this.ctx.beginPath();
      this.ctx.strokeStyle = this.brushColor;
      this.ctx.moveTo(initialX, initialY)
      this.ctx.lineWidth = this.brushSize;
      this.ctx.lineCap = 'round';
      this.ctx.lineJoin = 'round';
      this.ctx.lineTo(cursorX, cursorY);
      this.ctx.stroke();

      initialX = cursorX;
      initialY = cursorY;
    }
    const mouseDown = (e: MouseEvent) => {
      this.canvas.addEventListener('mousemove', mouseMove)
      initialX = e.offsetX
      initialY = e.offsetY
      drawFunc(initialX, initialY);
    }
    const mouseUp = () => {
      this.canvas.removeEventListener("mousemove", mouseMove)
    }
    const mouseMove = (e: MouseEvent) => {
      drawFunc(e.offsetX, e.offsetY);
    }
    this.canvas.addEventListener('mousedown', mouseDown)
    this.canvas.addEventListener('mouseup', mouseUp)
  }
  changeBrushSize(plusOrLess: string) {
    if (plusOrLess === 'plus') {
      this.brushSize += 2
    }
    else if (plusOrLess === 'less') {
      this.brushSize -= 2
    }
  }
  changeColor(e: Event) {
    const color = e.target as HTMLInputElement;
    this.brushColor = color.value;
  }
  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
