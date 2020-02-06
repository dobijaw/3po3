import { DOMelements, DOMclasses } from "../base";
import { state } from "../state";

export class GameVariantsObserve {
  constructor() {
    this.subscribers = [];

    this.btnOnClickView();
    this.changeVariantOnKeybord();
  }

  disabledActiveBtnVariantUI(activeBtn, allBtns) {
    if (activeBtn.classList.contains(DOMclasses.variantBtnDisabled)) return;

    allBtns.forEach(btn => {
      if (btn.classList.contains(DOMclasses.variantBtnDisabled))
        btn.classList.remove(DOMclasses.variantBtnDisabled);
    });

    activeBtn.classList.add(DOMclasses.variantBtnDisabled);
  }

  changeVariantOnKeybord() {
    let blocked = false;

    const changeVariant = variant => {
      blocked = true;

      this.saveSelectedVariantToState(variant);
      this.subscribers.forEach(sub => sub(variant));

      setTimeout(() => {
        blocked = false;
      }, 200);
    };

    document.addEventListener("keydown", ({ keyCode, which }) => {
      if (blocked) return;

      switch (keyCode || which) {
        case 49:
          changeVariant("variant1");
          break;
        case 97:
          changeVariant("variant1");
          break;
        case 50:
          changeVariant("variant2");
          break;
        case 98:
          changeVariant("variant2");
          break;
        case 51:
          changeVariant("variant3");
          break;
        case 99:
          changeVariant("variant3");
          break;
      }
    });
  }

  btnOnClickView() {
    DOMelements.btnVariants.forEach(btn => {
      btn.addEventListener("click", () => {
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
