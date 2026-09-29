import Link from "next/link";
import { Container } from "../shared/Container";
import { Section } from "../shared/Section";
import { SectionHeader } from "../shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle2, 
  CirclePlay, 
  Clock, 
  Tv, 
  Flame, 
  Trophy, 
  Calendar, 
  Film, 
  MessageCircle 
} from "lucide-react";

const testSteps = [
  {
    icon: Clock,
    title: "1. Test During Peak Evening Hours",
    desc: "Test streams between 7:00 PM and 10:00 PM when neighborhood internet and server loads are heaviest to confirm server stability."
  },
  {
    icon: Tv,
    title: "2. Test on Your Everyday Hardware",
    desc: "Evaluate on the specific TV, Fire TV Stick, Apple TV, or mobile device you actually plan to watch daily, not just a high-powered desktop."
  },
  {
    icon: Flame,
    title: "3. Check Your Primary Channels",
    desc: "Don't just browse random channels. Search for your specific regional networks, news stations, and entertainment favorites to verify availability."
  },
  {
    icon: Trophy,
    title: "4. Stream Live Sports Events",
    desc: "Live sports broadcast feeds carry higher framerates (50/60 FPS). Stream live matches to check motion smoothness and absence of buffering."
  },
  {
    icon: Calendar,
    title: "5. Verify EPG (TV Guide) Schedules",
    desc: "Confirm that the Electronic Program Guide updates accurately and shows current and upcoming programming information for your channels."
  },
  {
    icon: Film,
    title: "6. Check On-Demand (VOD) Playback",
    desc: "Play movie and series titles from the VOD library to test fast-forwarding, rewinding, audio tracks, and subtitle availability."
  },
  {
    icon: MessageCircle,
    title: "7. Gauge Customer Support Responsiveness",
    desc: "Send a quick question to support to verify how quickly and helpfully real agents respond via WhatsApp or email."
  }
];

export function HowToEvaluateIPTV() {
  return (
    <Section id="how-to-evaluate" className="border-b border-white/[0.06] bg-[#070a08]">
      <Container>
        <SectionHeader
          eyebrow="Actionable Buyer Guide"
          title="How to Evaluate an IPTV Service Before Paying"
          subtitle="Use our free 24-hour trial period to run through this practical checklist and verify streaming performance on your own setup."
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {testSteps.slice(0, 6).map((step) => (
            <div 
              key={step.title}
              className="rounded-xl border border-white/[0.07] bg-card p-5 transition-colors hover:border-white/20"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg border border-primary/25 bg-primary/10 text-primary">
                  <step.icon className="h-4 w-4" />
                </span>
                <h3 className="font-headline font-bold text-sm text-foreground">{step.title}</h3>
              </div>
              <p className="text-xs leading-relaxed text-muted-foreground">{step.desc}</p>
            </div>
          ))}

          {/* 7th item spanning full width on last row or styled */}
          <div className="rounded-xl border border-white/[0.07] bg-card p-5 transition-colors hover:border-white/20 sm:col-span-2 lg:col-span-3">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-start sm:items-center gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-primary/25 bg-primary/10 text-primary">
                  <MessageCircle className="h-4 w-4" />
                </span>
                <div>
                  <h3 className="font-headline font-bold text-sm text-foreground">{testSteps[6].title}</h3>
                  <p className="text-xs leading-relaxed text-muted-foreground mt-0.5">{testSteps[6].desc}</p>
                </div>
              </div>
              <div className="shrink-0">
                <Button asChild size="sm">
                  <Link href="/iptv-free-trial">
                    <CirclePlay className="mr-2 h-4 w-4" /> Start 24-Hour Free Trial
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-lg border border-white/[0.08] bg-card/60 p-4 text-center text-xs text-muted-foreground sm:text-sm">
          <span className="font-semibold text-foreground">Zero financial risk:</span> Our 24-hour trial requires no payment details. If the service doesn&apos;t meet your expectations on your hardware, you owe nothing.
        </div>
      </Container>
    </Section>
  );
}
