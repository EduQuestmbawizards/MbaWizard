import styles from "./GmatCityPedagogy.module.css";

interface GmatCityPedagogyProps {
  city: string;
}

export default function GmatCityPedagogy({ city }: GmatCityPedagogyProps) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.preTitle}>Our Proven Pedagogy</span>
          <h2 className={styles.title}>
            The Manthan Methodology: Ability-Based Adaptive Coaching in <span className={styles.titleHighlight}>{city}</span>
          </h2>
          <p className={styles.subtitle}>
            We don&apos;t just tutor; we enter into a mentoring partnership. Our system guarantees at least a
            70–100+ point score increase for retakers and a 700+ target for first-time aspirants by adapting
            rigor to individual student caliber.
          </p>
        </div>

        <div className={styles.stepsTimeline}>
          {/* Step 1 */}
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>01</div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>Self-Assessment &amp; EQ/IQ Profile Mapping</h3>
              <p className={styles.stepDesc}>
                Unlike typical coaching centers that throw a cold diagnostic test at you on Day 1, we begin
                with a structured self-assessment questionnaire, behavioral evaluation, and a 1-on-1 strategy
                session with senior MBA mentors. A personalized preparation roadmap is established identifying
                your cognitive baseline.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>02</div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>The Litmus Diagnostic Test &amp; Student Coding</h3>
              <p className={styles.stepDesc}>
                We administer our proprietary Litmus Test to map your subject-wise proficiency in Quant, Verbal,
                and Data Insights. Each student is assigned specific tracking codes based on their attention areas,
                directing them into tailored common and specialized study modules. Continuous feedback loops ensure
                rapid course correction.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>03</div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>Benchmarking &amp; Practice Drills</h3>
              <p className={styles.stepDesc}>
                Every student receives practice sets customized to their tier. Once our mentors confirm you have
                reached the conceptual benchmark, randomized sectional tests validate your readiness. If any micro
                gaps emerge, targeted remedial sessions eliminate them immediately.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>04</div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>The 3-Phase Mastery Cycle</h3>
              <div className={styles.phasesGrid}>
                <div className={styles.phaseBox}>
                  <h4 className={styles.phaseTitle}>Phase A: Concept Rigor</h4>
                  <p className={styles.phaseText}>
                    Deep dive from Beginner to Intermediate to Difficult questions. Master the core math and logic rules until they become second nature.
                  </p>
                </div>
                <div className={styles.phaseBox}>
                  <h4 className={styles.phaseTitle}>Phase B: Accuracy Conditioning</h4>
                  <p className={styles.phaseText}>
                    Double the volume of practice questions to guarantee near-100% precision. Eliminate avoidable careless errors completely.
                  </p>
                </div>
                <div className={styles.phaseBox}>
                  <h4 className={styles.phaseTitle}>Phase C: Time Efficiency</h4>
                  <p className={styles.phaseText}>
                    The race against time begins. Learn speed-reading heuristics and mental math shortcuts to solve complex questions in under 90 seconds.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Final Step */}
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>05</div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>Final Step: 4-Tier Full-Length Computer Adaptive Simulation</h3>
              <p className={styles.stepDesc}>
                Students undergo full-length adaptive testing across four graded difficulty levels. Experiencing
                all levels of exam toughness builds immense psychological calm and mental stamina, turning high-pressure
                exam situations into familiar routines. Weaknesses are transformed into strengths.
              </p>
            </div>
          </div>
        </div>

        {/* Levels Grid */}
        <div className={styles.levelsBox}>
          <h3 className={styles.levelsTitle}>Our 5 Calibrated Performance Tiers</h3>
          <div className={styles.levelsGrid}>
            <div className={styles.levelItem}>
              <div className={styles.levelScore}>750+</div>
              <div className={styles.levelTag}>Level 1: Elite Achievers</div>
            </div>
            <div className={styles.levelItem}>
              <div className={styles.levelScore}>700+</div>
              <div className={styles.levelTag}>Level 2: Global M7 Track</div>
            </div>
            <div className={styles.levelItem}>
              <div className={styles.levelScore}>680+</div>
              <div className={styles.levelTag}>Level 3: Top B-School</div>
            </div>
            <div className={styles.levelItem}>
              <div className={styles.levelScore}>650+</div>
              <div className={styles.levelTag}>Level 4: Advanced Core</div>
            </div>
            <div className={styles.levelItem}>
              <div className={styles.levelScore}>600+</div>
              <div className={styles.levelTag}>Level 5: Foundations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
