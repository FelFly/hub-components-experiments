import{r as s,h as t,H as i}from"./p-1fd9320b.js";import{C as r,H as o}from"./p-ab9e545c.js";import"./p-3a73ba05.js";import"./p-25b1b343.js";import"./p-e094b97e.js";import"./p-3a912305.js";import"./p-fbebadbb.js";import"./p-51001fa3.js";import{f as a,h as p}from"./p-0f01cfa0.js";const e=class{constructor(t){s(this,t),this.username="",this.type="member"}componentWillLoad(){this.loadProfile(this.username)}async loadProfile(s){try{console.log("Profile: ",[this.type,r.team,r[this.type]==r.team]),this.profile=r[this.type]==r.team?await a(s):await p(s)}catch(t){console.log("hub-profile-card: error with profile",s)}}render(){let s=[];return null!=this.profile&&s.push(t("hub-card",{class:"hub-profile",contenttype:o[this.profile.hubType],image:this.profile.thumbnailUrl,name:this.profile.name,description:this.profile.summary,url:this.profile.url})),t(i,null,s)}};e.style=":host{display:block}";export{e as hub_profile_card}