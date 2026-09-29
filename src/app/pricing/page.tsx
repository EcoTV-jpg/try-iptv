import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Pricing } from "@/components/sections/Pricing";
import { FaqList } from "@/components/sections/FAQ";
import SemanticContent from "@/components/shared/SemanticContent";
import { SubscriptionFeatures } from "@/components/sections/SubscriptionFeatures";
import { getPricingPageData } from "@/lib/data/pricing-page";
import { Schema } from "@/components/shared/Schema";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";
import { Check, ShieldCheck } from "lucide-react";

export function generateMetadata(): Metadata {
    const title = "IPTV Subscription Plans & Pricing 2026 | From $7.50/mo";
    const description = "Compare IPTV subscription plans from $7.50/month. 24,000+ HD/4K channels, instant activation, 7-day money-back guarantee. Choose your plan and start streaming today.";
    
    return {
      ...generatePageMetadata({
          title,
          description,
          canonical: "/pricing",
      }),
      title: {
        absolute: title,
      }
    };
}

export default async function IPTVSubscription() {
    const { 
      semanticContent, 
      productSchema,
      breadcrumbSchema, 
      faqSchema,
      pricingPageFaqs
    } = await getPricingPageData();

  return (
    <>
      <Schema id="product" schema={productSchema} />
      <Schema id="breadcrumb" schema={breadcrumbSchema} />
      <Schema id="faq" schema={faqSchema} />
      
      <SemanticContent 
        primaryEntity={semanticContent.primaryEntity}
        relatedEntities={semanticContent.relatedEntities}
        semanticClusters={semanticContent.semanticClusters}
        contextualKeywords={semanticContent.contextualKeywords}
      />
      
      <Section className="relative overflow-hidden border-b border-white/[0.07] pt-12 pb-14 sm:pt-16 sm:pb-20">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
        <Container className="relative">
          <Breadcrumb items={[{ label: "Pricing" }]} align="center" />
          <SectionHeader
            as="h1"
            eyebrow="Simple pricing"
            title="IPTV Subscription Plans & Pricing"
            subtitle="Stream 24,000+ live channels in HD & 4K quality. Choose the IPTV subscription that fits your needs — all plans include instant activation and 7-day money-back guarantee."
          />
          <div className="mt-8 flex flex-wrap justify-center items-center gap-3 text-xs font-semibold sm:text-sm">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.09] bg-card px-3.5 py-1.5 text-muted-foreground">
              <Check className="h-4 w-4 text-primary" /> 24,000+ Channels
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.09] bg-card px-3.5 py-1.5 text-muted-foreground">
              <Check className="h-4 w-4 text-primary" /> Instant Activation
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.09] bg-card px-3.5 py-1.5 text-muted-foreground">
              <Check className="h-4 w-4 text-primary" /> 7-Day Guarantee
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.09] bg-card px-3.5 py-1.5 text-muted-foreground">
              <Check className="h-4 w-4 text-primary" /> 24/7 Support
            </div>
          </div>
        </Container>
      </Section>

      <Pricing />

      <SubscriptionFeatures />

      <Section id="faq" className="border-t border-white/[0.06]">
        <Container>
          <SectionHeader
            eyebrow="Questions answered"
            title="IPTV Subscription — Frequently Asked Questions"
            subtitle="Common questions about our plans, billing, setup, and streaming performance."
          />
          <FaqList items={pricingPageFaqs} />
        </Container>
      </Section>

      <Section className="border-t border-white/[0.06]">
        <Container>
          <div className="relative overflow-hidden rounded-lg border border-primary/25 bg-[#0b100d] p-7 sm:p-8 md:p-10 text-center">
            <div className="absolute inset-x-0 top-0 h-1 bg-primary sm:inset-y-0 sm:left-0 sm:h-full sm:w-1" />
            <p className="eyebrow mb-3 flex items-center justify-center gap-2">
              <ShieldCheck className="h-4 w-4" /> 100% Risk-Free Guarantee
            </p>
            <h2 className="font-headline text-3xl font-extrabold leading-[1.12] sm:text-4xl">
              7-Day Money-Back Guarantee
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              Try our IPTV subscription completely risk-free. If you&apos;re not 100% satisfied within the first 7 days, contact our support team for a full refund — no questions asked. We&apos;re confident you&apos;ll love the service.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
