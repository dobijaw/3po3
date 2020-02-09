import { state } from "../state";
import { DOMclasses } from "../base";
import { Variant } from "./Variant";

class Variant2 extends Variant {
  constructor(name, timeInterval) {
    super();
    this.name = name;
    this.timeInterval = timeInterval;
  }

  variantKeyCode() {
    return {
      name: this.name,
      keyCodes: [50, 98]
    };
  }

  AIChoice() {
    const imgAISymbols = [
      ...document.querySelectorAll(`.${DOMclasses.imgBoardAI}`)
    ];
    state.randomIndex = this.randomNumber();
    imgAISymbols[state.randomIndex].style.opacity = 1;

    let counter = 0;

    state.intervals = setInterval(() => {
      let random = 0;

      do {
        random = this.randomNumber();
      } while (counter === random);

      counter = random;
      state.randomIndex = random;

      imgAISymbols.forEach(symbol => {
        symbol.style.opacity = 0;
      });
      imgAISymbols[counter].style.opacity = 1;
    }, this.timeInterval);
  }

  getMessage() {
    const headline = `Pęd - tryb 2`;
    const copy = `Runda ${state.summary.games + 1}. Wybierz symbol!`;

    return {
      headline,
      copy
    };
  }
}

export default Variant2;
