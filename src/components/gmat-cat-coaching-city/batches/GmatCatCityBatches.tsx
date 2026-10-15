"use client";

import styles from "./GmatCatCityBatches.module.css";

interface GmatCatCityBatchesProps {
  city: string;
}

export default function GmatCatCityBatches({ city }: GmatCatCityBatchesProps) {
  const handleOpenDemo = () => {
    window.dispatchEvent(new CustomEvent("open-book-demo"));
  };

  const batches = [
    {
      name: "GMAT+CAT 1-on-1 Online Live",
      price: "₹1,50,000",
      featured: false,
      badge: "Dual Track Online",
      features: [
        "100% private 1-on-1 dual coaching for GMAT Focus & CAT",
        "Integrated curriculum leveraging 80% Quant and Reasoning overlap",
        "Specialized clinics for CAT DILR and GMAT Data Insights",
        "Flexible scheduling designed around college and corporate work hours",
        "10+ full-length adaptive mocks for both GMAT and CAT",
        "AI-driven question analytics & individualized error logs",
        "Complete WAT-PI, GD & international admissions consulting",
      ],
    },
    {
      name: "GMAT+CAT 1-on-1 Offline Classroom",
      price: "₹2,30,000",
      featured: true,
      badge: "Elite Dual Classroom",
      features: [
        "Exclusive face-to-face 1-on-1 classroom mentoring at center",
        "Direct mentorship with senior IIT Roorkee & IIM alumni faculty",
        "Complete physical study kits & printed materials for both exams",
        "Dedicated library & quiet testing lab for timed simulations",
        "In-person diagnostic reviews and bespoke Manthan dual mapping",
        "Comprehensive personal WAT-PI, GD & IIM/ISB interview prep",
        "Unlimited classes and validity until your final B-school admission",
      ],
    },
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.preTitle}>Investment &amp; Programs</span>
          <h2 className={styles.title}>
            GMAT+CAT Coaching Programs in <span className={styles.titleHighlight}>{city}</span>
          </h2>
          <p className={styles.subtitle}>
            Transparent programs covering both GMAT Focus Edition and CAT in one unified curriculum —
            giving you maximum admission flexibility across IIMs, ISB, and top global B-schools.
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
                  <li key={f} className={styles.featureItem}>{f}</li>
                ))}
              </ul>
              <button type="button" onClick={handleOpenDemo}
                className={`${styles.btn} ${b.featured ? styles.featuredBtn : ""}`}>
                Enroll / Book Demo
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
