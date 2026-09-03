import styles from "./TestimonialCard.module.css";

export interface TestimonialProps {
  name: string;
  score?: string;
  admit?: string;
  review: string;
  rating?: number;
  image?: string;
}

export default function TestimonialCard({
  name,
  score,
  admit,
  review,
  rating = 5,
  image = "/images/toppers/karan-780.jpeg",
}: TestimonialProps) {
  return (
    <div className={styles.card}>
      <div className={styles.starsRow} aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i} aria-hidden="true">★</span>
        ))}
      </div>

      <p className={styles.quoteText}>&ldquo;{review}&rdquo;</p>

      <div className={styles.authorRow}>
        <img
          src={image}
          alt={name}
          className={styles.authorImg}
          loading="lazy"
        />
        <div className={styles.authorMeta}>
          <span className={styles.authorName}>{name}</span>
          <div className={styles.badgeRow}>
            {score && <span className={styles.scoreBadge}>{score}</span>}
            {admit && <span className={styles.admitText}>Admitted to {admit}</span>}
          </div>
        </div>
      </div>
    </div>
  );
}
