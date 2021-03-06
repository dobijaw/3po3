import rock from "../img/rock.svg";
import paper from "../img/paper.svg";
import scissors from "../img/scissors.svg";
import arrowDown from "../img/arrow-down.svg";
import arrowLeft from "../img/arrow-left.svg";
import arrowRight from "../img/arrow-right.svg";
import logo from "../img/logo.svg";
import click from "../audio/click.wav";
import click2 from "../audio/click2.wav";

export const assets = {
  rock,
  paper,
  scissors,
  arrowDown,
  arrowLeft,
  arrowRight,
  logo,
  click,
  click2
};

export const DOMelements = {
  popup: document.querySelector(".popup"),
  gameBoard: document.querySelector(".board"),
  resetBtn: document.querySelector("#reset"),
  soundBtn: document.querySelector(".btn--sound"),
  messageCopy: document.querySelector(".copy--result"),
  messageHeadline: document.querySelector(".headline--result"),
  summaryScore: [...document.querySelectorAll(".summary__score")],
  btnVariants: [...document.querySelectorAll(".btn--variant")],
  gameBoardTemplates: [...document.querySelectorAll(".template")]
};

export const DOMclasses = {
  summaryScore: "summary__score",
  imgBoardAI: "board__img--ai",
  popUpActive: "popup--active",
  popUpContainer: "popup__container",
  popUpBtn: "popup__btn",
  playAgainBtn: "btn--play-again",
  btnDisabled: "btn--active",
  playerSymbols: "board__box--choice",
  boardWins: "board__box--wins",
  boardDraws: "board__box--draws",
  boardLosses: "board__box--losses",
  boardNeutral: "board__box--neutral"
};

export function updateScoresView(winner, summary) {
  DOMelements.summaryScore.forEach(score => {
    score.textContent = summary[score.dataset.type];

    if (score.dataset.type === winner) {
      score.classList.add(`${DOMclasses.summaryScore}--${winner}`);

      setTimeout(() => {
        score.classList.remove(`${DOMclasses.summaryScore}--${winner}`);
      }, 500);
    }
  });
}

export function clearContainer(parent) {
  parent.textContent = "";
}

export function updateTextContent(parent, text) {
  parent.textContent = text;
}

export function addChild(parent, child, position = "beforeend") {
  parent.insertAdjacentHTML(position, child);
}
