import { DOMelements, DOMclasses, assets } from "../base";

import { Sound } from "./Sound";

export class NewGamePopUp {
  constructor() {
    this.newGameSubscriber = [];

    this.sound = new Sound(new Audio(assets.click2));
  }

  showPopUpView() {
    DOMelements.popup.classList.add(DOMclasses.popUpActive);

    document.addEventListener("click", e => {
      if (
        !e.target.closest(`.${DOMclasses.popUpContainer}`) &&
        e.target !== DOMelements.resetBtn
      ) {
        DOMelements.popup.classList.remove(DOMclasses.popUpActive);
      }
    });

    document.querySelectorAll(`.${DOMclasses.popUpBtn}`).forEach(btn => {
      btn.addEventListener("click", ({ currentTarget }) => {
        DOMelements.popup.classList.remove(DOMclasses.popUpActive);
        this.sound.playSound();
        if (currentTarget.dataset.btn === "no") return;

        this.newGameSubscriber.forEach(sub => sub());
      });
    });
  }

  popUpOnClickView() {
    DOMelements.resetBtn.addEventListener("click", () => {
      this.sound.playSound();
      this.showPopUpView();
    });
  }

  initNewGameSubscribers(subscriber) {
    this.newGameSubscriber.push(subscriber);
  }
}
