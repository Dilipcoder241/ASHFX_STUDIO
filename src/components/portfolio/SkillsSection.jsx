import { Reveal } from "./Reveal";

const skills = [
  { label: "Attention to Detail", value: 96 },
  { label: "Creative Motion Design", value: 92 },
  { label: "Visual Storytelling", value: 94 },
];

const tools = ["Premiere Pro", "After Effects", "Photoshop", "DaVinci Resolve"];

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:items-center">
        <div className="order-2 lg:order-1">
          <Reveal>
            <p className="display-xl text-[clamp(1.6rem,4vw,2.6rem)] text-blush">
              "A sharp eye for the smallest details combined with the ability to bring designs to
              life through creative motion and weave compelling stories through visual
              storytelling."
            </p>
          </Reveal>

          <div className="mt-10 space-y-6">
            {skills.map((s, i) => (
              <Reveal key={s.label} delay={i * 100}>
                <div>
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="text-sm font-semibold uppercase tracking-[0.18em] text-blush">
                      {s.label}
                    </span>
                    <span className="font-display text-lg text-primary">{s.value}%</span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-blush transition-[width] duration-1000 ease-out"
                      style={{ width: `${s.value}%` }}
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <Reveal>
            <div className="flex flex-col items-start gap-3 lg:items-end">
              <span className="display-xl bg-primary px-5 py-2 text-[clamp(2.5rem,7vw,5.5rem)] text-blush">
                Personal
              </span>
              <span className="display-xl bg-primary px-5 py-2 text-[clamp(2.5rem,7vw,5.5rem)] text-blush">
                Skills
              </span>
            </div>
          </Reveal>

          <div className="mt-10 flex flex-wrap gap-3 lg:justify-end">
            {tools.map((t, i) => (
              <Reveal key={t} delay={i * 80}>
                <span className="inline-block rounded-xl border border-primary/50 bg-card px-5 py-3 text-sm font-semibold uppercase tracking-widest text-blush transition-colors hover:bg-primary">
                  {t}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
