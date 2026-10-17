import { ProductCard } from "./ProductCard";
import type { CategoryData } from "./types";
import { pending } from "./pending";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Heart } from "lucide-react";
import { useState } from "react";
import { ConfiguredLink } from "./ConfiguredLink";
import { filterProducts } from "./catalog";

export function CategoryPage({ data }: { data: CategoryData }) {
  const [selected, setSelected] = useState<string | null>(null);
  const products = filterProducts(data.products, selected);
  const filters = [{ name: data.allLabel, value: null as string | null, image: undefined as string | undefined }, ...data.categories.map((c) => ({ name: c.name, value: c.name as string | null, image: c.image }))];
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground">
        <div className="site-width grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3 sm:flex sm:justify-between">
          <ConfiguredLink href="/" className="min-w-0">
            <span className="flex items-center gap-1.5 font-display text-2xl leading-none">
              {data.brand.logo && <img src={data.brand.logo} alt="" className="h-8 w-8 object-contain" />}
              {data.brand.name}<Heart className="h-3 w-3 shrink-0 fill-gold text-gold" />
            </span>
            <span className="mt-1 block text-[10px]">{data.brand.tagline}</span>
          </ConfiguredLink>
          <nav aria-label="Navegação principal" className="col-span-2 flex flex-wrap gap-x-6 gap-y-2 sm:col-span-1">
            {data.navigation.map((item) => <Button key={item.label} asChild variant="link" className="h-auto p-0 text-xs text-primary-foreground"><ConfiguredLink href={item.href}>{item.label}</ConfiguredLink></Button>)}
          </nav>
        </div>
      </header>

      <main className="site-width">
        <section id="maternidade" className="category-intro grid items-center gap-5 py-5 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:gap-10">
          <div className="min-w-0">
            <div className="mb-2 flex items-center gap-2 text-[11px] font-semibold uppercase text-accent-strong"><span className="h-px w-5 bg-gold" />{data.hero.eyebrow}</div>
            <h1 className="font-display text-4xl font-bold uppercase text-primary-strong sm:text-5xl">{data.title}</h1>
            <p className="mt-2 max-w-lg text-sm text-foreground">{data.subtitle}</p>
            <p className="mt-3 font-display text-xl italic text-primary-strong">{data.hero.note}</p>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-foreground">{data.intro}</p>
          </div>
          <div className="rounded-2xl border border-gold/40 p-2">
            <img src={data.hero.image} alt={data.hero.alt} width={1024} height={768} fetchPriority="high" className="aspect-[16/9] max-h-56 w-full rounded-xl object-cover" />
          </div>
        </section>

        <div className="catalog-layout grid items-start gap-6 pb-12">
          <aside id="categorias" className="min-w-0 rounded-lg border border-border p-3">
            <h2 className="mb-3 font-display text-2xl font-bold text-primary-strong">{data.categoriesTitle}</h2>
            <nav aria-label={data.categoriesTitle} className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-1">
              {filters.map((f) => { const active = selected === f.value; return <Button key={f.name} type="button" aria-pressed={active} onClick={() => setSelected(f.value)} variant={active ? "default" : "outline"} className={`h-auto min-h-11 justify-start gap-2 whitespace-normal px-2 py-1.5 text-left text-xs font-semibold shadow-none ${active ? "bg-primary-strong" : "text-primary-strong"}`}>
                {f.image && <img src={f.image} alt="" loading="lazy" className="h-8 w-10 shrink-0 rounded object-cover" />}
                <span className="min-w-0">{f.name}</span>
              </Button>; })}
            </nav>
            <div className="mt-3 grid gap-3 sm:grid-cols-2 md:grid-cols-1">
              {data.sidebarNotes.map((note) => <Button key={note.title} asChild variant="link" className="block h-auto whitespace-normal rounded-none border-t-2 border-accent-strong/50 p-0 pt-3 text-left no-underline hover:no-underline"><ConfiguredLink href={note.href} className="group"><h3 className="flex items-start justify-between gap-2 text-xs font-bold uppercase text-accent-strong group-hover:underline">{note.title}<ArrowUpRight className="shrink-0" aria-hidden="true" /></h3><p className="mt-1 text-xs font-normal leading-relaxed text-foreground">{note.text}</p></ConfiguredLink></Button>)}
            </div>
          </aside>
          <section id="produtos" className="min-w-0" aria-labelledby="products-title">
            <p className="text-[11px] font-bold uppercase text-accent-strong">{data.showcase.eyebrow}</p>
            <h2 id="products-title" className="mb-4 font-display text-3xl font-bold text-primary-strong">{data.showcase.title}{selected && <span className="text-xl font-semibold"> · {selected}</span>}</h2>
            <div className="product-grid grid items-stretch gap-4">
              {products.map((p, index) => <ProductCard key={`${p.name}-${index}`} product={p} labels={data.showcase} />)}
            </div>
            {products.length === 0 && <p className="rounded-lg border border-dashed border-border p-6 text-center text-sm text-foreground">{data.showcase.emptyMessage}</p>}
          </section>
        </div>

        <section id="afiliados" aria-labelledby="affiliate-title" className="affiliate-band mb-10 rounded-2xl bg-primary-strong px-5 py-8 text-primary-foreground sm:px-8 sm:py-10">
          <div className="grid items-center gap-6 md:grid-cols-[minmax(0,1fr)_auto]">
            <div className="min-w-0">
              <p className="mb-2 flex items-center gap-2 text-[11px] font-bold uppercase tracking-wide text-accent">
                <span className="h-px w-5 bg-gold" />
                {data.affiliate.eyebrow}
              </p>
              <h2 id="affiliate-title" className="font-display text-3xl font-bold uppercase leading-tight sm:text-4xl">{data.affiliate.title}</h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-primary-foreground/90">{data.affiliate.text}</p>
            </div>
            <Button asChild className="w-full rounded-full bg-background px-7 py-6 text-[11px] font-bold uppercase text-primary-strong shadow-soft-lg hover:bg-background/90 md:w-auto">
              <ConfiguredLink href={data.affiliate.href} {...pending(data.affiliate.href, "Endereço da página do programa ainda não configurado")}>{data.affiliate.buttonLabel}</ConfiguredLink>
            </Button>
          </div>
        </section>
      </main>

      <footer id="comunidade" className="bg-primary text-primary-foreground">
        <div className="site-width py-7">
          <div className="grid items-center gap-5 md:grid-cols-[minmax(0,1fr)_auto]">
            <div className="min-w-0"><h2 className="font-display text-2xl uppercase">{data.footer.title}</h2><p className="mt-2 max-w-xl text-xs leading-relaxed">{data.footer.text}</p><p className="mt-2 text-[10px] text-primary-foreground/80">{data.footer.linkLabel}</p></div>
            <Button asChild variant="secondary" className="w-fit rounded-full px-5 text-[10px] uppercase shadow-none"><a href={data.footer.href} title={data.footer.href === "#" ? "Endereço provisório — aguardando link da comunidade" : undefined} onClick={data.footer.href === "#" ? (event) => event.preventDefault() : undefined}>{data.footer.buttonLabel}</a></Button>
          </div>
          <div className="mt-6 border-t border-gold/30 pt-4"><p className="font-display text-xl">{data.brand.name}</p><p className="mt-1 text-[10px]">{data.brand.tagline} · {data.footer.signature}</p></div>
        </div>
      </footer>
    </div>
  );
}
