import type { Product } from "./types";
import { Button } from "@/components/ui/button";

export function ProductCard({ image, secondaryImage, category, name, description, price, href, buttonLabel }: Product) {
  return (
    <article className="product-card group flex min-w-0 flex-col overflow-hidden rounded-lg border border-border bg-card shadow-soft transition-shadow hover:shadow-soft-lg">
      <div className="relative">
        <img src={image} alt={name} loading="lazy" width={1024} height={768} className="aspect-[4/3] w-full object-cover" />
        {secondaryImage && (
          <img
            src={secondaryImage}
            alt=""
            loading="lazy"
            width={1024}
            height={768}
            className="absolute bottom-2 right-2 h-12 w-12 rounded-md border-2 border-card object-cover shadow-soft"
          />
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-3.5">
        <span className="text-[10px] font-semibold uppercase text-muted-foreground">{category}</span>
        <h3 className="font-display text-2xl leading-tight text-primary">{name}</h3>
        <p className="text-xs leading-relaxed text-muted-foreground">{description}</p>
        <div className="mt-auto grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2 border-t border-border pt-3">
          {price ? <span className="min-w-0 font-display text-lg text-foreground">{price}</span> : <span />}
          <Button asChild size="sm" className="h-8 rounded-full px-3 text-[9px] font-semibold shadow-none">
            <a href={href} title={href === "#" ? "Endereço provisório — aguardando link definitivo" : undefined} onClick={href === "#" ? (event) => event.preventDefault() : undefined}>
              {buttonLabel}
            </a>
          </Button>
        </div>
      </div>
    </article>
  );
}
