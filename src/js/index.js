import "../scss/index.scss";

import { NewGamePopUp } from "./model/NewGamePopUp";
import { Sound } from "./model/Sound";
import { Scores } from "./model/Scores";
import { GameBoard } from "./model/GameBoard";
import { VariantsFactory } from "./model/VariantsFactory";
import { GameVariants } from "./model/GameVariants";
import { GameControler } from "./model/GameControler";

const sound = new Sound();
const newGamePopUp = new NewGamePopUp();
const scores = new Scores();
const gameBoard = new GameBoard();
const variantsFactory = new VariantsFactory();
const gameVariants = new GameVariants();
const gameControler = new GameControler();

const myKeys = variantsFactory.getKeybordKey();
gameVariants.getKeyCodesFromFactory(myKeys);

gameVariants.subscribe(selectedVariant => {
  const currentVariant = variantsFactory.getVariantGame(selectedVariant);

  gameControler.changeCurrentVariant(currentVariant);
  gameBoard.changeCurrentVariant(currentVariant);

  gameBoard.startGame();
  gameControler.startGame();

  gameControler.getPlayAgain(() => {
    gameBoard.startGame();
    gameControler.startGame();
  });
});

sound.btnOnClickView();
scores.resetScoresInState();
scores.resetScoresView();
gameVariants.initFirstScreen();

newGamePopUp.popUpOnClickView();

newGamePopUp.initNewGame(() => {
  gameControler.stopSymbolInterval();

  scores.resetScoresInState();
  scores.resetScoresView();
  gameVariants.initFirstScreen();
});
