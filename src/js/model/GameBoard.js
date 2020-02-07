import { DOMelements } from "../base";

export class GameBoard {
  constructor() {
    this.currentVariant = null;
  }

  clearGameBoardView() {
    DOMelements.board.textContent = "";
  }

  renderGameBoardView(variant) {
    this.clearGameBoardView();

    DOMelements.boardTemplates.forEach(template => {
      if (template.dataset.board !== variant) return;

      const clon = template.content.cloneNode(true);
      DOMelements.board.appendChild(clon);
    });
  }

  renderMessageView() {
    const message = this.currentVariant.getMessage();

    DOMelements.messageHeadline.textContent = message.headline;
    DOMelements.messageCopy.textContent = message.copy;
  }

  startGame() {
    this.renderMessageView();
    this.renderGameBoardView(this.currentVariant.name);
  }

  changeCurrentVariant(variant) {
    this.currentVariant = variant;
  }
}
