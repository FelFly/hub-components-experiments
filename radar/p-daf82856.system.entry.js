var __awaiter=this&&this.__awaiter||function(t,n,i,e){function r(t){return t instanceof i?t:new i((function(n){n(t)}))}return new(i||(i=Promise))((function(i,s){function o(t){try{a(e.next(t))}catch(n){s(n)}}function u(t){try{a(e["throw"](t))}catch(n){s(n)}}function a(t){t.done?i(t.value):r(t.value).then(o,u)}a((e=e.apply(t,n||[])).next())}))};var __generator=this&&this.__generator||function(t,n){var i={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},e,r,s,o;return o={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function u(t){return function(n){return a([t,n])}}function a(o){if(e)throw new TypeError("Generator is already executing.");while(i)try{if(e=1,r&&(s=o[0]&2?r["return"]:o[0]?r["throw"]||((s=r["return"])&&s.call(r),0):r.next)&&!(s=s.call(r,o[1])).done)return s;if(r=0,s)o=[o[0]&2,s.value];switch(o[0]){case 0:case 1:s=o;break;case 4:i.label++;return{value:o[1],done:false};case 5:i.label++;r=o[1];o=[0];continue;case 7:o=i.ops.pop();i.trys.pop();continue;default:if(!(s=i.trys,s=s.length>0&&s[s.length-1])&&(o[0]===6||o[0]===2)){i=0;continue}if(o[0]===3&&(!s||o[1]>s[0]&&o[1]<s[3])){i.label=o[1];break}if(o[0]===6&&i.label<s[1]){i.label=s[1];s=o;break}if(s&&i.label<s[2]){i.label=s[2];i.ops.push(o);break}if(s[2])i.ops.pop();i.trys.pop();continue}o=n.call(t,i)}catch(u){o=[6,u];r=0}finally{e=s=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./p-bda334d9.system.js","./p-ad2aa800.system.js","./p-723eb060.system.js","./p-69e00f75.system.js"],(function(t){"use strict";var n,i,e,r,s,o;return{setters:[function(t){n=t.r;i=t.h;e=t.H},function(){},function(){},function(t){r=t.r;s=t.a;o=t.d}],execute:function(){var u=":host{display:block}";var a=t("hub_identity",function(){function t(t){n(this,t);this.signin="Sign In";this.signout="Sign Out";this.displaysignin=true;this.displaysignout=true;this.orgurl="https://www.arcgis.com"}t.prototype.componentWillLoad=function(){this.session=r()};t.prototype.identitySignin=function(){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(n){switch(n.label){case 0:t=this;return[4,s(this.clientid,this.orgurl)];case 1:t.session=n.sent();return[2]}}))}))};t.prototype.identitySignout=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.session=null;this.username=null;o();return[2]}))}))};t.prototype.render=function(){var t=this;var n=[];if((this.session===undefined||this.session===null)&&this.displaysignin){n.push(i("calcite-button",{onClick:function(n){return t.identitySignin()}},this.signin))}else if(this.displaysignout){n.push(i("div",null,i("calcite-button",{onClick:function(n){return t.identitySignout()}},""+this.signout)))}return i(e,null,i("slot",null),n)};return t}());a.style=u}}}));