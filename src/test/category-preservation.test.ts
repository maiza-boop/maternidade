import { describe, expect, it } from "vitest";
import { maternidade } from "@/data/categories/maternidade";
import { areas } from "@/data/areas";
import { filterProducts, productCategories } from "@/components/category/catalog";

describe("Maternity showcase data", () => {
  it("registers each requested maternity product exactly once", () => {
    const names = maternidade.products.map((p) => p.name);
    expect(names).toHaveLength(31);
    expect(new Set(names).size).toBe(31);
    expect(names).toContain("Lancheiras Inteligentes");
  });
  it("preserves R$ 0,00 for every non-book product without the provisional suffix", () => {
    for (const p of maternidade.products.filter((p) => p.kind !== "book")) expect(p.price).toBe("R$ 0,00");
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
  it("registers exactly the three upcoming books without prices or author fields", () => {
    const books = filterProducts(maternidade.products, "Livros e Leituras");
    expect(books.map((p) => p.name)).toEqual(["A Mulher que Ninguém Vê", "O Mundo que Ninguém Vê", "Menopausa Sem Tabu"]);
    for (const book of books) {
      expect(book.kind).toBe("book");
      expect(book.status).toBe("Em breve");
      expect(book).not.toHaveProperty("price");
      expect(book).not.toHaveProperty("author");
      expect(book).not.toHaveProperty("signature");
      expect(book).not.toHaveProperty("launchDate");
    }
  });
  it("associates the single O Mundo que Ninguém Vê book with Livros and TDAH/TEA", () => {
    const books = maternidade.products.filter((p) => p.name === "O Mundo que Ninguém Vê");
    expect(books).toHaveLength(1);
    const book = books[0];
    if (!book) throw new Error("Missing book");
    expect(productCategories(book)).toEqual(["Livros e Leituras", "Maternidade Atípica — TDAH e TEA"]);
    expect(filterProducts(maternidade.products, "Maternidade Atípica — TDAH e TEA")).toContain(book);
  });
  it("places the sewing e-book exclusively in Artesanato e Criatividade", () => {
    const products = maternidade.products.filter((p) => p.name === "60 Produtos de Costura que Vendem Todos os Meses");
    expect(products).toHaveLength(1);
    const product = products[0];
    if (!product) throw new Error("Missing sewing e-book");
    expect(productCategories(product)).toEqual(["Artesanato e Criatividade"]);
    expect(product.kind).not.toBe("book");
  });
  it.each(["Cartas das Emoções", "Cartas das Brincadeiras"])("associates a single %s with atypical maternity and games", (name) => {
    const products = maternidade.products.filter((p) => p.name === name);
    expect(products).toHaveLength(1);
    const product = products[0];
    if (!product) throw new Error("Missing cards");
    expect(productCategories(product)).toEqual(["Maternidade Atípica — TDAH e TEA", "Jogos e Atividades"]);
  });
  it.each(["Momento da Oração", "Minuto com Deus"])("keeps a single %s in Minuto com Deus without unconfirmed game associations", (name) => {
    const products = maternidade.products.filter((p) => p.name === name);
    expect(products).toHaveLength(1);
    const product = products[0];
    if (!product) throw new Error("Missing prayer product");
    expect(productCategories(product)).toEqual(["Minuto com Deus"]);
  });
});
