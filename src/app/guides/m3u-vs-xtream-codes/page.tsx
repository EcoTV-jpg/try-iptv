import type { Metadata } from "next";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";

/**
 * M3U vs Xtream — noindex until substantive content is published.
 * Canonical: https://www.tryiptv.com/guides/m3u-vs-xtream-codes
 * Source of truth: src/lib/site-routes.ts (indexable: false)
 */
export function generateMetadata(): Metadata {
  return generatePageMetadata({
    title: "M3U vs Xtream Codes — Which Should You Use?",
    description: "Compare M3U playlists and Xtream Codes for IPTV. Understand the differences, pros, and cons of each connection method.",
    canonical: "/guides/m3u-vs-xtream-codes",
    noIndex: true,
  });
}

export default function M3uVsXtreamCodesPage() {
  return (
    <main>
      <p style={{ display: "none" }}>Content coming soon.</p>
    </main>
  );
}
