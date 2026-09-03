import type { Metadata } from "next";
import { blogPosts } from "@/data/blogs-data";
import { generateBlogsSchema } from "./schema";
import BlogsContent from "./blogs";

export const metadata: Metadata = {
  title: "MBA Wizards Blog — GMAT, GRE & CAT Exam Guides & Admission Insights",
  description: "Expert strategy guides, interview frameworks, exam updates, and score improvement tips for GMAT Focus, GRE, CAT, and top MBA admissions.",
};

export default function BlogsPage() {
  const schema = generateBlogsSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <BlogsContent posts={blogPosts} />
    </>
  );
}
