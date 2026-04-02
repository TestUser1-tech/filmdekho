import Link from "next/link";
import { getLatestArticles, getTrendingMovies } from "@/lib/queries";
import { ArticleCard } from "@/components/articles/ArticleCard";
import { MovieCard } from "@/components/movies/MovieCard";
import { AdBanner } from "@/components/ads/AdBanner";

export const revalidate = 60;

export default async function HomePage() {
  const [articles, movies] = await Promise.all([getLatestArticles(8), getTrendingMovies(6)]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <section className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black px-6 py-16 sm:px-12">
        <div className="relative z-10 max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-red-400">Movie news & OTT</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            FilmDekho — what to watch next
          </h1>
          <p className="mt-4 text-lg text-zinc-400">
            Your daily dose of movies, web series, and OTT guides for India.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/news"
              className="rounded-lg bg-amber-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-amber-400"
            >
              Latest news
            </Link>
            <Link
              href="/ott/compare"
              className="rounded-lg border border-zinc-600 px-5 py-2.5 text-sm font-semibold text-zinc-200 transition hover:bg-zinc-800"
            >
              Compare OTT plans
            </Link>
          </div>
        </div>
      </section>

      <AdBanner slot="home-mid" className="my-10" />

      <section className="mt-12">
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="text-2xl font-bold text-zinc-100">Latest news</h2>
          <Link href="/news" className="text-sm font-medium text-amber-400 hover:text-amber-300">
            View all →
          </Link>
        </div>
        {articles.length === 0 ? (
          <div className="rounded-xl border border-dashed border-zinc-700 bg-zinc-900/30 p-10 text-center text-zinc-500">
            <p>No articles yet. Connect Sanity (see <code className="text-amber-500/80">.env.example</code>) and
            publish articles from the Studio.</p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((a) => (
              <ArticleCard key={a._id} article={a} />
            ))}
          </div>
        )}
      </section>

      <section className="mt-16">
        <h2 className="mb-6 text-2xl font-bold text-zinc-100">Trending in CMS</h2>
        {movies.length === 0 ? (
          <p className="text-zinc-500">
            Add <code className="text-amber-500/80">movie</code> documents in Sanity to show posters here.
          </p>
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {movies.map((m) => (
              <MovieCard key={m._id} movie={m} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
