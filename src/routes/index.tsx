import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/category/CategoryPage";
import { maternidade } from "@/data/categories/maternidade";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maternidade — Incansáveis Mães" },
      { name: "description", content: maternidade.subtitle },
      { property: "og:title", content: "Maternidade — Incansáveis Mães" },
      { property: "og:description", content: maternidade.subtitle },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <CategoryPage data={maternidade} />,
});
