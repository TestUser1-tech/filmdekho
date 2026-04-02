import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate disclosure",
  description: "How FilmDekho uses affiliate links and advertising.",
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold text-zinc-50">Affiliate Disclosure</h1>
      <p className="mt-4 leading-relaxed text-zinc-300">
        FilmDekho may include affiliate links to OTT platforms and partner marketplaces. If you click
        and make a purchase, we may earn a small commission at no extra cost to you.
      </p>
      <p className="mt-4 leading-relaxed text-zinc-400">
        Recommendations are based on our editorial judgment. Affiliate relationships do not change our
        reviews, rankings, or content priorities.
      </p>
      <ul className="mt-6 list-inside list-disc space-y-2 text-zinc-300">
        <li>Primary market: India (OTT and streaming audiences).</li>
        <li>Affiliate usage: OTT comparison pages and where-to-watch guides.</li>
        <li>Ad monetization: Google AdSense (where applicable).</li>
      </ul>
    </div>
  );
}
