import { Tv, Zap, Smartphone, CalendarCheck } from "lucide-react";
import { BlurFade } from "@/components/velora/blur-fade";
import { Container } from "../shared/Container";
import { Section } from "../shared/Section";

const benefits = [
  {
    icon: Tv,
    title: "Live TV & Sports",
    description:
      "25,000+ live channels across supported regions and categories, with EPG information where available.",
  },
  {
    icon: Zap,
    title: "Movies & TV Shows",
    description:
      "120,000+ on-demand movies and TV shows across supported devices.",
  },
  {
    icon: Smartphone,
    title: "2 Simultaneous Connections",
    description:
      "Use the service across supported devices with up to two concurrent streams.",
  },
  {
    icon: CalendarCheck,
    title: "Prepaid Without Auto-Renewal",
    description:
      "Choose a fixed-duration plan and renew manually only when you want to continue.",
  },
];

export function WhyChooseTryIPTV() {
  return (
    <Section id="why-tryiptv" className="bg-[#050706] pt-14 pb-10 sm:pt-18 sm:pb-14 lg:pt-20 lg:pb-16">
      <Container>
        <BlurFade>
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
        </BlurFade>

        {/* 4 Core Value Propositions */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <BlurFade key={benefit.title} delay={0.06 + i * 0.04} className="h-full">
                <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-white/[0.04] bg-transparent p-5 sm:p-5.5 transition-all duration-200 hover:border-white/[0.1] hover:bg-white/[0.015]">
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

        <div className="mt-8 rounded-2xl border border-white/[0.06] bg-white/[0.015] p-5 sm:p-6">
          <h3 className="font-headline text-xl font-bold tracking-tight text-foreground">What to Check Before Choosing an IPTV Service</h3>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">Use these practical checks when comparing an IPTV provider: device compatibility, the content you actually watch, M3U or Xtream Codes support, EPG availability, simultaneous stream limits, prepaid billing terms, trial access, and setup guidance.</p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-muted-foreground">
            {['Device compatibility', 'Content access', 'M3U / Xtream Codes', 'EPG availability', 'Simultaneous connections', 'Prepaid terms', 'Free trial', 'Setup support'].map((criterion) => <span key={criterion} className="rounded-full border border-white/[0.08] bg-card px-3 py-1.5">{criterion}</span>)}
          </div>
        </div>
      </Container>
    </Section>
  );
}
