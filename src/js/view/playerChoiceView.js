import { DOMclasses } from '../base';

function listenSymbols() {
    const symbols = [...document.querySelectorAll(`.${DOMclasses.symbolBoardsVariant1}`)];
    symbols.forEach(symbol => {
        symbol.addEventListener('click', () => {
            console.log('work')
        })
    })

    window.addEventListener('keyup', ({ keyCode, which }) => {
        switch (keyCode || which) {
            case 37:
                console.log('rock')
                break;
            case 40:
                console.log('paper')
                break;
            case 39:
                console.log('nozyce')
                break;
        }
    })
}

export { listenSymbols };