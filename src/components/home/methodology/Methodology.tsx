import styles from "./Methodology.module.css";

const steps = [
  {
    step: "01",
    title: "Diagnostic & Ability Profiling",
    description:
      "We benchmark your current baseline across sub-sections to build a hyper-personalized roadmap rather than a generic syllabus.",
  },
  {
    step: "02",
    title: "99th Percentile Mentorship",
    description:
      "Train with elite faculty holding 20+ years of dedicated experience and personal top-percentile track records.",
  },
  {
    step: "03",
    title: "AI Analytics & Adaptive Drills",
    description:
      "Our diagnostic algorithms break down timing per question, error patterns by difficulty tier, and readiness for test day.",
  },
  {
    step: "04",
    title: "Strategic Admissions Narrative",
    description:
      "Convert your competitive test score into an offer letter with comprehensive resume crafting, essay editing, and mock interviews.",
  },
];

export default function Methodology() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.preTitle}>Our Proven System</span>
          <h2 className={styles.title}>
            The MBA Wizards <span className={styles.titleHighlight}>Advantage</span>
          </h2>
          <p className={styles.subtitle}>
            A structured, 4-stage pedagogical framework engineered to turn ambitious aspirants into top-tier admits.
          </p>
        </div>

        <div className={styles.grid}>
          {steps.map((item) => (
            <div key={item.step} className={styles.card}>
              <span className={styles.stepNumber}>{item.step}</span>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
