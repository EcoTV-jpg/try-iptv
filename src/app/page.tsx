import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { WhatIsTryIPTV } from "@/components/sections/WhatIsTryIPTV";
import { WhyChooseTryIPTV } from "@/components/sections/WhyChooseTryIPTV";
import { HomePricing } from "@/components/sections/HomePricing";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Devices } from "@/components/sections/Devices";
import { CustomerFeedback } from "@/components/sections/CustomerFeedback";
import { CTA } from "@/components/sections/CTA";
import { HomeFAQ } from "@/components/sections/HomeFAQ";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";

// Shared by <title>, Open Graph and Twitter so they never drift apart.
const HOME_TITLE = "TryIPTV: IPTV Service Provider with Prepaid Plans from $16";
const HOME_DESCRIPTION =
  "IPTV service provider with live TV, sports, movies and TV shows. Prepaid plans from $16, 2 connections, no auto-renewal and a free 24-hour trial.";
const HOME_IMAGE = "https://www.tryiptv.com/images/best-iptv-service.png";

export function generateMetadata(): Metadata {
  const baseMetadata = generatePageMetadata({
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    canonical: "/",
    image: HOME_IMAGE,
  });

  return {
    ...baseMetadata,
    title: { absolute: HOME_TITLE },
    // Drop the site-wide keywords tag on this page.
    keywords: null,
    openGraph: {
      ...baseMetadata.openGraph,
      title: HOME_TITLE,
      description: HOME_DESCRIPTION,
      images: [
        {
          url: HOME_IMAGE,
          width: 1024,
          height: 682,
          alt: "Couple watching TV with TryIPTV streaming service",
        },
      ],
    },
    twitter: {
      ...baseMetadata.twitter,
      title: HOME_TITLE,
      description: HOME_DESCRIPTION,
      images: [HOME_IMAGE],
    },
  };
}

export default function Home() {
  return (
    <>
      <Hero />
      <WhatIsTryIPTV />
      <WhyChooseTryIPTV />
      <HomePricing />
      <HowItWorks />
      <Devices />
      <CustomerFeedback />
      <CTA
        className="pt-0 sm:pt-0 md:pt-0 lg:pt-0"
        subtitle="Not sure whether TryIPTV will work smoothly on your device and network? Test the channel lineup, picture quality and setup on your own device before choosing a paid plan, with our 24-hour trial ($0)."
      />
      <HomeFAQ />
    </>
  );
}
