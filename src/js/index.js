import '../scss/index.scss';
import state from './state';
import {
    DOMelements
} from './base';

import playerChoiceView from './view/playerChoiceView';
import PlayerChoice from './model/PlayerChoice';
import AIChoice from './model/AIChoice';

DOMelements.symbols.forEach((box, index, arr) => box.addEventListener('click', ({
    currentTarget
}) => {
    playerChoiceView(currentTarget, index, arr);
    new PlayerChoice(currentTarget);
}));

DOMelements.playBtn.addEventListener('click', () => {
    new AIChoice();
})