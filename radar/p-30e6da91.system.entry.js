var __awaiter=this&&this.__awaiter||function(t,e,r,i){function n(t){return t instanceof r?t:new r((function(e){e(t)}))}return new(r||(r=Promise))((function(r,o){function a(t){try{s(i.next(t))}catch(e){o(e)}}function l(t){try{s(i["throw"](t))}catch(e){o(e)}}function s(t){t.done?r(t.value):n(t.value).then(a,l)}s((i=i.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var r={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},i,n,o,a;return a={next:l(0),throw:l(1),return:l(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function l(t){return function(e){return s([t,e])}}function s(a){if(i)throw new TypeError("Generator is already executing.");while(r)try{if(i=1,n&&(o=a[0]&2?n["return"]:a[0]?n["throw"]||((o=n["return"])&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;if(n=0,o)a=[a[0]&2,o.value];switch(a[0]){case 0:case 1:o=a;break;case 4:r.label++;return{value:a[1],done:false};case 5:r.label++;n=a[1];a=[0];continue;case 7:a=r.ops.pop();r.trys.pop();continue;default:if(!(o=r.trys,o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){r=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){r.label=a[1];break}if(a[0]===6&&r.label<o[1]){r.label=o[1];o=a;break}if(o&&r.label<o[2]){r.label=o[2];r.ops.push(a);break}if(o[2])r.ops.pop();r.trys.pop();continue}a=e.call(t,r)}catch(l){a=[6,l];n=0}finally{i=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-bda334d9.system.js","./p-42d99eaa.system.js","./p-cb783f99.system.js"],(function(t){"use strict";var e,r,i,n,o,a,l,s;return{setters:[function(t){e=t.r;r=t.c;i=t.h;n=t.H;o=t.g},function(t){a=t.b;l=t.g},function(t){s=t.g}],execute:function(){var c=":host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;margin-top:0.25rem}:host([layout=vertical]){-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:start;-ms-flex-item-align:start;align-self:flex-start}:host([width=auto]){width:auto}:host([width=full]){width:100%;display:-ms-flexbox;display:flex}:host([width=full]) ::slotted(calcite-radio-group-item){-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-pack:center;justify-content:center}:host([width=full][layout=vertical]) ::slotted(calcite-radio-group-item){-ms-flex-pack:start;justify-content:start}::slotted(calcite-radio-group-item[checked]),::slotted(calcite-radio-group-item:focus){z-index:0}";var u=t("calcite_radio_group",function(){function t(t){var i=this;e(this,t);this.appearance="solid";this.layout="horizontal";this.width="auto";this.hiddenInput=function(){var t=document.createElement("input");t.type="hidden";i.el.appendChild(t);return t}();this.calciteRadioGroupChange=r(this,"calciteRadioGroupChange",7)}t.prototype.handleNameChange=function(t){this.hiddenInput.name=t};t.prototype.handleSelectedItemChange=function(t,e){if(t===e){return}var r=this.getItems();var i=Array.from(r).filter((function(e){return e===t})).pop();if(i){this.selectItem(i);this.calciteRadioGroupChange.emit()}else if(r[0]){r[0].tabIndex=0}};t.prototype.connectedCallback=function(){var t=["s","m","l"];if(!t.includes(this.scale))this.scale=a(this.el.parentElement,"scale","m");var e=["solid","outline"];if(!e.includes(this.appearance))this.appearance="solid";var r=["horizontal","vertical"];if(!r.includes(this.layout))this.layout="horizontal";var i=["auto","full"];if(!i.includes(this.width))this.width="auto";var n=this.getItems();var o=Array.from(n).filter((function(t){return t.checked})).pop();if(o){this.selectItem(o)}else if(n[0]){n[0].tabIndex=0}var l=this,s=l.hiddenInput,c=l.name;if(c){s.name=c}if(o){s.value=o.value}};t.prototype.componentDidLoad=function(){this.hasLoaded=true};t.prototype.render=function(){return i(n,{role:"radiogroup"},i("slot",null))};t.prototype.handleClick=function(t){if(t.target.localName==="calcite-radio-group-item"){this.selectItem(t.target)}};t.prototype.handleSelected=function(t){if(this.hasLoaded){t.stopPropagation();t.preventDefault();this.selectItem(t.target)}};t.prototype.handleKeyDown=function(t){var e=["ArrowLeft","ArrowUp","ArrowRight","ArrowDown"," "];var r=s(t.key);var i=this,n=i.el,o=i.selectedItem;if(e.indexOf(r)===-1){return}var a=r;if(l(n)==="rtl"){if(r==="ArrowRight"){a="ArrowLeft"}if(r==="ArrowLeft"){a="ArrowRight"}}var c=this.getItems();var u=-1;c.forEach((function(t,e){if(t===o){u=e}}));switch(a){case"ArrowLeft":case"ArrowUp":t.preventDefault();var f=u<1?c.item(c.length-1):c.item(u-1);this.selectItem(f);return;case"ArrowRight":case"ArrowDown":t.preventDefault();var h=u===-1?c.item(1):c.item(u+1)||c.item(0);this.selectItem(h);return;case" ":t.preventDefault();this.selectItem(t.target);return;default:return}};t.prototype.setFocus=function(){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(e){(t=this.selectedItem||this.getItems()[0])===null||t===void 0?void 0:t.focus();return[2]}))}))};t.prototype.getItems=function(){return this.el.querySelectorAll("calcite-radio-group-item")};t.prototype.selectItem=function(t){if(t===this.selectedItem){return}var e=this.getItems();var r=null;e.forEach((function(e){var i=e.value===t.value;if(i&&!e.checked||!i&&e.checked){e.checked=i}e.tabIndex=i?0:-1;if(i){r=e}}));this.selectedItem=r;this.syncWithInputProxy(r);if(r){r.focus()}};t.prototype.syncWithInputProxy=function(t){this.hiddenInput.value=t?t.value:""};Object.defineProperty(t.prototype,"el",{get:function(){return o(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{name:["handleNameChange"],selectedItem:["handleSelectedItemChange"]}},enumerable:true,configurable:true});return t}());u.style=c}}}));