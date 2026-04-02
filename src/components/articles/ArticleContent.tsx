import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import Image from "next/image";

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="mt-10 text-2xl font-semibold text-zinc-100">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 text-xl font-semibold text-zinc-200">{children}</h3>
    ),
    normal: ({ children }) => <p className="mt-4 leading-relaxed text-zinc-300">{children}</p>,
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mt-4 list-inside list-disc space-y-2 text-zinc-300">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="mt-4 list-inside list-decimal space-y-2 text-zinc-300">{children}</ol>
    ),
  },
  types: {
    image: ({ value }) => {
      const url = (value?.asset as { url?: string } | undefined)?.url;
      if (!url) return null;
      const alt = (value as { alt?: string }).alt ?? "";
      return (
        <figure className="my-8">
          <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-zinc-800">
            <Image src={url} alt={alt} fill className="object-contain" sizes="(max-width: 768px) 100vw, 720px" />
          </div>
        </figure>
      );
    },
  },
};

export function ArticleContent({ content }: { content: PortableTextBlock[] | undefined }) {
  if (!content?.length) {
    return <p className="text-zinc-500">No content yet.</p>;
  }
  return (
    <div className="prose prose-invert max-w-none prose-p:leading-relaxed">
      <PortableText value={content} components={components} />
    </div>
  );
}
