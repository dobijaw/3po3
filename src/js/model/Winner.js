import {
  state,
  Statuses,
  Symbols,
  saveToStateArr,
  stateIncrementation
} from "../state";
import { DOMelements, DOMclasses } from "../base";

export class Winner {
  constructor() {}

  isWinFn(playerChoice, AIChoice) {
    const conditionsForWin = [
      playerChoice === Symbols.Rock && AIChoice === Symbols.Scissors,
      playerChoice === Symbols.Paper && AIChoice === Symbols.Rock,
      playerChoice === Symbols.Scissors && AIChoice === Symbols.Paper
    ];

    return conditionsForWin.some(single => single);
  }

  isDrawFn(playerChoice, AIChoice) {
    return playerChoice === AIChoice;
  }

  checkGameResult() {
    state.summary.games++;

    const isWin = this.isWinFn(state.playerChoice[0], state.AIChoice[0]);
    const isDraw = this.isDrawFn(state.playerChoice[0], state.AIChoice[0]);

    if (isWin) return Statuses.Win;
    if (isDraw) return Statuses.Draw;

    return Statuses.Loss;
  }

  saveGameResult(status) {
    stateIncrementation(status);
    saveToStateArr(state.gameResults, status);
  }
}
