import {
    state
} from '../state';

class AIChoice {
    constructor(num) {
        this.symbols = ['stone', 'paper', 'shears'];

        this.randomSymbol();
    }

    randomSymbol() {
        const randomIndex = Math.floor(Math.random() * this.symbols.length);

        state.aiChoice = this.symbols[randomIndex];
    }
}

export default AIChoice;