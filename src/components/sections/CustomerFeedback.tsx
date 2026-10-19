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
    alt: "TryIPTV customer WhatsApp chat showing Xtream Codes API setup assistance on IPTV Smarters Pro",
    title: "Xtream Codes setup assistance",
    highlight: "Xtream Codes setup assistance",
  },
  {
    id: "feedback-2",
    src: "/images/feedback/customer-feedback-2.jpg",
    alt: "TryIPTV customer support conversation on WhatsApp assisting with Smart TV OTT player playlist activation",
    title: "Smart TV playlist activation",
    highlight: "Smart TV playlist activation",
  },
  {
    id: "feedback-3",
    src: "/images/feedback/customer-feedback-3.jpg",
    alt: "TryIPTV subscriber WhatsApp conversation showing M3U playlist and Xtream Codes delivery",
    title: "M3U delivery example",
    highlight: "M3U delivery example",
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
    alt: "TryIPTV customer WhatsApp conversation about streaming setup and playback",
    title: "Stream Stability & Speed",
    highlight: "Stream Setup Feedback",
  },
];

export function CustomerFeedback() {
  return (
    <Section id="customer-feedback" className="border-t border-white/[0.06] bg-[#050706] py-12 sm:py-16 lg:py-18">
      <Container>
        <SectionHeader
          title="Real IPTV Setup & Activation Examples"
          subtitle="Genuine WhatsApp conversations with active TryIPTV subscribers showing account setup, credential delivery, and player assistance."
          eyebrow="Verified Customer Proof"
          className="mb-0 max-w-3xl"
        />

        <div className="relative mt-6 sm:mt-8">
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
            className="py-4 [--duration:70s] [--gap:1rem] sm:[--gap:1.25rem]"
          >
            {customerFeedbackItems.map((item) => (
              <figure
                key={item.id}
                className="group relative flex w-[min(78vw,320px)] sm:w-[320px] lg:w-[340px] shrink-0 flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-[#07090b] shadow-md transition-all duration-200 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
              >
                {/* Header label */}
                <div className="flex items-center border-b border-white/[0.06] bg-white/[0.02] px-3.5 py-2">
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
                    sizes="(max-width: 640px) 78vw, (max-width: 1024px) 320px, 340px"
                    loading="lazy"
                  />
                </div>

                {/* Footer caption */}
                <figcaption className="border-t border-white/[0.06] bg-[#07090b] px-3.5 py-1.5 text-center text-[11px] font-mono text-muted-foreground">
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
