import type { Product } from "./types";

export function ProductCard({ image, secondaryImage, category, name, description, price, href }: Product) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-card shadow-soft transition-shadow hover:shadow-soft-lg">
      <div className="relative">
        <img src={image} alt={name} loading="lazy" width={1024} height={768} className="aspect-[4/3] w-full object-cover" />
        {secondaryImage && (
          <img
            src={secondaryImage}
            alt=""
            loading="lazy"
            width={1024}
            height={768}
            className="absolute -bottom-8 right-5 h-24 w-24 rounded-xl border-4 border-card object-cover shadow-soft sm:h-28 sm:w-28"
          />
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6 pt-8 sm:p-8 sm:pt-10">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">{category}</span>
        <h3 className="font-display text-3xl leading-tight text-primary">{name}</h3>
        <p className="leading-relaxed text-muted-foreground">{description}</p>
        <div className="mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-border pt-5">
          {price ? <span className="font-display text-2xl text-foreground">{price}</span> : <span />}
          <a
            href={href}
            className="rounded-full bg-primary px-6 py-3 text-xs font-semibold tracking-[0.2em] text-primary-foreground transition-colors hover:bg-sage"
          >
            CONHECER SOLUÇÃO
          </a>
        </div>
      </div>
    </article>
  );
}
