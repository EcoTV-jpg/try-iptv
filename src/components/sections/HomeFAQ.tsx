import type React from "react";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Mail, MessagesSquare, Plus } from "lucide-react";
import { Container } from "../shared/Container";
import { Section } from "../shared/Section";
import { SectionHeader } from "../shared/SectionHeader";
import { siteConfig } from "@/lib/site-config";
import { socialLinks } from "@/lib/site-data/socials";

const link = "text-primary hover:underline";

const CONTACTS = [
  { icon: MessagesSquare, label: "Customer Support", detail: "WhatsApp & chat assistance", href: "/contact-us", isExternal: false },
  { icon: Mail, label: siteConfig.links.email, detail: "Billing & playlist inquiries", href: `mailto:${siteConfig.links.email}`, isExternal: true },
  { icon: BookOpen, label: "Universal Setup Guides", detail: "Step-by-step device tutorials", href: "/setup", isExternal: false },
];

// Homepage-only FAQ. Native <details> keeps every answer in the server-rendered HTML,
// so the shared FAQ component (used by 15 other pages) is left unchanged.
const faqs: { question: string; answer: React.ReactNode }[] = [
  {
    question: "What is TryIPTV?",
    answer: <>TryIPTV is an IPTV service provider. It supplies streaming access for compatible devices and IPTV player apps; it is not a player app itself.</>,
  },
  {
    question: "Does TryIPTV offer a free trial?",
    answer: <>Yes. TryIPTV offers a 24-hour free trial at $0. <Link href="/iptv-free-trial" className={link}>Request trial access</Link>.</>,
  },
  {
    question: "Which devices can I use?",
    answer: <>TryIPTV works with compatible Smart TVs, streaming devices, computers, phones, and IPTV player apps. <Link href="/devices" className={link}>Browse device setup guides</Link>.</>,
  },
  {
    question: "How do I set up TryIPTV?",
    answer: <>Install a compatible player, then enter the account details or M3U playlist URL provided after confirmation. <Link href="/setup" className={link}>View the setup guide</Link>.</>,
  },
  {
    question: "How many simultaneous connections are included?",
    answer: <>Every standard TryIPTV subscription includes 2 simultaneous connections, meaning up to two devices can stream at the same time.</>,
  },
  {
    question: "Do TryIPTV subscriptions renew automatically?",
    answer: <>No. Plans are prepaid for the selected duration and do not automatically renew. <Link href="/pricing" className={link}>Compare plans</Link>.</>,
  },
  {
    question: "Which IPTV player should I use?",
    answer: <>Any compatible IPTV player that accepts an Xtream Codes login or an M3U playlist URL. Common choices include TiviMate, IPTV Smarters, XCIPTV, Televizo, OTT Navigator and IPTV Extreme; which one suits you depends on your device. <Link href="/players" className={link}>Compare IPTV players</Link>.</>,
  },
  {
    question: "How do I contact support?",
    answer: <>Message us on <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className={link}>WhatsApp</a>, email <a href={`mailto:${siteConfig.links.email}`} className={link}>{siteConfig.links.email}</a>, or use the <Link href="/contact-us" className={link}>contact page</Link>.</>,
  },
];

export function HomeFAQ() {
  return (
    <Section id="faq" className="border-t border-white/[0.07]">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-24">
              <SectionHeader align="left" eyebrow="Support, clarified" title="Frequently Asked Questions" className="mb-4 sm:mb-4 lg:mb-4" />
              <p className="mb-6 max-w-2xl text-[15.5px] leading-relaxed text-muted-foreground sm:mb-8 sm:text-[16.5px]">
                Quick answers about the service. See{" "}
                <Link href="/faq" className="font-semibold text-primary hover:underline">all IPTV FAQs</Link> or{" "}
                <Link href="/help" className="font-semibold text-primary hover:underline">troubleshooting guides</Link> for more.
              </p>

              <div className="rounded-2xl border border-white/[0.07] bg-card p-1.5">
                <ul className="divide-y divide-white/[0.06]">
                  {CONTACTS.map(({ icon: Icon, label, detail, href, isExternal }) => {
                    const Component = isExternal ? "a" : Link;
                    return (
                      <li key={label}>
                        <Component
                          href={href}
                          className="group/contact flex items-center gap-3.5 rounded-xl p-3.5 transition-colors hover:bg-white/[0.04] focus-visible:outline-2 focus-visible:outline-primary sm:p-4"
                        >
                          <span className="grid size-9 shrink-0 place-items-center rounded-xl border border-white/[0.07] bg-white/[0.025] transition-colors group-hover/contact:border-primary/40 group-hover/contact:bg-primary/10">
                            <Icon aria-hidden className="size-4.5 text-primary" />
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="block truncate text-sm font-semibold text-foreground/90 group-hover/contact:text-foreground">{label}</span>
                            <span className="block text-xs text-muted-foreground/85">{detail}</span>
                          </span>
                          <ArrowUpRight aria-hidden className="size-3.5 shrink-0 text-muted-foreground group-hover/contact:text-primary" />
                        </Component>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="border-t border-white/[0.07]">
              {faqs.map((faq, i) => (
                <details key={faq.question} open={i === 0} className="group border-b border-white/[0.07]">
                  <summary className="flex min-h-12 cursor-pointer list-none items-start justify-between gap-4 py-3.5 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary [&::-webkit-details-marker]:hidden">
                    <span className="flex items-start gap-3.5 sm:gap-5">
                      {/* The number is CSS-generated so it stays out of the heading text. */}
                      <span
                        aria-hidden
                        data-n={String(i + 1).padStart(2, "0")}
                        className="mt-0.5 shrink-0 font-mono text-xs font-semibold tabular-nums text-muted-foreground/60 before:content-[attr(data-n)] group-open:text-primary sm:text-sm"
                      />
                      <h3 className="font-headline text-[15.5px] font-semibold leading-snug text-foreground/90 group-open:text-foreground sm:text-[16.5px]">
                        {faq.question}
                      </h3>
                    </span>
                    <Plus aria-hidden className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-45 motion-reduce:transition-none" />
                  </summary>
                  <p className="pb-4.5 pl-7 pr-3 text-[14px] leading-relaxed text-muted-foreground/95 sm:pl-10 sm:text-[15px]">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
