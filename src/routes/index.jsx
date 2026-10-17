import { SiteNav } from "@/components/portfolio/SiteNav";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { IntroSection } from "@/components/portfolio/IntroSection";
import { TeamSection } from "@/components/portfolio/TeamSection";
import { SkillsSection } from "@/components/portfolio/SkillsSection";
import { WorkSection } from "@/components/portfolio/WorkSection";
import { ContactSection } from "@/components/portfolio/ContactSection";

export default function App() {
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