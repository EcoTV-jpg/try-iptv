import type { Metadata } from "next";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";

/**
 * Televizo — noindex until substantive content is published.
 * Canonical: https://www.tryiptv.com/players/televizo
 * Source of truth: src/lib/site-routes.ts (indexable: false)
 */
export function generateMetadata(): Metadata {
  return generatePageMetadata({
    title: "Televizo IPTV Player — Setup Guide for TryIPTV",
    description: "How to configure TryIPTV with Televizo. Load your M3U playlist and enjoy smooth IPTV streaming with a clean interface.",
    canonical: "/players/televizo",
    noIndex: true,
  });
}

export default function TelevizoPage() {
  return (
    <main>
      <p style={{ display: "none" }}>Content coming soon.</p>
    </main>
  );
}
