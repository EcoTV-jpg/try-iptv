import type { Metadata } from "next";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";

/**
 * M3U Not Loading — noindex until substantive content is published.
 * Canonical: https://www.tryiptv.com/help/m3u-not-loading
 * Source of truth: src/lib/site-routes.ts (indexable: false)
 */
export function generateMetadata(): Metadata {
  return generatePageMetadata({
    title: "M3U Playlist Not Loading — How to Fix It",
    description: "If your M3U playlist is not loading in your IPTV player, follow these steps to identify and resolve common M3U issues.",
    canonical: "/help/m3u-not-loading",
    noIndex: true,
  });
}

export default function M3uNotLoadingPage() {
  return (
    <main>
      <p style={{ display: "none" }}>Content coming soon.</p>
    </main>
  );
}
