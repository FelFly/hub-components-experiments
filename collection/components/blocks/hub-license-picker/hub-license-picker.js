import { Component, Host, h } from '@stencil/core';
export class HubLicensePicker {
    render() {
        return (h(Host, null,
            h("slot", null),
            h("em", null, "I'm a license picker!")));
    }
    static get is() { return "hub-license-picker"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["hub-license-picker.css"]
    }; }
    static get styleUrls() { return {
        "$": ["hub-license-picker.css"]
    }; }
}
