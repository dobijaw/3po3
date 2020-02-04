import VariantMethods from './VariantMethods';
import { state } from '../state';

class Variant3 extends VariantMethods {
    constructor(variantName, timeInterval) {
        super();
        this.variantName = variantName;
        this.timeInterval = timeInterval;
        this.subscribers = [];
    }

    getMessage() {
        const headline = `3IQ - tryb 3`;
        const copy = `Runda ${state.summary.games + 1}. Wybierz symbol!`;

        return {
            headline,
            copy
        }
    }

    aiChoice() {
        if (state.summary.games === 0) {
            state.intervalIndex = 2;
            return;
        }

    }

}

export default Variant3;