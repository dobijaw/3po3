import { DOMelements, DOMclasses } from '../base';
import { state } from '../state';

const hideActualVariantBtn = () => {
    DOMelements.btnVariants.forEach(btn => {
        if (btn.dataset.variant === state.gameVariant)
            btn.classList.add('btn--active');
    })
}

const changeGameVariant = (startNewGame) => {

    DOMelements.btnVariants.forEach((btn, idx, arr) => {
        btn.addEventListener('click', function () {
            if (state.gameVariant === this.dataset.variant) return;
            arr.forEach(b => b.classList.remove('btn--active'));

            this.classList.add('btn--active');
            state.gameVariant = this.dataset.variant;
            clearInterval(state.intervals);
            startNewGame();
        })
    })

}

export { changeGameVariant, hideActualVariantBtn };