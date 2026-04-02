import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import type { Article } from "@/lib/types";

type ArticleCardProps = {
  article: Article;
};

export function ArticleCard({ article }: ArticleCardProps) {
  const slug = article.slug?.current;
  const href = slug ? `/news/${slug}` : "#";

  return (
    <article className="group overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/40 transition hover:border-amber-500/40 hover:bg-zinc-900/70">
      <Link href={href} className="block">
        <div className="relative aspect-[16/9] w-full bg-zinc-800">
          {article.coverImage ? (
            <Image
              src={article.coverImage}
              alt={article.title}
              fill
              className="object-cover transition group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-zinc-600">No image</div>
          )}
        </div>
        <div className="p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-amber-500/90">
            {article.category}
          </p>
          <h2 className="mt-1 line-clamp-2 text-lg font-semibold text-zinc-100 group-hover:text-amber-200">
            {article.title}
          </h2>
          <p className="mt-2 line-clamp-2 text-sm text-zinc-400">{article.excerpt}</p>
          {article.publishedAt && (
            <time className="mt-3 block text-xs text-zinc-500" dateTime={article.publishedAt}>
              {format(new Date(article.publishedAt), "MMM d, yyyy")}
            </time>
          )}
        </div>
      </Link>
    </article>
  );
}
