import clickSound from "../../audio/click2.wav";

import { state } from "../state";
import { DOMelements, DOMclasses } from "../base";

export class Sound {
  constructor() {
    this.audio = new Audio(clickSound);
  }

  playSound() {
    if (state.isSoundOn) this.audio.play();
  }

  toogleSound() {
    state.isSoundOn = !state.isSoundOn;
  }

  btnOnClickView() {
    DOMelements.soundBtn.addEventListener("click", () => {
      DOMelements.soundBtn.classList.toggle(DOMclasses.btnDisabled);
      this.toogleSound();
      this.playSound();
    });
  }
}
