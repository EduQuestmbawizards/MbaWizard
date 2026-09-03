"use client";

import styles from "./GmatCityBatches.module.css";

interface GmatCityBatchesProps {
  city: string;
}

export default function GmatCityBatches({ city }: GmatCityBatchesProps) {
  const handleOpenDemo = () => {
    window.dispatchEvent(new CustomEvent("open-book-demo"));
  };

  const batches = [
    {
      name: "GMAT Live Online (Group)",
      price: "₹30,000",
      featured: false,
      badge: null,
      features: [
        "70+ Hours of live interactive sessions",
        "Small capped batch of 10–12 students",
        "Booster sessions for 700+ target",
        "10 Full-length adaptive mock tests",
        "Unlimited doubt sessions till exam day",
        "AI Test Generator & Question Portal",
      ],
    },
    {
      name: "GMAT Offline Classroom",
      price: "₹40,000",
      featured: true,
      badge: "Most Popular",
      features: [
        "Physical classroom training in NCR / hybrid",
        "Face-to-face mentorship with IIT faculty",
        "Rigorous physical study kit delivered",
        "Hard Math & DI specialized clinics",
        "10 Full-length computer adaptive mocks",
        "Complete group discussion & peer learning",
      ],
    },
    {
      name: "GMAT 1-on-1 Personalized",
      price: "₹60,000",
      featured: false,
      badge: null,
      features: [
        "100% Private 1-on-1 coaching",
        "Customized pace and schedule flexibility",
        "Direct founder mentorship",
        "Individualized weekly milestone reviews",
        "Deep diagnosis of every mock attempt",
        "Complimentary admissions strategy",
      ],
    },
    {
      name: "Topper's Club (750+ Track)",
      price: "₹80,000",
      featured: false,
      badge: "Selection Based",
      features: [
        "Admission via faculty recommendation",
        "Diagnostic evaluation fee: ₹10,000",
        "Unlimited classes till you reach 700+",
        "Rigorous 24/7 Practice Lab access",
        "Bespoke Manthan pedagogical mapping",
        "When 'Winning is the only option'",
      ],
    },
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.preTitle}>Investment &amp; Formats</span>
          <h2 className={styles.title}>
            Choose Your GMAT Program in <span className={styles.titleHighlight}>{city}</span>
          </h2>
          <p className={styles.subtitle}>
            Transparent, results-driven programs designed to take you from your diagnostic baseline
            to a verified 700+ GMAT score.
          </p>
        </div>

        <div className={styles.grid}>
          {batches.map((b) => (
            <div key={b.name} className={`${styles.card} ${b.featured ? styles.featuredCard : ""}`}>
              {b.badge && <span className={styles.badge}>{b.badge}</span>}
              <h3 className={styles.planName}>{b.name}</h3>
              <div className={styles.priceBox}>
                <div className={styles.price}>{b.price}</div>
                <span className={styles.tax}>+ GST</span>
              </div>
              <ul className={styles.featuresList}>
                {b.features.map((f) => (
                  <li key={f} className={styles.featureItem}>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={handleOpenDemo}
                className={`${styles.btn} ${b.featured ? styles.featuredBtn : ""}`}
              >
                Enroll / Book Demo
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
