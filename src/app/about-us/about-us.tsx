import { gmatTestimonials } from "@/data/testimonials-data";
import Story from "@/components/about-us/story/Story";
import VisionMission from "@/components/about-us/vision-mission/VisionMission";
import Goals from "@/components/about-us/goals/Goals";
import WhyMbaWizards from "@/components/shared/why-mba-wizards/WhyMbaWizards";
import MythVsFact from "@/components/shared/myth-vs-fact/MythVsFact";
import { aboutMyths } from "@/data/myths/about-myths";
import TestimonialsCarousel from "@/components/shared/testimonials-carousel/TestimonialsCarousel";
import AboutFaq from "@/components/about-us/faq/AboutFaq";
import CtaSection from "@/components/shared/cta-section/CtaSection";

export default function AboutUsContent() {
  return (
    <>
      <Story />
      <VisionMission />
      <Goals />
      <WhyMbaWizards exam="Global MBA" />
      <MythVsFact exam="MBA Wizards & EduQuest" items={aboutMyths} />
      <TestimonialsCarousel
        testimonials={gmatTestimonials}
        title="Voices of Excellence"
        titleHighlight="From Our Alumni"
      />
      <AboutFaq />
      <CtaSection
        pretitle="Built on 15+ Years of Academic Excellence"
        title="Experience Boutique Mentorship With"
        titleHighlight="EduQuest & MBA Wizards"
        description="Join small cohorts of 10–15 students mentored directly by IIT Roorkee alumni. Visit our Gurgaon DLF Galleria & Sector 50 centers or join live interactive classes from anywhere across India."
        primaryButtonText="Schedule Free Demo Session"
        secondaryButtonText="Speak Directly with Mentors"
      />
    </>
  );
}
