import { state } from "../state";
import { VariantIQ } from "./VariantIQ";

class Variant3 extends VariantIQ {
  constructor(name, timeInterval) {
    super();
    this.name = name;
    this.timeInterval = timeInterval;
  }

  variantKeyCode() {
    return {
      name: this.name,
      keyCodes: [51, 99]
    };
  }

  getMessage() {
    const headline = `3IQ - tryb 3`;
    const copy = `Runda ${state.summary.games + 1}. Wybierz symbol!`;

    return {
      headline,
      copy
    };
  }

  AIChoice() {
    if (state.AIChoice.length === 0) {
      this.firstMove();
      return;
    }

    state.randomIndex = Math.floor(Math.random() * 3);

    // The winner of the first game repeats the move, and the loser chooses a symbol that would win him in the first round. This also works in subsequent rounds.

    // If the opponent throws something twice, it is worth to use his symbol in the 3rd round because he will probably change the symbol to not be predictable.

    // Paper is most often thrown away
  }
}

export default Variant3;
