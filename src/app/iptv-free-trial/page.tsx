import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { FaqList } from "@/components/sections/FAQ";
import { 
  Check, 
  Tv, 
  Zap, 
  Shield, 
  ShieldCheck, 
  MessageCircle, 
  Smartphone, 
  Film, 
  Calendar, 
  Clock, 
  ArrowRight, 
  Sparkles,
  Layers,
  KeyRound,
  FileCode,
  Laptop,
  CheckCircle2,
  XCircle,
  HelpCircle
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { getIptvFreeTrialPageData } from "@/lib/data/iptv-free-trial-page";
import { Schema } from "@/components/shared/Schema";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";
import { plans } from "@/lib/site-data/pricing";
import { cn } from "@/lib/utils";

export function generateMetadata(): Metadata {
    const title = "Try IPTV Free for 24 Hours Before You Subscribe — TryIPTV";
    const description = "Test TryIPTV free for 24 hours. Full access to 24,000+ live channels, 80,000+ movies & series, 4K streams, and 2 simultaneous connections with no credit card required.";
    return {
      ...generatePageMetadata({
          title,
          description,
          canonical: "/iptv-free-trial",
      }),
      title: {
        absolute: title,
      }
    };
}

const quickFacts = [
  {
    metric: "24 Hours",
    label: "Trial Duration",
    description: "Begins the moment your login credentials are delivered and activated."
  },
  {
    metric: "$0 Free",
    label: "Zero Cost",
    description: "No credit card, banking, or payment details are ever collected."
  },
  {
    metric: "2 Screens",
    label: "Simultaneous Streams",
    description: "Stream across two devices at the same time in your household."
  },
  {
    metric: "100% Open",
    label: "Catalog Inclusions",
    description: "All 24,000+ live channels and 80,000+ VOD titles are fully unlocked."
  }
];

const trialInclusions = [
  { 
    icon: Zap, 
    title: "4K Ultra HD Streaming Quality", 
    description: "Streams play at native broadcast resolution (HD, Full HD, and 4K where available) so you can evaluate picture clarity and stability." 
  },
  { 
    icon: Tv, 
    title: "24,000+ Live Channels Worldwide", 
    description: "Live sports, news networks, premium entertainment, and international broadcasts across USA, UK, Canada, and global regions." 
  },
  { 
    icon: Film, 
    title: "80,000+ Movies & Series", 
    description: "The complete on-demand VOD library is unlocked during your 24 hours, exactly as paying subscribers see it." 
  },
  { 
    icon: Sparkles, 
    title: "Premium PPV Events Included", 
    description: "Full access to live pay-per-view events, championship matches, and special broadcasts scheduled during your trial period." 
  },
  { 
    icon: Calendar, 
    title: "Smart EPG & Catch-Up TV", 
    description: "The full Electronic Program Guide is active so you can verify that listings accurately match what is currently playing." 
  },
  { 
    icon: MessageCircle, 
    title: "2 Streams & 24/7 Support", 
    description: "Stream simultaneously on 2 devices with technical assistance available via WhatsApp and email whenever you need help." 
  },
];

const howItWorksSteps = [
  {
    number: "01",
    title: "Request Your Trial",
    description: "Send a message via WhatsApp or request trial access on our website. We do not ask for credit card numbers, billing addresses, or payment details."
  },
  {
    number: "02",
    title: "Receive Your Login Details",
    description: "Our support team provides your unique M3U playlist URL, Xtream Codes credentials (Server URL, Username, and Password), and setup guide."
  },
  {
    number: "03",
    title: "Start Streaming on Any Device",
    description: "Enter your credentials into any compatible player app (like TiviMate, IPTV Smarters, or GSE Smart IPTV) on your TV, phone, or PC and your 24 hours begin."
  }
];

const testingGuide = [
  {
    number: "01",
    title: "Run a Peak-Hour Test (7–11 PM)",
    description: "Stream live TV during busy evening hours when neighborhood residential networks experience peak traffic. This is the most revealing test for server stability and smooth playback."
  },
  {
    number: "02",
    title: "Check Your Must-Have Live Channels & Sports",
    description: "Open your essential live sports networks, local news stations, and favorite cable feeds. Confirm that live audio and video sync cleanly and play without interruption."
  },
  {
    number: "03",
    title: "Test Across Two Screens & EPG Guide",
    description: "Log in on your main TV and a mobile device or second TV simultaneously (your trial includes 2 connections). Check channel zapping speed and verify that the EPG guide is aligned."
  }
];

const supportedDevices = [
  {
    name: "Amazon Fire TV & Fire Stick",
    apps: "TiviMate, IPTV Smarters, Downloader",
    url: "/devices/fire-tv"
  },
  {
    name: "Android TV & Android Box",
    apps: "TiviMate, IPTV Smarters Pro, XCIPTV",
    url: "/devices/android"
  },
  {
    name: "Apple TV, iPhone & iPad",
    apps: "GSE Smart IPTV, IPTV Smarters, UHF",
    url: "/devices/apple-tv"
  },
  {
    name: "Samsung Smart TVs",
    apps: "Smart IPTV, IBO Player, Nanomid",
    url: "/devices/samsung-tv"
  },
  {
    name: "LG Smart TVs",
    apps: "Smart IPTV, IPTV Smarters, SS IPTV",
    url: "/devices/lg-tv"
  },
  {
    name: "Windows PC & Laptops",
    apps: "VLC Media Player, IPTV Smarters Pro",
    url: "/devices/windows"
  },
  {
    name: "Apple macOS",
    apps: "VLC, IPTV Smarters Pro for Mac",
    url: "/devices/macos"
  },
  {
    name: "MAG & Stalker Set-Top Boxes",
    apps: "MAG 250, 254, 322 Stalker Portal",
    url: "/devices/mag"
  },
];

const whyTryReasons = [
  {
    title: "Verify ISP Routing & Stability",
    description: "Confirm whether your local internet provider routes IPTV streaming traffic smoothly without throttling during high-demand sporting events."
  },
  {
    title: "Judge Picture Quality on Your Big Screen",
    description: "Do not rely on compressed marketing screenshots. Evaluate native 4K and Full HD picture clarity on your own living room TV."
  },
  {
    title: "Inspect Your Priority Channel Lineup",
    description: "Ensure the exact regional sports networks, international feeds, and news broadcasts your household relies upon are active and reliable."
  },
  {
    title: "Experience Real 24/7 Support Firsthand",
    description: "Send a message to our support team on WhatsApp. See how fast our technicians respond and how easily they guide your player configuration."
  }
];

export default async function IptvFreeTrialPage() {
    const { breadcrumbSchema, faqSchema, serviceSchema, trialFaqs } = await getIptvFreeTrialPageData();

    return (
        <>
            <Schema id="breadcrumb" schema={breadcrumbSchema} />
            <Schema id="faq" schema={faqSchema} />
            <Schema id="service" schema={serviceSchema} />

            {/* 1. Hero offer + CTA */}
            <Section className="relative overflow-hidden border-b border-white/[0.07] pt-12 pb-14 sm:pt-16 sm:pb-20">
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
                <Container className="relative text-center">
                    <Breadcrumb items={[{ label: "IPTV Free Trial" }]} align="center" />
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/[0.06] px-3.5 py-1.5 text-xs font-extrabold text-primary">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-40" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                        </span>
                        24-Hour All-Access Pass • Zero Commitment
                    </div>
                    <h1 className="font-headline text-3xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl max-w-4xl mx-auto">
                        Try IPTV Free for 24 Hours Before You Subscribe
                    </h1>
                    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                        Experience the full TryIPTV service on your own screens before spending a dollar. Our 24-hour free trial unlocks 24,000+ live channels, 80,000+ on-demand movies and series, 4K streaming, and the full EPG TV guide. No credit card required, no contracts, and no automatic renewals.
                    </p>
                    <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Button asChild size="lg">
                            <a href="https://wa.me/447848197761" target="_blank" rel="noopener noreferrer">
                                <SiWhatsapp className="mr-2 h-4 w-4" />
                                Start Free Trial on WhatsApp
                            </a>
                        </Button>
                        <Button asChild size="lg" variant="outline">
                            <Link href="/pricing">
                                See Plans &amp; Pricing
                            </Link>
                        </Button>
                    </div>
                    <p className="mt-4 text-xs font-semibold text-muted-foreground">
                        No credit card required • Typical activation within 5–15 minutes via WhatsApp &amp; email • Zero auto-charges
                    </p>
                </Container>
            </Section>

            {/* 2. Quick Trial Facts */}
            <Section className="border-b border-white/[0.06] bg-[#070a08] py-10">
                <Container>
                    <h2 className="sr-only">Key Trial Details</h2>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {quickFacts.map((fact) => (
                            <div 
                                key={fact.label}
                                className="rounded-lg border border-white/[0.09] bg-card p-5 text-center shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
                            >
                                <span className="font-headline text-3xl font-extrabold text-foreground">{fact.metric}</span>
                                <h3 className="mt-1 font-headline text-sm font-extrabold text-primary uppercase tracking-wider">{fact.label}</h3>
                                <p className="mt-1.5 text-xs leading-5 text-muted-foreground">{fact.description}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* 3. What You Get During Your Free Trial */}
            <Section>
                <Container>
                    <SectionHeader
                        eyebrow="Trial Inclusions"
                        title="What You Get During Your Free Trial"
                        subtitle="Everything included with a premium TryIPTV subscription is unlocked during your 24 hours. Nothing is locked behind a paywall, and stream quality is never downgraded."
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

            {/* 4. How the 24-Hour IPTV Trial Works */}
            <Section variant="alt" className="border-y border-white/[0.06] bg-[#070a08]">
                <Container>
                    <SectionHeader
                        eyebrow="Simple 3-Step Setup"
                        title="How the 24-Hour IPTV Trial Works"
                        subtitle="Getting your free trial takes less than two minutes. No payment information is ever collected."
                    />
                    <div className="grid grid-cols-1 border-y border-white/[0.09] md:grid-cols-3 md:divide-x md:divide-white/[0.09]">
                        {howItWorksSteps.map((step) => (
                            <div key={step.number} className="relative border-b border-white/[0.09] px-6 py-8 last:border-b-0 md:border-b-0 md:px-8 md:py-9">
                                <div className="mb-6 flex items-center justify-between">
                                    <span className="text-xs font-extrabold text-muted-foreground">{step.number}</span>
                                    <span className="grid h-11 w-11 place-items-center rounded-md border border-primary/20 bg-primary/[0.06] text-primary font-extrabold text-sm">
                                        {step.number}
                                    </span>
                                </div>
                                <h3 className="mb-3 font-headline text-xl font-extrabold leading-7 text-foreground">{step.title}</h3>
                                <p className="text-sm leading-6 text-muted-foreground">{step.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 rounded-lg border border-white/[0.08] bg-card/60 p-4 text-center text-xs text-muted-foreground sm:text-sm">
                        Credential messages are dispatched promptly by our support team. If you request trial details by email, please check your spam folder before assuming delivery failed.
                    </div>
                </Container>
            </Section>

            {/* 5. What to Test During Your Trial */}
            <Section>
                <Container>
                    <SectionHeader
                        eyebrow="Evaluation Guide"
                        title="What to Test During Your Trial"
                        subtitle="Evaluate TryIPTV the way your household actually watches TV to make sure it meets your standards before you pay anything."
                    />
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        {testingGuide.map((item) => (
                            <div
                                key={item.number}
                                className="relative rounded-lg border border-white/[0.09] bg-card p-6 shadow-[0_18px_60px_rgba(0,0,0,0.2)]"
                            >
                                <span className="mb-3 inline-block font-mono text-xs font-extrabold text-primary">
                                    TEST {item.number}
                                </span>
                                <h3 className="font-headline text-xl font-extrabold leading-7 text-foreground">{item.title}</h3>
                                <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* 6. Supported Devices */}
            <Section variant="alt" className="border-t border-white/[0.06] bg-[#070a08]">
                <Container>
                    <SectionHeader
                        eyebrow="Device Compatibility"
                        title="Supported Devices &amp; Platforms"
                        subtitle="TryIPTV works seamlessly on all popular hardware. Test the exact screens and media streamers your household uses everyday."
                    />
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {supportedDevices.map((device) => (
                            <Link
                                key={device.name}
                                href={device.url}
                                className="group rounded-lg border border-white/[0.09] bg-card p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-[#0c1410]"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="font-headline text-base font-extrabold text-foreground group-hover:text-primary transition-colors">
                                        {device.name}
                                    </h3>
                                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-xs text-muted-foreground leading-5">
                                    Recommended: {device.apps}
                                </p>
                            </Link>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* 7. Xtream Codes & M3U Setup */}
            <Section className="border-t border-white/[0.06]">
                <Container>
                    <SectionHeader
                        eyebrow="Configuration Methods"
                        title="Xtream Codes &amp; M3U Setup"
                        subtitle="Every trial includes both standard connection protocols, allowing you to connect using whatever method your preferred IPTV player requires."
                    />
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <Card className="border-white/[0.09] bg-card p-6 shadow-[0_18px_60px_rgba(0,0,0,0.2)]">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="grid h-10 w-10 place-items-center rounded-md border border-primary/20 bg-primary/[0.06] text-primary">
                                    <KeyRound className="h-5 w-5" />
                                </div>
                                <div>
                                    <Badge className="bg-primary/10 text-primary border-primary/20 mb-1">Recommended for Player Apps</Badge>
                                    <h3 className="font-headline text-xl font-extrabold text-foreground">Xtream Codes API</h3>
                                </div>
                            </div>
                            <p className="text-sm leading-6 text-muted-foreground mb-4">
                                The fastest and most organized connection method for modern IPTV applications like TiviMate, IPTV Smarters Pro, and XCIPTV.
                            </p>
                            <div className="rounded-md border border-white/[0.08] bg-[#070a08] p-4 text-xs font-mono text-muted-foreground space-y-1.5 mb-4">
                                <div><span className="text-primary font-bold">Server URL:</span> http://domain:port</div>
                                <div><span className="text-primary font-bold">Username:</span> (provided in your trial email)</div>
                                <div><span className="text-primary font-bold">Password:</span> (provided in your trial email)</div>
                            </div>
                            <ul className="text-xs leading-5 text-muted-foreground space-y-2">
                                <li className="flex items-center gap-2">
                                    <Check className="h-4 w-4 text-primary shrink-0" />
                                    <span>Automatically categorizes live TV, movies, and series</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check className="h-4 w-4 text-primary shrink-0" />
                                    <span>Automatic Electronic Program Guide (EPG) loading</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check className="h-4 w-4 text-primary shrink-0" />
                                    <span>Faster channel switching and lighter memory footprint</span>
                                </li>
                            </ul>
                        </Card>

                        <Card className="border-white/[0.09] bg-card p-6 shadow-[0_18px_60px_rgba(0,0,0,0.2)]">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="grid h-10 w-10 place-items-center rounded-md border border-primary/20 bg-primary/[0.06] text-primary">
                                    <FileCode className="h-5 w-5" />
                                </div>
                                <div>
                                    <Badge variant="outline" className="text-muted-foreground border-white/20 mb-1">Universal Compatibility</Badge>
                                    <h3 className="font-headline text-xl font-extrabold text-foreground">M3U Playlist URL</h3>
                                </div>
                            </div>
                            <p className="text-sm leading-6 text-muted-foreground mb-4">
                                A single web link containing the complete stream catalog, universally compatible with media players like VLC, GSE Smart IPTV, and Kodi.
                            </p>
                            <div className="rounded-md border border-white/[0.08] bg-[#070a08] p-4 text-xs font-mono text-muted-foreground space-y-1.5 mb-4">
                                <div className="truncate"><span className="text-primary font-bold">M3U Link:</span> http://domain:port/get.php?username=...</div>
                                <div className="truncate"><span className="text-primary font-bold">EPG Link:</span> http://domain:port/xmltv.php?username=...</div>
                            </div>
                            <ul className="text-xs leading-5 text-muted-foreground space-y-2">
                                <li className="flex items-center gap-2">
                                    <Check className="h-4 w-4 text-primary shrink-0" />
                                    <span>Works on virtually every IPTV player and media player</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check className="h-4 w-4 text-primary shrink-0" />
                                    <span>Easy one-line playlist import on desktop computers</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check className="h-4 w-4 text-primary shrink-0" />
                                    <span>Includes separate XMLTV EPG link for TV guide data</span>
                                </li>
                            </ul>
                        </Card>
                    </div>
                </Container>
            </Section>

            {/* 8. Trial vs Paid Subscription */}
            <Section variant="alt" className="border-t border-white/[0.06] bg-[#070a08]">
                <Container>
                    <SectionHeader
                        eyebrow="Comparison Table"
                        title="Trial vs Paid Subscription"
                        subtitle="We do not believe in restricted trials. Here is an honest comparison of what you get during your 24 hours versus a paid plan."
                    />
                    <div className="overflow-x-auto rounded-lg border border-white/[0.09] bg-card">
                        <table className="w-full text-left text-sm">
                            <thead className="border-b border-white/[0.09] bg-white/[0.02] text-xs font-extrabold uppercase text-muted-foreground">
                                <tr>
                                    <th className="py-4 px-6">Feature / Term</th>
                                    <th className="py-4 px-6 text-primary">24-Hour Free Trial</th>
                                    <th className="py-4 px-6 text-foreground">Paid Subscription (1–12 Mo)</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/[0.06]">
                                <tr>
                                    <td className="py-3.5 px-6 font-semibold text-foreground">Upfront Cost</td>
                                    <td className="py-3.5 px-6 text-primary font-bold">$0 (Free)</td>
                                    <td className="py-3.5 px-6 text-muted-foreground">From $16/mo (or $7.50/mo eq on 12-mo)</td>
                                </tr>
                                <tr>
                                    <td className="py-3.5 px-6 font-semibold text-foreground">Payment Required</td>
                                    <td className="py-3.5 px-6 text-muted-foreground">None ($0 free)</td>
                                    <td className="py-3.5 px-6 text-muted-foreground">Prepaid crypto checkout (no auto-charges)</td>
                                </tr>
                                <tr>
                                    <td className="py-3.5 px-6 font-semibold text-foreground">Access Duration</td>
                                    <td className="py-3.5 px-6 text-muted-foreground">24 Hours</td>
                                    <td className="py-3.5 px-6 text-muted-foreground">1, 3, 6, or 12 Months</td>
                                </tr>
                                <tr>
                                    <td className="py-3.5 px-6 font-semibold text-foreground">Live Channels</td>
                                    <td className="py-3.5 px-6 text-muted-foreground">24,000+ Channels (Full Access)</td>
                                    <td className="py-3.5 px-6 text-muted-foreground">24,000+ Channels (Full Access)</td>
                                </tr>
                                <tr>
                                    <td className="py-3.5 px-6 font-semibold text-foreground">Movies &amp; Series (VOD)</td>
                                    <td className="py-3.5 px-6 text-muted-foreground">80,000+ Titles (Full Library)</td>
                                    <td className="py-3.5 px-6 text-muted-foreground">80,000+ Titles (Full Library)</td>
                                </tr>
                                <tr>
                                    <td className="py-3.5 px-6 font-semibold text-foreground">Streaming Quality</td>
                                    <td className="py-3.5 px-6 text-muted-foreground">HD &amp; 4K Ultra HD where available</td>
                                    <td className="py-3.5 px-6 text-muted-foreground">HD &amp; 4K Ultra HD where available</td>
                                </tr>
                                <tr>
                                    <td className="py-3.5 px-6 font-semibold text-foreground">Simultaneous Streams</td>
                                    <td className="py-3.5 px-6 text-muted-foreground">2 Connections</td>
                                    <td className="py-3.5 px-6 text-muted-foreground">2 Connections Included</td>
                                </tr>
                                <tr>
                                    <td className="py-3.5 px-6 font-semibold text-foreground">Smart EPG Guide</td>
                                    <td className="py-3.5 px-6 text-muted-foreground">Included</td>
                                    <td className="py-3.5 px-6 text-muted-foreground">Included</td>
                                </tr>
                                <tr>
                                    <td className="py-3.5 px-6 font-semibold text-foreground">Automatic Renewal</td>
                                    <td className="py-3.5 px-6 text-muted-foreground">Never (Expires automatically)</td>
                                    <td className="py-3.5 px-6 text-muted-foreground">Never (Strictly prepaid plans)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Container>
            </Section>

            {/* 9. What Happens After the Trial Ends? */}
            <Section className="border-t border-white/[0.06]">
                <Container>
                    <SectionHeader
                        eyebrow="Zero Obligation"
                        title="What Happens After the Trial Ends?"
                        subtitle="When your 24 hours conclude, the trial simply expires. There are no surprise bills, no recurring charges, and no hard feelings."
                    />
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        <div className="rounded-lg border border-white/[0.09] bg-card p-6 shadow-[0_18px_60px_rgba(0,0,0,0.2)]">
                            <div className="mb-4 grid h-10 w-10 place-items-center rounded-md border border-primary/20 bg-primary/[0.06] text-primary">
                                <Clock className="h-5 w-5" />
                            </div>
                            <h3 className="font-headline text-lg font-extrabold text-foreground mb-2">1. Access Simply Stops</h3>
                            <p className="text-sm leading-6 text-muted-foreground">
                                When your 24-hour test period finishes, your stream access turns off automatically. Because we never took your payment details, it is impossible for us to charge you.
                            </p>
                        </div>
                        <div className="rounded-lg border border-white/[0.09] bg-card p-6 shadow-[0_18px_60px_rgba(0,0,0,0.2)]">
                            <div className="mb-4 grid h-10 w-10 place-items-center rounded-md border border-primary/20 bg-primary/[0.06] text-primary">
                                <ShieldCheck className="h-5 w-5" />
                            </div>
                            <h3 className="font-headline text-lg font-extrabold text-foreground mb-2">2. Upgrading Is Optional</h3>
                            <p className="text-sm leading-6 text-muted-foreground">
                                If the trial convinces you, plans start at $16 for one month, down to $7.50 per month on the 12-month plan. You choose if and when you want to buy.
                            </p>
                        </div>
                        <div className="rounded-lg border border-white/[0.09] bg-card p-6 shadow-[0_18px_60px_rgba(0,0,0,0.2)]">
                            <div className="mb-4 grid h-10 w-10 place-items-center rounded-md border border-primary/20 bg-primary/[0.06] text-primary">
                                <Layers className="h-5 w-5" />
                            </div>
                            <h3 className="font-headline text-lg font-extrabold text-foreground mb-2">3. Keep Your Setup</h3>
                            <p className="text-sm leading-6 text-muted-foreground">
                                When subscribing, contact our support team and we can renew your existing trial line so you do not have to re-enter credentials on your devices.
                            </p>
                        </div>
                    </div>
                    <div className="mt-8 text-center">
                        <Button asChild variant="outline">
                            <Link href="/pricing">
                                View Full Plans &amp; Pricing Page <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </Container>
            </Section>

            {/* 10. Why Try Before Paying? */}
            <Section variant="alt" className="border-t border-white/[0.06] bg-[#070a08]">
                <Container>
                    <SectionHeader
                        eyebrow="Consumer Protection"
                        title="Why Try Before Paying?"
                        subtitle="IPTV services differ dramatically in stream stability, server capacity, and customer support. Testing first protects your wallet."
                    />
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {whyTryReasons.map((reason) => (
                            <div
                                key={reason.title}
                                className="rounded-lg border border-white/[0.09] bg-card p-6 shadow-[0_18px_60px_rgba(0,0,0,0.2)]"
                            >
                                <CheckCircle2 className="h-6 w-6 text-primary mb-3" />
                                <h3 className="font-headline text-base font-extrabold text-foreground mb-1.5">{reason.title}</h3>
                                <p className="text-xs leading-5 text-muted-foreground">{reason.description}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* 11. FAQ */}
            <Section id="faq" className="border-t border-white/[0.06]">
                <Container>
                    <SectionHeader
                        eyebrow="Questions &amp; Answers"
                        title="Frequently Asked Questions About the 24-Hour Trial"
                        subtitle="Quick, self-contained answers to the questions viewers ask most often before starting an IPTV free trial."
                    />
                    <FaqList items={trialFaqs} />
                    <div className="mt-10 text-center">
                        <p className="text-sm text-muted-foreground sm:text-base">
                            Still have questions?{" "}
                            <Link href="/contact" className="font-semibold text-primary underline underline-offset-4 hover:text-primary/80">
                                Contact our 24/7 support team
                            </Link>
                            . Available via WhatsApp and email.
                        </p>
                    </div>
                </Container>
            </Section>

            {/* 12. Final CTA */}
            <Section className="border-t border-white/[0.06] bg-[#070a08]">
                <Container>
                    <div className="relative overflow-hidden rounded-lg border border-primary/25 bg-[#0b100d] p-7 sm:p-8 md:p-10 lg:flex lg:items-center lg:justify-between lg:text-left">
                        <div className="absolute inset-y-0 left-0 w-1 bg-primary" />
                        <div className="max-w-2xl">
                            <p className="eyebrow mb-3 flex items-center justify-center gap-2 lg:justify-start">
                                <Sparkles className="h-4 w-4 text-primary" /> Start Streaming Tonight
                            </p>
                            <h2 className="font-headline text-3xl font-extrabold leading-[1.12] sm:text-4xl">
                                Start Your 24-Hour IPTV Free Trial Tonight
                            </h2>
                            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted-foreground lg:mx-0">
                                24 hours of full access to 24,000+ live channels and 80,000+ on-demand titles on your own TV. No credit card required, no contracts, and no catch. If the service earns your subscription, choose a plan. If not, walk away owing nothing.
                            </p>
                        </div>
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:ml-10 lg:mt-0 lg:shrink-0">
                            <Button asChild size="lg">
                                <a href="https://wa.me/447848197761" target="_blank" rel="noopener noreferrer">
                                    <SiWhatsapp className="mr-2 h-4 w-4" /> Start Free Trial on WhatsApp
                                </a>
                            </Button>
                            <Button asChild size="lg" variant="outline">
                                <Link href="/pricing">
                                    See Plans &amp; Pricing
                                </Link>
                            </Button>
                        </div>
                    </div>
                </Container>
            </Section>
        </>
    );
}
