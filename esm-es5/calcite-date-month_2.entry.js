var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-12d3ca5e.js';
import { g as getElementDir } from './dom-6f055170.js';
import { g as getKey } from './key-f3fb1af9.js';
import { c as getFirstDayOfWeek, e as getLocalizedWeekdays, i as inRange, s as sameDate, a as dateFromRange, f as getMonths, h as getYear, n as nextMonth, j as prevMonth, r as replaceArabicNumerals, g as getLocaleFormatData } from './date-8a805205.js';
var calciteDateMonthCss = ":host([hidden]){display:none}:host-context([theme=dark]){--calcite-ui-blue-1:#00A0FF;--calcite-ui-blue-2:#0087D7;--calcite-ui-blue-3:#47BBFF;--calcite-ui-green-1:#36DA43;--calcite-ui-green-2:#11AD1D;--calcite-ui-green-3:#44ED51;--calcite-ui-yellow-1:#FFC900;--calcite-ui-yellow-2:#F4B000;--calcite-ui-yellow-3:#FFE24D;--calcite-ui-red-1:#FE583E;--calcite-ui-red-2:#F3381B;--calcite-ui-red-3:#FF7465;--calcite-ui-background:#202020;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#353535;--calcite-ui-foreground-3:#404040;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-4:#757575;--calcite-ui-border-5:#9f9f9f}.calender{padding-bottom:4px}.week-headers{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;border-top:1px solid var(--calcite-ui-border-3);padding:0 4px}.week-header{color:var(--calcite-ui-text-3);font-weight:600;width:calc(100% / 7);text-align:center}:host([scale=s]) .week-header{font-size:12px;padding:16px 0 16px 0}:host([scale=m]) .week-header{font-size:12px;padding:24px 0 20px 0}:host([scale=l]) .week-header{font-size:14px;padding:32px 0 24px 0}.week-days{outline:none;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;padding:0 3px}";
var CalciteDateMonth = /** @class */ (function () {
    function CalciteDateMonth(hostRef) {
        registerInstance(this, hostRef);
        /** Date currently active.*/
        this.activeDate = new Date();
        /** User's language and region as BCP 47 formatted string. */
        this.locale = "en-US";
        this.calciteDateSelect = createEvent(this, "calciteDateSelect", 7);
        this.calciteActiveDateChange = createEvent(this, "calciteActiveDateChange", 7);
    }
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    CalciteDateMonth.prototype.keyDownHandler = function (e) {
        var isRTL = this.el.dir === "rtl";
        switch (getKey(e.key)) {
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
    };
    /**
     * Once user is not interacting via keyboard,
     * disable auto focusing of active date
     */
    CalciteDateMonth.prototype.disableActiveFocus = function () {
        this.activeFocus = false;
    };
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    CalciteDateMonth.prototype.render = function () {
        var _this = this;
        var month = this.activeDate.getMonth();
        var year = this.activeDate.getFullYear();
        var startOfWeek = getFirstDayOfWeek(this.locale);
        var weekDays = getLocalizedWeekdays(this.locale, this.scale === "s" ? "narrow" : "short");
        var curMonDays = this.getCurrentMonthDays(month, year);
        var prevMonDays = this.getPrevMonthdays(month, year, startOfWeek);
        var nextMonDays = this.getNextMonthDays(month, year, startOfWeek);
        var days = __spreadArrays(prevMonDays.map(function (day) {
            var date = new Date(year, month - 1, day);
            return (h("calcite-date-day", { scale: _this.scale, day: day, disabled: !inRange(date, _this.min, _this.max), selected: sameDate(date, _this.selectedDate), onCalciteDaySelect: function () { return _this.calciteDateSelect.emit(date); }, locale: _this.locale }));
        }), curMonDays.map(function (day) {
            var date = new Date(year, month, day);
            var active = sameDate(date, _this.activeDate);
            return (h("calcite-date-day", { scale: _this.scale, day: day, disabled: !inRange(date, _this.min, _this.max), selected: sameDate(date, _this.selectedDate), active: active, onCalciteDaySelect: function () { return _this.calciteDateSelect.emit(date); }, locale: _this.locale, ref: function (el) {
                    // when moving via keyboard, focus must be updated on active date
                    if (active && _this.activeFocus) {
                        el === null || el === void 0 ? void 0 : el.focus();
                    }
                }, "current-month": true }));
        }), nextMonDays.map(function (day) {
            var date = new Date(year, month + 1, day);
            return (h("calcite-date-day", { scale: _this.scale, day: day, disabled: !inRange(date, _this.min, _this.max), selected: sameDate(date, _this.selectedDate), onCalciteDaySelect: function () { return _this.calciteDateSelect.emit(date); }, locale: _this.locale }));
        }));
        var weeks = [];
        for (var i = 0; i < days.length; i += 7) {
            weeks.push(days.slice(i, i + 7));
        }
        return (h(Host, null, h("div", { class: "calender", role: "grid" }, h("div", { class: "week-headers", role: "row" }, weekDays.map(function (weekday) { return (h("span", { class: "week-header", role: "columnheader" }, weekday)); })), weeks.map(function (days) { return (h("div", { class: "week-days", role: "row" }, days)); }))));
    };
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    /**
     * Add n months to the current month
     */
    CalciteDateMonth.prototype.addMonths = function (step) {
        var nextDate = new Date(this.activeDate);
        nextDate.setMonth(this.activeDate.getMonth() + step);
        this.calciteActiveDateChange.emit(dateFromRange(nextDate, this.min, this.max));
        this.activeFocus = true;
    };
    /**
     * Add n days to the current date
     */
    CalciteDateMonth.prototype.addDays = function (step) {
        if (step === void 0) { step = 0; }
        var nextDate = new Date(this.activeDate);
        nextDate.setDate(this.activeDate.getDate() + step);
        this.calciteActiveDateChange.emit(dateFromRange(nextDate, this.min, this.max));
        this.activeFocus = true;
    };
    /**
     * Get dates for last days of the previous month
     */
    CalciteDateMonth.prototype.getPrevMonthdays = function (month, year, startOfWeek) {
        var lastDate = new Date(year, month, 0);
        var date = lastDate.getDate();
        var day = lastDate.getDay();
        var days = [];
        if (day - 6 === startOfWeek) {
            return days;
        }
        for (var i = lastDate.getDay(); i >= startOfWeek; i--) {
            days.push(date - i);
        }
        return days;
    };
    /**
     * Get dates for the current month
     */
    CalciteDateMonth.prototype.getCurrentMonthDays = function (month, year) {
        var num = new Date(year, month + 1, 0).getDate();
        var days = [];
        for (var i = 0; i < num; i++) {
            days.push(i + 1);
        }
        return days;
    };
    /**
     * Get dates for first days of the next month
     */
    CalciteDateMonth.prototype.getNextMonthDays = function (month, year, startOfWeek) {
        var endDay = new Date(year, month + 1, 0).getDay();
        var days = [];
        if (endDay === (startOfWeek + 6) % 7) {
            return days;
        }
        for (var i = 0; i < (6 - (endDay - startOfWeek)) % 7; i++) {
            days.push(i + 1);
        }
        return days;
    };
    Object.defineProperty(CalciteDateMonth.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return CalciteDateMonth;
}());
CalciteDateMonth.style = calciteDateMonthCss;
var calciteDateMonthHeaderCss = ":host([hidden]){display:none}:host-context([theme=dark]){--calcite-ui-blue-1:#00A0FF;--calcite-ui-blue-2:#0087D7;--calcite-ui-blue-3:#47BBFF;--calcite-ui-green-1:#36DA43;--calcite-ui-green-2:#11AD1D;--calcite-ui-green-3:#44ED51;--calcite-ui-yellow-1:#FFC900;--calcite-ui-yellow-2:#F4B000;--calcite-ui-yellow-3:#FFE24D;--calcite-ui-red-1:#FE583E;--calcite-ui-red-2:#F3381B;--calcite-ui-red-3:#FF7465;--calcite-ui-background:#202020;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#353535;--calcite-ui-foreground-3:#404040;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-4:#757575;--calcite-ui-border-5:#9f9f9f}.header{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;padding:0 3px}:host([scale=s]) .text{font-size:14px}:host([scale=s]) .chevron{height:38px}:host([scale=m]) .text{font-size:16px}:host([scale=m]) .chevron{height:48px}:host([scale=l]) .text{font-size:18px}:host([scale=l]) .chevron{height:64px}.chevron{color:var(--calcite-ui-text-2);-ms-flex-positive:0;flex-grow:0;width:calc(100% / 7);-webkit-box-sizing:content-box;box-sizing:content-box;outline:none;padding:0 4px;margin:0 -3px;border:none;background-color:var(--calcite-ui-foreground-1);cursor:pointer;-webkit-transition:all 0.15s ease-in-out;transition:all 0.15s ease-in-out;outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.chevron:focus{outline:2px solid var(--calcite-ui-blue-1);outline-offset:-2px}.chevron:hover,.chevron:focus{fill:var(--calcite-ui-text-1);background-color:var(--calcite-ui-foreground-2)}.chevron:active{background-color:var(--calcite-ui-foreground-3)}.chevron[disabled]{pointer-events:none;opacity:0}.text{-ms-flex:1 1 auto;flex:1 1 auto;display:block;line-height:1;margin:auto 0;text-align:center}.month,.year{color:var(--calcite-ui-text-1);background:var(--calcite-ui-foreground-1);font-size:inherit;font-weight:500;margin:0 4px}.year{font-family:inherit;text-align:center;border:none;width:3em;padding:0;outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.year:hover{-webkit-transition:outline-color 100ms ease-in-out;transition:outline-color 100ms ease-in-out;outline:2px solid var(--calcite-ui-border-2);outline-offset:2px}.year:focus{outline:2px solid var(--calcite-ui-blue-1);outline-offset:2px}";
var CalciteDateMonthHeader = /** @class */ (function () {
    function CalciteDateMonthHeader(hostRef) {
        registerInstance(this, hostRef);
        this.calciteActiveDateChange = createEvent(this, "calciteActiveDateChange", 7);
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    CalciteDateMonthHeader.prototype.render = function () {
        var _this = this;
        var activeMonth = this.activeDate.getMonth();
        var localizedMonth = getMonths(this.locale)[activeMonth];
        var localizedYear = getYear(this.activeDate, this.locale);
        var iconScale = this.scale === "l" ? "m" : "s";
        var dir = getElementDir(this.el);
        var nextMonthDate = dateFromRange(nextMonth(this.activeDate), this.min, this.max);
        var prevMonthDate = dateFromRange(prevMonth(this.activeDate), this.min, this.max);
        return (h(Host, { dir: dir }, h("div", { class: "header", "aria-hidden": "true" }, h("button", { class: "chevron", "aria-label": this.prevMonthLabel, disabled: prevMonthDate.getMonth() === activeMonth, onClick: function () { return _this.calciteActiveDateChange.emit(prevMonthDate); } }, h("calcite-icon", { icon: "chevron-left", scale: iconScale, mirrored: true, dir: dir })), h("div", { class: "text" }, h("span", { class: "month", role: "heading" }, localizedMonth), h("input", { class: "year", type: "text", inputmode: "numeric", maxlength: "4", minlength: "4", pattern: "\\d*", value: "" + localizedYear.slice(-4), onKeyDown: function (event) { return _this.onYearKey(event); }, onChange: function (event) { return _this.setYear(event.target.value); }, ref: function (el) { return (_this.yearInput = el); } })), h("button", { class: "chevron", "aria-label": this.nextMonthLabel, disabled: nextMonthDate.getMonth() === activeMonth, onClick: function () { return _this.calciteActiveDateChange.emit(nextMonthDate); } }, h("calcite-icon", { icon: "chevron-right", scale: iconScale, mirrored: true, dir: dir })))));
    };
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    /**
     * Increment year on UP/DOWN keys
     */
    CalciteDateMonthHeader.prototype.onYearKey = function (e) {
        var year = e.target.value;
        switch (getKey(e.key)) {
            case "ArrowDown":
                e.preventDefault();
                this.setYear(year, -1);
                break;
            case "ArrowUp":
                e.preventDefault();
                this.setYear(year, 1);
                break;
        }
    };
    /**
     * Parse localized year string from input,
     * set to active if in range
     */
    CalciteDateMonthHeader.prototype.setYear = function (localizedYear, increment) {
        if (increment === void 0) { increment = 0; }
        var _a = this, min = _a.min, max = _a.max, activeDate = _a.activeDate, locale = _a.locale, yearInput = _a.yearInput;
        var parsedYear = parseInt(replaceArabicNumerals(localizedYear));
        var length = parsedYear.toString().length;
        var offset = getLocaleFormatData(locale).buddhist ? 543 : 0;
        var year = isNaN(parsedYear) ? false : parsedYear - offset + increment;
        var inRange = year &&
            (!min || min.getFullYear() <= year) &&
            (!max || max.getFullYear() >= year);
        // if you've supplied a year and it's in range, update active date
        if (year && inRange && length === localizedYear.length && length > 3) {
            var nextDate = new Date(activeDate);
            nextDate.setFullYear(year);
            var inRangeDate = dateFromRange(nextDate, min, max);
            this.calciteActiveDateChange.emit(inRangeDate);
            yearInput.value = getYear(inRangeDate, locale).slice(-4);
        }
        else {
            // leave the current active date and clean up garbage input
            yearInput.value = getYear(activeDate, locale).slice(-4);
        }
    };
    Object.defineProperty(CalciteDateMonthHeader.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return CalciteDateMonthHeader;
}());
CalciteDateMonthHeader.style = calciteDateMonthHeaderCss;
export { CalciteDateMonth as calcite_date_month, CalciteDateMonthHeader as calcite_date_month_header };
