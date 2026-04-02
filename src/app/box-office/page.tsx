import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Box office",
  description: "Weekly box office collections — India and global highlights.",
};

export default function BoxOfficePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold text-zinc-50">Box office</h1>
      <p className="mt-4 text-zinc-400">
        Publish weekly roundup articles from Sanity or paste collection figures into a structured schema
        field. This route is a hub; individual week posts can live under{" "}
        <code className="rounded bg-zinc-800 px-1">/news/...</code> for freshness.
      </p>
      <div className="mt-10 rounded-xl border border-dashed border-zinc-700 p-8 text-center text-zinc-500">
        Data placeholder — add box office table or embed your reporting workflow.
      </div>
    </div>
  );
}
