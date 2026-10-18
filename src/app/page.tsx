import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";
import { WhyChooseTryIPTV } from "@/components/sections/WhyChooseTryIPTV";
import { HomePricing } from "@/components/sections/HomePricing";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Devices } from "@/components/sections/Devices";
import { CustomerFeedback } from "@/components/sections/CustomerFeedback";
import { CTA } from "@/components/sections/CTA";

const FAQ = dynamic(() => import("@/components/sections/FAQ").then((mod) => mod.FAQ));
import { Schema } from "@/components/shared/Schema";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";
import { generateWebPageSchema } from "@/lib/schema";

const homeTitle = "TryIPTV: IPTV Service for USA & UK, 24h Free Trial";
const homeDescription =
  "TryIPTV offers 25,000+ channels and 120,000+ movies and TV shows, with 2 connections, plans from $16, and an IPTV free trial for 24 hours.";

export function generateMetadata(): Metadata {
  const baseMetadata = generatePageMetadata({
    title: homeTitle,
    description: homeDescription,
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
  const webPageSchema = generateWebPageSchema({
    name: homeTitle,
    description: homeDescription,
    url: "https://www.tryiptv.com/",
  });

  return (
    <>
      <Schema id="webpage" schema={webPageSchema} />
      <Hero />
      <WhyChooseTryIPTV />
      <HomePricing />
      <HowItWorks />
      <Devices />
      <CustomerFeedback />
      <CTA />
      <FAQ />
    </>
  );
}
