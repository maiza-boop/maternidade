import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import type { CategoryData } from "@/components/category/types";

// Edite aqui os textos e produtos desta categoria.
// Para criar outra categoria, duplique este arquivo.
export const maternidade: CategoryData = {
  title: "Maternidade",
  subtitle: "Soluções pensadas para tornar diferentes momentos da maternidade mais leves.",
  intro:
    "Ser mãe é viver muitos momentos diferentes. Às vezes você procura informação, outras vezes precisa de uma solução prática para uma fase específica. Reunimos aqui materiais que podem fazer sentido para diferentes momentos da sua jornada.",
  products: [
    { image: p1, secondaryImage: p2, category: "Maternidade", name: "Produto Exemplo 01", description: "Uma solução prática para ajudar em um momento específico da maternidade.", price: "R$ 47,00", href: "#" },
    { image: p2, category: "Maternidade", name: "Produto Exemplo 02", description: "Uma solução prática para ajudar em um momento específico da maternidade.", href: "#" },
    { image: p3, category: "Maternidade", name: "Produto Exemplo 03", description: "Uma solução prática para ajudar em um momento específico da maternidade.", price: "R$ 67,00", href: "#" },
    { image: p4, secondaryImage: p1, category: "Maternidade", name: "Produto Exemplo 04", description: "Uma solução prática para ajudar em um momento específico da maternidade.", href: "#" },
  ],
};
