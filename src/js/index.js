import '../scss/index.scss';
import {
    state,
    resetAllState,
    resetStateChoice
} from './state';
import {
    DOMelements
} from './base';

import playerChoiceView from './view/playerChoiceView';
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
}

init();

DOMelements.symbols.forEach((box, index, arr) => box.addEventListener('click', ({
    currentTarget
}) => {
    playerChoiceView(currentTarget, index, arr);
    new PlayerChoice(currentTarget);
}));

DOMelements.playBtn.addEventListener('click', () => {
    new AIChoice();
    const winner = new Winner();
    const scoreStatus = winner.checkStatusWin();

    winner.updateStateScore(scoreStatus);
    updateScore(scoreStatus);

    resetBoxUI();
    resetStateChoice();
    console.log(state);
})

DOMelements.reset.addEventListener('click', () => {
    init();
})