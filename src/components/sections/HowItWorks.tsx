
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
    <Section id="how-it-works" className="bg-[#07080a]">
      <Container>
        <SectionHeader
          title="Start Watching with TryIPTV in 3 Simple Steps"
          subtitle="Getting started with your IPTV subscription is simple. Follow these straightforward steps to set up and stream across your devices."
          eyebrow="Setup Process"
        />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6">
            {steps.map((step, i) => (
              <div
                key={i}
                className="group relative flex flex-col rounded-[18px] border border-white/[0.08] bg-[#07080a] p-7 sm:p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] transition-all duration-200 hover:border-white/[0.14] hover:bg-[#090b0d] motion-safe:hover:-translate-y-0.5"
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-primary transition-colors duration-200 group-hover:border-primary/30 group-hover:bg-primary/[0.08]">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <span className="font-mono text-2xl font-bold tracking-tight text-primary/70 transition-colors duration-200 group-hover:text-primary">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-headline text-[19px] sm:text-xl font-semibold leading-snug text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
      </Container>
    </Section>
  );
}
