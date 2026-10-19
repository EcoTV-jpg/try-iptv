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
        title: "Choose a Plan or Start a Trial",
        description: <>Choose a prepaid plan or start the <Link href="/iptv-free-trial" className="font-semibold text-primary hover:underline">24-hour free trial</Link>.</>
    },
    {
        icon: CheckCircle,
        title: "Receive Your Login",
        description: "Credentials are typically delivered within 5–15 minutes after confirmation, including M3U or Xtream Codes details."
    },
    {
        icon: Tv,
        title: "Set Up Your Device",
        description: (
          <>
            Enter your credentials into your preferred IPTV player using our universal{" "}
            <Link href="/setup" className="font-semibold text-primary hover:underline">
              IPTV setup guide.
            </Link>
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
          title="How Does TryIPTV Work?"
          subtitle="You don’t need a TryIPTV app. TryIPTV provides the service credentials; you use them with a compatible IPTV player."
          eyebrow="Setup Process"
          className="mb-8 sm:mb-10 max-w-2xl"
        />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-5">
          {steps.map((step, i) => (
            <div
              key={i}
              className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.04] bg-[#050706]/70 p-5.5 sm:p-6 transition-all duration-200 hover:border-white/[0.12] hover:bg-[#07090b]"
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
