import "../scss/index.scss";

import { PopUp } from "./model/PopUp";
import { Sound } from "./model/Sound";
import { Scores } from "./model/Scores";
import { GameBoard } from "./model/GameBoard";
import { VariantsFactory } from "./model/VariantsFactory";
import { GameVariantsObserve } from "./model/GameVariantsObserve";
import { GamePlayControler } from "./model/GamePlayControler";

const sound = new Sound();
const popUp = new PopUp();
const scores = new Scores();
const gameBoard = new GameBoard();
const variantsFactory = new VariantsFactory();
const gameVariants = new GameVariantsObserve();
const gamePlayControler = new GamePlayControler();

gameVariants.subscribe(selectedVariant => {
  const currentVariant = variantsFactory.getVariantGame(selectedVariant);
  gamePlayControler.changeCurrentVariant(currentVariant);
  gameBoard.changeCurrentVariant(currentVariant);

  gameBoard.startGame();
  gamePlayControler.startGame();

  gamePlayControler.getPlayAgain(() => {
    gameBoard.startGame();
    gamePlayControler.startGame();
  });
});

sound.btnOnClickView();
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
