import type { Metadata } from "next";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";

/**
 * Setup — noindex until substantive content is published.
 * Canonical: https://www.tryiptv.com/setup
 * Source of truth: src/lib/site-routes.ts (indexable: false)
 */
export function generateMetadata(): Metadata {
  return generatePageMetadata({
    title: "IPTV Setup Guide — How to Get Started with TryIPTV",
    description: "Complete setup guide for TryIPTV. Learn how to activate your subscription, get your M3U or Xtream credentials, and start streaming in minutes.",
    canonical: "/setup",
    noIndex: true,
  });
}

export default function SetupPage() {
  return (
    <main>
      <p style={{ display: "none" }}>Content coming soon.</p>
    </main>
  );
}
