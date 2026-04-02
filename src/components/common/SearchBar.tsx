"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function SearchBar() {
  const router = useRouter();
  const [q, setQ] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const query = q.trim();
    if (!query) return;
    router.push(`/where-to-watch/${encodeURIComponent(query.toLowerCase().replace(/\s+/g, "-"))}`);
  }

  return (
    <form onSubmit={onSubmit} className="w-full max-w-xs">
      <label htmlFor="quick-search" className="sr-only">
        Search movie
      </label>
      <input
        id="quick-search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search movie (e.g. pushpa 2)"
        className="w-full rounded-lg border border-zinc-700 bg-zinc-900/90 px-3 py-2 text-sm text-zinc-100 outline-none ring-red-500/50 placeholder:text-zinc-500 focus:border-red-500 focus:ring-2"
      />
    </form>
  );
}
