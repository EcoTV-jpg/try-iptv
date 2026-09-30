
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
    <Section id="how-it-works" className="border-y border-white/[0.06] bg-[#070a08]">
      <Container>
        <SectionHeader
          title="Start Watching with TryIPTV in 3 Simple Steps"
          subtitle="Getting started with your IPTV subscription is simple. Follow these straightforward steps to set up and stream across your devices."
          eyebrow="Setup Process"
        />
          <div className="grid grid-cols-1 border-y border-white/[0.09] md:grid-cols-3 md:divide-x md:divide-white/[0.09]">
            {steps.map((step, i) => (
                <div key={i} className="relative border-b border-white/[0.09] px-6 py-8 last:border-b-0 md:border-b-0 md:px-8 md:py-9">
                    {i < steps.length - 1 && (
                      <span className="absolute right-0 top-[3.75rem] hidden h-px w-12 translate-x-1/2 bg-primary/30 md:block" />
                    )}
                    <div className="mb-8 flex items-center justify-between">
                      <span className="text-xs font-extrabold text-muted-foreground">0{i + 1}</span>
                      <span className="grid h-11 w-11 place-items-center rounded-md border border-primary/20 bg-primary/[0.06]">
                        <step.icon className="h-5 w-5 text-primary" />
                      </span>
                    </div>
                    <h3 className="mb-3 font-headline text-xl font-extrabold leading-7">{step.title}</h3>
                    <p className="text-sm leading-6 text-muted-foreground">{step.description}</p>
                </div>
            ))}
          </div>
      </Container>
    </Section>
  );
}
