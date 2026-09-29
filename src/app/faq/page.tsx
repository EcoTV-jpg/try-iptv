import { FaqList } from "@/components/sections/FAQ";
import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { CTA } from "@/components/sections/CTA";
import SemanticContent from "@/components/shared/SemanticContent";
import { getFaqPageData } from "@/lib/data/faq-page";
import { faqs } from "@/lib/site-data/faq";
import { Schema } from "@/components/shared/Schema";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";

export function generateMetadata(): Metadata {
    return generatePageMetadata({
        title: "Frequently Asked Questions",
        description: "Have questions about TryIPTV? Find answers to common questions about free trials, device compatibility, buffering, activation, and our refund policy.",
        canonical: "/faq",
    });
}

export default async function FaqPage() {
  const { 
    semanticContent, 
    faqSchema, 
    breadcrumbSchema 
  } = await getFaqPageData();

  return (
    <>
      <Schema id="faq" schema={faqSchema} />
      <Schema id="breadcrumb" schema={breadcrumbSchema} />

      <SemanticContent 
        primaryEntity={semanticContent.primaryEntity}
        relatedEntities={semanticContent.relatedEntities}
        semanticClusters={semanticContent.semanticClusters}
        contextualKeywords={semanticContent.contextualKeywords}
      />
      
      <Section className="relative overflow-hidden border-b border-white/[0.07] pt-12 pb-14 sm:pt-16 sm:pb-20">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
        <Container className="relative text-center">
          <Breadcrumb items={[{ label: "FAQ" }]} align="center" />
          <SectionHeader
            as="h1"
            eyebrow="TryIPTV help center"
            title="Answers for Better Streaming"
            subtitle="Clear guidance on setup, playback, billing, devices, and support."
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <FaqList items={faqs} />
        </Container>
      </Section>

      <CTA
        title="Still Have Questions?"
        subtitle="Our dedicated support team is available 24/7. Reach out via WhatsApp or submit a request directly."
        eyebrow="Always here to help"
        buttonText="Contact Support"
        buttonHref="/contact"
      />
    </>
  );
}
