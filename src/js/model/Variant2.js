import VariantMethods from './VariantMethods';
import { state } from '../state';

class Variant2 extends VariantMethods {
    constructor(variantName) {
        super();
        this.variantName = variantName;
        this.subscribers = [];
        this.symbolDrawn = this.randomNumber();
    }

    aiChoice() {
        const AISymbolImg = [...document.querySelectorAll('.board__img--ai')];
        AISymbolImg[this.symbolDrawn].style.opacity = 1;

        let counter = 0;

        state.intervals = setInterval(() => {
            counter = counter === 3 ? 0 : counter;

            this.symbolDrawn = counter;
            AISymbolImg.forEach(symbol => { symbol.style.opacity = 0 });
            AISymbolImg[this.symbolDrawn].style.opacity = 1;
            console.log('Wariant 2 ' + this.symbolDrawn);

            counter++;
        }, 100);
    }

}

export default Variant2;