import { getSanityClient } from "./sanity";
import type { Article, Movie } from "./types";

function clampCount(n: number, max = 100) {
  return Math.min(max, Math.max(1, Math.floor(n)));
}

export async function getLatestArticles(count = 10): Promise<Article[]> {
  const client = getSanityClient();
  if (!client) return [];
  const c = clampCount(count);
  return client.fetch(
    `*[_type == "article"] | order(publishedAt desc) [0...${c}] {
      _id,
      title,
      slug,
      excerpt,
      "coverImage": coverImage.asset->url,
      category,
      author,
      publishedAt
    }`,
  );
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const client = getSanityClient();
  if (!client) return null;
  return client.fetch(
    `*[_type == "article" && slug.current == $slug][0] {
      _id,
      title,
      content[]{
        ...,
        markDefs[]{...},
        _type == "image" => {
          ...,
          asset->{
            _id,
            url,
            metadata
          }
        }
      },
      excerpt,
      "coverImage": coverImage.asset->url,
      category,
      author,
      publishedAt,
      tags
    }`,
    { slug },
  );
}

export async function getRelatedArticles(
  category: string,
  excludeId: string,
  count = 4,
): Promise<Article[]> {
  const client = getSanityClient();
  if (!client) return [];
  const c = clampCount(count);
  return client.fetch(
    `*[_type == "article" && category == $category && _id != $excludeId] | order(publishedAt desc) [0...${c}] {
      _id,
      title,
      slug,
      excerpt,
      "coverImage": coverImage.asset->url,
      category,
      publishedAt
    }`,
    { category, excludeId },
  );
}

export async function getTrendingMovies(count = 6): Promise<Movie[]> {
  const client = getSanityClient();
  if (!client) return [];
  const c = clampCount(count);
  return client.fetch(
    `*[_type == "movie"] | order(releaseDate desc) [0...${c}] {
      _id,
      title,
      "poster": poster.asset->url,
      rating,
      releaseDate,
      language,
      ottPlatform
    }`,
  );
}
