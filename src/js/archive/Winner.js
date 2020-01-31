import {
    state
} from '../state';

class Winner {
    constructor() {
        this.conditionsForWin = [
            state.playerChoice === 'stone' && state.aiChoice === 'shears',
            state.playerChoice === 'paper' && state.aiChoice === 'stone',
            state.playerChoice === 'shears' && state.aiChoice === 'paper'
        ]
    }

    checkStatusWin() {
        const condistionsDorDraw = state.playerChoice === state.aiChoice;

        if (this.conditionsForWin.some(single => single)) {
            return 'wins'
        } else if (condistionsDorDraw) {
            return 'draws'
        } else {
            return 'losses'
        }
    }

    updateStateScore(score) {
        state.summary.games++;
        state.summary[score]++;
    }

    renderWinnerStatus(score) {
        switch (score) {
            case 'wins':
                return ['Wygrałeś!', 'Zagraj jeszcze raz!']
            case 'losses':
                return ['Przegrałeś :(', 'Ale.. możesz zagrać ponownie!']
            default:
                return ['REMIS', 'Może mały rewanżyk?']
        }
    }
}

export default Winner;