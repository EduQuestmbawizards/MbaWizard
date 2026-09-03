import styles from "./GmatCityEligibilityReg.module.css";

interface GmatCityEligibilityRegProps {
  city: string;
}

export default function GmatCityEligibilityReg({ city }: GmatCityEligibilityRegProps) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.preTitle}>Candidate Guidelines</span>
          <h2 className={styles.title}>
            Eligibility &amp; Registration for <span className={styles.titleHighlight}>{city}</span> Aspirants
          </h2>
          <p className={styles.subtitle}>
            Essential eligibility criteria, academic qualifications, and GMAC registration protocols
            to help you plan your preparation timeline effectively.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Eligibility Card */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.cardIcon}>📋</span>
              <h3 className={styles.cardTitle}>GMAT 2025 Eligibility Criteria</h3>
            </div>
            <ul className={styles.list}>
              <li className={styles.item}>
                <strong>Age Requirements:</strong> The candidate must have completed 18 years of age. There is no upper age limit, making the exam ideal for both fresh graduates and experienced corporate professionals.
              </li>
              <li className={styles.item}>
                <strong>Parental Consent:</strong> Candidates between 13 and 17 years of age may appear with written permission from their parents or legal guardians.
              </li>
              <li className={styles.item}>
                <strong>Educational Qualifications:</strong> While GMAC has no mandatory minimum percentage requirement, candidates applying to graduate management (MBA/MiM) programs must possess a recognized undergraduate degree.
              </li>
              <li className={styles.item}>
                <strong>Attempts Allowed:</strong> You can take the GMAT up to 5 times in a rolling 12-month period and up to 8 times total in your lifetime.
              </li>
            </ul>
            <div className={styles.note}>
              💡 <strong>Pro Tip:</strong> Most top business schools require a minimum of 2–4 years of full-time professional experience for executive &amp; global MBA programs.
            </div>
          </div>

          {/* Registration Card */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.cardIcon}>🗓️</span>
              <h3 className={styles.cardTitle}>How to Register in {city}</h3>
            </div>
            <ul className={styles.list}>
              <li className={styles.item}>
                <strong>Advance Slot Booking:</strong> You can register up to 6 months prior to your target exam date or up to 24 hours before test day. However, prime weekend slots in {city} fill quickly.
              </li>
              <li className={styles.item}>
                <strong>Three Ways to Register:</strong>
                <br />1. <em>Online:</em> Register on mba.com with your passport credentials.
                <br />2. <em>Phone:</em> Call Pearson VUE customer service.
                <br />3. <em>Postal Mail:</em> Mail complete registration forms with bank drafts.
              </li>
              <li className={styles.item}>
                <strong>Exam Formats Available:</strong> Test-center delivery at official Pearson VUE centers in/around {city} or online remotely proctored test at home.
              </li>
              <li className={styles.item}>
                <strong>Rescheduling Flexibility:</strong> Reschedule or cancel directly on mba.com up to 24 hours prior to appointment time with tiered fees.
              </li>
            </ul>
            <div className={styles.note}>
              📍 <strong>Passport Requirement:</strong> A valid passport is the only acceptable primary identification for Indian citizens appearing for the GMAT test.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
