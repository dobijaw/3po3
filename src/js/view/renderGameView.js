import {
    state
} from '../state';
import {
    DOMelements
} from '../base';

function renderGameView() {
    DOMelements.board.textContent = '';

    DOMelements.boardTemplates.forEach(template => {
        if (template.dataset.board === state.gameVariant) {
            const clon = template.content.cloneNode(true);
            DOMelements.board.appendChild(clon);
        }
    })
}

export default renderGameView;