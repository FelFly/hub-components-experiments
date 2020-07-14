'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-987d1b3d.js');
require('./index-859d80b7.js');
require('./index-52faf404.js');
const utils = require('./utils-05b33af8.js');

const hubIdentityCss = ":host{display:block}";

const HubIdentity = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        this.session = utils.readSessionFromCookie();
    }
    async identitySignin() {
        this.session = await utils.authenticateUser(this.clientid, this.orgurl);
    }
    async identitySignout() {
        this.session = null;
        this.username = null;
        utils.deleteSessionCookie();
    }
    render() {
        let output = [];
        if ((this.session === undefined || this.session === null) && this.displaysignin) {
            output.push(index.h("calcite-button", { onClick: (_event) => this.identitySignin() }, this.signin));
        }
        else if (this.displaysignout) {
            output.push(index.h("div", null, index.h("calcite-button", { onClick: (_event) => this.identitySignout() }, `${this.signout}`)));
        }
        return (index.h(index.Host, null, index.h("slot", null), output));
    }
};
HubIdentity.style = hubIdentityCss;

exports.hub_identity = HubIdentity;
