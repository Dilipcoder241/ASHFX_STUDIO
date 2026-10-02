import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { IntroSection } from "@/components/portfolio/IntroSection";
import { TeamSection } from "@/components/portfolio/TeamSection";
import { SkillsSection } from "@/components/portfolio/SkillsSection";
import { WorkSection } from "@/components/portfolio/WorkSection";
import { ContactSection } from "@/components/portfolio/ContactSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AshFX Studio — Creative Video Editing Portfolio" },
      {
        name: "description",
        content:
          "Cinematic edits, reels, YouTube and commercial video projects by AshFX Studio — a team of creative video editors and motion designers.",
      },
      { property: "og:title", content: "AshFX Studio — Creative Video Editing Portfolio" },
      {
        property: "og:description",
        content:
          "Cinematic edits, reels, YouTube and commercial video projects crafted with precision and delivered on time.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="overflow-x-hidden bg-background">
      <SiteNav />
      <HeroSection />
      <IntroSection />
      <TeamSection />
      <SkillsSection />
      <WorkSection />
      <ContactSection />
    </main>
  );
}
