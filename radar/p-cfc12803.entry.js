import{r as e,c as t,h as o,H as i,g as s}from"./p-1fd9320b.js";import{H as r}from"./p-7bc17319.js";import{g as n}from"./p-31117564.js";import{P as a,A as l,C as c}from"./p-565faadd.js";import{d,u as p,c as h}from"./p-5e5b4902.js";const f=class{constructor(o){e(this,o),this.closeButton=!1,this.disableFlip=!1,this.disablePointer=!1,this.offsetDistance=d,this.offsetSkidding=0,this.open=!1,this.placement="auto",this.textClose="Close",this._referenceElement=this.getReferenceElement(),this.guid="calcite-popover-"+n(),this.getId=()=>this.el.id||this.guid,this.addReferences=()=>{const{_referenceElement:e}=this;e&&(e.setAttribute(a,""),e.hasAttribute(l)||e.setAttribute(l,this.getId()))},this.removeReferences=()=>{const{_referenceElement:e}=this;e&&(e.removeAttribute(l),e.removeAttribute(a))},this.hide=()=>{this.open=!1},this.calcitePopoverClose=t(this,"calcitePopoverClose",7),this.calcitePopoverOpen=t(this,"calcitePopoverOpen",7)}offsetDistanceOffsetHandler(){this.reposition()}offsetSkiddingHandler(){this.reposition()}openHandler(e){e?(this.createPopper(),this.calcitePopoverOpen.emit()):(this.destroyPopper(),this.calcitePopoverClose.emit())}placementHandler(){this.reposition()}referenceElementHandler(){this.removeReferences(),this._referenceElement=this.getReferenceElement(),this.addReferences(),this.createPopper()}componentDidLoad(){this.createPopper(),this.addReferences()}componentDidUnload(){this.removeReferences(),this.destroyPopper()}async reposition(){const{popper:e,el:t,placement:o}=this,i=this.getModifiers();e?p({el:t,modifiers:i,placement:o,popper:e}):this.createPopper()}async setFocus(e){var t,o;"close-button"!==e?null===(o=this.el)||void 0===o||o.focus():null===(t=this.closeButtonEl)||void 0===t||t.focus()}async toggle(e=!this.open){this.open=e}getReferenceElement(){const{referenceElement:e}=this;return("string"==typeof e?document.getElementById(e):e)||null}getModifiers(){const{arrowEl:e,flipPlacements:t,disableFlip:o,disablePointer:i,offsetDistance:s,offsetSkidding:r}=this,n={name:"flip",enabled:!o};t&&(n.options={fallbackPlacements:t});const a={name:"arrow",enabled:!i};return e&&(a.options={element:e}),[a,n,{name:"offset",enabled:!0,options:{offset:[r,s]}}]}createPopper(){this.destroyPopper();const{el:e,open:t,placement:o,_referenceElement:i}=this,s=this.getModifiers();this.popper=h({el:e,modifiers:s,open:t,placement:o,referenceEl:i})}destroyPopper(){const{popper:e}=this;e&&e.destroy(),this.popper=null}renderImage(){return this.el.querySelector("[slot=image]")?o("div",{class:c.imageContainer},o("slot",{name:"image"})):null}renderCloseButton(){const{closeButton:e,textClose:t}=this;return e?o("button",{ref:e=>this.closeButtonEl=e,"aria-label":t,title:t,class:{[c.closeButton]:!0},onClick:this.hide},o("calcite-icon",{icon:"x",scale:"m"})):null}render(){const{_referenceElement:e,open:t,disablePointer:s}=this,n=e&&t,a=s?null:o("div",{class:c.arrow,ref:e=>this.arrowEl=e});return o(i,{role:"dialog",class:{[r.hydratedInvisible]:!n},"aria-hidden":n?"false":"true",id:this.getId()},a,o("div",{class:c.container},this.renderImage(),o("div",{class:c.content},o("slot",null),this.renderCloseButton())))}get el(){return s(this)}static get watchers(){return{offsetDistance:["offsetDistanceOffsetHandler"],offsetSkidding:["offsetSkiddingHandler"],open:["openHandler"],placement:["placementHandler"],referenceElement:["referenceElementHandler"]}}};f.style=':host([hidden]){display:none}:host{display:block;position:absolute;z-index:999;top:-999999px;left:-999999px}:host([aria-hidden=true]){pointer-events:none}:host([aria-hidden=false]){-webkit-box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16)}.arrow,.arrow::before{position:absolute;width:8px;height:8px;z-index:-1}.arrow::before{content:"";-webkit-box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--calcite-ui-foreground-1)}:host([data-popper-placement^=top])>.arrow{bottom:-4px}:host([data-popper-placement^=bottom])>.arrow{top:-4px}:host([data-popper-placement^=left])>.arrow{right:-4px}:host([data-popper-placement^=right])>.arrow{left:-4px}.container{border-radius:var(--calcite-border-radius);background:var(--calcite-ui-foreground-1);position:relative;display:-ms-flexbox;display:flex;overflow:hidden;-ms-flex-direction:column;flex-direction:column;color:var(--calcite-ui-text-1)}.content{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:start;align-items:flex-start;line-height:24px}.close-button{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.close-button:focus{outline:2px solid var(--calcite-ui-blue-1);outline-offset:-2px}.close-button{display:block;-ms-flex:0 0 auto;flex:0 0 auto;padding:12px;border:none;border-radius:0 var(--calcite-border-radius) 0 0;color:var(--calcite-ui-text-1);cursor:pointer;background:var(--calcite-ui-foreground-1);z-index:1}.close-button:hover{background:var(--calcite-ui-foreground-2)}.close-button:active{background:var(--calcite-ui-foreground-3)}:host-context([dir=rtl]) .close-button{border-radius:var(--calcite-border-radius) 0 0 0}.image-container{overflow:hidden;max-height:200px;margin:5px}slot[name=image]::slotted(img){height:auto;width:100%;max-height:200px;-o-object-position:50% 50%;object-position:50% 50%;-o-object-fit:cover;object-fit:cover}';export{f as calcite_popover}