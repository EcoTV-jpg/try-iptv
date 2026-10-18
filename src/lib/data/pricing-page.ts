import { unstable_cache as cache } from 'next/cache';
import { pricingPageFaqs } from "@/lib/site-data/pricing-page-faq";
import { generateBreadcrumbSchema } from "@/lib/schema";
import type { BreadcrumbList } from 'schema-dts';
import { siteConfig } from '../site-config';

// This function fetches and processes all data required for the pricing page in a single, cached operation.
export const getPricingPageData = cache(
  async () => {
    const baseUrl = siteConfig.url;

    const breadcrumbSchema: BreadcrumbList = generateBreadcrumbSchema([
        { name: "Home", item: `${baseUrl}/` },
        { name: "Pricing", item: `${baseUrl}/pricing` }
    ]);
    
    return { 
      breadcrumbSchema,
      pricingPageFaqs,
    };
  },
  ['pricing-page-data'], // Unique cache key
  {
    revalidate: 3600, // Revalidate every hour
    tags: ['pages', 'pricing-page'], // Tag for on-demand revalidation
  }
);
