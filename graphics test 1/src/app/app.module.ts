import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NodeSVG } from './node_svg.component';
import { NodeHTML } from './node_html.component';
import { Cable } from './cable.component';

@NgModule({
  declarations: [
    AppComponent, NodeHTML, NodeSVG, Cable
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
