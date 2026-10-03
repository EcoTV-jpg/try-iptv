import type { Metadata } from "next";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";

/**
 * Perfect Player — noindex until substantive content is published.
 * Canonical: https://www.tryiptv.com/players/perfect-player
 * Source of truth: src/lib/site-routes.ts (indexable: false)
 */
export function generateMetadata(): Metadata {
  return generatePageMetadata({
    title: "Perfect Player — Setup Guide for TryIPTV",
    description: "How to set up TryIPTV with Perfect Player IPTV. Configure your M3U or Xtream Codes and customize your channel list.",
    canonical: "/players/perfect-player",
    noIndex: true,
  });
}

export default function PerfectPlayerPage() {
  return (
    <main>
      <p style={{ display: "none" }}>Content coming soon.</p>
    </main>
  );
}
