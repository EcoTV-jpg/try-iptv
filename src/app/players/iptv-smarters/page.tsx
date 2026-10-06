import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertTriangle, ShieldCheck, Tv, Smartphone, Monitor, Clock, HelpCircle, Layers, Settings, Globe, PlayCircle } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Container } from "@/components/shared/Container";
import { PlayerQuickAnswer } from "@/components/players/PlayerQuickAnswer";
import { Schema } from "@/components/shared/Schema";
import { Section } from "@/components/shared/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { generateArticleSchema, generateBreadcrumbSchema, generateFAQPageSchema } from "@/lib/schema";
import { PRODUCT_TRUTHS, SITE_URL, generateMetadata as generatePageMetadata } from "@/lib/site-config";

const title = "IPTV Smarters Pro Setup Guide: Multi-Platform Login, Settings & Fixes";
const description =
  "Complete setup and configuration guide for IPTV Smarters Pro and Smarters Player Lite. Step-by-step walkthrough for Xtream Codes login, multi-screen, stream formats, and login errors across Firestick, Android, iOS, and Smart TVs.";
const canonical = "/players/iptv-smarters";
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
    question: "Why does the Apple App Store list the app as 'Smarters Player Lite' instead of 'IPTV Smarters Pro'?",
    answer:
      "Because of Apple App Store submission guidelines regarding media player applications, the developer (WHMCS Smarters) publishes the official iOS, iPadOS, and tvOS version under the name 'Smarters Player Lite'. It uses the exact same underlying architecture, category dashboard, and Xtream Codes login engine as IPTV Smarters Pro on Android and Fire TV. Downloading Smarters Player Lite from the official Apple App Store is the legitimate, verified way to run Smarters on iPhone, iPad, and Apple TV.",
  },
  {
    question: "Why do I get 'Failed to Connect' or 'Invalid Details' when logging into IPTV Smarters?",
    answer:
      "A common user-reported login issue in IPTV Smarters occurs when entering a trailing slash ('/') at the end of the Server URL (e.g., entering 'http://server.com:8080/' instead of 'http://server.com:8080'). In community troubleshooting reports, this trailing slash is known to create endpoint concatenation errors (such as '//player_api.php') that prevent the application from reaching authentication services. Also check that your username and password contain no accidental spaces, verify that the server port matches your provider instructions, and ensure your device clock is set to automatic network time.",
  },
  {
    question: "Can I install IPTV Smarters directly on Samsung or LG Smart TVs without a streaming stick?",
    answer:
      "In many geographic regions, IPTV Smarters Pro is available directly in the Samsung Smart Hub (Tizen OS) and LG Content Store / Apps (webOS). Search for 'IPTV Smarters Pro' or 'Smarters Player' using your TV remote. Availability is governed by regional store catalog policies; if the application is not listed in your country's smart TV store, connecting a compatible streaming stick (such as an Amazon Fire TV Stick or Google TV device) provides unrestricted access to the software.",
  },
  {
    question: "Why does IPTV Smarters freeze or crash when loading my channel list?",
    answer:
      "Loading enormous raw M3U files can exhaust available RAM on budget streaming sticks and smart TVs. Selecting 'Login with Xtream Codes API' queries channel categories on demand in smaller JSON chunks instead of buffering the entire playlist into memory at once.",
  },
  {
    question: "How do I switch the built-in media player to VLC inside IPTV Smarters?",
    answer:
      "If you experience audio out-of-sync or video stuttering on certain channels, go to Settings (gear icon in the top right) > Player Selection. Here you can add external players like VLC or MX Player (if installed on your device) and assign them specifically to Live TV, Movies, or Series. Alternatively, go to Player Settings and switch the hardware decoder from Native to Built-in Player.",
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
  { name: "IPTV Smarters", item: `${SITE_URL}${canonical}` },
]);

const faqSchema = generateFAQPageSchema(faqs);

export default function IptvSmartersPage() {
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
              { label: "IPTV Smarters" },
            ]}
          />

          <div className="mt-8 max-w-4xl">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-primary">
              Multi-Platform Player Architecture & Guide
            </span>
            <h1 className="mt-3 font-headline text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              IPTV Smarters Pro: Multi-Platform Setup, Configuration & Troubleshooting Guide
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              IPTV Smarters Pro (developed by WHMCS Smarters) is one of the most widely adopted IPTV media clients globally. Its primary strength is universal cross-platform availability: whether you stream on an Amazon Fire TV Stick, an Android smartphone, an Apple TV, an iPad, a Windows PC, a Mac, or directly on Samsung and LG Smart TVs, Smarters delivers a consistent, familiar dashboard.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 font-medium text-foreground">
                <Globe className="h-3.5 w-3.5 text-primary" /> Fire TV, Android, iOS, Windows, Mac, LG, Samsung
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 font-medium text-foreground">
                <ShieldCheck className="h-3.5 w-3.5 text-primary" /> Xtream Codes API & M3U
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 font-medium text-foreground">
                <Layers className="h-3.5 w-3.5 text-primary" /> Multi-Screen View
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 font-medium text-foreground">
                <PlayCircle className="h-3.5 w-3.5 text-primary" /> External Player Integration
              </span>
            </div>
            <PlayerQuickAnswer player="IPTV Smarters Pro" summary="IPTV Smarters Pro is a multi-platform IPTV player, not a content provider. Install the app for your device, choose the login method your service supplied, enter the credentials or playlist, and then check channel and EPG loading." devices={[{ href: "/devices/firestick-iptv", label: "Firestick setup" }, { href: "/devices/android-tv-iptv", label: "Android TV setup" }, { href: "/devices/samsung-tv-iptv", label: "Samsung TV setup" }, { href: "/devices/lg-tv-iptv", label: "LG TV setup" }]} guides={[{ href: "/guides/m3u-vs-xtream-codes", label: "Choose M3U or Xtream Codes" }, { href: "/guides/what-is-epg", label: "Understand EPG data" }]} help={[{ href: "/help/iptv-login-not-working", label: "Login troubleshooting" }]} />
          </div>
        </Container>
      </Section>

      <Section className="py-12 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_320px]">
            {/* Main Article Content */}
            <div className="space-y-12">
              {/* Critical Clarification: Player vs Service */}
              <div className="rounded-xl border border-primary/20 bg-primary/[0.04] p-6 sm:p-7">
                <div className="flex items-start gap-3.5">
                  <ShieldCheck className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div className="space-y-2">
                    <h2 className="font-headline text-lg font-bold text-foreground">
                      Essential Fact: IPTV Smarters Does Not Provide Content
                    </h2>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      IPTV Smarters Pro is solely an empty media management application developed by <strong>WHMCS Smarters Pvt. Ltd.</strong> It does not host, bundle, or broadcast any television channels, sports packages, or movies. Beware of third-party websites operating under variations of the &ldquo;Smarters&rdquo; trademark to sell subscriptions. To stream, you need valid login credentials from an independent IPTV provider like <Link href="/" className="text-primary underline underline-offset-4">TryIPTV</Link>.
                    </p>
                  </div>
                </div>
              </div>

              {/* What Makes Smarters Unique */}
              <div className="space-y-6">
                <h2 className="font-headline text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  What Distinguishes IPTV Smarters Pro?
                </h2>
                <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                  Unlike specialized players built solely for Android TV remotes (such as TiviMate), IPTV Smarters is built on a responsive multi-platform framework. Here is what defines its user experience:
                </p>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Card className="border-white/[0.08] bg-card/60">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base font-bold text-foreground flex items-center gap-2">
                        <Layers className="h-4 w-4 text-primary" /> Distinctive Category Dashboard
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Smarters separates content into bold, distinct home screen tiles: &ldquo;LIVE TV&rdquo;, &ldquo;MOVIES&rdquo;, &ldquo;SERIES&rdquo;, &ldquo;INSTALL EPG&rdquo;, and &ldquo;MULTI-SCREEN&rdquo;. This layout is intuitive on both touchscreens and television screens.
                    </CardContent>
                  </Card>

                  <Card className="border-white/[0.08] bg-card/60">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base font-bold text-foreground flex items-center gap-2">
                        <Globe className="h-4 w-4 text-primary" /> Unrivaled Device Ecosystem
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Available natively across Android, iOS/Apple TV (&ldquo;Smarters Player Lite&rdquo;), Windows, macOS, Samsung Tizen, and LG webOS. Families with mixed device ecosystems can use the same familiar app on every screen in the household.
                    </CardContent>
                  </Card>

                  <Card className="border-white/[0.08] bg-card/60">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base font-bold text-foreground flex items-center gap-2">
                        <PlayCircle className="h-4 w-4 text-primary" /> Flexible Player Selection (VLC &amp; MX)
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      If your device hardware struggles to decode a particular audio codec (like Dolby Digital 5.1) or video format, Smarters allows you to route streams directly to external players such as VLC or MX Player with a single click.
                    </CardContent>
                  </Card>

                  <Card className="border-white/[0.08] bg-card/60">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base font-bold text-foreground flex items-center gap-2">
                        <Smartphone className="h-4 w-4 text-primary" /> Multi-User Profile Management
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Store multiple IPTV playlists or subscriber accounts on one device. Switching between different accounts takes seconds right from the top right profile icon without re-entering credentials.
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Supported Platforms Breakdown */}
              <div className="space-y-6">
                <h2 className="font-headline text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Platform Installation Directory
                </h2>
                <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                  Installation instructions vary significantly depending on your operating system:
                </p>

                <div className="space-y-4">
                  <div className="rounded-lg border border-white/[0.08] bg-[#07080a] p-5">
                    <h3 className="text-base font-bold text-foreground flex items-center gap-2">
                      <Tv className="h-4 w-4 text-primary" /> Amazon Fire TV Stick / Fire TV Cube
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      IPTV Smarters Pro is frequently absent from the official Amazon Appstore. To install it on Fire TV, launch the <strong>Downloader app</strong> (see our <Link href="/devices/firestick-iptv" className="text-primary underline">Firestick installation guide</Link>), permit unknown apps in Developer Options, and enter the official download code or APK link from WHMCS Smarters.
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/[0.08] bg-[#07080a] p-5">
                    <h3 className="text-base font-bold text-foreground flex items-center gap-2">
                      <Smartphone className="h-4 w-4 text-primary" /> Apple iOS, iPadOS &amp; Apple TV (tvOS)
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Install <a href="https://apps.apple.com/app/smarters-player-lite/id1470535305" target="_blank" rel="noopener noreferrer" className="text-primary underline">Smarters Player Lite on the Apple App Store</a> directly onto your iPhone, iPad, or Apple TV. It operates natively without sideloading. Refer to our <Link href="/devices/apple-tv-iptv" className="text-primary underline">Apple TV IPTV guide</Link> for remote control navigation advice.
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/[0.08] bg-[#07080a] p-5">
                    <h3 className="text-base font-bold text-foreground flex items-center gap-2">
                      <Tv className="h-4 w-4 text-primary" /> Samsung &amp; LG Smart TVs
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      On <strong>Samsung TVs (Tizen OS)</strong>, open the Samsung Smart Hub and search &ldquo;IPTV Smarters Pro&rdquo;. On <strong>LG TVs (webOS)</strong>, open the LG Content Store and search for &ldquo;Smarters Player&rdquo;. Availability can vary by country; see our dedicated <Link href="/devices/samsung-tv-iptv" className="text-primary underline">Samsung TV</Link> and <Link href="/devices/lg-tv-iptv" className="text-primary underline">LG TV</Link> guides if the app is missing in your store.
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/[0.08] bg-[#07080a] p-5">
                    <h3 className="text-base font-bold text-foreground flex items-center gap-2">
                      <Monitor className="h-4 w-4 text-primary" /> Windows PC &amp; macOS
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Download the official desktop client installer (.exe for Windows, .dmg for macOS) directly from the official developer site at <a href="https://www.whmcssmarters.com" target="_blank" rel="noopener noreferrer" className="text-primary underline">whmcssmarters.com</a>. Check our guides for <Link href="/devices/windows-iptv" className="text-primary underline">Windows</Link> and <Link href="/devices/mac-iptv" className="text-primary underline">macOS</Link>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step-by-Step Xtream Codes Setup */}
              <div className="space-y-6">
                <h2 className="font-headline text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Step-by-Step Login Walkthrough (Xtream Codes API)
                </h2>
                <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                  When first launching IPTV Smarters Pro, you will see two login options: &ldquo;Load Your Playlist or File/URL&rdquo; and &ldquo;Login with Xtream Codes API&rdquo;. <strong>Always select &ldquo;Login with Xtream Codes API&rdquo;</strong> for best performance:
                </p>

                <div className="space-y-4">
                  <div className="rounded-xl border border-white/[0.08] bg-[#07080a] p-5">
                    <span className="font-mono text-xs font-bold text-primary">STEP 1</span>
                    <h3 className="mt-1 font-headline text-base font-bold text-foreground">
                      Select &ldquo;Login with Xtream Codes API&rdquo;
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Click the card for Xtream Codes. Do not use the M3U option unless your provider strictly provides a raw file. Learn why in our <Link href="/guides/m3u-vs-xtream-codes" className="text-primary underline">M3U vs Xtream Codes technical comparison</Link>.
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/[0.08] bg-[#07080a] p-5">
                    <span className="font-mono text-xs font-bold text-primary">STEP 2</span>
                    <h3 className="mt-1 font-headline text-base font-bold text-foreground">
                      Fill In the 4 Credentials Fields
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Carefully enter the credentials from your TryIPTV activation email:
                    </p>
                    <ul className="mt-2.5 space-y-1.5 text-xs sm:text-sm text-muted-foreground list-disc pl-5">
                      <li><strong>Any Name:</strong> A descriptive label for your profile (e.g., <code className="text-primary font-mono text-xs">TryIPTV Premium</code>).</li>
                      <li><strong>Username:</strong> Your assigned username (case-sensitive, check for accidental spaces).</li>
                      <li><strong>Password:</strong> Your assigned password (case-sensitive).</li>
                      <li><strong>Server URL:</strong> The full server address, including protocol and port (e.g., <code className="text-primary font-mono text-xs">http://line.tryiptv.com:80</code>). <strong>Crucial: Do not add a trailing slash &ldquo;/&rdquo; at the end.</strong></li>
                    </ul>
                  </div>

                  <div className="rounded-xl border border-white/[0.08] bg-[#07080a] p-5">
                    <span className="font-mono text-xs font-bold text-primary">STEP 3</span>
                    <h3 className="mt-1 font-headline text-base font-bold text-foreground">
                      Click &ldquo;ADD USER&rdquo; and Download Content
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Click <strong>ADD USER</strong>. The app will authenticate against the server and display a progress bar as it indexes your Live Channels, Movies, and Series categories.
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/[0.08] bg-[#07080a] p-5">
                    <span className="font-mono text-xs font-bold text-primary">STEP 4</span>
                    <h3 className="mt-1 font-headline text-base font-bold text-foreground">
                      Download Electronic Program Guide (EPG)
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      From the main dashboard, click <strong>INSTALL EPG</strong>. Smarters will download program schedules for all available channels. Once finished, click into &ldquo;LIVE TV&rdquo; to begin streaming.
                    </p>
                  </div>
                </div>
              </div>

              {/* Critical Settings & Performance Tuning */}
              <div className="space-y-6">
                <h2 className="font-headline text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Essential Settings in IPTV Smarters Pro
                </h2>
                <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                  Configuring these three built-in settings eliminates the vast majority of playback freezes and audio issues:
                </p>

                <div className="space-y-4">
                  <div className="rounded-lg border border-white/[0.07] bg-white/[0.015] p-4 sm:p-5">
                    <h3 className="text-sm sm:text-base font-bold text-foreground flex items-center gap-2">
                      <Settings className="h-4 w-4 text-primary" /> Stream Format: Default / MPEGTS vs. HLS
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Navigate to <strong>Settings &gt; Stream Format</strong> to toggle between <code className="font-mono text-xs text-primary">MPEG-TS (.ts)</code> and <code className="font-mono text-xs text-primary">HLS (.m3u8)</code>. When streaming over Wi-Fi, switching to HLS can improve stability by delivering video in discrete chunks. For broader network troubleshooting, see our <Link href="/help/iptv-buffering" className="text-primary underline">IPTV Buffering Diagnosis Guide</Link>.
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/[0.07] bg-white/[0.015] p-4 sm:p-5">
                    <h3 className="text-sm sm:text-base font-bold text-foreground flex items-center gap-2">
                      <Settings className="h-4 w-4 text-primary" /> Time Format &amp; EPG Time Shift
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Go to <strong>Settings &gt; Time Format</strong> and verify whether your device displays 12-hour or 24-hour time. Then, under <strong>Settings &gt; EPG Time Shift</strong>, you can offset your guide data by +1, +2, -1, or -5 hours if the program schedule is out of sync with your local broadcast schedule. See our <Link href="/help/epg-not-working" className="text-primary underline">EPG Troubleshooting Guide</Link>.
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/[0.07] bg-white/[0.015] p-4 sm:p-5">
                    <h3 className="text-sm sm:text-base font-bold text-foreground flex items-center gap-2">
                      <Settings className="h-4 w-4 text-primary" /> Player Selection (VLC &amp; MX Player)
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Go to <strong>Settings &gt; Player Selection</strong>. You can click &ldquo;Add Player&rdquo; and assign installed third-party video engines (like VLC Media Player) specifically for Movies or Series. This is particularly helpful when watching high-bitrate 4K HDR movies with advanced TrueHD or DTS audio tracks that native TV decoders cannot process.
                    </p>
                  </div>
                </div>
              </div>

              {/* Troubleshooting Matrix */}
              <div className="space-y-6">
                <h2 className="font-headline text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  IPTV Smarters Troubleshooting: Diagnosing Common Errors
                </h2>
                <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                  When encountering issues in Smarters, follow this structured diagnostic guide to identify the real cause:
                </p>

                <div className="overflow-x-auto rounded-lg border border-white/[0.08]">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="border-b border-white/[0.08] bg-white/[0.02] text-foreground">
                      <tr>
                        <th className="p-3.5 sm:p-4 font-semibold">Error Message / Symptom</th>
                        <th className="p-3.5 sm:p-4 font-semibold">Underlying Root Cause</th>
                        <th className="p-3.5 sm:p-4 font-semibold">Corrective Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/[0.06] text-muted-foreground">
                      <tr>
                        <td className="p-3.5 sm:p-4 font-medium text-foreground">&ldquo;Invalid Details&rdquo; or &ldquo;Failed to Authorize&rdquo;</td>
                        <td className="p-3.5 sm:p-4">Server URL trailing slash bug, typo in credentials, or expired subscription.</td>
                        <td className="p-3.5 sm:p-4">Remove any trailing slash &ldquo;/&rdquo; from the Server URL field and verify credentials. If authorization fails, check our <Link href="/help/iptv-login-not-working" className="text-primary underline">authorization error checklist</Link> to test server connectivity and DNS.</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 sm:p-4 font-medium text-foreground">&ldquo;Network Error&rdquo; or Connection Timeout</td>
                        <td className="p-3.5 sm:p-4">ISP blocking IPTV server DNS or IP, or device offline.</td>
                        <td className="p-3.5 sm:p-4">Change device DNS to 1.1.1.1 or 8.8.8.8. Test connection over mobile hotspot or with a VPN enabled.</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 sm:p-4 font-medium text-foreground">Audio plays, but screen remains black</td>
                        <td className="p-3.5 sm:p-4">Hardware video decoding failure on H.264/HEVC stream.</td>
                        <td className="p-3.5 sm:p-4">Go to Settings &gt; Player Selection and switch from Native Player to VLC or Software decoding.</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 sm:p-4 font-medium text-foreground">App crashes during category refresh</td>
                        <td className="p-3.5 sm:p-4">RAM exhaustion from massive playlist data.</td>
                        <td className="p-3.5 sm:p-4">Delete the profile, re-add using Xtream Codes API (not M3U), and clear app data in device system settings.</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 sm:p-4 font-medium text-foreground">Multi-Screen shows playback error in 2nd window</td>
                        <td className="p-3.5 sm:p-4">Provider connection limit exceeded.</td>
                        <td className="p-3.5 sm:p-4">Every active multi-screen box consumes 1 simultaneous stream. TryIPTV accounts support up to 2 concurrent streams.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* FAQs Section */}
              <div className="space-y-6 pt-4">
                <h2 className="font-headline text-2xl font-bold tracking-tight text-foreground sm:text-3xl flex items-center gap-2">
                  <HelpCircle className="h-6 w-6 text-primary" /> Frequently Asked Questions About IPTV Smarters Pro
                </h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="rounded-xl border border-white/[0.08] bg-[#07080a] p-5 sm:p-6">
                      <h3 className="font-headline text-base sm:text-lg font-bold text-foreground">
                        {faq.question}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Educational Guides */}
              <div className="border-t border-white/[0.08] pt-8">
                <h3 className="font-headline text-lg font-bold text-foreground mb-4">
                  Related IPTV Guides &amp; Resources
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <Link href="/players/tivimate" className="flex items-center justify-between p-3 rounded-lg border border-white/[0.06] bg-white/[0.02] hover:border-primary/40 transition-colors">
                    <span>TiviMate IPTV Player Setup Guide</span>
                    <ArrowRight className="h-4 w-4 text-primary" />
                  </Link>
                  <Link href="/devices/apple-tv-iptv" className="flex items-center justify-between p-3 rounded-lg border border-white/[0.06] bg-white/[0.02] hover:border-primary/40 transition-colors">
                    <span>How to Setup IPTV on Apple TV</span>
                    <ArrowRight className="h-4 w-4 text-primary" />
                  </Link>
                  <Link href="/guides/m3u-vs-xtream-codes" className="flex items-center justify-between p-3 rounded-lg border border-white/[0.06] bg-white/[0.02] hover:border-primary/40 transition-colors">
                    <span>M3U vs Xtream Codes Explained</span>
                    <ArrowRight className="h-4 w-4 text-primary" />
                  </Link>
                  <Link href="/help/iptv-login-not-working" className="flex items-center justify-between p-3 rounded-lg border border-white/[0.06] bg-white/[0.02] hover:border-primary/40 transition-colors">
                    <span>IPTV Login Error Troubleshooting</span>
                    <ArrowRight className="h-4 w-4 text-primary" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar Column */}
            <aside className="space-y-6 lg:sticky lg:top-24 self-start">
              <Card className="border-primary/20 bg-[#07080a] shadow-[0_0_24px_rgba(0,240,120,0.04)]">
                <CardHeader className="pb-3">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-primary">
                    Test With TryIPTV
                  </span>
                  <CardTitle className="font-headline text-xl font-extrabold text-foreground">
                    24-Hour Free Trial
                  </CardTitle>
                  <CardDescription className="text-xs text-muted-foreground">
                    Test IPTV Smarters Pro on any device with live sports, premium channels, and 80,000+ VOD titles for free.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-xs text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                      <span>Xtream Codes credentials typically delivered within 5–15 minutes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                      <span>{PRODUCT_TRUTHS.connections} connections for multi-screen testing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                      <span>{PRODUCT_TRUTHS.channels} live channels + full EPG</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                      <span>No payment details needed</span>
                    </li>
                  </ul>

                  <Button asChild className="w-full bg-primary text-black font-semibold hover:bg-primary/90">
                    <Link href="/iptv-free-trial">
                      Get 24h Free Trial <ArrowRight className="ml-1.5 h-4 w-4" />
                    </Link>
                  </Button>

                  <p className="text-[11px] text-center text-muted-foreground">
                    Looking for pricing? Plans start at $16/mo. <Link href="/pricing" className="text-primary underline">View plans</Link>.
                  </p>
                </CardContent>
              </Card>

              {/* Official Developer Reference */}
              <div className="rounded-xl border border-white/[0.08] bg-[#07080a] p-4 text-xs text-muted-foreground space-y-2">
                <span className="font-mono text-[10px] uppercase font-bold text-foreground">Official Developer Resource</span>
                <p>
                  Official developer: WHMCS Smarters.<br />
                  Official website: <a href="https://www.whmcssmarters.com" target="_blank" rel="noopener noreferrer" className="text-primary underline">whmcssmarters.com</a>.<br />
                  Available on Apple App Store as &ldquo;Smarters Player Lite&rdquo;.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  );
}
