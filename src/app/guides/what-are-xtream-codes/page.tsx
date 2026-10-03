import type { Metadata } from "next";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";

/**
 * Xtream Codes — noindex until substantive content is published.
 * Canonical: https://www.tryiptv.com/guides/what-are-xtream-codes
 * Source of truth: src/lib/site-routes.ts (indexable: false)
 */
export function generateMetadata(): Metadata {
  return generatePageMetadata({
    title: "What Are Xtream Codes? IPTV API Guide",
    description: "Learn what Xtream Codes are and how Xtream API credentials work with IPTV players like TiviMate and IPTV Smarters.",
    canonical: "/guides/what-are-xtream-codes",
    noIndex: true,
  });
}

export default function WhatAreXtreamCodesPage() {
  return (
    <main>
      <p style={{ display: "none" }}>Content coming soon.</p>
    </main>
  );
}
