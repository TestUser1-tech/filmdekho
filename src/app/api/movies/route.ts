import { NextResponse } from "next/server";

/** Example TMDB proxy — set TMDB_API_KEY in .env.local */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q")?.trim();
  const key = process.env.TMDB_API_KEY;
  if (!key) {
    return NextResponse.json({ results: [], message: "TMDB_API_KEY not set" });
  }
  if (!query) {
    return NextResponse.json({ results: [] });
  }

  const url = new URL("https://api.themoviedb.org/3/search/movie");
  url.searchParams.set("api_key", key);
  url.searchParams.set("query", query);
  url.searchParams.set("language", "en-US");

  const res = await fetch(url.toString(), {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    return NextResponse.json({ error: "TMDB error" }, { status: 502 });
  }

  const data = (await res.json()) as {
    results?: { id: number; title: string; release_date?: string; poster_path?: string }[];
  };

  return NextResponse.json({
    results: (data.results ?? []).slice(0, 10).map((m) => ({
      id: m.id,
      title: m.title,
      releaseDate: m.release_date,
      posterPath: m.poster_path,
    })),
  });
}
