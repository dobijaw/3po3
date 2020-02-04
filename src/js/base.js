export const DOMelements = {
    messageHeadline: document.querySelector('.headline--result'),
    messageCopy: document.querySelector('.copy--result'),


    boardTemplates: [...document.querySelectorAll('.template')],
    board: document.querySelector('.board'),
    allSymbols: [...document.querySelectorAll('.board__box')],
    variantBtn: document.querySelector('#variantBtn'),
    symbols: [...document.querySelectorAll('.board__box--game')],
    playBtn: document.querySelector('#play'),
    reset: document.querySelector('#reset'),
    summaryScore: [...document.querySelectorAll('.summary__score')],
    popup: document.querySelector('.popup'),
    popupBtns: [...document.querySelectorAll('.popup__btn')],
    boardResultGame: document.querySelector('.board__result'),
    resultSymbols: document.querySelectorAll('.board__box--result'),
    btnVariants: [...document.querySelectorAll('.btn--variant')],
    resetBtn: document.querySelector('#reset'),

    symbolBoardsVariant1: [...document.querySelectorAll('.board__box--variant1')]
}

export const DOMclasses = {
    symbolActive: 'board__box--active',
    popUpActive: 'popup--active',
    boardsHidden: 'board__container--hidden',
    boardsResultHidden: 'board__result--hidden',
    resultSymbolsImg: 'board__img--result',
    resultSymbolsBox: 'board__box--result',
    symbolBoardsVariant1: 'board__box--variant1',
}