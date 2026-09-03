"use client";

import styles from "./ConsultingPackages.module.css";

const applicationTiers = [
  {
    tier: "Tier 1",
    coverage: "2 Universities",
    price: "₹2.5 Lakhs",
    inclusions: "Comprehensive story brainstorming, 2 university application essays, tailored Statement of Purpose (SOP), executive resume crafting, and 2 mock admissions interviews.",
  },
  {
    tier: "Tier 2",
    coverage: "3 Universities",
    price: "₹3.5 Lakhs",
    inclusions: "Everything in Tier 1 + full application essays, supplemental prompts, and tailored alignment for a 3rd target university.",
  },
  {
    tier: "Tier 3",
    coverage: "4 Universities",
    price: "₹4.5 Lakhs",
    inclusions: "Everything in Tier 2 + complete essays, school-specific positioning, and scholarship application materials for a 4th university.",
  },
  {
    tier: "Tier 4",
    coverage: "5 Universities",
    price: "₹5.5 Lakhs",
    inclusions: "Everything in Tier 3 + comprehensive materials for 5 global business schools, round-wise submission strategy, and waitlist management.",
  },
  {
    tier: "Tier 5",
    coverage: "6 Universities",
    price: "₹6.5 Lakhs",
    inclusions: "Everything in Tier 4 + end-to-end consulting for 6 top institutions across US, European, and Asian business schools.",
  },
  {
    tier: "Tier 6",
    coverage: "7 Universities",
    price: "₹7.5 Lakhs",
    inclusions: "Ultimate coverage for 7 universities with unlimited drafts, dedicated mentor access, LOR advisory, and visa prep.",
  },
];

export default function ConsultingPackages() {
  const handleSelect = () => {
    window.dispatchEvent(new CustomEvent("open-book-demo"));
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.preTitle}>Transparent Tiered Plans</span>
          <h2 className={styles.title}>
            University Application <span className={styles.titleHighlight}>Consulting Packages</span>
          </h2>
          <p className={styles.subtitle}>
            Select the number of target universities you wish to apply to with hands-on support from top global B-school alumni.
          </p>
        </div>

        <div className={styles.grid}>
          {applicationTiers.map((t) => (
            <div key={t.tier} className={styles.card}>
              <div className={styles.cardHeader}>
                <h3 className={styles.tierName}>{t.tier}</h3>
                <span className={styles.coverage}>{t.coverage}</span>
                <div className={styles.price}>{t.price}</div>
              </div>
              <p className={styles.inclusions}>{t.inclusions}</p>
              <button type="button" onClick={handleSelect} className={styles.selectBtn}>
                Select Package
              </button>
            </div>
          ))}
        </div>

        <div className={styles.profileBuildingBox}>
          <div className={styles.profileContent}>
            <h3>1-Year Comprehensive Profile Building Guidance</h3>
            <p>
              Personalized mentorship, extracurricular activity planning, project ideation, research paper guidance, and leadership positioning to transform your candidacy before applications open.
            </p>
          </div>
          <div className={styles.profilePriceBox}>
            <div className={styles.profilePrice}>₹2.0 Lakhs</div>
            <span className={styles.profileDuration}>1 Year Engagement (+ GST)</span>
            <button type="button" onClick={handleSelect} className={styles.profileBtn}>
              Enroll for Mentorship
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
