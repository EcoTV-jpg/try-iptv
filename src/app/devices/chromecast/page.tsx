import type { Metadata } from "next";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";

/**
 * Chromecast — noindex until substantive content is published.
 * Canonical: https://www.tryiptv.com/devices/chromecast
 * Source of truth: src/lib/site-routes.ts (indexable: false)
 */
export function generateMetadata(): Metadata {
  return generatePageMetadata({
    title: "How to Watch IPTV on Chromecast — Setup Guide",
    description: "Step-by-step guide to set up TryIPTV on Google Chromecast. Learn which apps to use and how to cast IPTV streams to your TV.",
    canonical: "/devices/chromecast",
    noIndex: true,
  });
}

export default function ChromecastPage() {
  return (
    <main>
      <p style={{ display: "none" }}>Content coming soon.</p>
    </main>
  );
}
