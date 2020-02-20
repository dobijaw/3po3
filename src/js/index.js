import "../scss/index.scss";

import { NewGamePopUp } from "./model/NewGamePopUp";
import { Sound } from "./model/Sound";
import { GameBoard } from "./model/GameBoard";
import { VariantsFactory } from "./model/VariantsFactory";
import { GameVariants } from "./model/GameVariants";
import { GameControler } from "./model/GameControler";
import { state, resetState } from "./state";
import { updateScoresView } from "./base";

const init = () => {
  const sound = new Sound();
  const gameBoard = new GameBoard();
  const newGamePopUp = new NewGamePopUp();
  const variantsFactory = new VariantsFactory();
  const gameControler = new GameControler();
  const gameVariants = new GameVariants();

  const allVariantsKeyCode = variantsFactory.getVariantKeyCode();
  gameVariants.getAllVariantsKeyCodes(allVariantsKeyCode);

  gameVariants.subscribe(selectedVariant => {
    const currentVariant = variantsFactory.getVariantGame(selectedVariant);

    gameControler.changeCurrentVariant(currentVariant);
    gameBoard.changeCurrentVariant(currentVariant);

    gameBoard.startGame();
    gameControler.startGame();

    gameControler.getPlayAgainSubscribers(() => {
      gameBoard.startGame();
      gameControler.startGame();
    });
  });

  sound.btnOnClickView();
  newGamePopUp.popUpOnClickView();

  resetState();
  updateScoresView(state.winnerStatus[0], state.summary);
  gameVariants.initFirstScreen();

  newGamePopUp.initNewGameSubscribers(() => {
    resetState();
    updateScoresView(state.winnerStatus[0], state.summary);
    gameVariants.initFirstScreen();
  });
};

document.addEventListener("DOMContentLoaded", init);
