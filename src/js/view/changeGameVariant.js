import { DOMelements } from '../base';
import { state } from '../state';

const changeGameVariant = (startNewGame) => {
    DOMelements.btnVariants.forEach(btn => {
        btn.addEventListener('click', () => {
            state.gameVariant = btn.dataset.variant;
            clearInterval(state.intervals);
            startNewGame();
        })
    })
}

export default changeGameVariant;