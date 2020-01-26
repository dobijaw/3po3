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
}

export default Winner;