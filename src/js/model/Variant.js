import { Symbols } from "../state";

export class Variant {
  constructor() {}

  getKeyCodes() {
    return {
      name: this.config.name,
      keyCodes: this.config.keyCodes
    };
  }

  randomNumber() {
    return Math.floor(Math.random() * 3);
  }

  generateIndex(symbolName) {
    switch (symbolName) {
      case Symbols.Rock:
        return 0;
      case Symbols.Paper:
        return 1;
      case Symbols.Scissors:
        return 2;
    }
  }

  opositeSymbol(playerSymbol) {
    return playerSymbol + 1 > 2 ? 0 : playerSymbol + 1;
  }
}
