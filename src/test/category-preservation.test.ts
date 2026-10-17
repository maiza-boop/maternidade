import { describe, expect, it } from "vitest";
import { maternidade } from "@/data/categories/maternidade";
import { areas } from "@/data/areas";
import { filterProducts, productCategories } from "@/components/category/catalog";

describe("Maternity showcase data", () => {
  it("registers each requested maternity product exactly once", () => {
    const names = maternidade.products.map((p) => p.name);
    expect(names).toHaveLength(23);
    expect(new Set(names).size).toBe(23);
    expect(names).toContain("Lancheiras Inteligentes");
  });
  it("marks every unknown price as provisional", () => {
    for (const p of maternidade.products) expect(p.price).toBe("R$ 0,00 (provisório)");
  });
  it("assigns every product only to registered categories", () => {
    const names = maternidade.categories.map((c) => c.name);
    for (const p of maternidade.products) for (const c of productCategories(p)) expect(names).toContain(c);
  });
  it("does not invent links", () => {
    for (const p of maternidade.products) expect([p.href, p.checkoutHref]).toEqual(["#", "#"]);
  });
  it("keeps the affiliate invitation", () => {
    expect(maternidade.affiliate).toMatchObject({ buttonLabel: "Quero ser afiliado", href: areas.afiliados.href });
  });
  it.each(maternidade.categories.map((c) => c.name))("populates and filters %s", (category) => {
    const filtered = filterProducts(maternidade.products, category);
    expect(filtered.length).toBeGreaterThan(0);
    expect(filtered.every((p) => productCategories(p).includes(category))).toBe(true);
  });
  it("shows a product in each of its categories without duplicating it", () => {
    expect(filterProducts(maternidade.products, "Amamentação").map((p) => p.name)).toContain("Mamãe Nutre");
    expect(filterProducts(maternidade.products, "Alimentação e Nutrição").map((p) => p.name)).toContain("Mamãe Nutre");
  });
  it("shows every product with Todas", () => {
    expect(filterProducts(maternidade.products, null)).toEqual(maternidade.products);
  });
  it("configures separate spiritual, income and affiliate destinations", () => {
    expect(maternidade.sidebarNotes.map((note) => note.href)).toEqual(["/areas/fe-na-familia", "/areas/renda-e-empreendedorismo"]);
  });
});
