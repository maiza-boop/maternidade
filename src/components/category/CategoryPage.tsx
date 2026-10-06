import { ProductCard } from "./ProductCard";
import type { CategoryData } from "./types";

export function CategoryPage({ data }: { data: CategoryData }) {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-5 sm:px-8">
          <a href="/" className="truncate font-display text-2xl text-primary sm:text-3xl">
            Incansáveis <span className="italic text-gold">Mães</span>
          </a>
          <a
            href="#"
            className="shrink-0 rounded-full border border-primary/30 px-4 py-2 text-xs font-medium text-primary transition-colors hover:bg-secondary sm:text-sm"
          >
            ← <span className="hidden sm:inline">Voltar para </span>categorias
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 sm:px-8">
        <section className="py-16 text-center sm:py-24">
          <div className="mx-auto mb-6 flex items-center justify-center gap-3 text-gold">
            <span className="h-px w-10 bg-gold/60" />✦<span className="h-px w-10 bg-gold/60" />
          </div>
          <h1 className="font-display text-5xl uppercase tracking-[0.15em] text-primary sm:text-7xl">{data.title}</h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl">{data.subtitle}</p>
        </section>

        <section className="mx-auto mb-16 max-w-3xl rounded-2xl bg-secondary px-6 py-10 text-center sm:mb-24 sm:px-14">
          <p className="font-display text-2xl italic leading-relaxed text-secondary-foreground sm:text-3xl">{data.intro}</p>
        </section>

        <section className="grid gap-10 pb-24 md:grid-cols-2 md:gap-12">
          {data.products.map((p) => (
            <ProductCard key={p.name} {...p} />
          ))}
        </section>
      </main>

      <footer className="border-t border-border py-10 text-center text-sm text-muted-foreground">
        <span className="font-display text-lg text-primary">Incansáveis Mães</span> · com carinho, para cada fase.
      </footer>
    </div>
  );
}
