import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertTriangle, ShieldCheck, Tv, HardDrive, Clock, HelpCircle, Layers, Settings, Radio } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Container } from "@/components/shared/Container";
import { Schema } from "@/components/shared/Schema";
import { Section } from "@/components/shared/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { generateArticleSchema, generateBreadcrumbSchema, generateFAQPageSchema } from "@/lib/schema";
import { PRODUCT_TRUTHS, SITE_URL, generateMetadata as generatePageMetadata } from "@/lib/site-config";

const title = "TiviMate IPTV Player Setup Guide: Features, Settings & Troubleshooting";
const description =
  "Learn how to set up and optimize TiviMate on Fire TV and Android TV. Detailed walkthrough for Xtream Codes login, EPG setup, SMB recording, buffer tuning, and error resolution.";
const canonical = "/players/tivimate";
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
    question: "Is TiviMate available on iPhone, iPad, Apple TV, or Windows PC?",
    answer:
      "No. Officially developed by Armobsoft FZE, TiviMate is designed exclusively for Android TV, Google TV, and Amazon Fire OS devices. It requires a TV remote interface and does not have an official native client for iOS, iPadOS, tvOS, or Windows. Any website claiming to sell a 'TiviMate for Windows' or 'TiviMate for iOS' download is not affiliated with the official developer and may contain modified or malicious software. On PC, some users run it through an Android emulator, but performance is optimized for television hardware.",
  },
  {
    question: "How do I purchase and activate TiviMate Premium on a Fire TV Stick without Google Play?",
    answer:
      "Because Fire TV devices use the Amazon Appstore rather than the Google Play Store, you cannot purchase TiviMate Premium directly on a Firestick. To activate Premium on Fire TV, install the official 'TiviMate Companion' app on an Android phone, tablet, or Android emulator. Sign in or create a TiviMate account in Companion, purchase a subscription (yearly or lifetime), and then open TiviMate on your Fire TV, go to Settings > Unlock Premium, and log in with the same account credentials to authorize the device. One license covers up to 5 devices.",
  },
  {
    question: "Why does my recording in TiviMate stop after just a few minutes?",
    answer:
      "Recording failures typically stem from two root causes: connection limits and local storage limits. First, recording a live channel while watching another channel requires at least two simultaneous streams from your IPTV provider. TryIPTV includes two simultaneous connections on every plan, allowing you to watch and record at the same time. If your provider only allows one connection, the server will terminate the older stream. Second, Firesticks have limited free storage (often under 2 GB); a high-definition stream can fill that in under an hour, causing Android to abort the recording. Setting up an SMB network folder on your home PC or NAS solves this storage bottleneck.",
  },
  {
    question: "What causes 'An error occurred: Code 401' or 'Code 403' in TiviMate?",
    answer:
      "HTTP error codes 401 (Unauthorized) and 403 (Forbidden) indicate an authentication or server-side access block. The most common causes are an incorrect username or password, an expired subscription, or exceeding your allowed concurrent device connections. If your credentials are confirmed accurate, some IPTV provider firewalls block generic or default player request headers; setting a custom User-Agent (such as 'VLC' or 'IPTVSmartersPlayer') under Settings > Playlists > [Your Playlist] > User-Agent frequently resolves header-level 403 blocks.",
  },
  {
    question: "What is the best Buffer Size setting in TiviMate to eliminate stuttering?",
    answer:
      "In TiviMate (Settings > Playback > Buffer Size), the ideal setting depends on your local network latency. For stable, high-speed fiber or Ethernet connections, many users find 'None' or 'Small' yields the fastest channel-switching times and avoids delayed packet synchronization. However, if you experience occasional micro-stutters over Wi-Fi, increasing the buffer to 'Medium' or 'Large' provides a few seconds of playback cushion against jitter. If buffering persists regardless of buffer size, switch your playlist stream output format from MPEG-TS to HLS.",
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
  { name: "TiviMate", item: `${SITE_URL}${canonical}` },
]);

const faqSchema = generateFAQPageSchema(faqs);

export default function TivimatePage() {
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
              { label: "TiviMate" },
            ]}
          />

          <div className="mt-8 max-w-4xl">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-primary">
              IPTV Player Architecture & Guide
            </span>
            <h1 className="mt-3 font-headline text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              TiviMate IPTV Player: Complete Technical Setup, Configuration & Troubleshooting
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              TiviMate IPTV Player (developed by Armobsoft FZE) is widely regarded as the gold standard among dedicated television IPTV interfaces. Unlike generic media players adapted from smartphone layouts, TiviMate was engineered from the ground up specifically for TV screens, remote control D-pads, and high-density Electronic Program Guides (EPG).
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 font-medium text-foreground">
                <Tv className="h-3.5 w-3.5 text-primary" /> Android TV & Fire OS
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 font-medium text-foreground">
                <Radio className="h-3.5 w-3.5 text-primary" /> Xtream Codes & M3U
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 font-medium text-foreground">
                <HardDrive className="h-3.5 w-3.5 text-primary" /> SMB Network DVR
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 font-medium text-foreground">
                <Layers className="h-3.5 w-3.5 text-primary" /> 5-Device License
              </span>
            </div>
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
                      Important Official Distinction: TiviMate Is a Player Only
                    </h2>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      TiviMate does not host, provide, or sell any channels, live sports, or video-on-demand content. It is strictly a client playback software developed by <strong>Armobsoft FZE</strong>. Websites claiming to sell &ldquo;TiviMate Subscriptions with 20,000 Channels&rdquo; are unauthorized third parties. To stream content, you must supply your own valid subscription credentials—such as an <Link href="/guides/what-are-xtream-codes" className="text-primary underline underline-offset-4">Xtream Codes login</Link> or an <Link href="/guides/what-is-m3u" className="text-primary underline underline-offset-4">M3U playlist URL</Link> provided by a legitimate service like <Link href="/" className="text-primary underline underline-offset-4">TryIPTV</Link>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Distinctive Features */}
              <div className="space-y-6">
                <h2 className="font-headline text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  What Makes TiviMate Different From Other IPTV Players?
                </h2>
                <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                  While apps like VLC or generic mobile media players treat an IPTV playlist as a flat list of media files, TiviMate emulates the polished operational experience of high-end traditional cable or satellite set-top boxes:
                </p>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Card className="border-white/[0.08] bg-card/60">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base font-bold text-foreground flex items-center gap-2">
                        <Tv className="h-4 w-4 text-primary" /> Full-Grid Electronic Program Guide
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Horizontal time-based TV guide with channel bouquets, instant category filters, timeline scrubbing, and automatic EPG synchronization. Supports custom EPG time offsets to fix timezone mismatches.
                    </CardContent>
                  </Card>

                  <Card className="border-white/[0.08] bg-card/60">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base font-bold text-foreground flex items-center gap-2">
                        <Layers className="h-4 w-4 text-primary" /> Multi-Screen (Multi-View)
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Watch up to 9 channels simultaneously in customizable split-screen grids. Perfect for tracking concurrent live sports games. (Note: each active quadrant consumes 1 connection from your provider).
                    </CardContent>
                  </Card>

                  <Card className="border-white/[0.08] bg-card/60">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base font-bold text-foreground flex items-center gap-2">
                        <HardDrive className="h-4 w-4 text-primary" /> Scheduled Network DVR (SMB)
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Schedule one-time or recurring recordings directly from the EPG. In addition to local storage, TiviMate supports recording over LAN directly to an SMB share on a home PC, NAS, or network drive.
                    </CardContent>
                  </Card>

                  <Card className="border-white/[0.08] bg-card/60">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base font-bold text-foreground flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" /> Catch-Up TV Integration
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Browse past broadcasts in the guide timeline and launch archived streams with rewind, fast-forward, and pause support for channels configured with catch-up on your IPTV server.
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Free vs Premium Breakdown */}
              <div className="space-y-6">
                <h2 className="font-headline text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  TiviMate Free vs. TiviMate Premium
                </h2>
                <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                  TiviMate can be downloaded free of charge from the Google Play Store or sideloaded onto Fire TV devices, but its capabilities differ significantly between the free base version and the unlocked Premium version:
                </p>

                <div className="overflow-x-auto rounded-lg border border-white/[0.08]">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="border-b border-white/[0.08] bg-white/[0.02] text-foreground">
                      <tr>
                        <th className="p-3.5 sm:p-4 font-semibold">Feature</th>
                        <th className="p-3.5 sm:p-4 font-semibold">TiviMate Free</th>
                        <th className="p-3.5 sm:p-4 font-semibold text-primary">TiviMate Premium</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/[0.06] text-muted-foreground">
                      <tr>
                        <td className="p-3.5 sm:p-4 font-medium text-foreground">Maximum Playlists</td>
                        <td className="p-3.5 sm:p-4">1 Playlist only</td>
                        <td className="p-3.5 sm:p-4 text-foreground font-medium">Multiple playlists supported</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 sm:p-4 font-medium text-foreground">Favorites & Custom Grouping</td>
                        <td className="p-3.5 sm:p-4">Limited</td>
                        <td className="p-3.5 sm:p-4 text-foreground font-medium">Unlimited custom groups & favorites</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 sm:p-4 font-medium text-foreground">Catch-Up & Timeline Scrubbing</td>
                        <td className="p-3.5 sm:p-4">No</td>
                        <td className="p-3.5 sm:p-4 text-foreground font-medium">Full catch-up TV support</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 sm:p-4 font-medium text-foreground">Scheduled Recording (DVR)</td>
                        <td className="p-3.5 sm:p-4">No</td>
                        <td className="p-3.5 sm:p-4 text-foreground font-medium">Local & SMB network recording</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 sm:p-4 font-medium text-foreground">Multi-View (Multi-Screen)</td>
                        <td className="p-3.5 sm:p-4">No</td>
                        <td className="p-3.5 sm:p-4 text-foreground font-medium">Up to 9 split-screen channels</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 sm:p-4 font-medium text-foreground">Channel Search & Sorting</td>
                        <td className="p-3.5 sm:p-4">Basic channel list</td>
                        <td className="p-3.5 sm:p-4 text-foreground font-medium">Manual reordering, search & hide groups</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 sm:p-4 font-medium text-foreground">Settings Backup & Restore</td>
                        <td className="p-3.5 sm:p-4">No</td>
                        <td className="p-3.5 sm:p-4 text-foreground font-medium">Export/import configuration file</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-xs text-muted-foreground">
                  * Pricing is handled through Google Play in-app purchases (annual subscription or a one-time lifetime license). A single license authorizes up to 5 devices simultaneously.
                </p>
              </div>

              {/* Setup Walkthrough */}
              <div className="space-y-6">
                <h2 className="font-headline text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Step-by-Step Setup: Adding TryIPTV to TiviMate
                </h2>
                <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                  We strongly recommend connecting via the <strong>Xtream Codes API</strong> rather than a raw M3U URL. Xtream Codes queries channel categories and VOD entries dynamically on demand, which avoids memory lag when updating large channel lineups:
                </p>

                <div className="space-y-4">
                  <div className="rounded-xl border border-white/[0.08] bg-[#07080a] p-5">
                    <span className="font-mono text-xs font-bold text-primary">STEP 1</span>
                    <h3 className="mt-1 font-headline text-base font-bold text-foreground">
                      Install TiviMate on Your Device
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      On <strong>Android TV</strong> or <strong>Google TV</strong> (e.g. Chromecast with Google TV, NVIDIA Shield, Sony TV), install directly from the Google Play Store. On <strong>Amazon Fire TV Stick</strong>, install the <Link href="/devices/firestick-iptv" className="text-primary underline underline-offset-4">Downloader app</Link>, enable unknown apps permissions in Fire TV Developer Options, and enter the official TiviMate download code or URL.
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/[0.08] bg-[#07080a] p-5">
                    <span className="font-mono text-xs font-bold text-primary">STEP 2</span>
                    <h3 className="mt-1 font-headline text-base font-bold text-foreground">
                      Add a New Playlist via Xtream Codes
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Launch TiviMate and click <strong>Add Playlist</strong>. Select <strong>Xtream Codes</strong>. (If you already have a playlist loaded, go to Settings &gt; Playlists &gt; Add playlist &gt; Xtream Codes).
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/[0.08] bg-[#07080a] p-5">
                    <span className="font-mono text-xs font-bold text-primary">STEP 3</span>
                    <h3 className="mt-1 font-headline text-base font-bold text-foreground">
                      Enter Server URL, Username, and Password
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Enter the server details provided in your TryIPTV activation email:
                    </p>
                    <ul className="mt-2.5 space-y-1.5 text-xs sm:text-sm text-muted-foreground list-disc pl-5">
                      <li><strong>Server address:</strong> The URL (including protocol and port, e.g., <code className="text-primary font-mono text-xs bg-white/[0.04] px-1 py-0.5 rounded">http://line.tryiptv.com:80</code>). Ensure there is no trailing space or slash.</li>
                      <li><strong>Username:</strong> Your assigned username.</li>
                      <li><strong>Password:</strong> Your assigned password.</li>
                      <li><strong>Include VOD:</strong> Check the box if you want access to Movies and TV Series on demand.</li>
                    </ul>
                  </div>

                  <div className="rounded-xl border border-white/[0.08] bg-[#07080a] p-5">
                    <span className="font-mono text-xs font-bold text-primary">STEP 4</span>
                    <h3 className="mt-1 font-headline text-base font-bold text-foreground">
                      Assign EPG &amp; Initialize Channel Guide
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Click <strong>Next</strong>, name the playlist &ldquo;TryIPTV&rdquo;, and click <strong>Done</strong>. TiviMate will process the channel bouquet and automatically assign the server EPG source. Allow 60–120 seconds for the initial guide data to download and index into the TV grid.
                    </p>
                  </div>
                </div>
              </div>

              {/* Essential Configuration Tweaks */}
              <div className="space-y-6">
                <h2 className="font-headline text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Recommended TiviMate Settings for Maximum Stability
                </h2>
                <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                  Fine-tuning these specific parameters in TiviMate solves the majority of playback and buffering complaints:
                </p>

                <div className="space-y-4">
                  <div className="rounded-lg border border-white/[0.07] bg-white/[0.015] p-4 sm:p-5">
                    <h3 className="text-sm sm:text-base font-bold text-foreground flex items-center gap-2">
                      <Settings className="h-4 w-4 text-primary" /> Stream Output Format: MPEG-TS vs. HLS
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Navigate to <strong>Settings &gt; Playlists &gt; TryIPTV &gt; Xtream Codes parameters &gt; Output format</strong>. By default, most providers stream via <code className="font-mono text-xs text-primary">MPEG-TS</code>. If you notice stuttering or micro-freezes during high-traffic events, switch this setting to <code className="font-mono text-xs text-primary">HLS</code>. HLS delivers video in segmented chunks that navigate intermediate ISP traffic routing and Wi-Fi packet drops more smoothly. For deeper background, see our <Link href="/guides/m3u-vs-xtream-codes" className="text-primary underline underline-offset-4">M3U vs Xtream Codes comparison</Link>.
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/[0.07] bg-white/[0.015] p-4 sm:p-5">
                    <h3 className="text-sm sm:text-base font-bold text-foreground flex items-center gap-2">
                      <Settings className="h-4 w-4 text-primary" /> Buffer Size Configuration
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Go to <strong>Settings &gt; Playback &gt; Buffer size</strong>. Default is &ldquo;None&rdquo;. If your connection suffers from momentary ping spikes or Wi-Fi interference, setting this to <strong>Small</strong> or <strong>Medium</strong> gives the player a 3–5 second preloaded buffer. Avoid &ldquo;Large&rdquo; unless you are on a very high-latency satellite connection, as it increases channel-change latency. Read our full <Link href="/help/iptv-buffering" className="text-primary underline underline-offset-4">IPTV Buffering Checklist</Link> for additional network diagnostics.
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/[0.07] bg-white/[0.015] p-4 sm:p-5">
                    <h3 className="text-sm sm:text-base font-bold text-foreground flex items-center gap-2">
                      <Settings className="h-4 w-4 text-primary" /> Custom User-Agent Field
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Under <strong>Settings &gt; General &gt; User-Agent</strong> (or per-playlist under Playlist settings), you can define a custom client identifier. Entering strings such as <code className="font-mono text-xs text-primary">VLC</code> or <code className="font-mono text-xs text-primary">IPTVSmartersPlayer</code> is a proven solution if your stream encounters HTTP 403 authorization blocks from intermediate server filters.
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/[0.07] bg-white/[0.015] p-4 sm:p-5">
                    <h3 className="text-sm sm:text-base font-bold text-foreground flex items-center gap-2">
                      <Settings className="h-4 w-4 text-primary" /> Setting Up SMB Network Share for Recording
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      To prevent Firestick storage exhaustion, open a shared folder on your PC or NAS with read/write permissions. In TiviMate, go to <strong>Settings &gt; Other &gt; Recording &gt; Recording folder &gt; Select folder &gt; LAN/SMB</strong>. Enter the local IP address of your computer, shared folder name, and Windows/SMB login credentials. All future scheduled recordings will save directly to your computer hard drive without consuming device memory.
                    </p>
                  </div>
                </div>
              </div>

              {/* Troubleshooting Matrix */}
              <div className="space-y-6">
                <h2 className="font-headline text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  TiviMate Troubleshooting Matrix: Isolating Common Errors
                </h2>
                <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                  When a stream or guide fails in TiviMate, isolate the issue systematically rather than assuming the app or server is permanently down:
                </p>

                <div className="overflow-x-auto rounded-lg border border-white/[0.08]">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="border-b border-white/[0.08] bg-white/[0.02] text-foreground">
                      <tr>
                        <th className="p-3.5 sm:p-4 font-semibold">Symptom / Code</th>
                        <th className="p-3.5 sm:p-4 font-semibold">Probable Root Cause</th>
                        <th className="p-3.5 sm:p-4 font-semibold">Actionable Resolution</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/[0.06] text-muted-foreground">
                      <tr>
                        <td className="p-3.5 sm:p-4 font-medium text-foreground">&ldquo;An error occurred: Code 401&rdquo;</td>
                        <td className="p-3.5 sm:p-4">Unauthorized credentials or expired account token.</td>
                        <td className="p-3.5 sm:p-4">Re-verify username and password in Xtream Codes parameters. Check for accidental spaces.</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 sm:p-4 font-medium text-foreground">&ldquo;An error occurred: Code 403&rdquo;</td>
                        <td className="p-3.5 sm:p-4">Forbidden: connection limit exceeded or User-Agent header blocked.</td>
                        <td className="p-3.5 sm:p-4">Ensure no more than 2 devices are streaming simultaneously. Add &ldquo;VLC&rdquo; into the User-Agent field.</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 sm:p-4 font-medium text-foreground">&ldquo;ParserException&rdquo; during update</td>
                        <td className="p-3.5 sm:p-4">Corrupted M3U playlist data or incomplete XMLTV response.</td>
                        <td className="p-3.5 sm:p-4">Switch connection type to Xtream Codes API. Clear TiviMate app cache in Android device settings.</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 sm:p-4 font-medium text-foreground">No Information (Blank EPG)</td>
                        <td className="p-3.5 sm:p-4">EPG source not linked to playlist, or update timed out.</td>
                        <td className="p-3.5 sm:p-4">Go to Settings &gt; EPG &gt; EPG sources &gt; Update now. Ensure playlist has &ldquo;Default EPG source&rdquo; assigned. See <Link href="/help/epg-not-working" className="text-primary underline">EPG fix guide</Link>.</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 sm:p-4 font-medium text-foreground">EPG Show Times are Incorrect</td>
                        <td className="p-3.5 sm:p-4">Timezone offset mismatch between server and local device.</td>
                        <td className="p-3.5 sm:p-4">In Settings &gt; EPG &gt; EPG sources &gt; [Source], adjust &ldquo;Time offset&rdquo; by +X or -X hours until guide aligns with local time.</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 sm:p-4 font-medium text-foreground">Multi-View Streams Freezing</td>
                        <td className="p-3.5 sm:p-4">Local hardware decoder overload or provider connection cap.</td>
                        <td className="p-3.5 sm:p-4">Running 4+ 4K streams can exceed Firestick GPU capacity. Keep multi-view to 2 streams (TryIPTV includes 2 connections) and reduce resolution if needed.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* FAQs Section */}
              <div className="space-y-6 pt-4">
                <h2 className="font-headline text-2xl font-bold tracking-tight text-foreground sm:text-3xl flex items-center gap-2">
                  <HelpCircle className="h-6 w-6 text-primary" /> Frequently Asked Questions About TiviMate
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
                  <Link href="/devices/firestick-iptv" className="flex items-center justify-between p-3 rounded-lg border border-white/[0.06] bg-white/[0.02] hover:border-primary/40 transition-colors">
                    <span>How to Install IPTV on Firestick</span>
                    <ArrowRight className="h-4 w-4 text-primary" />
                  </Link>
                  <Link href="/devices/android-tv-iptv" className="flex items-center justify-between p-3 rounded-lg border border-white/[0.06] bg-white/[0.02] hover:border-primary/40 transition-colors">
                    <span>How to Install IPTV on Android TV</span>
                    <ArrowRight className="h-4 w-4 text-primary" />
                  </Link>
                  <Link href="/guides/what-are-xtream-codes" className="flex items-center justify-between p-3 rounded-lg border border-white/[0.06] bg-white/[0.02] hover:border-primary/40 transition-colors">
                    <span>What Are Xtream Codes API Logins?</span>
                    <ArrowRight className="h-4 w-4 text-primary" />
                  </Link>
                  <Link href="/help/iptv-buffering" className="flex items-center justify-between p-3 rounded-lg border border-white/[0.06] bg-white/[0.02] hover:border-primary/40 transition-colors">
                    <span>IPTV Buffering Diagnosis &amp; Fixes</span>
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
                    Verify TiviMate performance on your television with real live sports and 4K streams before paying for any subscription.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-xs text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                      <span>{PRODUCT_TRUTHS.channels} live channels &amp; {PRODUCT_TRUTHS.vod} VOD</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                      <span>{PRODUCT_TRUTHS.connections} simultaneous connections included</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                      <span>Full Xtream Codes &amp; M3U EPG delivery</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                      <span>No credit card required for trial</span>
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

              {/* Official Verification Reference */}
              <div className="rounded-xl border border-white/[0.08] bg-[#07080a] p-4 text-xs text-muted-foreground space-y-2">
                <span className="font-mono text-[10px] uppercase font-bold text-foreground">Official Developer Resource</span>
                <p>
                  Official developer: Armobsoft FZE.<br />
                  Official site: <a href="https://tivimate.com" target="_blank" rel="noopener noreferrer" className="text-primary underline">tivimate.com</a>.<br />
                  Companion app available on Google Play Store for Android.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  );
}
