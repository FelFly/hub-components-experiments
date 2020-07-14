import { r as registerInstance, h, g as getElement, H as Host } from './index-12d3ca5e.js';
import { c as getDescribedByElement } from './dom-6f055170.js';
import { P as POPOVER_REFERENCE } from './resources-4ae163bc.js';
var CalcitePopoverManager = /** @class */ (function () {
    function CalcitePopoverManager(hostRef) {
        registerInstance(this, hostRef);
        // --------------------------------------------------------------------------
        //
        //  Properties
        //
        // --------------------------------------------------------------------------
        /**
         * CSS Selector to match reference elements for popovers.
         */
        this.selector = "[" + POPOVER_REFERENCE + "]";
    }
    // --------------------------------------------------------------------------
    //
    //  Render Methods
    //
    // --------------------------------------------------------------------------
    CalcitePopoverManager.prototype.render = function () {
        return h(Host, null);
    };
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    CalcitePopoverManager.prototype.closeOpenPopovers = function (event) {
        var target = event.target;
        var _a = this, autoClose = _a.autoClose, el = _a.el, selector = _a.selector;
        var popoverSelector = "calcite-popover";
        var isTargetInsidePopover = target.closest(popoverSelector);
        var describedByElement = target && target.matches(selector) && getDescribedByElement(target);
        if (autoClose && !isTargetInsidePopover) {
            Array.from(document.body.querySelectorAll(popoverSelector))
                .filter(function (popover) { return popover.open && popover !== describedByElement; })
                .forEach(function (popover) { return popover.toggle(false); });
        }
        if (!el.contains(target)) {
            return;
        }
        if (describedByElement) {
            describedByElement.toggle();
        }
    };
    Object.defineProperty(CalcitePopoverManager.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return CalcitePopoverManager;
}());
export { CalcitePopoverManager as calcite_popover_manager };
