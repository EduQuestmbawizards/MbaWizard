"use client";

import styles from "./CatCityBatches.module.css";

interface CatCityBatchesProps { city: string; }

export default function CatCityBatches({ city }: CatCityBatchesProps) {
  const handleOpenDemo = () => { window.dispatchEvent(new CustomEvent("open-book-demo")); };
  const batches = [
    { name: "CAT Online Live (Group)", price: "₹22,000", featured: false, badge: null, features: ["70+ Hours QA, VARC & DILR live sessions", "AI test generator and analytics", "Full-length CAT + sectional mocks", "Booster sessions for 99+ percentile", "Unlimited doubt clearing till CAT day", "WAT-PI preparation included"] },
    { name: "CAT Offline Classroom", price: "₹30,000", featured: true, badge: "Most Popular", features: ["Physical classroom at DLF Galleria / Sector 50", "Face-to-face IIT/IIM faculty", "Complete printed study material kit", "Weekend + evening batch flexibility", "10+ full-length adaptive mock tests", "Group Discussion + WAT-PI coaching"] },
    { name: "CAT 1-on-1 Coaching", price: "₹50,000", featured: false, badge: null, features: ["Fully private, customized sessions", "Founder-led personalized mentorship", "Flexible pace and schedule", "Individual milestone tracking sheets", "Complete WAT-PI personal coaching", "Validity till IIM admission secured"] },
    { name: "CAT Topper's Club (99%ile)", price: "₹65,000", featured: false, badge: "Selection Based", features: ["Admission via faculty recommendation", "Diagnostic: ₹10,000 evaluation", "Unlimited sessions till 99+ percentile", "Rigorous adaptive mock lab access", "Personalized Manthan mapping", "When 'winning is the only option'"] },
  ];
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.preTitle}>Programs &amp; Pricing</span>
          <h2 className={styles.title}>Choose Your CAT Program in <span className={styles.titleHighlight}>{city}</span></h2>
          <p className={styles.subtitle}>Transparent, results-oriented CAT programs for every schedule and target percentile — from 95th percentile foundation tracks to elite 99+ pathways.</p>
        </div>
        <div className={styles.grid}>
          {batches.map((b) => (
            <div key={b.name} className={`${styles.card} ${b.featured ? styles.featuredCard : ""}`}>
              {b.badge && <span className={styles.badge}>{b.badge}</span>}
              <h3 className={styles.planName}>{b.name}</h3>
              <div className={styles.priceBox}><div className={styles.price}>{b.price}</div><span className={styles.tax}>+ GST</span></div>
              <ul className={styles.featuresList}>{b.features.map((f) => <li key={f} className={styles.featItem}>{f}</li>)}</ul>
              <button type="button" onClick={handleOpenDemo} className={`${styles.btn} ${b.featured ? styles.featuredBtn : ""}`}>Enroll / Book Demo</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
