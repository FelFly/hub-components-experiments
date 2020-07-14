import{c as t,_ as n,r,a as e,w as i}from"./p-0609b493.js";function s(n){return void 0===n&&(n={}),n.portal?t(n.portal):n.authentication?n.authentication.portal:"https://www.arcgis.com/sharing/rest"}function o(t){var n=JSON.parse(JSON.stringify(t));return n.data&&("undefined"!=typeof Blob&&t.data instanceof Blob||"ReadStream"===t.data.constructor.name?n.file=t.data:n.text=t.data,delete n.data),n}function u(t){return t.owner?Promise.resolve(t.owner):t.item&&t.item.owner?Promise.resolve(t.item.owner):t.authentication&&t.authentication.getUsername?t.authentication.getUsername():Promise.reject(new Error("Could not determine the owner of this item. Pass the `owner`, `item.owner`, or `authentication` option."))}function a(t){return u(t).then((function(e){var i=s(t)+"/content/users/"+e+"/items/"+t.item.id+"/update";return t.params=n({},t.params,o(t.item)),r(i,t)}))}function h(t){return u(t).then((function(i){var o=s(t)+"/content/users/"+i+"/items/"+t.id+"/addPart",u=e(t,["file","partNum"],{params:n({},t.params)});return r(o,u)}))}function c(t){return function(t){return t.file&&!t.multipart?Promise.reject(new Error("The request must be a multipart request for file uploading.")):t.multipart&&!t.filename?Promise.reject(new Error("The file name is required for a multipart request.")):u(t).then((function(i){var u=s(t)+"/content/users/"+i,a=u+"/addItem";t.folderId&&(a=u+"/"+t.folderId+"/addItem"),t.params=n({},t.params,o(t.item));var h=e(t,["owner","folderId","file","dataUrl","text","async","multipart","filename","overwrite"],{params:n({},t.params)});return r(a,h)}))}(n({folderId:null},t))}function f(t,e){var i=s(e)+"/content/items/"+t,o=n({httpMethod:"GET"},e);return r(i,o)}function m(t,e){var i=s(e)+"/content/items/"+t+"/data",o=n({httpMethod:"GET",params:{}},e);return o.file&&(o.params.f=null),r(i,o).catch((function(t){if(!RegExp(/The string did not match the expected pattern|(Unexpected end of (JSON input|data at line 1 column 1))/i).test(t.message))throw t}))}function d(t,n){var e=s(n)+"/content/items/"+t+"/groups";return r(e,n)}function l(t){return u(t).then((function(i){var o=s(t)+"/content/users/"+i+"/items/"+t.id+"/status",u=e(t,["jobId","jobType"],{params:n({},t.params)});return r(o,u)}))}function p(t,e){var i=s(e)+"/community/groups/"+t,o=n({httpMethod:"GET"},e);return r(i,o)}var g=function(){function t(t){void 0===t&&(t=""),this.termStack=[],this.rangeStack=[],this.openGroups=0,this.q=t}return t.prototype.match=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return this.termStack=this.termStack.concat(t),this},t.prototype.in=function(t){return this.hasRange||this.hasTerms?(t&&"*"!==t&&(this.q+=t+":"),this.commit()):(i("`in("+(t?'"'+t+'"':"")+")` was called with no call to `match(...)` or `from(...)`/`to(...)`. Your query was not modified."),this)},t.prototype.startGroup=function(){return this.commit(),this.openGroups>0&&(this.q+=" "),this.openGroups++,this.q+="(",this},t.prototype.endGroup=function(){return this.openGroups<=0?(i("`endGroup(...)` was called without calling `startGroup(...)` first. Your query was not modified."),this):(this.commit(),this.openGroups--,this.q+=")",this)},t.prototype.and=function(){return this.addModifier("and")},t.prototype.or=function(){return this.addModifier("or")},t.prototype.not=function(){return this.addModifier("not")},t.prototype.from=function(t){return this.hasTerms?(i("`from(...)` is not allowed after `match(...)` try using `.from(...).to(...).in(...)`. Your query was not modified."),this):(this.rangeStack[0]=t,this)},t.prototype.to=function(t){return this.hasTerms?(i("`to(...)` is not allowed after `match(...)` try using `.from(...).to(...).in(...)`. Your query was not modified."),this):(this.rangeStack[1]=t,this)},t.prototype.boost=function(t){return this.commit(),this.q+="^"+t,this},t.prototype.toParam=function(){return this.commit(),this.cleanup(),this.q},t.prototype.clone=function(){return this.commit(),this.cleanup(),new t(this.q+"")},t.prototype.addModifier=function(t){return this.currentModifer?(i("You have called `"+this.currentModifer+"()` after `"+t+"()`. Your current query was not modified."),this):(this.commit(),""===this.q&&"not"!==t?(i("You have called `"+t+"()` without calling another method to modify your query first. Try calling `match()` first."),this):(this.currentModifer=t,this.q+=""===this.q?"":" ",this.q+=t.toUpperCase()+" ",this))},t.prototype.hasWhiteSpace=function(t){return/\s/g.test(t)},t.prototype.formatTerm=function(t){return t instanceof Date?t.getTime():"string"==typeof t&&this.hasWhiteSpace(t)?'"'+t+'"':t},t.prototype.commit=function(){var t=this;return this.currentModifer=void 0,this.hasRange&&(this.q+="["+this.formatTerm(this.rangeStack[0])+" TO "+this.formatTerm(this.rangeStack[1])+"]",this.rangeStack=[void 0,void 0]),this.hasTerms&&(this.q+=this.termStack.map((function(n){return t.formatTerm(n)})).join(" "),this.termStack=[]),this},Object.defineProperty(t.prototype,"hasTerms",{get:function(){return this.termStack.length>0},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"hasRange",{get:function(){return this.rangeStack.length&&this.rangeStack[0]&&this.rangeStack[1]},enumerable:!0,configurable:!0}),t.prototype.cleanup=function(){if(this.openGroups>0)for(i("Automatically closing "+this.openGroups+" group(s). You can use `endGroup(...)` to remove this warning.");this.openGroups>0;)this.q+=")",this.openGroups--;var t=this.q;this.q=t.replace(/( AND ?| NOT ?| OR ?)*$/,""),t!==this.q&&i("`startGroup(...)` was called without calling `endGroup(...)` first. Your query was not modified."),this.q=this.q.replace(/(\(\))*/,"")},t}();function w(t,n){var i,o,u;switch(o="string"==typeof t||t instanceof g?{httpMethod:"GET",params:{q:t}}:e(t,["q","num","start","sortField","sortOrder"],{httpMethod:"GET"}),n){case"item":u="/search";break;case"group":u="/community/groups";break;case"groupContent":if("string"==typeof t||t instanceof g||!t.groupId)return Promise.reject(new Error("you must pass a `groupId` option to `searchGroupContent`"));u="/content/groups/"+t.groupId+"/search";break;default:u="/portals/self/users/search"}return i=s(o)+u,r(i,o).then((function(r){return r.nextStart&&-1!==r.nextStart&&(r.nextPage=function(){var e;return"string"==typeof t||t instanceof g?e={q:t,start:r.nextStart}:(e=t).start=r.nextStart,w(e,n)}),r}))}function v(t){return w(t,"item")}function y(t){return u(t).then((function(n){var e=s(t)+"/content/users/"+n+"/items/"+t.id+"/commit";return r(e,t)}))}function b(t){return w(t,"group")}function q(t){return w(t,"groupContent")}function T(t){var n=s(t)+"/community/groups/"+t.id+"/join";return r(n,t)}function G(t){var n=s(t)+"/community/groups/"+t.id+"/leave";return r(n,t)}function E(t){var e,i={httpMethod:"GET"};if("string"==typeof t)e="https://www.arcgis.com/sharing/rest/community/users/"+t;else{var o=t.username||t.authentication.username;e=s(t)+"/community/users/"+encodeURIComponent(o),i=n({},t,i)}return r(e,i)}function I(t){return s(t)+"/community/users/"+encodeURIComponent(t.username)}function O(t){return w(t,"user")}function Y(t){var e=t.user.username||t.authentication.username,i=s(t)+"/community/users/"+encodeURIComponent(e)+"/update";return t.params=n({},t.user,t.params),delete t.user,r(i,t)}function P(t,e){var i=t||"self",o=s(e)+"/portals/"+i,u=n({httpMethod:"GET"},e);return r(o,u)}export{m as a,s as b,v as c,E as d,O as e,Y as f,f as g,b as h,P as i,T as j,p as k,G as l,d as m,c as n,I as o,h as p,y as q,l as r,q as s,a as u}