import { r as registerInstance, h, g as getElement, H as Host } from './index-12d3ca5e.js';
import { c as getDescribedByElement } from './dom-6f055170.js';
import { P as POPOVER_REFERENCE } from './resources-4ae163bc.js';

const CalcitePopoverManager = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        // --------------------------------------------------------------------------
        //
        //  Properties
        //
        // --------------------------------------------------------------------------
        /**
         * CSS Selector to match reference elements for popovers.
         */
        this.selector = `[${POPOVER_REFERENCE}]`;
    }
    // --------------------------------------------------------------------------
    //
    //  Render Methods
    //
    // --------------------------------------------------------------------------
    render() {
        return h(Host, null);
    }
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    closeOpenPopovers(event) {
        const target = event.target;
        const { autoClose, el, selector } = this;
        const popoverSelector = "calcite-popover";
        const isTargetInsidePopover = target.closest(popoverSelector);
        const describedByElement = target && target.matches(selector) && getDescribedByElement(target);
        if (autoClose && !isTargetInsidePopover) {
            Array.from(document.body.querySelectorAll(popoverSelector))
                .filter((popover) => popover.open && popover !== describedByElement)
                .forEach((popover) => popover.toggle(false));
        }
        if (!el.contains(target)) {
            return;
        }
        if (describedByElement) {
            describedByElement.toggle();
        }
    }
    get el() { return getElement(this); }
};

export { CalcitePopoverManager as calcite_popover_manager };
