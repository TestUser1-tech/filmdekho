import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Where to watch",
  description:
    "Find where movies and shows stream in India — template for SEO pages like “Where to watch [movie]”.",
};

export default function WhereToWatchHubPage() {
  const samples = ["pushpa-2", "kgf-2", "dune-part-two", "stree-2"];
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold text-zinc-50">Where to watch</h1>
      <p className="mt-4 leading-relaxed text-zinc-400">
        This section is designed for high-intent SEO pages: one URL per title (e.g.{" "}
        <code className="rounded bg-zinc-800 px-1 text-amber-400">/where-to-watch/pushpa-2</code>). Add
        dynamic routes under <code className="rounded bg-zinc-800 px-1">where-to-watch/[slug]</code> and
        pull streaming data from Sanity or TMDB using <code className="rounded bg-zinc-800 px-1">TMDB_API_KEY</code>.
      </p>
      <ul className="mt-8 list-inside list-disc space-y-2 text-zinc-300">
        <li>Unique title + meta description per movie (max 60 / 160 chars).</li>
        <li>Internal links to related news and OTT comparison.</li>
        <li>JSON-LD <code className="text-amber-500/80">Movie</code> schema (see <code className="text-amber-500/80">seo.ts</code>).</li>
      </ul>
      <div className="mt-8">
        <h2 className="text-lg font-semibold text-zinc-100">Popular lookups</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {samples.map((slug) => (
            <Link
              key={slug}
              href={`/where-to-watch/${slug}`}
              className="rounded-full border border-zinc-700 px-3 py-1 text-sm text-zinc-300 hover:border-amber-500/70 hover:text-amber-300"
            >
              {slug.replaceAll("-", " ")}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
