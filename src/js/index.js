import "../scss/index.scss";

import { VariantFactory } from "./model/VariantFactory";
import { GameVariantsObserve } from "./model/GameVariantsObserve";
import { GamePlayControler } from "./model/GamePlayControler";
import { GameBoard } from "./model/GameBoard";
import { Scores } from "./model/Scores";

const variant = new VariantFactory();
const gameVariants = new GameVariantsObserve();
const gamePlayControler = new GamePlayControler();
const gameBoard = new GameBoard();
const scores = new Scores();

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
