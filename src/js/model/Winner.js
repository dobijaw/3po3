import { state } from "../state";
import { DOMelements, DOMclasses } from "../base";

import paper from "../../img/paper.svg";
import rock from "../../img/rock.svg";
import scissors from "../../img/scissors.svg";

const imgSymbols = {
  paper,
  rock,
  scissors
};

export class Winner {
  constructor() {
    this.conditionsForWin = [
      state.playerChoice[0] === "rock" && state.AIChoice[0] === "scissors",
      state.playerChoice[0] === "paper" && state.AIChoice[0] === "rock",
      state.playerChoice[0] === "scissors" && state.AIChoice[0] === "paper"
    ];

    this.winner = "";
  }

  saveWinnerToState() {
    state.summary.games++;

    const isWin = this.conditionsForWin.some(single => single);
    const isDraw = state.playerChoice[0] === state.AIChoice[0];

    if (isWin) {
      this.winner = "wins";
      state.summary.wins++;
      this.saveWinnerStatusToState("wins");
    } else if (isDraw) {
      this.winner = "draws";
      state.summary.draws++;
      this.saveWinnerStatusToState("draws");
    } else {
      this.winner = "losses";
      state.summary.losses++;
      this.saveWinnerStatusToState("losses");
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
            <div class="board__box ${classNamePlayer} board__box--result" data-symbol="${
      state.playerChoice[0]
    }">
              <img src="${imgSymbols[state.playerChoice[0]]}" alt="${
      state.playerChoice[0]
    }" class="board__img">
            </div>
          </li>
          <li class="board__item">
            <div class="board__box ${classNameAI} board__box--result" data-symbol="${
      state.AIChoice[0]
    }">
              <img src="${imgSymbols[state.AIChoice[0]]}" alt="${
      state.AIChoice[0]
    }" class="board__img">
            </div>
          </li>
        </ul>
        <div class="board__btn">
          <button class="btn btn--border btn--play-again">Zagraj ponownie</button>
        </div>
      </div>
    `;
  }

  playAgain(callback) {
    const btn = document.querySelector(`.${DOMclasses.playAgainBtn}`);

    btn.addEventListener("click", callback);

    document.addEventListener("keyup", ({ keyCode, which }) => {
      if (state.enterBlocked) return;

      if (keyCode === 13 || which === 13) {
        callback();
        state.enterBlocked = true;
      }
    });
  }

  updateMessageView() {
    const message = {};

    switch (this.winner) {
      case "wins":
        message.headline = "Wygrałeś! ;)";
        message.copy = "Zagraj jeszcze raz!";
        break;
      case "draws":
        message.headline = "Remis :P";
        message.copy = "Było blisko. Zagraj.";
        break;
      case "losses":
        message.headline = "Przegrałeś :(";
        message.copy = "Czas na reważ!";
        break;
    }

    DOMelements.messageHeadline.textContent = message.headline;
    DOMelements.messageCopy.textContent = message.copy;
  }

  renderWinnerView() {
    DOMelements.gameBoard.textContent = "";

    switch (this.winner) {
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
}
