export const state = {
  gameVariant: "variant1",
  playerChoice: [],
  aiChoice: [],
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
  randomIndex: -1
};
