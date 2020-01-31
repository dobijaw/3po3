const DOMelements = {
    boardTemplates: [...document.querySelectorAll('.template')],
    board: document.querySelector('.board'),
    variantBtn: document.querySelector('#variantBtn'),
    symbols: [...document.querySelectorAll('.board__box--game')],
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
    popUpActive: 'popup--active',
    boardsHidden: 'board__container--hidden',
    boardsResultHidden: 'board__result--hidden',
    resultSymbolsImg: 'board__img--result',
    resultSymbolsBox: 'board__box--result'
}

export {
    DOMelements,
    DOMclasses
};