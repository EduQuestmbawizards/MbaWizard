import styles from "./GreCityCurriculum.module.css";

interface GreCityCurriculumProps {
  city: string;
}

export default function GreCityCurriculum({ city }: GreCityCurriculumProps) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.preTitle}>Exam Architecture</span>
          <h2 className={styles.title}>
            Complete GRE Curriculum for <span className={styles.titleHighlight}>{city}</span> Aspirants
          </h2>
          <p className={styles.subtitle}>
            The Graduate Record Examination (GRE) is a standardized test accepted by thousands of
            graduate schools worldwide. Designed and administered by ETS, the GRE assesses verbal
            reasoning, quantitative reasoning, and analytical writing — the three core pillars of
            graduate-level academic readiness.
          </p>
        </div>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Section</th>
                <th>Questions</th>
                <th>Time Allowed</th>
                <th>Content Focus</th>
                <th>Score Scale</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles.sectionBadge}>Verbal Reasoning</td>
                <td>27 Questions (2 sections)</td>
                <td>47 min total</td>
                <td>Reading Comprehension, Text Completion, Sentence Equivalence</td>
                <td>130–170</td>
              </tr>
              <tr>
                <td className={styles.sectionBadge}>Quantitative Reasoning</td>
                <td>27 Questions (2 sections)</td>
                <td>47 min total</td>
                <td>Arithmetic, Algebra, Geometry, Data Analysis, Quantitative Comparison</td>
                <td>130–170</td>
              </tr>
              <tr>
                <td className={styles.sectionBadge}>Analytical Writing</td>
                <td>2 Essays</td>
                <td>60 min total</td>
                <td>Analyze an Issue Essay + Analyze an Argument Essay</td>
                <td>0–6</td>
              </tr>
              <tr>
                <td className={styles.sectionBadge}>Unscored / Research</td>
                <td>Variable</td>
                <td>Variable</td>
                <td>Experimental section not counted in final score</td>
                <td>N/A</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles.curriculumGrid}>
          <div className={styles.currCard}>
            <div className={styles.currIcon}>📖</div>
            <h3 className={styles.currTitle}>Quantitative Reasoning Mastery</h3>
            <ul className={styles.currList}>
              <li className={styles.currItem}>Arithmetic fundamentals and advanced operations</li>
              <li className={styles.currItem}>Algebra and linear equation mastery</li>
              <li className={styles.currItem}>Geometry principles and coordinate geometry</li>
              <li className={styles.currItem}>Data interpretation and analysis</li>
              <li className={styles.currItem}>Quantitative comparison high-speed strategies</li>
              <li className={styles.currItem}>Time management and calculator optimization</li>
            </ul>
          </div>

          <div className={styles.currCard}>
            <div className={styles.currIcon}>💬</div>
            <h3 className={styles.currTitle}>Verbal Reasoning Excellence</h3>
            <ul className={styles.currList}>
              <li className={styles.currItem}>Critical thinking and passage analysis techniques</li>
              <li className={styles.currItem}>Speed reading with accuracy improvement</li>
              <li className={styles.currItem}>Text Completion and Sentence Equivalence</li>
              <li className={styles.currItem}>Vocabulary building with context clue identification</li>
              <li className={styles.currItem}>Logical reasoning application in RC passages</li>
              <li className={styles.currItem}>Advanced academic grammar concepts</li>
            </ul>
          </div>

          <div className={styles.currCard}>
            <div className={styles.currIcon}>✍️</div>
            <h3 className={styles.currTitle}>Analytical Writing Assessment</h3>
            <ul className={styles.currList}>
              <li className={styles.currItem}>Issue Essay: argument development techniques</li>
              <li className={styles.currItem}>Evidence evaluation and logical structure</li>
              <li className={styles.currItem}>Academic aptitude for scholarly writing</li>
              <li className={styles.currItem}>Argument Essay: logical fallacy identification</li>
              <li className={styles.currItem}>Counter-argument development skills</li>
              <li className={styles.currItem}>Time-bound essay drafting under pressure</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
