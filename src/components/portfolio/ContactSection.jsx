import { Instagram, Phone } from "lucide-react";
import { Reveal } from "./Reveal";

export function ContactSection() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:items-center">
        <div>
          <Reveal>
            <h2 className="text-[clamp(3rem,8vw,6rem)] font-bold leading-[0.95] text-blush">
              Let's
              <br />
              collaborate
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <p className="mt-6 max-w-md text-base text-muted-foreground">
              Got footage, an idea, or a launch date? Send it over and we'll come back with a plan
              and a first cut.
            </p>
          </Reveal>

          <div className="mt-10 space-y-4">
            <Reveal delay={160}>
              <a
                href="https://instagram.com/_ashfx_18"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 text-lg text-blush"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-blush/50 transition-colors group-hover:bg-primary">
                  <Instagram className="h-5 w-5" />
                </span>
                <span className="underline decoration-blush/40 underline-offset-4">_ashfx_18</span>
              </a>
            </Reveal>
            {["+91 63063 58614", "+91 81603 94569"].map((tel, i) => (
              <Reveal key={tel} delay={220 + i * 70}>
                <a
                  href={`tel:${tel.replace(/\s/g, "")}`}
                  className="group flex items-center gap-4 text-lg text-blush"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-ink transition-colors group-hover:bg-primary">
                    <Phone className="h-5 w-5" />
                  </span>
                  {tel}
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={360}>
            <a
              href="https://instagram.com/_ashfx_18"
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex rounded-full bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-transform hover:scale-105"
            >
              Start a project
            </a>
          </Reveal>
        </div>

        <Reveal delay={120} className="justify-self-center">
          <div className="relative aspect-[9/17] w-[16rem] rounded-[2.5rem] border-4 border-blush/70 bg-ink p-3 shadow-2xl sm:w-[19rem]">
            <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-blush/40" />
            <div className="grid h-[calc(100%-1.5rem)] place-items-center rounded-[1.75rem] bg-black">
              <div className="grid h-36 w-36 place-items-center rounded-full border-2 border-primary bg-gradient-to-br from-primary/40 to-ink">
                <span className="font-display text-5xl text-blush">ASH</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <footer className="mx-auto mt-20 max-w-7xl border-t border-border px-5 pt-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} AshFX Studio · Creative video editing
      </footer>
    </section>
  );
}
