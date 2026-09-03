import styles from "./ConsultingServices.module.css";

const services = [
  {
    icon: "👤",
    title: "Personalized Attention",
    text: "Direct 1-on-1 mentorship from industry executives and alumni of Harvard, Wharton, INSEAD, and ISB who understand committee expectations.",
  },
  {
    icon: "✍️",
    title: "Essay Excellence",
    text: "We unearth your authentic leadership stories, distinct voice, and career achievements to construct unforgettable narrative arcs.",
  },
  {
    icon: "📜",
    title: "SOP Mastery",
    text: "Statement of Purpose drafted to directly align your career goals with each university’s unique curriculum, culture, and faculty.",
  },
  {
    icon: "📄",
    title: "Resume Perfection",
    text: "ATS-compliant, impact-driven 1-page executive resumes highlighting quantitative results and leadership milestones.",
  },
  {
    icon: "🎙️",
    title: "Interview Readiness",
    text: "Extensive mock behavioral and blind interview panels with detailed line-by-line feedback, tone coaching, and confidence drills.",
  },
  {
    icon: "💡",
    title: "Profile Building Expertise",
    text: "Year-long strategic guidance to build initiatives, publications, non-profit leadership, and demonstrable impact before applying.",
  },
];

export default function ConsultingServices() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.preTitle}>Our Core Pillars</span>
          <h2 className={styles.title}>
            What Sets Our <span className={styles.titleHighlight}>Consulting Apart</span>
          </h2>
          <p className={styles.subtitle}>
            A structured, rigorous methodology ensuring every dimension of your candidacy resonates with admissions committees.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((s) => (
            <div key={s.title} className={styles.card}>
              <div className={styles.icon}>{s.icon}</div>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardText}>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
