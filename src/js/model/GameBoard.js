import { DOMelements } from "../base";

export class GameBoard {
  constructor() {
    this.currentVariant = null;
  }

  clearGameBoardView() {
    DOMelements.gameBoard.textContent = "";
  }

  renderGameBoardView() {
    this.clearGameBoardView();

    DOMelements.gameBoardTemplates.forEach(template => {
      if (template.dataset.board !== this.currentVariant.config.name) return;

      const clon = template.content.cloneNode(true);
      DOMelements.gameBoard.appendChild(clon);
    });
  }

  renderMessageView() {
    const message = this.currentVariant.getMessage();

    DOMelements.messageHeadline.textContent = message.headline;
    DOMelements.messageCopy.textContent = message.copy;
  }

  startGame() {
    this.renderMessageView();
    this.renderGameBoardView();
  }

  changeCurrentVariant(variant) {
    this.currentVariant = variant;
  }
}
