import { DOMelements } from '../base';

const resetSummaryView = () => {
    DOMelements.summaryScore.forEach(score => {
        score.textContent = 0;
    })
}

export { resetSummaryView };