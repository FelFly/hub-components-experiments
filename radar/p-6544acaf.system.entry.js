System.register(["./p-bda334d9.system.js","./p-ad2aa800.system.js","./p-0f2b0e97.system.js","./p-635da667.system.js","./p-723eb060.system.js","./p-420d31cf.system.js","./p-69e00f75.system.js"],(function(t){"use strict";var e,n,r,i,s,o,a,u,c,l;return{setters:[function(t){e=t.r;n=t.h},function(){},function(t){r=t.i},function(){},function(t){i=t.U},function(t){s=t.r;o=t.u;a=t.b;u=t.s},function(t){c=t.r;l=t.w}],execute:function(){var d='.hub-event-details{border:1px solid #ccc;border-radius:4px;width:100%;color:#323232;font-size:14px;width:380px;height:400px;font-family:\'Arial\';display:grid;grid-template-columns:auto;grid-template-rows:40% 40% 20%;grid-template-areas:"header"\n    "main"\n    "footer"}.hub-event-background-image{background-color:rgb(255, 174, 0);grid-area:header}.hub-event-content{grid-area:main;padding-left:40px;padding-right:40px}.hub-event-footer{grid-area:footer;padding-left:40px}';var g=t("hub_event",function(){function t(t){var n=this;e(this,t);this.orgurl="https://www.arcgis.com";this.callToActionText="Attend";this.triggerRegister=function(){n.session=c();if(!n.session){return i.beginOAuth2({clientId:n.clientid,portal:n.orgurl+"/sharing/rest",redirectUri:window.location+"authenticate.html"}).then((function(t){l(t);n.session=t.serialize();return n.toggleRegister()}))}else{return n.toggleRegister()}};this.toggleRegister=function(){if(!n.attending){return s({groupId:n.eventGroupId,authentication:i.deserialize(n.session)}).then((function(t){if(t.success===true){return Promise.resolve()}})).catch((function(t){if(t.originalMessage==="User is already a member of group."){return Promise.resolve()}else throw t})).then((function(){n.callToActionText="Attending";n.attending=true;return{success:true}}))}else{return o({groupId:n.eventGroupId,authentication:i.deserialize(n.session)}).then((function(t){if(t.success===true){n.callToActionText="Attend";n.attending=false;return{success:true}}else return{success:false}}))}}}t.prototype.componentDidLoad=function(){var t=this;var e=this.orgurl.replace("maps","hub");r(null,{portal:this.orgurl+"/sharing/rest/"}).then((function(n){a(n.id).then((function(n){t.eventServiceUrl=n;u({url:t.eventServiceUrl}).then((function(n){if(n.data.length>0){for(var r=0;r<n.data.length;r++){if(n.data[r].attributes.title===t.eventtitle){var i=n.data[r].attributes;t.eventDate=new Date(i.startDate).toString();t.eventGroupId=i.groupId;t.eventOrganizer=t.digOutContactInfo(i);t.eventUrl=e+"/events/"+i.url;break}}}}))}))}))};t.prototype.digOutContactInfo=function(t){var e=JSON.parse(t.organizers);if(e.length>0){var n="mailto:"+e[0].contact;return"<p>organized by: <a href="+n+">"+e[0].name+"</a></p>"}};t.prototype.render=function(){var t="<p>"+this.eventDate+"</p><p>"+this.eventOrganizer+"</p>";return n("hub-card",{name:this.eventtitle,contenttype:"Event",url:this.eventUrl,description:t,buttonText:this.callToActionText,buttonAction:this.triggerRegister})};return t}());g.style=d}}}));