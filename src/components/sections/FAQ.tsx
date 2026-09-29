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
      className={cn("mx-auto max-w-3xl overflow-hidden rounded-lg border border-white/[0.09] bg-card", className)}
    >
      {items.map((faq, i) => (
        <AccordionItem key={i} value={`item-${i}`} className="border-white/[0.08] px-5 last:border-b-0 sm:px-6">
          <AccordionTrigger className="min-h-16 py-5 text-left text-base font-extrabold leading-6 hover:no-underline hover:text-primary data-[state=open]:text-primary">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="pb-6 pr-8 text-sm leading-7 text-muted-foreground sm:text-base">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export function FAQ() {
  return (
    <Section id="faq" className="border-t border-white/[0.06]">
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
