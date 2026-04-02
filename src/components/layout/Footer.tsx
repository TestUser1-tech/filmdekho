import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-zinc-800 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-10 text-sm text-zinc-500">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-semibold text-zinc-300">FilmDekho</p>
            <p className="mt-1 max-w-md">
              Bollywood, Hollywood, South cinema — where to stream in India.
            </p>
          </div>
          <div className="flex gap-6">
            <Link href="/ott/compare" className="hover:text-amber-400">
              OTT comparison
            </Link>
            <Link href="/where-to-watch" className="hover:text-amber-400">
              Where to watch
            </Link>
            <Link href="/affiliate-disclosure" className="hover:text-amber-400">
              Affiliate disclosure
            </Link>
          </div>
        </div>
        <p className="mt-8 text-xs text-zinc-600">
          © {new Date().getFullYear()} FilmDekho. Entertainment news for informational purposes.
        </p>
      </div>
    </footer>
  );
}
