import { Reveal } from "./Reveal";

export function IntroSection() {
  return (
    <section id="intro" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5">
        <Reveal>
          <h2 className="display-xl text-center text-[clamp(2.75rem,9vw,7rem)] text-blush">
            Introduction
          </h2>
        </Reveal>

        <div className="mt-12 space-y-6 text-base leading-relaxed text-foreground/85 sm:text-lg">
          <Reveal delay={80}>
            <p>
              We are a passionate team of creative video editors dedicated to transforming ideas into
              visually engaging stories. Our expertise includes cinematic edits, social media
              content, promotional videos, reels, YouTube videos, and commercial projects.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <p>
              With a strong focus on creativity, precision, and timely delivery, we strive to produce
              high-quality videos that capture attention and leave a lasting impression. Every
              project is handled with professionalism, ensuring that our clients receive content that
              matches their vision and exceeds expectations.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <blockquote className="border-l-4 border-gold pl-5 text-lg font-semibold text-gold sm:text-2xl">
              Our mission is simple: to create impactful videos that inspire, entertain, and help
              brands, creators, and businesses stand out in today's digital world.
            </blockquote>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {[
            { k: "50+", v: "Projects delivered" },
            { k: "4", v: "Specialists on the team" },
            { k: "24h", v: "Typical first cut" },
          ].map((s, i) => (
            <Reveal key={s.k} delay={i * 100}>
              <div className="rounded-2xl border border-border bg-card/60 p-6 text-center">
                <p className="font-display text-4xl text-blush">{s.k}</p>
                <p className="mt-1 text-sm uppercase tracking-widest text-muted-foreground">{s.v}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
