import Link from "next/link";
import type React from "react";
import { CheckCircle, Package, Tv } from "lucide-react";
import { Container } from "../shared/Container";
import { SectionHeader } from "../shared/SectionHeader";
import { Section } from "../shared/Section";

interface Step {
  icon: typeof Package;
  title: string;
  description: React.ReactNode;
}

const steps: Step[] = [
    {
        icon: Package,
        title: "Choose Your IPTV Plan",
        description: "Select the prepaid subscription duration that fits your viewing needs, from 1 month to 12 months, with no recurring contracts."
    },
    {
        icon: CheckCircle,
        title: "Get Your Subscription Details",
        description: "Receive your M3U playlist URL, Xtream Codes credentials, and account details via email following payment confirmation."
    },
    {
        icon: Tv,
        title: "Set Up & Start Watching",
        description: (
          <>
            Enter your credentials into your preferred IPTV player using our universal{" "}
            <Link href="/setup" className="font-semibold text-primary hover:underline">
              IPTV setup guide
            </Link>{" "}
            and start streaming live TV immediately.
          </>
        )
    }
];

export function HowItWorks() {
  return (
    <Section id="how-it-works" className="bg-[#07080a] py-14 sm:py-18 lg:py-20">
      <Container>
        <SectionHeader
          align="left"
          title="Start Watching with TryIPTV in 3 Simple Steps"
          subtitle="Getting started with your IPTV subscription is simple. Follow these straightforward steps to set up and stream across your devices."
          eyebrow="Setup Process"
          className="mb-8 sm:mb-10 max-w-2xl"
        />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-5">
          {steps.map((step, i) => (
            <div
              key={i}
              className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.06] bg-[#050706] p-5.5 sm:p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] transition-all duration-200 hover:border-white/[0.13] hover:bg-[#07090b]"
            >
              <div>
                <div className="mb-4 sm:mb-5 flex items-center justify-between">
                  <div className="grid size-10 place-items-center rounded-xl border border-white/[0.07] bg-white/[0.025] text-foreground/80 transition-colors duration-200 group-hover:border-primary/30 group-hover:bg-primary/[0.08] group-hover:text-primary">
                    <step.icon className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-xl sm:text-2xl font-bold tracking-tight text-foreground/50 transition-colors duration-200 group-hover:text-foreground/85">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-headline text-[17px] sm:text-[18px] font-semibold leading-snug text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-[14px] sm:text-[14.5px] leading-relaxed text-muted-foreground/95">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
