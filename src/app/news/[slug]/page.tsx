import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getArticleBySlug, getRelatedArticles } from "@/lib/queries";
import { getArticleSEO } from "@/lib/seo";
import { AdBanner } from "@/components/ads/AdBanner";
import { ShareButtons } from "@/components/common/ShareButtons";
import { ArticleContent } from "@/components/articles/ArticleContent";
import { ArticleCard } from "@/components/articles/ArticleCard";
import Image from "next/image";

type Props = { params: Promise<{ slug: string }> };

export const revalidate = 60;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return { title: "Not found" };
  return getArticleSEO(article);
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) notFound();

  const related = await getRelatedArticles(article.category, article._id, 4);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const shareUrl = `${siteUrl}/news/${slug}`;

  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <p className="text-sm font-medium uppercase tracking-wide text-amber-500">{article.category}</p>
      <h1 className="mt-2 text-3xl font-bold leading-tight text-zinc-50 sm:text-4xl">{article.title}</h1>
      {article.publishedAt && (
        <time className="mt-3 block text-sm text-zinc-500" dateTime={article.publishedAt}>
          {new Date(article.publishedAt).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </time>
      )}

      {article.coverImage && (
        <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-xl bg-zinc-800">
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 720px"
          />
        </div>
      )}

      <div className="mt-8">
        <ShareButtons title={article.title} url={shareUrl} />
      </div>

      <div className="mt-8">
        <AdBanner slot="article-top" />
      </div>

      <div className="mt-10">
        <ArticleContent content={article.content} />
      </div>

      <div className="mt-10">
        <AdBanner slot="article-bottom" />
      </div>

      <div className="mt-10">
        <ShareButtons title={article.title} url={shareUrl} />
      </div>

      {related.length > 0 && (
        <section className="mt-16 border-t border-zinc-800 pt-10">
          <h2 className="text-xl font-semibold text-zinc-100">Related</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {related.map((a) => (
              <ArticleCard key={a._id} article={a} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
