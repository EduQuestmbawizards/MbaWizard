import { Metadata } from "next";
import { getAllBlogSummaries } from "@/lib/blog";
import BlogSearchContainer from "@/components/blog/BlogSearchContainer";
import styles from "./blogs.module.css";

export const revalidate = 3600; // Revalidate cache every hour

export const metadata: Metadata = {
  title: "MBA Preparation Blog & Admissions Insights | MBA Wizards",
  description:
    "Explore 100+ expert guides on GMAT Focus Edition, GRE strategies, CAT preparation, top MBA interview questions, application essays, and success stories by IIT Roorkee alumni.",
  alternates: {
    canonical: "https://www.mbawizards.co.in/blogs",
  },
  openGraph: {
    title: "MBA Preparation Blog & Admissions Insights | MBA Wizards",
    description:
      "Master GMAT Focus, CAT, GRE, and M7/IIM admissions with proven frameworks, test debriefs, and study plans.",
    url: "https://www.mbawizards.co.in/blogs",
    siteName: "MBA Wizards",
    locale: "en_IN",
    type: "website",
  },
};

export default async function BlogsPage() {
  const blogs = await getAllBlogSummaries();

  return (
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
  );
}
