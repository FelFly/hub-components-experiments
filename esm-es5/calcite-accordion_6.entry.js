var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-12d3ca5e.js';
import { b as getElementProp, g as getElementDir } from './dom-6f055170.js';
import { g as getKey } from './key-f3fb1af9.js';
import './index-fd5669bb.js';
import './index-80082925.js';
import { s as setUpdateProp } from './utils-877cdb99.js';
import { a as commonjsGlobal } from './_commonjsHelpers-97e6d7b1.js';
import { s as sendTelemetry } from './telemetry-utils-0201fa0e.js';
var calciteAccordionCss = ":host([hidden]){display:none}:host-context([theme=dark]){--calcite-ui-blue-1:#00A0FF;--calcite-ui-blue-2:#0087D7;--calcite-ui-blue-3:#47BBFF;--calcite-ui-green-1:#36DA43;--calcite-ui-green-2:#11AD1D;--calcite-ui-green-3:#44ED51;--calcite-ui-yellow-1:#FFC900;--calcite-ui-yellow-2:#F4B000;--calcite-ui-yellow-3:#FFE24D;--calcite-ui-red-1:#FE583E;--calcite-ui-red-2:#F3381B;--calcite-ui-red-3:#FF7465;--calcite-ui-background:#202020;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#353535;--calcite-ui-foreground-3:#404040;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-4:#757575;--calcite-ui-border-5:#9f9f9f}:host([scale=s]){--calcite-accordion-item-spacing-unit:0.5rem;--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit)\n    var(--calcite-accordion-item-spacing-unit);font-size:0.8125rem;line-height:1.5}:host([scale=m]){--calcite-accordion-item-spacing-unit:0.75rem;--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit)\n    var(--calcite-accordion-item-spacing-unit);font-size:0.875rem;line-height:1.5}:host([scale=l]){--calcite-accordion-item-spacing-unit:1.5rem;--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit)\n    var(--calcite-accordion-item-spacing-unit);font-size:0.9375rem;line-height:1.5}:host{display:block;position:relative;max-width:100%;border:1px solid var(--calcite-ui-border-2);border-bottom:none;--calcite-accordion-item-border:var(--calcite-ui-border-2);--calcite-accordion-item-background:var(--calcite-ui-foreground-1)}:host([appearance=minimal]){--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit) 0;border-color:transparent}:host([appearance=transparent]){border-color:transparent;--calcite-accordion-item-border:transparent;--calcite-accordion-item-background:transparent}";
var CalciteAccordion = /** @class */ (function () {
    function CalciteAccordion(hostRef) {
        registerInstance(this, hostRef);
        /** specify the scale of accordion, defaults to m */
        this.scale = "m";
        /** specify the appearance - default (containing border), or minimal (no containing border), defaults to default */
        this.appearance = "default";
        /** specify the placement of the icon in the header, defaults to end */
        this.iconPosition = "end";
        /** specify the type of the icon in the header, defaults to chevron */
        this.iconType = "chevron";
        /** specify the selection mode - multi (allow any number of open items), single (allow one open item),
         * or single-persist (allow and require one open item), defaults to multi */
        this.selectionMode = "multi";
        //--------------------------------------------------------------------------
        //
        //  Private State/Props
        //
        //--------------------------------------------------------------------------
        /** created list of Accordion items */
        this.items = [];
        /** keep track of whether the items have been sorted so we don't re-sort */
        this.sorted = false;
        this.sortItems = function (items) { return items.sort(function (a, b) { return a.position - b.position; }).map(function (a) { return a.item; }); };
        this.calciteAccordionChange = createEvent(this, "calciteAccordionChange", 7);
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    CalciteAccordion.prototype.connectedCallback = function () {
        // validate props
        var appearance = ["default", "minimal", "transparent"];
        if (!appearance.includes(this.appearance))
            this.appearance = "default";
        var iconPosition = ["start", "end"];
        if (!iconPosition.includes(this.iconPosition))
            this.iconPosition = "end";
        var iconType = ["chevron", "caret", "plus-minus"];
        if (!iconType.includes(this.iconType))
            this.iconType = "chevron";
        var scale = ["s", "m", "l"];
        if (!scale.includes(this.scale))
            this.scale = "m";
        var selectionMode = ["multi", "single", "single-persist"];
        if (!selectionMode.includes(this.selectionMode))
            this.selectionMode = "multi";
    };
    CalciteAccordion.prototype.componentDidLoad = function () {
        if (!this.sorted) {
            this.items = this.sortItems(this.items);
            this.sorted = true;
        }
    };
    CalciteAccordion.prototype.render = function () {
        return (h(Host, null, h("slot", null)));
    };
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    CalciteAccordion.prototype.calciteAccordionItemKeyEvent = function (e) {
        var item = e.detail.item;
        var parent = e.detail.parent;
        if (this.el === parent) {
            var key = getKey(item.key);
            var itemToFocus = e.target;
            var isFirstItem = this.itemIndex(itemToFocus) === 0;
            var isLastItem = this.itemIndex(itemToFocus) === this.items.length - 1;
            switch (key) {
                case "ArrowDown":
                    if (isLastItem)
                        this.focusFirstItem();
                    else
                        this.focusNextItem(itemToFocus);
                    break;
                case "ArrowUp":
                    if (isFirstItem)
                        this.focusLastItem();
                    else
                        this.focusPrevItem(itemToFocus);
                    break;
                case "Home":
                    this.focusFirstItem();
                    break;
                case "End":
                    this.focusLastItem();
                    break;
            }
        }
    };
    CalciteAccordion.prototype.registerCalciteAccordionItem = function (e) {
        var item = {
            item: e.target,
            parent: e.detail.parent,
            position: e.detail.position,
        };
        if (this.el === item.parent)
            this.items.push(item);
    };
    CalciteAccordion.prototype.updateActiveItemOnChange = function (event) {
        this.requestedAccordionItem = event.detail.requestedAccordionItem;
        this.calciteAccordionChange.emit({
            requestedAccordionItem: this.requestedAccordionItem,
        });
    };
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    CalciteAccordion.prototype.focusFirstItem = function () {
        var firstItem = this.items[0];
        this.focusElement(firstItem);
    };
    CalciteAccordion.prototype.focusLastItem = function () {
        var lastItem = this.items[this.items.length - 1];
        this.focusElement(lastItem);
    };
    CalciteAccordion.prototype.focusNextItem = function (e) {
        var index = this.itemIndex(e);
        var nextItem = this.items[index + 1] || this.items[0];
        this.focusElement(nextItem);
    };
    CalciteAccordion.prototype.focusPrevItem = function (e) {
        var index = this.itemIndex(e);
        var prevItem = this.items[index - 1] || this.items[this.items.length - 1];
        this.focusElement(prevItem);
    };
    CalciteAccordion.prototype.itemIndex = function (e) {
        return this.items.indexOf(e);
    };
    CalciteAccordion.prototype.focusElement = function (item) {
        var target = item;
        target.focus();
    };
    Object.defineProperty(CalciteAccordion.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return CalciteAccordion;
}());
CalciteAccordion.style = calciteAccordionCss;
var calciteAccordionItemCss = ":host([hidden]){display:none}:host-context([theme=dark]){--calcite-ui-blue-1:#00A0FF;--calcite-ui-blue-2:#0087D7;--calcite-ui-blue-3:#47BBFF;--calcite-ui-green-1:#36DA43;--calcite-ui-green-2:#11AD1D;--calcite-ui-green-3:#44ED51;--calcite-ui-yellow-1:#FFC900;--calcite-ui-yellow-2:#F4B000;--calcite-ui-yellow-3:#FFE24D;--calcite-ui-red-1:#FE583E;--calcite-ui-red-2:#F3381B;--calcite-ui-red-3:#FF7465;--calcite-ui-background:#202020;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#353535;--calcite-ui-foreground-3:#404040;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-4:#757575;--calcite-ui-border-5:#9f9f9f}:host-context([scale=s]){--calcite-accordion-item-spacing-unit:0.5rem;--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit)\n    var(--calcite-accordion-item-spacing-unit);font-size:0.8125rem;line-height:1.5}:host-context([scale=m]){--calcite-accordion-item-spacing-unit:0.75rem;--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit)\n    var(--calcite-accordion-item-spacing-unit);font-size:0.875rem;line-height:1.5}:host-context([scale=l]){--calcite-accordion-item-spacing-unit:1.5rem;--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit)\n    var(--calcite-accordion-item-spacing-unit);font-size:0.9375rem;line-height:1.5}:host([icon-position=start]){--calcite-accordion-item-flex-direction:row-reverse;--calcite-accordion-item-icon-rotation:90deg;--calcite-accordion-item-active-icon-rotation:180deg;--calcite-accordion-item-icon-rotation-rtl:-90deg;--calcite-accordion-item-active-icon-rotation-rtl:-180deg;--calcite-accordion-item-icon-spacing-start:0;--calcite-accordion-item-icon-spacing-end:var(\n    --calcite-accordion-item-spacing-unit\n  )}:host([icon-position=end]){--calcite-accordion-item-flex-direction:row;--calcite-accordion-item-icon-rotation:-90deg;--calcite-accordion-item-active-icon-rotation:0deg;--calcite-accordion-item-icon-rotation-rtl:90deg;--calcite-accordion-item-active-icon-rotation-rtl:0deg;--calcite-accordion-item-icon-spacing-start:var(\n    --calcite-accordion-item-spacing-unit\n  );--calcite-accordion-item-icon-spacing-end:0}:host([icon-position=end]:not([icon-type=plus-minus])){--calcite-accordion-item-icon-rotation:0deg;--calcite-accordion-item-active-icon-rotation:180deg;--calcite-accordion-item-icon-rotation-rtl:0deg;--calcite-accordion-item-active-icon-rotation-rtl:-180deg}:host{--calcite-accordion-item-background:var(--calcite-ui-foreground-1)}:host-context([appearance=minimal]){--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit) 0}:host-context([appearance=transparent]){--calcite-accordion-item-border:transparent;--calcite-accordion-item-background:transparent}:host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;background-color:var(--calcite-accordion-item-background);color:var(--calcite-ui-text-3);-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;text-decoration:none;position:relative;outline:none;position:relative;--calcite-accordion-item-border:var(--calcite-ui-border-2)}:host .accordion-item-header{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host(:focus) .accordion-item-header{outline:2px solid var(--calcite-ui-blue-1);outline-offset:-2px}:host([active]){color:var(--calcite-ui-text-1)}:host([active]) .accordion-item-content{display:block;color:var(--calcite-ui-text-1)}:host([active]) .accordion-item-header{border-bottom-color:transparent}:host .accordion-item-header{display:-ms-flexbox;display:flex;-ms-flex-direction:var(--calcite-accordion-item-flex-direction);flex-direction:var(--calcite-accordion-item-flex-direction);-ms-flex-align:center;align-items:center;cursor:pointer}:host .accordion-item-icon{display:-ms-inline-flexbox;display:inline-flex;position:relative;margin:0;margin-right:var(--calcite-accordion-item-icon-spacing-start);margin-left:var(--calcite-accordion-item-icon-spacing-end);color:var(--calcite-ui-text-3);-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out}:host([dir=rtl]) .accordion-item-icon{margin-left:var(--calcite-accordion-item-icon-spacing-start);margin-right:var(--calcite-accordion-item-icon-spacing-end)}:host .accordion-item-content,:host .accordion-item-header{padding:var(--calcite-accordion-item-padding);border-bottom:1px solid var(--calcite-accordion-item-border)}:host .accordion-item-header *{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out}:host .accordion-item-content{display:none;color:var(--calcite-ui-text-3);padding-top:0}:host .accordion-item-expand-icon{margin-left:var(--calcite-accordion-item-icon-spacing-start);margin-right:var(--calcite-accordion-item-icon-spacing-end);color:var(--calcite-ui-text-3);-webkit-transform:rotate(var(--calcite-accordion-item-icon-rotation));transform:rotate(var(--calcite-accordion-item-icon-rotation))}:host([dir=rtl]) .accordion-item-expand-icon{margin-left:var(--calcite-accordion-item-icon-spacing-end);margin-right:var(--calcite-accordion-item-icon-spacing-start);-webkit-transform:rotate(var(--calcite-accordion-item-icon-rotation-rtl));transform:rotate(var(--calcite-accordion-item-icon-rotation-rtl))}:host([active]) .accordion-item-expand-icon{color:var(--calcite-ui-text-1);-webkit-transform:rotate(var(--calcite-accordion-item-active-icon-rotation));transform:rotate(var(--calcite-accordion-item-active-icon-rotation))}:host([active][dir=rtl]) .accordion-item-expand-icon{-webkit-transform:rotate(var(--calcite-accordion-item-active-icon-rotation-rtl));transform:rotate(var(--calcite-accordion-item-active-icon-rotation-rtl))}:host .accordion-item-header-text{margin-right:auto;-ms-flex-direction:column;flex-direction:column;-ms-flex:1;flex:1;text-align:initial}:host([dir=rtl]) .accordion-item-header-text{margin-left:auto;margin-right:0}:host .accordion-item-title,:host .accordion-item-subtitle{display:-ms-flexbox;display:flex;width:100%}:host .accordion-item-title{color:var(--calcite-ui-text-2);font-weight:500}:host .accordion-item-subtitle{color:var(--calcite-ui-text-3)}:host([dir=rtl]) .accordion-item-title{margin-right:0;margin-left:auto}:host(:focus) .accordion-item-title,:host(:hover) .accordion-item-title{color:var(--calcite-ui-text-1)}:host(:focus) .accordion-item-icon,:host(:hover) .accordion-item-icon{color:var(--calcite-ui-text-1)}:host(:focus) .accordion-item-expand-icon,:host(:hover) .accordion-item-expand-icon{color:var(--calcite-ui-text-1)}:host(:focus) .accordion-item-subtitle,:host(:hover) .accordion-item-subtitle{color:var(--calcite-ui-text-2)}:host(:focus) .accordion-item-title,:host(:active) .accordion-item-title,:host([active]) .accordion-item-title{color:var(--calcite-ui-text-1)}:host(:focus) .accordion-item-icon,:host(:active) .accordion-item-icon,:host([active]) .accordion-item-icon{color:var(--calcite-ui-text-1)}:host(:focus) .accordion-item-expand-icon,:host(:active) .accordion-item-expand-icon,:host([active]) .accordion-item-expand-icon{color:var(--calcite-ui-text-1)}:host(:focus) .accordion-item-subtitle,:host(:active) .accordion-item-subtitle,:host([active]) .accordion-item-subtitle{color:var(--calcite-ui-text-2)}";
var CalciteAccordionItem = /** @class */ (function () {
    function CalciteAccordionItem(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
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
        /** the containing accordion element */
        this.parent = this.el.parentElement;
        /** what selection mode is the parent accordion in */
        this.selectionMode = getElementProp(this.el, "selection-mode", "multi");
        /** what icon type does the parent accordion specify */
        this.iconType = getElementProp(this.el, "icon-type", "chevron");
        /** what icon position does the parent accordion specify */
        this.iconPosition = getElementProp(this.el, "icon-position", "end");
        /** the scale of the parent accordion */
        this.scale = getElementProp(this.el, "scale", "m");
        /** handle clicks on item header */
        this.itemHeaderClickHandler = function () { return _this.emitRequestedItem(); };
        this.calciteAccordionItemKeyEvent = createEvent(this, "calciteAccordionItemKeyEvent", 7);
        this.calciteAccordionItemSelect = createEvent(this, "calciteAccordionItemSelect", 7);
        this.calciteAccordionItemClose = createEvent(this, "calciteAccordionItemClose", 7);
        this.calciteAccordionItemRegister = createEvent(this, "calciteAccordionItemRegister", 7);
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    CalciteAccordionItem.prototype.componentDidLoad = function () {
        this.itemPosition = this.getItemPosition();
        this.calciteAccordionItemRegister.emit({
            parent: this.parent,
            position: this.itemPosition,
        });
    };
    CalciteAccordionItem.prototype.render = function () {
        var dir = getElementDir(this.el);
        var iconScale = this.scale !== "l" ? "s" : "m";
        var iconEl = (h("calcite-icon", { class: "accordion-item-icon", icon: this.icon, scale: iconScale }));
        return (h(Host, { tabindex: "0", "aria-expanded": this.active.toString(), dir: dir, "icon-position": this.iconPosition }, h("div", { class: "accordion-item-header", onClick: this.itemHeaderClickHandler }, this.icon ? iconEl : null, h("div", { class: "accordion-item-header-text" }, h("span", { class: "accordion-item-title" }, this.itemTitle), h("span", { class: "accordion-item-subtitle" }, this.itemSubtitle)), h("calcite-icon", { class: "accordion-item-expand-icon", icon: this.iconType === "chevron"
                ? "chevronUp"
                : this.iconType === "caret"
                    ? "caretUp"
                    : this.active
                        ? "minus"
                        : "plus", scale: "s" })), h("div", { class: "accordion-item-content" }, h("slot", null))));
    };
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    CalciteAccordionItem.prototype.keyDownHandler = function (e) {
        if (e.target === this.el) {
            switch (getKey(e.key)) {
                case " ":
                case "Enter":
                    this.emitRequestedItem();
                    e.preventDefault();
                    break;
                case "ArrowUp":
                case "ArrowDown":
                case "Home":
                case "End":
                    this.calciteAccordionItemKeyEvent.emit({
                        parent: this.parent,
                        item: e,
                    });
                    e.preventDefault();
                    break;
            }
        }
    };
    CalciteAccordionItem.prototype.updateActiveItemOnChange = function (event) {
        this.requestedAccordionItem = event.detail
            .requestedAccordionItem;
        this.determineActiveItem();
    };
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    CalciteAccordionItem.prototype.determineActiveItem = function () {
        switch (this.selectionMode) {
            case "multi":
                if (this.el === this.requestedAccordionItem)
                    this.active = !this.active;
                break;
            case "single":
                if (this.el === this.requestedAccordionItem)
                    this.active = !this.active;
                else
                    this.active = false;
                break;
            case "single-persist":
                this.active = this.el === this.requestedAccordionItem;
                break;
        }
    };
    CalciteAccordionItem.prototype.emitRequestedItem = function () {
        this.calciteAccordionItemSelect.emit({
            requestedAccordionItem: this.el,
        });
    };
    CalciteAccordionItem.prototype.getItemPosition = function () {
        return Array.prototype.indexOf.call(this.parent.querySelectorAll("calcite-accordion-item"), this.el);
    };
    Object.defineProperty(CalciteAccordionItem.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return CalciteAccordionItem;
}());
CalciteAccordionItem.style = calciteAccordionItemCss;
var metadataElementViewCss = ":host{display:block}input,textarea{width:100%;height:40px;font-size:16px}textarea{height:80px}calcite-label.metadata-required::after{content:'*';color:red}label{margin-top:5px;display:block;font-weight:600}.geography{height:400px}";
var MetadataElementView = /** @class */ (function () {
    function MetadataElementView(hostRef) {
        registerInstance(this, hostRef);
        this.elementTitle = "Input: Title";
        this.required = false;
        /**
         * Currently based on calcite-components input
         */
        this.type = "text";
        /**
         * Which translator to use from the schema definition
         */
        this.translator = "arcgis";
        /**
         * Subtype is used to override the metadata editor for this element
         * e.g. `geography` or `topics` show specific editors
         */
        this.subtype = null;
        this.elementId = "title";
        this.value = "";
        this.description = "";
        this.metadataEditors = {
            "geography": { component: "hub-places-map" },
            "topics": { component: "hub-topic-picker" }
        };
        this.elementUpdated = createEvent(this, "elementUpdated", 7);
    }
    MetadataElementView.prototype.requiredStatus = function () {
        return this.required ? "metadata-required" : "metadata-optional";
    };
    MetadataElementView.prototype.getMetadataEditor = function (editorType) {
        return this.metadataEditors[editorType];
    };
    MetadataElementView.prototype.editorUpdatedHandler = function (event) {
        var address = this.schema['translation'][this.translator][0];
        var metadataObj = {};
        metadataObj[address] = event.detail;
        console.log("metadata-element-view: elementUpdatedHandler", metadataObj);
        this.elementUpdated.emit(metadataObj);
    };
    MetadataElementView.prototype.onInput = function () {
        var address = this.schema['translation'][this.translator][0];
        var metadataObj = {};
        metadataObj[address] = this.metadataEl.value;
        console.log("metadata-element-view: onInput", metadataObj);
        this.elementUpdated.emit(metadataObj);
    };
    MetadataElementView.prototype.renderEditor = function (elementType, elementSubType) {
        var _this = this;
        var _a;
        console.log("renderEditor", elementType, this.getMetadataEditor(elementSubType));
        if (!!elementSubType) {
            var editorType = this.getMetadataEditor(elementSubType);
            // TODO: handle different types, such as array parse, date new, etc.
            var editorComponent = "<" + editorType.component + " options=\"" + ((_a = this.schema['items']) === null || _a === void 0 ? void 0 : _a.enum) + "\" values=\"" + this.value + "\"></" + editorType.component + ">";
            return (h("div", { class: elementSubType, innerHTML: editorComponent }));
        }
        else {
            return (h("calcite-input", { onInput: function (_event) { return _this.onInput(); }, required: this.required, ref: function (el) { return _this.metadataEl = el; }, id: this.elementId, type: this.type,
                // name={this.id}
                class: this.requiredStatus(), value: this.value }));
        }
    };
    MetadataElementView.prototype.render = function () {
        return (h(Host, null, h("slot", null), h("calcite-label", { status: "valid" }, this.elementTitle, this.renderEditor(this.type, this.subtype), h("calcite-input-message", { active: true }, this.description))));
    };
    return MetadataElementView;
}());
MetadataElementView.style = metadataElementViewCss;
var metadataFormCss = ":host{display:block}";
var MetadataForm = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        this.sections = [];
        this.locale = "en";
        this.resource = null;
    }
    class_1.prototype.componentWillLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                sendTelemetry({
                    category: 'hub-component',
                    action: 'hub-metadata-form:loaded',
                    label: ''
                });
                return [2 /*return*/];
            });
        });
    };
    // When an element updates and merges into the resource object.
    class_1.prototype.resourceUpdated = function (event) {
        console.log("trace metadata-form: resourceUpdated", event.detail);
    };
    class_1.prototype.render = function () {
        var _this = this;
        console.log("MetadataForm: render", this.resource);
        return (h(Host, null, h("slot", null), h("calcite-accordion", null, this.sections.map(function (section) { return h("calcite-accordion-item", { "item-title": section, active: true }, h("metadata-section-view", { spec: section, locale: _this.locale, resource: _this.resource })); }))));
    };
    Object.defineProperty(class_1.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
MetadataForm.style = metadataFormCss;
var metadataSectionHelpCss = ":host{display:block}";
var MetadataSectionHelp = /** @class */ (function () {
    function MetadataSectionHelp(hostRef) {
        registerInstance(this, hostRef);
        this.elementTitle = "Basic Info";
        this.description = "This information is used in search results, gallery cards and on the details views.";
    }
    MetadataSectionHelp.prototype.render = function () {
        return (h(Host, null, h("slot", null), h("div", { class: "metadata-section-help" }, h("h3", null, this.elementTitle), h("p", null, this.description))));
    };
    return MetadataSectionHelp;
}());
MetadataSectionHelp.style = metadataSectionHelpCss;
function getMetadataSpec(_url) {
    return __awaiter(this, void 0, void 0, function () {
        var result, sections, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch(_url)];
                case 1:
                    result = _b.sent();
                    return [4 /*yield*/, result.json()];
                case 2:
                    sections = _b.sent();
                    console.log("getMetadataSpec: sections", sections);
                    return [2 /*return*/, sections];
                case 3:
                    error_1 = _b.sent();
                    if (error_1) {
                        return [2 /*return*/, error_1.message];
                    }
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
var fnToStr = Function.prototype.toString;
var constructorRegex = /^\s*class\b/;
var isES6ClassFn = function isES6ClassFunction(value) {
    try {
        var fnStr = fnToStr.call(value);
        return constructorRegex.test(fnStr);
    }
    catch (e) {
        return false; // not a function
    }
};
var tryFunctionObject = function tryFunctionToStr(value) {
    try {
        if (isES6ClassFn(value)) {
            return false;
        }
        fnToStr.call(value);
        return true;
    }
    catch (e) {
        return false;
    }
};
var toStr = Object.prototype.toString;
var fnClass = '[object Function]';
var genClass = '[object GeneratorFunction]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
var isCallable = function isCallable(value) {
    if (!value) {
        return false;
    }
    if (typeof value !== 'function' && typeof value !== 'object') {
        return false;
    }
    if (typeof value === 'function' && !value.prototype) {
        return true;
    }
    if (hasToStringTag) {
        return tryFunctionObject(value);
    }
    if (isES6ClassFn(value)) {
        return false;
    }
    var strClass = toStr.call(value);
    return strClass === fnClass || strClass === genClass;
};
var toStr$1 = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var forEachArray = function forEachArray(array, iterator, receiver) {
    for (var i = 0, len = array.length; i < len; i++) {
        if (hasOwnProperty.call(array, i)) {
            if (receiver == null) {
                iterator(array[i], i, array);
            }
            else {
                iterator.call(receiver, array[i], i, array);
            }
        }
    }
};
var forEachString = function forEachString(string, iterator, receiver) {
    for (var i = 0, len = string.length; i < len; i++) {
        // no such thing as a sparse string.
        if (receiver == null) {
            iterator(string.charAt(i), i, string);
        }
        else {
            iterator.call(receiver, string.charAt(i), i, string);
        }
    }
};
var forEachObject = function forEachObject(object, iterator, receiver) {
    for (var k in object) {
        if (hasOwnProperty.call(object, k)) {
            if (receiver == null) {
                iterator(object[k], k, object);
            }
            else {
                iterator.call(receiver, object[k], k, object);
            }
        }
    }
};
var forEach = function forEach(list, iterator, thisArg) {
    if (!isCallable(iterator)) {
        throw new TypeError('iterator must be a function');
    }
    var receiver;
    if (arguments.length >= 3) {
        receiver = thisArg;
    }
    if (toStr$1.call(list) === '[object Array]') {
        forEachArray(list, iterator, receiver);
    }
    else if (typeof list === 'string') {
        forEachString(list, iterator, receiver);
    }
    else {
        forEachObject(list, iterator, receiver);
    }
};
var forEach_1 = forEach;
/* eslint no-invalid-this: 1 */
var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr$2 = Object.prototype.toString;
var funcType = '[object Function]';
var implementation = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr$2.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);
    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(this, args.concat(slice.call(arguments)));
            if (Object(result) === result) {
                return result;
            }
            return this;
        }
        else {
            return target.apply(that, args.concat(slice.call(arguments)));
        }
    };
    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }
    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);
    if (target.prototype) {
        var Empty = function Empty() { };
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }
    return bound;
};
var functionBind = Function.prototype.bind || implementation;
var src = functionBind.call(Function.call, Object.prototype.hasOwnProperty);
/* eslint complexity: [2, 18], max-statements: [2, 33] */
var shams = function hasSymbols() {
    if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') {
        return false;
    }
    if (typeof Symbol.iterator === 'symbol') {
        return true;
    }
    var obj = {};
    var sym = Symbol('test');
    var symObj = Object(sym);
    if (typeof sym === 'string') {
        return false;
    }
    if (Object.prototype.toString.call(sym) !== '[object Symbol]') {
        return false;
    }
    if (Object.prototype.toString.call(symObj) !== '[object Symbol]') {
        return false;
    }
    // temp disabled per https://github.com/ljharb/object.assign/issues/17
    // if (sym instanceof Symbol) { return false; }
    // temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
    // if (!(symObj instanceof Symbol)) { return false; }
    // if (typeof Symbol.prototype.toString !== 'function') { return false; }
    // if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }
    var symVal = 42;
    obj[sym] = symVal;
    for (sym in obj) {
        return false;
    } // eslint-disable-line no-restricted-syntax
    if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) {
        return false;
    }
    if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) {
        return false;
    }
    var syms = Object.getOwnPropertySymbols(obj);
    if (syms.length !== 1 || syms[0] !== sym) {
        return false;
    }
    if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
        return false;
    }
    if (typeof Object.getOwnPropertyDescriptor === 'function') {
        var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
        if (descriptor.value !== symVal || descriptor.enumerable !== true) {
            return false;
        }
    }
    return true;
};
var origSymbol = commonjsGlobal.Symbol;
var hasSymbols = function hasNativeSymbols() {
    if (typeof origSymbol !== 'function') {
        return false;
    }
    if (typeof Symbol !== 'function') {
        return false;
    }
    if (typeof origSymbol('foo') !== 'symbol') {
        return false;
    }
    if (typeof Symbol('bar') !== 'symbol') {
        return false;
    }
    return shams();
};
/* globals
    Atomics,
    SharedArrayBuffer,
*/
var undefined$1;
var $TypeError = TypeError;
var $gOPD = Object.getOwnPropertyDescriptor;
var throwTypeError = function () { throw new $TypeError(); };
var ThrowTypeError = $gOPD
    ? (function () {
        try {
            return throwTypeError;
        }
        catch (calleeThrows) {
            try {
                // IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
                return $gOPD(arguments, 'callee').get;
            }
            catch (gOPDthrows) {
                return throwTypeError;
            }
        }
    }())
    : throwTypeError;
var hasSymbols$1 = hasSymbols();
var getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto
var generatorFunction = undefined$1;
var asyncFunction = undefined$1;
var asyncGenFunction = undefined$1;
var TypedArray = typeof Uint8Array === 'undefined' ? undefined$1 : getProto(Uint8Array);
var INTRINSICS = {
    '%Array%': Array,
    '%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined$1 : ArrayBuffer,
    '%ArrayBufferPrototype%': typeof ArrayBuffer === 'undefined' ? undefined$1 : ArrayBuffer.prototype,
    '%ArrayIteratorPrototype%': hasSymbols$1 ? getProto([][Symbol.iterator]()) : undefined$1,
    '%ArrayPrototype%': Array.prototype,
    '%ArrayProto_entries%': Array.prototype.entries,
    '%ArrayProto_forEach%': Array.prototype.forEach,
    '%ArrayProto_keys%': Array.prototype.keys,
    '%ArrayProto_values%': Array.prototype.values,
    '%AsyncFromSyncIteratorPrototype%': undefined$1,
    '%AsyncFunction%': asyncFunction,
    '%AsyncFunctionPrototype%': undefined$1,
    '%AsyncGenerator%': undefined$1,
    '%AsyncGeneratorFunction%': asyncGenFunction,
    '%AsyncGeneratorPrototype%': undefined$1,
    '%AsyncIteratorPrototype%': undefined$1,
    '%Atomics%': typeof Atomics === 'undefined' ? undefined$1 : Atomics,
    '%Boolean%': Boolean,
    '%BooleanPrototype%': Boolean.prototype,
    '%DataView%': typeof DataView === 'undefined' ? undefined$1 : DataView,
    '%DataViewPrototype%': typeof DataView === 'undefined' ? undefined$1 : DataView.prototype,
    '%Date%': Date,
    '%DatePrototype%': Date.prototype,
    '%decodeURI%': decodeURI,
    '%decodeURIComponent%': decodeURIComponent,
    '%encodeURI%': encodeURI,
    '%encodeURIComponent%': encodeURIComponent,
    '%Error%': Error,
    '%ErrorPrototype%': Error.prototype,
    '%eval%': eval,
    '%EvalError%': EvalError,
    '%EvalErrorPrototype%': EvalError.prototype,
    '%Float32Array%': typeof Float32Array === 'undefined' ? undefined$1 : Float32Array,
    '%Float32ArrayPrototype%': typeof Float32Array === 'undefined' ? undefined$1 : Float32Array.prototype,
    '%Float64Array%': typeof Float64Array === 'undefined' ? undefined$1 : Float64Array,
    '%Float64ArrayPrototype%': typeof Float64Array === 'undefined' ? undefined$1 : Float64Array.prototype,
    '%Function%': Function,
    '%FunctionPrototype%': Function.prototype,
    '%Generator%': undefined$1,
    '%GeneratorFunction%': generatorFunction,
    '%GeneratorPrototype%': undefined$1,
    '%Int8Array%': typeof Int8Array === 'undefined' ? undefined$1 : Int8Array,
    '%Int8ArrayPrototype%': typeof Int8Array === 'undefined' ? undefined$1 : Int8Array.prototype,
    '%Int16Array%': typeof Int16Array === 'undefined' ? undefined$1 : Int16Array,
    '%Int16ArrayPrototype%': typeof Int16Array === 'undefined' ? undefined$1 : Int8Array.prototype,
    '%Int32Array%': typeof Int32Array === 'undefined' ? undefined$1 : Int32Array,
    '%Int32ArrayPrototype%': typeof Int32Array === 'undefined' ? undefined$1 : Int32Array.prototype,
    '%isFinite%': isFinite,
    '%isNaN%': isNaN,
    '%IteratorPrototype%': hasSymbols$1 ? getProto(getProto([][Symbol.iterator]())) : undefined$1,
    '%JSON%': typeof JSON === 'object' ? JSON : undefined$1,
    '%JSONParse%': typeof JSON === 'object' ? JSON.parse : undefined$1,
    '%Map%': typeof Map === 'undefined' ? undefined$1 : Map,
    '%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols$1 ? undefined$1 : getProto(new Map()[Symbol.iterator]()),
    '%MapPrototype%': typeof Map === 'undefined' ? undefined$1 : Map.prototype,
    '%Math%': Math,
    '%Number%': Number,
    '%NumberPrototype%': Number.prototype,
    '%Object%': Object,
    '%ObjectPrototype%': Object.prototype,
    '%ObjProto_toString%': Object.prototype.toString,
    '%ObjProto_valueOf%': Object.prototype.valueOf,
    '%parseFloat%': parseFloat,
    '%parseInt%': parseInt,
    '%Promise%': typeof Promise === 'undefined' ? undefined$1 : Promise,
    '%PromisePrototype%': typeof Promise === 'undefined' ? undefined$1 : Promise.prototype,
    '%PromiseProto_then%': typeof Promise === 'undefined' ? undefined$1 : Promise.prototype.then,
    '%Promise_all%': typeof Promise === 'undefined' ? undefined$1 : Promise.all,
    '%Promise_reject%': typeof Promise === 'undefined' ? undefined$1 : Promise.reject,
    '%Promise_resolve%': typeof Promise === 'undefined' ? undefined$1 : Promise.resolve,
    '%Proxy%': typeof Proxy === 'undefined' ? undefined$1 : Proxy,
    '%RangeError%': RangeError,
    '%RangeErrorPrototype%': RangeError.prototype,
    '%ReferenceError%': ReferenceError,
    '%ReferenceErrorPrototype%': ReferenceError.prototype,
    '%Reflect%': typeof Reflect === 'undefined' ? undefined$1 : Reflect,
    '%RegExp%': RegExp,
    '%RegExpPrototype%': RegExp.prototype,
    '%Set%': typeof Set === 'undefined' ? undefined$1 : Set,
    '%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols$1 ? undefined$1 : getProto(new Set()[Symbol.iterator]()),
    '%SetPrototype%': typeof Set === 'undefined' ? undefined$1 : Set.prototype,
    '%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined$1 : SharedArrayBuffer,
    '%SharedArrayBufferPrototype%': typeof SharedArrayBuffer === 'undefined' ? undefined$1 : SharedArrayBuffer.prototype,
    '%String%': String,
    '%StringIteratorPrototype%': hasSymbols$1 ? getProto(''[Symbol.iterator]()) : undefined$1,
    '%StringPrototype%': String.prototype,
    '%Symbol%': hasSymbols$1 ? Symbol : undefined$1,
    '%SymbolPrototype%': hasSymbols$1 ? Symbol.prototype : undefined$1,
    '%SyntaxError%': SyntaxError,
    '%SyntaxErrorPrototype%': SyntaxError.prototype,
    '%ThrowTypeError%': ThrowTypeError,
    '%TypedArray%': TypedArray,
    '%TypedArrayPrototype%': TypedArray ? TypedArray.prototype : undefined$1,
    '%TypeError%': $TypeError,
    '%TypeErrorPrototype%': $TypeError.prototype,
    '%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined$1 : Uint8Array,
    '%Uint8ArrayPrototype%': typeof Uint8Array === 'undefined' ? undefined$1 : Uint8Array.prototype,
    '%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined$1 : Uint8ClampedArray,
    '%Uint8ClampedArrayPrototype%': typeof Uint8ClampedArray === 'undefined' ? undefined$1 : Uint8ClampedArray.prototype,
    '%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined$1 : Uint16Array,
    '%Uint16ArrayPrototype%': typeof Uint16Array === 'undefined' ? undefined$1 : Uint16Array.prototype,
    '%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined$1 : Uint32Array,
    '%Uint32ArrayPrototype%': typeof Uint32Array === 'undefined' ? undefined$1 : Uint32Array.prototype,
    '%URIError%': URIError,
    '%URIErrorPrototype%': URIError.prototype,
    '%WeakMap%': typeof WeakMap === 'undefined' ? undefined$1 : WeakMap,
    '%WeakMapPrototype%': typeof WeakMap === 'undefined' ? undefined$1 : WeakMap.prototype,
    '%WeakSet%': typeof WeakSet === 'undefined' ? undefined$1 : WeakSet,
    '%WeakSetPrototype%': typeof WeakSet === 'undefined' ? undefined$1 : WeakSet.prototype
};
var $replace = functionBind.call(Function.call, String.prototype.replace);
/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
    var result = [];
    $replace(string, rePropName, function (match, number, quote, subString) {
        result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : (number || match);
    });
    return result;
};
/* end adaptation */
var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
    if (!(name in INTRINSICS)) {
        throw new SyntaxError('intrinsic ' + name + ' does not exist!');
    }
    // istanbul ignore if // hopefully this is impossible to test :-)
    if (typeof INTRINSICS[name] === 'undefined' && !allowMissing) {
        throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
    }
    return INTRINSICS[name];
};
var GetIntrinsic = function GetIntrinsic(name, allowMissing) {
    if (typeof name !== 'string' || name.length === 0) {
        throw new TypeError('intrinsic name must be a non-empty string');
    }
    if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
        throw new TypeError('"allowMissing" argument must be a boolean');
    }
    var parts = stringToPath(name);
    var value = getBaseIntrinsic('%' + (parts.length > 0 ? parts[0] : '') + '%', allowMissing);
    for (var i = 1; i < parts.length; i += 1) {
        if (value != null) {
            if ($gOPD && (i + 1) >= parts.length) {
                var desc = $gOPD(value, parts[i]);
                if (!allowMissing && !(parts[i] in value)) {
                    throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
                }
                value = desc ? (desc.get || desc.value) : value[parts[i]];
            }
            else {
                value = value[parts[i]];
            }
        }
    }
    return value;
};
var $Function = GetIntrinsic('%Function%');
var $apply = $Function.apply;
var $call = $Function.call;
var callBind = function callBind() {
    return functionBind.apply($call, arguments);
};
var apply = function applyBind() {
    return functionBind.apply($apply, arguments);
};
callBind.apply = apply;
var toStr$3 = Object.prototype.toString;
var isArguments = function isArguments(value) {
    var str = toStr$3.call(value);
    var isArgs = str === '[object Arguments]';
    if (!isArgs) {
        isArgs = str !== '[object Array]' &&
            value !== null &&
            typeof value === 'object' &&
            typeof value.length === 'number' &&
            value.length >= 0 &&
            toStr$3.call(value.callee) === '[object Function]';
    }
    return isArgs;
};
var keysShim;
if (!Object.keys) {
    // modified from https://github.com/es-shims/es5-shim
    var has = Object.prototype.hasOwnProperty;
    var toStr$4 = Object.prototype.toString;
    var isArgs = isArguments; // eslint-disable-line global-require
    var isEnumerable = Object.prototype.propertyIsEnumerable;
    var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
    var hasProtoEnumBug = isEnumerable.call(function () { }, 'prototype');
    var dontEnums = [
        'toString',
        'toLocaleString',
        'valueOf',
        'hasOwnProperty',
        'isPrototypeOf',
        'propertyIsEnumerable',
        'constructor'
    ];
    var equalsConstructorPrototype = function (o) {
        var ctor = o.constructor;
        return ctor && ctor.prototype === o;
    };
    var excludedKeys = {
        $applicationCache: true,
        $console: true,
        $external: true,
        $frame: true,
        $frameElement: true,
        $frames: true,
        $innerHeight: true,
        $innerWidth: true,
        $onmozfullscreenchange: true,
        $onmozfullscreenerror: true,
        $outerHeight: true,
        $outerWidth: true,
        $pageXOffset: true,
        $pageYOffset: true,
        $parent: true,
        $scrollLeft: true,
        $scrollTop: true,
        $scrollX: true,
        $scrollY: true,
        $self: true,
        $webkitIndexedDB: true,
        $webkitStorageInfo: true,
        $window: true
    };
    var hasAutomationEqualityBug = (function () {
        /* global window */
        if (typeof window === 'undefined') {
            return false;
        }
        for (var k in window) {
            try {
                if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
                    try {
                        equalsConstructorPrototype(window[k]);
                    }
                    catch (e) {
                        return true;
                    }
                }
            }
            catch (e) {
                return true;
            }
        }
        return false;
    }());
    var equalsConstructorPrototypeIfNotBuggy = function (o) {
        /* global window */
        if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
            return equalsConstructorPrototype(o);
        }
        try {
            return equalsConstructorPrototype(o);
        }
        catch (e) {
            return false;
        }
    };
    keysShim = function keys(object) {
        var isObject = object !== null && typeof object === 'object';
        var isFunction = toStr$4.call(object) === '[object Function]';
        var isArguments = isArgs(object);
        var isString = isObject && toStr$4.call(object) === '[object String]';
        var theKeys = [];
        if (!isObject && !isFunction && !isArguments) {
            throw new TypeError('Object.keys called on a non-object');
        }
        var skipProto = hasProtoEnumBug && isFunction;
        if (isString && object.length > 0 && !has.call(object, 0)) {
            for (var i = 0; i < object.length; ++i) {
                theKeys.push(String(i));
            }
        }
        if (isArguments && object.length > 0) {
            for (var j = 0; j < object.length; ++j) {
                theKeys.push(String(j));
            }
        }
        else {
            for (var name in object) {
                if (!(skipProto && name === 'prototype') && has.call(object, name)) {
                    theKeys.push(String(name));
                }
            }
        }
        if (hasDontEnumBug) {
            var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);
            for (var k = 0; k < dontEnums.length; ++k) {
                if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
                    theKeys.push(dontEnums[k]);
                }
            }
        }
        return theKeys;
    };
}
var implementation$1 = keysShim;
var slice$1 = Array.prototype.slice;
var origKeys = Object.keys;
var keysShim$1 = origKeys ? function keys(o) { return origKeys(o); } : implementation$1;
var originalKeys = Object.keys;
keysShim$1.shim = function shimObjectKeys() {
    if (Object.keys) {
        var keysWorksWithArguments = (function () {
            // Safari 5.0 bug
            var args = Object.keys(arguments);
            return args && args.length === arguments.length;
        }(1, 2));
        if (!keysWorksWithArguments) {
            Object.keys = function keys(object) {
                if (isArguments(object)) {
                    return originalKeys(slice$1.call(object));
                }
                return originalKeys(object);
            };
        }
    }
    else {
        Object.keys = keysShim$1;
    }
    return Object.keys || keysShim$1;
};
var objectKeys = keysShim$1;
var hasSymbols$2 = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';
var toStr$5 = Object.prototype.toString;
var concat = Array.prototype.concat;
var origDefineProperty = Object.defineProperty;
var isFunction = function (fn) {
    return typeof fn === 'function' && toStr$5.call(fn) === '[object Function]';
};
var arePropertyDescriptorsSupported = function () {
    var obj = {};
    try {
        origDefineProperty(obj, 'x', { enumerable: false, value: obj });
        // eslint-disable-next-line no-unused-vars, no-restricted-syntax
        for (var _ in obj) { // jscs:ignore disallowUnusedVariables
            return false;
        }
        return obj.x === obj;
    }
    catch (e) { /* this is IE 8. */
        return false;
    }
};
var supportsDescriptors = origDefineProperty && arePropertyDescriptorsSupported();
var defineProperty = function (object, name, value, predicate) {
    if (name in object && (!isFunction(predicate) || !predicate())) {
        return;
    }
    if (supportsDescriptors) {
        origDefineProperty(object, name, {
            configurable: true,
            enumerable: false,
            value: value,
            writable: true
        });
    }
    else {
        object[name] = value;
    }
};
var defineProperties = function (object, map) {
    var predicates = arguments.length > 2 ? arguments[2] : {};
    var props = objectKeys(map);
    if (hasSymbols$2) {
        props = concat.call(props, Object.getOwnPropertySymbols(map));
    }
    for (var i = 0; i < props.length; i += 1) {
        defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
    }
};
defineProperties.supportsDescriptors = !!supportsDescriptors;
var defineProperties_1 = defineProperties;
var $TypeError$1 = GetIntrinsic('%TypeError%');
// http://www.ecma-international.org/ecma-262/5.1/#sec-9.10
var CheckObjectCoercible = function CheckObjectCoercible(value, optMessage) {
    if (value == null) {
        throw new $TypeError$1(optMessage || ('Cannot call method on ' + value));
    }
    return value;
};
var $String = GetIntrinsic('%String%');
var $TypeError$2 = GetIntrinsic('%TypeError%');
// https://www.ecma-international.org/ecma-262/6.0/#sec-tostring
var ToString = function ToString(argument) {
    if (typeof argument === 'symbol') {
        throw new $TypeError$2('Cannot convert a Symbol value to a string');
    }
    return $String(argument);
};
var $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));
var callBound = function callBoundIntrinsic(name, allowMissing) {
    var intrinsic = GetIntrinsic(name, !!allowMissing);
    if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.')) {
        return callBind(intrinsic);
    }
    return intrinsic;
};
var $replace$1 = callBound('String.prototype.replace');
/* eslint-disable no-control-regex */
var leftWhitespace = /^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/;
var rightWhitespace = /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/;
/* eslint-enable no-control-regex */
var implementation$2 = function trim() {
    var S = ToString(CheckObjectCoercible(this));
    return $replace$1($replace$1(S, leftWhitespace, ''), rightWhitespace, '');
};
var zeroWidthSpace = '\u200b';
var polyfill = function getPolyfill() {
    if (String.prototype.trim && zeroWidthSpace.trim() === zeroWidthSpace) {
        return String.prototype.trim;
    }
    return implementation$2;
};
var shim = function shimStringTrim() {
    var polyfill$1 = polyfill();
    defineProperties_1(String.prototype, { trim: polyfill$1 }, {
        trim: function testTrim() {
            return String.prototype.trim !== polyfill$1;
        }
    });
    return polyfill$1;
};
var boundTrim = callBind(polyfill());
defineProperties_1(boundTrim, {
    getPolyfill: polyfill,
    implementation: implementation$2,
    shim: shim
});
var string_prototype_trim = boundTrim;
var warn = function warn(message) {
};
var replace = String.prototype.replace;
var split = String.prototype.split;
// #### Pluralization methods
// The string that separates the different phrase possibilities.
var delimiter = '||||';
var russianPluralGroups = function (n) {
    var lastTwo = n % 100;
    var end = lastTwo % 10;
    if (lastTwo !== 11 && end === 1) {
        return 0;
    }
    if (2 <= end && end <= 4 && !(lastTwo >= 12 && lastTwo <= 14)) {
        return 1;
    }
    return 2;
};
var defaultPluralRules = {
    // Mapping from pluralization group plural logic.
    pluralTypes: {
        arabic: function (n) {
            // http://www.arabeyes.org/Plural_Forms
            if (n < 3) {
                return n;
            }
            var lastTwo = n % 100;
            if (lastTwo >= 3 && lastTwo <= 10)
                return 3;
            return lastTwo >= 11 ? 4 : 5;
        },
        bosnian_serbian: russianPluralGroups,
        chinese: function () { return 0; },
        croatian: russianPluralGroups,
        french: function (n) { return n > 1 ? 1 : 0; },
        german: function (n) { return n !== 1 ? 1 : 0; },
        russian: russianPluralGroups,
        lithuanian: function (n) {
            if (n % 10 === 1 && n % 100 !== 11) {
                return 0;
            }
            return n % 10 >= 2 && n % 10 <= 9 && (n % 100 < 11 || n % 100 > 19) ? 1 : 2;
        },
        czech: function (n) {
            if (n === 1) {
                return 0;
            }
            return (n >= 2 && n <= 4) ? 1 : 2;
        },
        polish: function (n) {
            if (n === 1) {
                return 0;
            }
            var end = n % 10;
            return 2 <= end && end <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2;
        },
        icelandic: function (n) { return (n % 10 !== 1 || n % 100 === 11) ? 1 : 0; },
        slovenian: function (n) {
            var lastTwo = n % 100;
            if (lastTwo === 1) {
                return 0;
            }
            if (lastTwo === 2) {
                return 1;
            }
            if (lastTwo === 3 || lastTwo === 4) {
                return 2;
            }
            return 3;
        }
    },
    // Mapping from pluralization group to individual language codes/locales.
    // Will look up based on exact match, if not found and it's a locale will parse the locale
    // for language code, and if that does not exist will default to 'en'
    pluralTypeToLanguages: {
        arabic: ['ar'],
        bosnian_serbian: ['bs-Latn-BA', 'bs-Cyrl-BA', 'srl-RS', 'sr-RS'],
        chinese: ['id', 'id-ID', 'ja', 'ko', 'ko-KR', 'lo', 'ms', 'th', 'th-TH', 'zh'],
        croatian: ['hr', 'hr-HR'],
        german: ['fa', 'da', 'de', 'en', 'es', 'fi', 'el', 'he', 'hi-IN', 'hu', 'hu-HU', 'it', 'nl', 'no', 'pt', 'sv', 'tr'],
        french: ['fr', 'tl', 'pt-br'],
        russian: ['ru', 'ru-RU'],
        lithuanian: ['lt'],
        czech: ['cs', 'cs-CZ', 'sk'],
        polish: ['pl'],
        icelandic: ['is'],
        slovenian: ['sl-SL']
    }
};
function langToTypeMap(mapping) {
    var ret = {};
    forEach_1(mapping, function (langs, type) {
        forEach_1(langs, function (lang) {
            ret[lang] = type;
        });
    });
    return ret;
}
function pluralTypeName(pluralRules, locale) {
    var langToPluralType = langToTypeMap(pluralRules.pluralTypeToLanguages);
    return langToPluralType[locale]
        || langToPluralType[split.call(locale, /-/, 1)[0]]
        || langToPluralType.en;
}
function pluralTypeIndex(pluralRules, locale, count) {
    return pluralRules.pluralTypes[pluralTypeName(pluralRules, locale)](count);
}
function escape(token) {
    return token.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
function constructTokenRegex(opts) {
    var prefix = (opts && opts.prefix) || '%{';
    var suffix = (opts && opts.suffix) || '}';
    if (prefix === delimiter || suffix === delimiter) {
        throw new RangeError('"' + delimiter + '" token is reserved for pluralization');
    }
    return new RegExp(escape(prefix) + '(.*?)' + escape(suffix), 'g');
}
var defaultTokenRegex = /%\{(.*?)\}/g;
// ### transformPhrase(phrase, substitutions, locale)
//
// Takes a phrase string and transforms it by choosing the correct
// plural form and interpolating it.
//
//     transformPhrase('Hello, %{name}!', {name: 'Spike'});
//     // "Hello, Spike!"
//
// The correct plural form is selected if substitutions.smart_count
// is set. You can pass in a number instead of an Object as `substitutions`
// as a shortcut for `smart_count`.
//
//     transformPhrase('%{smart_count} new messages |||| 1 new message', {smart_count: 1}, 'en');
//     // "1 new message"
//
//     transformPhrase('%{smart_count} new messages |||| 1 new message', {smart_count: 2}, 'en');
//     // "2 new messages"
//
//     transformPhrase('%{smart_count} new messages |||| 1 new message', 5, 'en');
//     // "5 new messages"
//
// You should pass in a third argument, the locale, to specify the correct plural type.
// It defaults to `'en'` with 2 plural forms.
function transformPhrase(phrase, substitutions, locale, tokenRegex, pluralRules) {
    if (typeof phrase !== 'string') {
        throw new TypeError('Polyglot.transformPhrase expects argument #1 to be string');
    }
    if (substitutions == null) {
        return phrase;
    }
    var result = phrase;
    var interpolationRegex = tokenRegex || defaultTokenRegex;
    var pluralRulesOrDefault = pluralRules || defaultPluralRules;
    // allow number as a pluralization shortcut
    var options = typeof substitutions === 'number' ? { smart_count: substitutions } : substitutions;
    // Select plural form: based on a phrase text that contains `n`
    // plural forms separated by `delimiter`, a `locale`, and a `substitutions.smart_count`,
    // choose the correct plural form. This is only done if `count` is set.
    if (options.smart_count != null && result) {
        var texts = split.call(result, delimiter);
        result = string_prototype_trim(texts[pluralTypeIndex(pluralRulesOrDefault, locale || 'en', options.smart_count)] || texts[0]);
    }
    // Interpolate: Creates a `RegExp` object for each interpolation placeholder.
    result = replace.call(result, interpolationRegex, function (expression, argument) {
        if (!src(options, argument) || options[argument] == null) {
            return expression;
        }
        return options[argument];
    });
    return result;
}
// ### Polyglot class constructor
function Polyglot(options) {
    var opts = options || {};
    this.phrases = {};
    this.extend(opts.phrases || {});
    this.currentLocale = opts.locale || 'en';
    var allowMissing = opts.allowMissing ? transformPhrase : null;
    this.onMissingKey = typeof opts.onMissingKey === 'function' ? opts.onMissingKey : allowMissing;
    this.warn = opts.warn || warn;
    this.tokenRegex = constructTokenRegex(opts.interpolation);
    this.pluralRules = opts.pluralRules || defaultPluralRules;
}
// ### polyglot.locale([locale])
//
// Get or set locale. Internally, Polyglot only uses locale for pluralization.
Polyglot.prototype.locale = function (newLocale) {
    if (newLocale)
        this.currentLocale = newLocale;
    return this.currentLocale;
};
// ### polyglot.extend(phrases)
//
// Use `extend` to tell Polyglot how to translate a given key.
//
//     polyglot.extend({
//       "hello": "Hello",
//       "hello_name": "Hello, %{name}"
//     });
//
// The key can be any string.  Feel free to call `extend` multiple times;
// it will override any phrases with the same key, but leave existing phrases
// untouched.
//
// It is also possible to pass nested phrase objects, which get flattened
// into an object with the nested keys concatenated using dot notation.
//
//     polyglot.extend({
//       "nav": {
//         "hello": "Hello",
//         "hello_name": "Hello, %{name}",
//         "sidebar": {
//           "welcome": "Welcome"
//         }
//       }
//     });
//
//     console.log(polyglot.phrases);
//     // {
//     //   'nav.hello': 'Hello',
//     //   'nav.hello_name': 'Hello, %{name}',
//     //   'nav.sidebar.welcome': 'Welcome'
//     // }
//
// `extend` accepts an optional second argument, `prefix`, which can be used
// to prefix every key in the phrases object with some string, using dot
// notation.
//
//     polyglot.extend({
//       "hello": "Hello",
//       "hello_name": "Hello, %{name}"
//     }, "nav");
//
//     console.log(polyglot.phrases);
//     // {
//     //   'nav.hello': 'Hello',
//     //   'nav.hello_name': 'Hello, %{name}'
//     // }
//
// This feature is used internally to support nested phrase objects.
Polyglot.prototype.extend = function (morePhrases, prefix) {
    forEach_1(morePhrases, function (phrase, key) {
        var prefixedKey = prefix ? prefix + '.' + key : key;
        if (typeof phrase === 'object') {
            this.extend(phrase, prefixedKey);
        }
        else {
            this.phrases[prefixedKey] = phrase;
        }
    }, this);
};
// ### polyglot.unset(phrases)
// Use `unset` to selectively remove keys from a polyglot instance.
//
//     polyglot.unset("some_key");
//     polyglot.unset({
//       "hello": "Hello",
//       "hello_name": "Hello, %{name}"
//     });
//
// The unset method can take either a string (for the key), or an object hash with
// the keys that you would like to unset.
Polyglot.prototype.unset = function (morePhrases, prefix) {
    if (typeof morePhrases === 'string') {
        delete this.phrases[morePhrases];
    }
    else {
        forEach_1(morePhrases, function (phrase, key) {
            var prefixedKey = prefix ? prefix + '.' + key : key;
            if (typeof phrase === 'object') {
                this.unset(phrase, prefixedKey);
            }
            else {
                delete this.phrases[prefixedKey];
            }
        }, this);
    }
};
// ### polyglot.clear()
//
// Clears all phrases. Useful for special cases, such as freeing
// up memory if you have lots of phrases but no longer need to
// perform any translation. Also used internally by `replace`.
Polyglot.prototype.clear = function () {
    this.phrases = {};
};
// ### polyglot.replace(phrases)
//
// Completely replace the existing phrases with a new set of phrases.
// Normally, just use `extend` to add more phrases, but under certain
// circumstances, you may want to make sure no old phrases are lying around.
Polyglot.prototype.replace = function (newPhrases) {
    this.clear();
    this.extend(newPhrases);
};
// ### polyglot.t(key, options)
//
// The most-used method. Provide a key, and `t` will return the
// phrase.
//
//     polyglot.t("hello");
//     => "Hello"
//
// The phrase value is provided first by a call to `polyglot.extend()` or
// `polyglot.replace()`.
//
// Pass in an object as the second argument to perform interpolation.
//
//     polyglot.t("hello_name", {name: "Spike"});
//     => "Hello, Spike"
//
// If you like, you can provide a default value in case the phrase is missing.
// Use the special option key "_" to specify a default.
//
//     polyglot.t("i_like_to_write_in_language", {
//       _: "I like to write in %{language}.",
//       language: "JavaScript"
//     });
//     => "I like to write in JavaScript."
//
Polyglot.prototype.t = function (key, options) {
    var phrase, result;
    var opts = options == null ? {} : options;
    if (typeof this.phrases[key] === 'string') {
        phrase = this.phrases[key];
    }
    else if (typeof opts._ === 'string') {
        phrase = opts._;
    }
    else if (this.onMissingKey) {
        var onMissingKey = this.onMissingKey;
        result = onMissingKey(key, opts, this.currentLocale, this.tokenRegex, this.pluralRules);
    }
    else {
        this.warn('Missing translation for key: "' + key + '"');
        result = key;
    }
    if (typeof phrase === 'string') {
        result = transformPhrase(phrase, opts, this.currentLocale, this.tokenRegex, this.pluralRules);
    }
    return result;
};
// ### polyglot.has(key)
//
// Check if polyglot has a translation for given key
Polyglot.prototype.has = function (key) {
    return src(this.phrases, key);
};
// export transformPhrase
Polyglot.transformPhrase = function transform(phrase, substitutions, locale) {
    return transformPhrase(phrase, substitutions, locale);
};
var nodePolyglot = Polyglot;
function getComponentClosestLanguage(element) {
    var closestElement = element.closest('[lang]');
    return closestElement ? closestElement.lang : 'en';
}
function getLocaleStrings(name, locale, path) {
    return __awaiter(this, void 0, void 0, function () {
        var polyglot, strings, _b, _c, e_1, _d, _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    polyglot = new nodePolyglot({ locale: locale });
                    strings = {};
                    _f.label = 1;
                case 1:
                    _f.trys.push([1, 3, , 5]);
                    _b = strings;
                    _c = name;
                    return [4 /*yield*/, fetchLocaleStringsForComponent(name, locale, path)];
                case 2:
                    _b[_c] = _f.sent();
                    return [3 /*break*/, 5];
                case 3:
                    e_1 = _f.sent();
                    console.warn("no locale for " + name + " (" + locale + ") loading default locale en.");
                    _d = strings;
                    _e = name;
                    return [4 /*yield*/, fetchLocaleStringsForComponent(name, 'en', path)];
                case 4:
                    _d[_e] = _f.sent();
                    return [3 /*break*/, 5];
                case 5:
                    console.log("getLocaleComponent", strings);
                    polyglot.extend(strings);
                    return [2 /*return*/, polyglot];
            }
        });
    });
}
function getMetadataLocaleStrings(metadataName, metadataLocale) {
    return __awaiter(this, void 0, void 0, function () {
        var localePath;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    localePath = "./schema/locale";
                    return [4 /*yield*/, getLocaleStrings(metadataName, metadataLocale, localePath)];
                case 1: return [2 /*return*/, _b.sent()];
            }
        });
    });
}
function fetchLocaleStringsForComponent(componentName, locale, path) {
    return new Promise(function (resolve, reject) {
        fetch(path + "/" + componentName + ".i18n." + locale + ".json")
            .then(function (result) {
            if (result.ok)
                resolve(result.json());
            else
                reject();
        }, function () { return reject(); });
    });
}
var metadataSectionViewCss = ":host{display:block;border-top:1px solid #444}.metadata-section{padding-bottom:10px;display:grid;grid-gap:1em;grid-template-columns:20% auto;grid-template-areas:\"metadata-section-help metadata-section-input\"}";
var MetadataSectionView = /** @class */ (function () {
    function class_2(hostRef) {
        registerInstance(this, hostRef);
        this.spec = "arcgis";
        this.elementTitle = "";
        this.description = "";
        this.locale = "en";
        /**
         * JSON Schema Properties section
         */
        this.inputs = [];
        /**
         * Hub Resource object.
         */
        this.resource = null;
        /**
         * Which translator to use from the schema definition
         */
        this.translator = "arcgis";
        this.resourceUpdated = createEvent(this, "resourceUpdated", 7);
    }
    class_2.prototype.componentWillLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _b;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = this;
                        return [4 /*yield*/, this.loadSpecification()];
                    case 1:
                        _b.sectionSchema = _c.sent();
                        this.locale = this.locale || getComponentClosestLanguage(this.element);
                        this.elementTitle = this.sectionSchema['title'];
                        this.description = this.sectionSchema['description'];
                        this.inputs = this.sectionSchema['properties'];
                        // TODO: send input translation down to components / per input
                        getMetadataLocaleStrings(this.spec, this.locale).then(function (result) {
                            _this.strings = result;
                            _this.elementTitle = _this.strings.t(_this.spec + ".metadata." + _this.spec + ".title");
                            _this.description = _this.strings.t(_this.spec + ".metadata." + _this.spec + ".description");
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    class_2.prototype.loadSpecification = function () {
        return __awaiter(this, void 0, void 0, function () {
            var file;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        file = "./schema/" + this.spec + ".json";
                        return [4 /*yield*/, getMetadataSpec(file)];
                    case 1: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    // TODO: use `schema.translation` to get correct metadata element, e.g. `summer = item.snippet`
    class_2.prototype.getMetadataValue = function (attr) {
        var value = "";
        console.log("metadata-section-view: metadataValue", attr, this.resource);
        if (!!this.resource) {
            // value = this.resource[attr];
            console.log("metadata-section-view: metadataValue - translation", attr, attr.split('.'));
            value = attr.split('.').reduce(function (o, i) { return o[i]; }, this.resource);
        }
        console.log("metadata-section-view: metadataValue", attr, value, this.resource);
        return value;
    };
    /**
     * Set the correct attribute that may be embedded (e.g. {'metadata.interests': ['topic1', 'topic2']})
     *
     * @param resource Hub Resource
     * @param attributes Object of attributes that may be embedded (e.g. {'metadata.interests': ['topic1', 'topic2']})
     */
    class_2.prototype.setMetadataValue = function (resource, attributes) {
        console.log('setMetadataValue input', resource);
        Object.keys(attributes).map(function (key) {
            setUpdateProp(resource, key.split('.'), attributes[key]);
        });
        console.log('setMetadataValue output', resource);
        //   let value = attributes[attribute];
        //   attribute.split('.').reduce((obj, attr, currentIndex, array) => {
        //     console.log("obj, attr", obj,attr, currentIndex, array)
        //     if(currentIndex === (array.length-1)) {
        //       obj[attr] = value;
        //     } else {
        //       // If there isn't yet a child object, add one
        //       obj[attr] = (!!obj[attr]) ?  obj[attr] : {};
        //     }
        //     return obj;
        //   }, resource)
        // })
        // Merge the element property update into the resource, then send up...
        // this.resource = Object.assign(this.resource, attributes)
        return resource;
    };
    class_2.prototype.elementUpdatedHandler = function (event) {
        console.log('trace metadata-section-view: elementUpdatedHandler', event.detail, this.resource);
        this.resource = this.setMetadataValue(this.resource, event.detail);
        console.log('trace metadata-section-view: elementUpdatedHandler', event.detail, this.resource);
        this.resourceUpdated.emit(this.resource);
    };
    class_2.prototype.render = function () {
        var _this = this;
        console.log("metadata-section-view: inputs", [this.elementTitle, this.inputs]);
        return (h(Host, null, h("slot", null), h("section", { class: "metadata-section" }, h("metadata-section-help", { elementTitle: this.elementTitle, description: this.description }), h("div", { class: "metadata-section-input" }, Object.keys(this.inputs).map(function (attr) { return h("metadata-element-view", { elementTitle: attr, schema: _this.inputs[attr], type: _this.inputs[attr].type, subtype: _this.inputs[attr].subtype || null, description: _this.inputs[attr].description, value: _this.getMetadataValue(_this.inputs[attr].translation[_this.translator][0]), required: true }); })))));
    };
    Object.defineProperty(class_2.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return class_2;
}());
MetadataSectionView.style = metadataSectionViewCss;
export { CalciteAccordion as calcite_accordion, CalciteAccordionItem as calcite_accordion_item, MetadataElementView as metadata_element_view, MetadataForm as metadata_form, MetadataSectionHelp as metadata_section_help, MetadataSectionView as metadata_section_view };
