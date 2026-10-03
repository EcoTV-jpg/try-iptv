import type { Metadata } from "next";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";

/**
 * IPTV Buffering Fix — noindex until substantive content is published.
 * Canonical: https://www.tryiptv.com/help/iptv-buffering
 * Source of truth: src/lib/site-routes.ts (indexable: false)
 */
export function generateMetadata(): Metadata {
  return generatePageMetadata({
    title: "How to Fix IPTV Buffering & Freezing Issues",
    description: "Step-by-step guide to fix IPTV buffering, freezing, and lag. Learn what causes buffering and how to stop it.",
    canonical: "/help/iptv-buffering",
    noIndex: true,
  });
}

export default function IptvBufferingPage() {
  return (
    <main>
      <p style={{ display: "none" }}>Content coming soon.</p>
    </main>
  );
}
