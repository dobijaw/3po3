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

    document.addEventListener("keydown", ({ keyCode, which }) => {
      if (blocked) return;
      switch (keyCode || which) {
        case 49:
          this.saveSelectedVariantToState("variant1");
          this.subscribers.forEach(sub => sub("variant1"));
          blocked = true;
          setTimeout(() => {
            1;
            blocked = false;
          }, 200);
          break;
        case 50:
          this.saveSelectedVariantToState("variant2");
          this.subscribers.forEach(sub => sub("variant2"));
          blocked = true;
          setTimeout(() => {
            blocked = false;
          }, 200);
          break;
        case 51:
          this.saveSelectedVariantToState("variant3");
          this.subscribers.forEach(sub => sub("variant3"));
          blocked = true;
          setTimeout(() => {
            blocked = false;
          }, 200);
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
