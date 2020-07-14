import { r as registerInstance, h, H as Host } from './index-12d3ca5e.js';
var hubLicensePickerCss = ":host{display:block}";
var HubLicensePicker = /** @class */ (function () {
    function HubLicensePicker(hostRef) {
        registerInstance(this, hostRef);
    }
    HubLicensePicker.prototype.render = function () {
        return (h(Host, null, h("slot", null), h("em", null, "I'm a license picker!")));
    };
    return HubLicensePicker;
}());
HubLicensePicker.style = hubLicensePickerCss;
export { HubLicensePicker as hub_license_picker };
