import { state } from '../state';

class Variant3 {
    constructor(name, timeInterval) {
        this.name = name;
        this.timeInterval = timeInterval;
    }

    getMessage() {
        const headline = `3IQ - tryb 3`;
        const copy = `Runda ${state.summary.games + 1}. Wybierz symbol!`;

        return {
            headline,
            copy
        }
    }

    aiChoice() {
        if (state.summary.games === 0) {
            state.intervalIndex = 2;
            return;
        }

    }

}

export default Variant3;