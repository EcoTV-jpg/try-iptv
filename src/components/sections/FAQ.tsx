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
      className={cn("mx-auto max-w-[880px] overflow-hidden rounded-[18px] border border-white/[0.08] bg-[#07080a] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]", className)}
    >
      {items.map((faq, i) => (
        <AccordionItem key={i} value={`item-${i}`} className="border-b border-white/[0.07] px-6 sm:px-8 last:border-b-0">
          <AccordionTrigger className="min-h-[68px] py-5 sm:py-6 text-left text-[16px] font-semibold leading-snug text-foreground/90 hover:no-underline hover:text-foreground transition-colors sm:text-[17px]">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="pb-6 sm:pb-8 pr-4 sm:pr-8 text-[15px] sm:text-[16px] leading-relaxed text-muted-foreground">
            <span
              dangerouslySetInnerHTML={{
                __html: faq.answer.includes("support@tryiptv.com")
                  ? faq.answer.replace("support@tryiptv.com", "<!--email_off-->support@tryiptv.com<!--/email_off-->")
                  : faq.answer,
              }}
            />
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
