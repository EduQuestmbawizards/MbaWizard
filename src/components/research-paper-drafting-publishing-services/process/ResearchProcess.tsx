import styles from "./ResearchProcess.module.css";

const steps = [
  {
    step: "STEP 1",
    title: "Topic Selection & Personalization",
    text: "We collaborate closely to select a research theme that aligns with your passions and college ambitions—such as AI in Healthcare, Behavioral Finance, or Renewable Nanotech.",
  },
  {
    step: "STEP 2",
    title: "Research Calendar Planning",
    text: "Structured milestone roadmap mapping literature reviews, data gathering, drafting, peer reviews, and journal submission while balancing your regular schoolwork.",
  },
  {
    step: "STEP 3",
    title: "Drafting & Methodology Support",
    text: "1-on-1 mentorship on structuring academic abstracts, hypotheses, empirical methodologies, and robust citation styles (APA, MLA, Chicago, IEEE).",
  },
  {
    step: "STEP 4",
    title: "Academic Editing & Refinement",
    text: "Thorough line-by-line editorial reviews for logical consistency, grammatical precision, statistical rigor, and strict plagiarism elimination.",
  },
  {
    step: "STEP 5",
    title: "Journal Selection & Publishing",
    text: "Curating appropriate high-impact, peer-reviewed international or youth research journals, and guiding through revisions until final publication.",
  },
  {
    step: "STEP 6",
    title: "Portfolio & Profile Integration",
    text: "Leveraging your published paper in college SOPs, Common App activity sections, LinkedIn, and professor recommendation letters.",
  },
];

export default function ResearchProcess() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.preTitle}>From Idea To Publication</span>
          <h2 className={styles.title}>
            Our 6-Stage <span className={styles.titleHighlight}>Research Journey</span>
          </h2>
          <p className={styles.subtitle}>
            A guided scholarly process empowering students to author original, published contributions to their chosen discipline.
          </p>
        </div>

        <div className={styles.grid}>
          {steps.map((s) => (
            <div key={s.step} className={styles.card}>
              <span className={styles.stepNumber}>{s.step}</span>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardText}>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
