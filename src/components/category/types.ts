export type Product = {
  image: string;
  secondaryImage?: string;
  category: string;
  name: string;
  description: string;
  price?: string;
  href: string;
  buttonLabel: string;
};

export type CategoryData = {
  title: string;
  subtitle: string;
  intro: string;
  products: Product[];
  brand: { name: string; tagline: string; logo?: string };
  hero: { image: string; alt: string; eyebrow: string; note: string };
  navigation: { label: string; href: string }[];
  categoriesTitle: string;
  categories: { name: string; image?: string; href: string }[];
  sidebarNotes: { title: string; text: string }[];
  showcase: { eyebrow: string; title: string };
  footer: { title: string; text: string; linkLabel: string; buttonLabel: string; href: string; signature: string };
};
