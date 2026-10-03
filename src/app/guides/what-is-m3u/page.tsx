import type { Metadata } from "next";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";

/**
 * What Is M3U — noindex until substantive content is published.
 * Canonical: https://www.tryiptv.com/guides/what-is-m3u
 * Source of truth: src/lib/site-routes.ts (indexable: false)
 */
export function generateMetadata(): Metadata {
  return generatePageMetadata({
    title: "What Is an M3U Playlist? IPTV M3U Guide",
    description: "Learn what an M3U playlist is, how it works with IPTV services, and how to load an M3U URL into your IPTV player.",
    canonical: "/guides/what-is-m3u",
    noIndex: true,
  });
}

export default function WhatIsM3uPage() {
  return (
    <main>
      <p style={{ display: "none" }}>Content coming soon.</p>
    </main>
  );
}
