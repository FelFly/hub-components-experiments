import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-12d3ca5e.js';
import { b as getElementProp, g as getElementDir } from './dom-6f055170.js';
import { g as getKey } from './key-f3fb1af9.js';

const calciteStepperItemCss = ":host([hidden]){display:none}:host([scale=s]){--calcite-stepper-item-spacing-unit-s:0.1875rem;--calcite-stepper-item-spacing-unit-m:0.375rem;--calcite-stepper-item-spacing-unit-l:0.75rem;font-size:0.875rem;line-height:1.5}:host([scale=m]){--calcite-stepper-item-spacing-unit-s:0.25rem;--calcite-stepper-item-spacing-unit-m:0.5rem;--calcite-stepper-item-spacing-unit-l:1rem;font-size:0.9375rem;line-height:1.5}:host([scale=l]){--calcite-stepper-item-spacing-unit-s:0.375rem;--calcite-stepper-item-spacing-unit-m:0.75rem;--calcite-stepper-item-spacing-unit-l:1.5rem;font-size:1rem;line-height:1.5}:host-context([theme=dark]){--calcite-ui-blue-1:#00A0FF;--calcite-ui-blue-2:#0087D7;--calcite-ui-blue-3:#47BBFF;--calcite-ui-green-1:#36DA43;--calcite-ui-green-2:#11AD1D;--calcite-ui-green-3:#44ED51;--calcite-ui-yellow-1:#FFC900;--calcite-ui-yellow-2:#F4B000;--calcite-ui-yellow-3:#FFE24D;--calcite-ui-red-1:#FE583E;--calcite-ui-red-2:#F3381B;--calcite-ui-red-3:#FF7465;--calcite-ui-background:#202020;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#353535;--calcite-ui-foreground-3:#404040;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-4:#757575;--calcite-ui-border-5:#9f9f9f}:host{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;color:var(--calcite-ui-text-3);-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;text-decoration:none;outline:none;position:relative;border-top:3px solid var(--calcite-ui-border-3);cursor:pointer;margin-right:var(--calcite-stepper-item-spacing-unit-l)}:host([dir=rtl]){margin-left:var(--calcite-stepper-item-spacing-unit-l);margin-right:0}:host{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host(:focus){outline:2px solid var(--calcite-ui-blue-1);outline-offset:2px}:host .stepper-item-header{display:-ms-flexbox;display:flex;-ms-flex-direction:var(--calcite-stepper-item-flex-direction);flex-direction:var(--calcite-stepper-item-flex-direction);-ms-flex-align:start;align-items:flex-start;cursor:pointer}:host .stepper-item-content,:host .stepper-item-header{padding:var(--calcite-stepper-item-spacing-unit-l) var(--calcite-stepper-item-spacing-unit-m);padding-left:0;-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;text-align:left}:host([dir=rtl]) .stepper-item-content,:host([dir=rtl]) .stepper-item-header{padding-left:initial;padding-right:0;text-align:right}:host .stepper-item-header *{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out}:host .stepper-item-content{-ms-flex-direction:column;flex-direction:column;width:100%;display:none}:host .stepper-item-icon{margin-right:var(--calcite-stepper-item-spacing-unit-l);margin-top:var(--calcite-stepper-item-spacing-unit-s);color:var(--calcite-ui-text-3);opacity:0.5;height:12px;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-negative:0;flex-shrink:0;-ms-flex-item-align:start;align-self:flex-start;-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out}:host([dir=rtl]) .stepper-item-icon{margin-left:var(--calcite-stepper-item-spacing-unit-l);margin-right:0}:host .stepper-item-header-text{margin-right:auto;-ms-flex-direction:column;flex-direction:column;text-align:initial}:host([dir=rtl]) .stepper-item-header-text{margin-left:auto;margin-right:0}:host .stepper-item-title,:host .stepper-item-subtitle{display:-ms-flexbox;display:flex;width:100%}:host .stepper-item-title{color:var(--calcite-ui-text-2);font-weight:500}:host .stepper-item-subtitle{color:var(--calcite-ui-text-3)}:host([dir=rtl]) .stepper-item-title{margin-right:0;margin-left:auto}:host .stepper-item-number{font-weight:bold;color:var(--calcite-ui-text-3);margin-right:var(--calcite-stepper-item-spacing-unit-l);-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out}:host([dir=rtl]) .stepper-item-number{margin-left:var(--calcite-stepper-item-spacing-unit-l);margin-right:initial}:host([disabled]){opacity:0.4}:host([disabled]),:host([disabled]) *{cursor:not-allowed;pointer-events:none}:host([complete]){border-top-color:rgba(0, 122, 194, 0.5)}:host([complete]) .stepper-item-icon{color:var(--calcite-ui-blue-1)}:host([error]){border-top-color:var(--calcite-ui-red-1)}:host([error]) .stepper-item-number{color:var(--calcite-ui-red-1)}:host([error]) .stepper-item-icon{color:var(--calcite-ui-red-1);opacity:1}:host(:hover:not([disabled]):not([active])),:host(:focus:not([disabled]):not([active])){border-top-color:rgba(0, 122, 194, 0.75)}:host(:hover:not([disabled]):not([active])) .stepper-item-title,:host(:focus:not([disabled]):not([active])) .stepper-item-title{color:var(--calcite-ui-text-1)}:host(:hover:not([disabled]):not([active])) .stepper-item-subtitle,:host(:focus:not([disabled]):not([active])) .stepper-item-subtitle{color:var(--calcite-ui-text-2)}:host([error]:hover:not([disabled]):not([active])),:host([error]:focus:not([disabled]):not([active])){border-top-color:rgba(216, 48, 32, 0.75)}:host([active]){border-top-color:var(--calcite-ui-blue-1)}:host([active]) .stepper-item-title{color:var(--calcite-ui-text-1)}:host([active]) .stepper-item-subtitle{color:var(--calcite-ui-text-2)}:host([active]) .stepper-item-number{color:var(--calcite-ui-blue-1)}:host([active]) .stepper-item-icon{color:var(--calcite-ui-blue-1);opacity:1}:host([layout=vertical]){-ms-flex:1 1 auto;flex:1 1 auto;border-top:0;border-left:3px solid var(--calcite-ui-border-3);padding:0 0 0 var(--calcite-stepper-item-spacing-unit-l);margin:0 0 var(--calcite-stepper-item-spacing-unit-m) 0}:host([layout=vertical]) .stepper-item-icon{margin:var(--calcite-stepper-item-spacing-unit-m) 0 0 auto;padding-left:var(--calcite-stepper-item-spacing-unit-l);-ms-flex-order:3;order:3}:host([layout=vertical]) .stepper-item-header{padding-right:0}:host([layout=vertical]) .stepper-item-content{padding:0}:host([layout=vertical][active]) .stepper-item-content{display:-ms-flexbox;display:flex}:host([layout=vertical][active]) .stepper-item-content ::slotted(:last-child){margin-bottom:var(--calcite-stepper-item-spacing-unit-l)}:host([layout=vertical][dir=rtl]){border-left:0;border-right:3px solid var(--calcite-ui-border-3);padding:0 var(--calcite-stepper-item-spacing-unit-l) 0 0}:host([layout=vertical][dir=rtl]) .stepper-item-icon{margin:var(--calcite-stepper-item-spacing-unit-m) auto 0 0;padding-left:0;padding-right:var(--calcite-stepper-item-spacing-unit-l)}:host([layout=vertical][dir=rtl]) .stepper-item-header{padding-left:0;padding-right:intial}:host([layout=vertical][complete]){border-color:rgba(0, 122, 194, 0.5)}:host([layout=vertical][error]){border-color:var(--calcite-ui-red-1)}:host([layout=vertical][active]){border-color:var(--calcite-ui-blue-1)}:host([layout=vertical]:hover:not([disabled]):not([active])),:host([layout=vertical]:focus:not([disabled]):not([active])){border-color:rgba(0, 122, 194, 0.75)}:host([layout=vertical][error]:hover:not([disabled]):not([active])),:host([layout=vertical][error]:focus:not([disabled]):not([active])){border-color:rgba(216, 48, 32, 0.75)}";

const CalciteStepperItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Public Properties
        //
        //--------------------------------------------------------------------------
        /** is the step active */
        this.active = false;
        /** has the step been completed */
        this.complete = false;
        /** does the step contain an error that needs to be resolved by the user */
        this.error = false;
        /** is the step disabled and not navigable to by a user */
        this.disabled = false;
        /** should the items display an icon based on status */
        /** @internal */
        this.icon = false;
        /** optionally display the step number next to the title and subtitle */
        /** @internal */
        this.numbered = false;
        /** the scale of the item */
        /** @internal */
        this.scale = "m";
        this.calciteStepperItemKeyEvent = createEvent(this, "calciteStepperItemKeyEvent", 7);
        this.calciteStepperItemSelected = createEvent(this, "calciteStepperItemSelected", 7);
        this.registerCalciteStepperItem = createEvent(this, "registerCalciteStepperItem", 7);
    }
    // watch for removal of disabled to register step
    disabledWatcher() {
        this.registerStepperItem();
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    componentWillLoad() {
        this.icon = getElementProp(this.el, "icon", false);
        this.numbered = getElementProp(this.el, "numbered", false);
        this.layout = getElementProp(this.el, "layout", false);
        this.scale = getElementProp(this.el, "scale", "m");
    }
    componentDidLoad() {
        this.itemPosition = this.getItemPosition();
        this.itemContent = this.getItemContent();
        this.registerStepperItem();
        if (this.active)
            this.emitRequestedItem();
    }
    componentDidUpdate() {
        if (this.active)
            this.emitRequestedItem();
    }
    render() {
        const dir = getElementDir(this.el);
        return (h(Host, { dir: dir, tabindex: this.disabled ? null : 0, "aria-expanded": this.active.toString(), onClick: () => this.emitRequestedItem() }, h("div", { class: "stepper-item-header" }, this.icon ? this.setIcon() : null, this.numbered ? (h("div", { class: "stepper-item-number" }, this.getItemPosition() + 1, ".")) : null, h("div", { class: "stepper-item-header-text" }, h("span", { class: "stepper-item-title" }, this.itemTitle), h("span", { class: "stepper-item-subtitle" }, this.itemSubtitle))), h("div", { class: "stepper-item-content" }, h("slot", null))));
    }
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    keyDownHandler(e) {
        if (!this.disabled && e.target === this.el) {
            switch (getKey(e.key)) {
                case " ":
                case "Enter":
                    this.emitRequestedItem();
                    e.preventDefault();
                    break;
                case "ArrowUp":
                case "ArrowDown":
                case "ArrowLeft":
                case "ArrowRight":
                case "Home":
                case "End":
                    this.calciteStepperItemKeyEvent.emit({ item: e });
                    e.preventDefault();
                    break;
            }
        }
    }
    updateActiveItemOnChange(event) {
        this.activePosition = event.detail.position;
        this.determineActiveItem();
    }
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    setIcon() {
        var path = this.active
            ? "circleF"
            : this.error
                ? "exclamationMarkCircleF"
                : this.complete
                    ? "checkCircleF"
                    : "circle";
        return h("calcite-icon", { icon: path, scale: "s", class: "stepper-item-icon" });
    }
    determineActiveItem() {
        this.active = !this.disabled && this.itemPosition === this.activePosition;
    }
    registerStepperItem() {
        this.registerCalciteStepperItem.emit({
            position: this.itemPosition,
            content: this.itemContent,
        });
    }
    emitRequestedItem() {
        if (!this.disabled) {
            this.calciteStepperItemSelected.emit({
                position: this.itemPosition,
                content: this.itemContent,
            });
        }
    }
    getItemContent() {
        // handle ie and edge
        return this.el.shadowRoot.querySelector("slot")
            ? this.el.shadowRoot
                .querySelector("slot")
                .assignedNodes({ flatten: true })
            : this.el.querySelector(".stepper-item-content")
                ? this.el.querySelector(".stepper-item-content")
                : null;
    }
    getItemPosition() {
        const parent = this.el.parentElement;
        return Array.prototype.indexOf.call(parent.querySelectorAll("calcite-stepper-item"), this.el);
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "disabled": ["disabledWatcher"]
    }; }
};
CalciteStepperItem.style = calciteStepperItemCss;

export { CalciteStepperItem as calcite_stepper_item };
