import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import type { CategoryData } from "@/components/category/types";
import { areas } from "@/data/areas";

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
    { name: "Alimentação e Nutrição", image: p2 },
    { name: "Cuidados com o Bebê e Maternidade", image: p1 },
    { name: "Sono e Rotina Infantil", image: p4 },
    { name: "Jogos e Atividades", image: p3 },
    { name: "Desenvolvimento Infantil e Aprendizagem", image: p3 },
    { name: "Maternidade Atípica — TDAH e TEA", image: p4 },
    { name: "Culinária e Renda na Cozinha", image: p2 },
    { name: "Artesanato e Criatividade", image: p3 },
    { name: "Festas e Personalizados", image: p2 },
  ],
  sidebarNotes: [
    { title: "Fé na família", text: "Para mães que desejam cultivar a fé em família e transformar momentos simples em oportunidades de oração, aprendizado e conexão com Deus.", href: areas.espiritual.href },
    { title: "Renda & empreendedorismo", text: "Para a mulher que cuida da família, mas também quer construir seus próprios caminhos, desenvolver habilidades e criar novas possibilidades de renda.", href: areas.renda.href },
  ],
  showcase: { eyebrow: "Escolhas para você", title: "Produtos em destaque", emptyMessage: "Ainda não há produtos nesta categoria.", learnLabel: "Conhecer solução", buyLabel: "Comprar agora", readMore: "Leia mais", readLess: "Ler menos" },
  // Chamada da vitrine para novos divulgadores. Mantida separada dos botões de compra.
  affiliate: {
    eyebrow: "Programa de afiliados",
    title: "Indique soluções para mães e ganhe comissões",
    text: "Gostou dos nossos produtos? Você também pode divulgá-los para outras pessoas e ganhar comissões pelas vendas realizadas por meio dos seus links de afiliado.",
    buttonLabel: "Quero ser afiliado",
    href: areas.afiliados.href, // Página interna provisória; destino definitivo em areas.ts.
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
  // PROVISÓRIO: preços "R$ 0,00 (provisório)", descrições iniciais e links "#" aguardam dados reais.
  products: [
    { provisional: true, category: "Alimentação e Nutrição", extraCategories: ["Amamentação"], name: "Mamãe Nutre", image: p2, description: "Material voltado à alimentação da mãe durante a maternidade, com orientações para apoiar escolhas mais conscientes no dia a dia da família.", price: "R$ 0,00 (provisório)", href: "#", checkoutHref: "#" },
    { provisional: true, category: "Amamentação", name: "Amamente Sem Dor", image: p1, description: "Material de apoio para mães que desejam entender melhor a amamentação e viver esse momento com mais tranquilidade e informação.", price: "R$ 0,00 (provisório)", href: "#", checkoutHref: "#" },
    { provisional: true, category: "Cuidados com o Bebê e Maternidade", name: "Kit Mãe de Primeira Viagem", image: p1, description: "Kit pensado para mães que estão vivendo a primeira experiência da maternidade e buscam apoio para os cuidados com o bebê.", price: "R$ 0,00 (provisório)", href: "#", checkoutHref: "#" },
    { provisional: true, category: "Cuidados com o Bebê e Maternidade", name: "Primeiro Capítulo", image: p1, description: "Material dedicado aos primeiros momentos da maternidade, para acompanhar a mãe no início dessa nova fase da família.", price: "R$ 0,00 (provisório)", href: "#", checkoutHref: "#" },
    { provisional: true, category: "Alimentação e Nutrição", name: "Introdução Baby", image: p2, description: "Material sobre a introdução alimentar do bebê, para ajudar a família a organizar essa etapa com mais segurança e informação.", price: "R$ 0,00 (provisório)", href: "#", checkoutHref: "#" },
    { provisional: true, category: "Sono e Rotina Infantil", extraCategories: ["Cuidados com o Bebê e Maternidade"], name: "Rotina do Sono — Bebê Dormindo em Segundos", image: p4, description: "Material voltado à rotina de sono do bebê, com orientações para a família organizar os momentos de descanso da criança.", price: "R$ 0,00 (provisório)", href: "#", checkoutHref: "#" },
    { provisional: true, category: "Maternidade Atípica — TDAH e TEA", extraCategories: ["Jogos e Atividades"], name: "Caderno de Atividades para Crianças com TDAH e Autistas", image: p3, description: "Caderno de atividades pensado para crianças com TDAH e autistas, para momentos de aprendizado e interação em família.", price: "R$ 0,00 (provisório)", href: "#", checkoutHref: "#" },
    { provisional: true, category: "Maternidade Atípica — TDAH e TEA", extraCategories: ["Sono e Rotina Infantil"], name: "Rotina Mágica — TEA/TDAH", image: p4, description: "Material de apoio à rotina de crianças com TEA e TDAH, para ajudar a família a organizar as atividades do dia a dia.", price: "R$ 0,00 (provisório)", href: "#", checkoutHref: "#" },
    { provisional: true, category: "Cuidados com o Bebê e Maternidade", extraCategories: ["Desenvolvimento Infantil e Aprendizagem"], name: "Desfralde Sem Trauma", image: p1, description: "Material de apoio para a fase do desfralde, para ajudar a família a acompanhar essa etapa do desenvolvimento da criança.", price: "R$ 0,00 (provisório)", href: "#", checkoutHref: "#" },
    { provisional: true, category: "Sono e Rotina Infantil", name: "Rotina Sem Drama", image: p4, description: "Material voltado à organização da rotina infantil, para tornar os momentos do dia a dia da família mais leves.", price: "R$ 0,00 (provisório)", href: "#", checkoutHref: "#" },
    { provisional: true, category: "Alimentação e Nutrição", name: "Primeiros Sabores", image: p2, description: "Material sobre os primeiros alimentos da criança, para acompanhar a família na descoberta de novos sabores.", price: "R$ 0,00 (provisório)", href: "#", checkoutHref: "#" },
    { provisional: true, category: "Desenvolvimento Infantil e Aprendizagem", extraCategories: ["Jogos e Atividades"], name: "Pequenos Aprendizes", image: p3, description: "Material de atividades para o desenvolvimento infantil, para momentos de aprendizado da criança em casa.", price: "R$ 0,00 (provisório)", href: "#", checkoutHref: "#" },
    { provisional: true, category: "Jogos e Atividades", extraCategories: ["Desenvolvimento Infantil e Aprendizagem"], name: "Jogando e Lendo", image: p3, description: "Material que une jogos e leitura, para estimular o aprendizado da criança de forma lúdica em família.", price: "R$ 0,00 (provisório)", href: "#", checkoutHref: "#" },
    { provisional: true, category: "Desenvolvimento Infantil e Aprendizagem", name: "ABC Fácil", image: p3, description: "Material de apoio ao aprendizado do alfabeto, para acompanhar a criança nas primeiras descobertas das letras.", price: "R$ 0,00 (provisório)", href: "#", checkoutHref: "#" },
    { provisional: true, category: "Desenvolvimento Infantil e Aprendizagem", extraCategories: ["Jogos e Atividades"], name: "Kit Pedagógico Prende e Aprende", image: p3, description: "Kit pedagógico com atividades para apoiar o aprendizado infantil em casa ou em outros espaços educativos.", price: "R$ 0,00 (provisório)", href: "#", checkoutHref: "#" },
    { provisional: true, category: "Desenvolvimento Infantil e Aprendizagem", extraCategories: ["Jogos e Atividades"], name: "Kit Ohana Pedagógico", image: p3, description: "Kit pedagógico com materiais para momentos de aprendizado e atividades com a criança.", price: "R$ 0,00 (provisório)", href: "#", checkoutHref: "#" },
    { provisional: true, category: "Artesanato e Criatividade", extraCategories: ["Jogos e Atividades"], name: "Casinha dos Sonhos", image: p3, description: "Material criativo para montar e brincar, pensado para momentos de imaginação e diversão em família.", price: "R$ 0,00 (provisório)", href: "#", checkoutHref: "#" },
    { provisional: true, category: "Festas e Personalizados", name: "Kit Festa & Diversão", image: p2, description: "Kit com materiais para festas infantis, para ajudar a família a preparar comemorações especiais.", price: "R$ 0,00 (provisório)", href: "#", checkoutHref: "#" },
    { provisional: true, category: "Festas e Personalizados", name: "Foto Festa Express", image: p2, description: "Material voltado a festas e personalizados, para ajudar na preparação de comemorações e registros especiais.", price: "R$ 0,00 (provisório)", href: "#", checkoutHref: "#" },
    { provisional: true, category: "Festas e Personalizados", extraCategories: ["Artesanato e Criatividade"], name: "Convites Encantados", image: p2, description: "Material para criação de convites, para preparar comemorações da família de forma personalizada.", price: "R$ 0,00 (provisório)", href: "#", checkoutHref: "#" },
    { provisional: true, category: "Festas e Personalizados", name: "Kit Festa", image: p2, description: "Kit com materiais para festas, para apoiar a família na organização de comemorações infantis.", price: "R$ 0,00 (provisório)", href: "#", checkoutHref: "#" },
    { provisional: true, category: "Artesanato e Criatividade", extraCategories: ["Festas e Personalizados"], name: "Matrizes que Encantam", image: p3, description: "Coleção de matrizes para trabalhos criativos e personalizados, para projetos de artesanato.", price: "R$ 0,00 (provisório)", href: "#", checkoutHref: "#" },
    { provisional: true, category: "Culinária e Renda na Cozinha", extraCategories: ["Alimentação e Nutrição"], name: "Lancheiras Inteligentes", image: p2, description: "Material sobre o preparo de lanches para crianças, para ajudar a família a organizar a lancheira do dia a dia.", price: "R$ 0,00 (provisório)", href: "#", checkoutHref: "#" },
  ],
};
