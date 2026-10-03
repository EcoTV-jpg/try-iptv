import type { Metadata } from "next";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";

/**
 * Players — noindex until substantive content is published.
 * Canonical: https://www.tryiptv.com/players
 * Source of truth: src/lib/site-routes.ts (indexable: false)
 */
export function generateMetadata(): Metadata {
  return generatePageMetadata({
    title: "Best IPTV Players & Apps — Compatible Players for TryIPTV",
    description: "Discover the best IPTV player apps compatible with TryIPTV. Compare TiviMate, IPTV Smarters, XCIPTV, Televizo, and more.",
    canonical: "/players",
    noIndex: true,
  });
}

export default function PlayersPage() {
  return (
    <main>
      <p style={{ display: "none" }}>Content coming soon.</p>
    </main>
  );
}
