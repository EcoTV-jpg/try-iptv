import { Hero } from "@/components/sections/Hero";
import { Devices } from "@/components/sections/Devices";
import { WhyChooseTryIPTV } from "@/components/sections/WhyChooseTryIPTV";
import { Pricing } from "@/components/sections/Pricing";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CTA } from "@/components/sections/CTA";
import { FAQ } from "@/components/sections/FAQ";
import { getHomePageData } from "@/lib/data/home-page";
import { Schema } from "@/components/shared/Schema";
import { generateFAQPageSchema } from "@/lib/schema";
import { faqs } from "@/lib/site-data/faq";

export default async function Home() {
    const { 
      productSchema
    } = await getHomePageData();

  return (
    <>
      <Schema id="product" schema={productSchema} />
      <Schema id="faq-page" schema={generateFAQPageSchema(faqs)} />
      <Hero />
      <Devices />
      <WhyChooseTryIPTV />
      <Pricing />
      <HowItWorks />
      <CTA />
      <FAQ />
    </>
  );
}
