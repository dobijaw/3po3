import { state } from "../state";

class Variant1 {
  constructor(name, timeInterval) {
    this.name = name;
    this.timeInterval = timeInterval;
  }

  getMessage() {
    const headline = `Los - tryb 1`;
    const copy = `Runda ${state.summary.games + 1}. Wybierz symbol!`;

    return {
      headline,
      copy
    };
  }

  aiChoice() {
    state.intervals = null;
    const randomNumber = () => Math.floor(Math.random() * 3);

    state.intervalIndex = randomNumber();
    let counter = 0;

    state.intervals = setInterval(() => {
      let random = 0;

      do {
        random = randomNumber();
      } while (counter === random);

      counter = random;
      state.intervalIndex = counter;

      console.log("Wariant 1 " + state.intervalIndex);
    }, this.timeInterval);
  }
}

export default Variant1;
