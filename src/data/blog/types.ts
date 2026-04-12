import type { Metadata } from "next";
import type { ComponentType } from "react";

export interface Article {
  slug: string;
  titre: string;
  description: string;
  date: string;
  categorie: string;
  tempsLecture: string;
}

export interface BlogArticle extends Article {
  metadata: Metadata;
  Content: ComponentType;
}

