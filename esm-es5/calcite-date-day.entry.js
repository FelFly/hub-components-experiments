import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-12d3ca5e.js';
import { g as getKey } from './key-f3fb1af9.js';
var calciteDateDayCss = ":host([hidden]){display:none}:host-context([theme=dark]){--calcite-ui-blue-1:#00A0FF;--calcite-ui-blue-2:#0087D7;--calcite-ui-blue-3:#47BBFF;--calcite-ui-green-1:#36DA43;--calcite-ui-green-2:#11AD1D;--calcite-ui-green-3:#44ED51;--calcite-ui-yellow-1:#FFC900;--calcite-ui-yellow-2:#F4B000;--calcite-ui-yellow-3:#FFE24D;--calcite-ui-red-1:#FE583E;--calcite-ui-red-2:#F3381B;--calcite-ui-red-3:#FF7465;--calcite-ui-background:#202020;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#353535;--calcite-ui-foreground-3:#404040;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-4:#757575;--calcite-ui-border-5:#9f9f9f}:host{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--calcite-ui-text-3);cursor:pointer;width:calc(100% / 7);min-width:0}.day{display:-ms-flexbox;display:flex;border-radius:100%;font-size:0.875rem;line-height:1.5;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;line-height:1;color:var(--calcite-ui-text-3);-webkit-transition:all 150ms ease-in-out;transition:all 150ms ease-in-out;background:none;-webkit-box-shadow:0 0 0 2px transparent, 0 0 0 0px transparent;box-shadow:0 0 0 2px transparent, 0 0 0 0px transparent;opacity:0.4}.text{margin:1px 0 0 1px}:host([scale=s]){padding:2px 0px}:host([scale=s]) .day{height:27px;width:27px;font-size:12px}:host([scale=m]){padding:4px 4px}:host([scale=m]) .day{height:33px;width:33px;font-size:14px}:host([scale=l]){padding:4px 4px}:host([scale=l]) .day{height:43px;width:43px;font-size:16px}:host([current-month]) .day{opacity:1}:host([disabled]){cursor:default;pointer-events:none;opacity:0.2}:host(:hover) .day,:host([active]) .day{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}:host(:focus) .day{-webkit-box-shadow:0 0 0 2px var(--calcite-ui-foreground-1), 0 0 0 4px var(--calcite-ui-blue-1);box-shadow:0 0 0 2px var(--calcite-ui-foreground-1), 0 0 0 4px var(--calcite-ui-blue-1)}:host([selected]) .day{background-color:var(--calcite-ui-blue-1);color:var(--calcite-ui-foreground-1);font-weight:500}";
var CalciteDateDay = /** @class */ (function () {
    function CalciteDateDay(hostRef) {
        registerInstance(this, hostRef);
        /** Date is outside of range and can't be selected */
        this.disabled = false;
        /** Date is in the current month. */
        this.currentMonth = false;
        /** Date is the current selected date of the picker */
        this.selected = false;
        /** Date is actively in focus for keyboard navigation */
        this.active = false;
        this.calciteDaySelect = createEvent(this, "calciteDaySelect", 7);
    }
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    CalciteDateDay.prototype.onClick = function () {
        !this.disabled && this.calciteDaySelect.emit();
    };
    CalciteDateDay.prototype.keyDownHandler = function (e) {
        var key = getKey(e.key);
        if (key === " " || key === "Enter") {
            !this.disabled && this.calciteDaySelect.emit();
        }
    };
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    CalciteDateDay.prototype.render = function () {
        var intl = new Intl.NumberFormat(this.locale);
        return (h(Host, { role: "gridcell", tabindex: this.selected || this.active ? 0 : -1 }, h("span", { class: "day" }, h("span", { class: "text" }, intl.format(this.day)))));
    };
    Object.defineProperty(CalciteDateDay.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return CalciteDateDay;
}());
CalciteDateDay.style = calciteDateDayCss;
export { CalciteDateDay as calcite_date_day };
