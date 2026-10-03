import type { Metadata } from "next";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";

/**
 * IPTV Smarters — noindex until substantive content is published.
 * Canonical: https://www.tryiptv.com/players/iptv-smarters
 * Source of truth: src/lib/site-routes.ts (indexable: false)
 */
export function generateMetadata(): Metadata {
  return generatePageMetadata({
    title: "IPTV Smarters Player — Setup Guide for TryIPTV",
    description: "How to set up TryIPTV with IPTV Smarters Pro. Step-by-step guide for adding your M3U or Xtream Codes credentials to the Smarters app.",
    canonical: "/players/iptv-smarters",
    noIndex: true,
  });
}

export default function IptvSmartersPage() {
  return (
    <main>
      <p style={{ display: "none" }}>Content coming soon.</p>
    </main>
  );
}
