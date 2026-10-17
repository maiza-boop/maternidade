import { useState } from "react";
import type { Product } from "./types";
import { pending } from "./pending";
import { Button } from "@/components/ui/button";
import { DESCRIPTION_PREVIEW_LENGTH, descriptionPreview } from "./catalog";
import { useId } from "react";
import { ImageIcon } from "lucide-react";

type Labels = { learnLabel: string; buyLabel: string; readMore: string; readLess: string };


export function ProductCard({ product, labels }: { product: Product; labels: Labels }) {
  const { image, secondaryImage, category, name, description, price, href, checkoutHref } = product;
  const [open, setOpen] = useState(false);
  const descriptionId = useId();
  const book = product.kind === "book";
  const long = !book && description.length > DESCRIPTION_PREVIEW_LENGTH;
  return (
    <article className="product-card flex min-w-0 flex-col overflow-hidden rounded-lg border border-border bg-card shadow-soft transition-shadow hover:shadow-soft-lg">
      <div className="relative">
        {image ? <img src={image} alt={name} loading="lazy" width={1024} height={768} className={`aspect-[4/3] w-full ${book ? "object-contain" : "object-cover"}`} /> : <div role="img" aria-label={`Capa de ${name} aguardando envio`} className="flex aspect-[4/3] w-full items-center justify-center bg-muted text-muted-foreground"><ImageIcon aria-hidden="true" className="h-10 w-10" /></div>}
        {secondaryImage && <img src={secondaryImage} alt="" loading="lazy" width={1024} height={768} className="absolute bottom-2 right-2 h-12 w-12 rounded-md border-2 border-card object-cover shadow-soft" />}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-3.5">
        {!book && <span className="text-[11px] font-bold uppercase tracking-wide text-accent-strong">{category}</span>}
        <h3 className="font-display text-2xl font-bold leading-tight text-primary-strong">{name}</h3>
        <p id={descriptionId} className="break-words text-sm leading-relaxed text-foreground">
          {long && !open ? `${descriptionPreview(description)} ` : `${description} `}
          {long && (
            <Button variant="link" type="button" aria-controls={descriptionId} aria-expanded={open} onClick={() => setOpen((value) => !value)} className="inline h-auto whitespace-normal p-0 align-baseline text-sm font-semibold text-accent-strong underline underline-offset-2">
              {open ? labels.readLess : labels.readMore}
            </Button>
          )}
        </p>
        <div className="mt-auto border-t border-border pt-3">
          <p className="mb-2 font-display text-2xl font-bold text-primary-strong">{book ? product.status : price}</p>
          {!book && <div className="grid grid-cols-1 gap-2 min-[400px]:grid-cols-2">
            <Button asChild size="sm" variant="outline" className="h-9 rounded-full border-primary px-2 text-[11px] font-semibold text-primary-strong shadow-none">
              <a href={href} {...pending(href)}>{labels.learnLabel}</a>
            </Button>
            <Button asChild size="sm" className="h-9 rounded-full bg-accent-strong px-2 text-[11px] font-bold text-primary-foreground shadow-none hover:bg-accent-strong/90">
              <a href={checkoutHref} {...pending(checkoutHref)}>{labels.buyLabel}</a>
            </Button>
          </div>}
        </div>
      </div>
    </article>
  );
}
