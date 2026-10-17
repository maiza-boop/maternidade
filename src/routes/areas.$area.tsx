import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { findArea } from "@/data/areas";
import { maternidade } from "@/data/categories/maternidade";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/areas/$area")({
  loader: ({ params }) => {
    const area = findArea(params.area);
    if (!area || area.slug === "maternidade") throw notFound();
    return area;
  },
  head: ({ loaderData }) => {
    const title = `${loaderData?.title ?? "Área indisponível"} — Incansáveis Mães`;
    const description = loaderData?.description ?? "Esta área não está disponível.";
    return { meta: [
      { title }, { name: "description", content: description },
      { property: "og:title", content: title }, { property: "og:description", content: description },
      { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
    ] };
  },
  component: ProvisionalArea,
});

function ProvisionalArea() {
  const area = Route.useLoaderData();
  return <div className="min-h-screen bg-background">
    <header className="bg-primary text-primary-foreground"><div className="site-width flex flex-wrap items-center justify-between gap-4 py-5">
      <Link to="/" className="font-display text-2xl">{maternidade.brand.name}</Link>
      <Button asChild variant="link" className="p-0 text-primary-foreground"><Link to="/"><ArrowLeft aria-hidden="true" />Voltar à vitrine</Link></Button>
    </div></header>
    <main className="site-width py-10 sm:py-16">
      <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase text-accent-strong"><span className="h-px w-5 bg-gold" />Página provisória</p>
      <h1 className="font-display text-4xl font-bold text-primary-strong sm:text-5xl">{area.title}</h1>
      <p className="mt-5 max-w-xl leading-relaxed">{area.description}</p>
      <p className="mt-3 max-w-xl text-sm text-muted-foreground">Esta página está em preparação. O conteúdo e os próximos passos serão disponibilizados aqui em breve.</p>
      <Button asChild variant="outline" className="mt-8 border-primary text-primary-strong"><Link to="/">Explorar a vitrine de Maternidade<ArrowUpRight aria-hidden="true" /></Link></Button>
      <img src={maternidade.hero.image} alt={maternidade.hero.alt} className="mt-10 aspect-[16/9] max-h-72 w-full rounded-lg object-cover" />
    </main>
  </div>;
}