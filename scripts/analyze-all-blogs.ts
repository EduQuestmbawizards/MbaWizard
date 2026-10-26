import { all15MasterBlogs, getAllBlogSummaries } from '../src/lib/blog';
import { gmatMockAnalyticsBlogs } from '../src/data/gmat-mock-analytics-blogs';
import { gmatGurgaonBlogs } from '../src/data/gmat-gurgaon-blogs';
import { blogPosts } from '../src/data/blogs-data';
import wpBlogs from '../src/data/wp-blogs.json';

async function main() {
  console.log('--- ALL BLOG DATASETS ---');
  console.log('all15MasterBlogs count:', all15MasterBlogs.length);
  console.log('gmatMockAnalyticsBlogs count:', gmatMockAnalyticsBlogs.length);
  console.log('gmatGurgaonBlogs count:', gmatGurgaonBlogs.length);
  console.log('blogPosts (local) count:', blogPosts.length);
  console.log('wpBlogs count:', wpBlogs.length);
  
  const allSummaries = await getAllBlogSummaries();
  console.log('getAllBlogSummaries unique count:', allSummaries.length);
  
  const dateCounts: Record<string, number> = {};
  for (const b of allSummaries) {
    const d = (b.publishedAt || 'Unknown').substring(0, 7);
    dateCounts[d] = (dateCounts[d] || 0) + 1;
  }
  console.log('Date distribution:', dateCounts);
}

main().catch(console.error);
