import {
    DOMclasses
} from '../base';

let clickedIndex = null;

const playerChoiceView = (curSymbol, curIndex, allSymbols) => {
    if (clickedIndex !== null) allSymbols[clickedIndex].classList.remove(DOMclasses.symbolActive);

    curSymbol.classList.add(DOMclasses.symbolActive);
    clickedIndex = curIndex;
}

export default playerChoiceView;