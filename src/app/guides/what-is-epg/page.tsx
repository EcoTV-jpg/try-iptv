import type { Metadata } from "next";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";

/**
 * What Is EPG — noindex until substantive content is published.
 * Canonical: https://www.tryiptv.com/guides/what-is-epg
 * Source of truth: src/lib/site-routes.ts (indexable: false)
 */
export function generateMetadata(): Metadata {
  return generatePageMetadata({
    title: "What Is an EPG? IPTV Electronic Programme Guide Explained",
    description: "Learn what an Electronic Programme Guide (EPG) is, how it works in IPTV, and how to set it up in your player app.",
    canonical: "/guides/what-is-epg",
    noIndex: true,
  });
}

export default function WhatIsEpgPage() {
  return (
    <main>
      <p style={{ display: "none" }}>Content coming soon.</p>
    </main>
  );
}
