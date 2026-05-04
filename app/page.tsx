import { AudienceSection } from "@/components/landing/AudienceSection";
import { BonusSection } from "@/components/landing/BonusSection";
import { FaqSection } from "@/components/landing/FaqSection";
import { FinalCta } from "@/components/landing/FinalCta";
import { Hero } from "@/components/landing/Hero";
import { MethodSection } from "@/components/landing/MethodSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { ProblemsSection } from "@/components/landing/ProblemsSection";
import { ProfessorSection } from "@/components/landing/ProfessorSection";
import { ScheduleSection } from "@/components/landing/ScheduleSection";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { StatsBar } from "@/components/landing/StatsBar";
import { TestimonialScreenshots } from "@/components/landing/TestimonialScreenshots";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <StatsBar />
      <MethodSection />
      <AudienceSection />
      <ProblemsSection />
      <TestimonialScreenshots />
      <ScheduleSection />
      <BonusSection />
      <ProfessorSection />
      <PricingSection />
      <FaqSection />
      <FinalCta />
      <SiteFooter />
    </main>
  );
}
