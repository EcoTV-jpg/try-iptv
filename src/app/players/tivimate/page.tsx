import type { Metadata } from "next";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";

/**
 * TiviMate — noindex until substantive content is published.
 * Canonical: https://www.tryiptv.com/players/tivimate
 * Source of truth: src/lib/site-routes.ts (indexable: false)
 */
export function generateMetadata(): Metadata {
  return generatePageMetadata({
    title: "TiviMate — Setup Guide for TryIPTV",
    description: "How to set up TryIPTV with TiviMate. Configure your playlist, EPG, and start streaming in minutes on Fire TV or Android.",
    canonical: "/players/tivimate",
    noIndex: true,
  });
}

export default function TivimatePage() {
  return (
    <main>
      <p style={{ display: "none" }}>Content coming soon.</p>
    </main>
  );
}
