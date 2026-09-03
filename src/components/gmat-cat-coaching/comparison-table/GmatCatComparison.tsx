import styles from "./GmatCatComparison.module.css";

const rows = [
  {
    feature: "Primary Target Schools",
    gmat: "ISB, IIM 1-Yr MBA (PGPX/EPGP), Global Top 50 B-Schools",
    cat: "IIM 2-Yr PGP (Ahmedabad, Bangalore, Calcutta, etc.), FMS, XLRI",
  },
  {
    feature: "Exam Structure",
    gmat: "3 Sections: Quant (21 Q), Verbal (23 Q), Data Insights (20 Q)",
    cat: "3 Sections: VARC (24 Q), DILR (20 Q), QA (22 Q)",
  },
  {
    feature: "Adaptive Nature",
    gmat: "Question-by-question computer adaptive",
    cat: "Non-adaptive linear computer-based test",
  },
  {
    feature: "Testing Frequency",
    gmat: "Available year-round, up to 5 times a year",
    cat: "Held once annually in late November",
  },
  {
    feature: "Scoring Metric",
    gmat: "Scaled numerical score: 205 to 805",
    cat: "Percentile ranking (e.g. 99.5%ile)",
  },
  {
    feature: "Score Validity",
    gmat: "Valid for 5 years",
    cat: "Valid for 1 academic admission cycle (1 year)",
  },
];

export default function GmatCatComparison() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.preTitle}>Key Distinctions</span>
          <h2 className={styles.title}>
            GMAT vs CAT: <span className={styles.titleHighlight}>What Sets Them Apart</span>
          </h2>
          <p className={styles.subtitle}>
            Compare exam formats, frequency, scoring, and school applicability to plan your dual milestones.
          </p>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.th}>Aspect</th>
                <th className={styles.th}>GMAT Focus</th>
                <th className={styles.th}>CAT Exam</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.feature} className={styles.tr}>
                  <td className={styles.td}><strong>{r.feature}</strong></td>
                  <td className={styles.td}>{r.gmat}</td>
                  <td className={styles.td}>{r.cat}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
