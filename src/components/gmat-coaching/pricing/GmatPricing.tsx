"use client";

import styles from "./GmatPricing.module.css";

const pricingTiers = [
  {
    title: "Online Live Group",
    price: "₹30,000",
    gst: "+ GST",
    featured: false,
    badge: "",
    features: [
      "Interactive live online classes",
      "Batch size capped at 12 students",
      "Full video library recording access",
      "Weekly diagnostic assessments",
      "Complete GMAT study materials",
    ],
  },
  {
    title: "Offline Classroom",
    price: "₹40,000",
    gst: "+ GST",
    featured: true,
    badge: "Most Popular",
    features: [
      "Gurgaon center classroom sessions",
      "Direct in-person faculty guidance",
      "Study rooms & quiet library access",
      "Daily doubt-clearing hours",
      "Complete mock test series",
    ],
  },
  {
    title: "Online 1-on-1 Mentorship",
    price: "₹60,000",
    gst: "+ GST",
    featured: false,
    badge: "Personalized",
    features: [
      "100% private 1-on-1 coaching",
      "Customized pacing & timetable",
      "Direct WhatsApp access to mentor",
      "Deep-dive error log analysis",
      "Flexible session rescheduling",
    ],
  },
  {
    title: "Topper’s Club",
    price: "₹80,000",
    gst: "+ GST",
    featured: false,
    badge: "Target 735+",
    features: [
      "Faculty recommendation required",
      "Unlimited classes until target score",
      "Free retake support policy",
      "Complete admissions consulting",
      "M7 & European B-school essay reviews",
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
