import {
  state,
  Symbols,
  Statuses,
  saveToStateArray,
  stateIncrementation
} from "../state";

export class Winner {
  constructor() {}

  isWinFn(playerChoice, AIChoice) {
    const conditionsForWin = [
      playerChoice === Symbols.Rock && AIChoice === Symbols.Scissors,
      playerChoice === Symbols.Scissors && AIChoice === Symbols.Paper,
      playerChoice === Symbols.Paper && AIChoice === Symbols.Rock
    ];

    return conditionsForWin.some(single => single);
  }

  checkGameResult() {
    const isWin = this.isWinFn(state.playerChoice[0], state.AIChoice[0]);
    const isDraw = state.playerChoice[0] === state.AIChoice[0];

    if (isWin) return Statuses.Win;
    if (isDraw) return Statuses.Draw;

    return Statuses.Loss;
  }

  saveGameResult(status) {
    stateIncrementation(status);
    stateIncrementation(Statuses.Game);
    saveToStateArray(state.gameResults, status);
  }
}
