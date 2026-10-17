import { describe, expect, it } from "vitest";
import { maternidade } from "@/data/categories/maternidade";

describe("Existing maternity product information", () => {
  it("preserves all four existing products without adding commercial details", () => {
    expect(maternidade.products.map(({ price, href }) => ({ price, href }))).toEqual([
      { price: "R$ 47,00", href: "#" },
      { price: undefined, href: "#" },
      { price: "R$ 67,00", href: "#" },
      { price: undefined, href: "#" },
    ]);
  });
});