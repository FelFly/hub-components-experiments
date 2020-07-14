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
import { r as registerInstance, h, H as Host, g as getElement } from './index-12d3ca5e.js';
var calciteTabsCss = ":host([hidden]){display:none}:host-context([theme=dark]){--calcite-ui-blue-1:#00A0FF;--calcite-ui-blue-2:#0087D7;--calcite-ui-blue-3:#47BBFF;--calcite-ui-green-1:#36DA43;--calcite-ui-green-2:#11AD1D;--calcite-ui-green-3:#44ED51;--calcite-ui-yellow-1:#FFC900;--calcite-ui-yellow-2:#F4B000;--calcite-ui-yellow-3:#FFE24D;--calcite-ui-red-1:#FE583E;--calcite-ui-red-2:#F3381B;--calcite-ui-red-3:#FF7465;--calcite-ui-background:#202020;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#353535;--calcite-ui-foreground-3:#404040;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-4:#757575;--calcite-ui-border-5:#9f9f9f}:host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}section{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;overflow:hidden;border-top:1px solid var(--calcite-ui-border-1)}";
var CalciteTabs = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Align tab titles to the edge or fully justify them across the tab nav ("center")
         */
        this.layout = "inline";
        //--------------------------------------------------------------------------
        //
        //  Events
        //
        //--------------------------------------------------------------------------
        //--------------------------------------------------------------------------
        //
        //  Private State/Props
        //
        //--------------------------------------------------------------------------
        /**
         * @internal
         *
         * Stores an array of ids of `<calcite-tab-titles>`s to match up ARIA
         * attributes.
         */
        this.titles = [];
        /**
         * @internal
         *
         * Stores an array of ids of `<calcite-tab>`s to match up ARIA attributes.
         */
        this.tabs = [];
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    class_1.prototype.render = function () {
        return (h(Host, null, h("slot", { name: "tab-nav" }), h("section", null, h("slot", null))));
    };
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    /**
     * @internal
     */
    class_1.prototype.calciteTabTitleRegister = function (e) {
        this.titles = __spreadArrays(this.titles, [e.target]);
        this.registryHandler();
        e.stopPropagation();
    };
    /**
     * @internal
     */
    class_1.prototype.calciteTabTitleUnregister = function (e) {
        this.titles = this.titles.filter(function (el) { return el !== e.target; });
        this.registryHandler();
        e.stopPropagation();
    };
    /**
     * @internal
     */
    class_1.prototype.calciteTabRegister = function (e) {
        this.tabs = __spreadArrays(this.tabs, [e.target]);
        this.registryHandler();
        e.stopPropagation();
    };
    /**
     * @internal
     */
    class_1.prototype.calciteTabUnregister = function (e) {
        this.tabs = this.tabs.filter(function (el) { return el !== e.target; });
        this.registryHandler();
        e.stopPropagation();
    };
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    /**
     * @internal
     *
     * Matches up elements from the internal `tabs` and `titles` to automatically
     * update the ARIA attributes and link `<calcite-tab>` and
     * `<calcite-tab-title>` components.
     */
    class_1.prototype.registryHandler = function () {
        return __awaiter(this, void 0, void 0, function () {
            var tabIds, titleIds, tabDomIndexes, titleDomIndexes;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.tabs.some(function (e) { return e.tab; }) || this.titles.some(function (e) { return e.tab; }))) return [3 /*break*/, 1];
                        // if we are using `tab` based identifiers sort by `tab` to account for
                        // possible out of order tabs and get the id of each tab
                        tabIds = this.tabs
                            .sort(function (a, b) { return a.tab.localeCompare(b.tab); })
                            .map(function (e) { return e.id; });
                        titleIds = this.titles
                            .sort(function (a, b) { return a.tab.localeCompare(b.tab); })
                            .map(function (e) { return e.id; });
                        return [3 /*break*/, 4];
                    case 1: return [4 /*yield*/, Promise.all(this.tabs.map(function (el) { return el.getTabIndex(); }))];
                    case 2:
                        tabDomIndexes = _a.sent();
                        return [4 /*yield*/, Promise.all(this.titles.map(function (el) { return el.getTabIndex(); }))];
                    case 3:
                        titleDomIndexes = _a.sent();
                        // once we have the DOM order as a source of truth we can build the
                        // matching tabIds and titleIds arrays
                        tabIds = tabDomIndexes.reduce(function (ids, indexInDOM, registryIndex) {
                            ids[indexInDOM] = _this.tabs[registryIndex].id;
                            return ids;
                        }, []);
                        titleIds = titleDomIndexes.reduce(function (ids, indexInDOM, registryIndex) {
                            ids[indexInDOM] = _this.titles[registryIndex].id;
                            return ids;
                        }, []);
                        _a.label = 4;
                    case 4:
                        // pass all our new aria information to each `<calcite-tab>` and
                        // `<calcite-tab-title>` which will check if they can update their internal
                        // `controlled` or `labeledBy` states and re-render if necessary
                        this.tabs.forEach(function (el) { return el.updateAriaInfo(tabIds, titleIds); });
                        this.titles.forEach(function (el) { return el.updateAriaInfo(tabIds, titleIds); });
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
CalciteTabs.style = calciteTabsCss;
export { CalciteTabs as calcite_tabs };
