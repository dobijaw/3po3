import { DOMclasses } from "../base";
import { state } from "../state";

import { Winner } from "./Winner";
import { Sound } from "./Sound";

export class GamePlayControler {
  constructor() {
    this.currentVariant = null;
    this.playAgain = [];
    this.sound = new Sound();
  }

  stopSymbolInterval() {
    if (state.intervals) clearInterval(state.intervals);
  }

  saveChoiceToState(symbol) {
    let choice = "";

    switch (symbol) {
      case 0:
        choice = "rock";
        break;
      case 1:
        choice = "paper";
        break;
      case 2:
        choice = "scissors";
        break;
    }

    if (state.aiChoice.length === 3) state.aiChoice.pop();
    state.aiChoice.unshift(choice);
  }

  playerChoice() {
    const playerSymbols = [
      ...document.querySelectorAll(`.${DOMclasses.playerSymbols}`)
    ];

    playerSymbols.forEach(symbol => {
      symbol.addEventListener("mousedown", () => {
        this.sound.playSound();

        if (state.playerChoice.length === 3) state.playerChoice.pop();
        state.playerChoice.unshift(symbol.dataset.symbol);
        state.keyBlocked = true;
        this.finishGame();
      });
    });

    document.addEventListener("keydown", ({ keyCode, which }) => {
      if (state.keyBlocked) return;

      switch (keyCode || which) {
        case 37:
          state.keyBlocked = true;
          console.log("Strzałka w lewo");

          if (state.playerChoice.length === 3) state.playerChoice.pop();
          state.playerChoice.unshift("rock");

          this.finishGame();
          break;
        case 40:
          state.keyBlocked = true;
          console.log("Strzałka w dół");

          if (state.playerChoice.length === 3) state.playerChoice.pop();
          state.playerChoice.unshift("paper");

          this.finishGame();
          break;
        case 39:
          state.keyBlocked = true;
          console.log("Strzałka w prawo");

          if (state.playerChoice.length === 3) state.playerChoice.pop();
          state.playerChoice.unshift("scissors");

          this.finishGame();
          break;
      }
    });
  }

  startGame() {
    this.stopSymbolInterval();
    this.currentVariant.aiChoice();

    state.keyBlocked = false;
    this.playerChoice();
  }

  finishGame() {
    this.stopSymbolInterval();
    this.saveChoiceToState(state.randomIndex);
    state.enterBlocked = false;

    const winner = new Winner();
    const gameResult = winner.saveWinnerToState();

    winner.updateScoreView();
    winner.updateMessageView(gameResult);
    winner.renderWinnerView(gameResult);

    winner.btnOnclick(() => {
      this.playAgain.forEach(s => s());
    });

    console.log(gameResult);
    console.log(state.randomIndex);
    console.log(state);
  }

  getPlayAgain(fn) {
    this.playAgain.push(fn);
  }

  changeCurrentVariant(variant) {
    this.currentVariant = variant;
  }
}
