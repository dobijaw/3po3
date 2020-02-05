import { state } from '../state';

export class Winner {
  constructor() {
    this.conditionsForWin = [
      state.playerChoice[0] === 'rock' && state.aiChoice[0] === 'scissors',
      state.playerChoice[0] === 'paper' && state.aiChoice[0] === 'rock',
      state.playerChoice[0] === 'scissors' && state.aiChoice[0] === 'paper'
    ];
  }

  saveWinner() {
    state.summary.games++;

    const isWin = this.conditionsForWin.some(single => single);
    const isDraw = state.playerChoice[0] === state.aiChoice[0];

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