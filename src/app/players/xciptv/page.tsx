import type { Metadata } from "next";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";

/**
 * XCIPTV — noindex until substantive content is published.
 * Canonical: https://www.tryiptv.com/players/xciptv
 * Source of truth: src/lib/site-routes.ts (indexable: false)
 */
export function generateMetadata(): Metadata {
  return generatePageMetadata({
    title: "XCIPTV Player — Setup Guide for TryIPTV",
    description: "How to set up TryIPTV with XCIPTV. Add your Xtream Codes credentials and start streaming on Android or Fire TV Stick.",
    canonical: "/players/xciptv",
    noIndex: true,
  });
}

export default function XciptvPage() {
  return (
    <main>
      <p style={{ display: "none" }}>Content coming soon.</p>
    </main>
  );
}
