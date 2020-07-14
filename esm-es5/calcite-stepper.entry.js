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
var calciteStepperCss = ":host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:stretch;align-items:stretch;width:100%;min-width:100%}:host([layout=vertical]){-ms-flex-direction:column;flex-direction:column;-ms-flex:1 auto auto;flex:1 auto auto}:host .stepper-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%;min-width:100%}";
var CalciteStepper = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        /** specify the scale of stepper, defaults to m */
        this.scale = "m";
        /** optionally display the number next to the step title */
        this.numbered = false;
        /** optionally display a status icon next to the step title */
        this.icon = false;
        /** specify the layout of stepper, defaults to horizontal */
        this.layout = "horizontal";
        //--------------------------------------------------------------------------
        //
        //  Private State/Props
        //
        //--------------------------------------------------------------------------
        /** created list of Stepper items */
        this.items = [];
        /** sorted list of Stepper items */
        this.sortedItems = [];
        this.calciteStepperItemHasChanged = createEvent(this, "calciteStepperItemHasChanged", 7);
    }
    // watch for removal of disabled to register step
    class_1.prototype.contentWatcher = function () {
        this.updateContent(this.requestedContent);
    };
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    class_1.prototype.connectedCallback = function () {
        // validate props
        var layout = ["horizontal", "vertical"];
        if (!layout.includes(this.layout))
            this.layout = "horizontal";
        var scale = ["s", "m", "l"];
        if (!scale.includes(this.scale))
            this.scale = "m";
        var numbered = [true, false];
        if (!numbered.includes(this.numbered))
            this.numbered = false;
        var icon = [true, false];
        if (!icon.includes(this.icon))
            this.icon = false;
    };
    class_1.prototype.componentDidLoad = function () {
        // if no stepper items are set as active, default to the first one
        if (!this.currentPosition) {
            this.calciteStepperItemHasChanged.emit({
                position: 0,
            });
        }
    };
    class_1.prototype.render = function () {
        var _this = this;
        var dir = getElementDir(this.el);
        return (h(Host, { dir: dir }, h("slot", null), this.layout === "horizontal" ? (h("div", { class: "stepper-content", ref: function (el) { return (_this.stepperContentContainer = el); } })) : null));
    };
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    class_1.prototype.calciteStepperItemKeyEvent = function (e) {
        var item = e.detail.item;
        var itemToFocus = e.target;
        var isFirstItem = this.itemIndex(itemToFocus) === 0;
        var isLastItem = this.itemIndex(itemToFocus) === this.sortedItems.length - 1;
        switch (getKey(item.key)) {
            case "ArrowDown":
            case "ArrowRight":
                if (isLastItem)
                    this.focusFirstItem();
                else
                    this.focusNextItem(itemToFocus);
                break;
            case "ArrowUp":
            case "ArrowLeft":
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
    };
    class_1.prototype.registerItem = function (event) {
        var item = {
            item: event.target,
            position: event.detail.position,
            content: event.detail.content,
        };
        if (item.content !== null && item.item.active)
            this.requestedContent = [item.content];
        if (!this.items.includes(item))
            this.items.push(item);
        this.sortedItems = this.sortItems();
    };
    class_1.prototype.updateItem = function (event) {
        if (event.detail.content)
            this.requestedContent =
                event.detail.content.length > 0
                    ? event.detail.content
                    : [event.detail.content];
        this.currentPosition = event.detail.position;
        this.calciteStepperItemHasChanged.emit({
            position: this.currentPosition,
        });
    };
    //--------------------------------------------------------------------------
    //
    //  Public Methods
    //
    //--------------------------------------------------------------------------
    /** set the next step as active */
    class_1.prototype.nextStep = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.currentPosition =
                    this.currentPosition + 1 < this.items.length
                        ? this.currentPosition + 1
                        : this.currentPosition;
                this.emitChangedItem();
                return [2 /*return*/];
            });
        });
    };
    /** set the previous step as active */
    class_1.prototype.prevStep = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.currentPosition =
                    this.currentPosition - 1 >= 0
                        ? this.currentPosition - 1
                        : this.currentPosition;
                this.emitChangedItem();
                return [2 /*return*/];
            });
        });
    };
    /** set the requested step as active */
    class_1.prototype.goToStep = function (num) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.currentPosition = num - 1;
                this.emitChangedItem();
                return [2 /*return*/];
            });
        });
    };
    /** set the first step as active */
    class_1.prototype.startStep = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.currentPosition = 0;
                this.emitChangedItem();
                return [2 /*return*/];
            });
        });
    };
    /** set the last step as active */
    class_1.prototype.endStep = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.currentPosition = this.items.length - 1;
                this.emitChangedItem();
                return [2 /*return*/];
            });
        });
    };
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    class_1.prototype.emitChangedItem = function () {
        this.calciteStepperItemHasChanged.emit({
            position: this.currentPosition,
        });
    };
    class_1.prototype.focusFirstItem = function () {
        var firstItem = this.sortedItems[0];
        this.focusElement(firstItem);
    };
    class_1.prototype.focusLastItem = function () {
        var lastItem = this.sortedItems[this.sortedItems.length - 1];
        this.focusElement(lastItem);
    };
    class_1.prototype.focusNextItem = function (e) {
        var index = this.itemIndex(e);
        var nextItem = this.sortedItems[index + 1] || this.sortedItems[0];
        this.focusElement(nextItem);
    };
    class_1.prototype.focusPrevItem = function (e) {
        var index = this.itemIndex(e);
        var prevItem = this.sortedItems[index - 1] ||
            this.sortedItems[this.sortedItems.length - 1];
        this.focusElement(prevItem);
    };
    class_1.prototype.itemIndex = function (e) {
        return this.sortedItems.indexOf(e);
    };
    class_1.prototype.focusElement = function (item) {
        var target = item;
        target.focus();
    };
    class_1.prototype.sortItems = function () {
        var items = Array.from(this.items)
            .filter(function (a) { return !a.item.disabled; })
            .sort(function (a, b) { return a.position - b.position; })
            .map(function (a) { return a.item; });
        return __spreadArrays(Array.from(new Set(items)));
    };
    class_1.prototype.updateContent = function (content) {
        var _a;
        if (this.stepperContentContainer) {
            this.stepperContentContainer.innerHTML = "";
            (_a = this.stepperContentContainer).append.apply(_a, content);
        }
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "watchers", {
        get: function () {
            return {
                "requestedContent": ["contentWatcher"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
CalciteStepper.style = calciteStepperCss;
export { CalciteStepper as calcite_stepper };
