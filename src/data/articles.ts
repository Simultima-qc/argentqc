import { blogArticles } from "@/data/blog";
import type { Article } from "@/data/blog";

const articles: Article[] = blogArticles.map(({ metadata: _metadata, Content: _Content, ...article }) => article);

export type { Article };

export default articles;

