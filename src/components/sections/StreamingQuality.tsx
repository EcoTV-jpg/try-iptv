import Link from "next/link";
import { Container } from "../shared/Container";
import { Section } from "../shared/Section";
import { SectionHeader } from "../shared/SectionHeader";
import { Wifi, Cpu, Settings, Activity, CirclePlay } from "lucide-react";
import { Button } from "@/components/ui/button";

const factors = [
  {
    icon: Wifi,
    title: "Internet Connection & Wi-Fi",
    desc: "A stable broadband connection is essential. Using a wired Ethernet cable or a 5 GHz Wi-Fi band minimizes packet loss and local latency compared to congested 2.4 GHz Wi-Fi."
  },
  {
    icon: Cpu,
    title: "Device Processing Power",
    desc: "Modern streaming sticks (such as Fire TV 4K, Apple TV 4K, and Nvidia Shield) feature hardware video decoders that handle high-bitrate 60 FPS live sports feeds without frame dropping."
  },
  {
    icon: Settings,
    title: "Player App Configuration",
    desc: "Settings inside your IPTV player—such as buffer size, stream format (HLS vs TS), and decoding type (Hardware vs Software)—significantly influence playback smoothness."
  },
  {
    icon: Activity,
    title: "Original Broadcast Source",
    desc: "Stream resolutions (HD, 1080p, 4K) depend directly on the broadcaster's originating transmission. Feeds are passed through cleanly without artificial upscaling."
  }
];

export function StreamingQuality() {
  return (
    <Section id="streaming-quality" className="border-b border-white/[0.06]">
      <Container>
        <SectionHeader
          eyebrow="Realistic Performance"
          title="Streaming Quality & Factors That Affect Playback"
          subtitle="Honest technical insight into how IPTV streaming works and what you can do to optimize your viewing experience."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {factors.map((factor) => (
            <div 
              key={factor.title} 
              className="rounded-xl border border-white/[0.08] bg-card p-5 transition-colors hover:border-white/20"
            >
              <div className="mb-3.5 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
                <factor.icon className="h-5 w-5" />
              </div>
              <h3 className="font-headline font-bold text-base text-foreground">{factor.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{factor.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-primary/25 bg-[#0a120d] p-6 sm:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="max-w-2xl">
            <h3 className="font-headline text-lg sm:text-xl font-bold text-foreground">
              Why We Offer a 24-Hour Free Trial
            </h3>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
              Because real-world streaming performance depends on your local ISP routing and household network, we encourage every viewer to test our service directly on their own hardware before spending any money.
            </p>
          </div>
          <div className="shrink-0">
            <Button asChild>
              <Link href="/iptv-free-trial">
                <CirclePlay className="mr-2 h-4 w-4" /> Test on Your Device ($0)
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
