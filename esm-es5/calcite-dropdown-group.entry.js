import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-12d3ca5e.js';
import { g as guid } from './guid-7c4316c8.js';
var calciteDropdownGroupCss = ":host([hidden]){display:none}:host-context([theme=dark]){--calcite-ui-blue-1:#00A0FF;--calcite-ui-blue-2:#0087D7;--calcite-ui-blue-3:#47BBFF;--calcite-ui-green-1:#36DA43;--calcite-ui-green-2:#11AD1D;--calcite-ui-green-3:#44ED51;--calcite-ui-yellow-1:#FFC900;--calcite-ui-yellow-2:#F4B000;--calcite-ui-yellow-3:#FFE24D;--calcite-ui-red-1:#FE583E;--calcite-ui-red-2:#F3381B;--calcite-ui-red-3:#FF7465;--calcite-ui-background:#202020;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#353535;--calcite-ui-foreground-3:#404040;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-4:#757575;--calcite-ui-border-5:#9f9f9f}:host-context([scale=s]){--calcite-dropdown-group-padding:0.5rem 0}:host-context([scale=m]){--calcite-dropdown-group-padding:0.75rem 0}:host-context([scale=l]){--calcite-dropdown-group-padding:1rem 0}:host .dropdown-title{display:block;margin:0 1rem -1px 1rem;padding:var(--calcite-dropdown-group-padding);border-bottom:1px solid var(--calcite-ui-border-3);color:var(--calcite-ui-text-2);font-weight:600;word-wrap:break-word;cursor:default;font-size:0.875rem;line-height:1.5}";
var CalciteDropdownGroup = /** @class */ (function () {
    function CalciteDropdownGroup(hostRef) {
        registerInstance(this, hostRef);
        /** specify the selection mode - multi (allow any number of (or no) active items), single (allow and require one active item),
         none (no active items), defaults to single */
        this.selectionMode = "single";
        //--------------------------------------------------------------------------
        //
        //  Private State/Props
        //
        //--------------------------------------------------------------------------
        /** created list of dropdown items */
        this.items = [];
        /** unique id for dropdown group */
        this.dropdownGroupId = "calcite-dropdown-group-" + guid();
        this.titleEl = null;
        this.sortItems = function (items) { return items.sort(function (a, b) { return a.position - b.position; }).map(function (a) { return a.item; }); };
        this.calciteDropdownGroupRegister = createEvent(this, "calciteDropdownGroupRegister", 7);
        this.calciteDropdownItemChange = createEvent(this, "calciteDropdownItemChange", 7);
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    CalciteDropdownGroup.prototype.connectedCallback = function () {
        // validate props
        var selectionMode = ["multi", "single", "none"];
        if (!selectionMode.includes(this.selectionMode))
            this.selectionMode = "single";
    };
    CalciteDropdownGroup.prototype.componentDidLoad = function () {
        this.groupPosition = this.getGroupPosition();
        this.items = this.sortItems(this.items);
        this.calciteDropdownGroupRegister.emit({
            items: this.items,
            position: this.groupPosition,
            groupId: this.dropdownGroupId,
            titleEl: this.titleEl,
        });
    };
    CalciteDropdownGroup.prototype.render = function () {
        var _this = this;
        var groupTitle = this.groupTitle ? (h("span", { class: "dropdown-title", ref: function (node) { return (_this.titleEl = node); } }, this.groupTitle)) : null;
        return (h(Host, null, groupTitle, h("slot", null)));
    };
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    CalciteDropdownGroup.prototype.registerCalciteDropdownItem = function (event) {
        var item = event.target;
        if (this.selectionMode === "none") {
            item.active = false;
        }
        this.items.push({
            item: item,
            position: event.detail.position,
        });
        event.stopPropagation();
    };
    CalciteDropdownGroup.prototype.updateActiveItemOnChange = function (event) {
        if (this.selectionMode === "none") {
            event.stopPropagation();
            return;
        }
        this.requestedDropdownGroup = event.detail.requestedDropdownGroup;
        this.requestedDropdownItem = event.detail.requestedDropdownItem;
        this.calciteDropdownItemChange.emit({
            requestedDropdownGroup: this.requestedDropdownGroup,
            requestedDropdownItem: this.requestedDropdownItem,
        });
    };
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    CalciteDropdownGroup.prototype.getGroupPosition = function () {
        return Array.prototype.indexOf.call(this.el.parentElement.querySelectorAll("calcite-dropdown-group"), this.el);
    };
    Object.defineProperty(CalciteDropdownGroup.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return CalciteDropdownGroup;
}());
CalciteDropdownGroup.style = calciteDropdownGroupCss;
export { CalciteDropdownGroup as calcite_dropdown_group };
