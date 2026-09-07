import Link from "next/link";
import styles from "./RefundContent.module.css";

export default function RefundContent() {
  return (
    <div className={styles.pageWrapper}>
      {/* Hero Header */}
      <section className={styles.heroHeader}>
        <div className="container">
          <div className={styles.breadcrumb}>
            <Link href="/" className={styles.breadcrumbLink}>Home</Link>
            <span className={styles.breadcrumbSep}>›</span>
            <span className={styles.breadcrumbCurrent}>Refund Policy</span>
          </div>

          <div className={styles.heroBadge}>
            <span className={styles.badgeIcon}>⚖️</span>
            <span>Enrollment Terms &amp; Transparency</span>
          </div>

          <h1 className={styles.title}>
            Refund <span className={styles.titleHighlight}>Policy</span>
          </h1>

          <p className={styles.subtitle}>
            Clear, transparent, and upfront terms regarding our coaching enrollments, mentor allocations, and admissions consulting packages.
          </p>

          <div className={styles.metaRow}>
            <div className={styles.metaPill}>
              <span className={styles.metaIcon}>🎓</span>
              <span>Informed Decision Guaranteed</span>
            </div>
            <div className={styles.metaPill}>
              <span className={styles.metaIcon}>📋</span>
              <span>Free Pre-Enrollment Demos</span>
            </div>
            <div className={styles.metaPill}>
              <span className={styles.metaIcon}>🤝</span>
              <span>Flexible Batch Transfers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className={styles.mainSection}>
        <div className={`container ${styles.layout}`}>
          {/* Important Notice Callout */}
          <div className={styles.warningNotice}>
            <div className={styles.warningIcon}>⚠️</div>
            <div>
              <h3 className={styles.warningTitle}>Strict No-Refund Policy Notice</h3>
              <p className={styles.warningText}>
                MBA Wizards follows a strict <strong>No-Refund Policy</strong> across all classroom courses, live online programs, and admissions consulting packages. Because all applicants receive extensive complimentary demo sessions and counseling prior to enrollment, fee payments represent an informed and definitive commitment.
              </p>
            </div>
          </div>

          <div className={styles.contentContainer}>
            {/* Block 1 */}
            <article className={styles.policyBlock}>
              <div className={styles.blockHeader}>
                <span className={styles.blockNum}>01</span>
                <div>
                  <h2 className={styles.blockTitle}>Commitment to Academic Transparency</h2>
                  <p className={styles.blockSub}>Ensuring full clarity on methodology before you invest</p>
                </div>
              </div>
              <div className={styles.blockBody}>
                <p>
                  At <strong>MBA Wizards</strong>, we believe every candidate deserves complete visibility into our instructional quality before making any financial investment. We never ask students to enroll blindly.
                </p>
                <div className={styles.featureGrid}>
                  <div className={styles.featureItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <div>
                      <strong>Free Live Demo Classes:</strong> Attend interactive classes with our IIT/IIM alumni faculty to evaluate pedagogical style firsthand.
                    </div>
                  </div>
                  <div className={styles.featureItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <div>
                      <strong>Diagnostic Assessment:</strong> Take a full diagnostic test to understand your starting percentile and customized study requirements.
                    </div>
                  </div>
                  <div className={styles.featureItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <div>
                      <strong>1-on-1 Mentor Counseling:</strong> Speak directly with senior academic advisors to review target business schools and timelines.
                    </div>
                  </div>
                  <div className={styles.featureItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <div>
                      <strong>Curriculum Walkthrough:</strong> Full transparency into course deliverables, test portal features, and doubt-solving frameworks.
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Block 2 */}
            <article className={styles.policyBlock}>
              <div className={styles.blockHeader}>
                <span className={styles.blockNum}>02</span>
                <div>
                  <h2 className={styles.blockTitle}>Why Fees Are Irrevocable &amp; Non-Refundable</h2>
                  <p className={styles.blockSub}>Immediate allocation of faculty and intellectual resources</p>
                </div>
              </div>
              <div className={styles.blockBody}>
                <p>
                  Upon fee receipt, MBA Wizards immediately incurs non-recoverable operational and intellectual costs on your behalf:
                </p>
                <ul className={styles.styledList}>
                  <li><strong>Dedicated Mentor Allocation:</strong> Reserving limited batch seats with 99th percentile IIT/IIM instructors, capping peer group size to ensure personalized attention.</li>
                  <li><strong>Proprietary Digital Licenses:</strong> Instant activation of portal accounts with access to 50,000+ curated questions, video explanations, and AI analytics engines.</li>
                  <li><strong>Study Materials &amp; LMS Integration:</strong> Copyrighted physical and digital preparation materials distributed immediately upon admission.</li>
                </ul>
                <div className={styles.subNotice}>
                  Consequently, all fees once paid are non-refundable and non-transferable to non-family third parties under any circumstances.
                </div>
              </div>
            </article>

            {/* Block 3 */}
            <article className={styles.policyBlock}>
              <div className={styles.blockHeader}>
                <span className={styles.blockNum}>03</span>
                <div>
                  <h2 className={styles.blockTitle}>Non-Refundable Circumstances</h2>
                  <p className={styles.blockSub}>Explicit scenarios that do not qualify for refund requests</p>
                </div>
              </div>
              <div className={styles.blockBody}>
                <p>Refunds, chargebacks, or cancellations will not be processed for reasons including, but not limited to:</p>
                <ul className={styles.styledList}>
                  <li><strong>Personal Absences or Scheduling Conflicts:</strong> Inability to attend live lectures or mock tests due to job commitments, exams, or personal events. Full lecture recordings are provided in all such cases.</li>
                  <li><strong>Change of Academic Intent:</strong> Decision to cancel exam plans, postpone MBA aspirations, or switch target tests (e.g., GMAT to CAT or vice versa).</li>
                  <li><strong>Subjective Satisfaction:</strong> Failure to reach a target percentile when assigned homework, practice drills, and mock test recommendations were not completed.</li>
                  <li><strong>Consulting Packages in Progress:</strong> Once university selection, resume editing, or SOP mentoring has initiated, consulting contracts are deemed active and irrevocable.</li>
                </ul>
              </div>
            </article>

            {/* Block 4 */}
            <article className={styles.policyBlock}>
              <div className={styles.blockHeader}>
                <span className={styles.blockNum}>04</span>
                <div>
                  <h2 className={styles.blockTitle}>Contingencies, Pauses &amp; Batch Flexibility</h2>
                  <p className={styles.blockSub}>How we support you when unexpected life situations arise</p>
                </div>
              </div>
              <div className={styles.blockBody}>
                <p>
                  While fees are non-refundable, we deeply empathize with genuine personal emergencies, medical contingencies, or urgent corporate travel. In such scenarios, MBA Wizards offers student-first flexibility:
                </p>
                <div className={styles.featureGrid}>
                  <div className={styles.featureItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <div>
                      <strong>Batch Pause (Up to 6 Months):</strong> Freeze your course enrollment and resume with an upcoming batch without paying any re-admission fees.
                    </div>
                  </div>
                  <div className={styles.featureItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <div>
                      <strong>Course Adjustment:</strong> Transfer remaining coaching credits toward another program (e.g., transitioning GRE preparation into CAT preparation).
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Block 5 - Support Card */}
            <div className={styles.contactCard}>
              <div className={styles.contactHeader}>
                <div className={styles.contactBadge}>Student Helpdesk</div>
                <h3 className={styles.contactTitle}>Need Assistance with Batch Rescheduling?</h3>
                <p className={styles.contactSub}>If you have questions about our policies or need to request a batch pause, our administrative desk is here to help.</p>
              </div>

              <div className={styles.contactGrid}>
                <div className={styles.contactItem}>
                  <span className={styles.contactItemIcon}>✉️</span>
                  <div>
                    <span className={styles.contactItemLabel}>Official Email</span>
                    <a href="mailto:info@mbawizards.co.in" className={styles.contactItemLink}>info@mbawizards.co.in</a>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <span className={styles.contactItemIcon}>📞</span>
                  <div>
                    <span className={styles.contactItemLabel}>Administrative Desk</span>
                    <a href="tel:+919958041888" className={styles.contactItemLink}>+91-9958041888</a>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <span className={styles.contactItemIcon}>💬</span>
                  <div>
                    <span className={styles.contactItemLabel}>Direct WhatsApp Support</span>
                    <a href="https://wa.me/919958041888" target="_blank" rel="noopener noreferrer" className={styles.contactItemLink}>Chat on WhatsApp</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
