export const assets = {
  arrowDown: require("../img/arrow-down.svg"),
  arrowLeft: require("../img/arrow-left.svg"),
  arrowRight: require("../img/arrow-right.svg"),
  logo: require("../img/logo.svg"),
  paper: require("../img/paper.svg"),
  rock: require("../img/rock.svg"),
  scissors: require("../img/scissors.svg"),
  click: require("../audio/click.wav"),
  click2: require("../audio/click2.wav")
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
