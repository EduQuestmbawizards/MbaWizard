import styles from "./GmatCityAdmissions.module.css";

interface GmatCityAdmissionsProps {
  city: string;
}

export default function GmatCityAdmissions({ city }: GmatCityAdmissionsProps) {
  const services = [
    {
      icon: "🧠",
      title: "Profile Assessment & Psychometric Testing",
      desc: "Detailed diagnostic evaluation of your academic records, corporate achievements, and psychometric strengths with comprehensive reports.",
    },
    {
      icon: "📈",
      title: "Profile Building & Gap Remediation",
      desc: "Actionable strategies to plug resume vulnerabilities through targeted extracurricular initiatives, leadership roles, and domain projects.",
    },
    {
      icon: "🎯",
      title: "Strategic University Shortlisting",
      desc: "Scientific matching across Dream, Target, and Safe business schools across India (ISB, IIM 1-Yr MBA), US (M7), Europe (INSEAD/LBS), and Asia.",
    },
    {
      icon: "✍️",
      title: "SOP, Essay & LOR Crafting",
      desc: "Compelling narrative architecture and iterative drafting of statement of purpose, admission essays, and recommendation letters.",
    },
    {
      icon: "💰",
      title: "Scholarship & Fellowship Strategy",
      desc: "Specialized positioning to maximize merit-based tuition waivers, graduate fellowships, and institutional grants abroad.",
    },
    {
      icon: "🎤",
      title: "Admissions Interview Coaching",
      desc: "Simulated mock interview rounds with alumni and former admissions committee panelists with question-by-question feedback.",
    },
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.preTitle}>Beyond Test Scores</span>
          <h2 className={styles.title}>
            Global MBA Admissions Counseling in <span className={styles.titleHighlight}>{city}</span>
          </h2>
          <p className={styles.subtitle}>
            A high GMAT score is only half the battle. Our admissions wing ensures your application essays,
            resume, and interviews present an irresistible value proposition to admissions committees.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((s) => (
            <div key={s.title} className={styles.card}>
              <div className={styles.cardIcon}>{s.icon}</div>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
