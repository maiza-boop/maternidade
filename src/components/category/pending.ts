import type { MouseEvent } from "react";

/** Atributos de segurança para links que ainda aguardam endereço definitivo ("#"). */
export function pending(href: string, title = "Link ainda não configurado") {
  return href === "#" ? { title, onClick: (event: MouseEvent) => event.preventDefault() } : {};
}
