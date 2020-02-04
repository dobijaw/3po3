import { DOMelements } from '../base';

function getMessageView(message) {
    DOMelements.messageHeadline.textContent = message.headline;
    DOMelements.messageCopy.textContent = message.copy;
}

export default getMessageView;