import cafe from "@/assets/work-cafe.jpg";
import edit from "@/assets/work-edit.jpg";
import { Reveal } from "./Reveal";

const projects = [
  {
    img: cafe,
    title: "Global Tea Cafe",
    tag: "Brand promo · On-location shoot",
    copy: "Full-day shoot and social-first edit for a busy cafe launch — storefront b-roll, product macros and vertical reels.",
  },
  {
    img: edit,
    title: "Podcast Reels",
    tag: "Raw → Edit · Timeline craft",
    copy: "Multicam podcast episodes cut into punchy vertical clips with captions, sound design and colour grading.",
  },
 
];

export function WorkSection() {
  return (
    <section id="work" className="relative bg-ink/50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal>
          <h2 className="display-xl text-center text-[clamp(2.5rem,8vw,6rem)] text-blush">
            Work Experience
          </h2>
        </Reveal>

        <div className="mt-14 flex flex-wrap justify-center gap-8">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 120}>
              <article className="group overflow-hidden rounded-3xl border border-border bg-card w-80">
                <div className="overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    width={300}
                    height={256}
                    className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[16rem]"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    {p.tag}
                  </p>
                  <h3 className="mt-2 font-display text-3xl tracking-wide text-blush">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.copy}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
