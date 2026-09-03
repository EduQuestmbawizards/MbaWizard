import Image from "next/image";
import styles from "./HallOfFame.module.css";

interface Topper {
  name: string;
  score: string;
  image: string;
  details: string;
  youtubeUrl?: string;
}

const toppersData: Topper[] = [
  {
    name: "Shaheen Pervaz",
    score: "GMAT 770 (Nov 2021)",
    image: "/images/toppers/shaheen-pervaz-2021.jpg",
    details: "GMAT Score 770. Comprehensive prep with our hybrid batch leading to multiple international business school admits.",
  },
  {
    name: "Abhinanjy Gupta",
    score: "GMAT 760 (Oct 2021)",
    image: "/images/toppers/abhinanjy-gupta.jpeg",
    details: "Scored 760. Mastered high-difficulty quant questions without lengthy algebra equations.",
    youtubeUrl: "https://www.youtube.com/watch?v=kWxAFIaP3xY",
  },
  {
    name: "Karan Sharma",
    score: "GMAT 770 (Oct 2021)",
    image: "/images/toppers/karan-sharma.jpeg",
    details: "Scored 770. GMAT Topper and consultant with top percentile mastery across both Quant and Verbal sections.",
    youtubeUrl: "https://www.youtube.com/watch?v=_C-3WqPtLoE",
  },
  {
    name: "Prerna Singh",
    score: "GMAT 770 (Oct 2021)",
    image: "/images/toppers/prerna-chaudhary.jpg",
    details: "Data Analyst at JPMorgan Chase. B.Tech CS from BIT Mesra. Classroom & 1-on-1 mentorship in New Delhi.",
  },
  {
    name: "Samreen Ranjan",
    score: "GMAT 720 (From 590)",
    image: "/images/toppers/samreen-ranjan.jpeg",
    details: "Massive 130-point score jump from 590 (Q37, V34) to 720 (Q43, V46). Associate QA at Sapient India.",
  },
  {
    name: "Ashish Singh",
    score: "GMAT 770 (Q48, V46)",
    image: "/images/toppers/ashish-singh.jpeg",
    details: "Project Analyst at FabHotels. B.Tech Engineering. Gurgaon hybrid classroom batch achiever.",
  },
  {
    name: "Manish Kumar",
    score: "GMAT 720 (V45, Q44)",
    image: "/images/toppers/manish-kumar.jpeg",
    details: "B.Tech Mechanical from IIT Delhi. Professional at 1MG Gurgaon. Gurgaon classroom batch.",
  },
  {
    name: "Kanchan Puniya",
    score: "GMAT 710 (Q46, V41)",
    image: "/images/toppers/kanchan-puniya.jpeg",
    details: "DU Commerce graduate. Process Associate at Genpact. Built strong non-engineer quant fundamentals.",
  },
  {
    name: "Gopal Sharma",
    score: "GMAT 770 (Q48, V46)",
    image: "/images/toppers/gopal-sharma.jpeg",
    details: "B.Tech Civil Engineering from Delhi Technological University (DTU). Scored 770 on first attempt.",
  },
  {
    name: "Mayank Mani Pandey",
    score: "GMAT 780 (Q51, V45)",
    image: "/images/toppers/mayank-mani-pandey.jpeg",
    details: "Scored rare 780 with perfect Q51 and V45. Professional at Yahoo. Hybrid coaching participant.",
  },
  {
    name: "Anil Kaharbar",
    score: "GMAT 720 (Q47, V46)",
    image: "/images/toppers/anil-kaharbar.jpeg",
    details: "Samsung Electronics professional. B.Tech ECE. Transformed verbal reasoning speed with MBA Wizards.",
  },
  {
    name: "Gagandeep Singh Nanda",
    score: "GMAT 770 (Q51, V45)",
    image: "/images/toppers/gagan-nanda.jpeg",
    details: "Deloitte consultant. B.Tech from BVCOE New Delhi. Achieved near-perfect quant score Q51.",
  },
  {
    name: "Ashish Kumar",
    score: "GMAT 770 (Q51, V44)",
    image: "/images/toppers/ashish-kumar.jpeg",
    details: "Manager IT at HPL Public Ltd. Secured admit to Kellogg School of Management.",
  },
  {
    name: "Ayushi Sharma",
    score: "GMAT 780 (Q51, V45)",
    image: "/images/toppers/ayushi-sharma.jpeg",
    details: "BITS Pilani graduate. Quality Control Team Lead at Dr. Reddy's Laboratories. Gurgaon classroom batch.",
  },
  {
    name: "Ashish Soni",
    score: "GMAT 780 (Q51, V43)",
    image: "/images/toppers/ashish-soni.jpeg",
    details: "NIT Rourkela alumnus. Deloitte professional with 5.5 years experience. Delhi classroom batch.",
  },
];

export default function HallOfFame() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.preTitle}>Proven Track Record</span>
          <h2 className={styles.title}>
            Real Students, <span className={styles.titleHighlight}>Extraordinary Scores</span>
          </h2>
          <p className={styles.subtitle}>
            Every score below is verified with official score reports. Learn from peers who cracked 700+ to 780.
          </p>
        </div>

        <div className={styles.grid}>
          {toppersData.map((topper) => (
            <div key={topper.name + topper.score} className={styles.card}>
              <div className={styles.cardTop}>
                <Image
                  src={topper.image}
                  alt={topper.name}
                  width={72}
                  height={72}
                  className={styles.avatar}
                />
                <div className={styles.cardMeta}>
                  <h3 className={styles.name}>{topper.name}</h3>
                  <span className={styles.scoreBadge}>{topper.score}</span>
                </div>
              </div>
              <p className={styles.details}>{topper.details}</p>
              {topper.youtubeUrl && (
                <a
                  href={topper.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.videoLink}
                >
                  ▶ Watch Video Interview
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
