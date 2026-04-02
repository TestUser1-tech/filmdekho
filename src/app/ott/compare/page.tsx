import type { Metadata } from "next";
import { AdBanner } from "@/components/ads/AdBanner";
import { AffiliateButton } from "@/components/ott/AffiliateButton";
import { ComparisonTable } from "@/components/ott/ComparisonTable";
import { ottPlatforms } from "@/lib/ott-data";

export const metadata: Metadata = {
  title: "Best OTT platform in India 2026",
  description:
    "Compare Netflix, Prime Video, Hotstar, and more — pricing, pros, cons, and subscribe links.",
};

export default function OTTComparePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="text-3xl font-bold text-zinc-50 sm:text-4xl">Best OTT platform in India — 2026</h1>
      <p className="mt-3 max-w-2xl text-zinc-400">
        Indicative pricing and quick pros/cons. Replace affiliate links in{" "}
        <code className="text-amber-500/90">src/lib/ott-data.ts</code> with your program URLs.
      </p>
      <p className="mt-2 text-sm text-zinc-500">
        Disclosure: this page may contain affiliate links. Read full policy in{" "}
        <a href="/affiliate-disclosure" className="text-amber-400 hover:text-amber-300">
          Affiliate Disclosure
        </a>
        .
      </p>

      <div className="mt-8">
        <AdBanner slot="ott-top" />
      </div>

      <div className="mt-10 space-y-10">
        {ottPlatforms.map((p) => (
          <section
            key={p.name}
            className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-zinc-100">{p.name}</h2>
                <p className="mt-1 text-lg text-amber-400">{p.price}</p>
              </div>
              <AffiliateButton platform={p.name} link={p.affiliateLink} />
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-400/90">Pros</h3>
                <ul className="mt-2 list-inside list-disc text-zinc-400">
                  {p.pros.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-rose-400/90">Cons</h3>
                <ul className="mt-2 list-inside list-disc text-zinc-400">
                  {p.cons.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-semibold text-zinc-100">Side‑by‑side</h2>
        <div className="mt-4">
          <ComparisonTable platforms={ottPlatforms} />
        </div>
      </div>
    </div>
  );
}
