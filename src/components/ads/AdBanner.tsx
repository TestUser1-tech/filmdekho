"use client";

import { useEffect } from "react";

type AdBannerProps = {
  slot: string;
  format?: string;
  className?: string;
};

export function AdBanner({ slot, format = "auto", className = "" }: AdBannerProps) {
  useEffect(() => {
    try {
      (window as unknown as { adsbygoogle?: unknown[] }).adsbygoogle =
        (window as unknown as { adsbygoogle?: unknown[] }).adsbygoogle || [];
      (window as unknown as { adsbygoogle: unknown[] }).adsbygoogle.push({});
    } catch {
      /* ignore */
    }
  }, []);

  if (process.env.NODE_ENV !== "production") {
    return (
      <div
        className={`rounded-lg border-2 border-dashed border-zinc-600 bg-zinc-900/50 p-6 text-center text-sm text-zinc-500 ${className}`}
      >
        Ad slot: <code className="text-amber-500/90">{slot}</code> — appears in production with
        AdSense
      </div>
    );
  }

  const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID ?? "ca-pub-YOUR_PUBLISHER_ID";

  return (
    <ins
      className={`adsbygoogle block ${className}`}
      style={{ display: "block" }}
      data-ad-client={clientId}
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive="true"
    />
  );
}
