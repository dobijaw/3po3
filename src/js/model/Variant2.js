import VariantMethods from './VariantMethods';
import { state } from '../state';

class Variant2 extends VariantMethods {
    constructor(variantName, timeInterval) {
        super();
        this.variantName = variantName;
        this.timeInterval = timeInterval;
        this.subscribers = [];
    }

    aiChoice() {
        state.intervalIndex = this.randomNumber();
        const AISymbolImg = [...document.querySelectorAll('.board__img--ai')];
        AISymbolImg[state.intervalIndex].style.opacity = 1;
        // AISymbolImg[this.symbolDrawn].style.opacity = 1;

        let counter = 0;

        state.intervals = setInterval(() => {
            let random = 0;

            do {
                random = this.randomNumber();
            } while (counter === random)

            counter = random;

            // this.symbolDrawn = counter;
            state.intervalIndex = counter;
            AISymbolImg.forEach(symbol => { symbol.style.opacity = 0 });
            // AISymbolImg[this.symbolDrawn].style.opacity = 1;
            AISymbolImg[state.intervalIndex].style.opacity = 1;
            console.log('Wariant 3 ' + state.intervalIndex);
            // console.log('Wariant 3 ' + this.symbolDrawn);
        }, this.timeInterval);
    }

}

export default Variant2;