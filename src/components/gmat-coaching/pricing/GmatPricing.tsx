"use client";

import styles from "./GmatPricing.module.css";

const pricingTiers = [
  {
    title: "GMAT 1-on-1 Online Live",
    price: "₹1,00,000",
    gst: "+ GST",
    featured: false,
    badge: "100% Private Online",
    features: [
      "100% private 1-on-1 live coaching sessions",
      "IIT Roorkee mentor-led personalized study plan",
      "Complete GMAT Focus coverage: Quant, Verbal & Data Insights",
      "Full computer-adaptive mock tests with AI diagnostics",
      "Direct WhatsApp access to mentor for unlimited doubt clearing",
      "Deep-dive error log analysis & weekly milestone reviews",
      "Complimentary global B-school application strategy",
    ],
  },
  {
    title: "GMAT 1-on-1 Offline Classroom",
    price: "₹1,50,000",
    gst: "+ GST",
    featured: true,
    badge: "Elite In-Person",
    features: [
      "Exclusive face-to-face 1-on-1 classroom coaching at center",
      "Senior IIT faculty guidance with customized timetable",
      "Complete printed study kit & official guide workbooks",
      "Dedicated study lab & proctored adaptive testing facilities",
      "Hard Math & DI specialized 1-on-1 clinics",
      "Comprehensive MBA admissions consulting & essay guidance",
      "Unlimited classes till target 705+ score secured",
    ],
  },
];

export default function GmatPricing() {
  const handleEnroll = () => {
    window.dispatchEvent(new CustomEvent("open-book-demo"));
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.preTitle}>Transparent Options</span>
          <h2 className={styles.title}>
            Course Options & <span className={styles.titleHighlight}>Fee Structure</span>
          </h2>
          <p className={styles.subtitle}>
            Choose the learning format that fits your work schedule, current baseline, and target intake timeline.
          </p>
        </div>

        <div className={styles.grid}>
          {pricingTiers.map((tier) => (
            <div
              key={tier.title}
              className={`${styles.card} ${tier.featured ? styles.featured : ""}`}
            >
              {tier.badge && <span className={styles.badge}>{tier.badge}</span>}
              <div>
                <h3 className={styles.cardTitle}>{tier.title}</h3>
                <div className={styles.priceBox}>
                  <div className={styles.priceAmount}>{tier.price}</div>
                  <span className={styles.priceGst}>{tier.gst}</span>
                </div>
                <div className={styles.featuresList}>
                  {tier.features.map((f) => (
                    <div key={f} className={styles.feature}>
                      <span className={styles.check}>✓</span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button type="button" onClick={handleEnroll} className={styles.enrollBtn}>
                Enroll / Request Demo
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
