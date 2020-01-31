import '../scss/index.scss';
import {
    DOMelements
} from './base';

import renderGameView from './view/renderGameView';
import showChangeGameScreen from './view/showChangeGameScreen';





renderGameView();
DOMelements.variantBtn.addEventListener('click', showChangeGameScreen);