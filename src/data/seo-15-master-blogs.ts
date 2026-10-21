import { MasterBlogPost } from "./gmat-score-improvement-blogs";
import { clusterABlogs } from "./seo-blogs-cluster-a";
import { clusterBBlogs } from "./seo-blogs-cluster-b";
import { clusterCBlogs } from "./seo-blogs-cluster-c";

export const seo15MasterBlogs: MasterBlogPost[] = [
  ...clusterABlogs,
  ...clusterBBlogs,
  ...clusterCBlogs,
];

export { clusterABlogs, clusterBBlogs, clusterCBlogs };
