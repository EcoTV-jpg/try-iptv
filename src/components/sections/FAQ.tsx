"use client";

import {
  ArrowUpRight,
  BookOpen,
  Mail,
  MessagesSquare,
} from "lucide-react";
import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BlurFade } from "@/components/velora/blur-fade";
import { SpotlightCard } from "@/components/velora/spotlight-card";
import { faqs } from "@/lib/site-data/faq";
import { Container } from "../shared/Container";
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

const CONTACTS = [
  {
    icon: MessagesSquare,
    label: "24/7 Live Support",
    detail: "WhatsApp & chat assistance",
    href: "/contact-us",
    isExternal: false,
  },
  {
    icon: Mail,
    label: "support@tryiptv.com",
    detail: "Billing & playlist inquiries",
    href: "mailto:support@tryiptv.com",
    isExternal: true,
  },
  {
    icon: BookOpen,
    label: "Universal Setup Guides",
    detail: "Step-by-step device tutorials",
    href: "/setup",
    isExternal: false,
  },
];

/**
 * Reusable single-column FaqList preserved for guide & device pages.
 */
export function FaqList({ items, className }: FaqListProps) {
  return (
    <Accordion
      type="single"
      collapsible
      className={cn(
        "mx-auto max-w-[880px] overflow-hidden rounded-[18px] border border-white/[0.08] bg-[#07080a] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]",
        className
      )}
    >
      {items.map((faq, i) => (
        <AccordionItem
          key={i}
          value={`item-${i}`}
          className="border-b border-white/[0.07] px-6 sm:px-8 last:border-b-0"
        >
          <AccordionTrigger className="min-h-[68px] py-5 sm:py-6 text-left text-[16px] font-semibold leading-snug text-foreground/90 hover:no-underline hover:text-foreground transition-colors sm:text-[17px]">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="pb-6 sm:pb-8 pr-4 sm:pr-8 text-[15px] sm:text-[16px] leading-relaxed text-muted-foreground">
            <span
              dangerouslySetInnerHTML={{
                __html: faq.answer.includes("support@tryiptv.com")
                  ? faq.answer.replace(
                      "support@tryiptv.com",
                      "<!--email_off-->support@tryiptv.com<!--/email_off-->"
                    )
                  : faq.answer,
              }}
            />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

/**
 * Modern two-column FAQ for homepage: sticky support card on the left
 * and numbered accordion list on the right.
 */
export function FAQ() {
  return (
    <Section id="faq" className="bg-[#050706] py-14 sm:py-18 lg:py-20 border-t border-white/[0.06]">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Heading & Support Channels */}
          <div className="lg:col-span-5">
            <BlurFade className="lg:sticky lg:top-24">
              <p className="text-xs font-mono font-bold uppercase tracking-[0.08em] text-primary">
                Support, clarified
              </p>
              <h2 className="mt-2.5 font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[38px] leading-tight">
                Frequently Asked Questions
              </h2>
              <p className="mt-3 text-[15px] sm:text-base leading-relaxed text-muted-foreground/90">
                Have questions? We&apos;ve got answers. If you can&apos;t find what you&apos;re looking for, feel free to contact us.
              </p>

              <SpotlightCard className="mt-6 sm:mt-8 p-1.5 rounded-2xl border border-white/[0.07] bg-[#07080a]">
                <ul className="divide-y divide-white/[0.06]">
                  {CONTACTS.map(({ icon: Icon, label, detail, href, isExternal }) => {
                    const Component = isExternal ? "a" : Link;
                    return (
                      <li key={label}>
                        <Component
                          href={href}
                          className="group/contact flex items-center gap-3.5 rounded-xl p-3.5 sm:p-4 outline-none transition-colors hover:bg-white/[0.04] focus-visible:ring-2 focus-visible:ring-primary/50"
                        >
                          <span className="grid size-9 shrink-0 place-items-center rounded-xl border border-white/[0.07] bg-white/[0.025] transition-colors group-hover/contact:border-primary/40 group-hover/contact:bg-primary/10">
                            <Icon aria-hidden className="size-4.5 text-primary" />
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="block truncate text-sm font-semibold text-foreground/90 transition-colors group-hover/contact:text-foreground">
                              {label}
                            </span>
                            <span className="block text-xs text-muted-foreground/85">
                              {detail}
                            </span>
                          </span>
                          <ArrowUpRight
                            aria-hidden
                            className="size-3.5 shrink-0 text-muted-foreground transition-transform group-hover/contact:-translate-y-0.5 group-hover/contact:translate-x-0.5 group-hover/contact:text-primary motion-reduce:transition-none"
                          />
                        </Component>
                      </li>
                    );
                  })}
                </ul>
              </SpotlightCard>
            </BlurFade>
          </div>

          {/* Right Column: Numbered Accordion */}
          <BlurFade delay={0.1} className="lg:col-span-7">
            <Accordion
              type="multiple"
              defaultValue={["item-0"]}
              className="border-t border-white/[0.07]"
            >
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={faq.question}
                  value={`item-${i}`}
                  className="border-b border-white/[0.07]"
                >
                  <AccordionTrigger className="gap-3.5 py-3.5 sm:py-4 text-left hover:no-underline group">
                    <span className="flex items-start gap-3.5 sm:gap-5">
                      <span
                        aria-hidden
                        className="mt-0.5 font-mono text-xs sm:text-sm font-semibold text-muted-foreground/60 tabular-nums group-data-[state=open]:text-primary transition-colors shrink-0"
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-headline text-[15.5px] sm:text-[16.5px] font-semibold text-foreground/90 transition-colors group-hover:text-foreground group-data-[state=open]:text-foreground leading-snug">
                        {faq.question}
                      </span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pr-3 pb-4.5 pl-7 sm:pl-10 text-[14px] sm:text-[15px] leading-relaxed text-muted-foreground/95">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: faq.answer.includes("support@tryiptv.com")
                          ? faq.answer.replace(
                              "support@tryiptv.com",
                              "<!--email_off-->support@tryiptv.com<!--/email_off-->"
                            )
                          : faq.answer,
                      }}
                    />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </BlurFade>
        </div>
      </Container>
    </Section>
  );
}
