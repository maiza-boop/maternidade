# Página de categoria "Maternidade" — Incansáveis Mães

Página editorial e acolhedora (não uma loja tradicional), feita como modelo reutilizável para outras categorias.

## Visual
- Fundo creme/off-white, verde sálvia, verde profundo, bege, detalhes dourados finos.
- Títulos em serifa elegante (Cormorant Garamond), textos em sans limpa (Karla).
- Muito espaço em branco, cantos levemente arredondados, sombras muito suaves.
- Totalmente adaptada para celular.

## Estrutura
1. **Cabeçalho**: logo "Incansáveis Mães" à esquerda, botão "Voltar para categorias" à direita.
2. **Título da categoria**: "MATERNIDADE" + subtítulo, com pequeno ornamento dourado.
3. **Introdução**: bloco editorial com o texto fornecido.
4. **Grade de produtos**: 4 produtos de exemplo (1 coluna no celular, 2 no desktop), cada um como uma "pequena matéria": imagem principal, segunda imagem opcional, categoria, nome, descrição curta, preço opcional e botão "CONHECER SOLUÇÃO".
5. Rodapé simples com a marca.

Imagens de exemplo geradas em tom suave (maternidade, tons creme/sálvia) para os 4 produtos.

## Fácil de editar / duplicar
Todo o conteúdo (título, subtítulo, introdução, produtos) fica em um único arquivo de dados por categoria. Para criar outra categoria, basta duplicar esse arquivo e trocar os textos e imagens.

## Detalhes técnicos
- `src/data/categories/maternidade.ts`: objeto `{ title, subtitle, intro, products[] }`.
- `src/components/category/CategoryPage.tsx` (template), `ProductCard.tsx` (props: image, secondaryImage?, category, name, description, price?, ctaHref).
- `src/routes/index.tsx` renderiza Maternidade; head() com título/descrição próprios.
- Tokens de cor em oklch em `src/styles.css`; fontes via `<link>` no root.
