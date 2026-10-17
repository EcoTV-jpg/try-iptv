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
import { getHomePageData } from "@/lib/data/home-page";
import { Schema } from "@/components/shared/Schema";
import { generateWebPageSchema } from "@/lib/schema";
import { SITE_URL, generateMetadata as generatePageMetadata } from "@/lib/site-config";

export function generateMetadata(): Metadata {
  const title = "TryIPTV: IPTV Service for USA & UK, 24h Free Trial";
  const description = homeDescription;
  const baseMetadata = generatePageMetadata({
    title,
    description,
    canonical: "/",
    image: "https://www.tryiptv.com/images/best-iptv-service.png",
  });

  return {
    ...baseMetadata,
    title: { absolute: title },
    description,
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
    openGraph: {
      ...baseMetadata.openGraph,
      title,
      description,
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
      title,
      description,
      images: ["https://www.tryiptv.com/images/best-iptv-service.png"],
    },
  };
}

const homeDescription =
  "TryIPTV offers 25,000+ channels and 120,000+ movies and TV shows, with 2 connections, plans from $16, and an IPTV free trial for 24 hours.";

const homeWebPageSchema = generateWebPageSchema({
  name: "TryIPTV: IPTV Service for USA & UK, 24h Free Trial",
  description: homeDescription,
  url: `${SITE_URL}/`,
  about: { "@id": `${SITE_URL}/#organization` },
});

export default function Home() {
  const { productSchema } = getHomePageData();

  return (
    <>
      <Schema id="product" schema={productSchema} />
      <Schema id="webpage" schema={homeWebPageSchema} />
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
