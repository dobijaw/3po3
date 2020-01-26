import {
    DOMelements,
    DOMclasses
} from '../base';

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
}

export {
    resetUI,
    resetBoxUI
};