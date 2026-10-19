import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";
import { WhatYouGet } from "@/components/sections/WhatYouGet";
import { WhyChooseTryIPTV } from "@/components/sections/WhyChooseTryIPTV";
import { HomePricing } from "@/components/sections/HomePricing";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Devices } from "@/components/sections/Devices";
import { CustomerFeedback } from "@/components/sections/CustomerFeedback";
import { CTA } from "@/components/sections/CTA";

const FAQ = dynamic(() => import("@/components/sections/FAQ").then((mod) => mod.FAQ));
import { getHomePageData } from "@/lib/data/home-page";
import { Schema } from "@/components/shared/Schema";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";

const HOME_TITLE = "IPTV Service for USA & UK – 24h Free Trial | TryIPTV";

export function generateMetadata(): Metadata {
  const baseMetadata = generatePageMetadata({
    title: HOME_TITLE,
    description: "TryIPTV is a prepaid IPTV service for viewers in the USA, UK, and supported regions. Each subscription includes two simultaneous connections and works with compatible IPTV players using Xtream Codes or M3U. Start with a 24-hour free trial.",
    canonical: "/",
    image: "https://www.tryiptv.com/images/best-iptv-service.png",
  });

  return {
    ...baseMetadata,
    title: { absolute: HOME_TITLE },
    openGraph: {
      ...baseMetadata.openGraph,
      images: [
        {
          url: "https://www.tryiptv.com/images/best-iptv-service.png",
          width: 1024,
          height: 682,
          alt: "Couple watching TV with TryIPTV streaming service",
        },
      ],
    },
    twitter: {
      ...baseMetadata.twitter,
      images: ["https://www.tryiptv.com/images/best-iptv-service.png"],
    },
  };
}

export default function Home() {
  const { productSchema } = getHomePageData();

  return (
    <>
      <Schema id="product" schema={productSchema} />
      <Hero />
      <WhatYouGet />
      <WhyChooseTryIPTV />
      <HomePricing />
      <HowItWorks />
      <Devices />
      <CustomerFeedback />
      <CTA title="Start a 24-Hour IPTV Free Trial" />
      <FAQ />
    </>
  );
}
