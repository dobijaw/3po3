import VariantMethods from './VariantMethods';
import { state } from '../state';

class Variant1 extends VariantMethods {
    constructor(variantName, timeInterval) {
        super();
        this.variantName = variantName;
        this.timeInterval = timeInterval;
        this.subscribers = [];
    }

    getMessage() {
        const headline = `Los - tryb 1`;
        const copy = `Runda ${state.summary.games + 1}. Wybierz symbol!`;

        return {
            headline,
            copy
        }
    }

    aiChoice() {
        state.intervalIndex = this.randomNumber();
        let counter = 0;

        state.intervals = setInterval(() => {
            let random = 0;

            do {
                random = this.randomNumber();
            } while (counter === random)

            counter = random;
            state.intervalIndex = counter;

            console.log('Wariant 1 ' + state.intervalIndex);
        }, this.timeInterval);
    }
}

export default Variant1;