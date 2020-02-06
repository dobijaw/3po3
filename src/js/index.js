import "../scss/index.scss";
import { state } from "./state";

import { VariantFactory } from "./model/VariantFactory";
import { GameVariantsObserve } from "./model/GameVariantsObserve";
import { GamePlayControler } from "./model/GamePlayControler";
import { GameBoard } from "./model/GameBoard";
import { Winner } from "./model/Winner";

const variant = new VariantFactory();
const gameVariants = new GameVariantsObserve();
const gamePlayControler = new GamePlayControler();
const gameBoard = new GameBoard();

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

gameVariants.initFirstScreen();
