import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertTriangle, ShieldCheck, Tv, Sliders, Cpu, Activity, HelpCircle, Layers, Film, RotateCcw } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Container } from "@/components/shared/Container";
import { PlayerQuickAnswer } from "@/components/players/PlayerQuickAnswer";
import { Schema } from "@/components/shared/Schema";
import { Section } from "@/components/shared/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { generateArticleSchema, generateBreadcrumbSchema, generateFAQPageSchema } from "@/lib/schema";
import { PRODUCT_TRUTHS, SITE_URL, generateMetadata as generatePageMetadata } from "@/lib/site-config";

const title = "OTT Navigator IPTV Setup Guide: AFR, MPV Engine & Studio Mode";
const description =
  "Complete guide to OTT Navigator IPTV by SIA Scillarium Studio. Master Auto Frame Rate (AFR), MPV hardware deinterlacing, Studio Mode multi-view, and Xtream Codes setup.";
const canonical = "/players/ott-navigator";
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
    question: "Who develops OTT Navigator IPTV, and what makes it unique?",
    answer:
      "OTT Navigator IPTV is developed by SIA Scillarium Studio (SC Software). It is regarded among enthusiasts as the ultimate 'power-user' IPTV player because of its unparalleled depth of configuration. Unlike simplified players, OTT Navigator provides direct access to video rendering pipelines (MPV, ExoPlayer, and VLC), deinterlacing algorithms (YADIF, Bob), system-level Auto Frame Rate (AFR) switching, Studio Mode multi-channel monitoring, and comprehensive Stalker / Ministra portal emulation alongside standard Xtream Codes.",
  },
  {
    question: "What is Auto Frame Rate (AFR) in OTT Navigator, and why is it essential for sports?",
    answer:
      "Most streaming sticks (like Fire TV or Chromecast) output video at a fixed 60Hz refresh rate. However, European, UK, and Australian sports broadcasts are transmitted at 50Hz (50 fps or 25 fps), while cinematic movies run at 23.976 / 24 fps. Converting 50Hz into a 60Hz display introduces 3:2 pulldown judder—micro-stutters visible during fast camera pans in football or tennis. When enabled in OTT Navigator (Settings > Playback > Match Frame Rate), AFR commands your TV to switch its physical refresh rate directly to 50Hz or 24Hz, delivering perfectly smooth broadcast-standard motion.",
  },
  {
    question: "How does Studio Mode work in OTT Navigator?",
    answer:
      "Studio Mode is OTT Navigator's advanced multi-view monitoring feature. On capable Android TV hardware (such as the Nvidia Shield TV Pro), it allows you to display a grid of active live channels simultaneously. You can listen to one primary audio channel while monitoring real-time video across secondary panes. The number of simultaneous streams depends on your device's hardware decoder capabilities and your IPTV subscription's concurrent stream limit.",
  },
  {
    question: "How do I fix combing artifacts or jagged lines on 1080i live channels?",
    answer:
      "Interlaced streams (1080i) split each frame into odd and even scan lines. If your player does not deinterlace properly, fast horizontal motion creates visible horizontal serrations ('combing'). In OTT Navigator, go to Settings > Playback > Player Engine and select MPV. Then enable Hardware Deinterlacing. MPV applies real-time progressive reconstruction, completely removing combing artifacts without degrading video sharpness.",
  },
  {
    question: "Is OTT Navigator available on Amazon Fire TV sticks?",
    answer:
      "Yes, although it is not distributed through the Amazon Appstore. You can install it on any Firestick or Fire TV Cube by sideloading the official APK using the Downloader application or transferring it from an Android phone. Once installed, it natively supports Fire TV remote controls and D-pad navigation.",
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
  { name: "OTT Navigator", item: `${SITE_URL}${canonical}` },
]);

const faqSchema = generateFAQPageSchema(faqs);

export default function OttNavigatorPage() {
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
              { label: "OTT Navigator" },
            ]}
          />

          <div className="mt-8 max-w-4xl">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-primary">
              IPTV Player Architecture & Guide
            </span>
            <h1 className="mt-3 font-headline text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              OTT Navigator IPTV: Auto Frame Rate, MPV Engine & Power Configuration
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              OTT Navigator IPTV (developed by SIA Scillarium Studio) is widely acknowledged as the most technically sophisticated media player in the IPTV ecosystem. Built for videophiles and enthusiasts who demand perfection, it pairs deep hardware codec control with Auto Frame Rate (AFR) switching, MPV deinterlacing, and advanced Studio Mode monitoring.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 font-medium text-foreground">
                <Cpu className="h-3.5 w-3.5 text-primary" /> MPV &amp; ExoPlayer Rendering
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 font-medium text-foreground">
                <Activity className="h-3.5 w-3.5 text-primary" /> Auto Frame Rate (AFR)
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 font-medium text-foreground">
                <Layers className="h-3.5 w-3.5 text-primary" /> Studio Mode Multi-View
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 font-medium text-foreground">
                <Film className="h-3.5 w-3.5 text-primary" /> Hardware Deinterlacing
              </span>
            </div>
            <PlayerQuickAnswer player="OTT Navigator" summary="OTT Navigator is a configurable IPTV player for Android-based devices. Install it on the relevant device, add the playlist format provided by your service, then confirm that channels and EPG data load before tuning playback options." devices={[{ href: "/devices/android-tv-iptv", label: "Android TV setup" }, { href: "/devices/firestick-iptv", label: "Firestick setup" }]} guides={[{ href: "/guides/what-are-xtream-codes", label: "Xtream Codes guide" }, { href: "/guides/what-is-m3u", label: "M3U playlist guide" }]} help={[{ href: "/help/epg-not-working", label: "EPG troubleshooting" }]} />
          </div>
        </Container>
      </Section>

      <Section className="py-12 sm:py-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="space-y-12 lg:col-span-8">
              {/* Architecture Deep Dive */}
              <div>
                <h2 className="font-headline text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  The Power User&apos;s Engine: Why Scillarium Studio Built OTT Navigator
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <p>
                    Standard IPTV apps treat playback as a black box: the media file is sent to Android&apos;s standard media framework, and whatever the operating system decides to do with refresh rates, color spaces, and audio channels is what you get.
                  </p>
                  <p>
                    OTT Navigator takes the opposite philosophy. It exposes the raw video processing stack directly to the viewer:
                  </p>
                  <div className="grid gap-4 pt-2 sm:grid-cols-2">
                    <Card className="border-white/[0.08] bg-white/[0.02]">
                      <CardHeader className="p-4">
                        <CardTitle className="text-base text-foreground">MPV Integration</CardTitle>
                        <CardDescription className="text-xs">Advanced VideoLAN Alternative</CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 pt-0 text-xs text-muted-foreground">
                        Utilizes the acclaimed MPV media core, allowing custom video filters, high-precision audio resampling, programmable hardware decoding (MediaCodec Copy / Direct), and advanced deinterlacing shaders.
                      </CardContent>
                    </Card>
                    <Card className="border-white/[0.08] bg-white/[0.02]">
                      <CardHeader className="p-4">
                        <CardTitle className="text-base text-foreground">Auto Frame Rate (AFR)</CardTitle>
                        <CardDescription className="text-xs">Dynamic Display Synchronization</CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 pt-0 text-xs text-muted-foreground">
                        Matches your TV&apos;s HDMI timing to incoming streams on the fly: 50.000 Hz for European/UK sports, 59.940 Hz for US broadcasts, and 23.976 Hz for movies. Eliminates frame repeats and judder.
                      </CardContent>
                    </Card>
                  </div>
                  <p>
                    While this extensive customizability gives OTT Navigator a steeper learning curve than plug-and-play apps like IPTV Smarters, it is the only player that can extract cinema-grade motion fidelity from complex IPTV feeds on high-end 4K OLED displays.
                  </p>
                </div>
              </div>

              {/* Technical Profile Table */}
              <div>
                <h2 className="font-headline text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  OTT Navigator Technical Specification &amp; Protocols
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Official specifications for OTT Navigator IPTV based on releases by SIA Scillarium Studio.
                </p>
                <div className="mt-6 overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.02]">
                  <table className="w-full text-left text-sm">
                    <tbody className="divide-y divide-white/[0.06]">
                      <tr className="bg-white/[0.01]">
                        <td className="p-4 font-mono text-xs font-medium text-muted-foreground">Primary Developer</td>
                        <td className="p-4 font-medium text-foreground">SIA Scillarium Studio (SC Software)</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-mono text-xs font-medium text-muted-foreground">Supported Platforms</td>
                        <td className="p-4 text-muted-foreground">Android TV, Google TV, Android Phones/Tablets, <Link href="/devices/firestick-iptv" className="text-primary underline">Amazon Fire TV</Link> (Sideloaded APK)</td>
                      </tr>
                      <tr className="bg-white/[0.01]">
                        <td className="p-4 font-mono text-xs font-medium text-muted-foreground">Playback Engines</td>
                        <td className="p-4 text-muted-foreground">MPV, ExoPlayer v2, VLC (LibVLC), System Media Framework</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-mono text-xs font-medium text-muted-foreground">Display Sync Features</td>
                        <td className="p-4 text-muted-foreground">Native Auto Frame Rate (AFR), Display Resolution Matching, Custom Aspect Ratio Scaling</td>
                      </tr>
                      <tr className="bg-white/[0.01]">
                        <td className="p-4 font-mono text-xs font-medium text-muted-foreground">Deinterlacing Algorithms</td>
                        <td className="p-4 text-muted-foreground">Hardware MediaCodec, YADIF 2x, Bob, Progressive Fallback</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-mono text-xs font-medium text-muted-foreground">Middleware &amp; Protocols</td>
                        <td className="p-4 text-muted-foreground">Xtream Codes API, M3U / M3U8 Plus, Stalker / Ministra Portal (MAC Address Emulation)</td>
                      </tr>
                      <tr className="bg-white/[0.01]">
                        <td className="p-4 font-mono text-xs font-medium text-muted-foreground">Multi-View Capabilities</td>
                        <td className="p-4 text-muted-foreground">Studio Mode (multi-stream grid determined by device hardware decoder &amp; provider connection limit), Picture-in-Picture (PiP)</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-mono text-xs font-medium text-muted-foreground">Timeshift &amp; Archives</td>
                        <td className="p-4 text-muted-foreground">Flussonic, Xtream Catchup, Shift tags with scrubbable timeline and calendar navigation</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Step-by-Step Setup */}
              <div>
                <h2 className="font-headline text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Step-by-Step: Adding TryIPTV to OTT Navigator
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Follow this guide to connect TryIPTV via Xtream Codes API:
                </p>

                <div className="mt-6 space-y-6">
                  <div className="flex gap-4 rounded-xl border border-white/[0.08] bg-white/[0.02] p-5">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20 font-mono text-sm font-bold text-primary">
                      1
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-headline text-base font-bold text-foreground">
                        Access Provider Settings
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Launch OTT Navigator. On initial startup (or from the left side-bar menu), navigate to <strong>Settings &gt; Provider &gt; Add Provider</strong>.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 rounded-xl border border-white/[0.08] bg-white/[0.02] p-5">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20 font-mono text-sm font-bold text-primary">
                      2
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-headline text-base font-bold text-foreground">
                        Select Xtream Codes Login
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Select <strong>Xtream Codes</strong> from the provider protocol list. (While Stalker Portal and M3U are supported, Xtream Codes provides the fastest categorization and automatic EPG association).
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 rounded-xl border border-white/[0.08] bg-white/[0.02] p-5">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20 font-mono text-sm font-bold text-primary">
                      3
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-headline text-base font-bold text-foreground">
                        Enter Your TryIPTV Server Parameters
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Fill in the required fields:
                      </p>
                      <ul className="list-inside list-disc space-y-1 text-xs text-muted-foreground sm:text-sm">
                        <li><strong>Server:</strong> Enter the server URL and port (e.g., <code className="rounded bg-white/[0.05] px-1.5 py-0.5 text-foreground">http://line.tryiptv.com:8080</code>). Ensure there is no trailing slash.</li>
                        <li><strong>Username:</strong> Your IPTV username.</li>
                        <li><strong>Password:</strong> Your IPTV password.</li>
                      </ul>
                      <p className="text-xs text-muted-foreground">
                        For protocol details, read our guide on{" "}
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
                        Save and Initialize Archive &amp; EPG
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Click <strong>Apply</strong>. OTT Navigator will authenticate with the server, pull channel categories, and download program schedules into its local SQLite database.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Advanced Feature: AFR and MPV */}
              <div>
                <h2 className="font-headline text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Enabling Auto Frame Rate (AFR) &amp; MPV Deinterlacing
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <p>
                    To unlock the full visual quality of sports broadcasts and eliminate micro-stutters, apply these recommended video settings:
                  </p>
                  <ol className="list-inside list-decimal space-y-3 rounded-xl border border-white/[0.08] bg-white/[0.02] p-5 text-sm">
                    <li>
                      <strong className="text-foreground">Switch to MPV Core:</strong> Navigate to <strong>Settings &gt; Playback &gt; Codec &gt; Video Decoder</strong>. Change the engine from <em>ExoPlayer</em> to <em>MPV</em>.
                    </li>
                    <li>
                      <strong className="text-foreground">Enable Hardware Deinterlacing:</strong> In the same Codec menu, set <em>Deinterlace</em> to <strong>Auto</strong> or <strong>Always ON</strong>. For European 1080i feeds, set algorithm to <em>YADIF</em> or <em>Hardware</em>.
                    </li>
                    <li>
                      <strong className="text-foreground">Turn On Auto Frame Rate (AFR):</strong> Go to <strong>Settings &gt; Playback &gt; Advanced &gt; Match Frame Rate</strong>. Toggle this to <strong>Enabled</strong>. Note: When changing channels between a 60fps US network and a 50fps UK sports channel, your TV screen will briefly go black for 1 second as HDMI renegotiates refresh rates. This is standard HDMI behavior and indicates AFR is working properly.
                    </li>
                  </ol>
                </div>
              </div>

              {/* Troubleshooting Matrix */}
              <div>
                <h2 className="font-headline text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  OTT Navigator Real-World Troubleshooting Matrix
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Diagnose and resolve common configuration challenges in OTT Navigator:
                </p>

                <div className="mt-6 space-y-4">
                  <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="font-mono text-xs font-semibold text-red-400">Issue: Audio Desynchronized on Bluetooth Headphones</span>
                        <h4 className="mt-1 font-semibold text-foreground text-base">Bluetooth Latency Compensation</h4>
                      </div>
                      <RotateCcw className="h-5 w-5 shrink-0 text-red-400" />
                    </div>
                    <div className="mt-3 space-y-2 text-xs text-muted-foreground">
                      <p><strong>Root Cause:</strong> Bluetooth wireless audio incurs a natural 150ms to 250ms transmission latency that video does not experience.</p>
                      <p><strong>Resolution:</strong> During active playback, open the on-screen playback control menu &gt; select <strong>Audio Track / Audio Settings</strong> &gt; adjust <strong>Audio Delay (Offset)</strong> by -200ms until speech synchronizes perfectly with lip movements.</p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="font-mono text-xs font-semibold text-amber-400">Issue: Screen Blinks Black When Switching Channels</span>
                        <h4 className="mt-1 font-semibold text-foreground text-base">HDMI Handshake During Refresh Rate Switching</h4>
                      </div>
                      <Activity className="h-5 w-5 shrink-0 text-amber-400" />
                    </div>
                    <div className="mt-3 space-y-2 text-xs text-muted-foreground">
                      <p><strong>Root Cause:</strong> Auto Frame Rate (AFR) is actively switching the TV panel refresh rate between 24Hz, 50Hz, and 60Hz.</p>
                      <p><strong>Resolution:</strong> This is intentional behavior designed to prevent motion judder. If you find the brief 1-second HDMI renegotiation disruptive, navigate to Settings &gt; Playback &gt; Match Frame Rate and toggle it to <em>Disabled</em> to lock your display at a fixed 60Hz.</p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="font-mono text-xs font-semibold text-blue-400">Issue: Interface Overwhelming / Too Many Complex Menus</span>
                        <h4 className="mt-1 font-semibold text-foreground text-base">Interface Density Customization</h4>
                      </div>
                      <Sliders className="h-5 w-5 shrink-0 text-blue-400" />
                    </div>
                    <div className="mt-3 space-y-2 text-xs text-muted-foreground">
                      <p><strong>Resolution:</strong> Go to Settings &gt; <strong>Appearance &gt; UI Style</strong>. Switch the navigation mode from &quot;Detailed / Expert&quot; to &quot;Simple / Classic TV&quot;. This hides technical telemetry overlays and leaves a clean, streamlined channel grid.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQs */}
              <div>
                <h2 className="font-headline text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Frequently Asked Questions About OTT Navigator
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
                  <CardTitle className="text-lg text-foreground">TryIPTV + OTT Navigator</CardTitle>
                  <CardDescription className="text-xs">
                    Pristine 50/60 fps sports with zero frame judder
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
                      <span>Over {PRODUCT_TRUTHS.channels} high-bitrate live channels</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Native 50fps UK &amp; European sports feeds</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Catchup archive &amp; Timeshift compatibility</span>
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
                  <CardTitle className="text-base text-foreground">Explore Other IPTV Players</CardTitle>
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
                      Dedicated TV remote interface and SMB DVR recording.
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
                </CardContent>
              </Card>

              {/* Protocol Guides */}
              <Card className="border-white/[0.08] bg-white/[0.02]">
                <CardHeader>
                  <CardTitle className="text-base text-foreground">Technical Guides</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-xs">
                  <Link href="/help/iptv-buffering" className="block text-muted-foreground hover:text-primary">
                    → How to Stop IPTV Buffering &amp; Frame Drops
                  </Link>
                  <Link href="/guides/what-are-xtream-codes" className="block text-muted-foreground hover:text-primary">
                    → What Are Xtream Codes API Credentials?
                  </Link>
                  <Link href="/guides/what-is-epg" className="block text-muted-foreground hover:text-primary">
                    → How Electronic Program Guides (EPG) Work
                  </Link>
                  <Link href="/devices/android-tv-iptv" className="block text-muted-foreground hover:text-primary">
                    → Android TV &amp; Google TV Setup Guide
                  </Link>
                </CardContent>
              </Card>

              {/* Official Verification Reference */}
              <div className="rounded-xl border border-white/[0.08] bg-[#07080a] p-4 text-xs text-muted-foreground space-y-2">
                <span className="font-mono text-[10px] uppercase font-bold text-foreground">Official Developer Resource</span>
                <p>
                  Official developer: SIA Scillarium Studio.<br />
                  Official FAQ: <a href="https://ottnav.github.io/faq.html" target="_blank" rel="noopener noreferrer" className="text-primary underline">ottnav.github.io/faq.html</a>.<br />
                  Distributed on Google Play Store for Android and Android TV.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
