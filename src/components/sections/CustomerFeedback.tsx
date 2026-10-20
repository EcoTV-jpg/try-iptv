import Image from "next/image";
import { Container } from "../shared/Container";
import { SectionHeader } from "../shared/SectionHeader";
import { Section } from "../shared/Section";
import { MessageSquareCheck } from "lucide-react";

export const customerFeedbackItems = [
  {
    id: "feedback-1",
    src: "/images/feedback/customer-feedback-1.jpg",
    alt: "WhatsApp chat in which TryIPTV support suggests the IPTV Smarters Pro app for an Xtream Codes login and the customer replies that it is working",
    title: "IPTV Smarters Pro Setup",
    highlight: "Xtream Codes API • Setup Completed",
  },
  {
    id: "feedback-2",
    src: "/images/feedback/customer-feedback-2.jpg",
    alt: "WhatsApp chat in which a customer asks for help adding the service on a player app's Add Provider screen, then confirms it is working",
    title: "Smart TV OTT Player",
    highlight: "Live TV Setup • Support Assisted",
  },
  {
    id: "feedback-3",
    src: "/images/feedback/customer-feedback-3.jpg",
    alt: "WhatsApp chat in which TryIPTV support sends Xtream Codes and M3U login details, shown blurred, and the customer later confirms it is working",
    title: "M3U & Xtream Delivery",
    highlight: "M3U & Xtream Delivery",
  },
  {
    id: "feedback-4",
    src: "/images/feedback/customer-feedback-4.jpg",
    alt: "WhatsApp chat with a 12-month plan customer who sends the Smart IPTV app MAC address, restarts the app and confirms it worked",
    title: "12-Month Smart IPTV Activation",
    highlight: "Annual Subscription • MAC Address Loaded",
  },
  {
    id: "feedback-5",
    src: "/images/feedback/customer-feedback-5.jpg",
    alt: "WhatsApp chat in which TryIPTV support tells a customer that no VPN is needed and the customer replies that it works",
    title: "Streaming Setup Feedback",
    highlight: "No VPN Needed",
  },
];

export function CustomerFeedback() {
  return (
    <Section id="customer-feedback">
      <Container>
        <SectionHeader
          align="left"
          title="Customer Support Conversations"
          subtitle="WhatsApp conversations with TryIPTV customers showing account setup, credential delivery, and player assistance. Some messages are blurred for privacy."
          eyebrow="Customer Support"
        />

        {/* Visitor-controlled row instead of an auto-scrolling marquee: each screenshot appears once and can be read at the visitor's pace. */}
        <div
          role="region"
          aria-label="Customer WhatsApp conversation screenshots"
          tabIndex={0}
          className="-mx-5 snap-x snap-mandatory overflow-x-auto scroll-px-5 pb-4 sm:-mx-6 sm:scroll-px-6 lg:-mx-8 lg:scroll-px-8"
        >
          <ul className="flex w-max items-stretch gap-4 px-5 sm:px-6 lg:px-8">
            {customerFeedbackItems.map((item) => (
              <li key={item.id} className="flex snap-start">
                <figure className="flex w-[240px] flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-card sm:w-[260px]">
                  <div className="relative aspect-[525/1024] w-full bg-[#0a0d0b]">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={525}
                      height={1024}
                      className="h-full w-full object-cover"
                      sizes="260px"
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="flex-1 border-t border-white/[0.07] px-4 py-3">
                    <span className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
                      <MessageSquareCheck className="size-4 shrink-0 text-primary" aria-hidden="true" />
                      {item.title}
                    </span>
                    <span className="mt-1 block text-xs text-muted-foreground">{item.highlight}</span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
