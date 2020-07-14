'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-987d1b3d.js');
const dom = require('./dom-82c1dd32.js');
const resources = require('./resources-d2a2c1c8.js');

const CalciteTooltipManager = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        // --------------------------------------------------------------------------
        //
        //  Properties
        //
        // --------------------------------------------------------------------------
        /**
         * CSS Selector to match reference elements for tooltips.
         */
        this.selector = `[${resources.TOOLTIP_REFERENCE}]`;
        // --------------------------------------------------------------------------
        //
        //  Private Methods
        //
        // --------------------------------------------------------------------------
        this.toggle = (event, value = true) => {
            const target = event.target;
            const describedByElement = target && target.matches(this.selector) && dom.getDescribedByElement(target);
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
        return index.h(index.Host, null);
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

exports.calcite_tooltip_manager = CalciteTooltipManager;
