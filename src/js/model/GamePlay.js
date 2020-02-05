import { DOMelements, DOMclasses } from '../base';
import { state } from '../state';

import { Winner } from './Winner';

export class GamePlay {
  constructor() {
    this.currentVariant = null;
  }

  stopSymbolInterval() {
    if (state.intervals) clearInterval(state.intervals);
  }

  saveChoiceToState(symbol) {
    switch (symbol) {
      case 0:
        state.aiChoice = 'rock';
        break;
      case 1:
        state.aiChoice = 'paper';
        break;
      case 2:
        state.aiChoice = 'scissors';
        break;
    }
  }

  playerChoice() {
    const playerSymbols = [...document.querySelectorAll(`.${DOMclasses.playerSymbols}`)];

    playerSymbols.forEach(symbol => {
      symbol.addEventListener('mousedown', () => {
        state.playerChoice = symbol.dataset.symbol;
        state.keyBlocked = true;
        this.finishGame();
      })
    })

    document.addEventListener('keydown', ({ keyCode, which }) => {
      if (state.keyBlocked) return;
      switch (keyCode || which) {
        case 37:
          state.keyBlocked = true;
          console.log('Strzałka w lewo');
          state.playerChoice = 'rock';

          this.finishGame();
          break;
        case 40:
          state.keyBlocked = true;
          console.log('Strzałka w dół');
          state.playerChoice = 'paper';

          this.finishGame();
          break;
        case 39:
          state.keyBlocked = true;
          console.log('Strzałka w prawo');
          state.playerChoice = 'scissors';

          this.finishGame();
          break;
      }
    })
  }

  startGame() {
    this.stopSymbolInterval();
    this.currentVariant.aiChoice();
    this.playerChoice();
  }

  finishGame() {
    this.stopSymbolInterval();
    this.saveChoiceToState(state.intervalIndex);

    const gameResult = new Winner().saveWinner();
    console.log(gameResult);
    console.log(state.intervalIndex);
    console.log(state);
  }

  changeCurrentVariant(variant) {
    this.currentVariant = variant;
  }
}