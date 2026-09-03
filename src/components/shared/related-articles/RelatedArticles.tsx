import styles from "./RelatedArticles.module.css";

interface Article {
  tag: string;
  emoji: string;
  title: string;
  excerpt: string;
  href: string;
}

interface RelatedArticlesProps {
  articles: Article[];
  title?: string;
  titleHighlight?: string;
}

export default function RelatedArticles({
  articles,
  title = "Latest Tips, Guides",
  titleHighlight = "& Resources",
}: RelatedArticlesProps) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.headerText}>
            <span className={styles.preTitle}>Study Hub</span>
            <h2 className={styles.title}>
              {title} <span className={styles.titleHighlight}>{titleHighlight}</span>
            </h2>
          </div>
          <a href="/blogs" className={styles.viewAll}>View All Articles →</a>
        </div>

        <div className={styles.grid}>
          {articles.map((a) => (
            <div key={a.title} className={styles.card}>
              <div className={styles.cardImg}>{a.emoji}</div>
              <div className={styles.cardBody}>
                <span className={styles.cardTag}>{a.tag}</span>
                <h3 className={styles.cardTitle}>{a.title}</h3>
                <p className={styles.cardExcerpt}>{a.excerpt}</p>
                <a href={a.href} className={styles.readMore}>Read More →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
