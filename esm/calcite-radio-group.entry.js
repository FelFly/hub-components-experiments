import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-12d3ca5e.js';
import { b as getElementProp, g as getElementDir } from './dom-6f055170.js';
import { g as getKey } from './key-f3fb1af9.js';

const calciteRadioGroupCss = ":host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;margin-top:0.25rem}:host([layout=vertical]){-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:start;-ms-flex-item-align:start;align-self:flex-start}:host([width=auto]){width:auto}:host([width=full]){width:100%;display:-ms-flexbox;display:flex}:host([width=full]) ::slotted(calcite-radio-group-item){-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-pack:center;justify-content:center}:host([width=full][layout=vertical]) ::slotted(calcite-radio-group-item){-ms-flex-pack:start;justify-content:start}::slotted(calcite-radio-group-item[checked]),::slotted(calcite-radio-group-item:focus){z-index:0}";

const CalciteRadioGroup = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /** specify the appearance style of the radio group, defaults to solid. */
        this.appearance = "solid";
        /** specify the layout of the radio group, defaults to horizontal */
        this.layout = "horizontal";
        /** specify the width of the group, defaults to auto */
        this.width = "auto";
        //--------------------------------------------------------------------------
        //
        //  Private State/Props
        //
        //--------------------------------------------------------------------------
        this.hiddenInput = (() => {
            const input = document.createElement("input");
            input.type = "hidden";
            this.el.appendChild(input);
            return input;
        })();
        this.calciteRadioGroupChange = createEvent(this, "calciteRadioGroupChange", 7);
    }
    handleNameChange(value) {
        this.hiddenInput.name = value;
    }
    handleSelectedItemChange(newItem, oldItem) {
        if (newItem === oldItem) {
            return;
        }
        const items = this.getItems();
        const match = Array.from(items)
            .filter((item) => item === newItem)
            .pop();
        if (match) {
            this.selectItem(match);
            this.calciteRadioGroupChange.emit();
        }
        else if (items[0]) {
            items[0].tabIndex = 0;
        }
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    connectedCallback() {
        // prop validations
        let scale = ["s", "m", "l"];
        if (!scale.includes(this.scale))
            this.scale = getElementProp(this.el.parentElement, "scale", "m");
        let appearance = ["solid", "outline"];
        if (!appearance.includes(this.appearance))
            this.appearance = "solid";
        let layout = ["horizontal", "vertical"];
        if (!layout.includes(this.layout))
            this.layout = "horizontal";
        let width = ["auto", "full"];
        if (!width.includes(this.width))
            this.width = "auto";
        const items = this.getItems();
        let lastChecked = Array.from(items)
            .filter((item) => item.checked)
            .pop();
        if (lastChecked) {
            this.selectItem(lastChecked);
        }
        else if (items[0]) {
            items[0].tabIndex = 0;
        }
        const { hiddenInput, name } = this;
        if (name) {
            hiddenInput.name = name;
        }
        if (lastChecked) {
            hiddenInput.value = lastChecked.value;
        }
    }
    componentDidLoad() {
        this.hasLoaded = true;
    }
    render() {
        return (h(Host, { role: "radiogroup" }, h("slot", null)));
    }
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    handleClick(event) {
        if (event.target.localName === "calcite-radio-group-item") {
            this.selectItem(event.target);
        }
    }
    handleSelected(event) {
        // only fire after initial setup to prevent semi-infinite loops
        if (this.hasLoaded) {
            event.stopPropagation();
            event.preventDefault();
            this.selectItem(event.target);
        }
    }
    handleKeyDown(event) {
        const keys = ["ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown", " "];
        const key = getKey(event.key);
        const { el, selectedItem } = this;
        if (keys.indexOf(key) === -1) {
            return;
        }
        let adjustedKey = key;
        if (getElementDir(el) === "rtl") {
            if (key === "ArrowRight") {
                adjustedKey = "ArrowLeft";
            }
            if (key === "ArrowLeft") {
                adjustedKey = "ArrowRight";
            }
        }
        const items = this.getItems();
        let selectedIndex = -1;
        items.forEach((item, index) => {
            if (item === selectedItem) {
                selectedIndex = index;
            }
        });
        switch (adjustedKey) {
            case "ArrowLeft":
            case "ArrowUp":
                event.preventDefault();
                const previous = selectedIndex < 1
                    ? items.item(items.length - 1)
                    : items.item(selectedIndex - 1);
                this.selectItem(previous);
                return;
            case "ArrowRight":
            case "ArrowDown":
                event.preventDefault();
                const next = selectedIndex === -1
                    ? items.item(1)
                    : items.item(selectedIndex + 1) || items.item(0);
                this.selectItem(next);
                return;
            case " ":
                event.preventDefault();
                this.selectItem(event.target);
                return;
            default:
                return;
        }
    }
    // --------------------------------------------------------------------------
    //
    //  Methods
    //
    // --------------------------------------------------------------------------
    /** Focuses the selected item. If there is no selection, it focuses the first item. */
    async setFocus() {
        var _a;
        (_a = (this.selectedItem || this.getItems()[0])) === null || _a === void 0 ? void 0 : _a.focus();
    }
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    getItems() {
        return this.el.querySelectorAll("calcite-radio-group-item");
    }
    selectItem(selected) {
        if (selected === this.selectedItem) {
            return;
        }
        const items = this.getItems();
        let match = null;
        items.forEach((item) => {
            const matches = item.value === selected.value;
            if ((matches && !item.checked) || (!matches && item.checked)) {
                item.checked = matches;
            }
            item.tabIndex = matches ? 0 : -1;
            if (matches) {
                match = item;
            }
        });
        this.selectedItem = match;
        this.syncWithInputProxy(match);
        if ( match) {
            match.focus();
        }
    }
    syncWithInputProxy(item) {
        this.hiddenInput.value = item ? item.value : "";
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "name": ["handleNameChange"],
        "selectedItem": ["handleSelectedItemChange"]
    }; }
};
CalciteRadioGroup.style = calciteRadioGroupCss;

export { CalciteRadioGroup as calcite_radio_group };
