import { r as registerInstance, h, H as Host } from './index-12d3ca5e.js';
import './index-fd5669bb.js';
import './index-80082925.js';
import { r as readSessionFromCookie, a as authenticateUser, d as deleteSessionCookie } from './utils-877cdb99.js';

const hubIdentityCss = ":host{display:block}";

const HubIdentity = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
            output.push(h("div", null, h("calcite-button", { onClick: (_event) => this.identitySignout() }, `${this.signout}`)));
        }
        return (h(Host, null, h("slot", null), output));
    }
};
HubIdentity.style = hubIdentityCss;

export { HubIdentity as hub_identity };
