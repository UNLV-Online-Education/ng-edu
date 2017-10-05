import { NgModule, Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'edu-poi-modal',
  template: `
    <div class="poi-modal-overlay" (click)="closeModal()"></div>
    <div class="poi-modal-outer">
      <div class="poi-modal-inner">
        <button class="close" (click)="closeModal()"><span>+</span></button>
        <h4 *ngIf="modalData.label">{{modalData.label}}</h4>
        <p>
          <img [src]="modalData.imageUrl" *ngIf="modalData.imageUrl">
        </p>
        <p class="embed-container "*ngIf="modalData.embedUrl">
          <iframe width="560" height="315" [src]="iframeUrl(modalData.embedUrl)" frameborder="0" allowfullscreen></iframe>
        </p>
        <p *ngIf="modalData.text">
          {{modalData.text}}
        </p>
      </div>
    </div>
  `,
  styles: [`
    div.poi-modal-overlay {
    	cursor: pointer;
    	position: absolute;
    	top: 0;
    	right: 0;
    	bottom: 0;
    	left: 0;
    	background: rgba(0,0,0,.5);
    	z-index: 999;
		}
		
    div.poi-modal-outer {
    	width: 85%;
    	min-height: 50%;
    	max-height: 85%;
    	max-width: 80rem;
    	position: absolute;
    	-ms-transform: translate(-50%,-50%);
    	-webkit-transform: translate(-50%,-50%);
    	transform: translate(-50%,-50%);
    	top: 50%;
    	left: 50%;
    	background: #fff;
    	z-index: 999;
    	overflow-y: auto;
		}
		
    div.poi-modal-inner {
    	padding: .5rem 5%;
    	z-index: 999;
		}
		
    	div.poi-modal-inner button.close {
    		position: absolute;
    		top: 0;
    		right: .25rem;
    		line-height: 1;
    		border: 0;
    		outline: 0;
    		padding: 0 .75rem;
    		background-color: #F44336;
    		color: #fff;
    		font-size: 1.5rem;
			}
			
    	div.poi-modal-inner button.close:hover {
    		background-image: -webkit-linear-gradient(transparent,rgba(0,0,0,.05) 40%,rgba(0,0,0,.1));
    		background-image: linear-gradient(transparent,rgba(0,0,0,.05) 40%,rgba(0,0,0,.1));
			}
			
    		div.poi-modal-inner button.close span {
    			display: inline-block;
    			-ms-transform: rotate(45deg);
    			-webkit-transform: rotate(45deg);
    		  transform: rotate(45deg);
				}
				
    		div.poi-modal-inner .embed-container {
    			position: relative;
    	    padding-bottom: 56.25%;
    	    padding-top: 35px;
    	    height: 0;
    	    overflow: hidden;
				}
				
    			div.poi-modal-inner .embed-container iframe {
    				position: absolute;
    		    top:0;
    		    left: 0;
    		    width: 100%;
    		    height: 100%;
    			}
  `]
})
export class PoiModal implements OnInit {

  @Input() modalData: any;

  @Output() modalChange = new EventEmitter();
	
	modalActive: boolean;

  constructor(
		public sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
  }

  closeModal() {
    this.modalActive = false;
    this.modalChange.emit({
      value: this.modalActive
    });
	}
	
	iframeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}

@Component({
  selector: 'edu-poi',
  template: `
		<section class="poi-row">
			<div class="poi-wrapper">
				<img class="background" [src]="poiData.backgroundUrl">
				<div class="point" *ngFor="let point of poiData.points; let i = index" [style.top.%]="point.top" [style.left.%]="point.left" (click)="pointClick(point)">
					<span class="pulse"></span>
					<button></button>
					<span class="label" *ngIf="point.label">{{point.label}}</span>
				</div>
				<edu-poi-modal *ngIf="poiModal" [modalData]="poiModalData" (modalChange)="modalChange($event);"></edu-poi-modal>
			</div>
		</section>
  `,
  styles: [`
    section.poi-row {
      display: block;
      text-align: center;
		}
		
    div.poi-wrapper {
      position: relative;
      display: inline-block;
      text-align: left;
      vertical-align:top;
		}
		
      div.poi-wrapper img.background {
        display: block;
			}
			
      @-webkit-keyframes pulse {
      	0% {
      		-webkit-transform: scale(1);
      		opacity: 0.0;
      	}
      	25% {
      		-webkit-transform: scale(1);
      		opacity: 0.1;
      	}
      	50% {
      		-webkit-transform: scale(1.2);
      		opacity: 0.3;
      	}
      	75% {
      		-webkit-transform: scale(2);
      		opacity: 0.5;
      	}
      	100% {
      		-webkit-transform: scale(2.6);
      		opacity: 0.0;
      	}
			}
			
      @keyframes pulse {
      	0% {
      		transform: scale(1);
      		opacity: 0.0;
      	}
      	25% {
      		transform: scale(1);
      		opacity: 0.1;
      	}
      	50% {
      		transform: scale(1.2);
      		opacity: 0.3;
      	}
      	75% {
      		transform: scale(2);
      		opacity: 0.5;
      	}
      	100% {
      		transform: scale(2.6);
      		opacity: 0.0;
      	}
			}
			
      div.point {
      	position: absolute;
        line-height: 0;
        -ms-transform: translate(-50%, -50%);
      	-webkit-transform: translate(-50%, -50%);
      	transform: translate(-50%, -50%);
			}
			
        div.point span.pulse {
        	background: transparent;
        	position: absolute;
        	top: 0;
        	left: 0;
        	opacity: 0;
          -ms-transform: scale(0);
        	-webkit-transform: scale(0);
        	transform: scale(0);
        	height: 1rem;
        	width: 1rem;
        	border-radius: 50%;
        	border: 3px solid #F9D423;
        	-webkit-animation: pulse 1.6s ease-out;
        	animation: pulse 1.6s ease-out;
        	-webkit-animation-iteration-count: infinite;
        	animation-iteration-count: infinite;
				}
				
        div.point button {
        	position: relative;
        	height: 1rem;
        	width: 1rem;
        	background: transparent;
        	padding: 0;
        	border-radius: 50%;
        	display: block;
        	margin: 0 auto;
        	border: 0;
        	border: 3px solid #F9D423;
        	z-index: 4;
				}
				
        div.point button {
        	display: inline;
				}
				
        div.point button:hover,
        div.point button:focus  {
        	background-color: #FFC107;
				}
				
        div.point button + span.label {
        	display: none;
          line-height: 1.5;
          white-space: nowrap;
        	position: absolute;
        	top: 0;
        	left: 50%;
        	text-align: center;
          color: #fff;
          background-color: rgba(0,0,0,.7);
          padding: .25rem .5rem;
        	border-radius: 3px;
          -ms-transform: translate(-50%, -150%);
        	-webkit-transform: translate(-50%, -150%);
        	transform: translate(-50%, -150%);
				}
				
        div.point button + span.label:after {
        	content:"";
          position: absolute;
          bottom: 0;
          left: 50%;
        	width: 0;
        	height: 0;
        	border-left: .25em solid transparent;
        	border-right: .25em solid transparent;
        	border-top: .25em solid rgba(0,0,0,.7);
          -ms-transform: translate(-50%, 100%);
        	-webkit-transform: translate(-50%, 100%);
        	transform: translate(-50%, 100%);
				}
				
        div.point button:hover + span.label,
        div.point button:focus + span.label {
        	display: block;
				}
				
    edu-poi-modal {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 999;
		}
		
  `]
})
export class Poi implements OnInit {

  @Input() data: any;

	poiData: any;
	
	poiModal: boolean = false;
	
	poiModalData: any;

  constructor(
    public router: Router
  ) {}

  ngOnInit() {
		this.poiData = this.data;
  }

  modalChange(event: any ) {
    this.poiModal = event.value;
  }

  pointClick(point: any) {
    this.poiModal = false;
    if (point.route) {
      this.router.navigate([point.route]);
    } else {
      this.poiModal = true;
      this.poiModalData = point;
    }
  }

}

@NgModule({
    imports: [CommonModule],
    exports: [Poi],
    declarations: [Poi, PoiModal]
})
export class PoiModule { }
