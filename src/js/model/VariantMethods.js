import { DOMelements } from '../base';
import { state } from '../state';

class VariantMethods {
  constructor() { }

  randomNumber() {
    return Math.floor(Math.random() * 3);
  }

  updateHeadline() {
    const variantNumber = state.gameVariant.replace(/^\D+/g, '');

    DOMelements.headlineResult.textContent = `Runda ${state.summary.games + 1}. Wariant ${variantNumber}.`;
    DOMelements.copyResult.textContent = `Wybierz symbol aby zagrać!`;
  }

  renderGameBoard() {
    DOMelements.board.textContent = '';

    DOMelements.boardTemplates.forEach(template => {
      if (template.dataset.board === this.variantName) {
        const clon = template.content.cloneNode(true);
        DOMelements.board.appendChild(clon);
      }
    })
  }

  playerChoice() {
    const allSymbols = [...document.querySelectorAll('.board__box--choice')];

    allSymbols.forEach(symbol => {
      symbol.addEventListener('mousedown', () => {
        state.playerChoice = symbol.dataset.symbol;

        this.subscribers.forEach(s => s());
      })
    })

    document.addEventListener('keydown', ({ keyCode, which }) => {
      if (state.keyBlocked) return;
      switch (keyCode || which) {
        case 37:
          state.keyBlocked = true;
          console.log('Strzałka w lewo');
          state.playerChoice = 'rock';
          this.subscribers.forEach(s => s())

          break;
        case 40:
          state.keyBlocked = true;
          console.log('Strzałka w dół');
          state.playerChoice = 'paper';
          this.subscribers.forEach(s => s());
          break;
        case 39:
          state.keyBlocked = true;
          console.log('Strzałka w prawo');
          state.playerChoice = 'scissors';
          this.subscribers.forEach(s => s());
          break;
      }
    })
  }

  stopSymbolInterval() {
    clearInterval(state.intervals);
    // console.log(this.symbolDrawn);
    console.log(state.intervalIndex);
    // this.saveChoiceInState();
    console.log(state)

    return state.intervalIndex;
    // return this.symbolDrawn;
  }

  saveChoiceInState(symbol) {
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

  subscribe(subscriber) {
    this.subscribers.push(subscriber)
  }
}

export default VariantMethods;