import type { MetadataRoute } from "next";
import { getLatestArticles } from "@/lib/queries";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getLatestArticles(500);
  const newsUrls: MetadataRoute.Sitemap = articles
    .map((a) => a.slug?.current)
    .filter(Boolean)
    .map((slug) => ({
      url: `${base}/news/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    }));

  return [
    { url: base, lastModified: new Date(), changeFrequency: "daily", priority: 1 },
    { url: `${base}/news`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${base}/ott/compare`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/where-to-watch`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/affiliate-disclosure`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.4 },
    { url: `${base}/upcoming`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/box-office`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    ...newsUrls,
  ];
}
