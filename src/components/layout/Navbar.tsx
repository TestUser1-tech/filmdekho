import Link from "next/link";
import { SearchBar } from "@/components/common/SearchBar";

const links = [
  { href: "/", label: "Home" },
  { href: "/news", label: "News" },
  { href: "/ott/compare", label: "OTT Compare" },
  { href: "/where-to-watch", label: "Where to watch" },
  { href: "/upcoming", label: "Upcoming" },
  { href: "/box-office", label: "Box office" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-red-800/50 bg-zinc-950/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-3">
        <Link
          href="/"
          className="text-xl tracking-tight transition hover:text-red-300"
        >
          <span className="font-extrabold text-red-500">Film</span>
          <span className="font-semibold text-amber-300">Dekho</span>
        </Link>
        <SearchBar />
        <nav className="flex flex-wrap items-center gap-1 text-sm sm:gap-2">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-md px-2 py-1.5 text-zinc-300 transition hover:bg-zinc-800 hover:text-amber-200"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
