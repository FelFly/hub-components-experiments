'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-987d1b3d.js');
const dom = require('./dom-82c1dd32.js');
const key = require('./key-db3c4656.js');
const date = require('./date-f13b0662.js');

const calciteDateMonthCss = ":host([hidden]){display:none}:host-context([theme=dark]){--calcite-ui-blue-1:#00A0FF;--calcite-ui-blue-2:#0087D7;--calcite-ui-blue-3:#47BBFF;--calcite-ui-green-1:#36DA43;--calcite-ui-green-2:#11AD1D;--calcite-ui-green-3:#44ED51;--calcite-ui-yellow-1:#FFC900;--calcite-ui-yellow-2:#F4B000;--calcite-ui-yellow-3:#FFE24D;--calcite-ui-red-1:#FE583E;--calcite-ui-red-2:#F3381B;--calcite-ui-red-3:#FF7465;--calcite-ui-background:#202020;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#353535;--calcite-ui-foreground-3:#404040;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-4:#757575;--calcite-ui-border-5:#9f9f9f}.calender{padding-bottom:4px}.week-headers{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;border-top:1px solid var(--calcite-ui-border-3);padding:0 4px}.week-header{color:var(--calcite-ui-text-3);font-weight:600;width:calc(100% / 7);text-align:center}:host([scale=s]) .week-header{font-size:12px;padding:16px 0 16px 0}:host([scale=m]) .week-header{font-size:12px;padding:24px 0 20px 0}:host([scale=l]) .week-header{font-size:14px;padding:32px 0 24px 0}.week-days{outline:none;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;padding:0 3px}";

const CalciteDateMonth = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** Date currently active.*/
        this.activeDate = new Date();
        /** User's language and region as BCP 47 formatted string. */
        this.locale = "en-US";
        this.calciteDateSelect = index.createEvent(this, "calciteDateSelect", 7);
        this.calciteActiveDateChange = index.createEvent(this, "calciteActiveDateChange", 7);
    }
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    keyDownHandler(e) {
        const isRTL = this.el.dir === "rtl";
        switch (key.getKey(e.key)) {
            case "ArrowUp":
                e.preventDefault();
                this.addDays(-7);
                break;
            case "ArrowRight":
                e.preventDefault();
                this.addDays(isRTL ? -1 : 1);
                break;
            case "ArrowDown":
                e.preventDefault();
                this.addDays(7);
                break;
            case "ArrowLeft":
                e.preventDefault();
                this.addDays(isRTL ? 1 : -1);
                break;
            case "PageUp":
                e.preventDefault();
                this.addMonths(-1);
                break;
            case "PageDown":
                e.preventDefault();
                this.addMonths(1);
                break;
            case "Home":
                e.preventDefault();
                this.activeDate.setDate(1);
                this.addDays();
                break;
            case "End":
                e.preventDefault();
                this.activeDate.setDate(new Date(this.activeDate.getFullYear(), this.activeDate.getMonth() + 1, 0).getDate());
                this.addDays();
                break;
            case "Enter":
            case " ":
                e.preventDefault();
                this.calciteDateSelect.emit(this.activeDate);
                break;
            case "Tab":
                this.activeFocus = false;
        }
    }
    /**
     * Once user is not interacting via keyboard,
     * disable auto focusing of active date
     */
    disableActiveFocus() {
        this.activeFocus = false;
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    render() {
        const month = this.activeDate.getMonth();
        const year = this.activeDate.getFullYear();
        const startOfWeek = date.getFirstDayOfWeek(this.locale);
        const weekDays = date.getLocalizedWeekdays(this.locale, this.scale === "s" ? "narrow" : "short");
        const curMonDays = this.getCurrentMonthDays(month, year);
        const prevMonDays = this.getPrevMonthdays(month, year, startOfWeek);
        const nextMonDays = this.getNextMonthDays(month, year, startOfWeek);
        const days = [
            ...prevMonDays.map((day) => {
                const date$1 = new Date(year, month - 1, day);
                return (index.h("calcite-date-day", { scale: this.scale, day: day, disabled: !date.inRange(date$1, this.min, this.max), selected: date.sameDate(date$1, this.selectedDate), onCalciteDaySelect: () => this.calciteDateSelect.emit(date$1), locale: this.locale }));
            }),
            ...curMonDays.map((day) => {
                const date$1 = new Date(year, month, day);
                const active = date.sameDate(date$1, this.activeDate);
                return (index.h("calcite-date-day", { scale: this.scale, day: day, disabled: !date.inRange(date$1, this.min, this.max), selected: date.sameDate(date$1, this.selectedDate), active: active, onCalciteDaySelect: () => this.calciteDateSelect.emit(date$1), locale: this.locale, ref: (el) => {
                        // when moving via keyboard, focus must be updated on active date
                        if (active && this.activeFocus) {
                            el === null || el === void 0 ? void 0 : el.focus();
                        }
                    }, "current-month": true }));
            }),
            ...nextMonDays.map((day) => {
                const date$1 = new Date(year, month + 1, day);
                return (index.h("calcite-date-day", { scale: this.scale, day: day, disabled: !date.inRange(date$1, this.min, this.max), selected: date.sameDate(date$1, this.selectedDate), onCalciteDaySelect: () => this.calciteDateSelect.emit(date$1), locale: this.locale }));
            }),
        ];
        const weeks = [];
        for (let i = 0; i < days.length; i += 7) {
            weeks.push(days.slice(i, i + 7));
        }
        return (index.h(index.Host, null, index.h("div", { class: "calender", role: "grid" }, index.h("div", { class: "week-headers", role: "row" }, weekDays.map((weekday) => (index.h("span", { class: "week-header", role: "columnheader" }, weekday)))), weeks.map((days) => (index.h("div", { class: "week-days", role: "row" }, days))))));
    }
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    /**
     * Add n months to the current month
     */
    addMonths(step) {
        const nextDate = new Date(this.activeDate);
        nextDate.setMonth(this.activeDate.getMonth() + step);
        this.calciteActiveDateChange.emit(date.dateFromRange(nextDate, this.min, this.max));
        this.activeFocus = true;
    }
    /**
     * Add n days to the current date
     */
    addDays(step = 0) {
        const nextDate = new Date(this.activeDate);
        nextDate.setDate(this.activeDate.getDate() + step);
        this.calciteActiveDateChange.emit(date.dateFromRange(nextDate, this.min, this.max));
        this.activeFocus = true;
    }
    /**
     * Get dates for last days of the previous month
     */
    getPrevMonthdays(month, year, startOfWeek) {
        const lastDate = new Date(year, month, 0);
        const date = lastDate.getDate();
        const day = lastDate.getDay();
        const days = [];
        if (day - 6 === startOfWeek) {
            return days;
        }
        for (let i = lastDate.getDay(); i >= startOfWeek; i--) {
            days.push(date - i);
        }
        return days;
    }
    /**
     * Get dates for the current month
     */
    getCurrentMonthDays(month, year) {
        const num = new Date(year, month + 1, 0).getDate();
        const days = [];
        for (let i = 0; i < num; i++) {
            days.push(i + 1);
        }
        return days;
    }
    /**
     * Get dates for first days of the next month
     */
    getNextMonthDays(month, year, startOfWeek) {
        const endDay = new Date(year, month + 1, 0).getDay();
        const days = [];
        if (endDay === (startOfWeek + 6) % 7) {
            return days;
        }
        for (let i = 0; i < (6 - (endDay - startOfWeek)) % 7; i++) {
            days.push(i + 1);
        }
        return days;
    }
    get el() { return index.getElement(this); }
};
CalciteDateMonth.style = calciteDateMonthCss;

const calciteDateMonthHeaderCss = ":host([hidden]){display:none}:host-context([theme=dark]){--calcite-ui-blue-1:#00A0FF;--calcite-ui-blue-2:#0087D7;--calcite-ui-blue-3:#47BBFF;--calcite-ui-green-1:#36DA43;--calcite-ui-green-2:#11AD1D;--calcite-ui-green-3:#44ED51;--calcite-ui-yellow-1:#FFC900;--calcite-ui-yellow-2:#F4B000;--calcite-ui-yellow-3:#FFE24D;--calcite-ui-red-1:#FE583E;--calcite-ui-red-2:#F3381B;--calcite-ui-red-3:#FF7465;--calcite-ui-background:#202020;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#353535;--calcite-ui-foreground-3:#404040;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-4:#757575;--calcite-ui-border-5:#9f9f9f}.header{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;padding:0 3px}:host([scale=s]) .text{font-size:14px}:host([scale=s]) .chevron{height:38px}:host([scale=m]) .text{font-size:16px}:host([scale=m]) .chevron{height:48px}:host([scale=l]) .text{font-size:18px}:host([scale=l]) .chevron{height:64px}.chevron{color:var(--calcite-ui-text-2);-ms-flex-positive:0;flex-grow:0;width:calc(100% / 7);-webkit-box-sizing:content-box;box-sizing:content-box;outline:none;padding:0 4px;margin:0 -3px;border:none;background-color:var(--calcite-ui-foreground-1);cursor:pointer;-webkit-transition:all 0.15s ease-in-out;transition:all 0.15s ease-in-out;outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.chevron:focus{outline:2px solid var(--calcite-ui-blue-1);outline-offset:-2px}.chevron:hover,.chevron:focus{fill:var(--calcite-ui-text-1);background-color:var(--calcite-ui-foreground-2)}.chevron:active{background-color:var(--calcite-ui-foreground-3)}.chevron[disabled]{pointer-events:none;opacity:0}.text{-ms-flex:1 1 auto;flex:1 1 auto;display:block;line-height:1;margin:auto 0;text-align:center}.month,.year{color:var(--calcite-ui-text-1);background:var(--calcite-ui-foreground-1);font-size:inherit;font-weight:500;margin:0 4px}.year{font-family:inherit;text-align:center;border:none;width:3em;padding:0;outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.year:hover{-webkit-transition:outline-color 100ms ease-in-out;transition:outline-color 100ms ease-in-out;outline:2px solid var(--calcite-ui-border-2);outline-offset:2px}.year:focus{outline:2px solid var(--calcite-ui-blue-1);outline-offset:2px}";

const CalciteDateMonthHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.calciteActiveDateChange = index.createEvent(this, "calciteActiveDateChange", 7);
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    render() {
        const activeMonth = this.activeDate.getMonth();
        const localizedMonth = date.getMonths(this.locale)[activeMonth];
        const localizedYear = date.getYear(this.activeDate, this.locale);
        const iconScale = this.scale === "l" ? "m" : "s";
        const dir = dom.getElementDir(this.el);
        const nextMonthDate = date.dateFromRange(date.nextMonth(this.activeDate), this.min, this.max);
        const prevMonthDate = date.dateFromRange(date.prevMonth(this.activeDate), this.min, this.max);
        return (index.h(index.Host, { dir: dir }, index.h("div", { class: "header", "aria-hidden": "true" }, index.h("button", { class: "chevron", "aria-label": this.prevMonthLabel, disabled: prevMonthDate.getMonth() === activeMonth, onClick: () => this.calciteActiveDateChange.emit(prevMonthDate) }, index.h("calcite-icon", { icon: "chevron-left", scale: iconScale, mirrored: true, dir: dir })), index.h("div", { class: "text" }, index.h("span", { class: "month", role: "heading" }, localizedMonth), index.h("input", { class: "year", type: "text", inputmode: "numeric", maxlength: "4", minlength: "4", pattern: "\\d*", value: `${localizedYear.slice(-4)}`, onKeyDown: (event) => this.onYearKey(event), onChange: (event) => this.setYear(event.target.value), ref: (el) => (this.yearInput = el) })), index.h("button", { class: "chevron", "aria-label": this.nextMonthLabel, disabled: nextMonthDate.getMonth() === activeMonth, onClick: () => this.calciteActiveDateChange.emit(nextMonthDate) }, index.h("calcite-icon", { icon: "chevron-right", scale: iconScale, mirrored: true, dir: dir })))));
    }
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    /**
     * Increment year on UP/DOWN keys
     */
    onYearKey(e) {
        const year = e.target.value;
        switch (key.getKey(e.key)) {
            case "ArrowDown":
                e.preventDefault();
                this.setYear(year, -1);
                break;
            case "ArrowUp":
                e.preventDefault();
                this.setYear(year, 1);
                break;
        }
    }
    /**
     * Parse localized year string from input,
     * set to active if in range
     */
    setYear(localizedYear, increment = 0) {
        const { min, max, activeDate, locale, yearInput } = this;
        const parsedYear = parseInt(date.replaceArabicNumerals(localizedYear));
        const length = parsedYear.toString().length;
        const offset = date.getLocaleFormatData(locale).buddhist ? 543 : 0;
        const year = isNaN(parsedYear) ? false : parsedYear - offset + increment;
        const inRange = year &&
            (!min || min.getFullYear() <= year) &&
            (!max || max.getFullYear() >= year);
        // if you've supplied a year and it's in range, update active date
        if (year && inRange && length === localizedYear.length && length > 3) {
            const nextDate = new Date(activeDate);
            nextDate.setFullYear(year);
            const inRangeDate = date.dateFromRange(nextDate, min, max);
            this.calciteActiveDateChange.emit(inRangeDate);
            yearInput.value = date.getYear(inRangeDate, locale).slice(-4);
        }
        else {
            // leave the current active date and clean up garbage input
            yearInput.value = date.getYear(activeDate, locale).slice(-4);
        }
    }
    get el() { return index.getElement(this); }
};
CalciteDateMonthHeader.style = calciteDateMonthHeaderCss;

exports.calcite_date_month = CalciteDateMonth;
exports.calcite_date_month_header = CalciteDateMonthHeader;
