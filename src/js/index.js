import "../scss/index.scss";
import { state } from "./state";

import { VariantFactory } from "./model/VariantFactory";
import { GameVariantsObserve } from "./model/GameVariantsObserve";
import { GamePlayControler } from "./model/GamePlayControler";
import { GameBoard } from "./model/GameBoard";
import { Scores } from "./model/Scores";
import { PopUp } from "./model/PopUp";

const variant = new VariantFactory();
const gameVariants = new GameVariantsObserve();
const gamePlayControler = new GamePlayControler();
const gameBoard = new GameBoard();
const scores = new Scores();
const popUp = new PopUp();

gameVariants.subscribe(selectedVariant => {
  const currentVariant = variant.getVariantGame(selectedVariant);
  gamePlayControler.changeCurrentVariant(currentVariant);
  gameBoard.changeCurrentVariant(currentVariant);

  gameBoard.startGame();
  gamePlayControler.startGame();

  gamePlayControler.getPlayAgain(() => {
    gameBoard.startGame();
    gamePlayControler.startGame();
  });
});

scores.resetScoresInState();
scores.resetScoresView();
gameVariants.initFirstScreen();

popUp.popUpOnClickView();

popUp.initNewGame(() => {
  gamePlayControler.stopSymbolInterval();

  scores.resetScoresInState();
  scores.resetScoresView();
  gameVariants.initFirstScreen();
});
