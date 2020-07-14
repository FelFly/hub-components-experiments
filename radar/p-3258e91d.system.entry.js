var __awaiter=this&&this.__awaiter||function(t,e,i,o){function r(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,n){function a(t){try{s(o.next(t))}catch(e){n(e)}}function c(t){try{s(o["throw"](t))}catch(e){n(e)}}function s(t){t.done?i(t.value):r(t.value).then(a,c)}s((o=o.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var i={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},o,r,n,a;return a={next:c(0),throw:c(1),return:c(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function c(t){return function(e){return s([t,e])}}function s(a){if(o)throw new TypeError("Generator is already executing.");while(i)try{if(o=1,r&&(n=a[0]&2?r["return"]:a[0]?r["throw"]||((n=r["return"])&&n.call(r),0):r.next)&&!(n=n.call(r,a[1])).done)return n;if(r=0,n)a=[a[0]&2,n.value];switch(a[0]){case 0:case 1:n=a;break;case 4:i.label++;return{value:a[1],done:false};case 5:i.label++;r=a[1];a=[0];continue;case 7:a=i.ops.pop();i.trys.pop();continue;default:if(!(n=i.trys,n=n.length>0&&n[n.length-1])&&(a[0]===6||a[0]===2)){i=0;continue}if(a[0]===3&&(!n||a[1]>n[0]&&a[1]<n[3])){i.label=a[1];break}if(a[0]===6&&i.label<n[1]){i.label=n[1];n=a;break}if(n&&i.label<n[2]){i.label=n[2];i.ops.push(a);break}if(n[2])i.ops.pop();i.trys.pop();continue}a=e.call(t,i)}catch(c){a=[6,c];r=0}finally{o=n=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-bda334d9.system.js","./p-42d99eaa.system.js","./p-cb783f99.system.js","./p-c53a6660.system.js"],(function(t){"use strict";var e,i,o,r,n,a,c,s;return{setters:[function(t){e=t.r;i=t.c;o=t.h;r=t.H;n=t.g},function(t){a=t.g},function(t){c=t.g},function(t){s=t.g}],execute:function(){var l=":host([hidden]){display:none}:host{-ms-flex:0 1 auto;flex:0 1 auto;outline:none;margin-right:1.25rem;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:1.25rem;margin-inline-end:1.25rem}:host-context([dir=rtl]){margin-right:0;margin-left:1.25rem}:host-context([theme=dark]){--calcite-ui-blue-1:#00A0FF;--calcite-ui-blue-2:#0087D7;--calcite-ui-blue-3:#47BBFF;--calcite-ui-green-1:#36DA43;--calcite-ui-green-2:#11AD1D;--calcite-ui-green-3:#44ED51;--calcite-ui-yellow-1:#FFC900;--calcite-ui-yellow-2:#F4B000;--calcite-ui-yellow-3:#FFE24D;--calcite-ui-red-1:#FE583E;--calcite-ui-red-2:#F3381B;--calcite-ui-red-3:#FF7465;--calcite-ui-background:#202020;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#353535;--calcite-ui-foreground-3:#404040;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-4:#757575;--calcite-ui-border-5:#9f9f9f}:host([layout=center]){-ms-flex-preferred-size:200px;flex-basis:200px;text-align:center;margin:0 1.25rem}:host{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host(:focus){outline:2px solid var(--calcite-ui-blue-1);outline-offset:-2px}:host(:active) a,:host(:focus) a,:host(:hover) a{outline:none;text-decoration:none;color:var(--calcite-ui-text-1);border-bottom-color:var(--calcite-ui-border-2)}:host([is-active]) a{color:var(--calcite-ui-text-1);border-bottom-color:var(--calcite-ui-blue-1);font-weight:500}a{-webkit-box-sizing:border-box;box-sizing:border-box;font-size:0.875rem;line-height:1.5;padding:0.75rem 0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;border-bottom:3px solid transparent;cursor:pointer;-webkit-transition:all 0.15s ease-in-out;transition:all 0.15s ease-in-out;color:var(--calcite-ui-text-3);outline:none;width:100%;display:block}";var u=t("calcite_tab_title",function(){function t(t){e(this,t);this.isActive=false;this.guid="calcite-tab-title-"+s();this.calciteTabsActivate=i(this,"calciteTabsActivate",7);this.calciteTabsFocusNext=i(this,"calciteTabsFocusNext",7);this.calciteTabsFocusPrevious=i(this,"calciteTabsFocusPrevious",7);this.calciteTabTitleRegister=i(this,"calciteTabTitleRegister",7);this.calciteTabTitleUnregister=i(this,"calciteTabTitleUnregister",7)}t.prototype.componentWillLoad=function(){if(this.tab&&this.isActive){this.calciteTabsActivate.emit({tab:this.tab})}};t.prototype.componentWillRender=function(){var t;this.layout=(t=this.el.closest("calcite-tabs"))===null||t===void 0?void 0:t.layout};t.prototype.render=function(){var t=this.el.id||this.guid;return o(r,{id:t,"aria-controls":this.controls,"aria-expanded":this.isActive.toString(),role:"tab",tabindex:"0"},o("a",null,o("slot",null)))};t.prototype.componentDidLoad=function(){this.calciteTabTitleRegister.emit()};t.prototype.componentDidUnload=function(){this.calciteTabTitleUnregister.emit()};t.prototype.tabChangeHandler=function(t){var e=this;if(this.tab){this.isActive=this.tab===t.detail.tab}else{this.getTabIndex().then((function(i){e.isActive=i===t.detail.tab}))}};t.prototype.onClick=function(){this.calciteTabsActivate.emit({tab:this.tab})};t.prototype.keyDownHandler=function(t){switch(c(t.key)){case" ":case"Enter":this.calciteTabsActivate.emit({tab:this.tab});t.preventDefault();break;case"ArrowRight":if(a(this.el)==="ltr"){this.calciteTabsFocusNext.emit()}else{this.calciteTabsFocusPrevious.emit()}break;case"ArrowLeft":if(a(this.el)==="ltr"){this.calciteTabsFocusPrevious.emit()}else{this.calciteTabsFocusNext.emit()}break}};t.prototype.getTabIndex=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return[2,Promise.resolve(Array.prototype.indexOf.call(this.el.parentElement.querySelectorAll("calcite-tab-title"),this.el))]}))}))};t.prototype.getTabIdentifier=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return[2,this.tab?Promise.resolve(this.tab):this.getTabIndex()]}))}))};t.prototype.updateAriaInfo=function(t,e){if(t===void 0){t=[]}if(e===void 0){e=[]}return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(i){this.controls=t[e.indexOf(this.el.id)]||null;return[2,Promise.resolve()]}))}))};Object.defineProperty(t.prototype,"el",{get:function(){return n(this)},enumerable:true,configurable:true});return t}());u.style=l}}}));