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
    { name: "GMAT+CAT Online Group", price: "₹30,000", featured: false, badge: null,
      features: ["70+ Hours GMAT + CAT live sessions","AI test generator for both formats","10 GMAT + CAT full-length mocks","Booster sessions for 700+/99%ile","Unlimited doubt support till exam","Online video portal access"] },
    { name: "GMAT+CAT Offline Classroom", price: "₹40,000", featured: true, badge: "Most Popular",
      features: ["Physical classroom at DLF Galleria / Sector 50","Face-to-face IIT faculty mentorship","Combined GMAT + CAT study kit","Hard Math & DI clinics included","10 GMAT + CAT adaptive mocks","Group discussion + WAT-PI prep"] },
    { name: "GMAT+CAT 1-on-1", price: "₹59,000", featured: false, badge: null,
      features: ["100% private dual coaching sessions","Customized schedule and pace","Founder-led bespoke mentorship","Individual milestone reviews weekly","Complete admissions consulting","Score guarantee for retakers"] },
    { name: "Topper\u2019s Club (750+ / 99%ile)", price: "₹80,000", featured: false, badge: "Selection Based",
      features: ["Admission via faculty recommendation","Diagnostic evaluation: ₹15,000","Unlimited classes till you reach target","Rigorous practice lab access","Bespoke Manthan dual-track mapping","When \"winning is the only option\""] },
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
