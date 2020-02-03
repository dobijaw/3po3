import { state } from '../state';

const playAgainView = (startNewGame) => {
    document.querySelector('.btn--play-again').addEventListener('click', startNewGame);

    document.addEventListener('keyup', ({ keyCode, which }) => {
        if (state.enterBlocked) return;

        if (keyCode === 13 || which === 13) {
            startNewGame();
            state.enterBlocked = true;
        }
    });
};

export default playAgainView;

