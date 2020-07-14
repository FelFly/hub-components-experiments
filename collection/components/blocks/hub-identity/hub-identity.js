import { Component, Host, h, Prop, State } from '@stencil/core';
import { readSessionFromCookie, authenticateUser, deleteSessionCookie } from '../../../utils/utils';
export class HubIdentity {
    constructor() {
        this.signin = "Sign In";
        this.signout = "Sign Out";
        this.displaysignin = true;
        this.displaysignout = true;
        /**
         * url of the ArcGIS Online organization
         */
        this.orgurl = "https://www.arcgis.com";
    }
    componentWillLoad() {
        this.session = readSessionFromCookie();
    }
    async identitySignin() {
        this.session = await authenticateUser(this.clientid, this.orgurl);
    }
    async identitySignout() {
        this.session = null;
        this.username = null;
        deleteSessionCookie();
    }
    render() {
        let output = [];
        if ((this.session === undefined || this.session === null) && this.displaysignin) {
            output.push(h("calcite-button", { onClick: (_event) => this.identitySignin() }, this.signin));
        }
        else if (this.displaysignout) {
            output.push(h("div", null,
                h("calcite-button", { onClick: (_event) => this.identitySignout() }, `${this.signout}`)));
        }
        return (h(Host, null,
            h("slot", null),
            output));
    }
    static get is() { return "hub-identity"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["hub-identity.css"]
    }; }
    static get styleUrls() { return {
        "$": ["hub-identity.css"]
    }; }
    static get properties() { return {
        "signin": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "signin",
            "reflect": false,
            "defaultValue": "\"Sign In\""
        },
        "signout": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "signout",
            "reflect": false,
            "defaultValue": "\"Sign Out\""
        },
        "displaysignin": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "displaysignin",
            "reflect": false,
            "defaultValue": "true"
        },
        "displaysignout": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "displaysignout",
            "reflect": false,
            "defaultValue": "true"
        },
        "clientid": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "ClientID to identify the app launching OAuth"
            },
            "attribute": "clientid",
            "reflect": false
        },
        "orgurl": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "url of the ArcGIS Online organization"
            },
            "attribute": "orgurl",
            "reflect": false,
            "defaultValue": "\"https://www.arcgis.com\""
        },
        "session": {
            "type": "string",
            "mutable": true,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Serialized authentication information."
            },
            "attribute": "session",
            "reflect": false
        }
    }; }
    static get states() { return {
        "username": {}
    }; }
}
