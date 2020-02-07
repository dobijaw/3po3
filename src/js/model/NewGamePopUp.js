import { DOMelements, DOMclasses } from "../base";
import { state } from "../state";

export class NewGamePopUp {
  constructor() {
    this.newGameSubscriber = [];
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
        if (currentTarget.dataset.btn === "no") return;

        this.newGameSubscriber.forEach(s => s());
      });
    });
  }

  popUpOnClickView() {
    DOMelements.resetBtn.addEventListener("click", () => {
      this.showPopUpView();
    });
  }

  initNewGame(fn) {
    this.newGameSubscriber.push(fn);
  }
}
