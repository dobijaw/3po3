import VariantMethods from './VariantMethods';

class Variant3 extends VariantMethods {
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

        this.symbolInterval = setInterval(() => {
            let random = 0;

            do {
                random = this.randomNumber();
            } while (counter === random)

            counter = random;

            this.symbolDrawn = counter;
            AISymbolImg.forEach(symbol => { symbol.style.opacity = 0 });
            AISymbolImg[this.symbolDrawn].style.opacity = 1;
            // console.log('Wariant 3 ' + this.symbolDrawn);
        }, 500);
    }
}

export default Variant3;