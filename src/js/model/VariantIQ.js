import { state } from "../state";

export class VariantIQ {
  constructor() {}

  firstMove() {
    if (state.aiChoice.length !== 0) return;

    state.randomIndex = Math.floor(Math.random() * 2);
  }
}
