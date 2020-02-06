import { state } from "../state";

class Variant2 {
  constructor(name, timeInterval) {
    this.name = name;
    this.timeInterval = timeInterval;
  }

  aiChoice() {
    state.intervals = null;

    const randomNumber = () => Math.floor(Math.random() * 3);
    const allImg = [...document.querySelectorAll(".board__img--ai")];
    let counter = randomNumber();

    allImg[counter].style.opacity = 1;

    state.intervals = setInterval(() => {
      let random = null;

      do {
        random = randomNumber();
      } while (counter === random);

      counter = random;

      allImg.forEach(symbol => {
        symbol.style.opacity = 0;
      });
      allImg[counter].style.opacity = 1;

      state.randomIndex = counter;
      console.log("Wariant 2 " + state.randomIndex);
    }, this.timeInterval);
  }

  getMessage() {
    const headline = `Pęd - tryb 2`;
    const copy = `Runda ${state.summary.games + 1}. Wybierz symbol!`;

    return {
      headline,
      copy
    };
  }
}

export default Variant2;
