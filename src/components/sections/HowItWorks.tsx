
import { CheckCircle, Package, Tv } from "lucide-react";
import { Container } from "../shared/Container";
import { SectionHeader } from "../shared/SectionHeader";
import { Section } from "../shared/Section";

const steps = [
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
        description: "Enter your credentials into your preferred IPTV player using our step-by-step device guides and start streaming live TV immediately."
    }
]

export function HowItWorks() {
  return (
    <Section id="how-it-works" className="bg-[#07080a]">
      <Container>
        <SectionHeader
          title="Start Watching with TryIPTV in 3 Simple Steps"
          subtitle="Getting started with your IPTV subscription is simple. Follow these straightforward steps to set up and stream across your devices."
          eyebrow="Setup Process"
        />
          <div className="grid grid-cols-1 border-y border-white/[0.1] md:grid-cols-3">
            {steps.map((step, i) => (
                <div key={i} className="relative border-b border-white/[0.09] px-1 py-8 last:border-b-0 md:border-b-0 md:px-8 md:py-11">
                    {i < steps.length - 1 && (
                      <span className="absolute right-0 top-[4.35rem] hidden h-px w-28 translate-x-1/2 bg-gradient-to-r from-white/[0.2] via-primary/40 to-white/[0.2] md:block" />
                    )}
                    <div className="mb-9 flex items-center justify-between">
                      <span className="text-sm font-semibold text-foreground/80">0{i + 1}</span>
                      <span className="grid h-11 w-11 place-items-center rounded-lg border border-white/[0.09] bg-white/[0.035]">
                        <step.icon className="h-5 w-5 text-primary" />
                      </span>
                    </div>
                    <h3 className="mb-3 font-headline text-xl font-semibold leading-7">{step.title}</h3>
                    <p className="text-[15px] leading-7 text-muted-foreground">{step.description}</p>
                </div>
            ))}
          </div>
      </Container>
    </Section>
  );
}
