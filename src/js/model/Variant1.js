import { state } from "../state";
import { Variant } from "./Variant";

class Variant1 extends Variant {
  constructor(config) {
    super();

    this.config = config;
  }

  getKeyCodes() {
    return {
      name: this.config.name,
      keyCodes: this.config.keyCodes
    };
  }

  AIChoice() {
    state.randomIndex = this.randomNumber();
    let counter = 0;

    state.intervals = setInterval(() => {
      let random = 0;

      do {
        random = this.randomNumber();
      } while (counter === random);

      counter = random;
      state.randomIndex = random;
    }, this.config.interval);
  }

  getMessage() {
    const headline = `Los - tryb 1`;
    const copy = `Runda ${state.summary.games + 1}. Wybierz symbol!`;

    return {
      headline,
      copy
    };
  }
}

export default Variant1;
