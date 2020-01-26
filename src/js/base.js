const DOMelements = {
    symbols: [...document.querySelectorAll('.board__box')],
    playBtn: document.querySelector('#play'),
    reset: document.querySelector('#reset'),
    summaryScore: [...document.querySelectorAll('.summary__score')],
    popup: document.querySelector('.popup'),
    popupBtns: [...document.querySelectorAll('.popup__btn')]
}

const DOMclasses = {
    symbolActive: 'board__box--active',
    popupActive: 'popup--active',
}

export {
    DOMelements,
    DOMclasses
};