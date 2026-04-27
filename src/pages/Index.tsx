import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { StatsSection } from "@/components/StatsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { EducationSection } from "@/components/EducationSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ProcessSection } from "@/components/ProcessSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ScrollReveal>
        <AboutSection />
      </ScrollReveal>
      <ScrollReveal>
        <StatsSection />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={0.1}>
        <SkillsSection />
      </ScrollReveal>
      <ScrollReveal direction="left">
        <ExperienceSection />
      </ScrollReveal>
      <ScrollReveal>
        <ProjectsSection />
      </ScrollReveal>
      <ScrollReveal direction="up">
        <ProcessSection />
      </ScrollReveal>
      <ScrollReveal direction="right">
        <EducationSection />
      </ScrollReveal>
      {/* <ScrollReveal>
        <TestimonialsSection />
      </ScrollReveal> */}
      <ScrollReveal>
        <ContactSection />
      </ScrollReveal>
      <Footer />
    </div>
  );
};

export default Index;
