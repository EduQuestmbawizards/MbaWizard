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
      name: "GMAT 1-on-1 Online Live",
      price: "₹1,00,000",
      featured: false,
      badge: "100% Private Online",
      features: [
        "100% private 1-on-1 coaching with IIT Roorkee faculty",
        "Customized study plan & timetable for working professionals",
        "Complete GMAT Focus coverage: Quant, Verbal & Data Insights",
        "Full computer-adaptive mock tests with AI diagnostic insights",
        "Unlimited 1-on-1 doubt clearing sessions till exam day",
        "Personalized error log analysis & weekly milestones",
        "Complimentary global B-school admissions consulting",
      ],
    },
    {
      name: "GMAT 1-on-1 Offline Classroom",
      price: "₹1,50,000",
      featured: true,
      badge: "Elite In-Person",
      features: [
        "Exclusive in-person 1-on-1 classroom training at center",
        "Direct face-to-face mentorship with senior IIT faculty",
        "Complete physical study kit & official practice workbooks",
        "Dedicated quiet study lab & computer-adaptive testing suite",
        "Specialized 1-on-1 clinics for Hard Quant & Data Insights",
        "End-to-end B-school application & essay review strategy",
        "Unlimited sessions till target 705+ score secured",
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
