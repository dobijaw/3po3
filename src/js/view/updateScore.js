import {
    DOMelements
} from '../base';

import {
    state
} from '../state';

const updateScore = (scoreStatus) => {
    DOMelements.summaryScore.forEach(score => {
        if (score.dataset.type === scoreStatus) score.textContent = state.summary[scoreStatus];
    })
}

export default updateScore;