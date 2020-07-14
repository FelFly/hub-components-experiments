'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-987d1b3d.js');
const dom = require('./dom-82c1dd32.js');
const key = require('./key-db3c4656.js');

const calciteDropdownCss = ":host([hidden]){display:none}:host-context([theme=dark]){--calcite-ui-blue-1:#00A0FF;--calcite-ui-blue-2:#0087D7;--calcite-ui-blue-3:#47BBFF;--calcite-ui-green-1:#36DA43;--calcite-ui-green-2:#11AD1D;--calcite-ui-green-3:#44ED51;--calcite-ui-yellow-1:#FFC900;--calcite-ui-yellow-2:#F4B000;--calcite-ui-yellow-3:#FFE24D;--calcite-ui-red-1:#FE583E;--calcite-ui-red-2:#F3381B;--calcite-ui-red-3:#FF7465;--calcite-ui-background:#202020;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#353535;--calcite-ui-foreground-3:#404040;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-4:#757575;--calcite-ui-border-5:#9f9f9f}:host([width=s]){--calcite-dropdown-width:12.5em}:host([width=m]){--calcite-dropdown-width:15em}:host([width=l]){--calcite-dropdown-width:20em}:host([scale=s]){--calcite-dropdown-group-padding:0.5rem 0;--calcite-dropdown-item-padding:0.3rem 1rem 0.3rem 2.25rem}:host([scale=m]){--calcite-dropdown-group-padding:0.75rem 0;--calcite-dropdown-item-padding:0.5rem 1rem 0.5rem 2.25rem}:host([scale=l]){--calcite-dropdown-group-padding:1rem 0;--calcite-dropdown-item-padding:0.75rem 1rem 0.75rem 2.25rem}:host([dir=rtl][scale=s]){--calcite-dropdown-item-padding:0.3rem 2.25rem 0.3rem 1rem}:host([dir=rtl][scale=m]){--calcite-dropdown-item-padding:0.5rem 2.25rem 0.5rem 1rem}:host([dir=rtl][scale=l]){--calcite-dropdown-item-padding:0.75rem 2.25rem 0.75rem 1rem}:host{position:relative;display:inline-block}:host([active]) .calcite-dropdown-wrapper{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);opacity:1;max-height:90vh;overflow-y:auto;visibility:visible;pointer-events:initial}:host .calcite-dropdown-wrapper{-webkit-transform:translate3d(0, -1.5rem, 0);transform:translate3d(0, -1.5rem, 0);-webkit-transition:all 0.15s ease-in-out, max-height 0.15s;transition:all 0.15s ease-in-out, max-height 0.15s;visibility:hidden;opacity:0;display:block;position:absolute;left:0;z-index:200;overflow:hidden;max-height:0;width:auto;width:var(--calcite-dropdown-width);background:var(--calcite-ui-foreground-1);border-radius:var(--calcite-border-radius);-webkit-box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);pointer-events:none}:host([dir=rtl]) .calcite-dropdown-wrapper{right:0;left:unset}:host([alignment=end]) .calcite-dropdown-wrapper{right:0;left:unset}:host([dir=rtl][alignment=end]) .calcite-dropdown-wrapper{right:unset;left:0}:host([alignment=center]) .calcite-dropdown-wrapper{right:0;left:50%;-webkit-transform:translate3d(0, -1.5rem, 0) translateX(-50%);transform:translate3d(0, -1.5rem, 0) translateX(-50%)}:host([alignment=center][active]) .calcite-dropdown-wrapper{-webkit-transform:translate3d(0, 0, 0) translateX(-50%);transform:translate3d(0, 0, 0) translateX(-50%)}:host([alignment=center][dir=rtl]) .calcite-dropdown-wrapper{right:50%;left:0;-webkit-transform:translate3d(0, -1.5rem, 0) translateX(50%);transform:translate3d(0, -1.5rem, 0) translateX(50%)}:host([alignment=center][dir=rtl][active]) .calcite-dropdown-wrapper{-webkit-transform:translate3d(0, 0, 0) translateX(50%);transform:translate3d(0, 0, 0) translateX(50%)}";

const CalciteDropdown = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        this.calciteDropdownSelect = index.createEvent(this, "calciteDropdownSelect", 7);
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    connectedCallback() {
        // validate props
        let alignment = ["start", "center", "end"];
        if (!alignment.includes(this.alignment))
            this.alignment = "start";
        let scale = ["s", "m", "l"];
        if (!scale.includes(this.scale))
            this.scale = "m";
        let width = ["s", "m", "l"];
        if (!width.includes(this.width))
            this.width = "m";
        let type = ["hover", "click"];
        if (!type.includes(this.type))
            this.type = "hover";
    }
    componentDidLoad() {
        this.trigger = this.el.querySelector("[slot=dropdown-trigger]");
        if (!this.sorted) {
            const groups = this.items.sort((a, b) => a.position - b.position);
            this.maxScrollerHeight = this.getMaxScrollerHeight(groups);
            this.items = groups.reduce((items, group) => [...items, ...group.items], []);
            this.sorted = true;
        }
    }
    render() {
        const { maxScrollerHeight } = this;
        const dir = dom.getElementDir(this.el);
        return (index.h(index.Host, { dir: dir }, index.h("slot", { name: "dropdown-trigger", "aria-haspopup": "true", "aria-expanded": this.active.toString() }), index.h("div", { class: "calcite-dropdown-wrapper", role: "menu", style: {
                maxHeight: maxScrollerHeight > 0 ? `${maxScrollerHeight}px` : "",
            } }, index.h("slot", null))));
    }
    openDropdown(e) {
        if (e.target === this.trigger || this.trigger.contains(e.target)) {
            e.preventDefault();
            e.stopPropagation();
            this.openCalciteDropdown();
        }
    }
    closeCalciteDropdownOnClick(e) {
        if (this.active && e.target.offsetParent !== this.el) {
            this.closeCalciteDropdown();
        }
    }
    closeCalciteDropdownOnEvent() {
        this.closeCalciteDropdown();
    }
    keyDownHandler(e) {
        const key$1 = key.getKey(e.key);
        if (e.target === this.trigger || this.trigger.contains(e.target)) {
            if (e.target.nodeName !== "BUTTON" &&
                e.target.nodeName !== "CALCITE-BUTTON") {
                switch (key$1) {
                    case " ":
                    case "Enter":
                        this.openCalciteDropdown();
                        break;
                    case "Escape":
                        this.closeCalciteDropdown();
                        break;
                }
            }
            else if (key$1 === "Escape" || (e.shiftKey && key$1 === "Tab")) {
                this.closeCalciteDropdown();
            }
        }
    }
    mouseoverHandler() {
        if (this.type === "hover") {
            this.openCalciteDropdown();
        }
    }
    mouseoffHandler() {
        if (this.type === "hover") {
            this.closeCalciteDropdown();
        }
    }
    calciteDropdownItemKeyEvent(e) {
        let { keyboardEvent } = e.detail;
        // handle edge
        const target = keyboardEvent.target;
        let itemToFocus = target.nodeName !== "A" ? target : target.parentNode;
        let isFirstItem = this.itemIndex(itemToFocus) === 0;
        let isLastItem = this.itemIndex(itemToFocus) === this.items.length - 1;
        switch (key.getKey(keyboardEvent.key)) {
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
    }
    handleItemSelect(event) {
        this.updateSelectedItems();
        event.stopPropagation();
        this.calciteDropdownSelect.emit();
    }
    registerCalciteDropdownGroup(e) {
        const { detail: { items, position, titleEl }, } = e;
        this.items.push({
            items,
            position,
            titleEl,
        });
        e.stopPropagation();
        this.updateSelectedItems();
    }
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    updateSelectedItems() {
        const items = Array.from(this.el.querySelectorAll("calcite-dropdown-item"));
        this.selectedItems = items.filter((item) => item.active);
    }
    getMaxScrollerHeight(groups) {
        const { maxItems } = this;
        let itemsToProcess = 0;
        let maxScrollerHeight = 0;
        groups.forEach((group) => {
            var _a;
            if (maxItems > 0 && itemsToProcess < maxItems) {
                maxScrollerHeight += ((_a = group === null || group === void 0 ? void 0 : group.titleEl) === null || _a === void 0 ? void 0 : _a.offsetHeight) || 0;
                group.items.forEach((item) => {
                    if (itemsToProcess < maxItems) {
                        maxScrollerHeight += item.offsetHeight;
                        itemsToProcess += 1;
                    }
                });
            }
        });
        return maxScrollerHeight;
    }
    closeCalciteDropdown() {
        this.active = false;
        this.trigger.focus();
    }
    focusOnFirstActiveOrFirstItem() {
        this.getFocusableElement(this.items.find((item) => item.active) || this.items[0]);
    }
    focusFirstItem() {
        const firstItem = this.items[0];
        this.getFocusableElement(firstItem);
    }
    focusLastItem() {
        const lastItem = this.items[this.items.length - 1];
        this.getFocusableElement(lastItem);
    }
    focusNextItem(e) {
        const index = this.itemIndex(e);
        const nextItem = this.items[index + 1] || this.items[0];
        this.getFocusableElement(nextItem);
    }
    focusPrevItem(e) {
        const index = this.itemIndex(e);
        const prevItem = this.items[index - 1] || this.items[this.items.length - 1];
        this.getFocusableElement(prevItem);
    }
    itemIndex(e) {
        return this.items.indexOf(e);
    }
    getFocusableElement(item) {
        if (!item) {
            return;
        }
        const target = item.attributes.isLink
            ? item.shadowRoot.querySelector("a")
            : item;
        dom.focusElement(target);
    }
    openCalciteDropdown() {
        this.active = !this.active;
        const animationDelayInMs = 50;
        if (this.active) {
            setTimeout(() => this.focusOnFirstActiveOrFirstItem(), animationDelayInMs);
        }
    }
    get el() { return index.getElement(this); }
};
CalciteDropdown.style = calciteDropdownCss;

exports.calcite_dropdown = CalciteDropdown;
