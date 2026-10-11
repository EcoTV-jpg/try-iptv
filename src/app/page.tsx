import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";
import { WhyChooseTryIPTV } from "@/components/sections/WhyChooseTryIPTV";
import { HomePricing } from "@/components/sections/HomePricing";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Devices } from "@/components/sections/Devices";
import { CTA } from "@/components/sections/CTA";

const FAQ = dynamic(() => import("@/components/sections/FAQ").then((mod) => mod.FAQ));
import { getHomePageData } from "@/lib/data/home-page";
import { Schema } from "@/components/shared/Schema";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";

export function generateMetadata(): Metadata {
  const baseMetadata = generatePageMetadata({
    title: "TryIPTV — Best IPTV Service in USA, UK & Worldwide",
    description: "Prepaid IPTV streaming featuring 24,000+ live channels, sports, and 80,000+ VOD titles across all devices. 2 connections included. Plans from $16 with a 24-hour trial.",
    canonical: "/",
    image: "https://www.tryiptv.com/images/best-iptv-service.png",
  });

  return {
    ...baseMetadata,
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
      <WhyChooseTryIPTV />
      <HomePricing />
      <HowItWorks />
      <Devices />
      <CTA />
      <FAQ />
    </>
  );
}
