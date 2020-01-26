import {
    state
} from '../state';

import {
    DOMclasses,
    DOMelements
} from '../base';

const showSymbolsInBoxes = (score) => {
    const resultsImg = [...document.querySelectorAll(`.${DOMclasses.resultSymbolsImg}`)];
    const resultsBox = [...document.querySelectorAll(`.${DOMclasses.resultSymbolsBox}`)];

    resultsImg[0].src = `../img/${state.playerChoice}.jpg`;
    resultsImg[1].src = `../img/${state.aiChoice}.jpg`;
    // console.log(score);
    switch (score) {
        case 'wins':
            console.log('wins')
            resultsBox[0].classList.add(DOMclasses.symbolActive);
            break;
        case 'losses':
            console.log('losses')
            resultsBox[1].classList.add(DOMclasses.symbolActive);
            break;
        default:
            console.log('draw default')
            resultsBox.forEach(box => box.classList.add(DOMclasses.symbolActive));
            break;
    }


}

const showResult = (copy, score) => {
    DOMelements.symbolsContainer.classList.add(DOMclasses.boardsHidden);
    DOMelements.boardResultGame.classList.remove(DOMclasses.boardsResultHidden);

    DOMelements.headlineResult.textContent = copy[0];
    DOMelements.copyResult.textContent = copy[1];
    DOMelements.playBtn.textContent = 'zagraj ponownie';

    showSymbolsInBoxes(score);
}

export default showResult;