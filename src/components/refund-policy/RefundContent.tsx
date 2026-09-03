import styles from "./RefundContent.module.css";

export default function RefundContent() {
  return (
    <div>
      <div className={styles.heroHeader}>
        <div className="container">
          <h1 className={styles.title}>
            Refund <span className={styles.titleHighlight}>Policy</span>
          </h1>
          <p className={styles.updated}>Last Updated: January 2025</p>
        </div>
      </div>

      <section className={styles.section}>
        <div className={`container ${styles.body}`}>
          <div className={styles.highlightBox}>
            MBA Wizards follows a strict No-Refund Policy. Please read the terms below carefully before enrolling in any of our coaching or consulting programs.
          </div>

          <h2 className={styles.heading}>Commitment to Transparency</h2>
          <p className={styles.paragraph}>
            At <strong>MBA Wizards</strong>, we are dedicated to providing transparency and clarity in all our services. We ensure every aspirant has access to free demo classes, syllabus walkthroughs, and diagnostic counseling sessions before making any financial commitment.
          </p>

          <h2 className={styles.heading}>Free Demo Classes &amp; Counseling Prior to Enrollment</h2>
          <p className={styles.paragraph}>
            We offer complimentary live demo sessions and one-on-one mentor counseling so that you can evaluate our teaching pedagogy, instructor caliber, portal resources, and study plans prior to enrollment. Enrollment is therefore considered an informed, conscious decision.
          </p>

          <h2 className={styles.heading}>No Refund Once Enrolled</h2>
          <p className={styles.paragraph}>
            Because MBA Wizards delivers intangible, intellectual, and irrevocable services—including instant access to proprietary 50,000+ question banks, faculty slot reservations, and customized curriculum roadmaps—all fees paid are non-refundable under any circumstances.
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>Non-attendance or absence from scheduled classes does not warrant a refund.</li>
            <li className={styles.listItem}>Personal schedule changes or changes of career plans do not qualify for cancellations.</li>
            <li className={styles.listItem}>Inability to complete the course duration within student timelines is not refundable.</li>
          </ul>

          <h2 className={styles.heading}>Consulting &amp; Application Packages Are Final</h2>
          <p className={styles.paragraph}>
            All university admissions consulting services (including profile evaluations, resume reviews, statement of purpose edits, interview prep, and research paper mentoring) are treated as binding, custom engagements. Once mentor hours are initiated, no refunds or cancellations will be entertained.
          </p>

          <h2 className={styles.heading}>Policy Acceptance</h2>
          <p className={styles.paragraph}>
            By enrolling in any of our classroom, online live, or consulting packages, you acknowledge that you have read, understood, and agreed to this No-Refund Policy without exception.
          </p>
          <p className={styles.paragraph}>
            For any queries regarding batch scheduling, rescheduling options, or makeup sessions, please connect with student support at <strong>info@mbawizards.co.in</strong> or <strong>+91-9958041888</strong>.
          </p>
        </div>
      </section>
    </div>
  );
}
