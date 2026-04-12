import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogArticles, blogArticlesBySlug } from "@/data/blog";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = blogArticlesBySlug.get(slug);

  if (!article) {
    return {};
  }

  return article.metadata;
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = blogArticlesBySlug.get(slug);

  if (!article) {
    notFound();
  }

  const Content = article.Content;

  return <Content />;
}

