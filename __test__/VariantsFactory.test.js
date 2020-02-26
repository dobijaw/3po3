import { VariantsFactory } from "../src/js/model/VariantsFactory";
import { Variant } from "../src/js/model/Variant";

test("should be variant 1", () => {
  const selectedVariant = "variant1";

  const variantsFactory = new VariantsFactory();
  const result = variantsFactory.getVariantGame(selectedVariant);

  expect(result).toBe(variantsFactory.variant1);
});

test("should be variant 2", () => {
  const selectedVariant = "variant2";

  const variantsFactory = new VariantsFactory();
  const result = variantsFactory.getVariantGame(selectedVariant);

  expect(result).toBe(variantsFactory.variant2);
});

test("should be variant 3", () => {
  const selectedVariant = "variant3";

  const variantsFactory = new VariantsFactory();
  const result = variantsFactory.getVariantGame(selectedVariant);

  expect(result).toBe(variantsFactory.variant3);
});
