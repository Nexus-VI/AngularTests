import { Component, Input, Output } from '@angular/core';

interface punto {
    x :number;
    y :number;
}

@Component({
  selector: '[cable]',
  template: `
    <svg:line [attr.x1]="inicio.x" [attr.y1]="inicio.y" [attr.x2]="(fin.x - inicio.x) / 2 + inicio.x" [attr.y2]="inicio.y" stroke-width="1.5" stroke="#482816" fill="#ffffff" />
    <svg:line [attr.x1]="(fin.x - inicio.x) / 2 + inicio.x" [attr.y1]="inicio.y" [attr.x2]="(fin.x - inicio.x) / 2 + inicio.x" [attr.y2]="fin.y" stroke-width="1.5" stroke="#482816" fill="#ffffff" />
    <svg:line [attr.x1]="(fin.x - inicio.x) / 2 + inicio.x" [attr.y1]="fin.y" [attr.x2]="fin.x" [attr.y2]="fin.y" stroke-width="1.5" stroke="#482816" fill="#ffffff" />
    <svg:ellipse ry="5" rx="5" [attr.cx]="inicio.x" [attr.cy]="inicio.y" stroke-width="1.5" stroke="#482816" fill="#ffffff" (mousedown)="mouseDown_INI($event)" (window:mousemove)="mouseMove($event)" (window:mouseup)="mouseUp($event)"/>
    <svg:ellipse ry="5" rx="5" [attr.cx]="fin.x" [attr.cy]="fin.y" stroke-width="1.5" stroke="#482816" fill="#ffffff" (mousedown)="mouseDown_FIN($event)" (window:mousemove)="mouseMove($event)" (window:mouseup)="mouseUp($event)"/>`
})

export class Cable {
  nombre = 'Cable';

  @Input()
  inicio: punto;
  @Input()
  fin: punto;

  isMoving_INI = false;
  isMoving_FIN = false;
  lastEvent: MouseEvent;

  //ptos_paso: punto[] = [];
  mouseDown_INI(event: MouseEvent) {
    event.preventDefault();
    console.log('mouseDOWN Cable INI' + event);
    this.isMoving_INI = true;
    this.lastEvent = event;
  }

  mouseDown_FIN(event: MouseEvent) {
    event.preventDefault();
    //console.log('mouseDOWN Cable FIN' + event);
    this.isMoving_FIN = true;
    this.lastEvent = event;
  }
  mouseMove(event: MouseEvent) {
    if (this.isMoving_INI) {
      //console.log('mouse move' + event);
      this.inicio.x += event.clientX - this.lastEvent.clientX;
      this.inicio.y += event.clientY - this.lastEvent.clientY;
      this.lastEvent = event;
    }
    if (this.isMoving_FIN) {
      //console.log('mouse move' + event);
      this.fin.x += event.clientX - this.lastEvent.clientX;
      this.fin.y += event.clientY - this.lastEvent.clientY;
      this.lastEvent = event;
    }
  }
  mouseUp(event) {
    //console.log('mouseUP Cable ' + event);
    this.isMoving_INI = false;
    this.isMoving_FIN = false;
  }
}