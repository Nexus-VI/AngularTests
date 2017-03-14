import { Component } from '@angular/core';

import { NodeSVG } from './node_svg.component';
import { NodeHTML } from './node_html.component';
import { Cable } from './cable.component';

export interface punto {
    x :number;
    y :number;
}

export interface Enlace {
  ini: punto;
  fin: punto;
} 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private NodeList_SVG: NodeSVG[] = [];
  private NodeList_HTML: NodeHTML[] = [];

  private CableList: Enlace[] = [];

  add_NodeSVG() {
    this.NodeList_SVG.push(new NodeSVG);
  }
  add_NodeHTML() {
    this.NodeList_HTML.push(new NodeHTML);
  }

  add_Cable(link?: Enlace) {
    //console.log('Cable ENVIADO '); 
    if (!link) {
      this.CableList.push({ini: {x: 100, y: 100}, fin: {x: 300, y: 300}});
    } else {
      this.CableList.push(link);
    }
  }
  

  
}
