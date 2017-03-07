import { Component } from '@angular/core';

@Component({
  selector: 'node-html',
  template: `
    <div style="width:100px; height:50px; background:yellow; font-family:arial; font-weight:bold; color:navy; position: absolute;" [style.left.px]="posx" [style.top.px]="posy" 
    (mousedown)="mouseDown($event)" (mousemove)="mouseMove($event)" (mouseup)="mouseUp($event)" (mouseleave)="mouseUp($event)">{{nombre}}</div>`
})
export class NodeHTML {
  nombre = 'Nodo HTML';

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
