import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertTriangle, ShieldCheck, Tv, Monitor, Sliders, Volume2, HelpCircle, Gauge, SplitSquareVertical, RefreshCw } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Container } from "@/components/shared/Container";
import { Schema } from "@/components/shared/Schema";
import { Section } from "@/components/shared/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { generateArticleSchema, generateBreadcrumbSchema, generateFAQPageSchema } from "@/lib/schema";
import { PRODUCT_TRUTHS, SITE_URL, generateMetadata as generatePageMetadata } from "@/lib/site-config";

const title = "XCIPTV Player Setup Guide: Dual-Engine Playback, Multi-Screen & Troubleshooting";
const description =
  "Complete guide to setting up and optimizing XCIPTV Player on Android TV and Firestick. Learn how to configure Xtream Codes, switch between ExoPlayer and VLC engines, fix audio sync, and use 4-way multi-screen.";
const canonical = "/players/xciptv";
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
    question: "What is the difference between ExoPlayer and VLC Player inside XCIPTV?",
    answer:
      "XCIPTV includes two pre-installed internal media playback engines: Google ExoPlayer and VLC (LibVLC). In XCIPTV Settings > Player, you can assign different players to Live TV, Movies, and TV Series. ExoPlayer is lightweight and hardware-accelerated, providing rapid channel zap times on modern Android TV chipsets. VLC has wider native container and codec compatibility (handling legacy AC3/EAC3 audio, unusual aspect ratios, and interlaced streams) without crashing. If a live stream or movie experiences black screens or audio sync drift in ExoPlayer, switching that category to VLC resolves the issue in most cases.",
  },
  {
    question: "Can I watch 4 channels simultaneously with XCIPTV's Multi-Screen feature?",
    answer:
      "Yes, XCIPTV has a built-in Multi-Screen feature that splits your television display into 2, 3, or 4 simultaneous live channel feeds. However, each active video pane consumes an independent stream connection from your IPTV provider. Standard single-connection IPTV subscriptions will immediately buffer or drop streams if more than one pane is opened. TryIPTV includes 2 simultaneous connections standard on all plans, allowing 2 active screens side-by-side. To run all 4 screens simultaneously, ensure your provider account has 4 active connections enabled.",
  },
  {
    question: "How do I fix audio out of sync or delayed sound on XCIPTV?",
    answer:
      "Audio desynchronization in XCIPTV usually occurs when the device's hardware audio decoder mishandles surround sound (Dolby Digital Plus / EAC3) passed through ExoPlayer. To fix this: First, go to XCIPTV Settings > Player and change the Live TV player engine to VLC. Second, in your Firestick or Android TV system settings (Display & Sounds > Audio > Surround Sound), change the setting from 'Best Available' to 'PCM' or 'Stereo'. This forces the media stick to decode the audio stream internally before sending it to your TV speakers or soundbar.",
  },
  {
    question: "Is XCIPTV Player free, and does it contain ads?",
    answer:
      "The official XCIPTV Player (developed by OTTRUN) is free to install from Google Play and sideload onto Amazon Fire TV devices. The base public version may display occasional banner ads or prompts in menu screens unless customized. Unlike players requiring subscription companions or Google Play billing, core features such as Xtream Codes login, dual player assignment, EPG integration, and multi-screen are fully operational in the free tier.",
  },
  {
    question: "Why do I get 'Invalid Server URL or Authentication Failed' on XCIPTV?",
    answer:
      "This error occurs during the initial login screen. Verify that the Server URL includes the protocol (e.g., http:// or https://) and the exact port number (e.g., :8080 or :2095) provided in your activation email. Ensure you do not add a trailing slash ('/') at the end of the server URL. Also check that your username and password are typed with exact casing, as IPTV streaming credentials are case-sensitive.",
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
  { name: "XCIPTV Player", item: `${SITE_URL}${canonical}` },
]);

const faqSchema = generateFAQPageSchema(faqs);

export default function XciptvPage() {
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
              { label: "XCIPTV" },
            ]}
          />

          <div className="mt-8 max-w-4xl">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-primary">
              IPTV Player Architecture & Guide
            </span>
            <h1 className="mt-3 font-headline text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              XCIPTV Player Setup: Dual Engines, Multi-Screen & Optimization
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              XCIPTV Player (developed by OTTRUN) is one of the most recognizable Android set-top box media players. Featuring a modular tiled dashboard, native Xtream Codes API architecture, an integrated multi-screen video wall, and hot-swappable dual playback engines (ExoPlayer and VLC), XCIPTV gives streamers granular control over hardware codecs without requiring third-party modifications.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 font-medium text-foreground">
                <Tv className="h-3.5 w-3.5 text-primary" /> Android TV & Fire OS
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 font-medium text-foreground">
                <Sliders className="h-3.5 w-3.5 text-primary" /> Dual Engines: ExoPlayer & VLC
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 font-medium text-foreground">
                <SplitSquareVertical className="h-3.5 w-3.5 text-primary" /> 2 to 4-Way Multi-Screen
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 font-medium text-foreground">
                <Gauge className="h-3.5 w-3.5 text-primary" /> Built-in Speed Test
              </span>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="py-12 sm:py-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="space-y-12 lg:col-span-8">
              {/* Architecture Overview */}
              <div>
                <h2 className="font-headline text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  XCIPTV Architecture: Why the Dual Player System Matters
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <p>
                    Most television media players rely on a single playback library. When an IPTV provider serves a live channel with an unusual audio container (such as multi-channel AC3 or raw AAC) or a high-framerate sports stream formatted in interlaced MPEG-TS, single-engine players either drop audio, stutter, or display a black screen.
                  </p>
                  <p>
                    XCIPTV solves this architectural constraint by integrating two distinct internal playback libraries directly into the APK:
                  </p>
                  <div className="grid gap-4 pt-2 sm:grid-cols-2">
                    <Card className="border-white/[0.08] bg-white/[0.02]">
                      <CardHeader className="p-4">
                        <CardTitle className="text-base text-foreground">Built-in ExoPlayer</CardTitle>
                        <CardDescription className="text-xs">Google&apos;s Native Android Media Engine</CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 pt-0 text-xs text-muted-foreground">
                        Extremely low memory footprint with direct hardware-accelerated GPU pipelines. Best for rapid channel switching, standard 1080p60 H.264 streams, and minimal CPU utilization on budget streaming sticks.
                      </CardContent>
                    </Card>
                    <Card className="border-white/[0.08] bg-white/[0.02]">
                      <CardHeader className="p-4">
                        <CardTitle className="text-base text-foreground">Built-in VLC (LibVLC)</CardTitle>
                        <CardDescription className="text-xs">VideoLAN Open Source Media Core</CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 pt-0 text-xs text-muted-foreground">
                        Includes extensive software decoders for exotic audio tracks (EAC3, DTS), progressive/interlaced conversions, and HEVC/H.265 video. Best when an audio track fails or video desynchronizes in ExoPlayer.
                      </CardContent>
                    </Card>
                  </div>
                  <p>
                    Crucially, XCIPTV allows users to route these engines independently: you can assign ExoPlayer to Live TV for millisecond channel changes, while assigning VLC to VOD Movies and Series to ensure perfect audio synchronization across 4K Dolby digital film tracks.
                  </p>
                </div>
              </div>

              {/* Technical Profile Table */}
              <div>
                <h2 className="font-headline text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  XCIPTV Technical Specification & Compatibility
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Official specifications for XCIPTV Player based on current releases by OTTRUN.
                </p>
                <div className="mt-6 overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.02]">
                  <table className="w-full text-left text-sm">
                    <tbody className="divide-y divide-white/[0.06]">
                      <tr className="bg-white/[0.01]">
                        <td className="p-4 font-mono text-xs font-medium text-muted-foreground">Primary Developer</td>
                        <td className="p-4 font-medium text-foreground">OTTRUN (ottrun.com)</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-mono text-xs font-medium text-muted-foreground">Supported Platforms</td>
                        <td className="p-4 text-muted-foreground">Android TV, Google TV, Android Phones/Tablets, Amazon Fire OS (Firestick & Fire TV Cube)</td>
                      </tr>
                      <tr className="bg-white/[0.01]">
                        <td className="p-4 font-mono text-xs font-medium text-muted-foreground">Login Protocols</td>
                        <td className="p-4 text-muted-foreground">Xtream Codes API (Native Primary), M3U Playlist URL, Local M3U File</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-mono text-xs font-medium text-muted-foreground">Internal Video Engines</td>
                        <td className="p-4 text-muted-foreground">ExoPlayer (v2.x) and VLC (LibVLC Android) with independent category assignment</td>
                      </tr>
                      <tr className="bg-white/[0.01]">
                        <td className="p-4 font-mono text-xs font-medium text-muted-foreground">Multi-Screen Grid</td>
                        <td className="p-4 text-muted-foreground">2-screen, 3-screen, and 4-screen simultaneous live channel layouts (requires matching stream connections)</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-mono text-xs font-medium text-muted-foreground">Diagnostic Tools</td>
                        <td className="p-4 text-muted-foreground">Integrated network speed test (Ping, Jitter, Download Mb/s)</td>
                      </tr>
                      <tr className="bg-white/[0.01]">
                        <td className="p-4 font-mono text-xs font-medium text-muted-foreground">Metadata Providers</td>
                        <td className="p-4 text-muted-foreground">TMDB / IMDb API integration for VOD movie posters, cast lists, ratings, and synopsis</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-mono text-xs font-medium text-muted-foreground">EPG Architecture</td>
                        <td className="p-4 text-muted-foreground">Auto-sync with Xtream Codes EPG; manual XMLTV URL support with cache clear function</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Step-by-Step Setup */}
              <div>
                <h2 className="font-headline text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Step-by-Step: Connecting TryIPTV to XCIPTV Player
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  XCIPTV is designed primarily around the Xtream Codes API. Follow these steps to configure your service securely:
                </p>

                <div className="mt-6 space-y-6">
                  <div className="flex gap-4 rounded-xl border border-white/[0.08] bg-white/[0.02] p-5">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20 font-mono text-sm font-bold text-primary">
                      1
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-headline text-base font-bold text-foreground">
                        Install XCIPTV onto your Streaming Device
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        On Android TV or Google TV (Chromecast, Sony TV, Nvidia Shield), install &quot;XCIPTV Player&quot; directly from the Google Play Store. On Amazon Fire TV sticks, install the Downloader application, enable Unknown Sources, and enter the official download URL from OTTRUN. (See our detailed{" "}
                        <Link href="/devices/firestick-iptv" className="text-primary underline hover:text-primary/80">
                          Firestick IPTV setup guide
                        </Link>{" "}
                        for sideloading steps).
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 rounded-xl border border-white/[0.08] bg-white/[0.02] p-5">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20 font-mono text-sm font-bold text-primary">
                      2
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-headline text-base font-bold text-foreground">
                        Select Xtream Codes API Login
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Upon launching the app, select the primary login option: <strong>Xtream Codes API</strong> (or &quot;Enter Xtream API Details&quot;). Do not choose M3U unless you have an explicit standalone file, as Xtream Codes API automatically maps live channels, on-demand movies, series, and the EPG into dedicated categories.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 rounded-xl border border-white/[0.08] bg-white/[0.02] p-5">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20 font-mono text-sm font-bold text-primary">
                      3
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-headline text-base font-bold text-foreground">
                        Input Your TryIPTV Credentials
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Enter the three parameters from your TryIPTV activation confirmation:
                      </p>
                      <ul className="list-inside list-disc space-y-1 text-xs text-muted-foreground sm:text-sm">
                        <li><strong>Server URL:</strong> The server domain and port (e.g., <code className="rounded bg-white/[0.05] px-1.5 py-0.5 text-foreground">http://line.tryiptv.com:8080</code>). Ensure there is no trailing slash.</li>
                        <li><strong>Username:</strong> Your assigned IPTV service username.</li>
                        <li><strong>Password:</strong> Your case-sensitive password.</li>
                      </ul>
                      <p className="text-xs text-muted-foreground">
                        For an overview of how this authentication protocol operates behind the scenes, read our guide on{" "}
                        <Link href="/guides/what-are-xtream-codes" className="text-primary underline hover:text-primary/80">
                          What Are Xtream Codes
                        </Link>.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 rounded-xl border border-white/[0.08] bg-white/[0.02] p-5">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20 font-mono text-sm font-bold text-primary">
                      4
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-headline text-base font-bold text-foreground">
                        Authorize &amp; Wait for Database Synchronization
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Click <strong>Sign In</strong>. XCIPTV will query the server, download category indexes, and populate your Live TV, VOD, Series, and Electronic Program Guide cards. This initial sync typically takes 15 to 45 seconds depending on connection speed.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Optimizing Dual Engines & Audio Sync */}
              <div>
                <h2 className="font-headline text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Optimizing Dual Playback Engines & Audio Sync
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <p>
                    One of the most frequent support tickets in IPTV streaming is audio-video drift—where actors&apos; lips do not match dialogue on high-profile sports or cinema channels. In XCIPTV, this is resolved directly in player settings:
                  </p>
                  <ol className="list-inside list-decimal space-y-3 rounded-xl border border-white/[0.08] bg-white/[0.02] p-5 text-sm">
                    <li>
                      <strong className="text-foreground">Navigate to Settings:</strong> On the main XCIPTV dashboard, select the gear icon in the top right corner.
                    </li>
                    <li>
                      <strong className="text-foreground">Open Player Selection:</strong> Select <strong>Player</strong> from the settings menu.
                    </li>
                    <li>
                      <strong className="text-foreground">Assign Players by Stream Type:</strong>
                      <ul className="mt-2 ml-4 list-disc space-y-1 text-xs text-muted-foreground sm:text-sm">
                        <li><strong>Live TV:</strong> Set to <em>ExoPlayer</em>. If audio sync drifts or certain channels buffer continually, toggle Live TV to <em>VLC</em>.</li>
                        <li><strong>VOD (Movies):</strong> Set to <em>VLC Player</em>. VLC contains wider audio codec decoders for DTS and multi-channel AC3 files.</li>
                        <li><strong>Series:</strong> Set to <em>VLC Player</em>.</li>
                      </ul>
                    </li>
                    <li>
                      <strong className="text-foreground">Configure Hardware Acceleration:</strong> Under Player settings, verify that <em>Hardware Acceleration</em> is enabled. If you run XCIPTV on an older 1st-generation Fire TV Stick with limited GPU power, turning off Hardware Acceleration allows the CPU to decode via software fallback.
                    </li>
                  </ol>
                </div>
              </div>

              {/* Multi-Screen Feature Explained */}
              <div>
                <h2 className="font-headline text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Configuring Multi-Screen (2 to 4 Channel Grid)
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <p>
                    XCIPTV includes a built-in Multi-Screen feature ideal for sports enthusiasts who want to follow multiple live matches at the same time:
                  </p>
                  <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-5 space-y-4">
                    <div className="flex items-start gap-3">
                      <SplitSquareVertical className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-foreground text-sm">How Multi-Screen Works in XCIPTV</h4>
                        <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                          From the home dashboard, click <strong>Multi Screen</strong>. Choose your layout (2-Screen Top/Bottom, 2-Screen Side-by-Side, 3-Screen, or 4-Screen Quad). In each quadrant, click the &quot;+&quot; icon to assign any live channel from your playlist. Use your remote D-pad to switch active audio between panes.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 border-t border-white/[0.06] pt-4">
                      <AlertTriangle className="h-5 w-5 shrink-0 text-amber-400 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-amber-300 text-sm">Important: Concurrent Connection Math</h4>
                        <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                          Every open pane in a multi-screen grid initiates an active HTTP socket to the streaming server. If you run 4 screens on a provider plan that only permits 1 connection, 3 panes will immediately display black screens or disconnect. All TryIPTV plans include{" "}
                          <strong className="text-foreground">{PRODUCT_TRUTHS.connections} simultaneous connections</strong>, allowing full 2-screen side-by-side streaming without extra subscription costs.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Troubleshooting Matrix */}
              <div>
                <h2 className="font-headline text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  XCIPTV Real-World Troubleshooting Matrix
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Isolate whether issues originate from the player application, streaming credentials, or local hardware:
                </p>

                <div className="mt-6 space-y-4">
                  <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="font-mono text-xs font-semibold text-red-400">Issue: Audio Out of Sync / Lips Moving Before Sound</span>
                        <h4 className="mt-1 font-semibold text-foreground text-base">Audio Desynchronization in ExoPlayer</h4>
                      </div>
                      <Volume2 className="h-5 w-5 shrink-0 text-red-400" />
                    </div>
                    <div className="mt-3 space-y-2 text-xs text-muted-foreground">
                      <p><strong>Root Cause:</strong> ExoPlayer passing Dolby Digital Plus stream to a television that only accepts 2-channel PCM stereo.</p>
                      <p><strong>Resolution:</strong> 1) Open XCIPTV Settings &gt; Player &gt; switch Live TV player to VLC. 2) In Firestick / Android TV OS settings &gt; Display &amp; Sounds &gt; Audio &gt; Surround Sound, switch from &quot;Best Available&quot; to &quot;PCM&quot; or &quot;Stereo&quot;.</p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="font-mono text-xs font-semibold text-amber-400">Issue: Continuous Buffering on Live Channels</span>
                        <h4 className="mt-1 font-semibold text-foreground text-base">Network Jitter or Low Cache Allocation</h4>
                      </div>
                      <Gauge className="h-5 w-5 shrink-0 text-amber-400" />
                    </div>
                    <div className="mt-3 space-y-2 text-xs text-muted-foreground">
                      <p><strong>Root Cause:</strong> Local Wi-Fi interference or ISP bandwidth throttling during peak sports broadcast hours.</p>
                      <p><strong>Resolution:</strong> Use XCIPTV&apos;s built-in <strong>Speed Test</strong> (found on the main menu). If download speed is below 25 Mb/s or jitter exceeds 20ms, connect via Ethernet or 5GHz Wi-Fi. Consult our detailed{" "}
                      <Link href="/help/iptv-buffering" className="text-primary underline hover:text-primary/80">
                        IPTV Buffering Diagnosis Guide
                      </Link> for step-by-step ISP throttling bypass techniques.</p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="font-mono text-xs font-semibold text-blue-400">Issue: Electronic Program Guide (EPG) Empty or Missing</span>
                        <h4 className="mt-1 font-semibold text-foreground text-base">Outdated or Corrupted EPG Database Cache</h4>
                      </div>
                      <RefreshCw className="h-5 w-5 shrink-0 text-blue-400" />
                    </div>
                    <div className="mt-3 space-y-2 text-xs text-muted-foreground">
                      <p><strong>Root Cause:</strong> Android cached an expired XMLTV index, preventing fresh schedule queries.</p>
                      <p><strong>Resolution:</strong> In XCIPTV, navigate to Settings &gt; EPG &gt; click <strong>Update EPG</strong> or <strong>Clear EPG Cache</strong>. Restart the application. Review our complete{" "}
                      <Link href="/help/epg-not-working" className="text-primary underline hover:text-primary/80">
                        EPG Troubleshooting Guide
                      </Link> for additional XMLTV recovery steps.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQs */}
              <div>
                <h2 className="font-headline text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Frequently Asked Questions About XCIPTV
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
                  <CardTitle className="text-lg text-foreground">TryIPTV + XCIPTV</CardTitle>
                  <CardDescription className="text-xs">
                    Optimized Xtream Codes streaming with zero buffering
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>{PRODUCT_TRUTHS.connections} simultaneous streams for Multi-Screen</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>{PRODUCT_TRUTHS.channels} live channels with full EPG</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>High-bitrate FHD &amp; 4K sports servers</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Full Xtream Codes API compatibility</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button asChild className="w-full">
                      <Link href="/iptv-free-trial">
                        Start 24-Hour Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <p className="mt-2 text-center text-[11px] text-muted-foreground">
                      Instant credentials delivery via email
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Related Player Comparisons */}
              <Card className="border-white/[0.08] bg-white/[0.02]">
                <CardHeader>
                  <CardTitle className="text-base text-foreground">Compare Other IPTV Players</CardTitle>
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
                      Best dedicated TV remote interface and SMB DVR recording.
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
                      Broadest cross-platform compatibility (iOS, Samsung, LG).
                    </div>
                  </Link>

                  <Link
                    href="/players/televizo"
                    className="group block rounded-lg border border-white/[0.06] p-3 transition-colors hover:border-white/[0.15] hover:bg-white/[0.03]"
                  >
                    <div className="font-semibold text-foreground group-hover:text-primary text-sm">
                      Televizo IPTV Player
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Clean hybrid mobile/TV interface with Chromecast streaming.
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
                  <CardTitle className="text-base text-foreground">Streaming Knowledge Base</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-xs">
                  <Link href="/guides/what-are-xtream-codes" className="block text-muted-foreground hover:text-primary">
                    → What Are Xtream Codes API Credentials?
                  </Link>
                  <Link href="/guides/m3u-vs-xtream-codes" className="block text-muted-foreground hover:text-primary">
                    → M3U Playlist vs. Xtream Codes Comparison
                  </Link>
                  <Link href="/guides/what-is-epg" className="block text-muted-foreground hover:text-primary">
                    → How Electronic Program Guides (EPG) Work
                  </Link>
                  <Link href="/help/iptv-buffering" className="block text-muted-foreground hover:text-primary">
                    → How to Stop IPTV Buffering Permanently
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
