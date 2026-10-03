import type { Metadata } from "next";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";

/**
 * IPTV Not Working — noindex until substantive content is published.
 * Canonical: https://www.tryiptv.com/help/iptv-not-working
 * Source of truth: src/lib/site-routes.ts (indexable: false)
 */
export function generateMetadata(): Metadata {
  return generatePageMetadata({
    title: "IPTV Not Working? How to Troubleshoot & Fix",
    description: "If your IPTV is not working, follow these troubleshooting steps to diagnose and fix common playback and connectivity issues.",
    canonical: "/help/iptv-not-working",
    noIndex: true,
  });
}

export default function IptvNotWorkingPage() {
  return (
    <main>
      <p style={{ display: "none" }}>Content coming soon.</p>
    </main>
  );
}
