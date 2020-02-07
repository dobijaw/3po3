export const DOMelements = {
  popup: document.querySelector(".popup"),
  board: document.querySelector(".board"),
  resetBtn: document.querySelector("#reset"),
  messageCopy: document.querySelector(".copy--result"),
  messageHeadline: document.querySelector(".headline--result"),
  summaryScore: [...document.querySelectorAll(".summary__score")],
  btnVariants: [...document.querySelectorAll(".btn--variant")],
  boardTemplates: [...document.querySelectorAll(".template")]
};

export const DOMclasses = {
  imgBoardAI: "board__img--ai",
  popUpActive: "popup--active",
  popUpContainer: "popup__container",
  popUpBtn: "popup__btn",
  playAgainBtn: "btn--play-again",
  variantBtnDisabled: "btn--active",
  playerSymbols: "board__box--choice",
  boardWins: "board__box--wins",
  boardDraws: "board__box--draws",
  boardLosses: "board__box--losses",
  boardNeutral: "board__box--neutral"
};
