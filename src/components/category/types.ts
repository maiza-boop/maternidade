export type Product = {
  image: string;
  secondaryImage?: string;
  category: string;
  name: string;
  description: string;
  price?: string;
  href: string;
};

export type CategoryData = {
  title: string;
  subtitle: string;
  intro: string;
  products: Product[];
};
