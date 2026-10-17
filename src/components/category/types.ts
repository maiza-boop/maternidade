export type Product = {
  /** Exemplo fictício de montagem, não uma oferta comercial definitiva. */
  provisional?: boolean;
  /** Deve ser igual ao `name` de uma categoria cadastrada em `categories`. */
  category: string;
  name: string;
  image: string;
  secondaryImage?: string;
  /** Descrição completa única; a vitrine mostra um trecho com "Leia mais". */
  description: string;
  /** Preço em reais, ex.: "R$ 47,00". */
  price: string;
  /** Link da página individual ("Conhecer solução"). "#" = aguardando link. */
  href: string;
  /** Link direto do checkout ("Comprar agora"). "#" = aguardando link. */
  checkoutHref: string;
};

export type Affiliate = {
  eyebrow: string;
  title: string;
  text: string;
  buttonLabel: string;
   /** Destino configurável da página exclusiva do programa. */
  href: string;
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
  allLabel: string;
  categories: { name: string; image?: string }[];
  sidebarNotes: { title: string; text: string; href: string }[];
  showcase: { eyebrow: string; title: string; emptyMessage: string; learnLabel: string; buyLabel: string; readMore: string; readLess: string };
  affiliate: Affiliate;
  footer: { title: string; text: string; linkLabel: string; buttonLabel: string; href: string; signature: string };
};
