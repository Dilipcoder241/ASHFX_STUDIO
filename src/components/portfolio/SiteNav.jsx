import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import navlogo from "@/assets/bg.jpg"

const links = [
  { href: "#intro", label: "Introduction" },
  { href: "#team", label: "Team" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "bg-ink/85 backdrop-blur-md shadow-lg" : "bg-transparent",
      )}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:flex sm:justify-between">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <img
            src={navlogo}
            alt="ASHFX STUDIO"
            className="h-9 w-auto shrink-0 object-contain rounded-2xl"
          />

          <span className="truncate font-display text-xl tracking-widest text-blush">
            ASHFX STUDIO
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-blush"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-primary px-5 py-2 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-transform hover:scale-105"
          >
            Hire us
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="shrink-0 rounded-md border border-border p-2 text-blush md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="animate-fade-in border-t border-border bg-ink/95 px-5 py-4 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm uppercase tracking-[0.18em] text-muted-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
