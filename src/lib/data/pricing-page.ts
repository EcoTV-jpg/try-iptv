import { unstable_cache as cache } from 'next/cache';
import { plans } from "@/lib/site-data/pricing";
import { pricingPageFaqs } from "@/lib/site-data/pricing-page-faq";
import { generateProductSchema, generateBreadcrumbSchema, generateFAQPageSchema } from "@/lib/schema";
import type { Product, BreadcrumbList, FAQPage } from 'schema-dts';
import { siteConfig } from '../site-config';

// This function fetches and processes all data required for the pricing page in a single, cached operation.
export const getPricingPageData = cache(
  async () => {
    const baseUrl = siteConfig.url;

    const productSchema: Product = generateProductSchema({
      name: "TryIPTV Subscription",
      description: "Prepaid IPTV subscription featuring 24,000+ live channels, 80,000+ VOD movies and series, HD & 4K streams, and 2 simultaneous connections across compatible devices.",
      image: `${siteConfig.url}/api/og`,
      brand: {
        "@type": "Brand",
        "@id": `${siteConfig.url}/#organization`,
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
            "name": `IPTV Subscription - ${plan.name}`,
            "price": plan.price.toFixed(2),
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "url": plan.checkoutUrl,
            "itemCondition": "https://schema.org/NewCondition",
            "seller": {
              "@type": "Organization",
              "@id": `${baseUrl}/#organization`,
              "name": siteConfig.name
            }
        }))
      }
    });

    const breadcrumbSchema: BreadcrumbList = generateBreadcrumbSchema([
        { name: "Home", item: `${baseUrl}/` },
        { name: "Pricing", item: `${baseUrl}/pricing` }
    ]);
    
    const faqSchema: FAQPage = generateFAQPageSchema(pricingPageFaqs);

    return { 
      productSchema,
      breadcrumbSchema,
      faqSchema,
      pricingPageFaqs,
    };
  },
  ['pricing-page-data'], // Unique cache key
  {
    revalidate: 3600, // Revalidate every hour
    tags: ['pages', 'pricing-page'], // Tag for on-demand revalidation
  }
);
