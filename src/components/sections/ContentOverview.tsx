import { Container } from "../shared/Container";
import { Section } from "../shared/Section";
import { SectionHeader } from "../shared/SectionHeader";
import { Tv, Trophy, Film, Sparkles, Globe } from "lucide-react";

const categories = [
  {
    icon: Tv,
    title: "Live Television",
    badge: "25,000+ Channels",
    desc: "National broadcasts, regional network feeds, 24/7 news channels, documentary networks, and family entertainment with real-time EPG listings."
  },
  {
    icon: Trophy,
    title: "Live Sports & PPV",
    badge: "Major Events",
    desc: "Premier football tournaments, basketball, American football, baseball, hockey, motorsport, tennis, plus championship boxing and MMA pay-per-views."
  },
  {
    icon: Film,
    title: "On-Demand Movies",
    badge: "Cinema Catalog",
    desc: "New theatrical releases, Hollywood classics, independent cinema, and foreign films available on demand in HD, 1080p Full HD, and available 4K."
  },
  {
    icon: Sparkles,
    title: "Television Series",
    badge: "Full Seasons",
    desc: "Binge-worthy drama, comedy, crime series, and documentaries with complete season archives organized by episode with multiple audio and subtitle options."
  },
  {
    icon: Globe,
    title: "International Content",
    badge: "Worldwide Coverage",
    desc: "Extensive regional feeds covering the United States, United Kingdom, Canada, European nations, Latin America, Arabic networks, and Asian channels."
  }
];

export function ContentOverview() {
  return (
    <Section id="content-overview" className="border-b border-white/[0.06]">
      <Container>
        <SectionHeader
          eyebrow="Extensive Catalog"
          title="What You Can Watch with TryIPTV"
          subtitle="One organized subscription giving your entire household access to global television, live sports, and an on-demand library."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, idx) => (
            <div 
              key={cat.title} 
              className={`rounded-xl border border-white/[0.08] bg-card p-6 transition-colors hover:border-white/20 ${idx === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="grid h-10 w-10 place-items-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
                  <cat.icon className="h-5 w-5" />
                </div>
                <span className="rounded-full border border-white/[0.09] bg-white/[0.03] px-2.5 py-0.5 text-[11px] font-semibold text-muted-foreground">
                  {cat.badge}
                </span>
              </div>
              <h3 className="font-headline text-lg font-bold text-foreground">{cat.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{cat.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
