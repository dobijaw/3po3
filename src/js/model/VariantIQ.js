import { state } from "../state";

export class VariantIQ {
  constructor() {}

  firstMove() {
    if (state.AIChoice.length !== 0) return;

    state.randomIndex = Math.floor(Math.random() * 2);
  }
}
