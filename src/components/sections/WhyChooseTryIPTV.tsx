import { Tv, Zap, Smartphone, CalendarCheck } from "lucide-react";
import { Container } from "../shared/Container";
import { Section } from "../shared/Section";
import { SectionHeader } from "../shared/SectionHeader";
import { FeatureCard } from "../shared/FeatureCard";

const benefits = [
  {
    icon: Tv,
    title: "More to Watch",
    description: "Stream over 24,000 live television channels and an on-demand library with 80,000+ movies and series, including live sports, news, and international broadcasts.",
  },
  {
    icon: Zap,
    title: "Streaming Quality",
    description: "Watch live sports and favorite programming in HD and 4K resolution with full Electronic Program Guide (EPG) listings included on all standard plans.",
  },
  {
    icon: Smartphone,
    title: "Simple Setup",
    description: "Connect in minutes using your preferred IPTV app on Fire TV, Smart TVs, Android, iOS, or PC with standard M3U playlists and Xtream Codes credentials.",
  },
  {
    icon: CalendarCheck,
    title: "Flexible Prepaid Plans",
    description: "Subscribe for 1, 3, 6, or 12 months with flat prepaid pricing. Every plan includes 2 simultaneous device connections, no hidden fees, and no recurring contracts.",
  },
];

export function WhyChooseTryIPTV() {
  return (
    <Section id="why-tryiptv" className="border-b border-white/[0.06]">
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
