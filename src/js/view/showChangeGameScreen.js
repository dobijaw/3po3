import renderGameView from './renderGameView';
import changeBtnView from './changeBtnView';
import {
    DOMelements,
    DOMclasses
} from '../base';



function makeDecision({
    target
}) {
    if (target.dataset.btn === 'yes') renderGameView();

    DOMelements.popup.classList.remove(DOMclasses.popUpActive);
}

function showChangeGameScreen() {
    DOMelements.popup.classList.add(DOMclasses.popUpActive);

    const btns = document.querySelectorAll('.popup__btn');
    btns.forEach(btn => btn.addEventListener('click', makeDecision));
    document.addEventListener('click', e => {
        if (!e.target.closest('.popup__container') && e.target !== DOMelements.variantBtn) {
            DOMelements.popup.classList.remove(DOMclasses.popUpActive)
        };
    })
}

export default showChangeGameScreen;