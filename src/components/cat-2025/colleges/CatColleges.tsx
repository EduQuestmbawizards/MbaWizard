import styles from "./CatColleges.module.css";

const tiers = [
  {
    title: "Tier 1: Elite B-Schools",
    percentile: "98 - 99.9+ %ile",
    colleges: [
      "IIM Ahmedabad, Bangalore, Calcutta",
      "IIM Lucknow, Kozhikode, Indore",
      "FMS Delhi (Faculty of Management Studies)",
      "SPJIMR Mumbai",
      "MDI Gurgaon",
      "IIM Shillong & New IIMs (Trichy, Ranchi, Udaipur)",
    ],
  },
  {
    title: "Tier 2: Premier Institutes",
    percentile: "85 - 95 %ile",
    colleges: [
      "IIT Delhi, Bombay, Kharagpur (DoMS/SJMSOM)",
      "Baby IIMs (Nagpur, Visakhapatnam, Jammu, Sirmaur)",
      "IMT Ghaziabad",
      "IMI New Delhi",
      "Great Lakes Institute of Management, Chennai/Gurgaon",
      "TAPMI Manipal & FORE School of Management",
    ],
  },
  {
    title: "Tier 3: Merit & Profile Based",
    percentile: "75 - 85 %ile",
    colleges: [
      "GIM Goa (Goa Institute of Management)",
      "IRMA Anand",
      "KJ Somaiya Mumbai",
      "BIMTECH Greater Noida",
      "SOIL Institute of Management, Gurgaon",
      "Jaipuria Institute of Management & XIME",
    ],
  },
];

export default function CatColleges() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.preTitle}>Admissions Landscape</span>
          <h2 className={styles.title}>
            Top Colleges in India <span className={styles.titleHighlight}>Accepting CAT Scores</span>
          </h2>
          <p className={styles.subtitle}>
            Explore the cutoff percentiles and top management institutes across India that you can target with your CAT score.
          </p>
        </div>

        <div className={styles.grid}>
          {tiers.map((t) => (
            <div key={t.title} className={styles.tierCard}>
              <div className={styles.tierHeader}>
                <h3 className={styles.tierTitle}>{t.title}</h3>
                <span className={styles.percentile}>{t.percentile}</span>
              </div>
              <div className={styles.collegesList}>
                {t.colleges.map((c) => (
                  <div key={c} className={styles.collegeItem}>
                    <span className={styles.bullet}>▸</span>
                    <span>{c}</span>
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
