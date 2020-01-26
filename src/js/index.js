import '../scss/index.scss';
import state from './state';
import {
    DOMelements
} from './base';

let clickedIndex = null;

DOMelements.symbols.forEach((box, index, arr) => box.addEventListener('click', ({
    currentTarget
}) => {
    if (clickedIndex !== null) arr[clickedIndex].classList.remove('board__box--active')
    state.playerChoice = currentTarget.dataset.symbol;
    currentTarget.classList.add('board__box--active');
    clickedIndex = index;
}))