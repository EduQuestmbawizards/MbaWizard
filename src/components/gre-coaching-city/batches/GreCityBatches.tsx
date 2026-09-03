"use client";

import styles from "./GreCityBatches.module.css";

interface GreCityBatchesProps {
  city: string;
}

export default function GreCityBatches({ city }: GreCityBatchesProps) {
  const handleOpenDemo = () => {
    window.dispatchEvent(new CustomEvent("open-book-demo"));
  };

  const batches = [
    {
      name: "GRE Online Live (Group)",
      price: "₹25,000",
      featured: false,
      badge: null,
      features: [
        "Live interactive sessions with expert faculty",
        "Recorded sessions for unlimited revision",
        "Digital whiteboard and screen sharing",
        "Mobile app for on-the-go learning",
        "Unlimited mock test series access",
        "24/7 doubt clearing support",
      ],
    },
    {
      name: "GRE Classroom (Regular)",
      price: "₹35,000",
      featured: false,
      badge: null,
      features: [
        "Small batch sizes (max 12 students)",
        "Interactive face-to-face sessions",
        "Immediate doubt resolution in class",
        "Peer learning opportunities",
        "Complete mock test series",
        "Graduate admissions guidance included",
      ],
    },
    {
      name: "GRE Weekend Batch",
      price: "₹40,000",
      featured: true,
      badge: "Best for Working Pros",
      features: [
        "Intensive Saturday-Sunday sessions",
        "Networking with corporate professionals",
        "Complete curriculum in flexible timing",
        "Special focus on test-taking strategies",
        "Hybrid classroom + online attendance",
        "Unlimited doubt support till test day",
      ],
    },
    {
      name: "GRE 320+ Elite Track",
      price: "₹65,000",
      featured: false,
      badge: "Top Scorers",
      features: [
        "Advanced problem-solving techniques",
        "Elite-level practice question bank",
        "Personalized mentoring approach",
        "Score guarantee program",
        "University-specific SOP and essay help",
        "Alumni mentorship from Stanford / MIT",
      ],
    },
  ];

  const stories = [
    {
      name: "Rahul's Journey to Stanford",
      text: `Rahul, a software engineer, struggled with verbal reasoning. Our GRE coaching in ${city} helped him improve from 310 to 325, securing admission to Stanford's MS Computer Science program.`,
    },
    {
      name: "Priya's MIT Success",
      text: `Working at an MNC, Priya needed flexible learning. Our weekend GRE classes in ${city} helped her balance work and preparation, achieving a 330 score and MIT admission with full funding.`,
    },
  ];

  const universities = [
    "Stanford University",
    "MIT",
    "Harvard University",
    "UC Berkeley",
    "Columbia University",
    "Carnegie Mellon University",
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.preTitle}>Programs &amp; Pricing</span>
          <h2 className={styles.title}>
            GRE Coaching Programs in <span className={styles.titleHighlight}>{city}</span>
          </h2>
          <p className={styles.subtitle}>
            Transparent, results-oriented GRE programs for every schedule and score goal —
            from 310 foundation tracks to elite 325+ pathways.
          </p>
        </div>

        <div className={styles.batchGrid}>
          {batches.map((b) => (
            <div key={b.name} className={`${styles.batchCard} ${b.featured ? styles.featuredCard : ""}`}>
              {b.badge && <span className={styles.badge}>{b.badge}</span>}
              <h3 className={styles.batchName}>{b.name}</h3>
              <div className={styles.priceBox}>
                <div className={styles.price}>{b.price}</div>
                <span className={styles.taxLabel}>+ GST</span>
              </div>
              <ul className={styles.featuresList}>
                {b.features.map((f) => (
                  <li key={f} className={styles.featureItem}>{f}</li>
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

        <div className={styles.successBox}>
          <div>
            <h3 className={styles.successTitle}>Success Stories from {city}</h3>
            <div className={styles.successStories}>
              {stories.map((s) => (
                <div key={s.name} className={styles.storyCard}>
                  <div className={styles.storyName}>{s.name}</div>
                  <p className={styles.storyText}>{s.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className={styles.universitiesTitle}>Our Students Secured Admissions To:</h3>
            <ul className={styles.univList}>
              {universities.map((u) => (
                <li key={u} className={styles.univItem}>🎓 {u}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
