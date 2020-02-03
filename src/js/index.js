import '../scss/index.scss';

import { state } from './state';


import Variant from './model/Variant';
import Winner from './model/Winner';

import { winnerView, updateScoreView, updateHeadlineView } from './view/winnerView';
import { resetSummaryView } from './view/summaryView';
import changeGameVariant from './view/changeGameVariant';

const newGame = () => {
    state.keyBlocked = false;
    const gameVariants = new Variant();
    const currentVariant = gameVariants.getVariantGame(state.gameVariant);

    updateScoreView();
    currentVariant.updateHeadline();
    currentVariant.renderGameBoard();
    currentVariant.aiChoice();

    currentVariant.subscribe(() => {
        const aiSymbol = currentVariant.stopSymbolInterval();
        currentVariant.saveChoiceInState(aiSymbol);

        const winner = new Winner();
        const result = winner.saveWinner();

        winnerView(result);
        updateHeadlineView(result);

        document.querySelector('.btn--play-again').addEventListener('click', newGame)
    })

    currentVariant.playerChoice();
}

const initGame = () => {
    resetSummaryView();
    changeGameVariant(newGame);


    newGame();
}



document.addEventListener('DOMContentLoaded', () => initGame());