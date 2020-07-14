import{r as e,c as i,h as t,H as s,g as a}from"./p-1fd9320b.js";import{g as o}from"./p-7bc17319.js";import{g as r}from"./p-01f41a03.js";function n(e,i,t,s=20,a=0){let o=[];if(a>=s)return o;const r=e=>{const o=e.assignedNodes().filter(e=>1===e.nodeType);return o.length>0?n(o[0].parentElement,i,t,s,a+1):[]},l=Array.from(e.children||[]);for(const d of l)i(d)||(t(d)&&o.push(d),null!=d.shadowRoot?o.push(...n(d.shadowRoot,i,t,s,a+1)):"SLOT"===d.tagName?o.push(...r(d)):o.push(...n(d,i,t,s,a+1)));return o}function l(e){return e.hasAttribute("hidden")||e.hasAttribute("aria-hidden")&&"false"!==e.getAttribute("aria-hidden")||"none"===e.style.display||"0"===e.style.opacity||"hidden"===e.style.visibility||"collapse"===e.style.visibility}function d(e){return"-1"!==e.getAttribute("tabindex")&&!l(e)&&!function(e){return e.hasAttribute("disabled")||e.hasAttribute("aria-disabled")&&"false"!==e.getAttribute("aria-disabled")}(e)&&(e.hasAttribute("tabindex")||(e instanceof HTMLAnchorElement||e instanceof HTMLAreaElement)&&e.hasAttribute("href")||e instanceof HTMLButtonElement||e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement||e instanceof HTMLIFrameElement)}let c=new Map;const m=document.createElement("template");m.innerHTML='\n\t<div id="start"></div>\n\t<slot></slot>\n\t<div id="backup"></div>\n\t<div id="end"></div>\n';class h extends HTMLElement{constructor(){super(),this.debounceId=Math.random().toString(),this._focused=!1,this.attachShadow({mode:"open"}).appendChild(m.content.cloneNode(!0)),this.focusLastElement=this.focusLastElement.bind(this),this.focusFirstElement=this.focusFirstElement.bind(this),this.onFocusIn=this.onFocusIn.bind(this),this.onFocusOut=this.onFocusOut.bind(this)}static get observedAttributes(){return["inactive"]}get inactive(){return this.hasAttribute("inactive")}set inactive(e){e?this.setAttribute("inactive",""):this.removeAttribute("inactive")}get focused(){return this._focused}connectedCallback(){this.$backup=this.shadowRoot.querySelector("#backup"),this.$start=this.shadowRoot.querySelector("#start"),this.$end=this.shadowRoot.querySelector("#end"),this.$start.addEventListener("focus",this.focusLastElement),this.$end.addEventListener("focus",this.focusFirstElement),this.addEventListener("focusin",this.onFocusIn),this.addEventListener("focusout",this.onFocusOut),this.render()}disconnectedCallback(){this.$start.removeEventListener("focus",this.focusLastElement),this.$end.removeEventListener("focus",this.focusFirstElement),this.removeEventListener("focusin",this.onFocusIn),this.removeEventListener("focusout",this.onFocusOut)}attributeChangedCallback(){this.render()}focusFirstElement(){this.trapFocus()}focusLastElement(){this.trapFocus(!0)}getFocusableElements(){return n(this,l,d)}trapFocus(e){if(this.inactive)return;let i=this.getFocusableElements();i.length>0?(e?i[i.length-1].focus():i[0].focus(),this.$backup.setAttribute("tabindex","-1")):(this.$backup.setAttribute("tabindex","0"),this.$backup.focus())}onFocusIn(){this.updateFocused(!0)}onFocusOut(){this.updateFocused(!1)}updateFocused(e){!function(e,i,t){const s=c.get(t);null!=s&&window.clearTimeout(s),c.set(t,window.setTimeout(()=>{e(),c.delete(t)},0))}(()=>{this.focused!==e&&(this._focused=e,this.render())},0,this.debounceId)}render(){this.isConnected&&(this.$start.setAttribute("tabindex",!this.focused||this.inactive?"-1":"0"),this.$end.setAttribute("tabindex",!this.focused||this.inactive?"-1":"0"),this.focused?this.setAttribute("focused",""):this.removeAttribute("focused"))}}window&&window.customElements&&window.customElements.define("focus-trap",h);const u=class{constructor(t){e(this,t),this.beforeClose=()=>Promise.resolve(),this.closeLabel="Close",this.size="small",this.calciteModalOpen=i(this,"calciteModalOpen",7),this.calciteModalClose=i(this,"calciteModalClose",7)}render(){const e=o(this.el);return t(s,{dir:e,role:"dialog","aria-modal":"true",class:{"is-active":this.isActive}},t("calcite-scrim",{class:"scrim",theme:"dark"}),t("div",{class:"modal"},t("div",{"data-focus-fence":"true",tabindex:"0",onFocus:this.focusLastElement.bind(this)}),t("div",{class:"modal__header"},t("button",{class:"modal__close","aria-label":this.closeLabel,ref:e=>this.closeButton=e,onClick:()=>this.close()},t("calcite-icon",{icon:"x",scale:"l"})),t("header",{class:"modal__title"},t("slot",{name:"header"}))),t("div",{class:{modal__content:!0,"modal__content--spaced":!this.noPadding},ref:e=>this.modalContent=e},t("slot",{name:"content"})),t("div",{class:"modal__footer"},t("span",{class:"modal__back"},t("slot",{name:"back"})),t("span",{class:"modal__secondary"},t("slot",{name:"secondary"})),t("span",{class:"modal__primary"},t("slot",{name:"primary"}))),t("div",{"data-focus-fence":"true",tabindex:"0",onFocus:this.focusFirstElement.bind(this)})))}handleEscape(e){this.isActive&&!this.disableEscape&&"Escape"===r(e.key)&&this.close()}async open(){return this.previousActiveElement=document.activeElement,this.isActive=!0,new Promise(e=>{setTimeout(()=>{this.focusElement(this.firstFocus),e(this.el)},300),document.documentElement.classList.add("overflow-hidden"),this.calciteModalOpen.emit()})}async close(){return this.beforeClose(this.el).then(()=>(this.isActive=!1,this.previousActiveElement.focus(),document.documentElement.classList.remove("overflow-hidden"),this.calciteModalClose.emit(),new Promise(e=>{setTimeout(()=>e(this.el),300)})))}async focusElement(e){if(e)return void e.focus();const i=n(this.el,l,d);i.length>0?i[0].focus():this.closeButton&&this.closeButton.focus()}async scrollContent(e=0,i=0){this.modalContent&&(this.modalContent.scrollTo?this.modalContent.scrollTo({top:e,left:i,behavior:"smooth"}):(this.modalContent.scrollTop=e,this.modalContent.scrollLeft=i))}focusFirstElement(){this.closeButton&&this.closeButton.focus()}focusLastElement(){const e=n(this.el,l,d).filter(e=>!e.getAttribute("data-focus-fence"));e.length>0?e[e.length-1].focus():this.closeButton&&this.closeButton.focus()}get el(){return a(this)}};u.style=":host([hidden]){display:none}:host{position:fixed;top:0;right:0;bottom:0;left:0;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;overflow-y:hidden;color:var(--calcite-ui-text-2);opacity:0;visibility:hidden !important;-webkit-transition:visibility 0ms linear 300ms, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);transition:visibility 0ms linear 300ms, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);z-index:101}.scrim{position:fixed;top:0;right:0;bottom:0;left:0;display:-ms-flexbox;display:flex;overflow-y:hidden}.modal{-webkit-box-sizing:border-box;box-sizing:border-box;z-index:102;float:none;text-align:left;-webkit-overflow-scrolling:touch;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:row-wrap;flex-wrap:row-wrap;opacity:0;visibility:hidden;-webkit-transition:visibility 0ms linear 300ms, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), -webkit-transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);transition:visibility 0ms linear 300ms, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), -webkit-transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);transition:transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear 300ms, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);transition:transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear 300ms, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), -webkit-transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);-webkit-transform:translate3d(0, 20px, 0);transform:translate3d(0, 20px, 0);background-color:var(--calcite-ui-foreground-1);-webkit-box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.32);box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.32);border-radius:var(--calcite-border-radius);margin:1.5rem;width:100%}.modal__close{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.modal__close.modal__close:focus{outline:2px solid var(--calcite-ui-blue-1);outline-offset:-2px}:host(.is-active){visibility:visible !important;opacity:1;-webkit-transition-delay:0ms;transition-delay:0ms}:host(.is-active) .modal{visibility:visible;opacity:1;-webkit-transition-delay:0ms;transition-delay:0ms;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);-webkit-transition:visibility 0ms linear, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), max-width 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), max-height 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), -webkit-transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);transition:visibility 0ms linear, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), max-width 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), max-height 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), -webkit-transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);transition:transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), max-width 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), max-height 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88);transition:transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear, opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), max-width 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), max-height 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), -webkit-transform 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88)}:host([dir=rtl]) .modal{text-align:right}.modal__header{background-color:var(--calcite-ui-foreground-1);-ms-flex:0 0 auto;flex:0 0 auto;display:-ms-flexbox;display:flex;max-width:100%;min-width:0;z-index:2;border-bottom:1px solid var(--calcite-ui-border-3);border-radius:var(--calcite-border-radius) var(--calcite-border-radius) 0 0}.modal__close{padding:0.75rem;margin:0;-ms-flex-order:2;order:2;-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transition-delay:300ms;transition-delay:300ms;-webkit-transition:all 0.15s ease-in-out;transition:all 0.15s ease-in-out;background-color:transparent;-webkit-appearance:none;border:none;color:var(--calcite-ui-text-1);outline:none;cursor:pointer;border-radius:0 var(--calcite-border-radius) 0 0}.modal__close svg{pointer-events:none}.modal__close:hover,.modal__close:focus{background-color:var(--calcite-ui-foreground-2)}.modal__close:active{background-color:var(--calcite-ui-foreground-3)}:host([dir=rtl]) .modal__close{border-radius:var(--calcite-border-radius) 0 0 0}.modal__title{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:0.75rem 1.5rem;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-order:1;order:1;min-width:0}slot[name=header]::slotted(*),*::slotted([slot=header]){margin:0;font-weight:400;font-size:1.414rem;line-height:1.5;color:var(--calcite-ui-text-1)}@media screen and (max-width: 859px){slot[name=header]::slotted(*),*::slotted([slot=header]){font-size:1.33rem}}@media screen and (max-width: 479px){slot[name=header]::slotted(*),*::slotted([slot=header]){font-size:1.25rem}}.modal__content{position:relative;padding:0;height:100%;overflow:auto;max-height:calc(100vh - 12rem);overflow-y:auto;display:block;background-color:var(--calcite-ui-foreground-1);z-index:1}.modal__content--spaced{padding:1.5rem}slot[name=content]::slotted(*),*::slotted([slot=content]){font-size:1rem;line-height:1.5}.modal__footer{display:-ms-flexbox;display:flex;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-pack:justify;justify-content:space-between;padding:1.2rem 1.125rem;margin-top:auto;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:0 0 var(--calcite-border-radius) var(--calcite-border-radius);width:100%;background-color:var(--calcite-ui-foreground-1);border-top:1px solid var(--calcite-ui-border-3);z-index:2}.modal__footer--hide-back .modal__back,.modal__footer--hide-secondary .modal__secondary{display:none}.modal__back{display:block;margin-right:auto}:host([dir=rtl]) .modal__back{margin-left:auto;margin-right:unset}.modal__secondary{display:block;margin:0 0.375rem}slot[name=primary]{display:block}:host([size=small]) .modal{width:auto}:host([size=small]) .modal{max-width:32rem}@media screen and (max-width: 35rem){:host([size=small]) .modal{height:100%;max-height:100%;width:100%;max-width:100%;margin:0;border-radius:0}:host([size=small]) .modal__content{-ms-flex:1 1 auto;flex:1 1 auto;max-height:unset}:host([size=small]) .modal__header,:host([size=small]) .modal__footer{-ms-flex:inherit;flex:inherit}:host([size=small][docked]){-ms-flex-align:end;align-items:flex-end}}:host([size=medium]) .modal{max-width:48rem}@media screen and (max-width: 51rem){:host([size=medium]) .modal{height:100%;max-height:100%;width:100%;max-width:100%;margin:0;border-radius:0}:host([size=medium]) .modal__content{-ms-flex:1 1 auto;flex:1 1 auto;max-height:unset}:host([size=medium]) .modal__header,:host([size=medium]) .modal__footer{-ms-flex:inherit;flex:inherit}:host([size=medium][docked]){-ms-flex-align:end;align-items:flex-end}}:host([size=large]) .modal{max-width:94rem}@media screen and (max-width: 97rem){:host([size=large]) .modal{height:100%;max-height:100%;width:100%;max-width:100%;margin:0;border-radius:0}:host([size=large]) .modal__content{-ms-flex:1 1 auto;flex:1 1 auto;max-height:unset}:host([size=large]) .modal__header,:host([size=large]) .modal__footer{-ms-flex:inherit;flex:inherit}:host([size=large][docked]){-ms-flex-align:end;align-items:flex-end}}:host([size=fullscreen]){background-color:transparent}:host([size=fullscreen]) .modal{-webkit-transform:translate3D(0, 20px, 0) scale(0.95);transform:translate3D(0, 20px, 0) scale(0.95);height:100%;max-height:100%;width:100%;max-width:100%;margin:0}:host([size=fullscreen]) .modal__content{-ms-flex:1 1 auto;flex:1 1 auto}:host([size=fullscreen]) .modal__header,:host([size=fullscreen]) .modal__footer{-ms-flex:inherit;flex:inherit}:host(.is-active[size=fullscreen]) .modal{-webkit-transform:translate3D(0, 0, 0) scale(1);transform:translate3D(0, 0, 0) scale(1)}:host(.is-active[size=fullscreen]) .modal__header{border-radius:0}:host(.is-active[size=fullscreen]) .modal__footer{border-radius:0}:host([docked]) .modal{height:auto !important}:host([docked]) .modal__content{height:auto;-ms-flex:1 1 auto;flex:1 1 auto}@media screen and (max-width: 860px){:host([docked]) .modal{border-radius:var(--calcite-border-radius) var(--calcite-border-radius) 0 0}:host([docked]) .modal__close{border-radius:0 var(--calcite-border-radius) 0 0}}@media screen and (max-width: 860px){:host([docked][dir=rtl]) .modal__close{border-radius:var(--calcite-border-radius) var(--calcite-border-radius) 0 0}}:host([color=red]) .modal{border-top:4px solid var(--calcite-ui-red-1)}:host([color=blue]) .modal{border-top:4px solid var(--calcite-ui-blue-1)}:host([color=red]) .modal__header,:host([color=blue]) .modal__header{border-radius:var(--calcite-border-radius)}@media screen and (max-width: 860px){slot[name=header]::slotted(*),*::slotted([slot=header]){font-size:1.2019rem;line-height:1.5}}@media screen and (max-width: 860px) and (max-width: 859px){slot[name=header]::slotted(*),*::slotted([slot=header]){font-size:1.1305rem}}@media screen and (max-width: 860px) and (max-width: 479px){slot[name=header]::slotted(*),*::slotted([slot=header]){font-size:1.0625rem}}@media screen and (max-width: 860px){.modal__title{padding:0.375rem 1.0125rem}}@media screen and (max-width: 860px){.modal__close{padding:0.75rem}}@media screen and (max-width: 860px){.modal__content--spaced{padding:1.0125rem}}@media screen and (max-width: 860px){.modal__footer{position:-webkit-sticky;position:sticky;bottom:0}}@media screen and (max-width: 480px){.modal__footer{-ms-flex-direction:column;flex-direction:column}.modal__back,.modal__secondary{margin:0;margin-bottom:0.375rem}}";const b=class{constructor(i){e(this,i),this.loading=!1}render(){const e=this.loading?t("calcite-loader",{"is-active":!0}):null,i=t("div",{class:"scrim"},e),a=t("div",{class:"content"},t("slot",null));return t(s,null,i,a)}};b.style=":host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;position:relative;pointer-events:none;--calcite-scrim-background:rgba(255, 255, 255, 0.75)}:host([theme=dark]){--calcite-scrim-background:rgba(0, 0, 0, 0.75)}@-webkit-keyframes calcite-scrim-fade-in{0%{opacity:0}100%{opacity:1}}@keyframes calcite-scrim-fade-in{0%{opacity:0}100%{opacity:1}}.scrim{-ms-flex-align:center;align-items:center;-webkit-animation:calcite-scrim-fade-in 250ms ease-in-out;animation:calcite-scrim-fade-in 250ms ease-in-out;background-color:var(--calcite-scrim-background);bottom:0;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;left:0;position:absolute;right:0;top:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}.content{position:relative;z-index:1;color:var(--calcite-ui-text-2)}";export{u as calcite_modal,b as calcite_scrim}