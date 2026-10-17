import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { ProductCard } from "@/components/category/ProductCard";
import { maternidade } from "@/data/categories/maternidade";
import { descriptionPreview } from "@/components/category/catalog";

afterEach(cleanup);

describe("In-card product descriptions", () => {
  it("expands and collapses each full description independently without changing the source", () => {
    const first = maternidade.products[0];
    const second = maternidade.products[1];
    if (!first || !second) throw new Error("Missing product fixtures");
    const original = first.description;
    render(<><ProductCard product={first} labels={maternidade.showcase} /><ProductCard product={second} labels={maternidade.showcase} /></>);
    expect(descriptionPreview(original)).not.toBe(original);
    const expand = screen.getAllByRole("button", { name: "Leia mais" });
    expect(expand).toHaveLength(2);
    const firstButton = expand[0];
    if (!firstButton) throw new Error("Missing expand control");
    const regionId = firstButton.getAttribute("aria-controls");
    if (!regionId) throw new Error("Missing description reference");
    fireEvent.click(firstButton);
    expect(document.getElementById(regionId)?.textContent).toContain(original);
    expect(screen.getAllByRole("button", { name: "Leia mais" })).toHaveLength(1);
    fireEvent.click(screen.getByRole("button", { name: "Ler menos" }));
    expect(document.getElementById(regionId)?.textContent).not.toContain(original);
    expect(screen.getAllByRole("button", { name: "Leia mais" })).toHaveLength(2);
    expect(first.description).toBe(original);
  });
});