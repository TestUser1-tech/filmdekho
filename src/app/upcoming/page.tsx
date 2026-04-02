import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Upcoming movies",
  description: "Release calendar — upcoming Bollywood, Hollywood, and pan-Indian films.",
};

export default function UpcomingPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold text-zinc-50">Upcoming releases</h1>
      <p className="mt-4 text-zinc-400">
        Wire this page to Sanity <code className="text-amber-500/80">movie</code> documents with future{" "}
        <code className="rounded bg-zinc-800 px-1">releaseDate</code>, or sync from TMDB weekly. Table /
        calendar UI can go here.
      </p>
      <div className="mt-10 rounded-xl border border-dashed border-zinc-700 p-8 text-center text-zinc-500">
        Calendar placeholder — connect data source to populate.
      </div>
    </div>
  );
}
