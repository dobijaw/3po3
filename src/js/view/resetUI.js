import {
    DOMelements,
    DOMclasses
} from '../base';

const resetUI = () => {
    DOMelements.summaryScore.forEach(score => {
        score.textContent = 0;
    });

    DOMelements.symbols.forEach(box => {
        if (box.classList.contains(DOMclasses.symbolActive)) box.classList.remove(DOMclasses.symbolActive);
    })
}

export default resetUI;