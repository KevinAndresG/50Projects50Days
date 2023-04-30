import { Component, ElementRef, ViewChild, ViewChildren, OnInit, QueryList, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-drag-ndrop',
  templateUrl: './drag-ndrop.component.html',
  styleUrls: ['./drag-ndrop.component.scss']
})

export class DragNDropComponent implements OnInit, AfterViewInit {
  // elemento para rellenar
  @ViewChild('fill') fill!: ElementRef;
  // contenedores
  @ViewChildren('each') eachs!: QueryList<ElementRef>;
  containers = new Array(5)
  index = 0
  indexHov = 0
  draggableElement: any;
  eachsArray: any;
  hold = false
  invisible = false
  hovered = false
  fill2 = true
  // ViewChild & ViewChildren se reenderizan antes de iniciar por eso se hace aca
  ngAfterViewInit(): void {
    // capturar el elemento de relleno
    this.draggableElement = this.fill.nativeElement;
    this.draggableElement.addEventListener('dragstart', (e: Event) => {
      this.dragStart()
    });
    this.draggableElement.addEventListener('dragend', (e: Event) => {
      this.dragEnd()
    });
    // recorrer los contenedores vacios
    this.eachs.forEach((div, index) => {
      div.nativeElement.addEventListener('dragover', (e: Event) => {
        this.dragOver(e)
      })
      div.nativeElement.addEventListener('dragenter', (e: Event) => {
        this.dragEnter(index)
      })
      div.nativeElement.addEventListener('dragleave', (e: Event) => {
        this.dragLeave(e, index)
      })
      div.nativeElement.addEventListener('drop', (e: Event) => {
        this.dragDrop(index)
      })
    });
  }
  // mientras el mouse este ensima de un contenedor
  dragOver(e: Event) {
    e.preventDefault()
    this.hovered = true
    this.hold = true
  }
  // cuando el mouse entre al contenedor
  dragEnter(i: number) {
    this.fill2 = false
    this.indexHov = i
    this.hold = true
  }
  // cuando el mouse salga del contenedor
  dragLeave(e: Event, n: number) {
    e.preventDefault()
    this.hovered = false
    this.hold = true
  }
  // cuando se suelte el contenido
  dragDrop(n: number) {
    this.index = n
    this.hovered = false
    this.hold = false
    this.fill2 = true
    this.invisible = false
  }
  ngOnInit() {
  }
  // cuando se inicia a arrastrar presionando clic y moviendo
  dragStart() {
    this.hold = true
    this.invisible = true
  }
  // cuando se deja de arrastrar y se suelta el click
  dragEnd() {
    this.hold = false
    this.fill2 = true
  }
}
