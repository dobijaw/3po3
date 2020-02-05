import { DOMelements, DOMclasses } from '../base';
import { state } from '../state';

export class GameVariantsUI {
  constructor() {
    this.subscribers = [];

    this.btnOnClickView();
  }

  disabledActiveBtnVariantUI(activeBtn, allBtns) {
    if (activeBtn.classList.contains('btn--active')) return;

    allBtns.forEach(btn => {
      if (btn.classList.contains('btn--active'))
        btn.classList.remove('btn--active');
    })

    activeBtn.classList.add('btn--active');
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

  saveSelectedVariantToState(selectedVariant) {
    state.gameVariant = selectedVariant;
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }
}