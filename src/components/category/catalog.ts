import type { Product } from "./types";

export const DESCRIPTION_PREVIEW_LENGTH = 55;

export function filterProducts(products: Product[], category: string | null): Product[] {
  return category === null ? products : products.filter((product) => product.category === category);
}

export function descriptionPreview(description: string): string {
  if (description.length <= DESCRIPTION_PREVIEW_LENGTH) return description;
  const initial = description.slice(0, DESCRIPTION_PREVIEW_LENGTH);
  const boundary = initial.lastIndexOf(" ");
  return `${initial.slice(0, boundary > 0 ? boundary : initial.length).trimEnd()}…`;
}