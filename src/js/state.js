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
    keyBlocked: false
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
    resetStateGameVariant();
    resetStatePlayerChoice();

    for (const key of Object.keys(state.summary)) {
        state.summary[key] = 0;
    }
}

export {
    state,
    resetState
};