export class Variant {
  constructor() {}

  randomNumber() {
    return Math.floor(Math.random() * 3);
  }

  generateIndex(symbolName) {
    switch (symbolName) {
      case "rock":
        return 0;
      case "paper":
        return 1;
      case "scissors":
        return 2;
    }
  }

  opositeSymbol(playerSymbol) {
    return playerSymbol + 1 > 2 ? 0 : playerSymbol + 1;
  }
}
