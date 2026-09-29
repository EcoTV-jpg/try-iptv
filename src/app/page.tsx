import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { QuickProductFacts } from "@/components/sections/QuickProductFacts";
import { WhatMakesAGoodIPTV } from "@/components/sections/WhatMakesAGoodIPTV";
import { HowToEvaluateIPTV } from "@/components/sections/HowToEvaluateIPTV";
import { ContentOverview } from "@/components/sections/ContentOverview";
import { Devices } from "@/components/sections/Devices";
import { ServiceVsPlayer } from "@/components/sections/ServiceVsPlayer";
import { StreamingQuality } from "@/components/sections/StreamingQuality";
import { FreeTrialPreview } from "@/components/sections/FreeTrialPreview";
import { PricingPreview } from "@/components/sections/PricingPreview";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { BuyerDecisionSupport } from "@/components/sections/BuyerDecisionSupport";
import { HomeFAQ } from "@/components/sections/HomeFAQ";
import { HomeFinalCTA } from "@/components/sections/HomeFinalCTA";
import { getHomePageData } from "@/lib/data/home-page";
import { Schema } from "@/components/shared/Schema";
import { generateFAQPageSchema } from "@/lib/schema";
import { homePageFaqs } from "@/lib/site-data/home-page-faq";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";

export function generateMetadata(): Metadata {
  const title = "Best IPTV Service for Live TV, Sports & VOD | TryIPTV";
  const description = "TryIPTV offers live TV, sports, movies and series with 2 simultaneous connections, Xtream Codes and M3U support, prepaid plans and a 24-hour free trial.";

  return {
    ...generatePageMetadata({
      title,
      description,
      canonical: "/",
    }),
    title: {
      absolute: title,
    }
  };
}

export default async function Home() {
  const { productSchema } = await getHomePageData();

  return (
    <>
      <Schema id="product" schema={productSchema} />
      <Schema id="faq-page" schema={generateFAQPageSchema(homePageFaqs)} />

      {/* 1. Hero */}
      <Hero />

      {/* 2. Quick Product Facts */}
      <QuickProductFacts />

      {/* 3 & 4. What Makes a Good IPTV Service? & Why TryIPTV */}
      <WhatMakesAGoodIPTV />

      {/* 5. How to Evaluate an IPTV Service Before Paying */}
      <HowToEvaluateIPTV />

      {/* 6. Content Overview */}
      <ContentOverview />

      {/* 7. Supported Devices */}
      <Devices />

      {/* 8. IPTV Service vs. IPTV Player */}
      <ServiceVsPlayer />

      {/* 9. Streaming Quality & Factors That Affect It */}
      <StreamingQuality />

      {/* 10. Free Trial Preview */}
      <FreeTrialPreview />

      {/* 11. Pricing Preview */}
      <PricingPreview />

      {/* 12. How TryIPTV Works */}
      <HowItWorks />

      {/* 13. Buyer Decision Support */}
      <BuyerDecisionSupport />

      {/* 14. Homepage FAQ */}
      <HomeFAQ />

      {/* 15. Final CTA */}
      <HomeFinalCTA />
    </>
  );
}
