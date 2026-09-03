import styles from "./ComparisonTable.module.css";

const syllabusOverlap = [
  {
    topic: "Quantitative Reasoning",
    gmat: "Arithmetic, Algebra, Number Properties, Statistics",
    gre: "Arithmetic, Algebra, Geometry, Data Analysis",
    overlap: "80% Overlap",
  },
  {
    topic: "Reading Comprehension",
    gmat: "Complex business, science & philosophy passages",
    gre: "Dense academic, humanities & science passages",
    overlap: "90% Overlap",
  },
  {
    topic: "Critical Reasoning",
    gmat: "Core logic arguments (Assumption, Weaken, Strengthen)",
    gre: "Argument analysis in reading passages",
    overlap: "75% Overlap",
  },
  {
    topic: "Vocabulary vs Logic",
    gmat: "Tested purely through context and logic (No direct vocab)",
    gre: "High-frequency advanced GRE vocabulary lists",
    overlap: "Distinct Strategy",
  },
  {
    topic: "Integrated / Data Section",
    gmat: "Data Insights (Graphs, Two-part analysis, Tables)",
    gre: "Embedded quantitative comparison questions",
    overlap: "Distinct Strategy",
  },
];

export default function ComparisonTable() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.preTitle}>Syllabus Synergy</span>
          <h2 className={styles.title}>
            What is Common &amp; <span className={styles.titleHighlight}>What Sets Them Apart</span>
          </h2>
          <p className={styles.subtitle}>
            Understand where preparation overlaps and where our specialized modules deliver exam-specific mastery.
          </p>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.th}>Subject Area</th>
                <th className={styles.th}>GMAT Focus</th>
                <th className={styles.th}>GRE General</th>
                <th className={styles.th}>Overlap Level</th>
              </tr>
            </thead>
            <tbody>
              {syllabusOverlap.map((r) => (
                <tr key={r.topic} className={styles.tr}>
                  <td className={styles.td}><strong>{r.topic}</strong></td>
                  <td className={styles.td}>{r.gmat}</td>
                  <td className={styles.td}>{r.gre}</td>
                  <td className={styles.td}><strong>{r.overlap}</strong></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
