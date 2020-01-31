import {
    DOMelements,
    DOMclasses
} from '../base';
import {
    state
} from '../state';

const resetBoxUI = () => {
    DOMelements.symbols.forEach(box => {
        if (box.classList.contains(DOMclasses.symbolActive)) box.classList.remove(DOMclasses.symbolActive);
    })
}

const resetUI = () => {
    resetBoxUI();

    DOMelements.summaryScore.forEach(score => {
        score.textContent = 0;
    });

    state.isPopupOpen = false;
}

export {
    resetUI,
    resetBoxUI
};