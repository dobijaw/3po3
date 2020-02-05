import { state } from '../state';

export class Winner {
  constructor() {
    this.conditionsForWin = [
      state.playerChoice === 'rock' && state.aiChoice === 'scissors',
      state.playerChoice === 'paper' && state.aiChoice === 'rock',
      state.playerChoice === 'scissors' && state.aiChoice === 'paper'
    ];
  }

  saveWinner() {
    state.summary.games++;

    const isWin = this.conditionsForWin.some(single => single);
    const isDraw = state.playerChoice === state.aiChoice;

    if (isWin) {
      state.summary.wins++;
      return 'wins';
    } else if (isDraw) {
      state.summary.draws++;
      return 'draws';
    } else {
      state.summary.losses++;
      return 'losses';
    }
  }
}