import styles from "./CcqtGuide.module.css";

export default function CcqtGuide() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.preTitle}>Industry Benchmark</span>
          <h2 className={styles.title}>
            TCS-iON CCQT Exam <span className={styles.titleHighlight}>Decoded</span>
          </h2>
          <p className={styles.subtitle}>
            The Corporate Competency Qualification Test (CCQT) is used across top Indian MNCs as an authentic corporate hiring yardstick.
          </p>
        </div>

        <div className={styles.contentBox}>
          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "var(--color-text-main)" }}>
            With over 200 resumes submitted for every single corporate opening and only 1 candidate selected, earning a certified high percentile on the TCS iON Qualifier distinguishes your application from generic applicant pools.
          </p>

          <div className={styles.stagesGrid}>
            <div className={styles.stageCard}>
              <span className={styles.stageNumber}>Stage 1</span>
              <h3 className={styles.stageTitle}>Proctored LAN Assessment</h3>
              <p className={styles.stageDesc}>
                Tests core cognitive competencies: Quantitative Aptitude, Logical Reasoning, and Verbal Ability under rigorous invigilation.
              </p>
            </div>
            <div className={styles.stageCard}>
              <span className={styles.stageNumber}>Stage 2</span>
              <h3 className={styles.stageTitle}>Video-Based Assessment</h3>
              <p className={styles.stageDesc}>
                Evaluates business communication, problem-solving thought processes, executive presence, and spontaneous English articulation.
              </p>
            </div>
          </div>

          <div className={styles.eligibilityList}>
            <h4 style={{ fontSize: "16px", fontWeight: "800", color: "var(--color-primary)" }}>
              Who Should Take the CCQT Exam?
            </h4>
            <div className={styles.eligibilityItem}>
              <span className={styles.check}>✓</span>
              <span><strong>Final Year Undergraduates:</strong> Ideal for seniors entering on-campus and off-campus corporate placement seasons.</span>
            </div>
            <div className={styles.eligibilityItem}>
              <span className={styles.check}>✓</span>
              <span><strong>Pre-Final (2nd/3rd Year) Students:</strong> CCQT scores are valid for 2 full years, letting you identify micro-gaps early.</span>
            </div>
            <div className={styles.eligibilityItem}>
              <span className={styles.check}>✓</span>
              <span><strong>Recent Graduates &amp; Job Seekers:</strong> Validates competency benchmark acknowledged by 100+ corporate recruiting partners.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
