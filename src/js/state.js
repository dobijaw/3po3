export const state = {
  gameVariant: "variant1",
  playerChoice: [],
  AIChoice: [],
  winnerStatus: [],
  summary: {
    games: 0,
    wins: 0,
    draws: 0,
    losses: 0
  },
  keyBlocked: false,
  enterBlocked: false,
  intervals: null,
  randomIndex: -1,
  isSoundOn: false
};

export function resetState() {
  state.gameVariant = "variant1";
  state.playerChoice = [];
  state.AIChoice = [];
  state.winnerStatus = [];
  state.keyBlocked = false;
  state.enterBlocked = false;
  state.intervals = null;
  state.randomIndex = -1;

  for (const key of Object.keys(state.summary)) {
    state.summary[key] = 0;
  }
}
