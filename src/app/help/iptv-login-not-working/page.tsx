import type { Metadata } from "next";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";

/**
 * Login Not Working — noindex until substantive content is published.
 * Canonical: https://www.tryiptv.com/help/iptv-login-not-working
 * Source of truth: src/lib/site-routes.ts (indexable: false)
 */
export function generateMetadata(): Metadata {
  return generatePageMetadata({
    title: "IPTV Login Not Working — How to Fix Credential Issues",
    description: "Fix IPTV login problems. Learn what to do when your Xtream Codes or M3U credentials are not accepted by your IPTV player.",
    canonical: "/help/iptv-login-not-working",
    noIndex: true,
  });
}

export default function IptvLoginNotWorkingPage() {
  return (
    <main>
      <p style={{ display: "none" }}>Content coming soon.</p>
    </main>
  );
}
