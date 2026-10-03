import type { Metadata } from "next";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";

/**
 * Help — noindex until substantive content is published.
 * Canonical: https://www.tryiptv.com/help
 * Source of truth: src/lib/site-routes.ts (indexable: false)
 */
export function generateMetadata(): Metadata {
  return generatePageMetadata({
    title: "IPTV Help & Troubleshooting — Fix Common Issues",
    description: "Get help with common IPTV problems including buffering, login issues, M3U not loading, EPG not working, and more.",
    canonical: "/help",
    noIndex: true,
  });
}

export default function HelpPage() {
  return (
    <main>
      <p style={{ display: "none" }}>Content coming soon.</p>
    </main>
  );
}
