import { NextResponse } from "next/server";
import { getSanityClient } from "@/lib/sanity";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q")?.trim();
  if (!q || q.length < 2) {
    return NextResponse.json({ results: [] });
  }

  const client = getSanityClient();
  if (!client) {
    return NextResponse.json({ results: [], message: "Sanity not configured" });
  }

  const pattern = `*${q}*`;
  const results = await client.fetch<
    { title: string; slug: { current: string }; excerpt: string }[]
  >(
    `*[_type == "article" && (title match $pattern || excerpt match $pattern)] | order(publishedAt desc) [0...12] {
      title,
      slug,
      excerpt
    }`,
    { pattern },
  );

  return NextResponse.json({ results });
}
