# Reprodução manual no WordPress / Elementor

Esta página não é um modelo JSON do Elementor. Sua reprodução é manual.

## Conteúdo
`src/data/categories/maternidade.ts` reúne marca, apresentação, categorias, textos laterais, produtos, chamada para afiliados, botões e rodapé. Duplique esse arquivo para preparar outra categoria. Cada produto possui imagem, imagem secundária opcional, categoria, nome, descrição, preço opcional, texto do botão e endereço individual.

Os endereços comerciais `#` estão identificados por comentários e pelo título exibido ao passar o ponteiro. Substitua-os pelos destinos reais antes de divulgar a página. Os preços de exemplo existentes foram preservados, não validados como preços comerciais. Os dois novos produtos fictícios têm `provisional: true`, nomes identificados e preços fictícios.

## Destinos das áreas
`src/data/areas.ts` centraliza os endereços de Maternidade, Fé na Família (Caminhando com Deus), Renda & Empreendedorismo e Afiliados. Altere o `href` da área para trocar seu destino; `communityHref` fica disponível para a futura comunidade própria. A lateral e o botão de afiliados usam esses endereços. Uma única página provisória reutilizável atende `/areas/fe-na-familia`, `/areas/renda-e-empreendedorismo` e `/areas/afiliados`, sem cadastro, comissões ou rastreamento. Adicione áreas gradualmente ao registro, com uma página correspondente antes de usá-las na navegação.

Cada produto mantém uma única descrição completa. O trecho inicial é calculado pela vitrine e o botão Leia mais/Ler menos expande o texto no próprio cartão, independentemente dos demais.

## Seções no Elementor
1. Cabeçalho verde: marca e navegação.
2. Apresentação: título, subtítulo, mensagem, introdução e foto de mãe e bebê.
3. Vitrine: coluna lateral de categorias e coluna principal de produtos.
4. Faixa de afiliados: fundo verde-escuro, título, texto de convite e botão em creme. Fica entre a vitrine e o rodapé, separada dos botões de compra dos produtos.
5. Rodapé verde: convite à comunidade, botão, marca e assinatura.

Use três colunas de produtos no computador, duas nas telas intermediárias e uma no celular. A lateral passa para cima dos produtos no celular. Os cartões devem ter a mesma altura por linha; foto em proporção 4:3, conteúdo flexível e botão na base. A foto secundária opcional fica sobre a foto principal.

## Estilos
As cinco cores oficiais, fontes, espaçamento entre seções, largura máxima e largura da lateral estão centralizados em `src/styles.css`. A tipografia existente foi mantida: Cormorant Garamond nos títulos e Karla nos textos. Reproduza esses valores nas configurações globais do Elementor.