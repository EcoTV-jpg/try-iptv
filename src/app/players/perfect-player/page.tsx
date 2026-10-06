import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertTriangle, ShieldCheck, Tv, HardDrive, History, ArrowUpRight, HelpCircle, Monitor, Sliders, AlertCircle } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Container } from "@/components/shared/Container";
import { PlayerQuickAnswer } from "@/components/players/PlayerQuickAnswer";
import { Schema } from "@/components/shared/Schema";
import { Section } from "@/components/shared/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { generateArticleSchema, generateBreadcrumbSchema, generateFAQPageSchema } from "@/lib/schema";
import { PRODUCT_TRUTHS, SITE_URL, generateMetadata as generatePageMetadata } from "@/lib/site-config";

const title = "Perfect Player IPTV Guide: Legacy Setup, Decoder Settings & Migration";
const description =
  "Technical review and setup guide for Perfect Player IPTV by Niklabs Software. Learn how to construct M3U links, adjust HW decoders, and migrate to modern alternatives.";
const canonical = "/players/perfect-player";
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
    question: "Is Perfect Player IPTV still being updated, and can I get it on Google Play?",
    answer:
      "No. Perfect Player IPTV (developed by Niklabs Software, niklabs.com) is legacy software. Historical store records indicate it was removed from the Google Play Store in late 2021 and has received no official updates since version 1.6.0.1. Because official app store distribution has ceased, downloading APK files from unknown third-party websites presents security risks. This guide is provided for educational and legacy reference for existing installations.",
  },
  {
    question: "Can I log in using Xtream Codes API username and password in Perfect Player?",
    answer:
      "No. Perfect Player does not feature a dedicated Xtream Codes API login dialog with separate Server, Username, and Password fields. To use an Xtream Codes subscription, you must manually construct an M3U Plus URL using the provider's standard syntax (http://server:port/get.php?username=YOUR_USER&password=YOUR_PASS&type=m3u_plus&output=ts) and paste the entire string into Perfect Player's Main Playlist field.",
  },
  {
    question: "Why does Perfect Player show a black screen or stutter on 4K and HEVC streams?",
    answer:
      "Because Perfect Player has not been updated since 2021, its internal media framework lacks modern ExoPlayer or LibVLC decoding pipelines for newer video containers and high-efficiency codecs like HEVC / H.265 and AV1. In Perfect Player Settings > Playback > Decoder, you can toggle between 'HW' (Hardware), 'HW+' (Hardware Plus), and 'SW' (Software). If a stream stutters on HW, switching to HW+ or SW may restore video, but 4K playback will often overwhelm older device processors.",
  },
  {
    question: "Why should users migrate from Perfect Player to modern IPTV players?",
    answer:
      "Modern IPTV players like TiviMate, Televizo, and IPTV Smarters offer significant advantages over Perfect Player: native Xtream Codes authentication, automatic multi-day EPG scheduling, VOD movie and TV series organization with IMDb poster walls, subtitle language selection, SMB network recording, and regular security updates. For users with recent streaming devices (Firestick 4K Max, Chromecast with Google TV, Nvidia Shield), modern players deliver far superior performance and stability.",
  },
  {
    question: "What is UDPXY in Perfect Player settings?",
    answer:
      "UDPXY is a proxy setting used when an Internet Service Provider or telco delivers multicast IPTV streams over local UDP sockets. Because mobile and Wi-Fi devices struggle with raw multicast UDP packets, a UDPXY proxy converts the multicast feed into unicast HTTP streams. For standard over-the-top internet IPTV services like TryIPTV, UDPXY is not required and should be left blank.",
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
  { name: "Perfect Player", item: `${SITE_URL}${canonical}` },
]);

const faqSchema = generateFAQPageSchema(faqs);

export default function PerfectPlayerPage() {
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
              { label: "Perfect Player" },
            ]}
          />

          <div className="mt-8 max-w-4xl">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-primary">
              IPTV Player Architecture &amp; Legacy Guide
            </span>
            <h1 className="mt-3 font-headline text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Perfect Player IPTV: Legacy Setup, Decoder Settings &amp; Migration
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Perfect Player IPTV (developed by Niklabs Software) holds a storied place in streaming history as one of the pioneers of digital set-top box On-Screen Display (OSD) interfaces. While no longer actively maintained, its ultra-lightweight footprint keeps it in service on legacy Android boxes. Here is how it functions, how to configure it, and why modern alternatives should be considered.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/20 bg-amber-500/5 px-3 py-1 font-medium text-amber-400">
                <History className="h-3.5 w-3.5" /> Legacy Status (Unmaintained)
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 font-medium text-foreground">
                <Tv className="h-3.5 w-3.5 text-primary" /> Set-Top Box OSD Interface
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 font-medium text-foreground">
                <Sliders className="h-3.5 w-3.5 text-primary" /> HW / HW+ / SW Decoders
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 font-medium text-foreground">
                <HardDrive className="h-3.5 w-3.5 text-primary" /> Ultra-Low Memory Usage
              </span>
            </div>
            <PlayerQuickAnswer player="Perfect Player" summary="Perfect Player is a lightweight IPTV client for loading and organizing playlist-based television streams. Install it on a compatible device, add the playlist format provided by your service, configure guide data when available, and test playback before adjusting decoder options." devices={[{ href: "/devices/android-tv-iptv", label: "Android TV setup" }, { href: "/devices/firestick-iptv", label: "Firestick setup" }]} guides={[{ href: "/guides/what-is-m3u", label: "M3U playlist guide" }, { href: "/guides/m3u-vs-xtream-codes", label: "M3U vs Xtream Codes" }]} help={[{ href: "/help/m3u-not-loading", label: "Playlist troubleshooting" }]} />
          </div>
        </Container>
      </Section>

      <Section className="py-12 sm:py-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="space-y-12 lg:col-span-8">
              {/* Legacy Status Notice */}
              <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-5">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 shrink-0 text-amber-400 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-amber-300 text-sm">Important Note on Software Status</h3>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                      Niklabs Software ceased active updates to Perfect Player IPTV in late 2021, and the app was subsequently delisted from Google Play. If you already have it installed on legacy hardware (such as Android 7/8/9 TV boxes), it remains functional for standard M3U streams. However, for new installations on contemporary streaming hardware, we strongly recommend evaluating modern active players like{" "}
                      <Link href="/players/tivimate" className="text-primary underline hover:text-primary/80">
                        TiviMate
                      </Link>{" "}
                      or{" "}
                      <Link href="/players/televizo" className="text-primary underline hover:text-primary/80">
                        Televizo
                      </Link>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Architecture & OSD */}
              <div>
                <h2 className="font-headline text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Architecture &amp; Set-Top Box OSD Heritage
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <p>
                    Perfect Player was designed during an era when Android TV boxes had minimal computing power (often 1 GB of RAM and basic quad-core ARM Cortex-A53 processors). While heavy, graphic-rich applications struggled to render on such hardware, Perfect Player used a native C++ rendering pipeline that drew minimal CPU overhead.
                  </p>
                  <p>
                    Its user interface intentionally replicated the classic On-Screen Display (OSD) of digital satellite and cable receivers:
                  </p>
                  <ul className="list-inside list-disc space-y-2 rounded-xl border border-white/[0.08] bg-white/[0.02] p-5 text-sm">
                    <li><strong className="text-foreground">Transparent Channel List:</strong> A transparent left-side channel column that allows video to continue playing unobstructed in the background.</li>
                    <li><strong className="text-foreground">Dual Playlist Slots:</strong> Fields for a Main and Backup playlist URL, allowing automatic failover if a primary stream server drops offline.</li>
                    <li><strong className="text-foreground">Adjustable OSD Scaling:</strong> Granular control over on-screen font sizes, transparency percentages, and info bar display duration.</li>
                  </ul>
                </div>
              </div>

              {/* Technical Profile Table */}
              <div>
                <h2 className="font-headline text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Perfect Player Technical Specification &amp; Protocols
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Reference specifications based on the final public release (v1.6.0) by Niklabs Software.
                </p>
                <div className="mt-6 overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.02]">
                  <table className="w-full text-left text-sm">
                    <tbody className="divide-y divide-white/[0.06]">
                      <tr className="bg-white/[0.01]">
                        <td className="p-4 font-mono text-xs font-medium text-muted-foreground">Original Developer</td>
                        <td className="p-4 font-medium text-foreground">Niklabs Software (niklabs.com)</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-mono text-xs font-medium text-muted-foreground">Maintenance Status</td>
                        <td className="p-4 text-amber-400 font-medium">Unmaintained (Final release v1.6.0.1; delisted from Google Play late 2021)</td>
                      </tr>
                      <tr className="bg-white/[0.01]">
                        <td className="p-4 font-mono text-xs font-medium text-muted-foreground">Supported Operating Systems</td>
                        <td className="p-4 text-muted-foreground">Android (v4.0 through v9.0 native; sideloaded on newer versions), Windows PC (Legacy)</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-mono text-xs font-medium text-muted-foreground">Playlist Input Protocols</td>
                        <td className="p-4 text-muted-foreground">M3U / M3U8 URLs, Local M3U Files, XSPF (No native Xtream Codes login dialog)</td>
                      </tr>
                      <tr className="bg-white/[0.01]">
                        <td className="p-4 font-mono text-xs font-medium text-muted-foreground">EPG Protocols</td>
                        <td className="p-4 text-muted-foreground">XMLTV (HTTP URL, local file, or .xml.gz archive), JTV format</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-mono text-xs font-medium text-muted-foreground">Decoder Options</td>
                        <td className="p-4 text-muted-foreground">Hardware (HW), Hardware Plus (HW+), Software (SW)</td>
                      </tr>
                      <tr className="bg-white/[0.01]">
                        <td className="p-4 font-mono text-xs font-medium text-muted-foreground">Specialized Network Tools</td>
                        <td className="p-4 text-muted-foreground">UDPXY proxy integration for multicast UDP IPTV feeds</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Step-by-Step Setup */}
              <div>
                <h2 className="font-headline text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Step-by-Step: Adding TryIPTV to Perfect Player
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Because Perfect Player lacks an Xtream Codes login form, you must enter your M3U URL manually:
                </p>

                <div className="mt-6 space-y-6">
                  <div className="flex gap-4 rounded-xl border border-white/[0.08] bg-white/[0.02] p-5">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20 font-mono text-sm font-bold text-primary">
                      1
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-headline text-base font-bold text-foreground">
                        Construct Your Complete M3U URL
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Obtain your M3U Plus URL from your TryIPTV activation email. If you only received Xtream Codes credentials, format the URL as follows:
                      </p>
                      <div className="rounded bg-black/40 p-3 font-mono text-xs text-primary">
                        http://[SERVER_DOMAIN]:[PORT]/get.php?username=[USERNAME]&amp;password=[PASSWORD]&amp;type=m3u_plus&amp;output=ts
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 rounded-xl border border-white/[0.08] bg-white/[0.02] p-5">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20 font-mono text-sm font-bold text-primary">
                      2
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-headline text-base font-bold text-foreground">
                        Navigate to Settings &gt; General
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Launch Perfect Player. Press the gear icon on the main menu bar, then open <strong>General</strong>.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 rounded-xl border border-white/[0.08] bg-white/[0.02] p-5">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20 font-mono text-sm font-bold text-primary">
                      3
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-headline text-base font-bold text-foreground">
                        Input Playlist &amp; EPG URLs
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Click on <strong>Playlist 1</strong>, paste your M3U URL, and verify the format is set to <em>M3U</em>. Next, click <strong>EPG 1</strong> and enter your XMLTV guide link to populate channel schedule data.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 rounded-xl border border-white/[0.08] bg-white/[0.02] p-5">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20 font-mono text-sm font-bold text-primary">
                      4
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-headline text-base font-bold text-foreground">
                        Return to Home and Sync
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Press back to the main screen. Perfect Player will display a progress bar in the top-right corner while downloading and indexing your channel list.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decoder Settings */}
              <div>
                <h2 className="font-headline text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Tuning HW, HW+, and SW Video Decoders
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <p>
                    If you experience black screens or frozen video on specific high-definition channels, adjusting decoder modes in <strong>Settings &gt; Playback &gt; Decoder</strong> is essential:
                  </p>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <Card className="border-white/[0.08] bg-white/[0.02]">
                      <CardHeader className="p-4">
                        <CardTitle className="text-sm text-foreground">HW (Hardware)</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0 text-xs text-muted-foreground">
                        Default setting. Uses the device GPU directly. Best for standard H.264 streams and minimal CPU heat.
                      </CardContent>
                    </Card>
                    <Card className="border-white/[0.08] bg-white/[0.02]">
                      <CardHeader className="p-4">
                        <CardTitle className="text-sm text-foreground">HW+ (Hardware Plus)</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0 text-xs text-muted-foreground">
                        Alternative hardware pipeline. Useful if standard HW fails on interlaced 1080i sports feeds.
                      </CardContent>
                    </Card>
                    <Card className="border-white/[0.08] bg-white/[0.02]">
                      <CardHeader className="p-4">
                        <CardTitle className="text-sm text-foreground">SW (Software)</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0 text-xs text-muted-foreground">
                        CPU-based decoding. Reliable fallback for unsupported audio codecs, but causes high CPU load on 1080p/4K.
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Migration Guide */}
              <div>
                <h2 className="font-headline text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Why and How to Migrate to Modern IPTV Players
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <p>
                    If you are using a modern television device (such as an Amazon Firestick 4K Max, Google TV, or modern Android TV), moving to an actively supported player delivers immediate quality-of-life benefits:
                  </p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-5">
                      <h4 className="font-semibold text-foreground text-sm flex items-center gap-2">
                        <ArrowUpRight className="h-4 w-4 text-primary" /> Migrate to TiviMate
                      </h4>
                      <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                        If you loved Perfect Player&apos;s clean television guide,{" "}
                        <Link href="/players/tivimate" className="text-primary underline hover:text-primary/80">
                          TiviMate
                        </Link>{" "}
                        is the direct modern evolution. It adds modern multi-day EPG grids, SMB recording, multi-view, and flawless HEVC playback.
                      </p>
                    </div>

                    <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-5">
                      <h4 className="font-semibold text-foreground text-sm flex items-center gap-2">
                        <ArrowUpRight className="h-4 w-4 text-primary" /> Migrate to Televizo
                      </h4>
                      <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                        If you prefer a lightweight, responsive player with zero monthly subscriptions,{" "}
                        <Link href="/players/televizo" className="text-primary underline hover:text-primary/80">
                          Televizo
                        </Link>{" "}
                        offers active updates, native Google Cast, and seamless touch/remote navigation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQs */}
              <div>
                <h2 className="font-headline text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Frequently Asked Questions About Perfect Player
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
                  <CardTitle className="text-lg text-foreground">TryIPTV Compatibility</CardTitle>
                  <CardDescription className="text-xs">
                    Universal M3U Plus streaming on any player
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
                      <span>Over {PRODUCT_TRUTHS.channels} live TV channels</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Compatible with legacy and modern players</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Standard M3U Plus URL generation</span>
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
                  <CardTitle className="text-base text-foreground">Modern Player Alternatives</CardTitle>
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
                      The premier TV remote interface and modern EPG grid.
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
                      Universal compatibility on iOS, Samsung, LG, and Fire TV.
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
                      Dual playback engines (ExoPlayer &amp; VLC) with multi-screen.
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
                </CardContent>
              </Card>

              {/* Protocol Guides */}
              <Card className="border-white/[0.08] bg-white/[0.02]">
                <CardHeader>
                  <CardTitle className="text-base text-foreground">Guides &amp; Resources</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-xs">
                  <Link href="/guides/what-is-m3u" className="block text-muted-foreground hover:text-primary">
                    → What Is an M3U Playlist &amp; How Does It Work?
                  </Link>
                  <Link href="/guides/m3u-vs-xtream-codes" className="block text-muted-foreground hover:text-primary">
                    → M3U vs. Xtream Codes API Compared
                  </Link>
                  <Link href="/guides/what-is-epg" className="block text-muted-foreground hover:text-primary">
                    → How Electronic Program Guides (EPG) Work
                  </Link>
                  <Link href="/help/iptv-buffering" className="block text-muted-foreground hover:text-primary">
                    → How to Stop IPTV Buffering
                  </Link>
                </CardContent>
              </Card>

              {/* Official Verification Reference */}
              <div className="rounded-xl border border-white/[0.08] bg-[#07080a] p-4 text-xs text-muted-foreground space-y-2">
                <span className="font-mono text-[10px] uppercase font-bold text-foreground">Legacy Developer Resource</span>
                <p>
                  Original developer: Niklabs Software.<br />
                  Official website: <a href="http://niklabs.com" target="_blank" rel="noopener noreferrer" className="text-primary underline">niklabs.com</a>.<br />
                  Status: Delisted late 2021; unmaintained since v1.6.0.1. Unofficial APK mirrors not recommended.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
