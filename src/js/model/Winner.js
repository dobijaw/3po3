import { state } from "../state";
import { DOMelements, DOMclasses } from "../base";

import { Sound } from "./Sound";

export class Winner {
  constructor() {
    this.conditionsForWin = [
      state.playerChoice[0] === "rock" && state.aiChoice[0] === "scissors",
      state.playerChoice[0] === "paper" && state.aiChoice[0] === "rock",
      state.playerChoice[0] === "scissors" && state.aiChoice[0] === "paper"
    ];
  }

  saveWinnerToState() {
    state.summary.games++;

    const isWin = this.conditionsForWin.some(single => single);
    const isDraw = state.playerChoice[0] === state.aiChoice[0];

    if (isWin) {
      state.summary.wins++;
      this.saveWinnerStatusToState("wins");
      return "wins";
    } else if (isDraw) {
      state.summary.draws++;
      this.saveWinnerStatusToState("draws");
      return "draws";
    } else {
      state.summary.losses++;
      this.saveWinnerStatusToState("losses");
      return "losses";
    }
  }

  saveWinnerStatusToState(result) {
    if (state.winnerStatus.length === 3) state.winnerStatus.pop();
    state.winnerStatus.unshift(result);
  }

  getWinnerView(classNamePlayer, classNameAI) {
    return `
      <div class="board__container">
        <ul class="board__list">
          <li class="board__item">
            <div class="board__box ${classNamePlayer} board__box--result" data-symbol="${state.playerChoice[0]}">
              <img src="../img/${state.playerChoice[0]}.svg" alt="" class="board__img">
            </div>
          </li>
          <li class="board__item">
            <div class="board__box ${classNameAI} board__box--result" data-symbol="${state.aiChoice[0]}">
              <img src="../img/${state.aiChoice[0]}.svg" alt="" class="board__img">
            </div>
          </li>
        </ul>
        <div class="board__btn">
          <button class="btn btn--border btn--play-again">Zagraj ponownie</button>
        </div>
      </div>
    `;
  }

  btnOnclick(callback) {
    const btn = document.querySelector(`.${DOMclasses.playAgainBtn}`);

    btn.addEventListener("click", callback);

    document.addEventListener("keyup", ({ keyCode, which }) => {
      if (state.enterBlocked) return;

      if (keyCode === 13 || which === 13) {
        callback();
        state.enterBlocked = true;
        new Sound().playSound();
      }
    });
  }

  updateMessageView(result) {
    switch (result) {
      case "wins":
        DOMelements.messageHeadline.textContent = "Wygrałeś! ;)";
        DOMelements.messageCopy.textContent = "Zagraj jeszcze raz!";
        break;
      case "draws":
        DOMelements.messageHeadline.textContent = "Remis :P";
        DOMelements.messageCopy.textContent = "Było blisko. Zagraj.";
        break;
      case "losses":
        DOMelements.messageHeadline.textContent = "Przegrałeś :(";
        DOMelements.messageCopy.textContent = "Czas na reważ!";
        break;
    }
  }

  renderWinnerView(result) {
    DOMelements.gameBoard.textContent = "";

    switch (result) {
      case "wins":
        DOMelements.gameBoard.insertAdjacentHTML(
          "beforeend",
          this.getWinnerView(DOMclasses.boardWins, DOMclasses.boardNeutral)
        );
        break;
      case "draws":
        DOMelements.gameBoard.insertAdjacentHTML(
          "beforeend",
          this.getWinnerView(DOMclasses.boardDraws, DOMclasses.boardDraws)
        );
        break;
      case "losses":
        DOMelements.gameBoard.insertAdjacentHTML(
          "beforeend",
          this.getWinnerView(DOMclasses.boardNeutral, DOMclasses.boardLosses)
        );
        break;
    }
  }

  updateScoreView() {
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
