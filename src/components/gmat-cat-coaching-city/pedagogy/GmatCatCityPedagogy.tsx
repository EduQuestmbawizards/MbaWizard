import styles from "./GmatCatCityPedagogy.module.css";

interface GmatCatCityPedagogyProps {
  city: string;
}

export default function GmatCatCityPedagogy({ city }: GmatCatCityPedagogyProps) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.preTitle}>Our Proven Methodology</span>
          <h2 className={styles.title}>
            The Manthan Dual-Track System in <span className={styles.titleHighlight}>{city}</span>
          </h2>
          <p className={styles.subtitle}>
            Our ability-based Manthan model guarantees at least a 70–100+ point increase for GMAT retakers
            and a 700+ target for first-timers, while simultaneously building IIM-level CAT readiness.
          </p>
        </div>
        <div className={styles.stepsTimeline}>
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>01</div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>Self-Assessment &amp; EQ/IQ Profile Mapping</h3>
              <p className={styles.stepDesc}>We begin not with a cold diagnostic test but with a structured self-assessment questionnaire, physiological evaluation, and a 1-on-1 strategy session with senior MBA mentors. A dual GMAT+CAT preparation roadmap is established identifying your unique cognitive baseline and target programs.</p>
            </div>
          </div>
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>02</div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>Litmus Diagnostic &amp; Student Code Assignment</h3>
              <p className={styles.stepDesc}>Our proprietary Litmus Test maps subject-wise proficiency across GMAT Quant, Verbal, Data Insights and CAT QA, VARC, DILR simultaneously. Each student receives specific tracking codes that direct them into tailored common and specialized modules — eliminating both GMAT and CAT weak spots in parallel.</p>
            </div>
          </div>
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>03</div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>Score Benchmarking Across Both Exams</h3>
              <p className={styles.stepDesc}>Practice sets are customized to each student's level for both GMAT and CAT simultaneously. Sectional tests validate readiness in each exam and identify any micro-gaps that need remedial sessions before advancing to the next phase.</p>
            </div>
          </div>
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>04</div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>The 3-Phase Mastery Cycle (Both Exams)</h3>
              <div className={styles.phasesGrid}>
                <div className={styles.phaseBox}>
                  <h4 className={styles.phaseTitle}>Phase A: Concept Rigor</h4>
                  <p className={styles.phaseText}>Deep dive from Beginner to Advanced across GMAT Quant, Data Insights, GMAT Verbal, CAT QA, VARC, and DILR.</p>
                </div>
                <div className={styles.phaseBox}>
                  <h4 className={styles.phaseTitle}>Phase B: Accuracy Conditioning</h4>
                  <p className={styles.phaseText}>Double the volume of practice across both exam formats until near-100% precision is achieved consistently.</p>
                </div>
                <div className={styles.phaseBox}>
                  <h4 className={styles.phaseTitle}>Phase C: Time Efficiency Race</h4>
                  <p className={styles.phaseText}>Speed and mental math shortcuts for GMAT's 90-second window and CAT's 2-minute reading pace simultaneously.</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>05</div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>Full-Length Dual Mock Testing &amp; Score Projection</h3>
              <p className={styles.stepDesc}>Students alternate between GMAT adaptive simulation (4 difficulty tiers) and full-length CAT mocks. Experiencing all levels of toughness in both formats builds immense psychological resilience, transforming high-pressure exam environments into familiar territory. Weaknesses become strengths — guaranteed.</p>
            </div>
          </div>
        </div>
        <div className={styles.levelsBox}>
          <h3 className={styles.levelsTitle}>GMAT Score Tiers We Build Toward</h3>
          <div className={styles.levelsGrid}>
            <div className={styles.levelItem}><div className={styles.levelScore}>750+</div><div className={styles.levelTag}>Level 1: Elite</div></div>
            <div className={styles.levelItem}><div className={styles.levelScore}>700+</div><div className={styles.levelTag}>Level 2: M7 Track</div></div>
            <div className={styles.levelItem}><div className={styles.levelScore}>680+</div><div className={styles.levelTag}>Level 3: Top B-School</div></div>
            <div className={styles.levelItem}><div className={styles.levelScore}>650+</div><div className={styles.levelTag}>Level 4: Advanced</div></div>
            <div className={styles.levelItem}><div className={styles.levelScore}>600+</div><div className={styles.levelTag}>Level 5: Foundations</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
