import TestimonialCard from "@/components/shared/testimonial-card/TestimonialCard";
import styles from "./Testimonials.module.css";

const reviews = [
  {
    name: "Ayushi Sharma",
    score: "GMAT 780",
    admit: "INSEAD MBA",
    image: "/images/toppers/ayushi-sharma.jpeg",
    review:
      "The mentors at MBA Wizards don't just teach tricks; they teach you how to think like the test makers. The mock test feedback pinpointed my exact pacing flaws in verbal and helped me jump to a 780 score.",
  },
  {
    name: "Prerna Chaudhary",
    score: "GRE 328 (Q168, V160)",
    admit: "MIT Sloan",
    image: "/images/toppers/prerna-chaudhary.jpg",
    review:
      "The weekend batch was tailored for demanding corporate schedules. Faculty were accessible round-the-clock and the diagnostic mock analytics showed me exactly where to optimize my speed.",
  },
  {
    name: "Karan Sharma",
    score: "GMAT 780 (99th %ile)",
    admit: "Harvard Business School",
    image: "/images/toppers/karan-780.jpeg",
    review:
      "The small batch size makes a massive difference. You can ask doubts directly to the faculty without feeling lost in a crowd of hundreds. Highly recommended for working professionals.",
  },
];

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.preTitle}>Student Voices</span>
          <h2 className={styles.title}>
            What Our <span className={styles.titleHighlight}>Students Say</span>
          </h2>
          <p className={styles.subtitle}>
            Hear directly from candidates who transformed their scores and stepped into elite global business schools.
          </p>
        </div>

        <div className={styles.grid}>
          {reviews.map((item) => (
            <TestimonialCard
              key={item.name}
              name={item.name}
              score={item.score}
              admit={item.admit}
              image={item.image}
              review={item.review}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
