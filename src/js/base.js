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