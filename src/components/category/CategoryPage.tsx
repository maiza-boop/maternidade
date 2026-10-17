import { ProductCard } from "./ProductCard";
import type { CategoryData } from "./types";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export function CategoryPage({ data }: { data: CategoryData }) {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground">
        <div className="site-width grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3 sm:flex sm:justify-between">
          <a href="/" className="min-w-0">
            <span className="flex items-center gap-1.5 font-display text-2xl leading-none">
              {data.brand.logo && <img src={data.brand.logo} alt="" className="h-8 w-8 object-contain" />}
              {data.brand.name}<Heart className="h-3 w-3 shrink-0 fill-gold text-gold" />
            </span>
            <span className="mt-1 block text-[10px]">{data.brand.tagline}</span>
          </a>
          <nav aria-label="Navegação principal" className="col-span-2 flex flex-wrap gap-x-6 gap-y-2 sm:col-span-1">
            {data.navigation.map((item) => <Button key={item.label} asChild variant="link" className="h-auto p-0 text-xs text-primary-foreground"><a href={item.href}>{item.label}</a></Button>)}
          </nav>
        </div>
      </header>

      <main className="site-width">
        <section id="maternidade" className="category-intro grid items-center gap-7 py-7 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:gap-16">
          <div className="min-w-0">
            <div className="mb-2 flex items-center gap-2 text-[10px] uppercase text-primary"><span className="h-px w-5 bg-gold" />{data.hero.eyebrow}</div>
            <h1 className="font-display text-4xl uppercase text-primary sm:text-5xl">{data.title}</h1>
            <p className="mt-2 max-w-lg text-sm text-muted-foreground">{data.subtitle}</p>
            <p className="mt-3 font-display text-xl italic text-primary">{data.hero.note}</p>
            <p className="mt-4 max-w-lg text-xs leading-relaxed text-muted-foreground">{data.intro}</p>
          </div>
          <div className="rounded-2xl border border-gold/40 p-2">
            <img src={data.hero.image} alt={data.hero.alt} width={1024} height={768} fetchPriority="high" className="aspect-[16/9] w-full rounded-xl object-cover" />
          </div>
        </section>

        <div className="catalog-layout grid items-start gap-6 pb-12">
          <aside id="categorias" className="min-w-0 rounded-lg border border-border p-3">
            <h2 className="mb-3 font-display text-2xl text-primary">{data.categoriesTitle}</h2>
            <nav aria-label={data.categoriesTitle} className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-1">
              {data.categories.map((category, index) => <Button key={category.name} asChild variant={index === 0 ? "default" : "outline"} className="h-auto min-h-11 justify-start gap-2 whitespace-normal px-2 py-1.5 text-left text-[11px] shadow-none">
                <a href={category.href} title={category.href === "#" ? "Endereço provisório — aguardando link definitivo" : undefined} onClick={category.href === "#" ? (event) => event.preventDefault() : undefined}>
                  {category.image && <img src={category.image} alt="" loading="lazy" className="h-8 w-10 shrink-0 rounded object-cover" />}
                  <span className="min-w-0">{category.name}</span>
                </a>
              </Button>)}
            </nav>
            <div className="mt-3 grid gap-3 sm:grid-cols-2 md:grid-cols-1">
              {data.sidebarNotes.map((note) => <div key={note.title} className="border-t border-gold/40 pt-3"><h3 className="text-[10px] font-semibold uppercase text-primary">{note.title}</h3><p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">{note.text}</p></div>)}
            </div>
          </aside>
          <section id="produtos" className="min-w-0" aria-labelledby="products-title">
            <p className="text-[10px] font-semibold uppercase text-gold">{data.showcase.eyebrow}</p>
            <h2 id="products-title" className="mb-4 font-display text-3xl text-primary">{data.showcase.title}</h2>
            <div className="product-grid grid items-stretch gap-4">
              {data.products.map((p, index) => <ProductCard key={`${p.name}-${index}`} {...p} />)}
            </div>
          </section>
        </div>
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
