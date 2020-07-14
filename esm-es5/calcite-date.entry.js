import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-12d3ca5e.js';
import { g as getElementDir } from './dom-6f055170.js';
import { g as getKey } from './key-f3fb1af9.js';
import { g as getLocaleFormatData, d as dateFromISO, a as dateFromRange, b as dateToISO, p as parseDateString, i as inRange } from './date-8a805205.js';
var calciteDateCss = ":host([hidden]){display:none}:host-context([theme=dark]){--calcite-ui-blue-1:#00A0FF;--calcite-ui-blue-2:#0087D7;--calcite-ui-blue-3:#47BBFF;--calcite-ui-green-1:#36DA43;--calcite-ui-green-2:#11AD1D;--calcite-ui-green-3:#44ED51;--calcite-ui-yellow-1:#FFC900;--calcite-ui-yellow-2:#F4B000;--calcite-ui-yellow-3:#FFE24D;--calcite-ui-red-1:#FE583E;--calcite-ui-red-2:#F3381B;--calcite-ui-red-3:#FF7465;--calcite-ui-background:#202020;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#353535;--calcite-ui-foreground-3:#404040;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-4:#757575;--calcite-ui-border-5:#9f9f9f}:host{display:inline-block;vertical-align:top;width:100%;position:relative;overflow:visible}.slot{display:none}:host([scale=s]){max-width:216px}:host([scale=m]){max-width:286px}:host([scale=l]){max-width:398px}.calendar-icon{color:var(--calcite-ui-text-3);position:absolute;top:50%;margin:-8px 0.75rem;pointer-events:none}.calendar-picker-wrapper{position:absolute;top:100%;background-color:var(--calcite-ui-foreground-1);-webkit-box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);opacity:0;width:100%;line-height:0;visibility:hidden;overflow:visible;-webkit-transform:translate3d(0, -1.5rem, 0);transform:translate3d(0, -1.5rem, 0);-webkit-transition:all 0.15s ease-in-out;transition:all 0.15s ease-in-out;pointer-events:none;z-index:3}.input .calcite-input-wrapper{margin-top:0}:host([active]){background-color:var(--calcite-ui-foreground-1);border-radius:var(--calcite-border-radius);-webkit-box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16)}:host([active]) .calendar-picker-wrapper{opacity:1;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);visibility:visible;pointer-events:initial}:host([active]) .date-input-wrapper{border:1px solid var(--calcite-ui-foreground-1);border-bottom:1px solid var(--calcite-ui-border-3)}:host([no-calendar-input]){-webkit-box-shadow:none;box-shadow:none}:host([no-calendar-input]) .calendar-picker-wrapper{position:static;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);border-radius:none;-webkit-box-shadow:none;box-shadow:none;border:1px solid var(--calcite-ui-border-2)}";
var CalciteDatePicker = /** @class */ (function () {
    function CalciteDatePicker(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        /** Expand or collapse when calendar does not have input */
        this.active = false;
        /** Localized string for "previous month" */
        this.prevMonthLabel = "previous month";
        /** Localized string for "next month" */
        this.nextMonthLabel = "next month";
        /** BCP 47 language tag for desired language and country format */
        this.locale = "en-US";
        /** Show only calendar popup */
        this.noCalendarInput = false;
        /** specify the scale of the date picker */
        this.scale = "m";
        //--------------------------------------------------------------------------
        //
        //  Private State/Props
        //
        //--------------------------------------------------------------------------
        this.localeData = getLocaleFormatData(this.locale);
        this.hasShadow = !!document.head.attachShadow;
        /**
         * Update component based on input proxy
         */
        this.syncThisToProxyInput = function () {
            _this.min = _this.inputProxy.min;
            _this.max = _this.inputProxy.max;
            var min = dateFromISO(_this.min);
            var max = dateFromISO(_this.max);
            var date = dateFromISO(_this.inputProxy.value);
            _this.valueAsDate = dateFromRange(date, min, max);
            _this.value = dateToISO(_this.valueAsDate);
        };
        /**
         * Update input proxy
         */
        this.syncProxyInputToThis = function () {
            if (_this.inputProxy) {
                _this.inputProxy.value = _this.value || "";
                if (_this.min) {
                    _this.inputProxy.min = _this.min;
                }
                if (_this.max) {
                    _this.inputProxy.max = _this.max;
                }
            }
        };
        this.calciteDateChange = createEvent(this, "calciteDateChange", 7);
    }
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    CalciteDatePicker.prototype.focusOutHandler = function () {
        this.reset();
    };
    /**
     * Blur doesn't fire properly when there is no shadow dom (ege/IE11)
     * Check if the focused element is inside the date picker, if not close
     */
    CalciteDatePicker.prototype.focusInHandler = function (e) {
        if (!this.hasShadow && !this.el.contains(e.srcElement)) {
            this.reset();
        }
    };
    CalciteDatePicker.prototype.keyDownHandler = function (e) {
        if (getKey(e.key) === "Escape") {
            this.reset();
        }
    };
    // --------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    // --------------------------------------------------------------------------
    CalciteDatePicker.prototype.connectedCallback = function () {
        this.setupProxyInput();
    };
    CalciteDatePicker.prototype.disconnectedCallback = function () {
        this.observer.disconnect();
    };
    CalciteDatePicker.prototype.componentWillRender = function () {
        this.syncProxyInputToThis();
    };
    CalciteDatePicker.prototype.render = function () {
        var _this = this;
        var min = dateFromISO(this.min);
        var max = dateFromISO(this.max);
        var date = dateFromRange(this.valueAsDate, min, max);
        var activeDate = this.getActiveDate(date, min, max);
        var formattedDate = date ? date.toLocaleDateString(this.locale) : "";
        var dir = getElementDir(this.el);
        return (h(Host, { role: "application", dir: dir }, h("div", { class: "slot" }, h("slot", null)), !this.noCalendarInput && (h("div", { role: "application" }, h("calcite-input", { type: "text", value: formattedDate, placeholder: this.localeData.placeholder, icon: "calendar", onCalciteInputFocus: function () { return (_this.active = true); }, onCalciteInputInput: function (e) { return _this.input(e.detail.value); }, onCalciteInputBlur: function (e) { return _this.blur(e.detail); }, scale: this.scale, "number-button-type": "none", class: "input" }))), h("div", { class: "calendar-picker-wrapper" }, h("calcite-date-month-header", { activeDate: activeDate, selectedDate: date || new Date(), prevMonthLabel: this.prevMonthLabel, nextMonthLabel: this.nextMonthLabel, locale: this.locale, min: min, max: max, onCalciteActiveDateChange: function (e) {
                _this.activeDate = new Date(e.detail);
            }, dir: dir, scale: this.scale }), h("calcite-date-month", { min: min, max: max, selectedDate: date, activeDate: activeDate, locale: this.locale, onCalciteDateSelect: function (e) {
                _this.setValue(new Date(e.detail));
                _this.activeDate = new Date(e.detail);
                _this.calciteDateChange.emit(new Date(e.detail));
                _this.reset();
            }, onCalciteActiveDateChange: function (e) {
                _this.activeDate = new Date(e.detail);
            }, dir: dir, scale: this.scale }))));
    };
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    /**
     * Register slotted date input proxy, or create one if not provided
     */
    CalciteDatePicker.prototype.setupProxyInput = function () {
        // check for a proxy input
        this.inputProxy = this.el.querySelector("input");
        // if the user didn't pass a proxy input create one for them
        if (!this.inputProxy) {
            this.inputProxy = document.createElement("input");
            try {
                this.inputProxy.type = "date";
            }
            catch (e) {
                this.inputProxy.type = "text";
            }
            this.syncProxyInputToThis();
            this.el.appendChild(this.inputProxy);
        }
        this.syncThisToProxyInput();
        {
            this.observer = new MutationObserver(this.syncThisToProxyInput);
            this.observer.observe(this.inputProxy, { attributes: true });
        }
    };
    /**
     * Set both iso value and date value and update proxy
     */
    CalciteDatePicker.prototype.setValue = function (date) {
        this.valueAsDate = new Date(date);
        this.value = date.toISOString().split("T")[0];
        this.syncProxyInputToThis();
    };
    /**
     * Reset active date and close
     */
    CalciteDatePicker.prototype.reset = function () {
        if (this.valueAsDate) {
            this.activeDate = new Date(this.valueAsDate);
        }
        if (!this.noCalendarInput) {
            this.active = false;
        }
    };
    /**
     * If inputted string is a valid date, update value/active
     */
    CalciteDatePicker.prototype.input = function (value) {
        var date = this.getDateFromInput(value);
        if (date) {
            this.setValue(date);
            this.activeDate = date;
            this.calciteDateChange.emit(new Date(date));
        }
    };
    /**
     * Clean up invalid date from input on blur
     */
    CalciteDatePicker.prototype.blur = function (target) {
        var date = this.getDateFromInput(target.value);
        if (!date && this.valueAsDate) {
            target.value = this.valueAsDate.toLocaleDateString(this.locale);
        }
    };
    /**
     * Get an active date using the value, or current date as default
     */
    CalciteDatePicker.prototype.getActiveDate = function (value, min, max) {
        return (dateFromRange(this.activeDate, min, max) ||
            value ||
            dateFromRange(new Date(), min, max));
    };
    /**
     * Find a date from input string
     * return false if date is invalid, or out of range
     */
    CalciteDatePicker.prototype.getDateFromInput = function (value) {
        var separator = this.localeData.separator;
        var _a = parseDateString(value, this.locale), day = _a.day, month = _a.month, year = _a.year;
        var validDay = day > 0;
        var validMonth = month > -1;
        var date = new Date(year, month, day);
        var validDate = !isNaN(date.getTime());
        var validLength = value.split(separator).filter(function (c) { return c; }).length > 2;
        var validYear = year.toString().length > 3;
        if (validDay &&
            validMonth &&
            validDate &&
            validLength &&
            validYear &&
            inRange(date, this.min, this.max)) {
            return date;
        }
        return false;
    };
    Object.defineProperty(CalciteDatePicker.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return CalciteDatePicker;
}());
CalciteDatePicker.style = calciteDateCss;
export { CalciteDatePicker as calcite_date };
