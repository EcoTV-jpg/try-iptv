import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import {
  Check,
  Tv,
  Zap,
  ShieldCheck,
  MessageCircle,
  Film,
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  KeyRound,
  FileCode,
  CheckCircle2,
  Wifi,
  Sliders,
  Layers,
  HelpCircle,
  ChevronDown,
  AlertCircle,
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { getIptvFreeTrialPageData } from "@/lib/data/iptv-free-trial-page";
import { Schema } from "@/components/shared/Schema";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";

const freeTrialWhatsAppUrl =
  "https://wa.me/447848197761?text=Hello%20TryIPTV%2C%20I%20would%20like%20to%20start%20my%20free%20IPTV%20trial.";

export function generateMetadata(): Metadata {
  const title = "24-Hour IPTV Free Trial — Test TryIPTV with No Credit Card";
  const description =
    "Get a 24-hour IPTV free trial with zero commitment. Test 24,000+ live channels, 80,000+ VOD movies and series, 4K streams, and 2 connections on your device. No credit card required.";

  return {
    ...generatePageMetadata({
      title,
      description,
      canonical: "/iptv-free-trial",
    }),
    title: {
      absolute: title,
    },
  };
}

const quickFacts = [
  {
    metric: "24 Hours",
    label: "Trial Duration",
    description: "Complete 24-hour evaluation pass from the moment credentials are activated.",
  },
  {
    metric: "$0 Free",
    label: "Zero Cost",
    description: "Complimentary access with no credit card or billing details collected.",
  },
  {
    metric: "2 Screens",
    label: "Simultaneous Streams",
    description: "Stream concurrently on up to two devices within your household.",
  },
  {
    metric: "Live & VOD",
    label: "Service Access",
    description: "24-hour access to test the available live TV and on-demand service.",
  },
];

const trialInclusions = [
  {
    icon: Tv,
    title: "24,000+ Live Channels",
    description:
      "Use the trial to verify specific live channels, regional programming, and sports networks on your own device.",
  },
  {
    icon: Film,
    title: "80,000+ Movies & Series on Demand",
    description:
      "Test on-demand movie and series playback during your 24 hours, including subtitle options and audio tracks where available.",
  },
  {
    icon: Zap,
    title: "HD & 4K Streaming Quality",
    description:
      "Test the picture quality and stream resolution that matter to you (HD, Full HD, and 4K where available on native broadcast feeds).",
  },
  {
    icon: Calendar,
    title: "Smart EPG TV Guide Included",
    description:
      "Check electronic program guide data where available to see how channel timelines and schedule listings populate in your player.",
  },
  {
    icon: KeyRound,
    title: "Xtream Codes API & M3U Link",
    description:
      "Receive both standard IPTV delivery formats: Xtream Codes credentials (Server URL, Username, Password) and an M3U playlist URL for flexible player setup.",
  },
  {
    icon: MessageCircle,
    title: "2 Streams & Technical Assistance",
    description:
      "Stream simultaneously on two devices in your household with technical support available via WhatsApp and email whenever you need setup guidance.",
  },
];

const trialWorkflowSteps = [
  {
    number: "01",
    title: "Request Your Evaluation Pass",
    description:
      "Message our team on WhatsApp with your streaming device and player app. No credit card or billing details are required.",
  },
  {
    number: "02",
    title: "Receive Login Credentials (5–15 Min)",
    description:
      "Trial credentials are typically delivered within 5–15 minutes after confirmation. You receive Xtream Codes API details (server URL, username, password) and an M3U playlist URL.",
  },
  {
    number: "03",
    title: "Configure Your Preferred Player App",
    description:
      "Open your IPTV player (such as TiviMate or IPTV Smarters), select Xtream Codes API or M3U, and enter your details using our step-by-step setup guides.",
  },
  {
    number: "04",
    title: "Evaluate Streams for 24 Hours",
    description:
      "Test channel zapping, live broadcasts during the times you normally watch (including busier periods), VOD titles, and EPG schedules across up to 2 simultaneous devices.",
  },
  {
    number: "05",
    title: "Zero-Pressure Decision or Expiration",
    description:
      "Access closes automatically after 24 hours with no recurring charges. If you decide to continue, support will provide the appropriate paid subscription credentials or renewal instructions.",
  },
];

interface TestingGuideItem {
  number: string;
  title: string;
  description: string;
  linkUrl?: string;
  linkText?: string;
}

const testingGuide: TestingGuideItem[] = [
  {
    number: "01",
    title: "Test on Your Primary Television Screen",
    description:
      "Evaluate TryIPTV on the actual TV or streaming device you plan to use everyday (such as a Firestick, Google TV, or Smart TV), not just on a mobile screen.",
  },
  {
    number: "02",
    title: "Test During Your Normal Viewing Times",
    description:
      "Test during the times you normally watch, including busier periods if that reflects your typical usage, to evaluate stream smoothness and playback stability.",
  },
  {
    number: "03",
    title: "Check Channel Switching & Playback Sync",
    description:
      "Zap through sports networks, news feeds, and live channels to evaluate channel change speed, stream locking, and audio/video synchronization on your player.",
  },
  {
    number: "04",
    title: "Test On-Demand VOD Playback",
    description:
      "Test the on-demand features that matter to you where available, including playback resuming, seeking, and subtitle support across movies or series.",
  },
  {
    number: "05",
    title: "Verify the Electronic Program Guide (EPG)",
    description:
      "Check EPG guide loading where available to confirm program timelines, channel descriptions, and upcoming schedules display as expected.",
  },
  {
    number: "06",
    title: "Verify Connection & Network Stability",
    description:
      "Use a stable internet connection. Ethernet can be useful for testing connection stability when available. Wi-Fi performance depends on signal quality, distance, interference, and device capabilities. For troubleshooting steps, see our",
    linkUrl: "/help/iptv-buffering",
    linkText: "IPTV buffering guide",
  },
];

const supportedDeviceCategories = [
  {
    name: "Amazon Fire TV & Fire Stick",
    apps: "TiviMate, IPTV Smarters, Downloader",
    guideUrl: "/devices/firestick-iptv",
  },
  {
    name: "Android TV & Google TV",
    apps: "TiviMate, IPTV Smarters, XCIPTV",
    guideUrl: "/devices/android-tv-iptv",
  },
  {
    name: "Apple TV, iPhone & iPad",
    apps: "Smarters Player Lite, GSE Smart IPTV",
    guideUrl: "/devices/apple-tv-iptv",
  },
  {
    name: "Samsung Smart TVs (Tizen)",
    apps: "IPTV Smarters, IBO Player",
    guideUrl: "/devices/samsung-tv-iptv",
  },
  {
    name: "LG Smart TVs (webOS)",
    apps: "IPTV Smarters, Smart IPTV",
    guideUrl: "/devices/lg-tv-iptv",
  },
  {
    name: "Windows PC & Laptops",
    apps: "IPTV Smarters, VLC Media Player",
    guideUrl: "/devices/windows-iptv",
  },
  {
    name: "Apple Mac (macOS)",
    apps: "VLC, IPTV Smarters for Mac",
    guideUrl: "/devices/mac-iptv",
  },
  {
    name: "MAG & Set-Top Boxes",
    apps: "Stalker Portal, Ministra",
    guideUrl: "/devices/mag-box-iptv",
  },
];

export default async function IptvFreeTrialPage() {
  const { breadcrumbSchema, serviceSchema, trialFaqs } =
    await getIptvFreeTrialPageData();

  return (
    <>
      <Schema id="breadcrumb" schema={breadcrumbSchema} />
      <Schema id="service" schema={serviceSchema} />

      {/* 1. Hero Section */}
      <Section className="relative overflow-hidden border-b border-white/[0.07] pt-12 pb-14 sm:pt-16 sm:pb-20">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
        <Container className="relative flex flex-col items-center justify-center">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <Breadcrumb items={[{ label: "IPTV Free Trial" }]} align="center" />
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/[0.06] px-3.5 py-1.5 text-xs font-extrabold text-primary">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              24-Hour Evaluation Pass • Zero Commitment
            </div>
            <h1 className="font-headline text-3xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl max-w-4xl mx-auto text-foreground">
              24-Hour IPTV Free Trial: Test TryIPTV with No Credit Card
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Test TryIPTV on your own device before choosing a paid plan. The stated trial offer is 24 hours at $0 with no credit card required. Use it to check the channels and viewing quality that matter to you.
            </p>
            <div className="mx-auto mt-6 max-w-2xl rounded-lg border border-primary/20 bg-primary/[0.04] p-4 text-left sm:p-5">
              <h2 className="font-headline text-xs font-bold uppercase tracking-wider text-primary">
                Quick Answer
              </h2>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                <strong className="text-foreground">Quick Answer:</strong> When you request the TryIPTV free trial, support provides Xtream Codes API credentials (Server URL, Username, Password) and an M3U playlist link—typically delivered within 5–15 minutes via WhatsApp. The trial provides 24-hour access to test the available live TV and on-demand service across up to 2 simultaneous screens with zero credit card required and no automatic renewal.
              </p>
              <p className="mt-2.5 border-t border-white/[0.06] pt-2.5 text-xs leading-relaxed text-muted-foreground">
                <strong className="text-foreground">Evaluation Notice:</strong> This is a temporary 24-hour evaluation pass to test stream quality, device compatibility, and channel availability before deciding whether to purchase a prepaid plan.
              </p>
            </div>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg">
                <a href={freeTrialWhatsAppUrl} target="_blank" rel="noopener noreferrer">
                  <SiWhatsapp className="mr-2 h-4 w-4" />
                  Start Free Trial on WhatsApp
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/pricing">See Plans &amp; Pricing</Link>
              </Button>
            </div>
            <p className="mt-4 text-xs font-semibold text-muted-foreground">
              $0 trial offer • No credit card required • Estimated credential delivery: 5–15 minutes after confirmation
            </p>
            <div className="mt-8 w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-[#07080a] p-2 shadow-[0_0_40px_rgba(0,240,120,0.06),inset_0_1px_0_rgba(255,255,255,0.04)] sm:mt-10 sm:p-2.5">
              <div className="relative overflow-hidden rounded-xl bg-black/40">
                <Image
                  src="/iptv-free-trial.png"
                  alt="TryIPTV 24-hour free trial displayed on a smart TV"
                  width={1672}
                  height={941}
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 768px, 768px"
                  className="h-[260px] w-full object-cover sm:h-[320px] md:h-[360px]"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 2. Quick Trial Facts */}
      <Section className="border-b border-white/[0.06] bg-[#070a08] py-6 sm:py-7">
        <Container>
          <h2 className="sr-only">Key Free Trial Details</h2>
          <div className="rounded-lg border border-white/[0.08] bg-card/60 p-4 sm:p-5">
            <div className="grid grid-cols-2 gap-4 divide-y-0 sm:grid-cols-4 sm:divide-x sm:divide-white/[0.08]">
              {quickFacts.map((fact, index) => (
                <div
                  key={fact.label}
                  className={`text-center ${index > 0 ? "sm:pl-4" : ""} ${index < quickFacts.length - 1 ? "sm:pr-4" : ""}`}
                >
                  <span className="font-headline text-2xl font-extrabold text-foreground sm:text-3xl">
                    {fact.metric}
                  </span>
                  <h3 className="mt-0.5 font-headline text-xs font-extrabold uppercase tracking-wider text-primary">
                    {fact.label}
                  </h3>
                  <p className="mt-1 text-[11px] leading-4 text-muted-foreground sm:text-xs sm:leading-5">
                    {fact.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. What the Free Trial Includes */}
      <Section>
        <Container>
          <SectionHeader
            eyebrow="Trial Inclusions"
            title="What the 24-Hour Free Trial Includes"
            subtitle="Use the 24-hour trial to check the channels, on-demand titles, and playback quality that matter to you."
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {trialInclusions.map((feature, index) => (
              <div
                key={index}
                className="rounded-lg border border-white/[0.09] bg-card p-6 shadow-[0_18px_60px_rgba(0,0,0,0.2)] transition-all duration-200 hover:-translate-y-0.5 hover:border-white/20"
              >
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-md border border-primary/20 bg-primary/[0.06] text-primary">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="font-headline text-lg font-extrabold leading-6 text-foreground">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* What You Need to Start Your Free Trial */}
      <Section className="border-t border-white/[0.06]">
        <Container>
          <SectionHeader
            eyebrow="Prerequisites"
            title="What You Need Before Requesting Your Trial"
            subtitle="Having your device and IPTV player app ready before requesting ensures you maximize your 24-hour evaluation window."
          />
          <div className="mx-auto max-w-3xl rounded-lg border border-white/[0.09] bg-card p-6 shadow-[0_18px_60px_rgba(0,0,0,0.2)]">
            <ul className="space-y-3.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                <span>
                  <strong className="text-foreground">Your streaming hardware:</strong> A supported device such as an Amazon Firestick, Android TV / Google TV box, Apple TV, Smart TV (Samsung Tizen or LG webOS), Windows PC, or Mac.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                <span>
                  <strong className="text-foreground">An IPTV player app installed:</strong> Installing your preferred player app (such as TiviMate, IPTV Smarters, or XCIPTV) beforehand ensures your 24 hours are spent evaluating content rather than downloading apps.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                <span>
                  <strong className="text-foreground">Use a stable internet connection:</strong> Ethernet can be useful for testing connection stability when available. Wi-Fi performance depends on signal quality, distance, interference, and device capabilities. See our{" "}
                  <Link href="/guides/iptv-internet-speed" className="text-primary font-semibold underline underline-offset-4">
                    IPTV internet speed guide
                  </Link>{" "}
                  for detailed bandwidth guidance.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                <span>
                  <strong className="text-foreground">Zero payment details needed:</strong> No credit card, bank details, or deposits are required. The trial request opens WhatsApp directly with support.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                <span>
                  <strong className="text-foreground">Device identifier (only if using MAG or portal):</strong> If you use a MAG set-top box or portal-based app that authorizes by hardware MAC address, have that address handy when messaging support.
                </span>
              </li>
            </ul>
          </div>
        </Container>
      </Section>

      {/* 4. How the Trial Works (5-Step Trial Workflow) */}
      <Section variant="alt" className="border-y border-white/[0.06] bg-[#070a08]">
        <Container>
          <SectionHeader
            eyebrow="5-Step Trial Process"
            title="What Exactly Happens When You Request the Free Trial"
            subtitle="Follow the step-by-step workflow from initial WhatsApp request to credential delivery, testing, and your final decision."
          />
          <div className="grid grid-cols-1 border-y border-white/[0.09] md:grid-cols-5 md:divide-x md:divide-white/[0.09]">
            {trialWorkflowSteps.map((step) => (
              <div
                key={step.number}
                className="relative border-b border-white/[0.09] px-5 py-7 last:border-b-0 md:border-b-0 md:px-5 md:py-8"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-xs font-extrabold text-muted-foreground">{step.number}</span>
                  <span className="grid h-10 w-10 place-items-center rounded-md border border-primary/20 bg-primary/[0.06] text-primary font-extrabold text-sm">
                    {step.number}
                  </span>
                </div>
                <h3 className="mb-2 font-headline text-lg font-extrabold leading-snug text-foreground">
                  {step.title}
                </h3>
                <p className="text-xs leading-5 text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Practical Connection Guidance & Troubleshooting */}
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="rounded-lg border border-white/[0.09] bg-card p-5">
              <div className="mb-3 flex items-center gap-2">
                <AlertCircle className="h-4 w-4 text-primary" />
                <h3 className="font-headline text-sm font-extrabold uppercase tracking-wider text-foreground">
                  If Credentials Do Not Connect Immediately
                </h3>
              </div>
              <ul className="space-y-2 text-xs leading-relaxed text-muted-foreground">
                <li>
                  <strong className="text-foreground">Case sensitivity:</strong> Xtream Codes usernames and passwords are case-sensitive. Check for accidental capital letters or trailing spaces copied from clipboard.
                </li>
                <li>
                  <strong className="text-foreground">Server URL protocol:</strong> Enter the exact server URL protocol (<code className="rounded bg-white/[0.06] px-1 py-0.5 text-foreground">http://</code> or <code className="rounded bg-white/[0.06] px-1 py-0.5 text-foreground">https://</code>) and port number provided by support.
                </li>
                <li>
                  <strong className="text-foreground">Force playlist refresh:</strong> In your IPTV player settings, select &quot;Update Playlist&quot; or &quot;Reload EPG&quot; to fetch the latest channel manifest.
                </li>
                <li>
                  <strong className="text-foreground">Immediate support check:</strong> If an authorization or timeout error persists, reply to the WhatsApp dispatch message for a rapid line re-check.
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-white/[0.09] bg-card p-5">
              <div className="mb-3 flex items-center gap-2">
                <KeyRound className="h-4 w-4 text-primary" />
                <h3 className="font-headline text-sm font-extrabold uppercase tracking-wider text-foreground">
                  Setup Guides &amp; Supported Formats
                </h3>
              </div>
              <p className="text-xs leading-relaxed text-muted-foreground">
                Your trial dispatch includes both Xtream Codes API parameters and a standard M3U playlist URL. For step-by-step player installation and credential entry walkthroughs:
              </p>
              <div className="mt-3.5 flex flex-col gap-2 text-xs font-semibold">
                <Link href="/setup" className="inline-flex items-center gap-1.5 text-primary hover:underline">
                  <span>Universal IPTV Setup Walkthrough</span> <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link href="/players" className="inline-flex items-center gap-1.5 text-primary hover:underline">
                  <span>Compare Top IPTV Player Applications</span> <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link href="/help/iptv-buffering" className="inline-flex items-center gap-1.5 text-primary hover:underline">
                  <span>Buffering &amp; Network Diagnostic Guide</span> <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 5. How to Test the IPTV Trial Properly (Practical Evaluation Guide) */}
      <Section>
        <Container>
          <SectionHeader
            eyebrow="Practical Evaluation Guide"
            title="How to Test Your IPTV Trial Properly"
            subtitle="Evaluate TryIPTV under real-world viewing conditions to confirm stream stability, channel quality, and device compatibility before spending anything."
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {testingGuide.map((item) => (
              <div
                key={item.number}
                className="relative rounded-lg border border-white/[0.09] bg-card p-6 shadow-[0_18px_60px_rgba(0,0,0,0.2)]"
              >
                <span className="mb-3 inline-block font-mono text-xs font-extrabold text-primary">
                  TEST {item.number}
                </span>
                <h3 className="font-headline text-lg font-extrabold leading-6 text-foreground">{item.title}</h3>
                <p className="mt-2 text-xs leading-5 text-muted-foreground">
                  {item.description}
                  {item.linkUrl && item.linkText && (
                    <>
                      {" "}
                      <Link
                        href={item.linkUrl}
                        className="font-semibold text-primary underline underline-offset-4 hover:text-primary/80"
                      >
                        {item.linkText}
                      </Link>
                      .
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 6. Compatible Devices & Player Applications */}
      <Section variant="alt" className="border-t border-white/[0.06] bg-[#070a08]">
        <Container>
          <SectionHeader
            eyebrow="Device Compatibility"
            title="Compatible Devices &amp; Player Applications"
            subtitle="Browse our device and player setup guides, then use the trial to check your own configuration."
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {supportedDeviceCategories.map((device) => (
              <Link
                key={device.name}
                href={device.guideUrl}
                className="group rounded-lg border border-white/[0.09] bg-card p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-[#0c1410]"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-headline text-base font-extrabold text-foreground group-hover:text-primary transition-colors">
                    {device.name}
                  </h3>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                </div>
                <p className="text-xs text-muted-foreground leading-5">Apps: {device.apps}</p>
              </Link>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-center text-xs sm:text-sm">
            <Link href="/devices" className="font-semibold text-primary hover:underline inline-flex items-center gap-1.5">
              <span>Explore all device guides</span> <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/players" className="font-semibold text-primary hover:underline inline-flex items-center gap-1.5">
              <span>Compare IPTV player apps (TiviMate, Smarters, etc.)</span> <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/setup" className="font-semibold text-primary hover:underline inline-flex items-center gap-1.5">
              <span>Universal IPTV setup walkthrough</span> <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </Section>

      {/* 7. Free Trial vs. Paid Subscription & Post-Trial Reality */}
      <Section variant="alt" className="border-t border-white/[0.06] bg-[#070a08]">
        <Container>
          <SectionHeader
            eyebrow="Evaluation vs Subscription"
            title="Free Trial vs. Paid Subscription"
            subtitle="The trial is a strictly non-recurring 24-hour evaluation pass. You decide whether to purchase a prepaid subscription afterward."
          />

          {/* Concise Post-Trial Policy Block */}
          <div className="mx-auto mb-8 max-w-3xl rounded-lg border border-white/[0.08] bg-card/60 p-4 sm:p-5 shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-3 sm:divide-x sm:divide-white/[0.08]">
              <div className="sm:pr-4">
                <div className="mb-1 flex items-center gap-2 text-foreground font-semibold text-xs sm:text-sm">
                  <Clock className="h-4 w-4 text-primary shrink-0" />
                  <span>Automatic Expiry</span>
                </div>
                <p className="text-[11px] leading-relaxed text-muted-foreground sm:text-xs">
                  Access closes automatically after 24 hours. With no credit card collected, there are zero recurring charges or cancellation steps.
                </p>
              </div>

              <div className="sm:px-4">
                <div className="mb-1 flex items-center gap-2 text-foreground font-semibold text-xs sm:text-sm">
                  <ShieldCheck className="h-4 w-4 text-primary shrink-0" />
                  <span>100% Optional</span>
                </div>
                <p className="text-[11px] leading-relaxed text-muted-foreground sm:text-xs">
                  Subscribing is entirely your choice. Plans start at $16 for 1 month down to $7.50/mo equivalent on the 12-month tier.
                </p>
              </div>

              <div className="sm:pl-4">
                <div className="mb-1 flex items-center gap-2 text-foreground font-semibold text-xs sm:text-sm">
                  <Layers className="h-4 w-4 text-primary shrink-0" />
                  <span>Renewal Setup</span>
                </div>
                <p className="text-[11px] leading-relaxed text-muted-foreground sm:text-xs">
                  If you decide to continue, support will provide the appropriate paid subscription credentials or renewal instructions.
                </p>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto rounded-lg border border-white/[0.09] bg-card max-w-3xl mx-auto shadow-[0_18px_60px_rgba(0,0,0,0.2)]">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-white/[0.09] bg-white/[0.02] text-xs font-extrabold uppercase text-muted-foreground">
                <tr>
                  <th className="py-3.5 px-6">Aspect</th>
                  <th className="py-3.5 px-6 text-primary">24-Hour Free Trial</th>
                  <th className="py-3.5 px-6 text-foreground">Paid Subscription</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06] text-muted-foreground text-xs sm:text-sm">
                <tr>
                  <td className="py-3 px-6 font-semibold text-foreground">Primary Purpose</td>
                  <td className="py-3 px-6 text-primary font-medium">Evaluate streams &amp; device compatibility</td>
                  <td className="py-3 px-6 text-foreground">Continuous everyday television viewing</td>
                </tr>
                <tr>
                  <td className="py-3 px-6 font-semibold text-foreground">Upfront Cost</td>
                  <td className="py-3 px-6 text-primary font-bold">$0 (Free)</td>
                  <td className="py-3 px-6 text-foreground">From $16/mo (or $7.50/mo eq on 12-mo)</td>
                </tr>
                <tr>
                  <td className="py-3 px-6 font-semibold text-foreground">Payment Required</td>
                  <td className="py-3 px-6">None ($0 request via WhatsApp)</td>
                  <td className="py-3 px-6">One-time prepaid checkout (no auto-charges)</td>
                </tr>
                <tr>
                  <td className="py-3 px-6 font-semibold text-foreground">Duration</td>
                  <td className="py-3 px-6">24 Hours</td>
                  <td className="py-3 px-6">1, 3, 6, or 12 Months</td>
                </tr>
                <tr>
                  <td className="py-3 px-6 font-semibold text-foreground">Channels &amp; VOD</td>
                  <td className="py-3 px-6">Available live TV &amp; on-demand library</td>
                  <td className="py-3 px-6">Full ongoing service catalog</td>
                </tr>
                <tr>
                  <td className="py-3 px-6 font-semibold text-foreground">Simultaneous Streams</td>
                  <td className="py-3 px-6">2 Connections</td>
                  <td className="py-3 px-6">2 Connections Included</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6 text-center text-xs text-muted-foreground">
            For a full breakdown of monthly savings, plan choices, and payment details, visit our{" "}
            <Link href="/pricing" className="text-primary font-semibold underline underline-offset-4">
              pricing page
            </Link>
            .
          </div>
        </Container>
      </Section>

      {/* 9. Trial-Specific FAQ */}
      <Section id="faq" className="border-t border-white/[0.06]">
        <Container>
          <SectionHeader
            eyebrow="Questions &amp; Answers"
            title="Frequently Asked Questions About the 24-Hour Free Trial"
            subtitle="Direct answers to common questions about trial setup, credential delivery, compatibility, and expiration."
          />
          <div className="mx-auto max-w-[880px] overflow-hidden rounded-[18px] border border-white/[0.08] bg-[#07080a] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
            {trialFaqs.map((faq, index) => (
              <details
                key={index}
                className="group border-b border-white/[0.07] px-6 sm:px-8 last:border-b-0"
              >
                <summary className="flex min-h-[68px] cursor-pointer list-none items-center justify-between gap-4 py-5 sm:py-6 text-left text-[16px] font-semibold leading-snug text-foreground/90 hover:text-foreground transition-colors sm:text-[17px] [&::-webkit-details-marker]:hidden">
                  <span>{faq.question}</span>
                  <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <div className="pb-6 sm:pb-8 pr-4 sm:pr-8 text-[15px] sm:text-[16px] leading-relaxed text-muted-foreground">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="text-sm text-muted-foreground sm:text-base">
              Have a question not listed here?{" "}
              <Link href="/contact-us" className="font-semibold text-primary underline underline-offset-4 hover:text-primary/80">
                Contact our 24/7 support team
              </Link>
              . Available via WhatsApp and email.
            </p>
          </div>
        </Container>
      </Section>

      {/* 10. Final Call to Action */}
      <Section className="border-t border-white/[0.06] bg-[#070a08]">
        <Container>
          <div className="relative overflow-hidden rounded-lg border border-primary/25 bg-[#0b100d] p-7 sm:p-8 md:p-10 lg:flex lg:items-center lg:justify-between lg:text-left">
            <div className="absolute inset-y-0 left-0 w-1 bg-primary" />
            <div className="max-w-2xl">
              <p className="eyebrow mb-3 flex items-center justify-center gap-2 lg:justify-start">
                <Sparkles className="h-4 w-4 text-primary" /> Test Before You Buy
              </p>
              <h2 className="font-headline text-3xl font-extrabold leading-[1.12] sm:text-4xl text-foreground">
                Start Your 24-Hour IPTV Free Trial Today
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted-foreground lg:mx-0">
                Use the 24-hour trial to check live channels, sports, and on-demand viewing on your own TV before choosing a paid plan.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:ml-10 lg:mt-0 lg:shrink-0">
              <Button asChild size="lg">
                <a href={freeTrialWhatsAppUrl} target="_blank" rel="noopener noreferrer">
                  <SiWhatsapp className="mr-2 h-4 w-4" /> Start Free Trial on WhatsApp
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/pricing">See Plans &amp; Pricing</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
