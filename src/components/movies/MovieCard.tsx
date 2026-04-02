import Image from "next/image";
import type { Movie } from "@/lib/types";

export function MovieCard({ movie }: { movie: Movie }) {
  return (
    <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50">
      <div className="relative aspect-[2/3] w-full bg-zinc-800">
        {movie.poster ? (
          <Image
            src={movie.poster}
            alt={movie.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, 16vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-xs text-zinc-600">No poster</div>
        )}
      </div>
      <div className="p-3">
        <h3 className="line-clamp-2 font-semibold text-zinc-100">{movie.title}</h3>
        {movie.rating != null && (
          <p className="mt-1 text-sm text-amber-400">★ {movie.rating}/10</p>
        )}
        {movie.ottPlatform && (
          <p className="mt-1 text-xs text-zinc-500">{movie.ottPlatform}</p>
        )}
      </div>
    </div>
  );
}
