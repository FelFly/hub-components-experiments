'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-987d1b3d.js');
const dom = require('./dom-82c1dd32.js');

const calciteInputCss = ":host([hidden]){display:none}calcite-input[scale=s] textarea,calcite-input[scale=s] input,calcite-input[scale=s] .calcite-input-prefix,calcite-input[scale=s] .calcite-input-suffix{padding:8px;font-size:12px}calcite-input[scale=m] textarea,calcite-input[scale=m] input,calcite-input[scale=m] .calcite-input-prefix,calcite-input[scale=m] .calcite-input-suffix{padding:12px;font-size:16px}calcite-input[scale=l] textarea,calcite-input[scale=l] input,calcite-input[scale=l] .calcite-input-prefix,calcite-input[scale=l] .calcite-input-suffix{padding:16px;font-size:20px}calcite-input textarea,calcite-input input{display:-ms-flexbox;display:flex;position:relative;max-width:100%;max-height:100%;-ms-flex:1;flex:1;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;font-family:inherit;-webkit-transition:150ms ease-in-out, height 0s;transition:150ms ease-in-out, height 0s;-webkit-box-shadow:0 0 0 0 transparent;box-shadow:0 0 0 0 transparent;outline:0;margin:0;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-1);font-weight:400}calcite-input input[type=search]::-webkit-search-decoration{-webkit-appearance:none}calcite-input textarea,calcite-input input{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}calcite-input textarea:focus,calcite-input input:focus{outline:2px solid var(--calcite-ui-blue-1);outline-offset:-2px}calcite-input input,calcite-input textarea{color:var(--calcite-ui-text-1);border:1px solid var(--calcite-ui-border-1)}calcite-input input:-ms-input-placeholder,calcite-input textarea:-ms-input-placeholder{color:var(--calcite-ui-text-3);font-weight:400}calcite-input input::-ms-input-placeholder,calcite-input textarea::-ms-input-placeholder{color:var(--calcite-ui-text-3);font-weight:400}calcite-input input::placeholder,calcite-input input:-ms-input-placeholder,calcite-input input::-ms-input-placeholder,calcite-input textarea::placeholder,calcite-input textarea:-ms-input-placeholder,calcite-input textarea::-ms-input-placeholder{color:var(--calcite-ui-text-3);font-weight:400}calcite-input input:focus,calcite-input textarea:focus{border-color:var(--calcite-ui-blue-1);color:var(--calcite-ui-text-1)}calcite-input input[readonly],calcite-input textarea[readonly]{background-color:var(--calcite-ui-background)}calcite-input input[readonly]:focus,calcite-input textarea[readonly]:focus{color:var(--calcite-ui-text-1)}calcite-input slot:not[name=input-message]{display:block;margin-bottom:0.375rem;color:var(--calcite-ui-text-2);font-weight:500}calcite-input[icon] input{padding-left:2.25rem}calcite-input[dir=rtl][icon] input{padding-right:2.25rem;padding-left:0.75rem}calcite-input[dir=rtl][icon][scale=l] input{padding-right:3rem;padding-left:0.75rem}calcite-input[icon][scale=l] input{padding-left:3rem}.calcite-input-element-wrapper{display:-ms-inline-flexbox;display:inline-flex;-ms-flex:1;flex:1;min-width:20%;position:relative;-ms-flex-order:3;order:3}.calcite-input-icon{display:block;position:absolute;pointer-events:none;-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;top:calc(50% - 9px);left:0.75rem;margin:1px auto 0;z-index:1}calcite-input[scale=l] .calcite-input-icon{top:calc(50% - 12px)}calcite-input[dir=rtl] .calcite-input-icon{left:unset;right:0.75rem}.calcite-input-loading{display:block;pointer-events:none;position:absolute;top:1px;left:1px;right:1px}.calcite-input-action-wrapper{display:-ms-flexbox;display:flex;-ms-flex-order:9;order:9;max-width:50%}.calcite-input-prefix,.calcite-input-suffix{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;height:auto;min-height:100%;word-break:break-word;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-weight:500;border:1px solid var(--calcite-ui-border-1);background-color:var(--calcite-ui-background);color:var(--calcite-ui-text-2);line-height:1}.calcite-input-prefix{-ms-flex-order:2;order:2;border-right-width:0px}.calcite-input-suffix{-ms-flex-order:4;order:4;border-left-width:0px}calcite-input[dir=rtl] .calcite-input-prefix{border-right-width:1px;border-left-width:0px}calcite-input[dir=rtl] .calcite-input-suffix{border-left-width:1px;border-right-width:0px}calcite-input[readonly] .calcite-input-number-button-item{pointer-events:none}calcite-input[alignment=start] textarea,calcite-input[alignment=start] input{text-align:left}calcite-input[alignment=end] textarea,calcite-input[alignment=end] input{text-align:right}calcite-input[dir=rtl][alignment=start] textarea,calcite-input[dir=rtl][alignment=start] input{text-align:right}calcite-input[dir=rtl][alignment=end] textarea,calcite-input[dir=rtl][alignment=end] input{text-align:left}calcite-input input[type=number]::-webkit-inner-spin-button,calcite-input input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;-moz-appearance:textfield;margin:0}calcite-input input[type=number]{-moz-appearance:textfield}.calcite-input-number-button-wrapper{-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;box-sizing:border-box;-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;pointer-events:none;-ms-flex-order:7;order:7}calcite-input[number-button-type=vertical] .calcite-input-wrapper{-ms-flex-direction:row;flex-direction:row;display:-ms-flexbox;display:flex}calcite-input[number-button-type=vertical] input,calcite-input[number-button-type=vertical] textarea{-ms-flex-order:2;order:2}calcite-input[dir=rtl][number-button-type=horizontal] .calcite-input-number-button-item[data-adjustment=down] calcite-icon{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}calcite-input[dir=rtl][number-button-type=horizontal] .calcite-input-number-button-item[data-adjustment=up] calcite-icon{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.calcite-input-number-button-item.number-button-item-horizontal[data-adjustment=up],.calcite-input-number-button-item.number-button-item-horizontal[data-adjustment=down]{min-height:100%;max-height:100%;-ms-flex-order:1;order:1;-ms-flex-item-align:auto;align-self:auto}.calcite-input-number-button-item.number-button-item-horizontal[data-adjustment=up] calcite-icon,.calcite-input-number-button-item.number-button-item-horizontal[data-adjustment=down] calcite-icon{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.calcite-input-number-button-item.number-button-item-horizontal[data-adjustment=down]{border-left:1px solid var(--calcite-ui-border-1);border-right:0px}.calcite-input-number-button-item.number-button-item-horizontal[data-adjustment=up]{-ms-flex-order:6;order:6}calcite-input[dir=rtl] .calcite-input-number-button-item.number-button-item-horizontal[data-adjustment=down]{border-right:1px solid var(--calcite-ui-border-1);border-left:0px}calcite-input[dir=rtl] .calcite-input-number-button-item.number-button-item-horizontal[data-adjustment=up]{border-left:1px solid var(--calcite-ui-border-1);border-right:0px}calcite-input[number-button-type=vertical] .calcite-input-number-button-item[data-adjustment=down]{border-top:0}.calcite-input-number-button-item{display:-ms-flexbox;display:flex;-ms-flex-item-align:center;align-self:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;cursor:pointer;max-height:50%;min-height:50%;padding:0 0.75rem;border:1px solid var(--calcite-ui-border-1);-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;pointer-events:initial;background-color:var(--calcite-ui-foreground-1);border-left:none}.calcite-input-number-button-item calcite-icon{pointer-events:none;width:14px;height:auto}.calcite-input-number-button-item:hover,.calcite-input-number-button-item:focus{background-color:var(--calcite-ui-foreground-1)}.calcite-input-number-button-item:active{background-color:var(--calcite-ui-foreground-2)}calcite-input[dir=rtl][number-button-type=vertical] .calcite-input-number-button-item{border-right:none;border-left:1px solid var(--calcite-ui-border-1)}.calcite-input-wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;position:relative;margin-top:4px}calcite-input input::-webkit-calendar-picker-indicator{display:none}calcite-input input[type=date]::-webkit-input-placeholder{visibility:hidden !important}calcite-input textarea::-webkit-resizer{-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;bottom:0;right:0;padding:0 0.375rem}@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none){.calcite-input-resize-icon-wrapper{display:none}}.calcite-input-resize-icon-wrapper{background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-3);position:absolute;z-index:1;bottom:2px;right:2px;pointer-events:none;width:16px;height:16px}.calcite-input-resize-icon-wrapper calcite-icon{bottom:4px;right:4px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}calcite-input[dir=rtl] calcite-input textarea::-webkit-resizer{left:0;right:unset}calcite-input[dir=rtl] .calcite-input-resize-icon{left:10px;right:unset;-webkit-transform:rotate(45deg);transform:rotate(45deg)}calcite-input[type=file] input,calcite-input[type=file] textarea{cursor:pointer;padding:1.5rem;border:1px dashed #d4d4d4;background-color:#f8f8f8;text-align:center}calcite-input[status=invalid] .calcite-input-icon{color:var(--calcite-ui-red-1)}calcite-input[status=valid] .calcite-input-icon{color:var(--calcite-ui-green-1)}calcite-input[status=idle] .calcite-input-icon{color:var(--calcite-ui-text-2)}";

const CalciteInput = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** specify if the input is in loading state */
        this.loading = false;
        /** specify the alignment of the value of the input */
        this.alignment = "start";
        /** input value */
        this.value = "";
        /** input step */
        this.step = "";
        /** input min */
        this.min = "";
        /** input max */
        this.max = "";
        /** for recognized input types, show an icon if applicable */
        this.icon = false;
        /** specify the input type */
        this.type = "text";
        /** specify the placement of the number buttons */
        this.numberButtonType = "vertical";
        /** is the input required */
        this.required = false;
        /** should the input autofocus */
        this.autofocus = false;
        //--------------------------------------------------------------------------
        //
        //  Private State/Props
        //
        //--------------------------------------------------------------------------
        /** keep track of the rendered child type */
        this.childElType = "input";
        /** determine if there is a slotted action for styling purposes */
        this.hasAction = false;
        //--------------------------------------------------------------------------
        //
        //  Private Methods
        //
        //--------------------------------------------------------------------------
        /** map icons to colors */
        this.iconTypeDefaults = {
            tel: "phone",
            password: "lock",
            email: "send",
            date: "calendar",
            time: "clock",
            search: "search",
        };
        this.updateNumberValue = (e) => {
            // todo, when dropping ie11 support, refactor to use stepup/stepdown
            // prevent blur and re-focus of input on mousedown
            e.preventDefault();
            if (this.childElType === "input" && this.type === "number") {
                let inputMax = this.max && this.max !== "" ? parseFloat(this.max) : null;
                let inputMin = this.min && this.min !== "" ? parseFloat(this.min) : null;
                let inputStep = this.step && this.step !== "" ? parseFloat(this.step) : 1;
                let inputVal = this.value && this.value !== "" ? parseFloat(this.value) : 0;
                switch (e.target.dataset.adjustment) {
                    case "up":
                        if ((!inputMax && inputMax !== 0) || inputVal < inputMax)
                            this.childEl.value = (inputVal += inputStep).toString();
                        break;
                    case "down":
                        if ((!inputMin && inputMin !== 0) || inputVal > inputMin)
                            this.childEl.value = (inputVal -= inputStep).toString();
                        break;
                }
                this.value = this.childEl.value.toString();
            }
        };
        this.calciteInputFocus = index.createEvent(this, "calciteInputFocus", 7);
        this.calciteInputBlur = index.createEvent(this, "calciteInputBlur", 7);
        this.calciteInputInput = index.createEvent(this, "calciteInputInput", 7);
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    connectedCallback() {
        // validate props
        let statusOptions = ["invalid", "valid", "idle"];
        if (!statusOptions.includes(this.status))
            this.status = dom.getElementProp(this.el.parentElement, "status", "idle");
        let scale = ["s", "m", "l"];
        if (!scale.includes(this.scale)) {
            this.scale = dom.getElementProp(this.el.parentElement, "scale", "m");
        }
        let alignment = ["start", "end"];
        if (!alignment.includes(this.alignment))
            this.alignment = "start";
        let type = [
            "color",
            "date",
            "datetime-local",
            "email",
            "file",
            "image",
            "month",
            "number",
            "password",
            "search",
            "tel",
            "text",
            "textarea",
            "time",
            "url",
            "week",
        ];
        if (!type.includes(this.type))
            this.type = "text";
        let numberButtonType = ["vertical", "horizontal", "none"];
        if (!numberButtonType.includes(this.numberButtonType))
            this.numberButtonType = "vertical";
        // if an icon string is not provided, but icon is true and a default icon is present
        // for the requested type, set that as the icon
        let typesWithIcons = ["date", "email", "password", "search", "tel", "time"];
        this.icon = this.icon
            ? this.icon
            : this.icon !== false && typesWithIcons.includes(this.type)
                ? this.iconTypeDefaults[this.type]
                : false;
    }
    componentDidLoad() {
        this.childEl = this.el.querySelector(`${this.childElType}`);
    }
    componentWillLoad() {
        this.childElType = this.type === "textarea" ? "textarea" : "input";
        this.hasAction = !!this.el.querySelector("[slot=input-action]");
    }
    componentWillUpdate() {
        this.calciteInputInput.emit({
            element: this.childEl,
            value: this.value,
        });
    }
    render() {
        const dir = dom.getElementDir(this.el);
        const attributes = this.getAttributes();
        const loader = (index.h("div", { class: "calcite-input-loading" }, index.h("calcite-progress", { type: "indeterminate" })));
        const numberButtonClassModifier = this.numberButtonType === "horizontal"
            ? "number-button-item-horizontal"
            : null;
        const numberButtonsHorizontalUp = (index.h("div", { class: `calcite-input-number-button-item ${numberButtonClassModifier}`, onMouseDown: this.updateNumberValue, "data-adjustment": "up" }, index.h("calcite-icon", { theme: this.theme, icon: "chevron-up" })));
        const numberButtonsHorizontalDown = (index.h("div", { class: `calcite-input-number-button-item ${numberButtonClassModifier}`, onMouseDown: this.updateNumberValue, "data-adjustment": "down" }, index.h("calcite-icon", { theme: this.theme, icon: "chevron-down" })));
        const numberButtonsVertical = (index.h("div", { class: `calcite-input-number-button-wrapper` }, numberButtonsHorizontalUp, numberButtonsHorizontalDown));
        const iconScale = this.scale === "s" || this.scale === "m" ? "s" : "m";
        const iconEl = (index.h("calcite-icon", { class: "calcite-input-icon", scale: iconScale, theme: this.theme, icon: this.icon }));
        const inputAction = (index.h("div", { class: "calcite-input-action-wrapper" }, index.h("slot", { name: "input-action" })));
        const prefixText = (index.h("div", { class: "calcite-input-prefix" }, this.prefixText));
        const suffixText = (index.h("div", { class: "calcite-input-suffix" }, this.suffixText));
        const childEl = this.childElType !== "textarea" ? (index.h("input", Object.assign({}, attributes, { onBlur: () => this.inputBlurHandler(), onFocus: () => this.inputFocusHandler(), onInput: (e) => this.inputInputHandler(e), type: this.type, min: this.min, max: this.max, step: this.step, value: this.value, placeholder: this.placeholder || "", required: this.required ? true : null, autofocus: this.autofocus ? true : null }))) : ([
            index.h("textarea", Object.assign({}, attributes, { onBlur: () => this.inputBlurHandler(), onFocus: () => this.inputFocusHandler(), onInput: (e) => this.inputInputHandler(e), required: this.required ? true : null, placeholder: this.placeholder || "", autofocus: this.autofocus ? true : null }), index.h("slot", null)),
            index.h("div", { class: "calcite-input-resize-icon-wrapper" }, index.h("calcite-icon", { icon: "chevron-down", scale: "s" })),
        ]);
        return (index.h(index.Host, { dir: dir }, index.h("div", { class: "calcite-input-wrapper" }, this.type === "number" && this.numberButtonType === "horizontal"
            ? numberButtonsHorizontalDown
            : null, this.prefixText ? prefixText : null, index.h("div", { class: "calcite-input-element-wrapper" }, childEl, this.icon ? iconEl : null, this.loading ? loader : null), this.hasAction ? inputAction : null, this.type === "number" && this.numberButtonType === "vertical"
            ? numberButtonsVertical
            : null, this.suffixText ? suffixText : null, this.type === "number" && this.numberButtonType === "horizontal"
            ? numberButtonsHorizontalUp
            : null)));
    }
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    calciteInputLabelSelected(e) {
        if (e.detail.requestedInput === this.el.id)
            this.focusChildEl();
    }
    //--------------------------------------------------------------------------
    //
    //  Public Methods
    //
    //--------------------------------------------------------------------------
    /** focus the rendered child element */
    async setFocus() {
        var _a;
        (_a = this.childEl) === null || _a === void 0 ? void 0 : _a.focus();
    }
    focusChildEl() {
        this.childEl.focus();
    }
    inputInputHandler(e) {
        this.value = e.target.value;
        this.calciteInputInput.emit({
            element: this.childEl,
            value: this.value,
        });
    }
    inputBlurHandler() {
        this.calciteInputBlur.emit({
            element: this.childEl,
            value: this.value,
        });
    }
    inputFocusHandler() {
        this.calciteInputFocus.emit({
            element: this.childEl,
            value: this.value,
        });
    }
    getAttributes() {
        // spread attributes from the component to rendered child, filtering out props
        let props = [
            "alignment",
            "dir",
            "min",
            "max",
            "step",
            "value",
            "icon",
            "loading",
            "prefix-text",
            "scale",
            "status",
            "suffix-text",
            "theme",
            "number-button-type",
        ];
        return Array.from(this.el.attributes)
            .filter((a) => a && !props.includes(a.name))
            .reduce((acc, { name, value }) => (Object.assign(Object.assign({}, acc), { [name]: value })), {});
    }
    get el() { return index.getElement(this); }
};
CalciteInput.style = calciteInputCss;

const calciteInputMessageCss = ":host([hidden]){display:none}:host([scale=s]){--calcite-input-message-spacing-value:4px}:host([scale=s]) .calcite-input-message-icon{margin-top:-2px}:host([scale=m]){--calcite-input-message-spacing-value:8px}:host([scale=l]){--calcite-input-message-spacing-value:12px}:host{--calcite-input-message-floating-background:rgba(255, 255, 255, 0.96)}:host([theme=dark]){--calcite-input-message-floating-background:rgba(43, 43, 43, 0.96)}:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--calcite-ui-text-2);font-weight:500;line-height:1.25;-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;visibility:hidden;opacity:0;height:0;pointer-events:none}:host([active]){opacity:1;height:auto;visibility:visible;margin-top:var(--calcite-input-message-spacing-value)}:host([type=floating]){-webkit-transform:translate3d(0, -1.5rem, 0);transform:translate3d(0, -1.5rem, 0);background-color:var(--calcite-input-message-floating-background);position:absolute;width:100%;top:100%;left:0;right:0;height:auto;margin-top:-1.5rem;border-radius:var(--calcite-border-radius);-webkit-box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);padding:var(--calcite-input-message-spacing-value);z-index:101}:host([type=floating][active]){-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}.calcite-input-message-icon{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-negative:0;flex-shrink:0;pointer-events:none;-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;margin:-1px 0.75rem 0 0;transition:150ms ease-in-out}:host([dir=rtl]) .calcite-input-message-icon{margin:-1px 0 0 0.75rem}:host([status=invalid]) .calcite-input-message-icon{color:var(--calcite-ui-red-1)}:host([status=valid]) .calcite-input-message-icon{color:var(--calcite-ui-green-1)}:host([status=idle]) .calcite-input-message-icon{color:var(--calcite-ui-blue-1)}:host([type=floating][active]){-webkit-animation:floatingMessagePulse 0.5s ease-in-out;animation:floatingMessagePulse 0.5s ease-in-out;-webkit-animation-iteration-count:1;animation-iteration-count:1}@-webkit-keyframes floatingMessagePulse{0%{top:100%}25%{top:110%}50%{top:100%}75%{top:105%}100%{top:100%}}@keyframes floatingMessagePulse{0%{top:100%}25%{top:110%}50%{top:100%}75%{top:105%}100%{top:100%}}";

const CalciteInputMessage = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Properties
        //
        //--------------------------------------------------------------------------
        this.active = false;
        /** specify the appearance of any slotted message - default (displayed under input), or floating (positioned absolutely under input) */
        this.type = "default";
        //--------------------------------------------------------------------------
        //
        //  Private State/Props
        //
        //--------------------------------------------------------------------------
        // icons for status and validation
        this.iconDefaults = {
            valid: "check-circle",
            invalid: "exclamation-mark-triangle",
            idle: "information",
        };
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    connectedCallback() {
        // validate props
        let statusOptions = ["invalid", "valid", "idle"];
        if (!statusOptions.includes(this.status))
            this.status = dom.getElementProp(this.el.parentElement, "status", "idle");
        let scale = ["s", "m", "l"];
        if (!scale.includes(this.scale))
            this.scale = dom.getElementProp(this.el.parentElement, "scale", "m");
        let type = ["default", "floating"];
        if (!type.includes(this.type))
            this.type = "default";
    }
    componentWillUpdate() {
        this.iconEl = this.setIcon(this.iconDefaults[this.status]);
    }
    render() {
        const dir = dom.getElementDir(this.el);
        this.iconEl = this.setIcon(this.iconDefaults[this.status]);
        return (index.h(index.Host, { theme: this.theme, dir: dir }, this.icon ? this.iconEl : null, index.h("slot", null)));
    }
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    setIcon(iconName) {
        return (index.h("calcite-icon", { class: "calcite-input-message-icon", scale: "s", icon: iconName }));
    }
    get el() { return index.getElement(this); }
};
CalciteInputMessage.style = calciteInputMessageCss;

const calciteLabelCss = ":host([hidden]){display:none}:host-context([theme=dark]){--calcite-ui-blue-1:#00A0FF;--calcite-ui-blue-2:#0087D7;--calcite-ui-blue-3:#47BBFF;--calcite-ui-green-1:#36DA43;--calcite-ui-green-2:#11AD1D;--calcite-ui-green-3:#44ED51;--calcite-ui-yellow-1:#FFC900;--calcite-ui-yellow-2:#F4B000;--calcite-ui-yellow-3:#FFE24D;--calcite-ui-red-1:#FE583E;--calcite-ui-red-2:#F3381B;--calcite-ui-red-3:#FF7465;--calcite-ui-background:#202020;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#353535;--calcite-ui-foreground-3:#404040;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-4:#757575;--calcite-ui-border-5:#9f9f9f}:host([scale=s]) label{font-size:var(--calcite-label-font-size, 12px);--calcite-label-spacing-value:8px}:host([scale=m]) label{font-size:var(--calcite-label-font-size, 16px);--calcite-label-spacing-value:12px}:host([scale=l]) label{font-size:var(--calcite-label-font-size, 20px);--calcite-label-spacing-value:16px}:host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:relative;text-align:left}:host([dir=rtl]){text-align:right}:host label{width:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;cursor:pointer;margin:0 0 var(--calcite-label-margin-bottom, 1.5rem) 0}:host([layout=inline]) label{-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center}:host([layout=inline-space-between]) label{-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center}:host([layout=inline]) .calcite-label-text:first-child,:host([layout=inline-space-between]) .calcite-label-text:first-child{margin-right:0.75rem}:host([layout=inline]) .calcite-label-text:last-child,:host([layout=inline-space-between]) .calcite-label-text:last-child{margin-left:0.75rem}:host([status=invalid]) label{color:var(--calcite-ui-red-1)}:host([status=valid]) label{color:var(--calcite-ui-text-2)}:host([status=idle]) label{color:var(--calcite-ui-text-2)}";

const CalciteLabel = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Properties
        //
        //--------------------------------------------------------------------------
        /** specify the status of the label and any child input / input messages */
        this.status = "idle";
        /** specify the scale of the input, defaults to m */
        this.scale = "m";
        /** is the wrapped element positioned inline with the label slotted text */
        this.layout = "default";
        this.calciteLabelSelectedEvent = index.createEvent(this, "calciteLabelSelectedEvent", 7);
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    connectedCallback() {
        let status = ["invalid", "valid", "idle"];
        if (!status.includes(this.status))
            this.status = "idle";
        let layout = ["inline", "inline-space-between", "default"];
        if (!layout.includes(this.layout))
            this.layout = "default";
        let scale = ["s", "m", "l"];
        if (!scale.includes(this.scale))
            this.scale = "m";
    }
    componentDidLoad() {
        this.requestedInputId = this.el.getAttribute("for");
        if (this.layout === "inline" || this.layout === "inline-space-between") {
            this.displayedSlottedContent = this.handleSlottedContent();
            this.slottedContent.innerHTML = "";
            this.slottedContent.append(...this.displayedSlottedContent);
        }
    }
    render() {
        const attributes = this.getAttributes();
        const dir = dom.getElementDir(this.el);
        return (index.h(index.Host, { dir: dir }, index.h("label", Object.assign({}, attributes, { ref: (el) => (this.slottedContent = el) }), index.h("slot", null))));
    }
    handleClick(e) {
        var _a;
        // don't refocus the input if the click occurs on a slotted input action
        // defer to slider click events if the click occurs on a calcite-slider
        if (((_a = e.target.parentElement) === null || _a === void 0 ? void 0 : _a.className) !== "calcite-input-action-wrapper" &&
            e.target.nodeName !== "CALCITE-SLIDER" &&
            e.target.nodeName !== "CALCITE-RADIO-GROUP-ITEM")
            this.focusChildEl();
    }
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    // take unique action on calcite child controls if present
    focusChildEl() {
        if (this.requestedInputId) {
            this.emitSelectedItem();
            document.getElementById(this.requestedInputId).focus();
        }
        else if (this.el.querySelector("calcite-radio-group")) {
            this.el.querySelectorAll("calcite-radio-group-item[checked]")[0].focus();
        }
        else if (this.el.querySelector("calcite-switch")) {
            this.el.querySelector("calcite-switch").focus();
            this.el.querySelector("calcite-switch").toggleAttribute("switched");
        }
        else if (this.el.querySelector("calcite-checkbox")) {
            this.el.querySelector("calcite-checkbox").focus();
            this.el.querySelector("calcite-checkbox").toggleAttribute("checked");
        }
        else if (this.el.querySelector("calcite-slider")) {
            this.el.querySelector("calcite-slider").setFocus();
        }
        else if (this.el.querySelector("textarea")) {
            this.el.querySelector("textarea").focus();
        }
        else if (this.el.querySelector("input")) {
            this.el.querySelector("input").focus();
        }
    }
    // wrap slotted text nodes in span to handle spacing of inline and inline space between layout
    handleSlottedContent() {
        let nodeList = [];
        let requestedSlottedContent = this.el.childNodes;
        // iterate over slotted nodes and wrap text nodes in span
        if (requestedSlottedContent) {
            requestedSlottedContent.forEach(function (item) {
                if (item.nodeName === "#text" && item.textContent.trim().length > 0) {
                    const node = document.createElement("span");
                    node.classList.add("calcite-label-text");
                    node.classList.add("sc-calcite-label");
                    node.innerHTML = item.textContent.trim();
                    nodeList.push(node);
                }
                else if (item.nodeName !== "#text") {
                    nodeList.push(item);
                }
            });
        }
        return nodeList;
    }
    emitSelectedItem() {
        this.calciteLabelSelectedEvent.emit({
            requestedInput: this.requestedInputId,
        });
    }
    getAttributes() {
        // spread attributes from the component to rendered child, filtering out props
        let props = ["layout", "theme", "scale", "status"];
        return Array.from(this.el.attributes)
            .filter((a) => a && !props.includes(a.name))
            .reduce((acc, { name, value }) => (Object.assign(Object.assign({}, acc), { [name]: value })), {});
    }
    get el() { return index.getElement(this); }
};
CalciteLabel.style = calciteLabelCss;

const calciteProgressCss = ":host([hidden]){display:none}:host{position:relative;display:block;width:100%}.track,.bar{position:absolute;top:0;height:2px}.track{background:var(--calcite-ui-border-3);z-index:0;width:100%;overflow:hidden}.bar{background-color:var(--calcite-ui-blue-1);z-index:0}.indeterminate{width:20%;-webkit-animation:looping-progress-bar-ani 2200ms linear infinite;animation:looping-progress-bar-ani 2200ms linear infinite}.reversed{animation-direction:reverse}.text{padding:1.5rem 0 0 0;text-align:center;font-size:0.875rem;line-height:1.5}@-webkit-keyframes looping-progress-bar-ani{0%{-webkit-transform:translate3d(-100%, 0, 0);transform:translate3d(-100%, 0, 0)}50%{width:40%}100%{-webkit-transform:translate3d(600%, 0, 0);transform:translate3d(600%, 0, 0)}}@keyframes looping-progress-bar-ani{0%{-webkit-transform:translate3d(-100%, 0, 0);transform:translate3d(-100%, 0, 0)}50%{width:40%}100%{-webkit-transform:translate3d(600%, 0, 0);transform:translate3d(600%, 0, 0)}}";

const CalciteProgress = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** Use indeterminate if finding actual progress value is impossible */
        this.type = "determinate";
        /** Fraction completed, in the range of 0 - 1.0 */
        this.value = 0;
        /** Text label for the progress indicator */
        this.text = null;
        /** For indeterminate progress bars, reverse the animation direction */
        this.reversed = false;
    }
    render() {
        const isDeterminate = this.type === "determinate";
        const barStyles = isDeterminate ? { width: `${this.value * 100}%` } : {};
        return (index.h(index.Host, null, index.h("div", { class: "track" }, index.h("div", { class: {
                bar: true,
                indeterminate: this.type === "indeterminate",
                reversed: this.reversed,
            }, style: barStyles })), this.text ? index.h("div", { class: "text" }, this.text) : null));
    }
    get el() { return index.getElement(this); }
};
CalciteProgress.style = calciteProgressCss;

exports.calcite_input = CalciteInput;
exports.calcite_input_message = CalciteInputMessage;
exports.calcite_label = CalciteLabel;
exports.calcite_progress = CalciteProgress;
