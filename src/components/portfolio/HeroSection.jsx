import { ArrowDown, Play } from "lucide-react";
import heroBg from "@/assets/bg.jpg";

export function HeroSection() {
  return (
    <section id="top" className="relative isolate flex min-h-screen items-center overflow-hidden">
      <img
        src={heroBg}
        alt=""
        width={1920}
        height={1080}
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/70 via-background/80 to-background" />

      <div className="mx-auto w-full max-w-7xl px-5 pt-32 pb-20">
        <p className="animate-fade-in font-display text-sm tracking-[0.5em] text-primary sm:text-base">
          CREATIVE VIDEO EDITING COLLECTIVE
        </p>
        <h1 className="display-xl mt-4 animate-fade-in text-[clamp(3.5rem,17vw,15rem)] text-blush">
          Portfolio
        </h1>
        <p className="mt-6 max-w-xl animate-fade-in text-base leading-relaxed text-muted-foreground sm:text-lg">
          Cinematic edits, reels, YouTube videos and commercial projects — crafted with precision,
          delivered on time.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-transform hover:scale-105"
          >
            <Play className="h-4 w-4" /> See our work
          </a>
          <a
            href="#intro"
            className="inline-flex items-center gap-2 rounded-full border border-blush/40 px-7 py-3 text-sm font-semibold uppercase tracking-widest text-blush transition-colors hover:bg-blush/10"
          >
            <ArrowDown className="h-4 w-4" /> Explore
          </a>
        </div>
      </div>
    </section>
  );
}
