import styles from "./GreVsGmat.module.css";

const comparisonRows = [
  {
    criteria: "Accepted By",
    gre: "MS, MBA, PhD programs globally (1,300+ B-Schools)",
    gmat: "Exclusively Business & Management programs",
  },
  {
    criteria: "Verbal Emphasis",
    gre: "Advanced vocabulary (Text Completion & Sentence Equiv.)",
    gmat: "Critical Reasoning & Reading Comprehension logic",
  },
  {
    criteria: "Quant Difficulty",
    gre: "Standard math foundations, mental calculation shortcuts",
    gmat: "Data Insights & logic-intensive problem solving",
  },
  {
    criteria: "Score Scale",
    gre: "260–340 (130–170 each in Verbal & Quant) + AWA",
    gmat: "205–805 (Focus Edition 3-section aggregate)",
  },
  {
    criteria: "Test Adaptivity",
    gre: "Section-level adaptive (Section 2 difficulty adapts)",
    gmat: "Question-by-question computer adaptive",
  },
  {
    criteria: "B-School Preference",
    gre: "Equal consideration at Harvard, Stanford, Wharton, INSEAD, ISB",
    gmat: "Equal consideration across global B-Schools",
  },
];

export default function GreVsGmat() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.preTitle}>Decision Guide</span>
          <h2 className={styles.title}>
            GRE <span className={styles.titleHighlight}>vs GMAT</span>
          </h2>
          <p className={styles.subtitle}>
            Both tests are equally accepted by top business schools worldwide. Compare criteria to determine which aligns better with your skills.
          </p>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.th}>Criteria</th>
                <th className={styles.th}>GRE</th>
                <th className={styles.th}>GMAT</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((r) => (
                <tr key={r.criteria} className={styles.tr}>
                  <td className={styles.td}><strong>{r.criteria}</strong></td>
                  <td className={`${styles.td} ${styles.highlightCol}`}>{r.gre}</td>
                  <td className={styles.td}>{r.gmat}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
