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
        // AISymbolImg[this.symbolDrawn].style.opacity = 1;
        AISymbolImg[state.intervalIndex].style.opacity = 1;

        let counter = 0;

        state.intervals = setInterval(() => {
            counter = counter === 3 ? 0 : counter;

            // this.symbolDrawn = counter;
            state.intervalIndex = counter;

            AISymbolImg.forEach(symbol => { symbol.style.opacity = 0 });
            // AISymbolImg[this.symbolDrawn].style.opacity = 1;
            AISymbolImg[state.intervalIndex].style.opacity = 1;
            // console.log('Wariant 2 ' + this.symbolDrawn);
            console.log('Wariant 2 ' + state.intervalIndex);

            counter++;
        }, this.timeInterval);
    }

}

export default Variant2;