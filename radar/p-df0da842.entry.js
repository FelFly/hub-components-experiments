import{r as t,c as i,h as o,H as e,g as l}from"./p-1fd9320b.js";import{g as s}from"./p-7bc17319.js";const a=class{constructor(o){t(this,o),this.color="blue",this.scale="m",this.dropdownIconType="chevron",this.loading=!1,this.calciteSplitButtonPrimaryClickHandler=t=>this.calciteSplitButtonPrimaryClick.emit(t),this.calciteSplitButtonPrimaryClick=i(this,"calciteSplitButtonPrimaryClick",7)}validateColor(){["blue","red","dark","light"].includes(this.color)||(this.color="blue")}validateScale(){["s","m","l"].includes(this.scale)||(this.scale="m")}validateTheme(){["dark","light"].includes(this.theme)||(this.theme="light")}validateDropdownIconType(){["chevron","caret","ellipsis"].includes(this.dropdownIconType)||(this.dropdownIconType="chevron")}connectedCallback(){this.validateColor(),this.validateScale(),this.validateTheme(),this.validateDropdownIconType()}render(){const t=s(this.el);return o(e,{dir:t},o("div",{class:"split-button__container"},o("calcite-button",{dir:t,"aria-label":this.primaryLabel,color:this.color,scale:this.scale,loading:this.loading,icon:this.primaryIcon,iconPosition:"start",disabled:this.disabled,theme:this.theme,onClick:this.calciteSplitButtonPrimaryClickHandler},this.primaryText),o("div",{class:"split-button__divider-container"},o("div",{class:"split-button__divider"})),o("calcite-dropdown",{alignment:"end",dir:t,theme:this.theme,scale:this.scale,width:this.scale},o("calcite-button",{dir:t,"aria-label":this.dropdownLabel,slot:"dropdown-trigger",scale:this.scale,color:this.color,disabled:this.disabled,theme:this.theme,icon:this.dropdownIcon}),o("slot",null))))}get dropdownIcon(){return"chevron"===this.dropdownIconType?"chevronDown":"caret"===this.dropdownIconType?"caretDown":"ellipsis"}get el(){return l(this)}static get watchers(){return{color:["validateColor"],scale:["validateScale"],theme:["validateTheme"],dropdownIconType:["validateDropdownIconType"]}}};a.style=":host([hidden]){display:none}:host{--calcite-button-light:#eaeaea;--calcite-button-light-text:#151515;--calcite-button-dark:#404040;--calcite-button-dark-text:#0b0b0b}:host .split-button__container{display:-ms-flexbox;display:flex}:host .split-button__container>calcite-dropdown>calcite-button{height:100%}:host([color=blue]) .split-button__divider-container{background-color:var(--calcite-ui-blue-1)}:host([color=blue]):host([theme=dark]) .split-button__divider{background-color:var(--calcite-button-dark-text)}:host([color=red]) .split-button__divider-container{background-color:var(--calcite-ui-red-1)}:host([color=red]):host([theme=dark]) .split-button__divider{background-color:var(--calcite-button-dark-text)}:host([color=light]) .split-button__divider-container{background-color:var(--calcite-button-light)}:host([color=light]) .split-button__divider{background-color:var(--calcite-button-light-text)}:host([color=dark]) .split-button__divider-container{background-color:var(--calcite-button-dark)}:host([disabled]) .split-button__divider-container{opacity:0.4}:host([disabled]) calcite-dropdown>calcite-button{pointer-events:none}.split-button__divider-container{width:1px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-transition:all 0.15s ease-in-out;transition:all 0.15s ease-in-out}.split-button__divider{width:1px;height:66.666%;display:inline-block;background-color:white}";export{a as calcite_split_button}