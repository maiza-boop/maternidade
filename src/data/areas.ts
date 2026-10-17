export type Area = {
  slug: string;
  title: string;
  description: string;
  /** Substitua pelo endereço definitivo quando a área estiver pronta. */
  href: string;
  /** Cada área poderá ter sua própria comunidade. */
  communityHref?: string;
};

export const areas = {
  maternidade: { slug: "maternidade", title: "Maternidade", description: "Soluções para diferentes momentos da maternidade.", href: "/" },
  espiritual: { slug: "fe-na-familia", title: "Fé na Família", description: "Uma futura área espiritual relacionada ao projeto Caminhando com Deus.", href: "/areas/fe-na-familia" },
  renda: { slug: "renda-e-empreendedorismo", title: "Renda & Empreendedorismo", description: "Uma futura área de renda, empreendedorismo e desenvolvimento profissional.", href: "/areas/renda-e-empreendedorismo" },
  afiliados: { slug: "afiliados", title: "Programa de Afiliados", description: "Uma futura área para produtos e oportunidades de divulgação de diferentes áreas e categorias.", href: "/areas/afiliados" },
} satisfies Record<string, Area>;

export function findArea(slug: string): Area | undefined {
  return Object.values(areas).find((area) => area.slug === slug);
}