/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from './points-of-interest';
import * as i2 from '@angular/common';
import * as i3 from '@angular/platform-browser';
import * as i4 from '@angular/router';
export const PoiModuleNgFactory:i0.NgModuleFactory<i1.PoiModule> = i0.ɵcmf(i1.PoiModule,
    ([] as any[]),(_l:any) => {
      return i0.ɵmod([i0.ɵmpd(512,i0.ComponentFactoryResolver,i0.ɵCodegenComponentFactoryResolver,
          [[8,([] as any[])],[3,i0.ComponentFactoryResolver],i0.NgModuleRef]),i0.ɵmpd(4608,
          i2.NgLocalization,i2.NgLocaleLocalization,[i0.LOCALE_ID]),i0.ɵmpd(512,i2.CommonModule,
          i2.CommonModule,([] as any[])),i0.ɵmpd(512,i1.PoiModule,i1.PoiModule,([] as any[]))]);
    });
const styles_Poi:any[] = ['section.poi-row[_ngcontent-%COMP%] {\n      display: block;\n      text-align: center;\n		}\n		\n    div.poi-wrapper[_ngcontent-%COMP%] {\n      position: relative;\n      display: inline-block;\n      text-align: left;\n      vertical-align:top;\n		}\n		\n      div.poi-wrapper[_ngcontent-%COMP%]   img.background[_ngcontent-%COMP%] {\n        display: block;\n			}\n			\n      @-webkit-keyframes pulse {\n      	0% {\n      		-webkit-transform: scale(1);\n      		opacity: 0.0;\n      	}\n      	25% {\n      		-webkit-transform: scale(1);\n      		opacity: 0.1;\n      	}\n      	50% {\n      		-webkit-transform: scale(1.2);\n      		opacity: 0.3;\n      	}\n      	75% {\n      		-webkit-transform: scale(2);\n      		opacity: 0.5;\n      	}\n      	100% {\n      		-webkit-transform: scale(2.6);\n      		opacity: 0.0;\n      	}\n			}\n			\n      @keyframes pulse {\n      	0% {\n      		transform: scale(1);\n      		opacity: 0.0;\n      	}\n      	25% {\n      		transform: scale(1);\n      		opacity: 0.1;\n      	}\n      	50% {\n      		transform: scale(1.2);\n      		opacity: 0.3;\n      	}\n      	75% {\n      		transform: scale(2);\n      		opacity: 0.5;\n      	}\n      	100% {\n      		transform: scale(2.6);\n      		opacity: 0.0;\n      	}\n			}\n			\n      div.point[_ngcontent-%COMP%] {\n      	position: absolute;\n        line-height: 0;\n        -ms-transform: translate(-50%, -50%);\n      	-webkit-transform: translate(-50%, -50%);\n      	transform: translate(-50%, -50%);\n			}\n			\n        div.point[_ngcontent-%COMP%]   span.pulse[_ngcontent-%COMP%] {\n        	background: transparent;\n        	position: absolute;\n        	top: 0;\n        	left: 0;\n        	opacity: 0;\n          -ms-transform: scale(0);\n        	-webkit-transform: scale(0);\n        	transform: scale(0);\n        	height: 1rem;\n        	width: 1rem;\n        	border-radius: 50%;\n        	border: 3px solid #F9D423;\n        	-webkit-animation: pulse 1.6s ease-out;\n        	animation: pulse 1.6s ease-out;\n        	-webkit-animation-iteration-count: infinite;\n        	animation-iteration-count: infinite;\n				}\n				\n        div.point[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n        	position: relative;\n        	height: 1rem;\n        	width: 1rem;\n        	background: transparent;\n        	padding: 0;\n        	border-radius: 50%;\n        	display: block;\n        	margin: 0 auto;\n        	border: 0;\n        	border: 3px solid #F9D423;\n        	z-index: 4;\n				}\n				\n        div.point[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n        	display: inline;\n				}\n				\n        div.point[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, div.point[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus  {\n        	background-color: #FFC107;\n				}\n				\n        div.point[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]    + span.label[_ngcontent-%COMP%] {\n        	display: none;\n          line-height: 1.5;\n          white-space: nowrap;\n        	position: absolute;\n        	top: 0;\n        	left: 50%;\n        	text-align: center;\n          color: #fff;\n          background-color: rgba(0,0,0,.7);\n          padding: .25rem .5rem;\n        	border-radius: 3px;\n          -ms-transform: translate(-50%, -150%);\n        	-webkit-transform: translate(-50%, -150%);\n        	transform: translate(-50%, -150%);\n				}\n				\n        div.point[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]    + span.label[_ngcontent-%COMP%]:after {\n        	content:"";\n          position: absolute;\n          bottom: 0;\n          left: 50%;\n        	width: 0;\n        	height: 0;\n        	border-left: .25em solid transparent;\n        	border-right: .25em solid transparent;\n        	border-top: .25em solid rgba(0,0,0,.7);\n          -ms-transform: translate(-50%, 100%);\n        	-webkit-transform: translate(-50%, 100%);\n        	transform: translate(-50%, 100%);\n				}\n				\n        div.point[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover    + span.label[_ngcontent-%COMP%], div.point[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus    + span.label[_ngcontent-%COMP%] {\n        	display: block;\n				}\n				\n    edu-poi-modal[_ngcontent-%COMP%] {\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      z-index: 999;\n		}'];
export const RenderType_Poi:i0.RendererType2 = i0.ɵcrt({encapsulation:0,styles:styles_Poi,
    data:{}});
function View_Poi_2(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'span',[['class',
      'label']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['','']))],(null as any),(_ck,_v) => {
    const currVal_0:any = (<any>_v.parent).context.$implicit.label;
    _ck(_v,1,0,currVal_0);
  });
}
function View_Poi_1(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),8,'div',[['class',
      'point']],[[4,'top','%'],[4,'left','%']],[[(null as any),'click']],(_v,en,$event) => {
    var ad:boolean = true;
    var _co:any = _v.component;
    if (('click' === en)) {
      const pd_0:any = ((<any>_co.pointClick(_v.context.$implicit)) !== false);
      ad = (pd_0 && ad);
    }
    return ad;
  },(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n					'])),(_l()(),
      i0.ɵeld(0,(null as any),(null as any),0,'span',[['class','pulse']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
      ['\n					'])),(_l()(),i0.ɵeld(0,(null as any),(null as any),0,'button',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i0.ɵted((null as any),['\n					'])),(_l()(),i0.ɵand(16777216,(null as any),(null as any),
      1,(null as any),View_Poi_2)),i0.ɵdid(16384,(null as any),0,i2.NgIf,[i0.ViewContainerRef,
      i0.TemplateRef],{ngIf:[0,'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),
      ['\n				']))],(_ck,_v) => {
    const currVal_2:any = _v.context.$implicit.label;
    _ck(_v,7,0,currVal_2);
  },(_ck,_v) => {
    const currVal_0:any = _v.context.$implicit.top;
    const currVal_1:any = _v.context.$implicit.left;
    _ck(_v,0,0,currVal_0,currVal_1);
  });
}
function View_Poi_3(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'edu-poi-modal',
      ([] as any[]),(null as any),[[(null as any),'modalChange']],(_v,en,$event) => {
        var ad:boolean = true;
        var _co:any = _v.component;
        if (('modalChange' === en)) {
          const pd_0:any = ((<any>_co.modalChange($event)) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },View_PoiModal_0,RenderType_PoiModal)),i0.ɵdid(114688,(null as any),0,i1.PoiModal,
      [i3.DomSanitizer],{modalData:[0,'modalData']},{modalChange:'modalChange'})],
      (_ck,_v) => {
        var _co:any = _v.component;
        const currVal_0:any = _co.poiModalData;
        _ck(_v,1,0,currVal_0);
      },(null as any));
}
export function View_Poi_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵted((null as any),['\n		'])),(_l()(),i0.ɵeld(0,(null as any),
      (null as any),12,'section',[['class','poi-row']],(null as any),(null as any),
      (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n			'])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),9,'div',[['class','poi-wrapper']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n				'])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          0,'img',[['class','background']],[[8,'src',4]],(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n				'])),
      (_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_Poi_1)),
      i0.ɵdid(802816,(null as any),0,i2.NgForOf,[i0.ViewContainerRef,i0.TemplateRef,
          i0.IterableDiffers],{ngForOf:[0,'ngForOf']},(null as any)),(_l()(),i0.ɵted((null as any),
          ['\n				'])),(_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),
          View_Poi_3)),i0.ɵdid(16384,(null as any),0,i2.NgIf,[i0.ViewContainerRef,
          i0.TemplateRef],{ngIf:[0,'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),
          ['\n			'])),(_l()(),i0.ɵted((null as any),['\n		'])),(_l()(),i0.ɵted((null as any),
          ['\n  ']))],(_ck,_v) => {
    var _co:i1.Poi = _v.component;
    const currVal_1:any = _co.poiData.points;
    _ck(_v,8,0,currVal_1);
    const currVal_2:any = _co.poiModal;
    _ck(_v,11,0,currVal_2);
  },(_ck,_v) => {
    var _co:i1.Poi = _v.component;
    const currVal_0:any = _co.poiData.backgroundUrl;
    _ck(_v,5,0,currVal_0);
  });
}
export function View_Poi_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'edu-poi',([] as any[]),
      (null as any),(null as any),(null as any),View_Poi_0,RenderType_Poi)),i0.ɵdid(114688,
      (null as any),0,i1.Poi,[i4.Router],(null as any),(null as any))],(_ck,_v) => {
    _ck(_v,1,0);
  },(null as any));
}
export const PoiNgFactory:i0.ComponentFactory<i1.Poi> = i0.ɵccf('edu-poi',i1.Poi,View_Poi_Host_0,
    {data:'data'},{},([] as any[]));
const styles_PoiModal:any[] = ['div.poi-modal-overlay[_ngcontent-%COMP%] {\n    	cursor: pointer;\n    	position: absolute;\n    	top: 0;\n    	right: 0;\n    	bottom: 0;\n    	left: 0;\n    	background: rgba(0,0,0,.5);\n    	z-index: 999;\n		}\n		\n    div.poi-modal-outer[_ngcontent-%COMP%] {\n    	width: 85%;\n    	min-height: 50%;\n    	max-height: 85%;\n    	max-width: 80rem;\n    	position: absolute;\n    	-ms-transform: translate(-50%,-50%);\n    	-webkit-transform: translate(-50%,-50%);\n    	transform: translate(-50%,-50%);\n    	top: 50%;\n    	left: 50%;\n    	background: #fff;\n    	z-index: 999;\n    	overflow-y: auto;\n		}\n		\n    div.poi-modal-inner[_ngcontent-%COMP%] {\n    	padding: .5rem 5%;\n    	z-index: 999;\n		}\n		\n    	div.poi-modal-inner[_ngcontent-%COMP%]   button.close[_ngcontent-%COMP%] {\n    		position: absolute;\n    		top: 0;\n    		right: .25rem;\n    		line-height: 1;\n    		border: 0;\n    		outline: 0;\n    		padding: 0 .75rem;\n    		background-color: #F44336;\n    		color: #fff;\n    		font-size: 1.5rem;\n			}\n			\n    	div.poi-modal-inner[_ngcontent-%COMP%]   button.close[_ngcontent-%COMP%]:hover {\n    		background-image: -webkit-linear-gradient(transparent,rgba(0,0,0,.05) 40%,rgba(0,0,0,.1));\n    		background-image: linear-gradient(transparent,rgba(0,0,0,.05) 40%,rgba(0,0,0,.1));\n			}\n			\n    		div.poi-modal-inner[_ngcontent-%COMP%]   button.close[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    			display: inline-block;\n    			-ms-transform: rotate(45deg);\n    			-webkit-transform: rotate(45deg);\n    		  transform: rotate(45deg);\n				}\n				\n    		div.poi-modal-inner[_ngcontent-%COMP%]   .embed-container[_ngcontent-%COMP%] {\n    			position: relative;\n    	    padding-bottom: 56.25%;\n    	    padding-top: 35px;\n    	    height: 0;\n    	    overflow: hidden;\n				}\n				\n    			div.poi-modal-inner[_ngcontent-%COMP%]   .embed-container[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n    				position: absolute;\n    		    top:0;\n    		    left: 0;\n    		    width: 100%;\n    		    height: 100%;\n    			}'];
export const RenderType_PoiModal:i0.RendererType2 = i0.ɵcrt({encapsulation:0,styles:styles_PoiModal,
    data:{}});
function View_PoiModal_1(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'h4',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i0.ɵted((null as any),['','']))],(null as any),(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = _co.modalData.label;
    _ck(_v,1,0,currVal_0);
  });
}
function View_PoiModal_2(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),0,'img',([] as any[]),
      [[8,'src',4]],(null as any),(null as any),(null as any),(null as any)))],(null as any),
      (_ck,_v) => {
        var _co:any = _v.component;
        const currVal_0:any = _co.modalData.imageUrl;
        _ck(_v,0,0,currVal_0);
      });
}
function View_PoiModal_3(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),3,'p',[['class',
      'embed-container ']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i0.ɵted((null as any),['\n          '])),(_l()(),i0.ɵeld(0,
      (null as any),(null as any),0,'iframe',[['allowfullscreen',''],['frameborder',
          '0'],['height','315'],['width','560']],[[8,'src',5]],(null as any),(null as any),
      (null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n        ']))],
      (null as any),(_ck,_v) => {
        var _co:any = _v.component;
        const currVal_0:any = _co.iframeUrl(_co.modalData.embedUrl);
        _ck(_v,2,0,currVal_0);
      });
}
function View_PoiModal_4(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'p',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i0.ɵted((null as any),['\n          ','\n        ']))],(null as any),(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = _co.modalData.text;
    _ck(_v,1,0,currVal_0);
  });
}
export function View_PoiModal_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵted((null as any),['\n    '])),(_l()(),i0.ɵeld(0,(null as any),
      (null as any),0,'div',[['class','poi-modal-overlay']],(null as any),[[(null as any),
          'click']],(_v,en,$event) => {
        var ad:boolean = true;
        var _co:i1.PoiModal = _v.component;
        if (('click' === en)) {
          const pd_0:any = ((<any>_co.closeModal()) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n    '])),(_l()(),
      i0.ɵeld(0,(null as any),(null as any),23,'div',[['class','poi-modal-outer']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n      '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),20,'div',[['class','poi-modal-inner']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['\n        '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),2,'button',
          [['class','close']],(null as any),[[(null as any),'click']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:i1.PoiModal = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>_co.closeModal()) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          1,'span',([] as any[]),(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i0.ɵted((null as any),['+'])),(_l()(),i0.ɵted((null as any),
          ['\n        '])),(_l()(),i0.ɵand(16777216,(null as any),(null as any),1,
          (null as any),View_PoiModal_1)),i0.ɵdid(16384,(null as any),0,i2.NgIf,[i0.ViewContainerRef,
          i0.TemplateRef],{ngIf:[0,'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),
          ['\n        '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),4,'p',([] as any[]),
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n          '])),(_l()(),i0.ɵand(16777216,(null as any),
          (null as any),1,(null as any),View_PoiModal_2)),i0.ɵdid(16384,(null as any),
          0,i2.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,'ngIf']},(null as any)),
      (_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),i0.ɵted((null as any),
          ['\n        '])),(_l()(),i0.ɵand(16777216,(null as any),(null as any),1,
          (null as any),View_PoiModal_3)),i0.ɵdid(16384,(null as any),0,i2.NgIf,[i0.ViewContainerRef,
          i0.TemplateRef],{ngIf:[0,'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),
          ['\n        '])),(_l()(),i0.ɵand(16777216,(null as any),(null as any),1,
          (null as any),View_PoiModal_4)),i0.ɵdid(16384,(null as any),0,i2.NgIf,[i0.ViewContainerRef,
          i0.TemplateRef],{ngIf:[0,'ngIf']},(null as any)),(_l()(),i0.ɵted((null as any),
          ['\n      '])),(_l()(),i0.ɵted((null as any),['\n    '])),(_l()(),i0.ɵted((null as any),
          ['\n  ']))],(_ck,_v) => {
    var _co:i1.PoiModal = _v.component;
    const currVal_0:any = _co.modalData.label;
    _ck(_v,12,0,currVal_0);
    const currVal_1:any = _co.modalData.imageUrl;
    _ck(_v,17,0,currVal_1);
    const currVal_2:any = _co.modalData.embedUrl;
    _ck(_v,21,0,currVal_2);
    const currVal_3:any = _co.modalData.text;
    _ck(_v,24,0,currVal_3);
  },(null as any));
}
export function View_PoiModal_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'edu-poi-modal',
      ([] as any[]),(null as any),(null as any),(null as any),View_PoiModal_0,RenderType_PoiModal)),
      i0.ɵdid(114688,(null as any),0,i1.PoiModal,[i3.DomSanitizer],(null as any),(null as any))],
      (_ck,_v) => {
        _ck(_v,1,0);
      },(null as any));
}
export const PoiModalNgFactory:i0.ComponentFactory<i1.PoiModal> = i0.ɵccf('edu-poi-modal',
    i1.PoiModal,View_PoiModal_Host_0,{modalData:'modalData'},{modalChange:'modalChange'},
    ([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiRDovSk0vRG9jdW1lbnRzL3d3dy9uZy1lZHUvY29tcG9uZW50cy9wb2ludHMtb2YtaW50ZXJlc3QvcG9pbnRzLW9mLWludGVyZXN0Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL0Q6L0pNL0RvY3VtZW50cy93d3cvbmctZWR1L2NvbXBvbmVudHMvcG9pbnRzLW9mLWludGVyZXN0L3BvaW50cy1vZi1pbnRlcmVzdC50cyIsIm5nOi8vL0Q6L0pNL0RvY3VtZW50cy93d3cvbmctZWR1L2NvbXBvbmVudHMvcG9pbnRzLW9mLWludGVyZXN0L3BvaW50cy1vZi1pbnRlcmVzdC50cy5Qb2kuaHRtbCIsIm5nOi8vL0Q6L0pNL0RvY3VtZW50cy93d3cvbmctZWR1L2NvbXBvbmVudHMvcG9pbnRzLW9mLWludGVyZXN0L3BvaW50cy1vZi1pbnRlcmVzdC50cy5Qb2lfSG9zdC5odG1sIiwibmc6Ly8vRDovSk0vRG9jdW1lbnRzL3d3dy9uZy1lZHUvY29tcG9uZW50cy9wb2ludHMtb2YtaW50ZXJlc3QvcG9pbnRzLW9mLWludGVyZXN0LnRzLlBvaU1vZGFsLmh0bWwiLCJuZzovLy9EOi9KTS9Eb2N1bWVudHMvd3d3L25nLWVkdS9jb21wb25lbnRzL3BvaW50cy1vZi1pbnRlcmVzdC9wb2ludHMtb2YtaW50ZXJlc3QudHMuUG9pTW9kYWxfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCJcblx0XHQ8c2VjdGlvbiBjbGFzcz1cInBvaS1yb3dcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJwb2ktd3JhcHBlclwiPlxuXHRcdFx0XHQ8aW1nIGNsYXNzPVwiYmFja2dyb3VuZFwiIFtzcmNdPVwicG9pRGF0YS5iYWNrZ3JvdW5kVXJsXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJwb2ludFwiICpuZ0Zvcj1cImxldCBwb2ludCBvZiBwb2lEYXRhLnBvaW50czsgbGV0IGkgPSBpbmRleFwiIFtzdHlsZS50b3AuJV09XCJwb2ludC50b3BcIiBbc3R5bGUubGVmdC4lXT1cInBvaW50LmxlZnRcIiAoY2xpY2spPVwicG9pbnRDbGljayhwb2ludClcIj5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cInB1bHNlXCI+PC9zcGFuPlxuXHRcdFx0XHRcdDxidXR0b24+PC9idXR0b24+XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJsYWJlbFwiICpuZ0lmPVwicG9pbnQubGFiZWxcIj57e3BvaW50LmxhYmVsfX08L3NwYW4+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZWR1LXBvaS1tb2RhbCAqbmdJZj1cInBvaU1vZGFsXCIgW21vZGFsRGF0YV09XCJwb2lNb2RhbERhdGFcIiAobW9kYWxDaGFuZ2UpPVwibW9kYWxDaGFuZ2UoJGV2ZW50KTtcIj48L2VkdS1wb2ktbW9kYWw+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L3NlY3Rpb24+XG4gICIsIjxlZHUtcG9pPjwvZWR1LXBvaT4iLCJcbiAgICA8ZGl2IGNsYXNzPVwicG9pLW1vZGFsLW92ZXJsYXlcIiAoY2xpY2spPVwiY2xvc2VNb2RhbCgpXCI+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInBvaS1tb2RhbC1vdXRlclwiPlxuICAgICAgPGRpdiBjbGFzcz1cInBvaS1tb2RhbC1pbm5lclwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2xvc2VcIiAoY2xpY2spPVwiY2xvc2VNb2RhbCgpXCI+PHNwYW4+Kzwvc3Bhbj48L2J1dHRvbj5cbiAgICAgICAgPGg0ICpuZ0lmPVwibW9kYWxEYXRhLmxhYmVsXCI+e3ttb2RhbERhdGEubGFiZWx9fTwvaDQ+XG4gICAgICAgIDxwPlxuICAgICAgICAgIDxpbWcgW3NyY109XCJtb2RhbERhdGEuaW1hZ2VVcmxcIiAqbmdJZj1cIm1vZGFsRGF0YS5pbWFnZVVybFwiPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwIGNsYXNzPVwiZW1iZWQtY29udGFpbmVyIFwiKm5nSWY9XCJtb2RhbERhdGEuZW1iZWRVcmxcIj5cbiAgICAgICAgICA8aWZyYW1lIHdpZHRoPVwiNTYwXCIgaGVpZ2h0PVwiMzE1XCIgW3NyY109XCJpZnJhbWVVcmwobW9kYWxEYXRhLmVtYmVkVXJsKVwiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cCAqbmdJZj1cIm1vZGFsRGF0YS50ZXh0XCI+XG4gICAgICAgICAge3ttb2RhbERhdGEudGV4dH19XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAiLCI8ZWR1LXBvaS1tb2RhbD48L2VkdS1wb2ktbW9kYWw+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQ09LO01BQUE7TUFBd0M7SUFBQTtJQUFBOzs7O29CQUh6QztNQUFBO0lBQUE7SUFBQTtJQUE2SDtNQUFBO01BQUE7SUFBQTtJQUE3SDtFQUFBLGdDQUF5Siw0Q0FDeEo7YUFBQTtVQUFBLDBEQUEyQjtNQUFBLGNBQzNCO01BQUEsd0VBQWlCO2FBQUEsNkJBQ2pCO01BQUEsb0NBQUE7b0JBQUEsbUNBQThEO01BQUE7SUFBMUM7SUFBcEIsV0FBb0IsU0FBcEI7O0lBSHNFO0lBQTBCO0lBQWpHLFdBQXVFLFVBQTBCLFNBQWpHOzs7O29CQUtBO01BQUE7UUFBQTtRQUFBO1FBQTJEO1VBQUE7VUFBQTtRQUFBO1FBQTNEO01BQUEsK0NBQUE7TUFBQTs7O1FBQWdDO1FBQWhDLFdBQWdDLFNBQWhDOzs7O29CQVRKLHlDQUNFO01BQUE7TUFBQSw0Q0FBeUI7TUFDeEI7VUFBQTtNQUF5QiwyQ0FDeEI7VUFBQTtVQUFBLDhCQUFzRDtNQUN0RDthQUFBOzRCQUFBLHlDQUlNO1VBQUEsYUFDTjtVQUFBLG9CQUFBO3dCQUFBLG1DQUFnSDtVQUFBLFlBQzNHLHlDQUNHO1VBQUE7O0lBUFc7SUFBbkIsV0FBbUIsU0FBbkI7SUFLZTtJQUFmLFlBQWUsU0FBZjs7O0lBTndCO0lBQXhCLFdBQXdCLFNBQXhCOzs7O29CQ0hKO01BQUEsNkVBQUE7TUFBQTtJQUFBOzs7Ozs7Ozs7b0JDS1E7TUFBQSx3RUFBNEI7YUFBQTs7SUFBQTtJQUFBOzs7O29CQUUxQjtNQUFBOzs7UUFBSztRQUFMLFdBQUssU0FBTDs7OztvQkFFRjtNQUFBO01BQUEsZ0JBQXNELGlEQUNwRDtNQUFBO1VBQUE7TUFBQSw4QkFBZ0g7OztRQUEvRTtRQUFqQyxXQUFpQyxTQUFqQzs7OztvQkFFRjtNQUFBLHdFQUEwQjthQUFBOztJQUFBO0lBQUE7Ozs7b0JBWmxDLDJDQUNJO01BQUE7VUFBQTtRQUFBO1FBQUE7UUFBK0I7VUFBQTtVQUFBO1FBQUE7UUFBL0I7TUFBQSxnQ0FBNEQsMkNBQzVEO2FBQUE7VUFBQTtNQUE2Qiw2Q0FDM0I7VUFBQTtVQUFBLDRDQUE2QjtVQUFBLGlCQUMzQjtVQUFBO1lBQUE7WUFBQTtZQUFzQjtjQUFBO2NBQUE7WUFBQTtZQUF0QjtVQUFBLGdDQUE2QztVQUFBO1VBQUEsZ0JBQU0sc0NBQWlCO1VBQUEsaUJBQ3BFO1VBQUEsdUNBQUE7d0JBQUEsbUNBQW9EO1VBQUEsaUJBQ3BEO1VBQUE7TUFBRyxpREFDRDtVQUFBLHVEQUFBO1VBQUE7TUFBMkQsK0NBQ3pEO1VBQUEsaUJBQ0o7VUFBQSx1Q0FBQTt3QkFBQSxtQ0FFSTtVQUFBLGlCQUNKO1VBQUEsdUNBQUE7d0JBQUEsbUNBRUk7VUFBQSxlQUNBLDJDQUNGO1VBQUE7O0lBWEU7SUFBSixZQUFJLFNBQUo7SUFFa0M7SUFBaEMsWUFBZ0MsU0FBaEM7SUFFeUI7SUFBM0IsWUFBMkIsU0FBM0I7SUFHRztJQUFILFlBQUcsU0FBSDs7OztvQkNaUjtNQUFBO2FBQUE7O1FBQUE7Ozs7OyJ9
