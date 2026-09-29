
export const SITE_URL = "https://www.tryiptv.com";

export const siteConfig = {
  name: "TryIPTV",
  url: process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || SITE_URL,
  ogImage: "/api/og",
  description: "TryIPTV is a prepaid IPTV service featuring 24,000+ live channels, sports, and 80,000+ movies and series in HD & 4K across all devices. Plans start at $16 with a 24-hour free trial available.",
  links: {
    email: "support@tryiptv.com",
  },
} as const;

export type SiteConfig = typeof siteConfig;

// Helper for generating page-specific metadata
export function generateMetadata({
  title,
  description,
  image,
  noIndex = false,
  canonical,
}: {
  title: string;
  description: string;
  image?: string;
  noIndex?: boolean;
  canonical?: string;
}) {
  const ogImageUrl = image || `${siteConfig.url}${siteConfig.ogImage}?title=${encodeURIComponent(title)}`;
  
  return {
    title,
    description,
    alternates: {
      canonical: canonical ? `${siteConfig.url}${canonical}` : undefined,
    },
    openGraph: {
      title,
      description,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImageUrl],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
