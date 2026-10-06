import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertTriangle, ShieldCheck, Smartphone, Tv, Cast, Sparkles, HelpCircle, Download, FileText, Sliders } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Container } from "@/components/shared/Container";
import { PlayerQuickAnswer } from "@/components/players/PlayerQuickAnswer";
import { Schema } from "@/components/shared/Schema";
import { Section } from "@/components/shared/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { generateArticleSchema, generateBreadcrumbSchema, generateFAQPageSchema } from "@/lib/schema";
import { PRODUCT_TRUTHS, SITE_URL, generateMetadata as generatePageMetadata } from "@/lib/site-config";

const title = "Televizo IPTV Player Setup Guide: Features, Chromecast & Sideloading";
const description =
  "Comprehensive guide to setting up Televizo IPTV Player by Andrey Menscikov. Learn how to configure Xtream Codes, cast to Chromecast, sideload on Fire TV, and customize playback.";
const canonical = "/players/televizo";
const publishedDate = "2026-10-04";

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

const faqs = [
  {
    question: "Who develops Televizo, and which operating systems are supported?",
    answer:
      "Televizo is developed independently by Andrey Menscikov (televizo.net). It is officially available for Android smartphones, Android tablets, and Android TV / Google TV via the Google Play Store. The developer's official distribution channels do not list applications for Apple iOS, tvOS, or Samsung Tizen / LG webOS smart TVs. While not listed on the Amazon Appstore, the official Android APK can be directly downloaded from televizo.net and sideloaded onto Amazon Fire TV devices.",
  },
  {
    question: "How does Televizo's pricing model compare to subscription players like TiviMate?",
    answer:
      "Televizo operates on a freemium model. Core video playback is free with standard in-app advertisements. Premium upgrade options are available through the application via Google Play to remove advertising, unlock multiple playlist and EPG management, enable parental controls, and allow backup and restore of channel favorites.",
  },
  {
    question: "Why does Chromecast casting fail or show a black screen when casting from Televizo?",
    answer:
      "Televizo includes a native Google Cast button on mobile devices. When casting, Televizo does not transcode video on your phone; instead, it sends the raw stream URL directly to your Chromecast hardware. Most standalone Chromecast pucks cannot natively decode raw MPEG-TS (.ts) containers or multi-channel AC3 audio tracks. If a live channel fails to cast, change your stream format from MPEG-TS to HLS (.m3u8) in your IPTV provider portal or test an alternate channel encoded in AAC/H.264.",
  },
  {
    question: "How do I install Televizo on an Amazon Fire TV Stick?",
    answer:
      "Because Televizo is not hosted on the Amazon Appstore, install the official Android APK directly from televizo.net using the Downloader app. Refer to our Firestick IPTV guide for the step-by-step process of enabling Developer Options and Unknown Apps permissions.",
  },
  {
    question: "Can I use both Xtream Codes and M3U playlists in Televizo?",
    answer:
      "Yes. Televizo natively supports both Xtream Codes API (Server URL, username, and password) and M3U / M3U8 playlists (via web URL or local file storage). It also supports external XMLTV EPG sources (uncompressed .xml or compressed .xml.gz) and automatically maps program schedules to channel display names.",
  },
];

const articleSchema = generateArticleSchema({
  headline: title,
  description,
  datePublished: publishedDate,
  dateModified: publishedDate,
  url: `${SITE_URL}${canonical}`,
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", item: `${SITE_URL}/` },
  { name: "Players", item: `${SITE_URL}/players` },
  { name: "Televizo", item: `${SITE_URL}${canonical}` },
]);

const faqSchema = generateFAQPageSchema(faqs);

export default function TelevizoPage() {
  return (
    <>
      <Schema id="article" schema={articleSchema} />
      <Schema id="breadcrumb" schema={breadcrumbSchema} />
      <Schema id="faq" schema={faqSchema} />

      <Section className="relative overflow-hidden border-b border-white/[0.07] pt-12 pb-14 sm:pt-16 sm:pb-20">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
        <Container className="relative">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Players", href: "/players" },
              { label: "Televizo" },
            ]}
          />

          <div className="mt-8 max-w-4xl">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-primary">
              IPTV Player Architecture & Guide
            </span>
            <h1 className="mt-3 font-headline text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Televizo IPTV Player Setup: Hybrid Mobile/TV UI & Optimization
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Televizo (developed by Andrey Menscikov) is renowned for having one of the cleanest, most fluid user interfaces in the IPTV landscape. Designed to bridge the gap between touchscreen mobile convenience and traditional television remote navigation, Televizo delivers rapid playlist indexing, built-in Chromecast casting, and optional in-app Premium upgrades.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 font-medium text-foreground">
                <Smartphone className="h-3.5 w-3.5 text-primary" /> Touch &amp; Remote Adaptive UI
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 font-medium text-foreground">
                <Cast className="h-3.5 w-3.5 text-primary" /> Built-in Google Cast
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 font-medium text-foreground">
                <Sparkles className="h-3.5 w-3.5 text-primary" /> Optional Premium Upgrade
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 font-medium text-foreground">
                <Download className="h-3.5 w-3.5 text-primary" /> Sideloadable on Fire OS
              </span>
            </div>
            <PlayerQuickAnswer player="Televizo" summary="Televizo is an IPTV player used to organize and play a provider's playlists. Install the compatible app for your device, add the supplied M3U or Xtream Codes details, allow the playlist and EPG to update, then test several channels." devices={[{ href: "/devices/android-tv-iptv", label: "Android TV setup" }, { href: "/devices/firestick-iptv", label: "Firestick setup" }, { href: "/devices/chromecast-iptv", label: "Chromecast setup" }]} guides={[{ href: "/guides/m3u-vs-xtream-codes", label: "Choose a login format" }, { href: "/guides/what-is-epg", label: "Understand EPG data" }]} help={[{ href: "/help/m3u-not-loading", label: "Playlist troubleshooting" }]} />
          </div>
        </Container>
      </Section>

      <Section className="py-12 sm:py-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="space-y-12 lg:col-span-8">
              {/* Hybrid UI Architecture */}
              <div>
                <h2 className="font-headline text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Adaptive Design: Why Televizo Excels on Phones, Tablets &amp; TV Sets
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <p>
                    A core problem in the IPTV ecosystem is that software is almost always polarized: players like TiviMate are strictly optimized for TV remotes and borderline unusable on smartphones, while legacy mobile players feel clumsy when operated by a TV remote D-pad.
                  </p>
                  <p>
                    Televizo resolves this dilemma by dynamically altering its UI layout based on device orientation and input hardware:
                  </p>
                  <div className="grid gap-4 pt-2 sm:grid-cols-2">
                    <Card className="border-white/[0.08] bg-white/[0.02]">
                      <CardHeader className="p-4">
                        <CardTitle className="text-base text-foreground">Mobile &amp; Tablet Mode</CardTitle>
                        <CardDescription className="text-xs">Gesture-Driven Touch Interface</CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 pt-0 text-xs text-muted-foreground">
                        Supports vertical gesture swipes for volume and screen brightness, pinch-to-zoom aspect ratios, floating Picture-in-Picture (PiP), and instant Google Cast handoff to smart speakers and screens.
                      </CardContent>
                    </Card>
                    <Card className="border-white/[0.08] bg-white/[0.02]">
                      <CardHeader className="p-4">
                        <CardTitle className="text-base text-foreground">Television Remote Mode</CardTitle>
                        <CardDescription className="text-xs">D-Pad &amp; Grid-Focused Navigation</CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 pt-0 text-xs text-muted-foreground">
                        Automatically active on Android TV and Firestick. Replaces touch menus with an intuitive overlay, quick channel carousel, program schedule bar, and customizable D-pad shortcuts (OK for channel list, Left/Right for group switching).
                      </CardContent>
                    </Card>
                  </div>
                  <p>
                    Furthermore, Televizo is written in clean, modern Kotlin code with asynchronous database indexing. While older players freeze for up to a minute when loading playlists containing 40,000+ VOD items and live channels, Televizo loads them incrementally in the background without UI stutter.
                  </p>
                </div>
              </div>

              {/* Technical Profile Table */}
              <div>
                <h2 className="font-headline text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Televizo Technical Specification &amp; Platform Matrix
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Official specifications for Televizo IPTV Player based on releases by Andrey Menscikov.
                </p>
                <div className="mt-6 overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.02]">
                  <table className="w-full text-left text-sm">
                    <tbody className="divide-y divide-white/[0.06]">
                      <tr className="bg-white/[0.01]">
                        <td className="p-4 font-mono text-xs font-medium text-muted-foreground">Developer</td>
                        <td className="p-4 font-medium text-foreground">Andrey Menscikov (televizo.net / support@televizo.net)</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-mono text-xs font-medium text-muted-foreground">Official App Store Distribution</td>
                        <td className="p-4 text-muted-foreground">Google Play Store (Android Phones, Tablets, Android TV, Google TV)</td>
                      </tr>
                      <tr className="bg-white/[0.01]">
                        <td className="p-4 font-mono text-xs font-medium text-muted-foreground">Fire TV Availability</td>
                        <td className="p-4 text-muted-foreground">Sideloadable via Downloader or official APK from televizo.net (Not in Amazon Appstore)</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-mono text-xs font-medium text-muted-foreground">iOS / Apple TV / Windows</td>
                        <td className="p-4 text-muted-foreground">The developer&apos;s official channels do not list iOS, Apple TV, or Windows apps (Android ecosystem only)</td>
                      </tr>
                      <tr className="bg-white/[0.01]">
                        <td className="p-4 font-mono text-xs font-medium text-muted-foreground">Authentication Protocols</td>
                        <td className="p-4 text-muted-foreground">Xtream Codes API, M3U / M3U8 Playlist URL, Local File Import</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-mono text-xs font-medium text-muted-foreground">EPG Protocols</td>
                        <td className="p-4 text-muted-foreground">XMLTV (HTTP URL, local file, or compressed .xml.gz archive)</td>
                      </tr>
                      <tr className="bg-white/[0.01]">
                        <td className="p-4 font-mono text-xs font-medium text-muted-foreground">Casting Capabilities</td>
                        <td className="p-4 text-muted-foreground">Native Google Cast (Chromecast protocol); direct stream URL passthrough</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-mono text-xs font-medium text-muted-foreground">Pricing Model</td>
                        <td className="p-4 text-muted-foreground">Free (ad-supported) with optional in-app Premium upgrade options</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Step-by-Step Setup */}
              <div>
                <h2 className="font-headline text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Step-by-Step: Adding TryIPTV to Televizo
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  You can connect your TryIPTV service using either Xtream Codes credentials (recommended) or an M3U playlist URL:
                </p>

                <div className="mt-6 space-y-6">
                  <div className="flex gap-4 rounded-xl border border-white/[0.08] bg-white/[0.02] p-5">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20 font-mono text-sm font-bold text-primary">
                      1
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-headline text-base font-bold text-foreground">
                        Open Settings &gt; Playlists
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Launch Televizo. On the home screen, tap the gear icon (Settings) in the top-right corner or on the side navigation bar, then select <strong>Playlists</strong>.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 rounded-xl border border-white/[0.08] bg-white/[0.02] p-5">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20 font-mono text-sm font-bold text-primary">
                      2
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-headline text-base font-bold text-foreground">
                        Choose Your Connection Method
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Click the <strong>&quot;+&quot; (Add Playlist)</strong> button. Televizo gives you two primary options:
                      </p>
                      <ul className="list-inside list-disc space-y-1 text-xs text-muted-foreground sm:text-sm">
                        <li><strong>Xtream Codes (Recommended):</strong> Enter Playlist Name (&quot;TryIPTV&quot;), Server Address, Username, and Password.</li>
                        <li><strong>New M3U Playlist:</strong> Enter Playlist Name and paste your complete M3U Plus URL.</li>
                      </ul>
                      <p className="text-xs text-muted-foreground">
                        Not sure which format to use? Read our comprehensive comparison on{" "}
                        <Link href="/guides/m3u-vs-xtream-codes" className="text-primary underline hover:text-primary/80">
                          M3U vs. Xtream Codes
                        </Link>.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 rounded-xl border border-white/[0.08] bg-white/[0.02] p-5">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20 font-mono text-sm font-bold text-primary">
                      3
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-headline text-base font-bold text-foreground">
                        Configure Optional EPG Schedule
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        If using Xtream Codes, Televizo automatically pulls the associated EPG. If using an M3U link, navigate to Settings &gt; <strong>EPG</strong>, click <strong>Add EPG</strong>, and enter your XMLTV link to populate channel programming schedules.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 rounded-xl border border-white/[0.08] bg-white/[0.02] p-5">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20 font-mono text-sm font-bold text-primary">
                      4
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-headline text-base font-bold text-foreground">
                        Save and Start Streaming
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Tap the checkmark icon to confirm. Televizo will parse categories and organize your stream channels, VOD movies, and series with full poster art and schedule metadata.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sideloading on Firestick */}
              <div>
                <h2 className="font-headline text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Installing Televizo on Amazon Fire TV
                </h2>
                <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <p>
                    Because Televizo is not hosted in the Amazon Appstore, download the official Android APK directly from developer Andrey Menscikov by entering <code className="rounded bg-white/[0.05] px-1.5 py-0.5 text-foreground">televizo.net</code> into the Downloader app.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    For complete step-by-step instructions on configuring Developer Options and Unknown Apps permissions on Fire OS, refer to our dedicated{" "}
                    <Link href="/devices/firestick-iptv" className="text-primary underline hover:text-primary/80">
                      Firestick IPTV setup guide
                    </Link>.
                  </p>
                </div>
              </div>

              {/* Chromecast Analysis */}
              <div>
                <h2 className="font-headline text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Chromecast Casting: Technical Capabilities &amp; Codec Constraints
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <p>
                    Televizo includes a Google Cast button in the top right corner of the video player on Android phones and tablets. However, understanding how Google Cast operates prevents common streaming confusion:
                  </p>
                  <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-5 space-y-4">
                    <div className="flex items-start gap-3">
                      <Cast className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-foreground text-sm">Direct URL Passthrough (No Phone Transcoding)</h4>
                        <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                          When you cast a channel from Televizo, your smartphone does not process or re-encode video frames. Instead, it instructs your Chromecast device to establish its own direct HTTP stream to the IPTV server.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 border-t border-white/[0.06] pt-4">
                      <AlertTriangle className="h-5 w-5 shrink-0 text-amber-400 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-amber-300 text-sm">Container &amp; Codec Limitations on Chromecast Hardware</h4>
                        <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                          Older Chromecast dongles (Gen 2 and Gen 3) only support MP4 and HLS containers with stereo AAC audio. If you attempt to cast a raw MPEG-TS (.ts) live feed with multi-channel AC3/EAC3 audio, the Chromecast will fail to play audio or display an unsupported media format error. If casting is essential, configure your TryIPTV playlist output format to HLS. Learn more in our dedicated{" "}
                          <Link href="/devices/chromecast-iptv" className="text-primary underline hover:text-primary/80">
                            Chromecast IPTV Guide
                          </Link>.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Troubleshooting Matrix */}
              <div>
                <h2 className="font-headline text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Televizo Real-World Troubleshooting Matrix
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Common operational errors in Televizo and verified resolutions:
                </p>

                <div className="mt-6 space-y-4">
                  <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="font-mono text-xs font-semibold text-red-400">Issue: Playback Error 403 / Forbidden</span>
                        <h4 className="mt-1 font-semibold text-foreground text-base">Server Security Firewall or Concurrent Stream Limit</h4>
                      </div>
                      <ShieldCheck className="h-5 w-5 shrink-0 text-red-400" />
                    </div>
                    <div className="mt-3 space-y-2 text-xs text-muted-foreground">
                      <p><strong>Root Cause:</strong> Either your active connections exceed your plan limit, or the IPTV server requires a standard browser User-Agent header.</p>
                      <p><strong>Resolution:</strong> In Televizo, edit your playlist settings &gt; expand <em>Advanced</em> &gt; set <strong>User-Agent</strong> to <code className="rounded bg-white/[0.05] px-1 py-0.5 text-foreground">VLC/3.0.18</code> or leave blank. Ensure no other device on your network is using your TryIPTV connection simultaneously beyond your plan allowance.</p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="font-mono text-xs font-semibold text-amber-400">Issue: Subtitles or Audio Track Missing</span>
                        <h4 className="mt-1 font-semibold text-foreground text-base">Internal Player Codec Track Selection</h4>
                      </div>
                      <Sliders className="h-5 w-5 shrink-0 text-amber-400" />
                    </div>
                    <div className="mt-3 space-y-2 text-xs text-muted-foreground">
                      <p><strong>Root Cause:</strong> Secondary audio and subtitle streams are present in the broadcast but not auto-selected.</p>
                      <p><strong>Resolution:</strong> During active playback, tap the screen or press OK on your remote, select the Speech Bubble / Settings icon in the player control bar, and manually select your preferred audio track (e.g., English AAC, Spanish AC3) or subtitle language.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQs */}
              <div>
                <h2 className="font-headline text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Frequently Asked Questions About Televizo
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

            {/* Sidebar */}
            <div className="space-y-6 lg:col-span-4">
              <Card className="border-primary/20 bg-primary/[0.03]">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">TryIPTV + Televizo</CardTitle>
                  <CardDescription className="text-xs">
                    Lightweight streaming with instant channel switching
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>{PRODUCT_TRUTHS.connections} simultaneous device connections</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Over {PRODUCT_TRUTHS.channels} global live channels</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Fast XMLTV EPG schedule synchronization</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Compatible with Xtream Codes &amp; M3U</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button asChild className="w-full">
                      <Link href="/iptv-free-trial">
                        Start 24-Hour Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <p className="mt-2 text-center text-[11px] text-muted-foreground">
                      Credentials typically delivered by email within 5–15 minutes
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Related Player Comparisons */}
              <Card className="border-white/[0.08] bg-white/[0.02]">
                <CardHeader>
                  <CardTitle className="text-base text-foreground">Explore Alternative Players</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Link
                    href="/players/tivimate"
                    className="group block rounded-lg border border-white/[0.06] p-3 transition-colors hover:border-white/[0.15] hover:bg-white/[0.03]"
                  >
                    <div className="font-semibold text-foreground group-hover:text-primary text-sm">
                      TiviMate IPTV Player
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Dedicated television remote interface and SMB DVR recording.
                    </div>
                  </Link>

                  <Link
                    href="/players/xciptv"
                    className="group block rounded-lg border border-white/[0.06] p-3 transition-colors hover:border-white/[0.15] hover:bg-white/[0.03]"
                  >
                    <div className="font-semibold text-foreground group-hover:text-primary text-sm">
                      XCIPTV Player
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Dual playback engines (ExoPlayer &amp; VLC) with multi-screen grid.
                    </div>
                  </Link>

                  <Link
                    href="/players/iptv-smarters"
                    className="group block rounded-lg border border-white/[0.06] p-3 transition-colors hover:border-white/[0.15] hover:bg-white/[0.03]"
                  >
                    <div className="font-semibold text-foreground group-hover:text-primary text-sm">
                      IPTV Smarters Pro
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Universal compatibility across iOS, Samsung Tizen, and LG webOS.
                    </div>
                  </Link>

                  <Link
                    href="/players/ott-navigator"
                    className="group block rounded-lg border border-white/[0.06] p-3 transition-colors hover:border-white/[0.15] hover:bg-white/[0.03]"
                  >
                    <div className="font-semibold text-foreground group-hover:text-primary text-sm">
                      OTT Navigator IPTV
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Advanced codecs, Studio Mode, and deep customization.
                    </div>
                  </Link>
                </CardContent>
              </Card>

              {/* Protocol Guides */}
              <Card className="border-white/[0.08] bg-white/[0.02]">
                <CardHeader>
                  <CardTitle className="text-base text-foreground">IPTV Knowledge Base</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-xs">
                  <Link href="/guides/what-is-m3u" className="block text-muted-foreground hover:text-primary">
                    → What Is an M3U Playlist &amp; How Does It Work?
                  </Link>
                  <Link href="/guides/what-are-xtream-codes" className="block text-muted-foreground hover:text-primary">
                    → How Xtream Codes API Authentication Works
                  </Link>
                  <Link href="/devices/chromecast-iptv" className="block text-muted-foreground hover:text-primary">
                    → Chromecast IPTV Streaming Guide
                  </Link>
                  <Link href="/help/epg-not-working" className="block text-muted-foreground hover:text-primary">
                    → How to Fix Missing or Outdated EPG Schedules
                  </Link>
                </CardContent>
              </Card>

              {/* Official Verification Reference */}
              <div className="rounded-xl border border-white/[0.08] bg-[#07080a] p-4 text-xs text-muted-foreground space-y-2">
                <span className="font-mono text-[10px] uppercase font-bold text-foreground">Official Developer Resource</span>
                <p>
                  Official developer: Andrey Menscikov.<br />
                  Official site: <a href="https://televizo.net" target="_blank" rel="noopener noreferrer" className="text-primary underline">televizo.net</a>.<br />
                  Available on Google Play Store for Android and Android TV.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
