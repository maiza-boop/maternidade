import { describe, expect, it } from "vitest";
import { maternidade } from "@/data/categories/maternidade";

describe("Maternity showcase data", () => {
  it("keeps original prices and gives provisional prices to the rest", () => {
    expect(maternidade.products.map((p) => p.price)).toEqual(["R$ 47,00", "R$ 37,00", "R$ 67,00", "R$ 57,00"]);
  });
  it("assigns every product to a registered category", () => {
    const names = maternidade.categories.map((c) => c.name);
    for (const p of maternidade.products) expect(names).toContain(p.category);
  });
  it("does not invent links", () => {
    for (const p of maternidade.products) expect([p.href, p.checkoutHref]).toEqual(["#", "#"]);
  });
  it("keeps the affiliate invitation as its own call, without an invented destination", () => {
    expect(maternidade.affiliate).toMatchObject({
      title: "Indique soluções para mães e ganhe comissões",
      buttonLabel: "Quero ser afiliado",
      href: "#",
    });
    expect(maternidade.affiliate.text).toContain("comissões");
  });
});
