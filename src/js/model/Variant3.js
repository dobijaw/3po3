import { state } from "../state";
import { VariantIQ } from "./VariantIQ";

class Variant3 extends VariantIQ {
  constructor(name, timeInterval) {
    super();
    this.name = name;
    this.timeInterval = timeInterval;
  }

  keyCodeSelect() {
    return {
      name: this.name,
      keyCodes: [51, 99]
    };
  }

  getMessage() {
    const headline = `3IQ - tryb 3`;
    const copy = `Runda ${state.summary.games + 1}. Wybierz symbol!`;

    return {
      headline,
      copy
    };
  }

  AIChoice() {
    if (state.AIChoice.length === 0) {
      this.firstMove();
    }

    // Zwycięzca pierwszej partii powtarza ruch, a przegrany wybiera symbol którym wygrałbym w peirwszej partii
    // Przykładowo jeśli w pierwszej walce wygraliśmy dając papier, a nasz rywal pokazał kamień, to w drugiej turze powinniśmy wybrać kamień, bo rywal najprawdopodobniej zagra nożyce.

    // Jeśli przeciwnik wyrzuci kamień dwukrotnie nastepna forma beda nozyce lub papier, wiec warto wurzycic kamien.

    //Papier rzucany jest najrzadziej statystycznie.

    //jeśli przeciwnik wystawił nożyczki, a my papier, to w kolejnej rundzie powinniśmy wybrać kamień (licząc na to, że wygrywający powtórzy zwycięski wybór czyli nożyczki)

    //a więc jeśli ktoś przegrał nożyczkami postara się zmienić swój wybór w kolejnej rundzie na kamień albo papier, dlatego najrozsądniej będzie wybrać papier
  }
}

export default Variant3;
