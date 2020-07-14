import { r as registerInstance, h, H as Host } from './index-12d3ca5e.js';
import { c as getDescribedByElement } from './dom-6f055170.js';
import { T as TOOLTIP_REFERENCE } from './resources-1020e686.js';

const CalciteTooltipManager = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        // --------------------------------------------------------------------------
        //
        //  Properties
        //
        // --------------------------------------------------------------------------
        /**
         * CSS Selector to match reference elements for tooltips.
         */
        this.selector = `[${TOOLTIP_REFERENCE}]`;
        // --------------------------------------------------------------------------
        //
        //  Private Methods
        //
        // --------------------------------------------------------------------------
        this.toggle = (event, value = true) => {
            const target = event.target;
            const describedByElement = target && target.matches(this.selector) && getDescribedByElement(target);
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
    render() {
        return h(Host, null);
    }
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    mouseEnterShow(event) {
        this.toggle(event, true);
    }
    mouseLeaveHide(event) {
        this.toggle(event, false);
    }
    focusShow(event) {
        this.toggle(event, true);
    }
    blurHide(event) {
        this.toggle(event, false);
    }
};

export { CalciteTooltipManager as calcite_tooltip_manager };
