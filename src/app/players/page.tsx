import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Tv, Smartphone, Layers, Sliders, Globe, Clock, ShieldCheck, HelpCircle, HardDrive, History, Radio, Cast } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Container } from "@/components/shared/Container";
import { Schema } from "@/components/shared/Schema";
import { Section } from "@/components/shared/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { generateBreadcrumbSchema, generateFAQPageSchema } from "@/lib/schema";
import { PRODUCT_TRUTHS, SITE_URL, generateMetadata as generatePageMetadata } from "@/lib/site-config";

const title = "Best IPTV Players for 2026: Comparison & Setup Guides";
const description =
  "Comprehensive comparison and setup guides for the top IPTV players. Compare TiviMate, IPTV Smarters Pro, XCIPTV, Televizo, OTT Navigator, IPTV Extreme, and Perfect Player.";
const canonical = "/players";

export function generateMetadata(): Metadata {
  return {
    ...generatePageMetadata({
      title,
      description,
      canonical,
    }),
    title: {
      absolute: title,
    },
  };
}

const playersList = [
  {
    name: "TiviMate IPTV Player",
    slug: "tivimate",
    developer: "Armobsoft FZE",
    platforms: "Android TV, Google TV, Fire TV",
    protocols: "Xtream Codes, M3U / M3U8",
    pricing: "Free / Premium ($33.99 Lifetime or $9.99/yr)",
    bestFor: "Best Overall TV Experience",
    description: "The gold standard for television screens. Features a broadcast-grade EPG timeline grid, SMB network DVR recording, multi-view, and rapid channel switching.",
    icon: Tv,
    badgeColor: "text-primary border-primary/20 bg-primary/10",
  },
  {
    name: "IPTV Smarters Pro",
    slug: "iptv-smarters",
    developer: "WHMCS SMARTERS",
    platforms: "iOS, Android, Fire TV, Samsung Tizen, LG webOS, Windows, Mac",
    protocols: "Xtream Codes API, M3U Playlist",
    pricing: "Free / Smarters Pro Premium In-App",
    bestFor: "Broadest Multi-Device Ecosystem",
    description: "The most widely deployed multi-platform IPTV application. Works across iPhone, Apple TV, Smart TVs (Samsung & LG), and Firestick with a unified interface.",
    icon: Globe,
    badgeColor: "text-blue-400 border-blue-400/20 bg-blue-400/10",
  },
  {
    name: "XCIPTV Player",
    slug: "xciptv",
    developer: "OTTRUN",
    platforms: "Android TV, Google TV, Android Mobile, Fire TV",
    protocols: "Xtream Codes API (Native), M3U",
    pricing: "Free (Ad-Supported) / Customizable",
    bestFor: "Dual Playback Engines & Multi-Screen",
    description: "Features hot-swappable dual media engines (Google ExoPlayer and VideoLAN VLC) to eliminate audio sync drift, alongside a 4-channel live sports multi-screen wall.",
    icon: Sliders,
    badgeColor: "text-purple-400 border-purple-400/20 bg-purple-400/10",
  },
  {
    name: "Televizo IPTV Player",
    slug: "televizo",
    developer: "Andrey Menscikov",
    platforms: "Android TV, Android Phones/Tablets, Fire TV (Sideload)",
    protocols: "Xtream Codes API, M3U / M3U8",
    pricing: "Free / One-Time Lifetime In-App Purchase",
    bestFor: "Cleanest Hybrid Mobile & TV Interface",
    description: "A fast, modern Kotlin-based media player that adapts gracefully between touch gestures and TV remote D-pads, featuring native Google Cast streaming.",
    icon: Smartphone,
    badgeColor: "text-emerald-400 border-emerald-400/20 bg-emerald-400/10",
  },
  {
    name: "OTT Navigator IPTV",
    slug: "ott-navigator",
    developer: "SIA Scillarium Studio",
    platforms: "Android TV, Google TV, Android Mobile, Fire TV (Sideload)",
    protocols: "Xtream Codes, M3U, Stalker Portal",
    pricing: "Free / In-App Premium",
    bestFor: "Videophiles & High-End Codec Control",
    description: "Unmatched configuration depth with the MPV media core, Auto Frame Rate (AFR) HDMI matching, hardware deinterlacing for 1080i sports, and 9-channel Studio Mode.",
    icon: Layers,
    badgeColor: "text-amber-400 border-amber-400/20 bg-amber-400/10",
  },
  {
    name: "IPTV Extreme",
    slug: "iptv-extreme",
    developer: "Paolo Turatti",
    platforms: "Android TV, Android Mobile, Fire TV (Sideload)",
    protocols: "M3U / M3U8, Xtream Codes",
    pricing: "Free / IPTV Extreme Pro (One-Time)",
    bestFor: "Web Portal Setup & Scheduled DVR",
    description: "Upload and manage playlists remotely from your laptop or phone via iptvextreme.eu using your TV's virtual MAC address. Includes scheduled DVR recording timers.",
    icon: HardDrive,
    badgeColor: "text-cyan-400 border-cyan-400/20 bg-cyan-400/10",
  },
  {
    name: "Perfect Player IPTV",
    slug: "perfect-player",
    developer: "Niklabs Software",
    platforms: "Android (Legacy), Fire TV, Windows (Legacy)",
    protocols: "M3U / M3U8, XSPF",
    pricing: "Free (Delisted from Google Play)",
    bestFor: "Legacy Hardware & Set-Top Box OSD",
    description: "Historical pioneer of set-top box On-Screen Display styling. Lightweight footprint for older 1GB RAM Android boxes, with UDPXY proxy integration.",
    icon: History,
    badgeColor: "text-zinc-400 border-zinc-400/20 bg-zinc-400/10",
  },
];

const faqs = [
  {
    question: "What is the difference between an IPTV player and an IPTV provider?",
    answer:
      "An IPTV player (such as TiviMate, IPTV Smarters, or XCIPTV) is software that renders video streams, organizes playlists into categories, and displays Electronic Program Guides (EPG). IPTV players do not provide or host any television content on their own. TryIPTV is the service provider that delivers the actual high-bitrate live channel streams, VOD movies, series, and server infrastructure. You log into the player application using your TryIPTV credentials (Xtream Codes API or M3U link).",
  },
  {
    question: "Which IPTV player is best for Firestick and Android TV?",
    answer:
      "For televisions connected to an Amazon Fire TV Stick, Google TV, or Android TV box, TiviMate is widely considered the top choice due to its full-screen EPG grid, remote-control responsiveness, and SMB network recording. If you want a player with built-in multi-screen sports viewing without purchasing a premium subscription, XCIPTV and Televizo are excellent alternatives.",
  },
  {
    question: "Which IPTV player should I use on iPhone, iPad, or Apple TV?",
    answer:
      "TiviMate, XCIPTV, and Televizo are not available on Apple platforms. For iOS, iPadOS, and tvOS (Apple TV), IPTV Smarters (Smarters Player Lite on the App Store) or GSE Smart IPTV are the most popular choices because they provide native iOS apps with full Xtream Codes API support.",
  },
  {
    question: "Do I need to pay for an IPTV player?",
    answer:
      "Most IPTV players offer free tiers that allow unrestricted stream playback. Free versions typically include banner ads or reserve advanced power-user features (such as scheduled DVR recording, multi-screen grids, or multiple playlist slots) for a one-time purchase or nominal annual license. TryIPTV works seamlessly with both free and premium player versions.",
  },
  {
    question: "Can I watch live streams on multiple devices at the same time?",
    answer:
      "Yes. Every TryIPTV subscription includes 2 simultaneous connections standard on all plans. This means you can stream on your living room TiviMate player and your mobile phone with IPTV Smarters at the same time under a single subscription.",
  },
];

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", item: `${SITE_URL}/` },
  { name: "Players", item: `${SITE_URL}/players` },
]);

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Top IPTV Players and Applications",
  description: "Comprehensive technical guides and reviews for the leading IPTV media players.",
  itemListElement: playersList.map((player, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: player.name,
    url: `${SITE_URL}/players/${player.slug}`,
  })),
};

const faqSchema = generateFAQPageSchema(faqs);

export default function PlayersHubPage() {
  return (
    <>
      <Schema id="breadcrumb" schema={breadcrumbSchema} />
      <Schema id="itemlist" schema={itemListSchema} />
      <Schema id="faq" schema={faqSchema} />

      <Section className="relative overflow-hidden border-b border-white/[0.07] pt-12 pb-14 sm:pt-16 sm:pb-20">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
        <Container className="relative">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Players" },
            ]}
          />

          <div className="mt-8 max-w-4xl">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-primary">
              IPTV Software Directory &amp; Architecture
            </span>
            <h1 className="mt-3 font-headline text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Best IPTV Players for 2026: Technical Guides &amp; Comparison
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              An IPTV player is the software interface that turns raw stream URLs into an effortless television viewing experience. From broadcast-grade EPG grids on Android TV to universal apps across Apple, Samsung, and LG ecosystems, compare the top seven IPTV players compatible with TryIPTV.
            </p>
          </div>
        </Container>
      </Section>

      {/* Comparison Matrix Table */}
      <Section className="py-12 sm:py-16 border-b border-white/[0.07]">
        <Container>
          <div className="max-w-3xl">
            <h2 className="font-headline text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              IPTV Player Feature &amp; Platform Comparison Matrix
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Direct comparison of platforms, authentication protocols, and standout technical capabilities across the seven major IPTV players.
            </p>
          </div>

          <div className="mt-8 overflow-x-auto rounded-xl border border-white/[0.08] bg-white/[0.02]">
            <table className="w-full text-left text-sm whitespace-nowrap lg:whitespace-normal">
              <thead>
                <tr className="border-b border-white/[0.08] bg-white/[0.03] text-xs font-semibold uppercase tracking-wider text-foreground">
                  <th className="p-4">Player App</th>
                  <th className="p-4">Developer</th>
                  <th className="p-4">Supported Platforms</th>
                  <th className="p-4">Login Protocols</th>
                  <th className="p-4">Key Strength</th>
                  <th className="p-4">Guide</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06]">
                {playersList.map((player) => (
                  <tr key={player.slug} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 font-semibold text-foreground">
                      <div className="flex items-center gap-2">
                        <player.icon className="h-4 w-4 text-primary shrink-0" />
                        <Link href={`/players/${player.slug}`} className="hover:text-primary transition-colors">
                          {player.name}
                        </Link>
                      </div>
                    </td>
                    <td className="p-4 text-xs text-muted-foreground font-mono">{player.developer}</td>
                    <td className="p-4 text-xs text-muted-foreground">{player.platforms}</td>
                    <td className="p-4 text-xs text-muted-foreground">{player.protocols}</td>
                    <td className="p-4 text-xs">
                      <span className={`inline-flex rounded-full border px-2 py-0.5 text-[11px] font-medium ${player.badgeColor}`}>
                        {player.bestFor}
                      </span>
                    </td>
                    <td className="p-4 text-xs">
                      <Button asChild size="sm" variant="ghost" className="h-8 text-primary hover:text-primary">
                        <Link href={`/players/${player.slug}`}>
                          Read Guide <ArrowRight className="ml-1 h-3.5 w-3.5" />
                        </Link>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      {/* Detailed Player Cards */}
      <Section className="py-12 sm:py-16">
        <Container>
          <div className="max-w-3xl">
            <h2 className="font-headline text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Independent Player Reviews &amp; Setup Walkthroughs
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Select an IPTV player below for in-depth setup instructions, buffer tuning, EPG integration, and troubleshooting guides:
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {playersList.map((player) => (
              <Card key={player.slug} className="flex flex-col justify-between border-white/[0.08] bg-white/[0.02] transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:bg-white/[0.04]">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${player.badgeColor}`}>
                      <player.icon className="h-3 w-3" />
                      {player.bestFor}
                    </span>
                  </div>
                  <CardTitle className="font-headline text-lg sm:text-xl font-bold text-foreground">
                    <Link href={`/players/${player.slug}`} className="hover:text-primary transition-colors">
                      {player.name}
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-xs text-muted-foreground">
                    By {player.developer} • {player.platforms}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0 flex flex-col justify-between flex-1">
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                    {player.description}
                  </p>
                  <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between">
                    <span className="text-[11px] text-muted-foreground font-mono">
                      {player.pricing}
                    </span>
                    <Button asChild size="sm" variant="ghost" className="h-8 text-primary hover:text-primary group p-0">
                      <Link href={`/players/${player.slug}`} className="flex items-center gap-1 text-xs">
                        Setup Guide <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Decision Guide: How to choose */}
      <Section className="py-12 sm:py-16 border-t border-white/[0.07] bg-white/[0.01]">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="space-y-8 lg:col-span-8">
              <div>
                <h2 className="font-headline text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  How to Choose the Right IPTV Player for Your Setup
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Because different streaming devices use fundamentally different operating systems and hardware decoders, there is no single &quot;one-size-fits-all&quot; player for every situation:
                </p>

                <div className="mt-6 space-y-4">
                  <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-5">
                    <h3 className="font-semibold text-foreground text-base">If You Have an Amazon Firestick or Android TV:</h3>
                    <p className="mt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Choose <Link href="/players/tivimate" className="text-primary underline">TiviMate</Link> if you want the most refined television guide experience with SMB recording. Choose <Link href="/players/xciptv" className="text-primary underline">XCIPTV</Link> if you want multi-screen sports viewing, or <Link href="/players/televizo" className="text-primary underline">Televizo</Link> for an uncluttered interface without subscriptions.
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-5">
                    <h3 className="font-semibold text-foreground text-base">If You Stream on Apple Devices, Samsung, or LG Smart TVs:</h3>
                    <p className="mt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Choose <Link href="/players/iptv-smarters" className="text-primary underline">IPTV Smarters Pro</Link>. It is one of the only major players natively available in the Apple App Store, Samsung Smart Hub (Tizen), and LG Content Store (webOS).
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-5">
                    <h3 className="font-semibold text-foreground text-base">If You Watch High-Framerate 50fps Sports on a 4K OLED TV:</h3>
                    <p className="mt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Choose <Link href="/players/ott-navigator" className="text-primary underline">OTT Navigator</Link>. Its native Auto Frame Rate (AFR) switching synchronizes HDMI refresh rates to eliminate micro-stutters, and its MPV engine provides hardware deinterlacing for 1080i sports feeds.
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-5">
                    <h3 className="font-semibold text-foreground text-base">If You Prefer Web-Portal Setup or Scheduled DVR Recording:</h3>
                    <p className="mt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Consider <Link href="/players/iptv-extreme" className="text-primary underline">IPTV Extreme</Link>. It allows uploading playlists remotely via its web portal and includes granular manual stream buffer configuration for Android devices.
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-5">
                    <h3 className="font-semibold text-foreground text-base">If You Are Using Older Legacy Hardware:</h3>
                    <p className="mt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Consult our <Link href="/players/perfect-player" className="text-primary underline">Perfect Player guide</Link>. Although Perfect Player is a legacy application no longer actively maintained on Google Play, its low memory footprint suits older Android set-top boxes.
                    </p>
                  </div>
                </div>
              </div>

              {/* Protocol Guides */}
              <div>
                <h3 className="font-headline text-xl font-bold tracking-tight text-foreground">
                  <Link href="/guides">Essential Streaming Guides</Link>
                </h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2 text-xs">
                  <Link href="/guides/what-are-xtream-codes" className="rounded-lg border border-white/[0.06] p-3 hover:bg-white/[0.03] transition-colors block">
                    <div className="font-semibold text-foreground">What Are Xtream Codes?</div>
                    <div className="text-muted-foreground mt-1">How API authentication streamlines IPTV setup.</div>
                  </Link>
                  <Link href="/guides/what-is-m3u" className="rounded-lg border border-white/[0.06] p-3 hover:bg-white/[0.03] transition-colors block">
                    <div className="font-semibold text-foreground">What Is an M3U Playlist?</div>
                    <div className="text-muted-foreground mt-1">Understanding playlist URLs and M3U Plus tags.</div>
                  </Link>
                  <Link href="/guides/what-is-epg" className="rounded-lg border border-white/[0.06] p-3 hover:bg-white/[0.03] transition-colors block">
                    <div className="font-semibold text-foreground">How EPG Schedules Work</div>
                    <div className="text-muted-foreground mt-1">XMLTV guide mapping and schedule synchronization.</div>
                  </Link>
                  <Link href="/help/iptv-buffering" className="rounded-lg border border-white/[0.06] p-3 hover:bg-white/[0.03] transition-colors block">
                    <div className="font-semibold text-foreground">How to Fix IPTV Buffering</div>
                    <div className="text-muted-foreground mt-1">Eliminating jitter, packet loss, and ISP throttling.</div>
                  </Link>
                </div>
              </div>

              {/* FAQs */}
              <div>
                <h2 className="font-headline text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Frequently Asked Questions About IPTV Players
                </h2>
                <div className="mt-6 divide-y divide-white/[0.06] rounded-xl border border-white/[0.08] bg-white/[0.02]">
                  {faqs.map((faq, index) => (
                    <div key={index} className="p-5">
                      <h3 className="font-headline text-base font-semibold text-foreground">
                        {faq.question}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar CTA */}
            <div className="space-y-6 lg:col-span-4">
              <Card className="border-primary/20 bg-primary/[0.03]">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">Test with TryIPTV</CardTitle>
                  <CardDescription className="text-xs">
                    Compatible with every player on this page
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>{PRODUCT_TRUTHS.connections} simultaneous stream connections</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Over {PRODUCT_TRUTHS.channels} live global channels</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Full Xtream Codes API &amp; M3U Plus URLs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Anti-freeze server network</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button asChild className="w-full">
                      <Link href="/iptv-free-trial">
                        Start 24-Hour Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <p className="mt-2 text-center text-[11px] text-muted-foreground">
                      Instant setup credentials delivered via email
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Hardware Setup Guides */}
              <Card className="border-white/[0.08] bg-white/[0.02]">
                <CardHeader>
                  <CardTitle className="text-base text-foreground">Device Installation Guides</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-xs">
                  <Link href="/setup" className="block text-primary font-semibold hover:underline">
                    → Universal IPTV Setup Guide
                  </Link>
                  <Link href="/devices/firestick-iptv" className="block text-muted-foreground hover:text-primary">
                    → Amazon Firestick IPTV Setup
                  </Link>
                  <Link href="/devices/android-tv-iptv" className="block text-muted-foreground hover:text-primary">
                    → Android TV &amp; Google TV Setup
                  </Link>
                  <Link href="/devices/apple-tv-iptv" className="block text-muted-foreground hover:text-primary">
                    → Apple TV IPTV Setup
                  </Link>
                  <Link href="/devices/samsung-tv-iptv" className="block text-muted-foreground hover:text-primary">
                    → Samsung Smart TV (Tizen) Setup
                  </Link>
                  <Link href="/devices/lg-tv-iptv" className="block text-muted-foreground hover:text-primary">
                    → LG Smart TV (webOS) Setup
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
