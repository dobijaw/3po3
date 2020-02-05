import { DOMelements, DOMclasses } from '../base';
import { state } from '../state';

export class GameVariantsObserve {
  constructor() {
    this.subscribers = [];

    this.btnOnClickView();
  }

  disabledActiveBtnVariantUI(activeBtn, allBtns) {
    if (activeBtn.classList.contains(DOMclasses.variantBtnDisabled)) return;

    allBtns.forEach(btn => {
      if (btn.classList.contains(DOMclasses.variantBtnDisabled))
        btn.classList.remove(DOMclasses.variantBtnDisabled);
    })

    activeBtn.classList.add(DOMclasses.variantBtnDisabled);
  }

  btnOnClickView() {
    DOMelements.btnVariants.forEach(btn => {

      btn.addEventListener('click', () => {
        const variant = btn.dataset.variant;

        this.disabledActiveBtnVariantUI(btn, DOMelements.btnVariants);
        this.saveSelectedVariantToState(variant);
        this.subscribers.forEach(sub => sub(variant));
      });

    });
  }

  initFirstScreen() {
    this.subscribers.forEach(sub => sub(state.gameVariant));
  }

  saveSelectedVariantToState(selectedVariant) {
    state.gameVariant = selectedVariant;
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }
}