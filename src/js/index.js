import '../scss/index.scss';
import {
    state,
    resetAllState,
    resetStateChoice
} from './state';
import {
    DOMelements,
    DOMclasses
} from './base';

import playerChoiceView from './view/playerChoiceView';
import showResult from './view/showResult';
import showGameBoard from './view/showGameBoard';
import PlayerChoice from './model/PlayerChoice';
import Winner from './model/Winner';
import AIChoice from './model/AIChoice';
import {
    resetUI,
    resetBoxUI
} from './view/resetUI';
import updateScore from './view/updateScore';

const init = () => {
    resetUI();
    resetAllState();
    showGameBoard();
    state.isGameBoard = true;
}

init();


DOMelements.symbols.forEach((box, index, arr) => box.addEventListener('click', ({
    currentTarget
}) => {
    if (state.isPopupOpen) return;

    playerChoiceView(currentTarget, index, arr);
    new PlayerChoice(currentTarget);
}));

DOMelements.playBtn.addEventListener('click', () => {
    if (state.isPopupOpen) return;

    if (state.isGameBoard) {
        if (state.playerChoice === '') return;
        new AIChoice();
        const winner = new Winner();
        const scoreStatus = winner.checkStatusWin();
        winner.updateStateScore(scoreStatus);
        updateScore(scoreStatus);
        const copyStatus = winner.renderWinnerStatus(scoreStatus);
        showResult(copyStatus, scoreStatus);
        resetBoxUI();
        resetStateChoice();

        state.isGameBoard = false;
    } else {
        showGameBoard();
        state.isGameBoard = true;
    }
})


DOMelements.reset.addEventListener('click', () => {
    DOMelements.popup.classList.add(DOMclasses.popupActive);
    state.isPopupOpen = true;

    DOMelements.popupBtns.forEach(btn => btn.addEventListener('click', () => {
        DOMelements.popup.classList.remove(DOMclasses.popupActive);
        state.isPopupOpen = false;

        if (btn.dataset.btn === 'no') return;
        init();

    }))
})