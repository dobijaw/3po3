import { state } from "../state";
import { DOMelements, DOMclasses } from "../base";

export class Scores {
  constructor() {}

  resetScoresInState() {
    state.gameVariant = "variant1";
    state.playerChoice = [];
    state.aiChoice = [];
    state.winnerStatus = [];
    state.keyBlocked = false;
    state.enterBlocked = false;
    state.intervals = null;
    state.randomIndex = -1;

    for (const key of Object.keys(state.summary)) {
      state.summary[key] = 0;
    }
  }

  resetScoresView() {
    DOMelements.summaryScore.forEach(score => {
      score.textContent = state.summary[score.dataset.type];

      if (score.dataset.type === state.winnerStatus[0]) {
        score.classList.add(
          `${DOMclasses.summaryScore}--${state.winnerStatus[0]}`
        );

        setTimeout(() => {
          score.classList.remove(
            `${DOMclasses.summaryScore}--${state.winnerStatus[0]}`
          );
        }, 500);
      }
    });
  }
}
