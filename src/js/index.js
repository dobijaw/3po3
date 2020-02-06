import "../scss/index.scss";

import { PopUp } from "./model/PopUp";
import { Scores } from "./model/Scores";
import { GameBoard } from "./model/GameBoard";
import { VariantFactory } from "./model/VariantFactory";
import { GameVariantsObserve } from "./model/GameVariantsObserve";
import { GamePlayControler } from "./model/GamePlayControler";

const popUp = new PopUp();
const scores = new Scores();
const gameBoard = new GameBoard();
const variant = new VariantFactory();
const gameVariants = new GameVariantsObserve();
const gamePlayControler = new GamePlayControler();

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
