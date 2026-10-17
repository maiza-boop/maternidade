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
  brand: {
    name: "Incansáveis Mães",
    tagline: "Mais tempo para você, mais vida para a sua família",
  },
  hero: { image: p1, alt: "Mãe acolhendo seu bebê no colo", eyebrow: "Incansáveis Mães", note: "Mais tempo para você, mais vida para a sua família." },
  navigation: [
    { label: "Maternidade", href: "#maternidade" },
    { label: "Todas as Categorias", href: "#categorias" },
    { label: "Contato", href: "#comunidade" },
  ],
  categoriesTitle: "Categorias",
  allLabel: "Todas",
  // Para criar uma categoria nova, adicione-a aqui e use o mesmo nome no campo `category` do produto.
  categories: [
    { name: "Amamentação", image: p1 },
    { name: "Alimentação", image: p2 },
    { name: "Jogos & Atividades", image: p3 },
    { name: "Cuidados & Maternidade", image: p1 },
    { name: "TDAH & Autismo", image: p4 },
    { name: "Livros & Leituras", image: p2 },
  ],
  sidebarNotes: [
    { title: "Fé na família", text: "Para mães que desejam cultivar a fé em família e transformar momentos simples em oportunidades de oração, aprendizado e conexão com Deus." },
    { title: "Renda & empreendedorismo", text: "Para a mulher que cuida da família, mas também quer construir seus próprios caminhos, desenvolver habilidades e criar novas possibilidades de renda." },
  ],
  showcase: { eyebrow: "Escolhas para você", title: "Produtos em destaque", emptyMessage: "Ainda não há produtos nesta categoria.", learnLabel: "Conhecer solução", buyLabel: "Comprar agora", readMore: "Leia mais", readLess: "Ler menos" },
  // Chamada da vitrine para novos divulgadores. Mantida separada dos botões de compra.
  affiliate: {
    eyebrow: "Programa de afiliados",
    title: "Indique soluções para mães e ganhe comissões",
    text: "Gostou dos nossos produtos? Você também pode divulgá-los para outras pessoas e ganhar comissões pelas vendas realizadas por meio dos seus links de afiliado.",
    buttonLabel: "Quero ser afiliado",
    href: "#", // Endereço da futura página exclusiva do programa ainda não foi informado.
  },
  footer: {
    title: "Faça parte da nossa comunidade",
    text: "Não encontrou o que procura? Tem uma ideia de produto? Quer sugerir um conteúdo que ajudaria na rotina das mães? Faça parte da nossa comunidade e venha conversar com a gente.",
    linkLabel: "Comunidade Incansáveis Mães · Telegram",
    buttonLabel: "Participar da comunidade",
    href: "#", // Link da comunidade ainda não fornecido.
    signature: "com carinho, para cada fase.",
  },
  // Cada produto é independente: duplique um bloco para criar outro.
  // PROVISÓRIO: categorias dos produtos de exemplo, preços marcados e links "#" aguardam dados reais.
  products: [
    { category: "Amamentação", name: "Produto Exemplo 01", image: p1, secondaryImage: p2, description: "Uma solução prática para ajudar em um momento específico da maternidade.", price: "R$ 47,00", href: "#", checkoutHref: "#" },
    { category: "Alimentação", name: "Produto Exemplo 02", image: p2, description: "Uma solução prática para ajudar em um momento específico da maternidade.", price: "R$ 37,00" /* provisório */, href: "#", checkoutHref: "#" },
    { category: "Jogos & Atividades", name: "Produto Exemplo 03", image: p3, description: "Uma solução prática para ajudar em um momento específico da maternidade.", price: "R$ 67,00", href: "#", checkoutHref: "#" },
    { category: "Cuidados & Maternidade", name: "Produto Exemplo 04", image: p4, secondaryImage: p1, description: "Uma solução prática para ajudar em um momento específico da maternidade.", price: "R$ 57,00" /* provisório */, href: "#", checkoutHref: "#" },
  ],
};
