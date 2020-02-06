import { DOMelements, DOMclasses } from "../base";
import { state } from "../state";

export class PopUp {
  constructor() {
    this.newGameSubscriber = [];
  }

  showPopUpView() {
    DOMelements.popup.classList.add(DOMclasses.popUpActive);

    document.addEventListener("click", e => {
      if (
        !e.target.closest(".popup__container") &&
        e.target !== DOMelements.reset
      ) {
        DOMelements.popup.classList.remove(DOMclasses.popUpActive);
      }
    });

    document.querySelectorAll(".popup__btn").forEach(btn => {
      btn.addEventListener("click", ({ currentTarget }) => {
        DOMelements.popup.classList.remove(DOMclasses.popUpActive);
        if (currentTarget.dataset.btn === "no") return;

        this.newGameSubscriber.forEach(s => s());
      });
    });
  }

  popUpOnClickView() {
    DOMelements.reset.addEventListener("click", () => {
      this.showPopUpView();
    });
  }

  initNewGame(fn) {
    this.newGameSubscriber.push(fn);
  }
}
