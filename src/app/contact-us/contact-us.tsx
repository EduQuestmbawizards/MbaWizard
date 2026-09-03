import ContactInfo from "@/components/contact-us/contact-info/ContactInfo";
import ContactForm from "@/components/contact-us/contact-form/ContactForm";
import MapLocations from "@/components/contact-us/map-locations/MapLocations";
import WhyMbaWizards from "@/components/shared/why-mba-wizards/WhyMbaWizards";
import MythVsFact from "@/components/shared/myth-vs-fact/MythVsFact";
import { admissionsMyths } from "@/data/myths/admissions-myths";
import CtaSection from "@/components/shared/cta-section/CtaSection";
import styles from "@/components/contact-us/contact-info/ContactInfo.module.css";

export default function ContactUsContent() {
  return (
    <>
      <div style={{ padding: "60px 0 80px", background: "var(--color-bg)" }}>
        <div className="container">
          <div className={styles.header}>
            <span className={styles.preTitle}>Get In Touch</span>
            <h1 className={styles.title}>
              Contact <span className={styles.titleHighlight}>MBA Wizards</span>
            </h1>
            <p className={styles.subtitle}>
              Have questions about GMAT Focus, GRE, or CAT 2026? Visit our Gurgaon centers in Galleria DLF Phase 4 or Sector 50, call our faculty counselors directly, or request an instant callback below.
            </p>
          </div>

          <div className={styles.grid}>
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </div>

      <MapLocations />
      <WhyMbaWizards exam="MBA & Test Prep" />
      <MythVsFact exam="Admissions & Coaching" items={admissionsMyths} />
      <CtaSection
        pretitle="Ready to Transform Your Score?"
        title="Schedule Your Free"
        titleHighlight="Diagnostic Assessment"
        description="Meet with our lead mentor Mr. Surinder Gupta (IIT Roorkee alumni) at our Gurgaon campus or online for an individual profile evaluation."
        primaryButtonText="Book Free Consultation"
      />
    </>
  );
}
