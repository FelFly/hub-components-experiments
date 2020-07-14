import{r as e,h as t,H as o,g as s}from"./p-1fd9320b.js";import{H as r}from"./p-7bc17319.js";import{g as i}from"./p-31117564.js";import{d as n,u as a,c as p}from"./p-5e5b4902.js";import{T as l,A as h,C as c}from"./p-5c743a6c.js";const d=class{constructor(t){e(this,t),this.offsetDistance=n,this.offsetSkidding=0,this.open=!1,this.placement="auto",this._referenceElement=this.getReferenceElement(),this.guid="calcite-tooltip-"+i(),this.getId=()=>this.el.id||this.guid,this.addReferences=()=>{const{_referenceElement:e}=this;e&&(e.setAttribute(l,""),e.hasAttribute(h)||e.setAttribute(h,this.getId()))},this.removeReferences=()=>{const{_referenceElement:e}=this;e&&(e.removeAttribute(h),e.removeAttribute(l))},this.show=()=>{this.open=!0},this.hide=()=>{this.open=!1}}offsetDistanceOffsetHandler(){this.reposition()}offsetSkiddingHandler(){this.reposition()}openHandler(e){e?this.createPopper():this.destroyPopper()}placementHandler(){this.reposition()}referenceElementHandler(){this.removeReferences(),this._referenceElement=this.getReferenceElement(),this.addReferences(),this.createPopper()}componentDidLoad(){this.addReferences(),this.createPopper()}componentDidUnload(){this.removeReferences(),this.destroyPopper()}async reposition(){const{popper:e,el:t,placement:o}=this,s=this.getModifiers();e?a({el:t,modifiers:s,placement:o,popper:e}):this.createPopper()}getReferenceElement(){const{referenceElement:e}=this;return("string"==typeof e?document.getElementById(e):e)||null}getModifiers(){const{arrowEl:e,offsetDistance:t,offsetSkidding:o}=this;return[{name:"arrow",enabled:!0,options:{element:e}},{name:"offset",enabled:!0,options:{offset:[o,t]}}]}createPopper(){this.destroyPopper();const{el:e,open:t,placement:o,_referenceElement:s}=this,r=this.getModifiers();this.popper=p({el:e,modifiers:r,open:t,placement:o,referenceEl:s})}destroyPopper(){const{popper:e}=this;e&&e.destroy(),this.popper=null}render(){const{_referenceElement:e,open:s}=this,i=e&&s;return t(o,{role:"tooltip",class:{[r.hydratedInvisible]:!i},"aria-hidden":i?"false":"true",id:this.getId()},t("div",{class:c.arrow,ref:e=>this.arrowEl=e}),t("div",{class:c.container},t("slot",null)))}get el(){return s(this)}static get watchers(){return{offsetDistance:["offsetDistanceOffsetHandler"],offsetSkidding:["offsetSkiddingHandler"],open:["openHandler"],placement:["placementHandler"],referenceElement:["referenceElementHandler"]}}};d.style=':host([hidden]){display:none}:host{display:block;position:absolute;z-index:999;top:-999999px;left:-999999px}:host([aria-hidden=true]){pointer-events:none}:host([aria-hidden=false]){-webkit-box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16)}.arrow,.arrow::before{position:absolute;width:8px;height:8px;z-index:-1}.arrow::before{content:"";-webkit-box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--calcite-ui-foreground-1)}:host([data-popper-placement^=top])>.arrow{bottom:-4px}:host([data-popper-placement^=bottom])>.arrow{top:-4px}:host([data-popper-placement^=left])>.arrow{right:-4px}:host([data-popper-placement^=right])>.arrow{left:-4px}.container{position:relative;border-radius:var(--calcite-border-radius);background:var(--calcite-ui-foreground-1);max-width:300px;max-height:300px;display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-direction:column;flex-direction:column;font-weight:500;color:var(--calcite-ui-text-1);padding:12px 16px;overflow:hidden;font-size:0.8125rem;line-height:1.5}:host([theme=dark]) .container{background:var(--calcite-ui-foreground-2)}';export{d as calcite_tooltip}