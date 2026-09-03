import styles from "./MethodologySteps.module.css";

const steps = [
  {
    step: "STEP 1",
    title: "Self-Assessment & Diagnostic Questionnaire",
    text: "We evaluate students on both IQ and EQ dimensions through structured psychological tests and 1-on-1 expert interaction rather than generic diagnostic mocks. We uncover existing study habits and correct subconscious cognitive traps.",
  },
  {
    step: "STEP 2",
    title: "The Litmus Test & Custom Session Planner",
    text: "Following self-assessment, students take our proprietary Litmus Test to determine subject-wise granular gaps. Each student receives an individualized code to track progress across common foundational concepts and distinct gap modules.",
  },
  {
    step: "STEP 3",
    title: "Individualized Practice & Sectional Validation",
    text: "Every student receives practice problem sets calibrated to their current capability. Once key benchmarks are achieved, random multi-difficulty sectional tests validate retention and reveal hidden micro-gaps.",
  },
  {
    step: "STEP 4",
    title: "Mid-Cycle Transformation (Concept → Accuracy → Speed)",
    text: "A structured three-stage evolution: First, master concepts from basic to difficult. Second, eliminate all careless errors with doubled practice volume. Third, execute under strict real-time countdown constraints.",
  },
  {
    step: "FINAL STEP",
    title: "Full-Length Testing & Mental Toughness Conditioning",
    text: "Simulations across four difficulty tiers drawn from our 50,000+ question bank. Continuous reviews and makeup clinics condition you to remain emotionally calm, sharp, and confident under peak exam pressure.",
  },
];

export default function MethodologySteps() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.preTitle}>Our 5-Stage Blueprint</span>
          <h2 className={styles.title}>
            The Five Pillars of <span className={styles.titleHighlight}>Student Evolution</span>
          </h2>
          <p className={styles.subtitle}>
            From baseline assessment to high-pressure full-length exam simulations, see how our methodology systematically builds 99th-percentile test takers.
          </p>
        </div>

        <div className={styles.stepsTimeline}>
          {steps.map((s) => (
            <div key={s.step} className={styles.stepCard}>
              <div className={styles.stepBadge}>{s.step}</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{s.title}</h3>
                <p className={styles.stepText}>{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
