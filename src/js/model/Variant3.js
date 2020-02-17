import { state } from "../state";
import { Variant } from "./Variant";

class Variant3 extends Variant {
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

  getMessage() {
    const headline = `3IQ - tryb 3`;
    const copy = `Runda ${state.summary.games + 1}. Wybierz symbol!`;

    return {
      headline,
      copy
    };
  }

  AIChoice() {
    if (state.winnerStatus.length === 0) {
      state.randomIndex = 1;
      return;
    }

    if (state.winnerStatus.length === 1) {
      switch (state.winnerStatus[0]) {
        case "wins":
          const playerIndex = this.generateIndex(state.playerChoice[0]);
          const AIIndex = this.opositeSymbol(playerIndex);

          state.randomIndex = AIIndex;
          return;
        case "draws":
          state.randomIndex = this.randomNumber();
          return;
        case "losses":
          state.randomIndex = this.generateIndex(state.playerChoice[0]);
          return;
      }
    }

    if (state.winnerStatus.length > 1) {
      if (
        state.winnerStatus[0] === "wins" &&
        state.winnerStatus[1] === "wins"
      ) {
        state.randomIndex = this.generateIndex(state.playerChoice[0]);
      } else if (
        state.winnerStatus[0] === "draws" &&
        state.winnerStatus[1] === "draws"
      ) {
        state.randomIndex = this.randomNumber();
      } else if (
        state.winnerStatus[0] === "losses" &&
        state.winnerStatus[1] === "losses"
      ) {
        const aiSymbolIndex = this.generateIndex(state.AIChoice[0]);
        state.randomIndex = this.opositeSymbol(aiSymbolIndex);
      } else if (
        state.winnerStatus[0] === "wins" &&
        state.winnerStatus[1] !== "wins"
      ) {
        const playerSymbolIndex = this.generateIndex(state.playerChoice[0]);
        state.randomIndex = this.opositeSymbol(playerSymbolIndex);
      } else if (
        state.winnerStatus[0] === "draws" &&
        state.winnerStatus[1] !== "draws"
      ) {
        state.randomIndex = this.randomNumber();
      } else if (
        state.winnerStatus[0] === "losses" &&
        state.winnerStatus[1] !== "losses"
      ) {
        const aiSymbolIndex = this.generateIndex(state.AIChoice[0]);
        state.randomIndex = this.opositeSymbol(aiSymbolIndex);
      } else {
        state.randomIndex = this.randomNumber();
      }
    }
  }
}

export default Variant3;
