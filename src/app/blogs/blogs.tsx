"use client";

import { useState } from "react";
import Link from "next/link";
import type { BlogPost } from "@/data/blogs-data";
import CtaSection from "@/components/shared/cta-section/CtaSection";
import styles from "./blogs.module.css";

interface BlogsContentProps {
  posts: BlogPost[];
}

export default function BlogsContent({ posts }: BlogsContentProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "GMAT", "GRE", "CAT", "Dual Prep", "MBA Admissions"];

  const filteredPosts =
    selectedCategory === "All"
      ? posts
      : posts.filter((p) => p.category === selectedCategory);

  return (
    <div className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.preTitle}>Insights &amp; Strategy</span>
          <h1 className={styles.title}>
            MBA Wizards <span className={styles.titleHighlight}>Study Hub &amp; Blog</span>
          </h1>
          <p className={styles.subtitle}>
            In-depth guides, verified score improvement heuristics, exam updates, and interview prep frameworks
            crafted by IIT alumni mentors.
          </p>
        </div>

        <div className={styles.filterBar}>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`${styles.filterBtn} ${selectedCategory === cat ? styles.active : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filteredPosts.map((post) => (
            <article key={post.slug} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.cardCategory}>{post.category}</span>
                <span className={styles.cardReadTime}>{post.readTime}</span>
              </div>
              <div className={styles.cardBody}>
                <h2 className={styles.cardTitle}>{post.title}</h2>
                <p className={styles.cardExcerpt}>{post.excerpt}</p>
                <div className={styles.cardFooter}>
                  <span className={styles.cardAuthor}>{post.author}</span>
                  <Link href={`/blogs/${post.slug}`} className={styles.readMoreLink}>
                    Read Article →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <CtaSection
        pretitle="Turn Knowledge Into Measurable Scores"
        title="Need Personalized Strategy Beyond"
        titleHighlight="Articles & Study Guides?"
        description="Connect 1-on-1 with IIT Roorkee alumni faculty to analyze your diagnostic test performance, timing leaks, and business school application roadmap."
        primaryButtonText="Book Free 1-on-1 Strategy Session"
        secondaryButtonText="Ask a Question on WhatsApp"
      />
    </div>
  );
}
