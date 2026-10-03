import type { Metadata } from "next";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";

/**
 * EPG Not Working — noindex until substantive content is published.
 * Canonical: https://www.tryiptv.com/help/epg-not-working
 * Source of truth: src/lib/site-routes.ts (indexable: false)
 */
export function generateMetadata(): Metadata {
  return generatePageMetadata({
    title: "EPG Not Working — How to Fix Your IPTV Programme Guide",
    description: "Fix EPG not loading, wrong times, or missing programme data in your IPTV player. Step-by-step EPG troubleshooting guide.",
    canonical: "/help/epg-not-working",
    noIndex: true,
  });
}

export default function EpgNotWorkingPage() {
  return (
    <main>
      <p style={{ display: "none" }}>Content coming soon.</p>
    </main>
  );
}
