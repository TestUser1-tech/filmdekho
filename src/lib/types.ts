import type { PortableTextBlock } from "@portabletext/types";

export type Article = {
  _id: string;
  title: string;
  slug?: { current: string };
  excerpt: string;
  coverImage?: string;
  content?: PortableTextBlock[];
  category: string;
  author?: string;
  publishedAt?: string;
  tags?: string[];
};

export type Movie = {
  _id: string;
  title: string;
  poster?: string;
  rating?: number;
  releaseDate?: string;
  language?: string;
  ottPlatform?: string;
};

export type OTTPlatform = {
  name: string;
  price: string;
  affiliateLink: string;
  pros: string[];
  cons: string[];
};
