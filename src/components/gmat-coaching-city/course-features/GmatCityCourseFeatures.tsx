import styles from "./GmatCityCourseFeatures.module.css";

interface GmatCityCourseFeaturesProps {
  city: string;
}

export default function GmatCityCourseFeatures({ city }: GmatCityCourseFeaturesProps) {
  const features = [
    {
      icon: "⏱️",
      title: "70+ Hours of Live Instruction",
      desc: "Interactive classes with founder IIT faculty. Attend live online or in-person sessions to review lessons or make up for missed classes.",
    },
    {
      icon: "🚀",
      title: "Booster Sessions for 700+",
      desc: "Specialized high-percentile clinics at no extra cost, specifically designed to push your scores beyond the 90th percentile.",
    },
    {
      icon: "🧮",
      title: "Online Hard Math Workshops",
      desc: "Intensive workshops tackling the hardest 805-level Quant and Data Insights questions at zero additional fee.",
    },
    {
      icon: "🤖",
      title: "AI Test Generation Facility",
      desc: "Generate personalized custom tests on demand: choose specific topics, number of questions, and difficulty levels.",
    },
    {
      icon: "🎯",
      title: "10 Full-Length Adaptive Mocks",
      desc: "Proprietary computer-adaptive testing environment mirroring the official GMAC interface with in-depth question analytics.",
    },
    {
      icon: "🔄",
      title: "Unlimited Faculty Access",
      desc: "Full mentoring and doubt resolution valid till your actual test date — even long after course lectures are completed.",
    },
  ];

  const exams = [
    {
      name: "XAT Orientation",
      detail: "Decision Making, Verbal & Quant strategies with previous year XAT paper discussions.",
    },
    {
      name: "SNAP Strategy",
      detail: "High-speed calculation shortcuts and reasoning tricks for SIBM & SCMHRD admissions.",
    },
    {
      name: "NMAT Workshops",
      detail: "Adaptive test-taking pacing strategies and sectional score maximization for NMIMS.",
    },
    {
      name: "IIFT / MICAT Guidance",
      detail: "International business case orientation and psychometric reasoning preparation.",
    },
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.preTitle}>Curriculum &amp; Training Pillars</span>
          <h2 className={styles.title}>
            Comprehensive GMAT Course Architecture in <span className={styles.titleHighlight}>{city}</span>
          </h2>
          <p className={styles.subtitle}>
            A rigorous learning ecosystem engineered by IIT Roorkee alumni to provide continuous improvement,
            scientific feedback, and unmatched exam readiness.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((f) => (
            <div key={f.title} className={styles.card}>
              <div className={styles.icon}>{f.icon}</div>
              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardDesc}>{f.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.ancillaryBox}>
          <div className={styles.ancillaryHeader}>
            <h3 className={styles.ancillaryTitle}>Complementary Exam Orientations Included</h3>
            <p className={styles.ancillarySub}>
              Students preparing for the GMAT in {city} can also opt into customized orientation modules
              for leading Indian management entrance tests at no additional tuition charge:
            </p>
          </div>

          <div className={styles.examGrid}>
            {exams.map((ex) => (
              <div key={ex.name} className={styles.examCard}>
                <h4 className={styles.examName}>{ex.name}</h4>
                <p className={styles.examDetail}>{ex.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
