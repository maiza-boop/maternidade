import { Link } from "@tanstack/react-router";
import { forwardRef, type ComponentPropsWithoutRef } from "react";

/** Keeps configurable external addresses and temporary internal pages interchangeable. */
export const ConfiguredLink = forwardRef<HTMLAnchorElement, ComponentPropsWithoutRef<"a"> & { href: string }>(
  function ConfiguredLink({ href, children, ...props }, ref) {
    if (href === "/") return <Link ref={ref} to="/" {...props}>{children}</Link>;
    if (href.startsWith("/areas/")) {
      return <Link ref={ref} to="/areas/$area" params={{ area: href.slice("/areas/".length) }} {...props}>{children}</Link>;
    }
    return <a ref={ref} href={href} {...props}>{children}</a>;
  },
);