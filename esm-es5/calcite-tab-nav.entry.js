import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-12d3ca5e.js';
import { a as getSlottedElements } from './dom-6f055170.js';
var calciteTabNavCss = ":host([hidden]){display:none}.tab-nav{display:-ms-flexbox;display:flex;overflow:auto;-ms-flex-pack:start;justify-content:flex-start}:host([layout=center]) .tab-nav{-ms-flex-pack:center;justify-content:center}";
var CalciteTabNav = /** @class */ (function () {
    function CalciteTabNav(hostRef) {
        registerInstance(this, hostRef);
        this.calciteTabChange = createEvent(this, "calciteTabChange", 7);
    }
    CalciteTabNav.prototype.selectedTabChanged = function () {
        if (localStorage &&
            this.storageId &&
            this.selectedTab !== undefined &&
            this.selectedTab !== null) {
            localStorage.setItem("calcite-tab-nav-" + this.storageId, JSON.stringify(this.selectedTab));
        }
        this.calciteTabChange.emit({
            tab: this.selectedTab
        });
    };
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    CalciteTabNav.prototype.componentWillLoad = function () {
        var storageKey = "calcite-tab-nav-" + this.storageId;
        if (localStorage && this.storageId && localStorage.getItem(storageKey)) {
            this.selectedTab = JSON.parse(localStorage.getItem(storageKey));
            this.calciteTabChange.emit({
                tab: this.selectedTab
            });
        }
    };
    CalciteTabNav.prototype.componentWillRender = function () {
        var _a;
        this.layout = (_a = this.el.closest("calcite-tabs")) === null || _a === void 0 ? void 0 : _a.layout;
    };
    CalciteTabNav.prototype.render = function () {
        var _this = this;
        return (h(Host, { role: "tablist" }, h("nav", { class: "tab-nav", ref: function (el) { return (_this.tabNavEl = el); } }, h("slot", null))));
    };
    CalciteTabNav.prototype.componentDidRender = function () {
        var _this = this;
        // if every tab title is active select the first tab.
        if (this.tabTitles.length &&
            this.tabTitles.every(function (title) { return !title.isActive; }) &&
            !this.selectedTab) {
            this.tabTitles[0].getTabIdentifier().then(function (tab) {
                _this.calciteTabChange.emit({
                    tab: tab
                });
            });
        }
    };
    //--------------------------------------------------------------------------
    //
    //  Events Listeners
    //
    //--------------------------------------------------------------------------
    /**
     * @internal
     */
    CalciteTabNav.prototype.focusPreviousTabHandler = function (e) {
        var currentIndex = this.getIndexOfTabTitle(e.target);
        var previousTab = this.tabTitles[currentIndex - 1] ||
            this.tabTitles[this.tabTitles.length - 1];
        previousTab.focus();
        e.stopPropagation();
        e.preventDefault();
    };
    /**
     * @internal
     */
    CalciteTabNav.prototype.focusNextTabHandler = function (e) {
        var currentIndex = this.getIndexOfTabTitle(e.target);
        var nextTab = this.tabTitles[currentIndex + 1] || this.tabTitles[0];
        nextTab.focus();
        e.stopPropagation();
        e.preventDefault();
    };
    /**
     * @internal
     */
    CalciteTabNav.prototype.activateTabHandler = function (e) {
        if (e.detail.tab) {
            this.selectedTab = e.detail.tab;
        }
        else {
            this.selectedTab = this.getIndexOfTabTitle(e.target);
        }
        e.stopPropagation();
        e.preventDefault();
    };
    /**
     * @internal
     */
    CalciteTabNav.prototype.globalTabChangeHandler = function (e) {
        if (this.syncId &&
            e.target !== this.el &&
            e.target.syncId === this.syncId &&
            this.selectedTab !== e.detail.tab) {
            this.selectedTab = e.detail.tab;
        }
    };
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    CalciteTabNav.prototype.getIndexOfTabTitle = function (el) {
        return this.tabTitles.indexOf(el);
    };
    Object.defineProperty(CalciteTabNav.prototype, "tabTitles", {
        get: function () {
            if (this.tabNavEl) {
                return getSlottedElements(this.tabNavEl, "calcite-tab-title");
            }
            return [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalciteTabNav.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalciteTabNav, "watchers", {
        get: function () {
            return {
                "selectedTab": ["selectedTabChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return CalciteTabNav;
}());
CalciteTabNav.style = calciteTabNavCss;
export { CalciteTabNav as calcite_tab_nav };
