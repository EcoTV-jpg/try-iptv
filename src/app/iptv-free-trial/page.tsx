import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { FaqList } from "@/components/sections/FAQ";
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
    description: "Begins the moment your login credentials are delivered and activated.",
  },
  {
    metric: "$0 Free",
    label: "Zero Cost",
    description: "No credit card, banking, or billing details are ever requested.",
  },
  {
    metric: "2 Screens",
    label: "Simultaneous Streams",
    description: "Stream across two devices at the same time in your household.",
  },
  {
    metric: "100% Open",
    label: "Full Catalog Access",
    description: "All 24,000+ live channels and 80,000+ VOD titles are fully unlocked.",
  },
];

const trialInclusions = [
  {
    icon: Tv,
    title: "24,000+ Live Channels Worldwide",
    description:
      "Access live sports, international feeds, national news networks, and regional channels across USA, UK, Canada, and global broadcast regions.",
  },
  {
    icon: Film,
    title: "80,000+ Movies & Series on Demand",
    description:
      "The complete on-demand VOD library is fully unlocked during your 24 hours, exactly as paying subscribers see it.",
  },
  {
    icon: Zap,
    title: "HD & 4K Ultra HD Streaming Quality",
    description:
      "Streams play at native broadcast resolution (HD, Full HD, and 4K where available) so you can evaluate picture clarity and stability.",
  },
  {
    icon: Calendar,
    title: "Smart EPG TV Guide Included",
    description:
      "Electronic Program Guide schedule listings are active so you can verify that channel timelines accurately match live broadcast schedules.",
  },
  {
    icon: KeyRound,
    title: "Xtream Codes API & M3U Link",
    description:
      "Receive both connection formats: Xtream Codes login for dedicated IPTV player apps and M3U playlist URLs for universal media players.",
  },
  {
    icon: MessageCircle,
    title: "2 Streams & 24/7 Setup Assistance",
    description:
      "Stream simultaneously on two devices with technical assistance available via WhatsApp and email whenever you need setup guidance.",
  },
];

const trialWorkflowSteps = [
  {
    number: "01",
    title: "Request Your Free Trial",
    description:
      "Send a message via WhatsApp or email with your preferred device type. We do not ask for credit card numbers, billing addresses, or payment details.",
  },
  {
    number: "02",
    title: "Receive Credentials in 5–15 Minutes",
    description:
      "Our support team activates your trial line and provides your unique Xtream Codes credentials (server URL, username, password) and M3U playlist URL.",
  },
  {
    number: "03",
    title: "Add Credentials to Your Device / Player",
    description:
      "Enter your login details into any compatible IPTV player on your TV, streaming stick, phone, or computer using our step-by-step setup guides.",
  },
  {
    number: "04",
    title: "Test Streaming & Features for 24 Hours",
    description:
      "Watch live sports, test channel zapping speed, browse the EPG TV guide, and stream on-demand movies on your home network during peak hours.",
  },
  {
    number: "05",
    title: "Decide Whether to Subscribe",
    description:
      "When your 24 hours finish, stream access simply stops with zero auto-billing. If satisfied, manually pick a prepaid plan on our pricing page.",
  },
];

const testingGuide = [
  {
    number: "01",
    title: "Test on Your Primary Television Screen",
    description:
      "Evaluate TryIPTV on the actual TV or streaming device you plan to use everyday (such as a Firestick, Google TV, or Smart TV), not just on a mobile screen.",
  },
  {
    number: "02",
    title: "Stream During Peak Hours (7–11 PM)",
    description:
      "Test live television during busy residential evening hours when ISP network congestion peaks to confirm stream smoothness and server stability.",
  },
  {
    number: "03",
    title: "Check Channel Switching & Zapping Speed",
    description:
      "Zap through sports networks, news feeds, and international channels to evaluate how quickly streams buffer and lock on your player.",
  },
  {
    number: "04",
    title: "Test On-Demand VOD Playback",
    description:
      "Play movies and multi-episode series in the VOD library to test fast-forwarding, resuming playback, and subtitle rendering.",
  },
  {
    number: "05",
    title: "Verify Audio & Video Synchronization",
    description:
      "Check live sports commentary, high-framerate broadcasts, and news feeds to ensure audio and video remain in tight synchronization.",
  },
  {
    number: "06",
    title: "Verify the Electronic Program Guide (EPG)",
    description:
      "Confirm that program timelines, current show descriptions, and channel listings load correctly in your IPTV player's EPG grid.",
  },
  {
    number: "07",
    title: "Check Internet & Wi-Fi Quality First",
    description:
      "Confirm a stable 15–30+ Mbps download speed and use 5GHz Wi-Fi or Ethernet before assuming stream issues, as local packet loss causes buffering.",
  },
];

const supportedDeviceCategories = [
  {
    name: "Amazon Fire TV & Fire Stick",
    apps: "TiviMate, IPTV Smarters Pro, Downloader",
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
    apps: "IPTV Smarters Pro, IBO Player",
    guideUrl: "/devices/samsung-tv-iptv",
  },
  {
    name: "LG Smart TVs (webOS)",
    apps: "IPTV Smarters, Smart IPTV",
    guideUrl: "/devices/lg-tv-iptv",
  },
  {
    name: "Windows PC & Laptops",
    apps: "IPTV Smarters Pro, VLC Media Player",
    guideUrl: "/devices/windows-iptv",
  },
  {
    name: "Apple Mac (macOS)",
    apps: "VLC, IPTV Smarters Pro for Mac",
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
        <Container className="relative text-center">
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
            Test TryIPTV on your own devices before spending a dollar. Our 24-hour free trial unlocks 24,000+ live channels, 80,000+ movies and series, 4K picture quality, and 2 simultaneous connections. No credit card required, zero contracts, and no automatic rebilling.
          </p>
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
            $0 Cost • No credit card required • Fast activation within 5–15 minutes • Never automatically renewed
          </p>
        </Container>
      </Section>

      {/* 2. Quick Trial Facts */}
      <Section className="border-b border-white/[0.06] bg-[#070a08] py-10">
        <Container>
          <h2 className="sr-only">Key Free Trial Details</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {quickFacts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-lg border border-white/[0.09] bg-card p-5 text-center shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
              >
                <span className="font-headline text-3xl font-extrabold text-foreground">{fact.metric}</span>
                <h3 className="mt-1 font-headline text-sm font-extrabold text-primary uppercase tracking-wider">
                  {fact.label}
                </h3>
                <p className="mt-1.5 text-xs leading-5 text-muted-foreground">{fact.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 3. What the Free Trial Includes */}
      <Section>
        <Container>
          <SectionHeader
            eyebrow="Trial Inclusions"
            title="What the 24-Hour Free Trial Includes"
            subtitle="Everything available to our paying subscribers is fully unlocked during your 24 hours. Nothing is behind a paywall and stream bitrates are never restricted."
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

      {/* 4. How the Trial Works (5-Step Trial Workflow) */}
      <Section variant="alt" className="border-y border-white/[0.06] bg-[#070a08]">
        <Container>
          <SectionHeader
            eyebrow="5-Step Trial Process"
            title="How the IPTV Free Trial Works"
            subtitle="Starting your test takes under two minutes. Follow this straightforward trial workflow from request to decision."
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
          <div className="mt-8 rounded-lg border border-white/[0.08] bg-card/60 p-4 text-center text-xs text-muted-foreground sm:text-sm">
            Need help configuring your app? Check our{" "}
            <Link href="/setup" className="text-primary font-semibold underline underline-offset-4">
              universal IPTV setup guide
            </Link>{" "}
            or contact support for live assistance.
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
                <p className="mt-2 text-xs leading-5 text-muted-foreground">{item.description}</p>
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
            subtitle="TryIPTV works across all popular hardware and IPTV players. Review your platform below or explore our detailed configuration guides."
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

      {/* 7. What Happens After 24 Hours? */}
      <Section className="border-t border-white/[0.06]">
        <Container>
          <SectionHeader
            eyebrow="Zero Risk Guarantee"
            title="What Happens After Your 24-Hour Trial Ends?"
            subtitle="When your trial finishes, access expires cleanly. There are no automatic charges, no unexpected contracts, and no hidden obligations."
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-white/[0.09] bg-card p-6 shadow-[0_18px_60px_rgba(0,0,0,0.2)]">
              <div className="mb-4 grid h-10 w-10 place-items-center rounded-md border border-primary/20 bg-primary/[0.06] text-primary">
                <Clock className="h-5 w-5" />
              </div>
              <h3 className="font-headline text-lg font-extrabold text-foreground mb-2">1. Access Simply Stops</h3>
              <p className="text-sm leading-6 text-muted-foreground">
                When your 24 hours conclude, stream access stops automatically. Because no billing details were ever collected, it is impossible for you to be charged.
              </p>
            </div>

            <div className="rounded-lg border border-white/[0.09] bg-card p-6 shadow-[0_18px_60px_rgba(0,0,0,0.2)]">
              <div className="mb-4 grid h-10 w-10 place-items-center rounded-md border border-primary/20 bg-primary/[0.06] text-primary">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="font-headline text-lg font-extrabold text-foreground mb-2">2. Subscribing Is 100% Optional</h3>
              <p className="text-sm leading-6 text-muted-foreground">
                If the service earns your business, plans start at $16 for 1 month down to $7.50 per month equivalent on the 12-month plan. You decide if and when to purchase.
              </p>
            </div>

            <div className="rounded-lg border border-white/[0.09] bg-card p-6 shadow-[0_18px_60px_rgba(0,0,0,0.2)]">
              <div className="mb-4 grid h-10 w-10 place-items-center rounded-md border border-primary/20 bg-primary/[0.06] text-primary">
                <Layers className="h-5 w-5" />
              </div>
              <h3 className="font-headline text-lg font-extrabold text-foreground mb-2">3. Keep Your Player Setup</h3>
              <p className="text-sm leading-6 text-muted-foreground">
                When purchasing, contact our team and we can renew your existing trial line directly so you do not have to re-enter credentials across your devices.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <Link href="/pricing">
                Compare All Prepaid Plans on Our Pricing Page <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Container>
      </Section>

      {/* 8. Trial vs Paid Subscription Summary */}
      <Section variant="alt" className="border-t border-white/[0.06] bg-[#070a08]">
        <Container>
          <SectionHeader
            eyebrow="Evaluation vs Subscription"
            title="Free Trial vs. Paid Subscription"
            subtitle="The free trial is designed to evaluate performance risk-free. A paid plan provides continuous, uninterrupted access for your household."
          />
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
                  <td className="py-3 px-6">None (No card collected)</td>
                  <td className="py-3 px-6">One-time prepaid checkout (no auto-charges)</td>
                </tr>
                <tr>
                  <td className="py-3 px-6 font-semibold text-foreground">Duration</td>
                  <td className="py-3 px-6">24 Hours</td>
                  <td className="py-3 px-6">1, 3, 6, or 12 Months</td>
                </tr>
                <tr>
                  <td className="py-3 px-6 font-semibold text-foreground">Channels &amp; VOD</td>
                  <td className="py-3 px-6">24,000+ Channels &amp; 80,000+ VOD</td>
                  <td className="py-3 px-6">24,000+ Channels &amp; 80,000+ VOD</td>
                </tr>
                <tr>
                  <td className="py-3 px-6 font-semibold text-foreground">Simultaneous Streams</td>
                  <td className="py-3 px-6">2 Connections</td>
                  <td className="py-3 px-6">2 Connections Included</td>
                </tr>
                <tr>
                  <td className="py-3 px-6 font-semibold text-foreground">Auto-Renewal</td>
                  <td className="py-3 px-6">Never (Expires automatically)</td>
                  <td className="py-3 px-6">Never (Strictly prepaid plans)</td>
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
          <FaqList items={trialFaqs} />
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
                24 hours of unrestricted access to 24,000+ live channels, sports, and 80,000+ movies on your own TV. No credit card required, zero contracts, and no obligation.
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
