import type { Metadata } from "next";
import Link from "next/link";
import { searchTMDBMovie } from "@/lib/tmdb";
import { ottPlatforms } from "@/lib/ott-data";

type Props = { params: Promise<{ slug: string }> };

function toTitle(slug: string) {
  return slug
    .split("-")
    .filter(Boolean)
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join(" ");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const title = toTitle(slug);
  return {
    title: `Where to watch ${title} in India`,
    description: `Find where to watch ${title} in India across OTT platforms with quick links and alternatives.`,
  };
}

export default async function WhereToWatchDetailPage({ params }: Props) {
  const { slug } = await params;
  const title = toTitle(slug);
  const movie = await searchTMDBMovie(title);

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <p className="text-sm uppercase tracking-wide text-red-400">Where to watch</p>
      <h1 className="mt-2 text-3xl font-bold text-zinc-50 sm:text-4xl">Where to watch {title} in India</h1>
      <p className="mt-4 text-zinc-400">
        We update availability frequently. Always verify the final streaming status in the platform app
        before subscribing.
      </p>

      {movie ? (
        <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
          <h2 className="text-xl font-semibold text-zinc-100">{movie.title}</h2>
          {movie.release_date && (
            <p className="mt-1 text-sm text-zinc-500">Release date: {movie.release_date}</p>
          )}
          {movie.vote_average ? (
            <p className="mt-1 text-sm text-amber-400">TMDB rating: {movie.vote_average.toFixed(1)} / 10</p>
          ) : null}
          {movie.overview ? <p className="mt-4 leading-relaxed text-zinc-300">{movie.overview}</p> : null}
        </div>
      ) : (
        <div className="mt-8 rounded-xl border border-dashed border-zinc-700 bg-zinc-900/20 p-6 text-zinc-400">
          Add <code className="text-amber-400">TMDB_API_KEY</code> in <code className="text-amber-400">.env.local</code>{" "}
          to auto-fill movie metadata.
        </div>
      )}

      <section className="mt-10 rounded-xl border border-zinc-800 bg-zinc-900/30 p-6">
        <h2 className="text-xl font-semibold text-zinc-100">Streaming options</h2>
        <p className="mt-2 text-sm text-zinc-500">
          These links may contain affiliate tracking.{" "}
          <Link href="/affiliate-disclosure" className="text-amber-400 hover:text-amber-300">
            Read disclosure
          </Link>
          .
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {ottPlatforms.map((p) => (
            <a
              key={p.name}
              href={p.affiliateLink}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="rounded-lg border border-zinc-700 bg-zinc-900/80 p-4 transition hover:border-amber-500/60"
            >
              <p className="font-semibold text-zinc-100">{p.name}</p>
              <p className="mt-1 text-sm text-zinc-500">{p.price}</p>
              <p className="mt-3 text-sm text-amber-400">Check availability</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
