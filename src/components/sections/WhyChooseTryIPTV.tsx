import { Tv, Zap, Smartphone, CalendarCheck } from "lucide-react";
import { Container } from "../shared/Container";
import { Section } from "../shared/Section";
import { SectionHeader } from "../shared/SectionHeader";

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
    <Section id="why-tryiptv">
      <Container>
        <SectionHeader
          align="left"
          eyebrow="Why TryIPTV"
          title="Why Viewers Choose TryIPTV"
          subtitle="An IPTV service built around extensive channel coverage, HD & 4K streaming, and transparent prepaid plans."
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div key={benefit.title} className="flex gap-4 rounded-2xl border border-white/[0.07] bg-card p-5 sm:block sm:p-6">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-white/[0.07] bg-white/[0.03] text-primary">
                  <Icon className="size-5" aria-hidden />
                </span>
                <div>
                  <h3 className="font-headline text-lg font-bold tracking-tight text-foreground sm:mt-5">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
