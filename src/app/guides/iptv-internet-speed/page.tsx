import type { Metadata } from "next";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";

/**
 * IPTV Internet Speed — noindex until substantive content is published.
 * Canonical: https://www.tryiptv.com/guides/iptv-internet-speed
 * Source of truth: src/lib/site-routes.ts (indexable: false)
 */
export function generateMetadata(): Metadata {
  return generatePageMetadata({
    title: "What Internet Speed Do You Need for IPTV?",
    description: "Find out the recommended internet speed for HD, Full HD, and 4K IPTV streaming. Tips to optimize your connection for smooth playback.",
    canonical: "/guides/iptv-internet-speed",
    noIndex: true,
  });
}

export default function IptvInternetSpeedPage() {
  return (
    <main>
      <p style={{ display: "none" }}>Content coming soon.</p>
    </main>
  );
}
