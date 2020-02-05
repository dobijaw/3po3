import '../scss/index.scss';

import { VariantFactory } from './model/VariantFactory';
import { GameVariantsObserve } from './model/GameVariantsObserve';
import { GamePlay } from './model/GamePlay';
import { GameBoard } from './model/GameBoard';

const variant = new VariantFactory();
const gameVariants = new GameVariantsObserve();
const gamePlay = new GamePlay();
const gameBoard = new GameBoard();

gameVariants.subscribe(selectedVariant => {
    const currentVariant = variant.getVariantGame(selectedVariant);
    gamePlay.changeCurrentVariant(currentVariant);
    gameBoard.changeCurrentVariant(currentVariant);

    gameBoard.startGame();
    gamePlay.startGame();
})

// gameVariants.initFirstScreen();