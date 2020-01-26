import {
    state
} from '../state';

import {
    DOMelements,
    DOMclasses
} from '../base';

const showGameBoard = () => {
    const resultsBox = [...document.querySelectorAll(`.${DOMclasses.resultSymbolsBox}`)];
    resultsBox.forEach(box => box.classList.remove(DOMclasses.symbolActive));

    DOMelements.symbolsContainer.classList.remove(DOMclasses.boardsHidden);
    DOMelements.boardResultGame.classList.add(DOMclasses.boardsResultHidden);

    DOMelements.headlineResult.textContent = 'Grasz z botem';
    DOMelements.copyResult.textContent = 'Wybierz swoją łapkę!';
    DOMelements.playBtn.textContent = 'zagraj';

}

export default showGameBoard;