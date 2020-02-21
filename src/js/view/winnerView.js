import {
  DOMelements,
  DOMclasses,
  assets,
  clearContainer,
  addChild,
  updateTextContent
} from "../base";

import { state, Statuses } from "../state";

const getWinnerView = (
  classPlayer,
  classAI,
  symbolPlayer = state.playerChoice[0],
  symbolAI = state.AIChoice[0]
) => `
    <div class="board__container">
        <ul class="board__list">
            <li class="board__item">
                <div class="board__box ${classPlayer} board__box--result" data-symbol="${symbolPlayer}">
                    <img src="${assets[symbolPlayer]}" alt="${symbolPlayer}" class="board__img">
                </div>
            </li>
            <li class="board__item">
                <div class="board__box ${classAI} board__box--result" data-symbol="${symbolAI}">
                    <img src="${assets[symbolAI]}" alt="${symbolAI}" class="board__img">
                </div>
            </li>
        </ul>
        <div class="board__btn">
            <button class="btn btn--border btn--play-again">Zagraj ponownie</button>
        </div>
    </div>
`;

export function renderWinnerView(gameResult) {
  clearContainer(DOMelements.gameBoard);

  switch (gameResult) {
    case Statuses.Win:
      addChild(
        DOMelements.gameBoard,
        getWinnerView(DOMclasses.boardWins, DOMclasses.boardNeutral)
      );
      break;
    case Statuses.Draw:
      addChild(
        DOMelements.gameBoard,
        getWinnerView(DOMclasses.boardDraws, DOMclasses.boardDraws)
      );
      break;
    case Statuses.Loss:
      addChild(
        DOMelements.gameBoard,
        getWinnerView(DOMclasses.boardNeutral, DOMclasses.boardLosses)
      );
      break;
  }
}

export function playAgain(callback) {
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

export function renderMessage(gameResult) {
  const message = {};

  switch (gameResult) {
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

  updateTextContent(DOMelements.messageHeadline, message.headline);
  updateTextContent(DOMelements.messageCopy, message.copy);
}
