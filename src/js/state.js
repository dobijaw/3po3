export const state = {
  gameVariant: "variant1",
  playerChoice: [],
  AIChoice: [],
  gameResults: [],
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

export const Statuses = {
  Win: "wins",
  Draw: "draws",
  Loss: "losses",
  Game: "games"
};

export const Symbols = {
  Rock: "rock",
  Paper: "paper",
  Scissors: "scissors"
};

export function resetState() {
  state.gameVariant = "variant1";
  state.playerChoice = [];
  state.AIChoice = [];
  state.gameResults = [];
  state.keyBlocked = false;
  state.enterBlocked = false;
  state.intervals = null;
  state.randomIndex = -1;

  for (const key of Object.keys(state.summary)) {
    state.summary[key] = 0;
  }
}

export function stateSaveToArray(key, value) {
  if (key.length === 3) key.pop();
  key.unshift(value);
}

export function stateIncrementation(status) {
  state.summary[status]++;
}
