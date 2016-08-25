import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'oe-layer-toggle-controls',
  template: `
    <p *ngIf="!data">
      No data!
    </p>
    <section class="oe-layer-toggle-controls" *ngIf="data">
      <ul>
        <li *ngFor="let layer of data.layers">
          <span (click)="activate(layer)" [ngClass]="{active: layer.active}">{{layer.label}}</span>
        </li>
      </ul>
    </section>
  `,
  styles: [`
    .oe-layer-toggle-controls {
      padding: 0 1rem 1rem;
      height: 100%;
    }
    .oe-layer-toggle-controls:after {
        content: "";
        display: table;
        clear: both;
    }
    .oe-layer-toggle-controls ul {
      margin: 0;
      padding: 1rem 0 0;
      list-style-type: none;
    }
    .oe-layer-toggle-controls ul li {
      text-indent: -1rem;
      padding-left: 1rem;
    }
    .oe-layer-toggle-controls ul li span {
      cursor: pointer;
    }
    .oe-layer-toggle-controls ul li span:hover {
      opacity: .80;
    }
    .oe-layer-toggle-controls ul li span.active {
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
  selector: 'oe-layer-toggle-display',
  template: `
    <p *ngIf="!data">
      No data!
    </p>
    <section class="oe-layer-toggle-display" *ngIf="data">
      <img [src]="data.backgroundPath">
      <img class="layer" *ngFor="let layer of data.layers" [src]="layer.imagePath" [ngClass]="{active: layer.active}">
    </section>
  `,
  styles: [`
    .oe-layer-toggle-display {
      position: relative;
    }
    .oe-layer-toggle-display img {
      display: block;
    }
    .oe-layer-toggle-display img.layer {
      display: block;
      opacity: 0;
      position: absolute;
      top: 0;
      left: 0;
      -webkit-transition: opacity .3s ease;
      transition: opacity .3s ease;
    }
    .oe-layer-toggle-display img.layer.active {
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
