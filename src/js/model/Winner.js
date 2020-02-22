import { Symbols, Statuses } from "../state";

export class Winner {
  constructor(playerChoice, AIChoice) {
    this.playerChoice = playerChoice;
    this.AIChoice = AIChoice;
  }

  isDraw() {
    return this.playerChoice === this.AIChoice;
  }

  isWin() {
    const conditionsForWin = [
      this.playerChoice === Symbols.Rock && this.AIChoice === Symbols.Scissors,
      this.playerChoice === Symbols.Scissors && this.AIChoice === Symbols.Paper,
      this.playerChoice === Symbols.Paper && this.AIChoice === Symbols.Rock
    ];

    return conditionsForWin.some(condition => condition);
  }

  checkGameResult() {
    if (this.isDraw()) return Statuses.Draw;
    if (this.isWin()) return Statuses.Win;

    return Statuses.Loss;
  }
}
