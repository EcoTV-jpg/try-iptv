import type { Metadata } from "next";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";

/**
 * Guides — noindex until substantive content is published.
 * Canonical: https://www.tryiptv.com/guides
 * Source of truth: src/lib/site-routes.ts (indexable: false)
 */
export function generateMetadata(): Metadata {
  return generatePageMetadata({
    title: "IPTV Guides & Explainers — Learn How IPTV Works",
    description: "Comprehensive IPTV guides covering what IPTV is, how it works, M3U playlists, Xtream Codes, EPG, and more.",
    canonical: "/guides",
    noIndex: true,
  });
}

export default function GuidesPage() {
  return (
    <main>
      <p style={{ display: "none" }}>Content coming soon.</p>
    </main>
  );
}
