import styles from "./GmatCityExamGuide.module.css";

interface GmatCityExamGuideProps {
  city: string;
}

export default function GmatCityExamGuide({ city }: GmatCityExamGuideProps) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.preTitle}>Exam Architecture</span>
          <h2 className={styles.title}>
            GMAT 2025 Focus Edition Guide for <span className={styles.titleHighlight}>{city}</span> Aspirants
          </h2>
          <p className={styles.subtitle}>
            The Graduate Management Admission Test (GMAT) is a computer-adaptive test conducted by the
            Graduate Management Admission Council (GMAC) worldwide. It assesses analytical writing,
            quantitative reasoning, verbal reasoning, and data analysis in standard business English.
          </p>
        </div>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Section</th>
                <th>Questions</th>
                <th>Time Allowed</th>
                <th>Focus &amp; Topics Tested</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles.sectionBadge}>Quantitative Reasoning</td>
                <td>21 Questions</td>
                <td>45 Minutes</td>
                <td>Problem Solving, Arithmetic, Elementary Algebra. (No traditional Geometry).</td>
              </tr>
              <tr>
                <td className={styles.sectionBadge}>Verbal Reasoning</td>
                <td>23 Questions</td>
                <td>45 Minutes</td>
                <td>Critical Reasoning &amp; Reading Comprehension. (No Sentence Correction).</td>
              </tr>
              <tr>
                <td className={styles.sectionBadge}>Data Insights</td>
                <td>20 Questions</td>
                <td>45 Minutes</td>
                <td>Data Sufficiency, Multi-Source Reasoning, Table Analysis, Graphics Interpretation, Two-Part Analysis.</td>
              </tr>
              <tr>
                <td className={styles.sectionBadge}>Total Exam</td>
                <td>64 Questions</td>
                <td>2 Hours 15 Minutes</td>
                <td>One optional 10-minute break. Total score scaled between 205 and 805.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles.updateBox}>
          <h3 className={styles.updateTitle}>
            <span>⚡</span> Recent GMAC Updates &amp; Features for {city} Candidates
          </h3>
          <ul className={styles.updateList}>
            <li className={styles.updateItem}>
              <strong>30-Minute Shorter Exam:</strong> Streamlined down to 2 hours 15 minutes, allowing you to maximize mental stamina and peak concentration throughout the test.
            </li>
            <li className={styles.updateItem}>
              <strong>Select Your Section Order:</strong> Freedom to take Quantitative Reasoning, Verbal Reasoning, or Data Insights in whatever sequence best suits your personal strengths.
            </li>
            <li className={styles.updateItem}>
              <strong>Question Review &amp; Edit:</strong> You can bookmark questions and change up to three answers per section before submitting, giving you unprecedented control over pacing.
            </li>
            <li className={styles.updateItem}>
              <strong>In-Depth Performance Analytics:</strong> The Official Score Report now includes detailed diagnostic percentile breakdowns across all question types and timing metrics at no extra cost.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
