import { Component } from '@angular/core';

@Component({
  selector: '[node-svg]',
  template: `
    <svg:rect [attr.x]="posx" [attr.y]="posy" width="100" height="50" fill="yellow" stroke="navy" stroke-width="2" 
    (mousedown)="mouseDown($event)" (mousemove)="mouseMove($event)" (mouseup)="mouseUp($event)" (mouseleave)="mouseUp($event)" />`
})
export class NodeSVG {
  nombre = 'Nodo SVG';

  posx = 10;
  posy = 10;

  isSelected = false;
  last: MouseEvent;
  
  mouseDown(event: MouseEvent) {
    event.preventDefault();
    //console.log('mouse down' + event);
    this.isSelected = true;
    this.last = event;
  }
  mouseMove(event: MouseEvent) {
    //console.log('mouse move ' + event);
    if (!this.isSelected) {
      return;
    }
    this.posx += event.clientX - this.last.clientX;
    this.posy += event.clientY - this.last.clientY;
    this.last = event;
  }
  mouseUp(event) {
    //console.log('mouse leave ' + event);
    this.isSelected = false;
  }
}
