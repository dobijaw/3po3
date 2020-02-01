const state = {
    gameVariant: 'variant2',
    playerChoice: '',
    aiChoice: '',
    summary: {
        games: 0,
        wins: 0,
        draws: 0,
        losses: 0
    },
    isPopupOpen: false,
    isGameBoard: true
}

const resetStateGameVariant = () => {
    if (state.gameVariant !== 'variant1')
        state.gameVariant = 'variant1';
}

const resetStatePlayerChoice = () => {
    state.playerChoice = '';
    state.aiChoice = '';
}

const resetState = () => {
    resetStatePlayerChoice();

    for (const key of Object.keys(state.summary)) {
        state.summary[key] = 0;
    }
}

export {
    state,
    resetState,
    // resetStateChoice
};