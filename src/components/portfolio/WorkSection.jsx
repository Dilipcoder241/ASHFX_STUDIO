import { Reveal } from "./Reveal";

const projects = [
  {
    type: "video",
    src: "/videos/VideoPavwala.mp4",
    title: "Pavwala Project",
    tag: "Brand promo · On-location shoot",
    copy: "Full-day shoot and social-first edit for a busy business.",
    ratio: "9/16",
  },
  {
    type: "video",
    src: "/videos/VideoCafe.mp4",
    title: "Gustoso ATELIER",
    tag: "Raw → Edit · Timeline craft",
    copy: "Meet the man behind the kitchen - Chef Devang Ratandhara.",
    ratio: "9/16",
  },
  {
    type: "video",
    src: "/videos/VideoGrowFirm.mp4",
    title: "Growframe Solutions",
    tag: "Raw → Edit · Timeline craft",
    copy: "Created a markiting video for our client",
    ratio: "9/16",
  },
  {
    type: "video",
    src: "/videos/VideoGrowFirm2.mp4",
    title: "Growframe Solutions",
    tag: "Raw → Edit · Timeline craft",
    copy: "A marketing video for Growframe solutions.",
    ratio: "9/16",
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
                  {p.type === "video" ? (
                    <video
                      style={{
                        aspectRatio: p.ratio,
                      }}
                      src={p.src}
                      autoPlay
                      controls
                      muted
                      playsInline
                      preload="metadata"
                      className="w-full object-contain rounded-xl"
                    />
                  ) : (
                    <img
                      src={p.src}
                      alt={p.title}
                      loading="lazy"
                      className="h-80 w-full object-cover sm:h-[16rem]"
                    />
                  )}
                </div>

                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    {p.tag}
                  </p>

                  <h3 className="mt-2 font-display text-3xl tracking-wide text-blush">
                    {p.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {p.copy}
                  </p>
                </div>

              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
