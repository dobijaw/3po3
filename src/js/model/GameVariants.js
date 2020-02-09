import { DOMelements, DOMclasses } from "../base";
import { state } from "../state";

import { Sound } from "./Sound";

export class GameVariants {
  constructor() {
    this.subscribers = [];
    this.variantsKeyCodes = [];
    this.blocked = false;
    this.activeKeyCodeVariant = state.gameVariant;

    this.sound = new Sound();
    this.changeVariantOnClick();
    this.changeVariantOnKey();
  }

  getAllVariantsKeyCodes(variantsKeyCodes) {
    this.variantsKeyCodes = variantsKeyCodes;
  }

  saveSelectedVariant(selectedVariant) {
    state.gameVariant = selectedVariant;
  }

  disabledActiveVariantView() {
    DOMelements.btnVariants.forEach(btn => {
      if (btn.classList.contains(DOMclasses.btnDisabled))
        btn.classList.remove(DOMclasses.btnDisabled);

      if (btn.dataset.variant === state.gameVariant)
        btn.classList.add(DOMclasses.btnDisabled);
    });
  }

  changeVariant(variant) {
    if (this.activeKeyCodeVariant === variant) return;
    this.activeKeyCodeVariant = variant;

    this.blocked = true;

    this.sound.playSound();

    this.saveSelectedVariant(variant);
    this.disabledActiveVariantView();
    this.subscribers.forEach(sub => sub(variant));

    setTimeout(() => {
      this.blocked = false;
    }, 200);
  }

  changeVariantOnClick() {
    DOMelements.btnVariants.forEach(btn => {
      btn.addEventListener("click", () => {
        this.changeVariant(btn.dataset.variant);
      });
    });
  }

  changeVariantOnKey() {
    document.addEventListener("keydown", ({ keyCode, which }) => {
      if (this.blocked) return;

      this.variantsKeyCodes.forEach(({ keyCodes, name: variant }) => {
        if (keyCodes.some(key => key === keyCode || key === which)) {
          this.changeVariant(variant);
        }
      });
    });
  }

  initFirstScreen() {
    this.disabledActiveVariantView();
    this.subscribers.forEach(sub => sub(state.gameVariant));
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }
}
