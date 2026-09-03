import styles from "./GmatGreDualPrep.module.css";

interface GmatGreDualPrepProps {
  city: string;
}

export default function GmatGreDualPrep({ city }: GmatGreDualPrepProps) {
  const reasons = [
    {
      icon: "🎯",
      title: "Maximized Application Options",
      items: [
        "Apply to traditional MBA programs preferring GMAT",
        "Target newer programs accepting GRE scores",
        "Leverage your stronger score for competitive advantage",
        "Demonstrate academic versatility to admissions committees",
        "Unlock programs at Harvard, Wharton, INSEAD, LBS, and MIT",
      ],
    },
    {
      icon: "🛡️",
      title: "Smart Risk Mitigation Strategy",
      items: [
        "Poor performance on one test doesn't derail your plans",
        "Different test formats suit different personal strengths",
        "Multiple opportunities to achieve your target score",
        "Backup options for time-sensitive applications",
        "Combined package costs far less than two separate courses",
      ],
    },
    {
      icon: "🏙️",
      title: `${city} Professional Advantage`,
      items: [
        "Weekend intensive sessions for working professionals",
        "Evening batches accommodating long commutes",
        "Flexible timing around project deadlines and travel",
        "Online backup classes for unexpected work commitments",
        "Peer learning with corporate leaders in small batches",
      ],
    },
    {
      icon: "🤖",
      title: "AI-Powered Dual Analytics",
      items: [
        "Performance prediction for both GMAT and GRE tests",
        "Optimal test date recommendations based on score trajectory",
        "AI test generator for custom dual-format practice sessions",
        "Strategic recommendation on which score to submit",
        "Comparative score analysis and projection reporting",
      ],
    },
  ];

  const stories = [
    {
      name: "Rahul's Dual Success Story",
      text: `Rahul, a finance professional from ${city}, achieved GMAT 720 and GRE 325 through our dual prep program. He secured admission to Wharton leveraging his stronger GMAT score while keeping GRE options open.`,
    },
    {
      name: "Sneha's Strategic Advantage",
      text: `A consultant from ${city}, Sneha used our weekend dual program to score GMAT 710 and GRE 320 — giving her flexibility to choose INSEAD as her final destination after evaluating all program options.`,
    },
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.preTitle}>The Dual Advantage</span>
          <h2 className={styles.title}>
            Why GMAT + GRE Together in <span className={styles.titleHighlight}>{city}</span>?
          </h2>
          <p className={styles.subtitle}>
            Why choose when you can master both? Our revolutionary dual-preparation methodology
            equips you with two globally recognized scores, maximizing your admission flexibility
            to the world&apos;s top business and graduate schools simultaneously.
          </p>
        </div>

        <div className={styles.reasonGrid}>
          {reasons.map((r) => (
            <div key={r.title} className={styles.reasonCard}>
              <div className={styles.reasonIcon}>{r.icon}</div>
              <h3 className={styles.reasonTitle}>{r.title}</h3>
              <ul className={styles.reasonList}>
                {r.items.map((item) => (
                  <li key={item} className={styles.reasonItem}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.comparisonBox}>
          <h3 className={styles.compTitle}>Integrated Dual Curriculum Architecture</h3>
          <div className={styles.compGrid}>
            <div className={styles.compCol}>
              <h4 className={styles.compColTitle}>Quantitative Mastery</h4>
              <p className={styles.compItem}>GMAT-specific Data Sufficiency techniques</p>
              <p className={styles.compItem}>GRE Quantitative Comparison strategies</p>
              <p className={styles.compItem}>Shared mathematical foundations</p>
              <p className={styles.compItem}>Calculator optimization for GRE</p>
              <p className={styles.compItem}>Data Insights for GMAT Focus Edition</p>
            </div>
            <div className={styles.compCol}>
              <h4 className={styles.compColTitle}>Verbal Excellence</h4>
              <p className={styles.compItem}>GMAT Critical Reasoning techniques</p>
              <p className={styles.compItem}>GRE Text Completion and Sentence Equivalence</p>
              <p className={styles.compItem}>Shared RC passage analysis skills</p>
              <p className={styles.compItem}>Vocabulary building for GRE success</p>
              <p className={styles.compItem}>Reading comprehension speed techniques</p>
            </div>
            <div className={styles.compCol}>
              <h4 className={styles.compColTitle}>Writing & Analytics</h4>
              <p className={styles.compItem}>GMAT argument analysis training</p>
              <p className={styles.compItem}>GRE Issue and Argument essay mastery</p>
              <p className={styles.compItem}>Alternating GMAT + GRE full-length mocks</p>
              <p className={styles.compItem}>Comparative score analysis reports</p>
              <p className={styles.compItem}>Strategic test selection counseling</p>
            </div>
          </div>

          <div className={styles.storiesRow}>
            {stories.map((s) => (
              <div key={s.name} className={styles.storyCard}>
                <div className={styles.storyName}>{s.name}</div>
                <p className={styles.storyText}>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
