import { Tv, Zap, Smartphone, CalendarCheck } from "lucide-react";
import { Container } from "../shared/Container";
import { Section } from "../shared/Section";
import { SectionHeader } from "../shared/SectionHeader";
import { FeatureCard } from "../shared/FeatureCard";

const benefits = [
  {
    icon: Tv,
    title: "24,000+ Live Channels",
    description: "Stream live sports, international networks, news channels, and major PPV events with complete EPG TV guide listings included.",
  },
  {
    icon: Zap,
    title: "80,000+ Movies & Series",
    description: "Access an expansive on-demand VOD library in HD and 4K resolution where available from broadcast sources, with zero rental fees.",
  },
  {
    icon: Smartphone,
    title: "Broad Device Support",
    description: "Stream across your preferred hardware: Amazon Fire TV, Android, Apple TV, Smart TVs, Windows, macOS, and MAG boxes.",
  },
  {
    icon: CalendarCheck,
    title: "2 Streams & Prepaid Plans",
    description: "Plans start at $16 for one month. Every package includes 2 simultaneous device connections, no contracts, and no auto-renewals.",
  },
];

export function WhyChooseTryIPTV() {
  return (
    <Section id="why-tryiptv">
      <Container>
        <SectionHeader
          eyebrow="Why TryIPTV"
          title="Why Viewers Choose TryIPTV"
          subtitle="An IPTV service built around extensive channel coverage, HD & 4K streaming, and transparent prepaid plans."
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, i) => (
            <FeatureCard
              key={i}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
