import { Container } from "../shared/Container";
import { Section } from "../shared/Section";
import { SectionHeader } from "../shared/SectionHeader";
import { 
  Tv, 
  Layers, 
  KeyRound, 
  ShieldCheck, 
  CirclePlay, 
  Cpu, 
  Headphones 
} from "lucide-react";

const criteria = [
  {
    icon: CirclePlay,
    title: "Risk-Free Testing Mechanism",
    desc: "A reliable IPTV provider lets you evaluate picture clarity, channel uptime, and server responsiveness on your own home network before asking for payment."
  },
  {
    icon: Layers,
    title: "Multi-Screen Household Allowance",
    desc: "Quality services provide at least two simultaneous streams standard, allowing family members to watch live sports in one room and movies in another."
  },
  {
    icon: KeyRound,
    title: "Standard Login Formats",
    desc: "Support for both Xtream Codes API (server URL, username, password) and direct M3U playlist URLs guarantees compatibility with any IPTV player."
  },
  {
    icon: Cpu,
    title: "Streaming Infrastructure",
    desc: "High-capacity server networks and adaptive bitrate delivery help maintain stable video feeds during peak evening viewing and major sporting broadcasts."
  },
  {
    icon: ShieldCheck,
    title: "Predictable Prepaid Billing",
    desc: "Fair providers use transparent, one-time prepaid terms with zero long-term lock-in contracts, setup fees, or automatic recurring card charges."
  },
  {
    icon: Headphones,
    title: "Accessible Technical Support",
    desc: "Responsive support via real-time channels (such as WhatsApp and email) ensures quick setup assistance, playlist loading help, and prompt troubleshooting."
  }
];

const tryIptvProof = [
  {
    label: "24-Hour Free Trial",
    text: "Experience full access to all channels, VOD, and EPG schedules with zero credit card required."
  },
  {
    label: "2 Connections Standard",
    text: "Every plan from 1 month to 12 months includes 2 simultaneous device streams for multi-room flexibility."
  },
  {
    label: "Broad Hardware Compatibility",
    text: "Engineered to run seamlessly across Fire TV, Android, Apple TV, Smart TVs, Windows, macOS, and MAG."
  },
  {
    label: "Universal Connection Formats",
    text: "Instant delivery of both Xtream Codes credentials and M3U playlist links compatible with TiviMate and Smarters."
  },
  {
    label: "25K+ Live Channels & 120K+ VOD",
    text: "Comprehensive entertainment, major sports, news, and on-demand movies in HD, Full HD, and available 4K."
  },
  {
    label: "100% Flat Prepaid Terms",
    text: "Subscriptions never auto-renew. You pay once for your chosen duration and decide when to renew."
  }
];

export function WhatMakesAGoodIPTV() {
  return (
    <Section id="selection-criteria" className="border-b border-white/[0.06]">
      <Container>
        {/* Part 1: Educational Criteria */}
        <SectionHeader
          eyebrow="Evaluation Framework"
          title="What Makes a Good IPTV Service?"
          subtitle="Choosing an IPTV provider requires looking past marketing hype. A dependable service comes down to practical technical fundamentals."
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {criteria.map((item) => (
            <div 
              key={item.title} 
              className="rounded-xl border border-white/[0.08] bg-card p-6 transition-colors hover:border-white/20"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="font-headline text-lg font-bold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Part 2: Why TryIPTV Alignment */}
        <div className="mt-14 rounded-2xl border border-primary/25 bg-[#0a120d] p-6 sm:p-10">
          <div className="max-w-2xl">
            <p className="eyebrow mb-2">Verified Delivery</p>
            <h3 className="font-headline text-2xl font-extrabold sm:text-3xl text-foreground">
              Why Viewers Choose TryIPTV
            </h3>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground">
              We designed TryIPTV to satisfy these exact operational standards, giving cord-cutters a transparent, reliable, and flexible streaming alternative to expensive cable packages.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 border-t border-white/[0.08] pt-8">
            {tryIptvProof.map((item) => (
              <div key={item.label} className="rounded-lg border border-white/[0.06] bg-card/60 p-4">
                <p className="font-headline font-bold text-sm text-foreground flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  {item.label}
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
