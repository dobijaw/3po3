import Variant1 from "./Variant1";
import Variant2 from "./Variant2";
import Variant3 from "./Variant3";

export class VariantsFactory {
  constructor() {
    this.variant1 = new Variant1("variant1", 400);
    this.variant2 = new Variant2("variant2", 450);
    this.variant3 = new Variant3("variant3", 400);
  }

  getKeybordKey() {
    return [
      this.variant1.keyCodeSelect(),
      this.variant2.keyCodeSelect(),
      this.variant3.keyCodeSelect()
    ];
  }

  getVariantGame(selectedVariant) {
    switch (selectedVariant) {
      case "variant1":
        return this.variant1;
      case "variant2":
        return this.variant2;
      case "variant3":
        return this.variant3;
    }
  }
}
