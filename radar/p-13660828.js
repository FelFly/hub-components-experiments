import{_ as e,r as t,c as r,a as n}from"./p-0609b493.js";import{c as a,j as i,l as u}from"./p-ae78f844.js";import{i as s}from"./p-2c58a2fe.js";function o(t,r){return function(t,r){return a(e({q:"typekeywords:hubEventsLayer AND orgid:"+t},r)).then((function(e){if(e.results&&e.results.length>0){var t=void 0;if(1===e.results.length)t=e.results[0];else if(e.results.length>1){var r=e.results.reduce((function(e,t){return t.typeKeywords.includes("View Service")?"public"===t.access?e.public=t:e.org=t:e.admin=t,e}),{});t=r.admin||r.org||r.public}return t}throw Error("No events service found. Events are likely not enabled.")}))}(t,r).then((function(e){var n=s(r),a=e.url.match(/services\/(.*?)\/FeatureServer/);if(a[1])return n+"/api/v3/events/"+t+"/"+a[1]+"/FeatureServer/0"}))}function d(e,t){var r,n=Object.assign({},t);if("cancelled"===e)t.orderByFields||(n.orderByFields="EditDate DESC"),r="isCancelled=1 AND status<>'draft'";else if("draft"===e){t.orderByFields||(n.orderByFields="EditDate DESC");var a=t.authentication;r="Creator = '"+(a?a.username:null)+"' AND status = 'draft'"}else t.orderByFields||(n.orderByFields="upcoming"===e?"startDate ASC":"startDate DESC"),r="endDate"+("upcoming"===e?">":"<=")+"CURRENT_TIMESTAMP AND (isCancelled<>1 OR isCancelled IS NULL) AND status<>'draft'";return n.where=t.where?t.where+" AND "+r:r,n}function l(a){var i=n(a,["where","objectIds","relationParam","time","distance","units","outFields","geometry","geometryType","spatialRel","returnGeometry","maxAllowableOffset","geometryPrecision","inSR","outSR","gdbVersion","returnDistinctValues","returnIdsOnly","returnCountOnly","returnExtentOnly","orderByFields","groupByFieldsForStatistics","outStatistics","returnZ","returnM","multipatchOption","resultOffset","resultRecordCount","quantizationParameters","returnCentroid","resultType","historicMoment","returnTrueCurves","sqlFormat","returnExceededLimitFeatures","f"],{httpMethod:"GET",params:e({where:"1=1",outFields:"*"},a.params)});return t(r(a.url)+"/query",i)}function c(a){var i=r(a.url)+"/addFeatures",u=n(a,["features","gdbVersion","returnEditMoment","rollbackOnFailure"],{params:e({},a.params)});return t(i,u)}function f(a){var i=r(a.url)+"/deleteFeatures",u=n(a,["where","objectIds","gdbVersion","returnEditMoment","rollbackOnFailure"],{params:e({},a.params)});return t(i,u)}function m(t){var r=e({returnGeometry:!0},t);return l(r).then((function(e){return e.features.length<=0?{data:[],included:[]}:r.authentication?r.authentication.getToken(r.url).then((function(n){return v(e.features,r.url,t,n)})):v(e.features,r.url,t)}))}function v(e,t,r,n){var i=[],u=[],s=[],o=(new Date).getTime(),d="";if(e.forEach((function(e){var r=e.attributes,a=e.geometry,s=null;if(r.imageAttributes){var l=JSON.parse(r.imageAttributes);l.crop&&(s=t+"/"+r.OBJECTID+"/attachments/"+l.crop+"?v="+o,n&&(s+="&token="+n))}u.push({id:r.OBJECTID,type:"events",imageUrl:s,attributes:r,geometry:a});var c=r.siteId;null!=c&&-1===i.indexOf(c)&&(i.push(c),d+=d.length>0?" OR id:":"id:",d+=c)})),0===i.length)return{included:s,data:u};var l=r;return l.q=d,a(l).then((function(e){return e.results.forEach((function(e){s.push({id:e.id,type:"sites",attributes:{id:e.id,url:e.url}})})),{included:s,data:u}}))}function p(e){return i({id:e.groupId,authentication:e.authentication})}function y(e){return u({id:e.groupId,authentication:e.authentication})}export{c as a,o as b,f as d,d as g,l as q,p as r,m as s,y as u}