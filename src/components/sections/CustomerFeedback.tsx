import Image from "next/image";
import { Container } from "../shared/Container";
import { SectionHeader } from "../shared/SectionHeader";
import { Section } from "../shared/Section";
import { Marquee } from "../velora/marquee";
import { MessageSquareCheck } from "lucide-react";

export const customerFeedbackItems = [
  {
    id: "feedback-1",
    src: "/images/feedback/customer-feedback-1.jpg",
    alt: "TryIPTV customer WhatsApp chat confirming instant Xtream Codes API credentials setup on IPTV Smarters Pro",
    title: "IPTV Smarters Pro Setup",
    highlight: "Xtream Codes API • Verified Working",
  },
  {
    id: "feedback-2",
    src: "/images/feedback/customer-feedback-2.jpg",
    alt: "TryIPTV customer support conversation on WhatsApp assisting with Smart TV OTT player playlist activation",
    title: "Smart TV OTT Player",
    highlight: "Live TV Setup • Support Assisted",
  },
  {
    id: "feedback-3",
    src: "/images/feedback/customer-feedback-3.jpg",
    alt: "TryIPTV subscriber WhatsApp confirmation verifying active M3U playlist link and Xtream Codes service delivery",
    title: "M3U & Xtream Delivery",
    highlight: "Account Credentials • Instant Dispatch",
  },
  {
    id: "feedback-4",
    src: "/images/feedback/customer-feedback-4.jpg",
    alt: "TryIPTV 12-month prepaid subscription feedback on WhatsApp confirming Smart IPTV app MAC address activation",
    title: "12-Month Smart IPTV Activation",
    highlight: "Annual Subscription • MAC Address Loaded",
  },
  {
    id: "feedback-5",
    src: "/images/feedback/customer-feedback-5.jpg",
    alt: "TryIPTV customer review on WhatsApp confirming smooth streaming performance without VPN requirement",
    title: "Stream Stability & Speed",
    highlight: "No VPN Needed • Buffer-Free Playback",
  },
];

export function CustomerFeedback() {
  return (
    <Section id="customer-feedback" className="border-t border-white/[0.06] bg-[#050706] py-14 sm:py-18 lg:py-20">
      <Container>
        <SectionHeader
          title="Real Customer Support & Activation Proof"
          subtitle="Genuine WhatsApp conversations with active TryIPTV subscribers verifying fast credential delivery, seamless player configuration, and dependable live streaming."
          eyebrow="Verified Customer Proof"
          className="mb-0 max-w-3xl"
        />

        <div className="relative mt-8 sm:mt-10">
          {/* Top border line with gradient fade */}
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.12] to-transparent"
          />

          {/* Left and right fade gradient overlays */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-32 bg-gradient-to-r from-[#050706] to-transparent"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-32 bg-gradient-to-l from-[#050706] to-transparent"
          />

          <Marquee
            pauseOnHover
            repeat={2}
            className="py-5 [--duration:70s] [--gap:1rem] sm:[--gap:1.25rem]"
          >
            {customerFeedbackItems.map((item) => (
              <figure
                key={item.id}
                className="group relative flex w-[min(82vw,360px)] sm:w-[360px] lg:w-[380px] shrink-0 flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-[#07090b] shadow-md transition-all duration-200 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
              >
                {/* Header label */}
                <div className="flex items-center border-b border-white/[0.06] bg-white/[0.02] px-3.5 py-2.5">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-foreground">
                    <MessageSquareCheck className="size-3.5 text-primary shrink-0" aria-hidden="true" />
                    <span className="truncate">{item.title}</span>
                  </div>
                </div>

                {/* Full-resolution Screenshot (525x1024 native) */}
                <div className="relative aspect-[525/1024] w-full bg-[#0a0d0b] overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={525}
                    height={1024}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.01]"
                    sizes="(max-width: 640px) 82vw, (max-width: 1024px) 360px, 380px"
                    loading="lazy"
                  />
                </div>

                {/* Footer caption */}
                <figcaption className="border-t border-white/[0.06] bg-[#07090b] px-3.5 py-2 text-center text-[11px] font-mono text-muted-foreground">
                  {item.highlight}
                </figcaption>
              </figure>
            ))}
          </Marquee>

          {/* Bottom border line */}
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/[0.12] to-transparent"
          />
        </div>
      </Container>
    </Section>
  );
}
