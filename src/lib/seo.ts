import type { Metadata } from "next";
import type { Article, Movie } from "./types";

export function getArticleSEO(article: Article): Metadata {
  return {
    title: `${article.title} | FilmDekho`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: article.coverImage ? [{ url: article.coverImage }] : undefined,
      type: "article",
    },
  };
}

export function getMovieStructuredData(movie: Movie): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Movie",
    name: movie.title,
    image: movie.poster,
    aggregateRating: movie.rating
      ? {
          "@type": "AggregateRating",
          ratingValue: movie.rating,
          bestRating: "10",
        }
      : undefined,
  };
}
