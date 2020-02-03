import VariantMethods from './VariantMethods';
import { state } from '../state';

class Variant1 extends VariantMethods {
    constructor(variantName) {
        super();
        this.variantName = variantName;
        this.subscribers = [];
        this.symbolDrawn = this.randomNumber();
    }

    aiChoice() {
        state.intervals = setInterval(() => {
            this.symbolDrawn = this.randomNumber();
            console.log('Wariant 1 ' + this.symbolDrawn);
        }, 100);
    }
}

export default Variant1;