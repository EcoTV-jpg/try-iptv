import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/site-data/faq";
import { Container } from "../shared/Container";
import { SectionHeader } from "../shared/SectionHeader";
import { Section } from "../shared/Section";
import { cn } from "@/lib/utils";

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqListProps {
  items: FaqItem[];
  className?: string;
}

export function FaqList({ items, className }: FaqListProps) {
  return (
    <Accordion
      type="single"
      collapsible
      className={cn("mx-auto max-w-4xl overflow-hidden rounded-2xl border border-white/[0.08] bg-[#07080a] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]", className)}
    >
      {items.map((faq, i) => (
        <AccordionItem key={i} value={`item-${i}`} className="border-white/[0.08] px-5 last:border-b-0 sm:px-7">
          <AccordionTrigger className="min-h-[76px] py-5 text-left text-base font-semibold leading-6 hover:no-underline hover:text-foreground hover:bg-white/[0.015] data-[state=open]:text-foreground sm:text-[17px]">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="pb-7 pr-8 text-[15px] leading-7 text-muted-foreground sm:text-base">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export function FAQ() {
  return (
    <Section id="faq">
      <Container>
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="Have questions? We've got answers. If you can't find what you're looking for, feel free to contact us."
          eyebrow="Support, clarified"
        />
        <FaqList items={faqs} />
      </Container>
    </Section>
  );
}
