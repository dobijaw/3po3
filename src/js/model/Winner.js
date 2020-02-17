import { state, Statuses, Symbols } from "../state";
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
      state.playerChoice[0] === Symbols.Rock &&
        state.AIChoice[0] === Symbols.Scissors,
      state.playerChoice[0] === Symbols.Paper &&
        state.AIChoice[0] === Symbols.Rock,
      state.playerChoice[0] === Symbols.Scissors &&
        state.AIChoice[0] === Symbols.Paper
    ];

    this.winner = "";
  }

  saveWinnerToState() {
    state.summary.games++;

    const isWin = this.conditionsForWin.some(single => single);
    const isDraw = state.playerChoice[0] === state.AIChoice[0];

    if (isWin) {
      this.winner = Statuses.Win;
      state.summary.wins++;
      this.saveWinnerStatusToState(Statuses.Win);
    } else if (isDraw) {
      this.winner = Statuses.Draw;
      state.summary.draws++;
      this.saveWinnerStatusToState(Statuses.Draw);
    } else {
      this.winner = Statuses.Loss;
      state.summary.losses++;
      this.saveWinnerStatusToState(Statuses.Loss);
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
      case Statuses.Win:
        message.headline = "Wygrałeś! ;)";
        message.copy = "Zagraj jeszcze raz!";
        break;
      case Statuses.Draw:
        message.headline = "Remis :P";
        message.copy = "Było blisko. Zagraj.";
        break;
      case Statuses.Loss:
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
      case Statuses.Win:
        DOMelements.gameBoard.insertAdjacentHTML(
          "beforeend",
          this.getWinnerView(DOMclasses.boardWins, DOMclasses.boardNeutral)
        );
        break;
      case Statuses.Draw:
        DOMelements.gameBoard.insertAdjacentHTML(
          "beforeend",
          this.getWinnerView(DOMclasses.boardDraws, DOMclasses.boardDraws)
        );
        break;
      case Statuses.Loss:
        DOMelements.gameBoard.insertAdjacentHTML(
          "beforeend",
          this.getWinnerView(DOMclasses.boardNeutral, DOMclasses.boardLosses)
        );
        break;
    }
  }
}
