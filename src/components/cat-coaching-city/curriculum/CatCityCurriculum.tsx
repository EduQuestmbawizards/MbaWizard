import styles from "./CatCityCurriculum.module.css";

interface CatCityCurriculumProps { city: string; }

export default function CatCityCurriculum({ city }: CatCityCurriculumProps) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.preTitle}>Comprehensive Curriculum</span>
          <h2 className={styles.title}>Complete CAT Syllabus Coverage in <span className={styles.titleHighlight}>{city}</span></h2>
          <p className={styles.subtitle}>The Common Admission Test (CAT) is a national-level MBA entrance exam conducted by IIMs annually in November. Our curriculum covers every topic tested across all three sections with adaptive, ability-based instruction.</p>
        </div>
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>🔢</div>
            <h3 className={styles.cardTitle}>Quantitative Ability (QA)</h3>
            <ul className={styles.list}>
              <li className={styles.listItem}>Arithmetic: Percentages, Profit-Loss, Time-Speed, Averages</li>
              <li className={styles.listItem}>Algebra: Linear & Quadratic equations, Functions</li>
              <li className={styles.listItem}>Geometry & Mensuration with coordinate geometry</li>
              <li className={styles.listItem}>Number Systems: Factors, LCM, HCF, Remainders</li>
              <li className={styles.listItem}>Mental math shortcuts and time-saving techniques</li>
              <li className={styles.listItem}>Data interpretation and complex data sets</li>
            </ul>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>📖</div>
            <h3 className={styles.cardTitle}>Verbal Ability & RC (VARC)</h3>
            <ul className={styles.list}>
              <li className={styles.listItem}>Reading Comprehension: speed-reading with accuracy</li>
              <li className={styles.listItem}>Passage analysis and advanced inference techniques</li>
              <li className={styles.listItem}>Para-jumbles and para-summary strategies</li>
              <li className={styles.listItem}>Odd-sentence identification methods</li>
              <li className={styles.listItem}>Vocabulary building and contextual usage</li>
              <li className={styles.listItem}>Critical reasoning and assumption identification</li>
            </ul>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>🧩</div>
            <h3 className={styles.cardTitle}>Data Interpretation & LR (DILR)</h3>
            <ul className={styles.list}>
              <li className={styles.listItem}>Bar graphs, pie charts, line graphs, tables analysis</li>
              <li className={styles.listItem}>Complex multi-data set interpretation</li>
              <li className={styles.listItem}>Seating arrangements and blood relations</li>
              <li className={styles.listItem}>Logical sequences, syllogisms, and patterns</li>
              <li className={styles.listItem}>Set theory and Venn diagram puzzles</li>
              <li className={styles.listItem}>Calculator-free calculation mastery</li>
            </ul>
          </div>
        </div>
        <div className={styles.successBox}>
          <div>
            <h3 className={styles.successTitle}>Success Stories from {city}</h3>
            <div className={styles.stories}>
              <div className={styles.storyCard}>
                <div className={styles.storyName}>Arjun — CAT 99.8 → IIM Ahmedabad</div>
                <p className={styles.storyText}>A Cyber City consultant, Arjun achieved CAT 99.8 percentile using our weekend program while managing demanding client work. Secured IIM Ahmedabad admission.</p>
              </div>
              <div className={styles.storyCard}>
                <div className={styles.storyName}>Priya — CAT 99.5 → IIM Bangalore</div>
                <p className={styles.storyText}>Working at a leading bank, Priya used our evening batches to score CAT 99.5 percentile, leading to IIM Bangalore admission with scholarship support.</p>
              </div>
              <div className={styles.storyCard}>
                <div className={styles.storyName}>Rohan — CAT 99.2 → IIM Calcutta</div>
                <p className={styles.storyText}>An entrepreneur, Rohan leveraged our flexible scheduling during his business expansion phase. CAT 99.2 percentile secured IIM Calcutta admission.</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className={styles.waipiTitle}>WAT-PI Preparation Included</h3>
            <ul className={styles.waipiList}>
              <li className={styles.waipiItem}>🎤 IIM Personal Interview Mock Rounds</li>
              <li className={styles.waipiItem}>✍️ Written Ability Test (WAT) Training</li>
              <li className={styles.waipiItem}>👥 Group Discussion Simulations</li>
              <li className={styles.waipiItem}>📝 Profile-Based Interview Strategy</li>
              <li className={styles.waipiItem}>🎓 IIM Alumni Interaction Sessions</li>
              <li className={styles.waipiItem}>📊 Resume &amp; Profile Building Support</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
