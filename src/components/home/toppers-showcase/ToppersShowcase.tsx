import Link from "next/link";
import styles from "./ToppersShowcase.module.css";

const toppers = [
  {
    name: "Rohan Malhotra",
    score: "GMAT 760",
    school: "INSEAD",
    program: "GMAT Classroom Intensive (Gurgaon)",
    quote: "MBA Wizards refined my verbal approach completely. The CR framework turned my weakest section into my highest scoring one.",
  },
  {
    name: "Ananya Sharma",
    score: "CAT 99.82 %ile",
    school: "IIM Ahmedabad",
    program: "CAT Comprehensive Mentorship",
    quote: "The ability-based QA model eliminated silly mistakes in DI-LR and Quant. Mock analysis sessions were game-changers.",
  },
  {
    name: "Siddharth Verma",
    score: "GRE 334",
    school: "Wharton MBA",
    program: "GRE 320+ Live Prep",
    quote: "Scored 168Q and 166V on my very first attempt. The personalized vocabulary memory drills saved me weeks of rote memorization.",
  },
  {
    name: "Kavita Reddy",
    score: "GMAT 750",
    school: "ISB PGP Admit",
    program: "GMAT Weekend Batch & Admissions",
    quote: "Balancing a demanding 60-hour work week with prep felt impossible until MBA Wizards created a tailored, modular timetable.",
  },
  {
    name: "Aditya Chopra",
    score: "GMCAT Dual",
    school: "LBS & IIM Calcutta",
    program: "GMCAT Dual Prep Track",
    quote: "Preparing for both CAT and GMAT simultaneously gave me double the opportunities without doubling the study burden.",
  },
  {
    name: "Meera Nair",
    score: "GMAT 740",
    school: "Columbia Business School",
    program: "Admissions Consulting & GMAT Prep",
    quote: "From test prep to application essays and scholarship interviews, the mentorship was relentless, honest, and world-class.",
  },
];

export default function ToppersShowcase() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.preTitle}>Proven Track Record</span>
          <h2 className={styles.title}>
            Hall of Fame — <span className={styles.titleHighlight}>Top Scorers & Admits</span>
          </h2>
          <p className={styles.subtitle}>
            Every year, MBA Wizards students secure 700+ GMAT scores, 99+ CAT percentiles, and coveted seats in top B-Schools globally.
          </p>
        </div>

        <div className={styles.grid}>
          {toppers.map((t) => (
            <div key={t.name} className={styles.card}>
              <div className={styles.scoreHeader}>
                <span className={styles.scoreBadge}>{t.score}</span>
                <span className={styles.schoolBadge}>{t.school}</span>
              </div>
              <h3 className={styles.studentName}>{t.name}</h3>
              <span className={styles.programTaken}>{t.program}</span>
              <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
            </div>
          ))}
        </div>

        <div className={styles.ctaFooter}>
          <Link href="/gmat-toppers" className={styles.viewAllLink}>
            <span>View All Toppers & Student Success Stories</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
