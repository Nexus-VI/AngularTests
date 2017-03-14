import { Component, EventEmitter, Input, Output } from '@angular/core';

interface connector {
  id :string;
}

export interface punto {
    x :number;
    y :number;
}

export interface Enlace {
  ini: punto;
  fin: punto;
}

@Component({
  selector: '[node-svg]',
  template: `
    <svg:g (mousedown)="Node_mouseDown($event)" (window:mousemove)="mouseMove($event)" (mouseup)="Node_mouseUp($event)">
      <svg:rect rx="10" height="50" width="100" [attr.x]="posx" [attr.y]="posy" stroke-width="1.5" stroke="#482816" fill="#FFFF91"/>
      <svg:text xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="17" [attr.x]="posx +10" [attr.y]="posy +30" stroke-opacity="null" stroke-width="0" stroke="#482816" fill="#000000">{{nombre}}</svg:text>
    </svg:g>
    <svg:ellipse *ngFor="let conn of input_connectors" ry="5" rx="5" [attr.cx]="posx" [attr.cy]="posy +25" stroke-width="1.5" stroke="#482816" fill="#ffffff" (window:mouseup)="CableUp($event)"/>
    <svg:ellipse *ngFor="let conn of output_connectors" ry="5" rx="5" [attr.cx]="posx +100" [attr.cy]="posy +25" stroke-width="1.5" stroke="#482816" fill="#ffffff" (mousedown)="CableDown($event)"/>
    <svg:line *ngIf="isCabling" [attr.x1]="inicio.x" [attr.y1]="inicio.y" [attr.x2]="fin.x" [attr.y2]="fin.y" stroke-width="1.5" stroke="#482816" fill="#ffffff" />`
})

export class NodeSVG {
  @Output() onCable = new EventEmitter<Enlace>();

  nombre = 'Nodo SVG';

  posx = 10;
  posy = 10;

  input_connectors :connector[] = [{id:"entrada1"}]
  output_connectors :connector[] = [{id:"salida1"}]

  isMoving = false;
  isCabling = false;
  lastEvent: MouseEvent;

  //Para linea de dibujo temporal
  inicio: punto = {x: this.posx +100, y: this.posy +25};
  fin: punto = {x: this.posx +100, y: this.posy +25};
  
  Node_mouseDown(event: MouseEvent) {
    event.preventDefault();
    //console.log('mouse down' + event);
    this.isMoving = true;
    this.lastEvent = event;
  }
  mouseMove(event: MouseEvent) {
    //console.log('mouse move ' + event);
    if (this.isMoving) {
      this.posx += event.clientX - this.lastEvent.clientX;
      this.posy += event.clientY - this.lastEvent.clientY;
      this.lastEvent = event;
    }
    if (this.isCabling) {
      this.fin.x += event.clientX - this.lastEvent.clientX;
      this.fin.y += event.clientY - this.lastEvent.clientY;
      this.lastEvent = event;
    }
  }
  Node_mouseUp(event) {
    //console.log('mouse leave ' + event);
    this.isMoving = false;
  }

  CableDown(event) {
    console.log('Cable mouse Down ' + event);
    this.isCabling = true;
    this.lastEvent = event;

    this.inicio.x = this.posx +100;
    this.inicio.y = this.posy +25;
    this.fin.x = this.posx +100;
    this.fin.y = this.posy +25;
  }
  CableUp(event :MouseEvent) {
    if (this.isCabling) {
      console.log('Cable mouse Up ' + event); 
      this.isCabling = false;
      this.lastEvent = event;
      
      console.log('Cable mouse Up ' + event.currentTarget);

      this.onCable.emit({ini: this.inicio, fin: this.fin});
    }
  }
}
