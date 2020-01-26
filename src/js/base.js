const DOMelements = {
    symbols: [...document.querySelectorAll('.board__box--game')],
    symbolsContainer: document.querySelector('.board__container'),
    playBtn: document.querySelector('#play'),
    reset: document.querySelector('#reset'),
    summaryScore: [...document.querySelectorAll('.summary__score')],
    popup: document.querySelector('.popup'),
    popupBtns: [...document.querySelectorAll('.popup__btn')],
    boardResultGame: document.querySelector('.board__result'),
    headlineResult: document.querySelector('.headline--result'),
    copyResult: document.querySelector('.copy--result'),
    resultSymbols: document.querySelectorAll('.board__box--result')
}

const DOMclasses = {
    symbolActive: 'board__box--active',
    popupActive: 'popup--active',
    boardsHidden: 'board__container--hidden',
    boardsResultHidden: 'board__result--hidden',
    resultSymbolsImg: 'board__img--result',
    resultSymbolsBox: 'board__box--result'
}

export {
    DOMelements,
    DOMclasses
};