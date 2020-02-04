import VariantMethods from './VariantMethods';
import { state } from '../state';

class Variant3 extends VariantMethods {
    constructor(variantName, timeInterval) {
        super();
        this.variantName = variantName;
        this.timeInterval = timeInterval;
        this.subscribers = [];
    }

    aiChoice() {
        if (state.summary.games === 0) {
            state.intervalIndex = 2;
            return;
        }

    }

}

export default Variant3;