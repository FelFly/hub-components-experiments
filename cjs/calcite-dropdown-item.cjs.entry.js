'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-987d1b3d.js');
const dom = require('./dom-82c1dd32.js');
const key = require('./key-db3c4656.js');
const guid = require('./guid-110826b7.js');

const calciteDropdownItemCss = "@charset \"UTF-8\";:host([hidden]){display:none}:host-context([theme=dark]){--calcite-ui-blue-1:#00A0FF;--calcite-ui-blue-2:#0087D7;--calcite-ui-blue-3:#47BBFF;--calcite-ui-green-1:#36DA43;--calcite-ui-green-2:#11AD1D;--calcite-ui-green-3:#44ED51;--calcite-ui-yellow-1:#FFC900;--calcite-ui-yellow-2:#F4B000;--calcite-ui-yellow-3:#FFE24D;--calcite-ui-red-1:#FE583E;--calcite-ui-red-2:#F3381B;--calcite-ui-red-3:#FF7465;--calcite-ui-background:#202020;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#353535;--calcite-ui-foreground-3:#404040;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-4:#757575;--calcite-ui-border-5:#9f9f9f}:host-context([scale=s]){--calcite-dropdown-item-padding:0.3rem 1rem 0.3rem 2.25rem}:host-context([scale=m]){--calcite-dropdown-item-padding:0.5rem 1rem 0.5rem 2.25rem}:host-context([scale=l]){--calcite-dropdown-item-padding:0.75rem 1rem 0.75rem 2.25rem}:host-context([dir=rtl][scale=s]){--calcite-dropdown-item-padding:0.3rem 2.25rem 0.3rem 1rem}:host-context([dir=rtl][scale=m]){--calcite-dropdown-item-padding:0.5rem 2.25rem 0.5rem 1rem}:host-context([dir=rtl][scale=l]){--calcite-dropdown-item-padding:0.75rem 2.25rem 0.75rem 1rem}:host{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;font-size:0.875rem;line-height:1.5;color:var(--calcite-ui-text-3);-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;padding:var(--calcite-dropdown-item-padding);cursor:pointer;text-decoration:none;outline:none;position:relative}:host:before{content:\"•\";position:absolute;left:1rem;opacity:0;color:var(--calcite-ui-border-1);-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out}:host,:host([islink]) a{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host(:focus),:host([islink]) a:focus{outline:2px solid var(--calcite-ui-blue-1);outline-offset:-2px}:host([islink]){padding:0}:host([islink]) a{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;font-size:0.875rem;line-height:1.5;color:var(--calcite-ui-text-3);-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;padding:var(--calcite-dropdown-item-padding);cursor:pointer;text-decoration:none;outline:none;position:relative}:host([islink]) a:before{content:\"•\";position:absolute;left:1rem;opacity:0;color:var(--calcite-ui-border-1);-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out}:host(:hover),:host(:active){background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1);text-decoration:none}:host(:focus){color:var(--calcite-ui-text-1);text-decoration:none}:host(:active){background-color:var(--calcite-ui-foreground-3)}:host(:hover):before,:host(:active):before,:host(:focus):before{opacity:1}:host([dir=rtl]):before{left:unset;right:1rem}:host([active]:not([selection-mode=none])){color:var(--calcite-ui-text-1);font-weight:500}:host([active]:not([selection-mode=none])):before{opacity:1;color:var(--calcite-ui-blue-1)}:host([active]:not([selection-mode=none])) calcite-icon{color:var(--calcite-ui-blue-1)}:host([selection-mode=multi]):before,:host([selection-mode=none]):before{display:none}:host([selection-mode=none]:not([islink])),:host([selection-mode=none][isLink]) a{padding-left:1rem}:host([dir=rtl][selection-mode=none]:not([islink])),:host([dir=rtl][selection-mode=none][isLink]) a{padding-right:1rem}:host .dropdown-item-check-icon{position:absolute;left:0.8571428571rem;opacity:0;-webkit-transform:scale(0.9);transform:scale(0.9);-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out}:host([dir=rtl]) .dropdown-item-check-icon{left:unset;right:0.8571428571rem}:host(:hover) .dropdown-item-check-icon{color:var(--calcite-ui-border-1);opacity:1}:host([active]) .dropdown-item-check-icon{color:var(--calcite-ui-blue-1);opacity:1}:host .dropdown-item-icon-start{margin-right:1rem}:host .dropdown-item-icon-end{margin-left:auto;padding-left:1rem}:host([dir=rtl]) calcite-icon{margin-right:0;margin-left:1rem}:host([dir=rtl]) .dropdown-item-icon-start{margin-left:1rem;margin-right:0}:host([dir=rtl]) .dropdown-item-icon-end{margin-right:auto;padding-right:1rem;margin-left:0;padding-left:0}";

const CalciteDropdownItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Public Properties
        //
        //--------------------------------------------------------------------------
        this.active = false;
        //--------------------------------------------------------------------------
        //
        //  Private State/Props
        //
        //--------------------------------------------------------------------------
        this.dropdownItemId = `calcite-dropdown-item-${guid.guid()}`;
        /** what selection mode is the parent dropdown group in */
        this.selectionMode = dom.getElementProp(this.el, "selection-mode", "single");
        this.calciteDropdownClose = index.createEvent(this, "calciteDropdownClose", 7);
        this.calciteDropdownItemKeyEvent = index.createEvent(this, "calciteDropdownItemKeyEvent", 7);
        this.calciteDropdownItemRegister = index.createEvent(this, "calciteDropdownItemRegister", 7);
        this.calciteDropdownItemSelect = index.createEvent(this, "calciteDropdownItemSelect", 7);
    }
    //--------------------------------------------------------------------------
    //
    //  Public Methods
    //
    //--------------------------------------------------------------------------
    /** Focuses the selected item. */
    async setFocus() {
        this.el.focus();
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    componentWillLoad() {
        this.itemPosition = this.getItemPosition();
        this.calciteDropdownItemRegister.emit({
            position: this.itemPosition,
        });
    }
    render() {
        const attributes = this.getAttributes();
        const dir = dom.getElementDir(this.el);
        const scale = dom.getElementProp(this.el, "scale", "m");
        const iconScale = scale === "s" || scale === "m" ? "s" : "m";
        const iconStartEl = (index.h("calcite-icon", { class: "dropdown-item-icon-start", icon: this.iconStart, scale: iconScale }));
        const iconEndEl = (index.h("calcite-icon", { class: "dropdown-item-icon-end", icon: this.iconEnd, scale: iconScale }));
        const slottedContent = this.iconStart && this.iconEnd ? ([iconStartEl, index.h("slot", null), iconEndEl]) : this.iconStart ? ([iconStartEl, index.h("slot", null)]) : this.iconEnd ? ([index.h("slot", null), iconEndEl]) : (index.h("slot", null));
        const contentEl = !this.href ? (slottedContent) : (index.h("a", Object.assign({}, attributes, { ref: (el) => (this.childLink = el) }), slottedContent));
        return (index.h(index.Host, { dir: dir, tabindex: "0", role: "menuitem", "selection-mode": this.selectionMode, "aria-selected": this.active.toString(), isLink: this.href }, this.selectionMode === "multi" ? (index.h("calcite-icon", { class: "dropdown-item-check-icon", scale: "s", icon: "check" })) : null, contentEl));
    }
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    onClick() {
        this.emitRequestedItem();
    }
    keyDownHandler(e) {
        switch (key.getKey(e.key)) {
            case " ":
                this.emitRequestedItem();
                if (this.href) {
                    e.preventDefault();
                    this.childLink.click();
                }
                break;
            case "Enter":
                this.emitRequestedItem();
                if (this.href)
                    this.childLink.click();
                break;
            case "Escape":
                this.calciteDropdownClose.emit();
                break;
            case "Tab":
            case "ArrowUp":
            case "ArrowDown":
            case "Home":
            case "End":
                this.calciteDropdownItemKeyEvent.emit({ keyboardEvent: e });
                break;
        }
        e.preventDefault();
    }
    registerCalciteDropdownGroup(event) {
        this.currentDropdownGroup = event.detail.groupId;
    }
    updateActiveItemOnChange(event) {
        this.requestedDropdownGroup = event.detail.requestedDropdownGroup;
        this.requestedDropdownItem = event.detail.requestedDropdownItem;
        this.determineActiveItem();
    }
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    determineActiveItem() {
        switch (this.selectionMode) {
            case "multi":
                if (this.dropdownItemId === this.requestedDropdownItem)
                    this.active = !this.active;
                break;
            case "single":
                if (this.dropdownItemId === this.requestedDropdownItem)
                    this.active = true;
                else if (this.requestedDropdownGroup === this.currentDropdownGroup)
                    this.active = false;
                break;
            case "none":
                this.active = false;
                break;
        }
    }
    emitRequestedItem() {
        this.calciteDropdownItemSelect.emit({
            requestedDropdownItem: this.dropdownItemId,
            requestedDropdownGroup: this.currentDropdownGroup,
        });
        this.calciteDropdownClose.emit();
    }
    getAttributes() {
        // spread attributes from the component to rendered child, filtering out props
        let props = [
            "icon-start",
            "icon-end",
            "active",
            "hasText",
            "isLink",
            "dir",
            "id",
            "theme",
        ];
        return Array.from(this.el.attributes)
            .filter((a) => a && !props.includes(a.name))
            .reduce((acc, { name, value }) => (Object.assign(Object.assign({}, acc), { [name]: value })), {});
    }
    getItemPosition() {
        const group = this.el.closest("calcite-dropdown-group");
        return Array.prototype.indexOf.call(group.querySelectorAll("calcite-dropdown-item"), this.el);
    }
    get el() { return index.getElement(this); }
};
CalciteDropdownItem.style = calciteDropdownItemCss;

exports.calcite_dropdown_item = CalciteDropdownItem;
