var __awaiter=this&&this.__awaiter||function(t,e,n,r){function i(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,o){function u(t){try{a(r.next(t))}catch(e){o(e)}}function s(t){try{a(r["throw"](t))}catch(e){o(e)}}function a(t){t.done?n(t.value):i(t.value).then(u,s)}a((r=r.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,u;return u={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(u[Symbol.iterator]=function(){return this}),u;function s(t){return function(e){return a([t,e])}}function a(u){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,i&&(o=u[0]&2?i["return"]:u[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,u[1])).done)return o;if(i=0,o)u=[u[0]&2,o.value];switch(u[0]){case 0:case 1:o=u;break;case 4:n.label++;return{value:u[1],done:false};case 5:n.label++;i=u[1];u=[0];continue;case 7:u=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!o||u[1]>o[0]&&u[1]<o[3])){n.label=u[1];break}if(u[0]===6&&n.label<o[1]){n.label=o[1];o=u;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(u);break}if(o[2])n.ops.pop();n.trys.pop();continue}u=e.call(t,n)}catch(s){u=[6,s];i=0}finally{r=o=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:true}}};System.register(["./p-c74e1ae1.system.js","./p-0f2b0e97.system.js","./p-25515151.system.js"],(function(t){"use strict";var e,n,r,i,o;return{setters:[function(t){e=t._;n=t.a},function(t){r=t.s;i=t.c},function(t){o=t.s}],execute:function(){t("s",u);function u(t,e){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(n){switch(n.label){case 0:console.debug("hub-search search: queryParams",[t,e]);if(!(e===undefined||e!==undefined&&e.isPortal))return[3,2];return[4,s(t,e)];case 1:return[2,n.sent()];case 2:return[4,a(t,e)];case 3:return[2,n.sent()]}}))}))}function s(t,n){return __awaiter(this,void 0,void 0,(function(){var o,u,s,a,c,l;return __generator(this,(function(f){t.sort=(t.sort||"modified").replace(/name/,"title");u=[];if(t.q===undefined||((o=t.q)===null||o===void 0?void 0:o.length)===0){t.q="*"}u.push(t.q);if(t.owner){u.push("owner:"+t.owner)}s=t.sort;a="asc";c=t.sort.match(/^-/);if(c!==null){s=c[1];a="desc"}if(t.customParams!==undefined&&t.customParams.group!==undefined){return[2,r({groupId:t.customParams.group.id,q:u.join(" AND "),num:t.limit||"10",sortField:s,sortOrder:a,params:{categories:t.customParams.group.categories}}).then((function(t){return new Promise((function(n,r){var i=t.results.map((function(t){return e({item:t})}));n({results:i})}))}))]}if(t.groups!==undefined&&t.groups.length>0){l=t.groups.map((function(t){return"group:"+t})).join(" OR ");u.push("("+l+")")}console.debug("hub-search searchPortal: queryParams",[t,n]);return[2,i({q:u.join(" AND "),num:t.limit||"10",sortField:s,sortOrder:a,authentication:n===null||n===void 0?void 0:n.authentication}).then((function(t){return new Promise((function(n,r){var i=t.results.map((function(t){return e({item:t})}));n({results:i,meta:{total:t.total,count:t.num,start:t.start}})}))}))]}))}))}function a(t,e){return __awaiter(this,void 0,void 0,(function(){var r,i,u,s,a;return __generator(this,(function(c){switch(c.label){case 0:t.sort=(t.sort||"modified").replace(/title/,"name");r={q:t.q,sort:t.sort,agg:{fields:"tags,collection,owner,source,hasApi,downloadable",size:t.limit}};r.page={key:btoa(JSON.stringify({hub:{start:1,size:t.limit},ago:{start:1,size:t.limit}}))};if(t.groups!==undefined&&t.groups.length>0){r.groupIds=t.groups.join(",")}i=o(r);return[4,fetch(e.hubApiUrl+"/api/v3/search?"+i,{})];case 1:u=c.sent();return[4,u.json()];case 2:s=c.sent();a=s.data.map(n);return[2,{results:a}]}}))}))}}}}));