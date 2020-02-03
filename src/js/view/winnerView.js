import { DOMelements } from "../base";
import { state } from '../state';

const resultViewHtml = (classNamePlayer, classNameAI) => `
  <div class="board__container">
    <ul class="board__list">
      <li class="board__item">
        <div class="board__box ${classNamePlayer}" data-symbol="${state.playerChoice}">
          <img src="../img/${state.playerChoice}.svg" alt="" class="board__img">
        </div>
      </li>
      <li class="board__item">
        <div class="board__box ${classNameAI}" data-symbol="${state.aiChoice}">
          <img src="../img/${state.aiChoice}.svg" alt="" class="board__img">
        </div>
      </li>
    </ul>
    <div class="board__btn">
      <button class="btn btn--border btn--play-again">Zagraj ponownie</button>
    </div>
  </div>
`;

const winnerView = (result) => {
  DOMelements.board.textContent = '';

  switch (result) {
    case 'wins':
      DOMelements.board.insertAdjacentHTML('beforeend', resultViewHtml('board__box--wins', 'board__box--neutral'));
      break;
    case 'draws':
      DOMelements.board.insertAdjacentHTML('beforeend', resultViewHtml('board__box--draws', 'board__box--draws'));
      break;
    case 'losses':
      DOMelements.board.insertAdjacentHTML('beforeend', resultViewHtml('board__box--neutral', 'board__box--losses'));
      break;
  }
};

const updateScoreView = () => {
  DOMelements.summaryScore.forEach(score => {
    score.textContent = state.summary[score.dataset.type];
  })
}

const updateHeadlineView = (result) => {
  switch (result) {
    case 'wins':
      DOMelements.headlineResult.textContent = 'Wygrałeś! ;)';
      DOMelements.copyResult.textContent = 'Zagraj jeszcze raz!';
      break;
    case 'draws':
      DOMelements.headlineResult.textContent = 'Remis :P';
      DOMelements.copyResult.textContent = 'Było blisko. Zagraj.';
      break;
    case 'losses':
      DOMelements.headlineResult.textContent = 'Przegrałeś :(';
      DOMelements.copyResult.textContent = 'Czas na reważ!';
      break;
  }
}

export { winnerView, updateScoreView, updateHeadlineView };