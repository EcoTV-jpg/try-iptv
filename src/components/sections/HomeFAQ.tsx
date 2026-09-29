import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { homePageFaqs } from "@/lib/site-data/home-page-faq";
import { Container } from "../shared/Container";
import { SectionHeader } from "../shared/SectionHeader";
import { Section } from "../shared/Section";
import Link from "next/link";

export function HomeFAQ() {
  return (
    <Section id="faq" className="border-b border-white/[0.06] bg-[#070a08]">
      <Container>
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="Clear, verified answers to common questions about IPTV services, setup, device compatibility, and trial access."
          eyebrow="Common Questions"
        />

        <Accordion
          type="single"
          collapsible
          className="mx-auto max-w-3xl overflow-hidden rounded-lg border border-white/[0.09] bg-card"
        >
          {homePageFaqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-white/[0.08] px-5 last:border-b-0 sm:px-6">
              <AccordionTrigger className="min-h-16 py-5 text-left text-base font-extrabold leading-6 hover:no-underline hover:text-primary data-[state=open]:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-6 pr-8 text-sm leading-7 text-muted-foreground sm:text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-8 text-center text-xs text-muted-foreground">
          Looking for specific plan rates or trial details? Explore our{" "}
          <Link href="/pricing" className="text-primary underline underline-offset-4 hover:text-primary/80 font-semibold">
            Pricing Plans
          </Link>{" "}
          or{" "}
          <Link href="/iptv-free-trial" className="text-primary underline underline-offset-4 hover:text-primary/80 font-semibold">
            24-Hour Free Trial
          </Link>{" "}
          guides.
        </div>
      </Container>
    </Section>
  );
}
