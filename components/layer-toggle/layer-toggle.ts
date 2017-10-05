import { NgModule, Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'edu-layer-toggle-controls',
  template: `
    <p *ngIf="!data">
      No data!
    </p>
    <section class="edu-layer-toggle-controls" *ngIf="data">
      <ul>
        <li *ngFor="let layer of data.layers">
          <span (click)="activate(layer)" [ngClass]="{active: layer.active}">{{layer.label}}</span>
        </li>
      </ul>
    </section>
  `,
  styles: [`
    .edu-layer-toggle-controls {
    }

    .edu-layer-toggle-controls:after {
        content: "";
        display: table;
        clear: both;
    }

    .edu-layer-toggle-controls ul {
      margin: 0;
      list-style-type: none;
    }

    .edu-layer-toggle-controls ul li {
      text-indent: -1rem;
      padding-left: 1rem;
    }

    .edu-layer-toggle-controls ul li span {
      cursor: pointer;
    }

    .edu-layer-toggle-controls ul li span:hover {
      opacity: .80;
    }

    .edu-layer-toggle-controls ul li span.active {
      font-weight: bold;
    }
  `]
})
export class LayerToggleControls implements OnInit {

  @Input() data: any;

  constructor() {}

  ngOnInit() {
  }

  activate(layer: any) {
    for (let i = 0; i < this.data.layers.length; i++) {
      let dataLayer = this.data.layers[i];
      if (!this.data.cumulative) {
        dataLayer.active = false
      }
      if (layer.label === dataLayer.label) {
        dataLayer.active = !dataLayer.active;
      }
    }
  }

}

@Component({
  selector: 'edu-layer-toggle-display',
  template: `
    <p *ngIf="!data">
      No data!
    </p>
    <section class="edu-layer-toggle-display" *ngIf="data">
      <img class="layer-background" [src]="data.backgroundUrl">
      <img class="layer" *ngFor="let layer of data.layers" [src]="layer.imageUrl" [ngClass]="{active: layer.active}">
    </section>
  `,
  styles: [`
    .edu-layer-toggle-display {
      position: relative;
    }
    .edu-layer-toggle-display img {
      display: block;
    }
    .edu-layer-toggle-display img.layer {
      display: block;
      opacity: 0;
      position: absolute;
      top: 0;
      left: 0;
      -webkit-transition: opacity .3s ease;
      transition: opacity .3s ease;
    }
    .edu-layer-toggle-display img.layer.active {
      opacity: 1;
      -webkit-transition: opacity .3s ease;
      transition: opacity .3s ease;
    }
  `]
})
export class LayerToggleDisplay implements OnInit {

  @Input() data: any;

  constructor() {}

  ngOnInit() {
  }

}

@NgModule({
    imports: [CommonModule],
    exports: [LayerToggleControls, LayerToggleDisplay],
    declarations: [LayerToggleControls, LayerToggleDisplay]
})
export class LayerToggleModule { }
