"use client";

import Link from "next/link";
import type { BlogPost } from "@/data/blogs-data";
import styles from "./blog-post.module.css";

interface BlogPostContentProps {
  post: BlogPost;
}

export default function BlogPostContent({ post }: BlogPostContentProps) {
  const handleOpenDemo = () => {
    window.dispatchEvent(new CustomEvent("open-book-demo"));
  };

  return (
    <article className={styles.articleSection}>
      <div className={`container ${styles.articleContainer}`}>
        <Link href="/blogs" className={styles.backLink}>
          ← Back to All Articles
        </Link>

        <header className={styles.articleHeader}>
          <div className={styles.metaRow}>
            <span className={styles.categoryTag}>{post.category}</span>
            <span className={styles.metaItem}>• {post.readTime}</span>
            <span className={styles.metaItem}>• Published: {post.publishedDate}</span>
          </div>

          <h1 className={styles.title}>{post.title}</h1>

          <div className={styles.authorBox}>
            <img
              src="/images/toppers/karan-780.jpeg"
              alt={post.author}
              className={styles.authorAvatar}
            />
            <div>
              <div className={styles.authorName}>{post.author}</div>
              <div className={styles.authorTitle}>MBA Admissions &amp; Test Prep Specialist</div>
            </div>
          </div>
        </header>

        <div className={styles.articleBody}>
          {post.content.map((paragraph, index) => (
            <p key={index} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
        </div>

        <div className={styles.ctaCard}>
          <h2 className={styles.ctaTitle}>Ready to Crack Your Target Score?</h2>
          <p className={styles.ctaText}>
            Join MBA Wizards for personalized, ability-based coaching led by IIT Roorkee alumni.
            Book a 1-on-1 diagnostic assessment session today.
          </p>
          <button type="button" onClick={handleOpenDemo} className={styles.ctaBtn}>
            Book Free Demo
          </button>
        </div>
      </div>
    </article>
  );
}
