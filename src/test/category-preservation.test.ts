import { describe, expect, it } from "vitest";
import { maternidade } from "@/data/categories/maternidade";
import { areas } from "@/data/areas";
import { filterProducts } from "@/components/category/catalog";

describe("Maternity showcase data", () => {
  it("keeps original prices and gives provisional prices to the rest", () => {
    expect(maternidade.products.slice(0, 4).map((p) => p.price)).toEqual(["R$ 47,00", "R$ 37,00", "R$ 67,00", "R$ 57,00"]);
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
      href: areas.afiliados.href,
    });
    expect(maternidade.affiliate.text).toContain("comissões");
  });
  it.each(["Amamentação", "Alimentação", "Jogos & Atividades", "Cuidados & Maternidade", "TDAH & Autismo", "Livros & Leituras"])("populates and filters %s exclusively", (category) => {
    const filtered = filterProducts(maternidade.products, category);
    expect(filtered.length).toBeGreaterThan(0);
    expect(filtered.every((product) => product.category === category)).toBe(true);
  });
  it("shows every product with Todas", () => {
    expect(filterProducts(maternidade.products, null)).toEqual(maternidade.products);
  });
  it("marks the new fictional products and prices as provisional", () => {
    expect(maternidade.products.slice(4).map((product) => [product.provisional, product.price])).toEqual([[true, "R$ 39,00"], [true, "R$ 29,00"]]);
  });
  it("configures separate spiritual, income and affiliate destinations", () => {
    expect(maternidade.sidebarNotes.map((note) => note.href)).toEqual(["/areas/fe-na-familia", "/areas/renda-e-empreendedorismo"]);
    expect(maternidade.affiliate.href).toBe("/areas/afiliados");
  });
});
