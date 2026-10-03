import type { Metadata } from "next";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";

/**
 * OTT Navigator — noindex until substantive content is published.
 * Canonical: https://www.tryiptv.com/players/ott-navigator
 * Source of truth: src/lib/site-routes.ts (indexable: false)
 */
export function generateMetadata(): Metadata {
  return generatePageMetadata({
    title: "OTT Navigator — Setup Guide for TryIPTV",
    description: "How to set up TryIPTV with OTT Navigator on Android TV or Fire TV. Import your playlist and configure EPG easily.",
    canonical: "/players/ott-navigator",
    noIndex: true,
  });
}

export default function OttNavigatorPage() {
  return (
    <main>
      <p style={{ display: "none" }}>Content coming soon.</p>
    </main>
  );
}
