import { r as registerInstance, h, H as Host } from './index-12d3ca5e.js';
import { c as getDescribedByElement } from './dom-6f055170.js';
import { T as TOOLTIP_REFERENCE } from './resources-1020e686.js';
var CalciteTooltipManager = /** @class */ (function () {
    function CalciteTooltipManager(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        // --------------------------------------------------------------------------
        //
        //  Properties
        //
        // --------------------------------------------------------------------------
        /**
         * CSS Selector to match reference elements for tooltips.
         */
        this.selector = "[" + TOOLTIP_REFERENCE + "]";
        // --------------------------------------------------------------------------
        //
        //  Private Methods
        //
        // --------------------------------------------------------------------------
        this.toggle = function (event, value) {
            if (value === void 0) { value = true; }
            var target = event.target;
            var describedByElement = target && target.matches(_this.selector) && getDescribedByElement(target);
            if (describedByElement) {
                describedByElement.open = value;
            }
        };
    }
    // --------------------------------------------------------------------------
    //
    //  Render Methods
    //
    // --------------------------------------------------------------------------
    CalciteTooltipManager.prototype.render = function () {
        return h(Host, null);
    };
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    CalciteTooltipManager.prototype.mouseEnterShow = function (event) {
        this.toggle(event, true);
    };
    CalciteTooltipManager.prototype.mouseLeaveHide = function (event) {
        this.toggle(event, false);
    };
    CalciteTooltipManager.prototype.focusShow = function (event) {
        this.toggle(event, true);
    };
    CalciteTooltipManager.prototype.blurHide = function (event) {
        this.toggle(event, false);
    };
    return CalciteTooltipManager;
}());
export { CalciteTooltipManager as calcite_tooltip_manager };
