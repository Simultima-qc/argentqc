import { blogArticles } from "@/data/blog";
import type { Article } from "@/data/blog";

const articles: Article[] = blogArticles.map((entry) => {
  const { metadata, Content, ...article } = entry;
  void metadata;
  void Content;
  return article;
});

export type { Article };

export default articles;

