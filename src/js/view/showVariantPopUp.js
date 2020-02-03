// import {
//     DOMelements,
//     DOMclasses
// } from '../base';



// function makeDecision({
//     target
// }) {
//     if (target.dataset.btn === 'yes') renderGameView();

//     DOMelements.popup.classList.remove(DOMclasses.popUpActive);
// }

// function showVariantPopUp() {
//     DOMelements.popup.classList.add(DOMclasses.popUpActive);

//     const btns = document.querySelectorAll('.popup__btn');
//     btns.forEach(btn => btn.addEventListener('click', makeDecision));
//     document.addEventListener('click', e => {
//         if (!e.target.closest('.popup__container') && e.target !== DOMelements.variantBtn) {
//             DOMelements.popup.classList.remove(DOMclasses.popUpActive)
//         };
//     })
// }

// export default showVariantPopUp;














// const curVariant = this.dataset.variant;
// state.gameVariant = curVariant;

// renderGameView();
// const variantText = curVariant === 'variant1' ? 'Wariant 2' : 'Wariant 1';
// this.textContent = variantText;
// this.setAttribute('aria-label', variantText);
// this.dataset.variant = curVariant === 'variant1' ? 'variant2' : 'variant1';