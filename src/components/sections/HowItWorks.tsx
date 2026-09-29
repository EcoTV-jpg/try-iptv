import { Package, Mail, KeyRound, Tv } from "lucide-react";
import { Container } from "../shared/Container";
import { SectionHeader } from "../shared/SectionHeader";
import { Section } from "../shared/Section";

const steps = [
  {
    icon: Package,
    number: "01",
    title: "1. Start Trial or Choose Plan",
    description: "Request a 24-hour free trial with zero payment details, or select a prepaid subscription (1, 3, 6, or 12 months) that fits your household."
  },
  {
    icon: Mail,
    number: "02",
    title: "2. Receive Credentials via Email",
    description: "Your login details—including your Xtream Codes API credentials, M3U playlist URL, and EPG links—are sent directly to your inbox within minutes."
  },
  {
    icon: KeyRound,
    number: "03",
    title: "3. Connect to an IPTV Player",
    description: "Install your preferred player app (such as TiviMate, IPTV Smarters, or XCIPTV) on your TV or mobile device and enter your TryIPTV details."
  },
  {
    icon: Tv,
    number: "04",
    title: "4. Start Streaming",
    description: "Channels and TV guide listings synchronize automatically. Enjoy live broadcast television, sports networks, and on-demand movies immediately."
  }
];

export function HowItWorks() {
  return (
    <Section id="how-it-works" className="border-b border-white/[0.06] bg-[#070a08]">
      <Container>
        <SectionHeader
          title="How TryIPTV Works in 4 Simple Steps"
          subtitle="A clear, operational setup process designed to get you streaming on your preferred hardware without technical friction."
          eyebrow="Simple Setup"
        />
        <div className="grid grid-cols-1 border-y border-white/[0.09] sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-white/[0.09]">
          {steps.map((step) => (
            <div key={step.number} className="relative border-b border-white/[0.09] p-6 last:border-b-0 sm:border-b-0 sm:p-7">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-xs font-extrabold text-muted-foreground">{step.number}</span>
                <span className="grid h-10 w-10 place-items-center rounded-md border border-primary/20 bg-primary/[0.06] text-primary">
                  <step.icon className="h-5 w-5" />
                </span>
              </div>
              <h3 className="mb-2.5 font-headline text-base font-extrabold leading-6 text-foreground">{step.title}</h3>
              <p className="text-xs leading-relaxed text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
