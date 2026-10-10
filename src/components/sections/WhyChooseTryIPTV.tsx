import { ArrowRight, Tv, Zap, Smartphone, CalendarCheck } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { BlurFade } from "@/components/velora/blur-fade";
import { Container } from "../shared/Container";
import { Section } from "../shared/Section";

const benefits = [
  {
    icon: Tv,
    title: "24,000+ Live Channels",
    description:
      "Stream live sports, international networks, news channels, and major PPV events with complete EPG TV guide listings included.",
  },
  {
    icon: Zap,
    title: "80,000+ Movies & Series",
    description:
      "Access an expansive on-demand VOD library in HD and 4K resolution where available from broadcast sources, with zero rental fees.",
  },
  {
    icon: Smartphone,
    title: "Broad Device Support",
    description:
      "Stream across your preferred hardware: Amazon Fire TV, Android, Apple TV, Smart TVs, Windows, macOS, and MAG boxes.",
  },
  {
    icon: CalendarCheck,
    title: "2 Streams & Prepaid Plans",
    description:
      "Plans start at $16 for one month. Every package includes 2 simultaneous device connections, no contracts, and no auto-renewals.",
  },
];

export function WhyChooseTryIPTV() {
  return (
    <Section id="why-tryiptv" className="bg-[#050706] pt-14 pb-10 sm:pt-18 sm:pb-14 lg:pt-20 lg:pb-16">
      <Container>
        <BlurFade className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-mono font-bold uppercase tracking-[0.08em] text-primary">
              Why TryIPTV
            </p>
            <h2 className="mt-2.5 font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[38px] leading-tight">
              Why Viewers Choose TryIPTV
            </h2>
            <p className="mt-3 text-[15px] sm:text-base leading-relaxed text-muted-foreground/90">
              An IPTV service built around extensive channel coverage, HD &amp; 4K streaming, and transparent prepaid plans.
            </p>
          </div>
          <Button variant="outline" asChild className="self-start lg:self-auto rounded-xl h-10 px-5 text-sm font-semibold border-white/[0.12] bg-[#07080a] hover:bg-white/[0.05]">
            <Link href="/iptv-free-trial" className="inline-flex items-center gap-2">
              <span>Test with a 24h Free Trial</span>
              <ArrowRight className="size-4 text-primary" />
            </Link>
          </Button>
        </BlurFade>

        {/* 4 Core Value Propositions */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <BlurFade key={benefit.title} delay={0.06 + i * 0.04} className="h-full">
                <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-white/[0.06] bg-[#060807]/90 p-5 sm:p-5.5 shadow-sm transition-all duration-200 hover:border-white/[0.14] hover:bg-[#080a09]">
                  <div>
                    <div className="mb-4 inline-flex size-9.5 sm:size-10 items-center justify-center rounded-xl bg-white/[0.025] text-foreground/85 border border-white/[0.07] transition-colors group-hover:border-primary/30 group-hover:bg-primary/[0.08] group-hover:text-primary">
                      <Icon className="size-4.5 sm:size-5" />
                    </div>
                    <h3 className="font-headline text-[17px] font-bold tracking-tight text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="mt-2.5 text-[13.5px] sm:text-[14px] leading-relaxed text-muted-foreground/95">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </BlurFade>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
