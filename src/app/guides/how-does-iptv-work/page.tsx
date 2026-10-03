import type { Metadata } from "next";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";

/**
 * How IPTV Works — noindex until substantive content is published.
 * Canonical: https://www.tryiptv.com/guides/how-does-iptv-work
 * Source of truth: src/lib/site-routes.ts (indexable: false)
 */
export function generateMetadata(): Metadata {
  return generatePageMetadata({
    title: "How Does IPTV Work? Technical Explanation",
    description: "Understand how IPTV delivers live TV and on-demand content over the internet using IP networks, servers, and streaming protocols.",
    canonical: "/guides/how-does-iptv-work",
    noIndex: true,
  });
}

export default function HowDoesIptvWorkPage() {
  return (
    <main>
      <p style={{ display: "none" }}>Content coming soon.</p>
    </main>
  );
}
