import { describe, expect, it } from "vitest";
import { maternidade } from "@/data/categories/maternidade";

describe("Existing maternity product information", () => {
  it("preserves all four existing products without adding commercial details", () => {
    expect(maternidade.products.map(({ name, description, price, href }) => ({ name, description, price, href }))).toEqual([
      { name: "Produto Exemplo 01", description: "Uma solução prática para ajudar em um momento específico da maternidade.", price: "R$ 47,00", href: "#" },
      { name: "Produto Exemplo 02", description: "Uma solução prática para ajudar em um momento específico da maternidade.", price: undefined, href: "#" },
      { name: "Produto Exemplo 03", description: "Uma solução prática para ajudar em um momento específico da maternidade.", price: "R$ 67,00", href: "#" },
      { name: "Produto Exemplo 04", description: "Uma solução prática para ajudar em um momento específico da maternidade.", price: undefined, href: "#" },
    ]);
  });
});