import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Building2, Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

const links = [
  { to: "/", label: "Home" },
  { to: "/rentals", label: "Rentals" },
  { to: "/gym", label: "Gym" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-card">
            <Building2 className="size-5" />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-base font-extrabold tracking-tight text-foreground">
              Dear Mama
            </span>
            <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Apartment · Thika
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="rounded-full px-4 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
              activeProps={{ className: "bg-secondary text-primary" }}
              activeOptions={{ exact: link.to === "/" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href={SITE.phoneTel} className="gap-2">
              <Phone className="size-4" />
              {SITE.phoneDisplay}
            </a>
          </Button>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center rounded-xl border border-border bg-card text-foreground md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-4 pb-4 pt-2 md:hidden">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-3 text-sm font-semibold text-foreground/85 transition-colors hover:bg-secondary hover:text-primary"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: link.to === "/" }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={SITE.phoneTel}
            className="mt-2 flex items-center gap-2 rounded-lg px-3 py-3 text-sm font-semibold text-primary"
          >
            <Phone className="size-4" />
            {SITE.phoneDisplay}
          </a>
        </nav>
      )}
    </header>
  );
}
