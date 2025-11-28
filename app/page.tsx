import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/layout/hero";
import { Features } from "@/components/layout/features";

import { Pricing } from "@/components/layout/pricing";
import { CostCalculator } from "@/components/layout/cost-calculator";
import { CaseStudies } from "@/components/layout/case-studies";
import { ImplementationProcess } from "@/components/layout/implementation-process";
import { About } from "@/components/layout/about";
import { Contact } from "@/components/layout/contact";
import { Footer } from "@/components/layout/footer";
import { SectionDivider } from "@/components/ui/section-divider";
import { TechBackground } from "@/components/ui/tech-background";
import { ProjectsShowcase } from "@/components/layout/projects-showcase";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <TechBackground />
      <Navbar />
      <Hero />
      <SectionDivider variant="gradient" />
      <div className="bg-gradient-to-b from-background via-muted/20 to-background">
        <Features />
      </div>
      <SectionDivider variant="gradient" />
      <ProjectsShowcase />
      <SectionDivider variant="gradient" />
      <Pricing />
      <SectionDivider variant="gradient" />
      <CostCalculator />
      <SectionDivider variant="gradient" />
      <CaseStudies />
      <SectionDivider variant="gradient" />
      <ImplementationProcess />
      <SectionDivider variant="gradient" />
      <div className="bg-gradient-to-b from-background via-muted/30 to-background">
        <About />
      </div>
      <SectionDivider variant="gradient" />
      <Contact />
      <Footer />
    </main>
  );
}
