import { getLatestArticles } from "@/lib/queries";
import { ArticleCard } from "@/components/articles/ArticleCard";

export const metadata = {
  title: "Movie news",
  description: "Latest Bollywood, Hollywood, and OTT headlines.",
};

export const revalidate = 60;

export default async function NewsIndexPage() {
  const articles = await getLatestArticles(30);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="text-3xl font-bold text-zinc-100">News</h1>
      <p className="mt-2 text-zinc-400">All stories, newest first.</p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.length === 0 ? (
          <p className="col-span-full text-zinc-500">No articles published yet.</p>
        ) : (
          articles.map((a) => <ArticleCard key={a._id} article={a} />)
        )}
      </div>
    </div>
  );
}
