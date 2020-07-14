var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-12d3ca5e.js';
import { g as getElementDir, f as focusElement } from './dom-6f055170.js';
import { g as getKey } from './key-f3fb1af9.js';
var calciteDropdownCss = ":host([hidden]){display:none}:host-context([theme=dark]){--calcite-ui-blue-1:#00A0FF;--calcite-ui-blue-2:#0087D7;--calcite-ui-blue-3:#47BBFF;--calcite-ui-green-1:#36DA43;--calcite-ui-green-2:#11AD1D;--calcite-ui-green-3:#44ED51;--calcite-ui-yellow-1:#FFC900;--calcite-ui-yellow-2:#F4B000;--calcite-ui-yellow-3:#FFE24D;--calcite-ui-red-1:#FE583E;--calcite-ui-red-2:#F3381B;--calcite-ui-red-3:#FF7465;--calcite-ui-background:#202020;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#353535;--calcite-ui-foreground-3:#404040;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-4:#757575;--calcite-ui-border-5:#9f9f9f}:host([width=s]){--calcite-dropdown-width:12.5em}:host([width=m]){--calcite-dropdown-width:15em}:host([width=l]){--calcite-dropdown-width:20em}:host([scale=s]){--calcite-dropdown-group-padding:0.5rem 0;--calcite-dropdown-item-padding:0.3rem 1rem 0.3rem 2.25rem}:host([scale=m]){--calcite-dropdown-group-padding:0.75rem 0;--calcite-dropdown-item-padding:0.5rem 1rem 0.5rem 2.25rem}:host([scale=l]){--calcite-dropdown-group-padding:1rem 0;--calcite-dropdown-item-padding:0.75rem 1rem 0.75rem 2.25rem}:host([dir=rtl][scale=s]){--calcite-dropdown-item-padding:0.3rem 2.25rem 0.3rem 1rem}:host([dir=rtl][scale=m]){--calcite-dropdown-item-padding:0.5rem 2.25rem 0.5rem 1rem}:host([dir=rtl][scale=l]){--calcite-dropdown-item-padding:0.75rem 2.25rem 0.75rem 1rem}:host{position:relative;display:inline-block}:host([active]) .calcite-dropdown-wrapper{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);opacity:1;max-height:90vh;overflow-y:auto;visibility:visible;pointer-events:initial}:host .calcite-dropdown-wrapper{-webkit-transform:translate3d(0, -1.5rem, 0);transform:translate3d(0, -1.5rem, 0);-webkit-transition:all 0.15s ease-in-out, max-height 0.15s;transition:all 0.15s ease-in-out, max-height 0.15s;visibility:hidden;opacity:0;display:block;position:absolute;left:0;z-index:200;overflow:hidden;max-height:0;width:auto;width:var(--calcite-dropdown-width);background:var(--calcite-ui-foreground-1);border-radius:var(--calcite-border-radius);-webkit-box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);pointer-events:none}:host([dir=rtl]) .calcite-dropdown-wrapper{right:0;left:unset}:host([alignment=end]) .calcite-dropdown-wrapper{right:0;left:unset}:host([dir=rtl][alignment=end]) .calcite-dropdown-wrapper{right:unset;left:0}:host([alignment=center]) .calcite-dropdown-wrapper{right:0;left:50%;-webkit-transform:translate3d(0, -1.5rem, 0) translateX(-50%);transform:translate3d(0, -1.5rem, 0) translateX(-50%)}:host([alignment=center][active]) .calcite-dropdown-wrapper{-webkit-transform:translate3d(0, 0, 0) translateX(-50%);transform:translate3d(0, 0, 0) translateX(-50%)}:host([alignment=center][dir=rtl]) .calcite-dropdown-wrapper{right:50%;left:0;-webkit-transform:translate3d(0, -1.5rem, 0) translateX(50%);transform:translate3d(0, -1.5rem, 0) translateX(50%)}:host([alignment=center][dir=rtl][active]) .calcite-dropdown-wrapper{-webkit-transform:translate3d(0, 0, 0) translateX(50%);transform:translate3d(0, 0, 0) translateX(50%)}";
var CalciteDropdown = /** @class */ (function () {
    function CalciteDropdown(hostRef) {
        registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Public Properties
        //
        //--------------------------------------------------------------------------
        this.active = false;
        /** specify the alignment of dropdown, defaults to start */
        this.alignment = "start";
        /** specify the max items to display before showing the scroller, must be greater than 0 **/
        this.maxItems = 0;
        /**
         * **read-only** The currently selected items
         *
         * @readonly
         */
        this.selectedItems = [];
        /** specify the scale of dropdown, defaults to m */
        this.scale = "m";
        /** specify the width of dropdown, defaults to m */
        this.width = "m";
        /** specify whether the dropdown is opened by hover or click of the trigger element */
        this.type = "click";
        //--------------------------------------------------------------------------
        //
        //  Private State/Props
        //
        //--------------------------------------------------------------------------
        /** created list of dropdown items */
        this.items = [];
        /** specifies the item wrapper height; it is updated when maxItems is > 0  **/
        this.maxScrollerHeight = 0;
        /** keep track of whether the groups have been sorted so we don't re-sort */
        this.sorted = false;
        this.calciteDropdownSelect = createEvent(this, "calciteDropdownSelect", 7);
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    CalciteDropdown.prototype.connectedCallback = function () {
        // validate props
        var alignment = ["start", "center", "end"];
        if (!alignment.includes(this.alignment))
            this.alignment = "start";
        var scale = ["s", "m", "l"];
        if (!scale.includes(this.scale))
            this.scale = "m";
        var width = ["s", "m", "l"];
        if (!width.includes(this.width))
            this.width = "m";
        var type = ["hover", "click"];
        if (!type.includes(this.type))
            this.type = "hover";
    };
    CalciteDropdown.prototype.componentDidLoad = function () {
        this.trigger = this.el.querySelector("[slot=dropdown-trigger]");
        if (!this.sorted) {
            var groups = this.items.sort(function (a, b) { return a.position - b.position; });
            this.maxScrollerHeight = this.getMaxScrollerHeight(groups);
            this.items = groups.reduce(function (items, group) { return __spreadArrays(items, group.items); }, []);
            this.sorted = true;
        }
    };
    CalciteDropdown.prototype.render = function () {
        var maxScrollerHeight = this.maxScrollerHeight;
        var dir = getElementDir(this.el);
        return (h(Host, { dir: dir }, h("slot", { name: "dropdown-trigger", "aria-haspopup": "true", "aria-expanded": this.active.toString() }), h("div", { class: "calcite-dropdown-wrapper", role: "menu", style: {
                maxHeight: maxScrollerHeight > 0 ? maxScrollerHeight + "px" : "",
            } }, h("slot", null))));
    };
    CalciteDropdown.prototype.openDropdown = function (e) {
        if (e.target === this.trigger || this.trigger.contains(e.target)) {
            e.preventDefault();
            e.stopPropagation();
            this.openCalciteDropdown();
        }
    };
    CalciteDropdown.prototype.closeCalciteDropdownOnClick = function (e) {
        if (this.active && e.target.offsetParent !== this.el) {
            this.closeCalciteDropdown();
        }
    };
    CalciteDropdown.prototype.closeCalciteDropdownOnEvent = function () {
        this.closeCalciteDropdown();
    };
    CalciteDropdown.prototype.keyDownHandler = function (e) {
        var key = getKey(e.key);
        if (e.target === this.trigger || this.trigger.contains(e.target)) {
            if (e.target.nodeName !== "BUTTON" &&
                e.target.nodeName !== "CALCITE-BUTTON") {
                switch (key) {
                    case " ":
                    case "Enter":
                        this.openCalciteDropdown();
                        break;
                    case "Escape":
                        this.closeCalciteDropdown();
                        break;
                }
            }
            else if (key === "Escape" || (e.shiftKey && key === "Tab")) {
                this.closeCalciteDropdown();
            }
        }
    };
    CalciteDropdown.prototype.mouseoverHandler = function () {
        if (this.type === "hover") {
            this.openCalciteDropdown();
        }
    };
    CalciteDropdown.prototype.mouseoffHandler = function () {
        if (this.type === "hover") {
            this.closeCalciteDropdown();
        }
    };
    CalciteDropdown.prototype.calciteDropdownItemKeyEvent = function (e) {
        var keyboardEvent = e.detail.keyboardEvent;
        // handle edge
        var target = keyboardEvent.target;
        var itemToFocus = target.nodeName !== "A" ? target : target.parentNode;
        var isFirstItem = this.itemIndex(itemToFocus) === 0;
        var isLastItem = this.itemIndex(itemToFocus) === this.items.length - 1;
        switch (getKey(keyboardEvent.key)) {
            case "Tab":
                if (isLastItem && !keyboardEvent.shiftKey)
                    this.closeCalciteDropdown();
                else if (isFirstItem && keyboardEvent.shiftKey)
                    this.closeCalciteDropdown();
                else if (keyboardEvent.shiftKey)
                    this.focusPrevItem(itemToFocus);
                else
                    this.focusNextItem(itemToFocus);
                break;
            case "ArrowDown":
                this.focusNextItem(itemToFocus);
                break;
            case "ArrowUp":
                this.focusPrevItem(itemToFocus);
                break;
            case "Home":
                this.focusFirstItem();
                break;
            case "End":
                this.focusLastItem();
                break;
        }
        e.stopPropagation();
    };
    CalciteDropdown.prototype.handleItemSelect = function (event) {
        this.updateSelectedItems();
        event.stopPropagation();
        this.calciteDropdownSelect.emit();
    };
    CalciteDropdown.prototype.registerCalciteDropdownGroup = function (e) {
        var _b = e.detail, items = _b.items, position = _b.position, titleEl = _b.titleEl;
        this.items.push({
            items: items,
            position: position,
            titleEl: titleEl,
        });
        e.stopPropagation();
        this.updateSelectedItems();
    };
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    CalciteDropdown.prototype.updateSelectedItems = function () {
        var items = Array.from(this.el.querySelectorAll("calcite-dropdown-item"));
        this.selectedItems = items.filter(function (item) { return item.active; });
    };
    CalciteDropdown.prototype.getMaxScrollerHeight = function (groups) {
        var maxItems = this.maxItems;
        var itemsToProcess = 0;
        var maxScrollerHeight = 0;
        groups.forEach(function (group) {
            var _a;
            if (maxItems > 0 && itemsToProcess < maxItems) {
                maxScrollerHeight += ((_a = group === null || group === void 0 ? void 0 : group.titleEl) === null || _a === void 0 ? void 0 : _a.offsetHeight) || 0;
                group.items.forEach(function (item) {
                    if (itemsToProcess < maxItems) {
                        maxScrollerHeight += item.offsetHeight;
                        itemsToProcess += 1;
                    }
                });
            }
        });
        return maxScrollerHeight;
    };
    CalciteDropdown.prototype.closeCalciteDropdown = function () {
        this.active = false;
        this.trigger.focus();
    };
    CalciteDropdown.prototype.focusOnFirstActiveOrFirstItem = function () {
        this.getFocusableElement(this.items.find(function (item) { return item.active; }) || this.items[0]);
    };
    CalciteDropdown.prototype.focusFirstItem = function () {
        var firstItem = this.items[0];
        this.getFocusableElement(firstItem);
    };
    CalciteDropdown.prototype.focusLastItem = function () {
        var lastItem = this.items[this.items.length - 1];
        this.getFocusableElement(lastItem);
    };
    CalciteDropdown.prototype.focusNextItem = function (e) {
        var index = this.itemIndex(e);
        var nextItem = this.items[index + 1] || this.items[0];
        this.getFocusableElement(nextItem);
    };
    CalciteDropdown.prototype.focusPrevItem = function (e) {
        var index = this.itemIndex(e);
        var prevItem = this.items[index - 1] || this.items[this.items.length - 1];
        this.getFocusableElement(prevItem);
    };
    CalciteDropdown.prototype.itemIndex = function (e) {
        return this.items.indexOf(e);
    };
    CalciteDropdown.prototype.getFocusableElement = function (item) {
        if (!item) {
            return;
        }
        var target = item.attributes.isLink
            ? item.shadowRoot.querySelector("a")
            : item;
        focusElement(target);
    };
    CalciteDropdown.prototype.openCalciteDropdown = function () {
        var _this = this;
        this.active = !this.active;
        var animationDelayInMs = 50;
        if (this.active) {
            setTimeout(function () { return _this.focusOnFirstActiveOrFirstItem(); }, animationDelayInMs);
        }
    };
    Object.defineProperty(CalciteDropdown.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return CalciteDropdown;
}());
CalciteDropdown.style = calciteDropdownCss;
export { CalciteDropdown as calcite_dropdown };
