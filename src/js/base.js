const DOMelements = {
    symbols: [...document.querySelectorAll('.board__box')],
    playBtn: document.querySelector('#play'),
    reset: document.querySelector('#reset')
}

const DOMclasses = {
    symbolActive: 'board__box--active',
}

export {
    DOMelements,
    DOMclasses
};