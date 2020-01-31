import {
    state
} from '../state';

class PlayerChoice {
    constructor(selectedSymbol) {
        this.selectedSymbol = selectedSymbol;

        this.saveSelectedSymbol();
    }

    saveSelectedSymbol() {
        state.playerChoice = this.selectedSymbol.dataset.symbol;
    }
}

export default PlayerChoice;