import { HeroSection } from "@/components/sections/HeroSection";
import { ContextStrip } from "@/components/sections/ContextStrip";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { BusinessIntelligenceSection } from "@/components/sections/BusinessIntelligenceSection";
import { WhyHicTechSection } from "@/components/sections/WhyHicTechSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CTASection } from "@/components/sections/CTASection";
import { ConsultingSection } from "@/components/sections/ConsultingSection";
import { ExpertiseSection } from "@/components/sections/ExpertiseSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { CTASectionNew } from "@/components/sections/CTASectionNew";

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <ContextStrip /> */}
      <ConsultingSection />
      <ExpertiseSection />
      <ServicesSection />
      <TestimonialsSection/>
      <PortfolioSection/>
      <BlogSection />
      <CTASectionNew />
    </>
  );
}

