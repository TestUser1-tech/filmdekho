"use client";

import { trackEvent } from "@/lib/analytics";

type AffiliateButtonProps = {
  platform: string;
  link: string;
};

export function AffiliateButton({ platform, link }: AffiliateButtonProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="inline-flex items-center justify-center rounded-lg bg-amber-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 shadow transition hover:bg-amber-400"
      onClick={() => trackEvent("affiliate_click", { platform })}
    >
      Subscribe via {platform}
    </a>
  );
}
