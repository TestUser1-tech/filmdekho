type TrailerEmbedProps = {
  videoId: string;
  title?: string;
};

/** YouTube trailer embed — uses native iframe (no extra client JS). */
export function TrailerEmbed({ videoId, title }: TrailerEmbedProps) {
  return (
    <div className="my-8 overflow-hidden rounded-xl border border-zinc-800 bg-black">
      {title && (
        <p className="border-b border-zinc-800 px-4 py-2 text-sm font-medium text-zinc-300">{title}</p>
      )}
      <div className="aspect-video w-full">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title ?? "Trailer"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
        />
      </div>
    </div>
  );
}
