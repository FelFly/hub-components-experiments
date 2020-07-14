import { r as registerInstance, h, H as Host } from './index-12d3ca5e.js';

const hubLicensePickerCss = ":host{display:block}";

const HubLicensePicker = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null), h("em", null, "I'm a license picker!")));
    }
};
HubLicensePicker.style = hubLicensePickerCss;

export { HubLicensePicker as hub_license_picker };
