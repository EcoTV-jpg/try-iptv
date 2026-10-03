import type { Metadata } from "next";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";

/**
 * IPTV vs Cable — noindex until substantive content is published.
 * Canonical: https://www.tryiptv.com/guides/iptv-vs-cable
 * Source of truth: src/lib/site-routes.ts (indexable: false)
 */
export function generateMetadata(): Metadata {
  return generatePageMetadata({
    title: "IPTV vs Cable TV — What's the Difference?",
    description: "Compare IPTV and cable TV on price, channel selection, flexibility, and picture quality to decide which is right for you.",
    canonical: "/guides/iptv-vs-cable",
    noIndex: true,
  });
}

export default function IptvVsCablePage() {
  return (
    <main>
      <p style={{ display: "none" }}>Content coming soon.</p>
    </main>
  );
}
