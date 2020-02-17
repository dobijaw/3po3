import Variant1 from "./Variant1";
import Variant2 from "./Variant2";
import Variant3 from "./Variant3";

export class VariantsFactory {
  constructor() {
    this.variant1 = new Variant1({
      name: "variant1",
      interval: 400,
      keyCodes: [49, 97]
    });
    this.variant2 = new Variant2({
      name: "variant2",
      interval: 500,
      keyCodes: [50, 98]
    });
    this.variant3 = new Variant3({
      name: "variant3",
      interval: 400,
      keyCodes: [51, 99]
    });
  }

  getVariantKeyCode() {
    return [
      this.variant1.getKeyCodes(),
      this.variant2.getKeyCodes(),
      this.variant3.getKeyCodes()
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
