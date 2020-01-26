const DOMelements = {
    symbols: [...document.querySelectorAll('.board__box')],
    playBtn: document.querySelector('#play'),
}

const DOMclasses = {
    symbolActive: 'board__box--active',
}

export {
    DOMelements,
    DOMclasses
};

// const randomSymbol = () => {
//     const symbols = ['stone', 'paper', 'shears'];
//     const randomIndex = Math.floor(Math.random() * symbols.length);

//     return symbols[randomIndex];
// }

// const zeroConfiguration = () => {
//     state.playerChoice = '';
//     state.aiChoice = '';

//     DOMelements.symbols.forEach(el => el.classList.remove('board__box--active'));
// }

// const checkWinner = () => {
//     const conditionsForWin = [
//         state.playerChoice === 'stone' && state.aiChoice === 'shears',
//         state.playerChoice === 'paper' && state.aiChoice === 'stone',
//         state.playerChoice === 'shears' && state.aiChoice === 'paper'
//     ]

//     const condistionsDorDraw = state.playerChoice === state.aiChoice;

//     if (conditionsForWin.some(single => single)) {
//         console.log('you win, wybor Twoj to: ' + state.playerChoice + ' a komputera to ' + state.aiChoice);
//     } else if (condistionsDorDraw) {
//         console.log('remis, towj rybor to ' + state.playerChoice + ' a kpma to ' + state.aiChoice);
//     } else {
//         console.log('przegrales, towj rybor to ' + state.playerChoice + ' a kompa to ' + state.aiChoice)
//     }
// }

// DOMelements.playBtn.addEventListener('click', () => {
//     if (state.playerChoice === '') return;
//     state.aiChoice = randomSymbol();
//     checkWinner();
//     zeroConfiguration();
//     // console.log(state)
// })