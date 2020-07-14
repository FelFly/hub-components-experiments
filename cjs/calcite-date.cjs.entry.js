'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-987d1b3d.js');
const dom = require('./dom-82c1dd32.js');
const key = require('./key-db3c4656.js');
const date = require('./date-f13b0662.js');

const calciteDateCss = ":host([hidden]){display:none}:host-context([theme=dark]){--calcite-ui-blue-1:#00A0FF;--calcite-ui-blue-2:#0087D7;--calcite-ui-blue-3:#47BBFF;--calcite-ui-green-1:#36DA43;--calcite-ui-green-2:#11AD1D;--calcite-ui-green-3:#44ED51;--calcite-ui-yellow-1:#FFC900;--calcite-ui-yellow-2:#F4B000;--calcite-ui-yellow-3:#FFE24D;--calcite-ui-red-1:#FE583E;--calcite-ui-red-2:#F3381B;--calcite-ui-red-3:#FF7465;--calcite-ui-background:#202020;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#353535;--calcite-ui-foreground-3:#404040;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-4:#757575;--calcite-ui-border-5:#9f9f9f}:host{display:inline-block;vertical-align:top;width:100%;position:relative;overflow:visible}.slot{display:none}:host([scale=s]){max-width:216px}:host([scale=m]){max-width:286px}:host([scale=l]){max-width:398px}.calendar-icon{color:var(--calcite-ui-text-3);position:absolute;top:50%;margin:-8px 0.75rem;pointer-events:none}.calendar-picker-wrapper{position:absolute;top:100%;background-color:var(--calcite-ui-foreground-1);-webkit-box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);opacity:0;width:100%;line-height:0;visibility:hidden;overflow:visible;-webkit-transform:translate3d(0, -1.5rem, 0);transform:translate3d(0, -1.5rem, 0);-webkit-transition:all 0.15s ease-in-out;transition:all 0.15s ease-in-out;pointer-events:none;z-index:3}.input .calcite-input-wrapper{margin-top:0}:host([active]){background-color:var(--calcite-ui-foreground-1);border-radius:var(--calcite-border-radius);-webkit-box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16)}:host([active]) .calendar-picker-wrapper{opacity:1;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);visibility:visible;pointer-events:initial}:host([active]) .date-input-wrapper{border:1px solid var(--calcite-ui-foreground-1);border-bottom:1px solid var(--calcite-ui-border-3)}:host([no-calendar-input]){-webkit-box-shadow:none;box-shadow:none}:host([no-calendar-input]) .calendar-picker-wrapper{position:static;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);border-radius:none;-webkit-box-shadow:none;box-shadow:none;border:1px solid var(--calcite-ui-border-2)}";

const CalciteDatePicker = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        this.localeData = date.getLocaleFormatData(this.locale);
        this.hasShadow =  !!document.head.attachShadow;
        /**
         * Update component based on input proxy
         */
        this.syncThisToProxyInput = () => {
            this.min = this.inputProxy.min;
            this.max = this.inputProxy.max;
            const min = date.dateFromISO(this.min);
            const max = date.dateFromISO(this.max);
            const date$1 = date.dateFromISO(this.inputProxy.value);
            this.valueAsDate = date.dateFromRange(date$1, min, max);
            this.value = date.dateToISO(this.valueAsDate);
        };
        /**
         * Update input proxy
         */
        this.syncProxyInputToThis = () => {
            if (this.inputProxy) {
                this.inputProxy.value = this.value || "";
                if (this.min) {
                    this.inputProxy.min = this.min;
                }
                if (this.max) {
                    this.inputProxy.max = this.max;
                }
            }
        };
        this.calciteDateChange = index.createEvent(this, "calciteDateChange", 7);
    }
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    focusOutHandler() {
        this.reset();
    }
    /**
     * Blur doesn't fire properly when there is no shadow dom (ege/IE11)
     * Check if the focused element is inside the date picker, if not close
     */
    focusInHandler(e) {
        if (!this.hasShadow && !this.el.contains(e.srcElement)) {
            this.reset();
        }
    }
    keyDownHandler(e) {
        if (key.getKey(e.key) === "Escape") {
            this.reset();
        }
    }
    // --------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    // --------------------------------------------------------------------------
    connectedCallback() {
        this.setupProxyInput();
    }
    disconnectedCallback() {
        this.observer.disconnect();
    }
    componentWillRender() {
        this.syncProxyInputToThis();
    }
    render() {
        const min = date.dateFromISO(this.min);
        const max = date.dateFromISO(this.max);
        const date$1 = date.dateFromRange(this.valueAsDate, min, max);
        const activeDate = this.getActiveDate(date$1, min, max);
        const formattedDate = date$1 ? date$1.toLocaleDateString(this.locale) : "";
        const dir = dom.getElementDir(this.el);
        return (index.h(index.Host, { role: "application", dir: dir }, index.h("div", { class: "slot" }, index.h("slot", null)), !this.noCalendarInput && (index.h("div", { role: "application" }, index.h("calcite-input", { type: "text", value: formattedDate, placeholder: this.localeData.placeholder, icon: "calendar", onCalciteInputFocus: () => (this.active = true), onCalciteInputInput: (e) => this.input(e.detail.value), onCalciteInputBlur: (e) => this.blur(e.detail), scale: this.scale, "number-button-type": "none", class: "input" }))), index.h("div", { class: "calendar-picker-wrapper" }, index.h("calcite-date-month-header", { activeDate: activeDate, selectedDate: date$1 || new Date(), prevMonthLabel: this.prevMonthLabel, nextMonthLabel: this.nextMonthLabel, locale: this.locale, min: min, max: max, onCalciteActiveDateChange: (e) => {
                this.activeDate = new Date(e.detail);
            }, dir: dir, scale: this.scale }), index.h("calcite-date-month", { min: min, max: max, selectedDate: date$1, activeDate: activeDate, locale: this.locale, onCalciteDateSelect: (e) => {
                this.setValue(new Date(e.detail));
                this.activeDate = new Date(e.detail);
                this.calciteDateChange.emit(new Date(e.detail));
                this.reset();
            }, onCalciteActiveDateChange: (e) => {
                this.activeDate = new Date(e.detail);
            }, dir: dir, scale: this.scale }))));
    }
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    /**
     * Register slotted date input proxy, or create one if not provided
     */
    setupProxyInput() {
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
    }
    /**
     * Set both iso value and date value and update proxy
     */
    setValue(date) {
        this.valueAsDate = new Date(date);
        this.value = date.toISOString().split("T")[0];
        this.syncProxyInputToThis();
    }
    /**
     * Reset active date and close
     */
    reset() {
        if (this.valueAsDate) {
            this.activeDate = new Date(this.valueAsDate);
        }
        if (!this.noCalendarInput) {
            this.active = false;
        }
    }
    /**
     * If inputted string is a valid date, update value/active
     */
    input(value) {
        const date = this.getDateFromInput(value);
        if (date) {
            this.setValue(date);
            this.activeDate = date;
            this.calciteDateChange.emit(new Date(date));
        }
    }
    /**
     * Clean up invalid date from input on blur
     */
    blur(target) {
        const date = this.getDateFromInput(target.value);
        if (!date && this.valueAsDate) {
            target.value = this.valueAsDate.toLocaleDateString(this.locale);
        }
    }
    /**
     * Get an active date using the value, or current date as default
     */
    getActiveDate(value, min, max) {
        return (date.dateFromRange(this.activeDate, min, max) ||
            value ||
            date.dateFromRange(new Date(), min, max));
    }
    /**
     * Find a date from input string
     * return false if date is invalid, or out of range
     */
    getDateFromInput(value) {
        const { separator } = this.localeData;
        const { day, month, year } = date.parseDateString(value, this.locale);
        const validDay = day > 0;
        const validMonth = month > -1;
        const date$1 = new Date(year, month, day);
        const validDate = !isNaN(date$1.getTime());
        const validLength = value.split(separator).filter((c) => c).length > 2;
        const validYear = year.toString().length > 3;
        if (validDay &&
            validMonth &&
            validDate &&
            validLength &&
            validYear &&
            date.inRange(date$1, this.min, this.max)) {
            return date$1;
        }
        return false;
    }
    get el() { return index.getElement(this); }
};
CalciteDatePicker.style = calciteDateCss;

exports.calcite_date = CalciteDatePicker;
