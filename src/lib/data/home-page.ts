import { unstable_cache as cache } from 'next/cache';
import { generateProductSchema } from '@/lib/schema';
import type { Product } from 'schema-dts';
import { siteConfig } from '@/lib/site-config';
import { plans } from '@/lib/site-data/pricing';

// This function fetches and processes all data required for the homepage in a single, cached operation.
export const getHomePageData = cache(
  async () => {
    const productSchema: Product = generateProductSchema({
      name: `${siteConfig.name} IPTV Subscription`,
      description: "Prepaid IPTV subscription featuring 24,000+ live channels, 80,000+ VOD movies and series, HD & 4K streams, and 2 simultaneous connections across compatible devices.",
      image: `${siteConfig.url}/api/og`,
      sku: "tryiptv-subscription",
      mpn: "tryiptv-subscription",
      brand: {
        "@type": "Brand",
        name: siteConfig.name,
      },
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "USD",
        lowPrice: Math.min(...plans.map(p => p.price)).toFixed(2),
        highPrice: Math.max(...plans.map(p => p.price)).toFixed(2),
        offerCount: plans.length,
        offers: plans.map(plan => ({
          "@type": "Offer",
          name: `TryIPTV - ${plan.name} Prepaid Subscription`,
          price: plan.price.toFixed(2),
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          url: `${siteConfig.url}${plan.url}`,
          description: `${plan.name} prepaid IPTV subscription including 2 simultaneous device connections, 24,000+ live channels, and HD & 4K streaming.`,
        }))
      }
    });

    return { 
      productSchema
    };
  },
  ['home-page-data'], // Cache key
  {
    revalidate: 3600, // Revalidate every hour
    tags: ['pages', 'home-page'], // Tag for on-demand revalidation
  }
);
