import ContactInfo from "@/components/contact-us/contact-info/ContactInfo";
import ContactForm from "@/components/contact-us/contact-form/ContactForm";
import MapLocations from "@/components/contact-us/map-locations/MapLocations";
import WhyMbaWizards from "@/components/shared/why-mba-wizards/WhyMbaWizards";
import MythVsFact from "@/components/shared/myth-vs-fact/MythVsFact";
import { contactMyths } from "@/data/myths/contact-myths";
import ContactFaq from "@/components/contact-us/faq/ContactFaq";
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
      <MythVsFact exam="Consultation & Centers" items={contactMyths} />
      <ContactFaq />
      <CtaSection
        pretitle="Visit Our Centers or Connect Live Online"
        title="Book an Unpressured 1-on-1"
        titleHighlight="Academic & Career Counseling Session"
        description="Drop by our DLF Galleria or Sector 50 Gurgaon classrooms, or hop on a live video diagnostic with Mr. Surinder Gupta (IIT Roorkee alumni). 100% objective, personalized advice."
        primaryButtonText="Book In-Person / Online Counseling"
        secondaryButtonText="Instant WhatsApp Booking"
      />
    </>
  );
}
