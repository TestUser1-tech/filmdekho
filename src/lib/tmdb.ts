export type TMDBMovie = {
  id: number;
  title: string;
  overview: string;
  release_date?: string;
  vote_average?: number;
  poster_path?: string;
};

export async function searchTMDBMovie(query: string): Promise<TMDBMovie | null> {
  const key = process.env.TMDB_API_KEY;
  if (!key) return null;

  const url = new URL("https://api.themoviedb.org/3/search/movie");
  url.searchParams.set("api_key", key);
  url.searchParams.set("query", query);
  url.searchParams.set("language", "en-US");
  url.searchParams.set("include_adult", "false");

  const res = await fetch(url.toString(), { next: { revalidate: 3600 } });
  if (!res.ok) return null;

  const data = (await res.json()) as { results?: TMDBMovie[] };
  return data.results?.[0] ?? null;
}
