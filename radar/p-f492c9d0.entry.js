import{r as t,h as i,H as s}from"./p-1fd9320b.js";import"./p-3a73ba05.js";import"./p-87086a15.js";import{r as n,a as l,d as h}from"./p-f4f99a31.js";const o=class{constructor(i){t(this,i),this.signin="Sign In",this.signout="Sign Out",this.displaysignin=!0,this.displaysignout=!0,this.orgurl="https://www.arcgis.com"}componentWillLoad(){this.session=n()}async identitySignin(){this.session=await l(this.clientid,this.orgurl)}async identitySignout(){this.session=null,this.username=null,h()}render(){let t=[];return null==this.session&&this.displaysignin?t.push(i("calcite-button",{onClick:()=>this.identitySignin()},this.signin)):this.displaysignout&&t.push(i("div",null,i("calcite-button",{onClick:()=>this.identitySignout()},""+this.signout))),i(s,null,i("slot",null),t)}};o.style=":host{display:block}";export{o as hub_identity}