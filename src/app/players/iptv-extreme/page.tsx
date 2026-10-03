import type { Metadata } from "next";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";

/**
 * IPTV Extreme — noindex until substantive content is published.
 * Canonical: https://www.tryiptv.com/players/iptv-extreme
 * Source of truth: src/lib/site-routes.ts (indexable: false)
 */
export function generateMetadata(): Metadata {
  return generatePageMetadata({
    title: "IPTV Extreme — Setup Guide for TryIPTV",
    description: "How to use TryIPTV with IPTV Extreme on Android. Add your M3U link and start watching thousands of channels.",
    canonical: "/players/iptv-extreme",
    noIndex: true,
  });
}

export default function IptvExtremePage() {
  return (
    <main>
      <p style={{ display: "none" }}>Content coming soon.</p>
    </main>
  );
}
