import { Component } from '@angular/core';

import { NodeSVG } from './node_svg.component';
import { NodeHTML } from './node_html.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private NodeList_SVG: NodeSVG[] = [];
  private NodeList_HTML: NodeHTML[] = [];

  add_NodeSVG() {
    this.NodeList_SVG.push(new NodeSVG);
  }
  add_NodeHTML() {
    this.NodeList_HTML.push(new NodeHTML);
  }

  
}
