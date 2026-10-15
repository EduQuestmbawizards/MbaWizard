"use client";

import styles from "./CatCityBatches.module.css";

interface CatCityBatchesProps { city: string; }

export default function CatCityBatches({ city }: CatCityBatchesProps) {
  const handleOpenDemo = () => { window.dispatchEvent(new CustomEvent("open-book-demo")); };
  const batches = [
    {
      name: "CAT 1-on-1 Online Live",
      price: "₹1,00,000",
      featured: false,
      badge: "100% Private Online",
      features: [
        "1-on-1 live interactive sessions with 99+ percentile IIM alumni",
        "Personalized study roadmap tailored to your diagnostic baseline",
        "Comprehensive coverage of QA, VARC & DILR advanced strategies",
        "Full-length adaptive CAT mocks with AI question analytics",
        "Unlimited 1-on-1 doubt clearing & weekly mentor reviews",
        "Complete WAT-PI & interview preparation included",
        "Course validity until IIM admission is secured",
      ],
    },
    {
      name: "CAT 1-on-1 Offline Classroom",
      price: "₹1,50,000",
      featured: true,
      badge: "Elite In-Person",
      features: [
        "Exclusive in-person 1-on-1 mentoring at flagship centers",
        "Face-to-face coaching with senior IIT Roorkee & IIM faculty",
        "Complete printed study material kit & concept workbooks",
        "Dedicated library & quiet mock testing lab access",
        "Deep-dive error log analysis & Manthan pedagogical mapping",
        "Comprehensive 1-on-1 WAT-PI, GD & SOP personal mentorship",
        "Unlimited sessions & personal mentoring till final admission",
      ],
    },
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
