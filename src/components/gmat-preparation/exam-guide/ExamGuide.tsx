import styles from "./ExamGuide.module.css";

const guides = [
  {
    icon: "🎯",
    title: "GMAT Exam Pattern & Structure",
    items: [
      "Total Time: 2 hours 15 minutes across 3 equally weighted sections (45 mins each).",
      "Quantitative Reasoning: 21 problem solving questions focusing on algebra and arithmetic.",
      "Verbal Reasoning: 23 questions testing Critical Reasoning and Reading Comprehension.",
      "Data Insights: 20 questions evaluating Data Sufficiency, Multi-Source, and Table Analysis.",
      "Flexibility to pick any section order: Quant, Verbal, or Data Insights first.",
    ],
  },
  {
    icon: "📋",
    title: "Registration & Slot Booking",
    items: [
      "Official body: Graduate Management Admission Council (GMAC via mba.com).",
      "Available year-round across official test centers or online proctored format.",
      "Appointments can be booked up to 6 months in advance or as late as 24 hours prior.",
      "Score preview is available immediately post-test, with 5 free school score sends.",
      "Validity: Official GMAT scores remain valid for 5 full calendar years.",
    ],
  },
  {
    icon: "📊",
    title: "Level-Based Preparation Tracks",
    items: [
      "Level 1 (750+ Target): Advanced 700+ problem marathons and speed shortcuts.",
      "Level 2 (700+ Target): Elimination of negative scoring traps and timing benchmarks.",
      "Level 3 (680+ Target): Sectional accuracy reinforcement and DILR interpretation.",
      "Level 4 & 5 (Foundational): Comprehensive non-engineer quant and grammar bridge clinics.",
      "Continuous tracking using student codes to monitor accuracy growth week-on-week.",
    ],
  },
  {
    icon: "🔄",
    title: "Integrated Exam Orientations",
    items: [
      "XAT Orientation: Decision making modules and XAT-specific essay coaching.",
      "SNAP Orientation: High-speed reasoning and quantitative shortcuts.",
      "NMAT Orientation: Adaptive timing drills and official past paper reviews.",
      "IIFT & OMETs: Customized sessions aligned with Indian management exams.",
      "Cross-exam coverage ensures you never risk your admission on a single test day.",
    ],
  },
];

export default function ExamGuide() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.preTitle}>Essential Blueprint</span>
          <h2 className={styles.title}>
            The Complete <span className={styles.titleHighlight}>GMAT Roadmap</span>
          </h2>
          <p className={styles.subtitle}>
            Everything you need to understand regarding exam format, registration best practices, and our tiered scoring system.
          </p>
        </div>

        <div className={styles.grid}>
          {guides.map((g) => (
            <div key={g.title} className={styles.guideCard}>
              <div className={styles.cardIcon}>{g.icon}</div>
              <h3 className={styles.cardTitle}>{g.title}</h3>
              <div className={styles.guideList}>
                {g.items.map((item) => (
                  <div key={item} className={styles.guideItem}>
                    <span className={styles.bullet}>✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
