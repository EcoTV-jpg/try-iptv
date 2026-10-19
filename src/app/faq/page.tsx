import { FaqList } from "@/components/sections/FAQ";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Button } from "@/components/ui/button";
import { CTA } from "@/components/sections/CTA";
import { getFaqPageData } from "@/lib/data/faq-page";
import { faqGroups } from "@/lib/site-data/faq";
import { Schema } from "@/components/shared/Schema";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";

const FAQ_TITLE = "IPTV FAQ: Trial, Plans, Devices and Setup | TryIPTV";

export function generateMetadata(): Metadata {
    return {
        ...generatePageMetadata({
            title: FAQ_TITLE,
            description: "Answers about the TryIPTV 24-hour free trial, prepaid plans from $16, 2 simultaneous connections, devices, setup, and support. No credit card for the trial, and plans do not auto-renew.",
            canonical: "/faq",
        }),
        title: { absolute: FAQ_TITLE },
    };
}

export default async function FaqPage() {
  const { 
    faqSchema, 
    breadcrumbSchema 
  } = await getFaqPageData();

  return (
    <>
      <Schema id="faq" schema={faqSchema} />
      <Schema id="breadcrumb" schema={breadcrumbSchema} />
      
      <Section className="relative overflow-hidden border-b border-white/[0.07] pt-12 pb-14 sm:pt-16 sm:pb-20">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
        <Container className="relative text-center">
          <Breadcrumb items={[{ label: "FAQ" }]} align="center" />
          <SectionHeader
            as="h1"
            eyebrow="Short answers first"
            title="Frequently Asked Questions About TryIPTV"
            subtitle="The trial lasts 24 hours, costs $0, and needs no credit card. Paid plans start at $16, include 2 simultaneous connections, and do not renew automatically. Login details typically arrive within 5–15 minutes."
          />
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/iptv-free-trial">Start my free trial</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/pricing">See plans and pricing</Link>
            </Button>
          </div>
        </Container>
      </Section>

      <Section className="bg-[#050706] py-10 sm:py-14">
        <Container className="space-y-12">
          {faqGroups.map((group) => (
            <div key={group.id} id={group.id}>
              <h2 className="mb-4 font-headline text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                {group.title}
              </h2>
              <FaqList items={group.items} mountClosedAnswers />
            </div>
          ))}
        </Container>
      </Section>

      <CTA
        title="Still Have Questions?"
        subtitle="Customer support is available via WhatsApp or direct request for account, setup, and service questions."
        eyebrow="Customer Support"
        buttonText="Contact Support"
        buttonHref="/contact-us"
      />
    </>
  );
}
