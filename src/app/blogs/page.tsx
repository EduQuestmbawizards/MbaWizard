import { Metadata } from "next";
import { getAllBlogSummaries } from "@/lib/blog";
import BlogSearchContainer from "@/components/blog/BlogSearchContainer";
import { blogsMetadata, blogsJsonLd } from "./schema";
import styles from "./blogs.module.css";

export const revalidate = 3600; // Revalidate cache every hour

export const metadata: Metadata = blogsMetadata;

export default async function BlogsPage() {
  const blogs = await getAllBlogSummaries();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogsJsonLd) }}
      />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.preTitle}>MBA Wizards Knowledge Base</span>
            <h1 className={styles.title}>
              Expert Insights, Test Strategies &amp; <span className={styles.titleHighlight}>Admissions Playbooks</span>
            </h1>
            <p className={styles.subtitle}>
              Browse over 100+ in-depth articles, GMAT Focus frameworks, CAT interview tips, and top business school case studies authored by IIT Roorkee mentors.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Search & Filterable Grid */}
      <section className={styles.contentSection}>
        <div className="container">
          <BlogSearchContainer initialBlogs={blogs} />
        </div>
      </section>
    </main>
    </>
  );
}
