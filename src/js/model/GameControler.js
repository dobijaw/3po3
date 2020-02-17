import { DOMclasses, updateScoresView } from "../base";
import { state } from "../state";

import { Winner } from "./Winner";
import { Sound } from "./Sound";

export class GameControler {
  constructor() {
    this.currentVariant = null;
    this.playAgainSubscribers = [];
    this.sound = new Sound();
  }

  stopSymbolInterval() {
    if (state.intervals) clearInterval(state.intervals);
  }

  saveAIChoiceToState(symbol) {
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

    if (state.AIChoice.length === 3) state.AIChoice.pop();
    state.AIChoice.unshift(choice);
  }

  playerChoice(symbol) {
    state.keyBlocked = true;

    if (state.playerChoice.length === 3) state.playerChoice.pop();
    state.playerChoice.unshift(symbol);

    this.sound.playSound();
    this.finishGame();
  }

  playerChoiceListener() {
    this.playerSymbols = [
      ...document.querySelectorAll(`.${DOMclasses.playerSymbols}`)
    ];

    this.playerSymbols.forEach(symbol => {
      symbol.addEventListener("mousedown", () => {
        this.playerChoice(symbol.dataset.symbol);
      });
    });

    document.addEventListener("keydown", ({ keyCode, which }) => {
      if (state.keyBlocked) return;

      switch (keyCode || which) {
        case 37:
          this.playerChoice("rock");
          break;
        case 40:
          this.playerChoice("paper");
          break;
        case 39:
          this.playerChoice("scissors");
          break;
      }
    });
  }

  startGame() {
    this.stopSymbolInterval();
    state.keyBlocked = false;

    this.currentVariant.AIChoice();
    this.playerChoiceListener();
  }

  finishGame() {
    state.enterBlocked = false;

    this.stopSymbolInterval();
    this.saveAIChoiceToState(state.randomIndex);

    const winner = new Winner();

    winner.saveWinnerToState();
    winner.updateMessageView();
    winner.renderWinnerView();

    updateScoresView(state.winnerStatus[0], state.summary);

    winner.playAgain(() => {
      this.sound.playSound();
      this.playAgainSubscribers.forEach(sub => sub());
    });
  }

  getPlayAgainSubscribers(subscriber) {
    this.playAgainSubscribers.push(subscriber);
  }

  changeCurrentVariant(variant) {
    this.currentVariant = variant;
  }
}
