'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-987d1b3d.js');

const hubLicensePickerCss = ":host{display:block}";

const HubLicensePicker = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, null, index.h("slot", null), index.h("em", null, "I'm a license picker!")));
    }
};
HubLicensePicker.style = hubLicensePickerCss;

exports.hub_license_picker = HubLicensePicker;
