import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { WhyChooseTryIPTV } from "@/components/sections/WhyChooseTryIPTV";
import { Pricing } from "@/components/sections/Pricing";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Devices } from "@/components/sections/Devices";
import { CTA } from "@/components/sections/CTA";
import { FAQ } from "@/components/sections/FAQ";
import { getHomePageData } from "@/lib/data/home-page";
import { Schema } from "@/components/shared/Schema";
import { generateFAQPageSchema } from "@/lib/schema";
import { faqs } from "@/lib/site-data/faq";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";

export function generateMetadata(): Metadata {
  return generatePageMetadata({
    title: "TryIPTV — Best IPTV Service in USA, UK & Worldwide",
    description: "TryIPTV is a premier prepaid IPTV service featuring 24,000+ live channels, sports, and 80,000+ movies and series in HD & 4K across all devices. Plans start at $16 with a 24-hour free trial available.",
    canonical: "/",
  });
}

export default async function Home() {
    const { 
      productSchema
    } = await getHomePageData();

  return (
    <>
      <Schema id="product" schema={productSchema} />
      <Schema id="faq-page" schema={generateFAQPageSchema(faqs)} />
      <Hero />
      <WhyChooseTryIPTV />
      <Pricing />
      <HowItWorks />
      <Devices />
      <CTA />
      <FAQ />
    </>
  );
}
