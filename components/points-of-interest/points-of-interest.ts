import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

// import { UnlvOePoiModalComponent } from './unlv-oe-poi-modal.component';

@Component({
  selector: 'unlv-oe-poi-modal',
  template: `
    <div class="poi-modal-overlay" (click)="closeModal()"></div>
    <div class="poi-modal-outer">
      <div class="poi-modal-inner">
        <button class="close" (click)="closeModal()"><span>+</span></button>
        <h4 *ngIf="modalData.label">{{modalData.label}}</h4>
        <p>
          <img [src]="modalData.imagePath" *ngIf="modalData.imagePath">
        </p>
        <!-- <p class="embed-container "*ngIf="modalData.embedPath">
          <iframe width="560" height="315" [src]="modalData.embedPath" frameborder="0" allowfullscreen></iframe>
        </p> -->
        <p *ngIf="modalData.copy">
          {{modalData.copy}}
        </p>
      </div>
    </div>
  `,
  styleUrls: ['points-of-interest-modal.css']
})
export class UnlvOePoiModal implements OnInit {

  @Input() modalData: any;

  @Output() modalChange = new EventEmitter();

  constructor(
  ) {}

  ngOnInit() {
  }

  modalActive:boolean;

  closeModal() {
    this.modalActive = false;
    this.modalChange.emit({
      value: this.modalActive
    })
  }

}

@Component({
  selector: 'unlv-oe-poi',
  template: `
  <section class="poi-row">
    <div class="poi-wrapper">
      <img class="background" [src]="poiData.backgroundPath">
      <div class="point" *ngFor="let point of poiData.points; let i = index" [style.top.%]="point.top" [style.left.%]="point.left" (click)="pointClick(point, i)">
        <span class="pulse"></span>
        <button></button>
        <span class="label" *ngIf="point.label">{{point.label}}</span>
      </div>
      <unlv-oe-poi-modal *ngIf="poiModal" [modalData]="poiModalData" (modalChange)="modalChange($event);"></unlv-oe-poi-modal>
    </div>
  </section>
  `,
  styleUrls: ['points-of-interest.css'],
  directives: [
    UnlvOePoiModal
  ]
})
export class UnlvOePoi implements OnInit {

  @Input() data: any;

  private sub: any;

  private poiData: any;

  constructor(
    public router: Router
  ) {}

  ngOnInit() {
    this.poiData = this.data;
  }

  modalChange(event) {
    this.poiModal = event.value;
  }

  poiModal: boolean = false;

  poiModalData: any;

  pointClick(data, index) {
    this.poiModal = false;
    if (data.route) {
      this.router.navigate([data.route]);
      // var newParam = Object.keys(this.currentParams).length;
      // this.currentParams[newParam] = index;
      // this.router.navigate([""], { queryParams: this.currentParams });
    } else {
      this.poiModal = true;
      this.poiModalData = data;
    }
  }

}
