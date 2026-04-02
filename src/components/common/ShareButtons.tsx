"use client";

import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

type ShareButtonsProps = {
  title: string;
  url: string;
};

export function ShareButtons({ title, url }: ShareButtonsProps) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-sm text-zinc-500">Share:</span>
      <FacebookShareButton url={url} title={title} className="flex items-center gap-1 rounded-md bg-zinc-800 px-4 py-2 text-sm text-zinc-200 transition hover:bg-zinc-700">
        <FacebookIcon size={24} round />
        Facebook
      </FacebookShareButton>
      <TwitterShareButton url={url} title={title} className="flex items-center gap-1 rounded-md bg-zinc-800 px-4 py-2 text-sm text-zinc-200 transition hover:bg-zinc-700">
        <TwitterIcon size={24} round />
        X
      </TwitterShareButton>
      <WhatsappShareButton url={url} title={title} className="flex items-center gap-1 rounded-md bg-zinc-800 px-4 py-2 text-sm text-zinc-200 transition hover:bg-zinc-700">
        <WhatsappIcon size={24} round />
        WhatsApp
      </WhatsappShareButton>
    </div>
  );
}
