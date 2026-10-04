import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertTriangle, ShieldCheck, Tv, Globe, HardDrive, Calendar, HelpCircle, Laptop, Settings, Play } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Container } from "@/components/shared/Container";
import { Schema } from "@/components/shared/Schema";
import { Section } from "@/components/shared/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { generateArticleSchema, generateBreadcrumbSchema, generateFAQPageSchema } from "@/lib/schema";
import { PRODUCT_TRUTHS, SITE_URL, generateMetadata as generatePageMetadata } from "@/lib/site-config";

const title = "IPTV Extreme Setup Guide: Web Portal Upload, Recording & Multi-EPG";
const description =
  "Complete guide to IPTV Extreme & IPTV Extreme Pro by Paolo Turatti. Learn how to upload playlists via iptvextreme.eu, schedule live recordings, and configure Multi-EPG.";
const canonical = "/players/iptv-extreme";
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
    question: "Who develops IPTV Extreme, and what makes the web portal feature so useful?",
    answer:
      "IPTV Extreme is developed by Italian developer Paolo Turatti. Its standout feature is remote web portal management via iptvextreme.eu. Rather than forcing users to type complex, 80-character M3U URLs or server links using a clumsy television remote on-screen keyboard, IPTV Extreme displays a unique MAC address on screen. You simply open iptvextreme.eu on your laptop or smartphone, enter that MAC address, and paste your TryIPTV playlist or Xtream Codes details. The playlist synchronizes directly to your TV over the cloud.",
  },
  {
    question: "How does live stream recording work in IPTV Extreme, and why do recordings fail?",
    answer:
      "IPTV Extreme includes a built-in DVR recording engine that can record live broadcasts on demand or schedule recordings based on EPG program schedules. Recordings fail most often due to two issues: first, on modern Android 11+ and Fire OS devices, Android's Scoped Storage restricts apps from writing to arbitrary folders; you must configure the recording folder inside the app's accessible internal storage directory. Second, recording requires an active streaming connection; if you watch one channel while recording another on a single-connection IPTV plan, the provider server will terminate one of the streams.",
  },
  {
    question: "Is the MAC address shown in IPTV Extreme the same as my TV's physical hardware MAC?",
    answer:
      "Not necessarily. IPTV Extreme generates its own software-level virtual MAC address identifier upon installation. When logging into iptvextreme.eu to upload your playlist, always copy the exact MAC address displayed inside the IPTV Extreme settings screen (Settings > About or on the initial welcome screen), rather than checking your television's network hardware settings.",
  },
  {
    question: "What is Multi-EPG support in IPTV Extreme?",
    answer:
      "Many IPTV players only permit a single Electronic Program Guide URL. IPTV Extreme allows users to add up to 10 independent EPG sources simultaneously. If an IPTV provider's EPG has missing schedules for specific sports or regional channels, you can add an external secondary XMLTV guide and manually map it to those specific channels.",
  },
  {
    question: "What is the difference between IPTV Extreme Free and IPTV Extreme Pro?",
    answer:
      "Both versions share identical core playback engines, recording functions, and web portal integration. The free version displays banner advertisements in menu interfaces, while IPTV Extreme Pro is an affordable one-time purchase from the Google Play Store that permanently eliminates all advertising for a clean viewing experience.",
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
  { name: "IPTV Extreme", item: `${SITE_URL}${canonical}` },
]);

const faqSchema = generateFAQPageSchema(faqs);

export default function IptvExtremePage() {
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
              { label: "IPTV Extreme" },
            ]}
          />

          <div className="mt-8 max-w-4xl">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-primary">
              IPTV Player Architecture & Guide
            </span>
            <h1 className="mt-3 font-headline text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              IPTV Extreme Setup: Web Portal Upload, DVR Recording &amp; Multi-EPG
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              IPTV Extreme (developed by Paolo Turatti) eliminates the single most frustrating part of television streaming: typing long playlist URLs with a remote control. Through its dedicated cloud portal (iptvextreme.eu), built-in scheduled DVR recording engine, and 10-source Multi-EPG manager, IPTV Extreme provides veteran streamers with robust functionality.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 font-medium text-foreground">
                <Globe className="h-3.5 w-3.5 text-primary" /> Web Portal Management (iptvextreme.eu)
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 font-medium text-foreground">
                <Calendar className="h-3.5 w-3.5 text-primary" /> Scheduled DVR Recording
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 font-medium text-foreground">
                <Tv className="h-3.5 w-3.5 text-primary" /> Multi-EPG (Up to 10 Sources)
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 font-medium text-foreground">
                <HardDrive className="h-3.5 w-3.5 text-primary" /> Android TV &amp; Fire OS
              </span>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="py-12 sm:py-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="space-y-12 lg:col-span-8">
              {/* Web Portal Architecture */}
              <div>
                <h2 className="font-headline text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Remote Cloud Management: How iptvextreme.eu Works
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <p>
                    Anyone who has ever set up an IPTV player on a Firestick or Android TV knows the pain of typing complicated server URLs, alphanumeric usernames, and 16-character passwords using directional arrow keys on a remote.
                  </p>
                  <p>
                    Paolo Turatti solved this problem by creating an online configuration bridge:
                  </p>
                  <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-5 space-y-4">
                    <div className="flex items-start gap-3">
                      <Laptop className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-foreground text-sm">Browser-to-TV Synchronization</h4>
                        <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                          When IPTV Extreme is installed, it registers a unique MAC identifier. You open <strong className="text-foreground">iptvextreme.eu</strong> on any desktop, tablet, or phone browser, submit your MAC address, and paste your TryIPTV M3U or Xtream Codes details. The web server relays the configuration directly to your television app within seconds.
                        </p>
                      </div>
                    </div>
                  </div>
                  <p>
                    This browser-first workflow allows you to copy-paste activation emails directly from your computer without risk of remote-control typos.
                  </p>
                </div>
              </div>

              {/* Technical Profile Table */}
              <div>
                <h2 className="font-headline text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  IPTV Extreme Technical Specification &amp; Architecture
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Official specifications for IPTV Extreme &amp; IPTV Extreme Pro based on releases by Paolo Turatti.
                </p>
                <div className="mt-6 overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.02]">
                  <table className="w-full text-left text-sm">
                    <tbody className="divide-y divide-white/[0.06]">
                      <tr className="bg-white/[0.01]">
                        <td className="p-4 font-mono text-xs font-medium text-muted-foreground">Lead Developer</td>
                        <td className="p-4 font-medium text-foreground">Paolo Turatti</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-mono text-xs font-medium text-muted-foreground">Supported Platforms</td>
                        <td className="p-4 text-muted-foreground">Android TV, Google TV, Android Phones/Tablets, Fire TV (Sideloaded APK)</td>
                      </tr>
                      <tr className="bg-white/[0.01]">
                        <td className="p-4 font-mono text-xs font-medium text-muted-foreground">Remote Configuration Portal</td>
                        <td className="p-4 text-muted-foreground">Official web portal at iptvextreme.eu (Synchronize by software MAC address)</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-mono text-xs font-medium text-muted-foreground">Recording Engine</td>
                        <td className="p-4 text-muted-foreground">Built-in live stream DVR with scheduled timers and EPG program time integration</td>
                      </tr>
                      <tr className="bg-white/[0.01]">
                        <td className="p-4 font-mono text-xs font-medium text-muted-foreground">EPG Architecture</td>
                        <td className="p-4 text-muted-foreground">Multi-EPG engine supporting up to 10 simultaneous XMLTV sources with manual channel mapping</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-mono text-xs font-medium text-muted-foreground">Internal Player Modes</td>
                        <td className="p-4 text-muted-foreground">Advanced Player (LibVLC core) and Light Player (Android MediaCodec framework)</td>
                      </tr>
                      <tr className="bg-white/[0.01]">
                        <td className="p-4 font-mono text-xs font-medium text-muted-foreground">Licensing Structure</td>
                        <td className="p-4 text-muted-foreground">Free (Ad-supported) or IPTV Extreme Pro (One-time Google Play purchase for ad removal)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Step-by-Step Setup */}
              <div>
                <h2 className="font-headline text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Step-by-Step: Adding TryIPTV via iptvextreme.eu
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  The easiest way to configure IPTV Extreme is through the official web portal:
                </p>

                <div className="mt-6 space-y-6">
                  <div className="flex gap-4 rounded-xl border border-white/[0.08] bg-white/[0.02] p-5">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20 font-mono text-sm font-bold text-primary">
                      1
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-headline text-base font-bold text-foreground">
                        Find Your Virtual MAC Address
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Launch IPTV Extreme on your television. Upon opening, the app displays your unique virtual MAC address (formatted as <code className="rounded bg-white/[0.05] px-1 py-0.5 text-foreground">XX:XX:XX:XX:XX:XX</code>). Write this down or keep the screen visible.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 rounded-xl border border-white/[0.08] bg-white/[0.02] p-5">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20 font-mono text-sm font-bold text-primary">
                      2
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-headline text-base font-bold text-foreground">
                        Open iptvextreme.eu on Your Computer or Phone
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        On your laptop or mobile browser, navigate to <strong>https://iptvextreme.eu</strong>.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 rounded-xl border border-white/[0.08] bg-white/[0.02] p-5">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20 font-mono text-sm font-bold text-primary">
                      3
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-headline text-base font-bold text-foreground">
                        Submit Your Playlist Details
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Enter your MAC Address. Under &quot;Playlist Name&quot;, enter <strong>TryIPTV</strong>. Under &quot;Playlist Link&quot;, paste your complete TryIPTV M3U URL, or enter your Xtream Codes credentials. Check the reCAPTCHA box and click <strong>Save</strong>.
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Need help understanding your playlist structure? Read our guide on{" "}
                        <Link href="/guides/what-is-m3u" className="text-primary underline hover:text-primary/80">
                          What Is an M3U Playlist
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
                        Reload the TV App
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Return to your TV screen. Press the menu button on your remote and select <strong>Reload Playlists</strong>, or simply exit and reopen IPTV Extreme. Your channels, categories, and EPG schedules will load immediately.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* DVR Recording Guide */}
              <div>
                <h2 className="font-headline text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Configuring the Scheduled DVR Recording Engine
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <p>
                    IPTV Extreme allows you to record live broadcasts directly to your device storage:
                  </p>
                  <ol className="list-inside list-decimal space-y-3 rounded-xl border border-white/[0.08] bg-white/[0.02] p-5 text-sm">
                    <li>
                      <strong className="text-foreground">Schedule via EPG:</strong> In the channel guide, select an upcoming sporting event or TV show, press and hold the OK button, and choose <strong>Record Program</strong>. IPTV Extreme creates a background timer that will automatically awaken the stream and write the video file to disk.
                    </li>
                    <li>
                      <strong className="text-foreground">Configure the Recording Folder:</strong> Navigate to <strong>Settings &gt; Recording &gt; Recording Folder</strong>. On Android 11+ and modern Fire OS, choose an app-specific directory (such as <code className="rounded bg-white/[0.05] px-1 py-0.5 text-foreground">/Android/data/com.pecana.iptvextreme/files/</code>) to avoid Android Scoped Storage write permission denials.
                    </li>
                    <li>
                      <strong className="text-foreground">Monitor Simultaneous Stream Limits:</strong> Recording a channel while streaming another channel uses 2 simultaneous connections. TryIPTV includes <strong className="text-foreground">{PRODUCT_TRUTHS.connections} connections standard</strong>, allowing you to watch and record simultaneously without server blocks.
                    </li>
                  </ol>
                </div>
              </div>

              {/* Troubleshooting Matrix */}
              <div>
                <h2 className="font-headline text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  IPTV Extreme Real-World Troubleshooting Matrix
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Common operational errors in IPTV Extreme and verified fixes:
                </p>

                <div className="mt-6 space-y-4">
                  <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="font-mono text-xs font-semibold text-red-400">Issue: Recording Aborted / Storage Write Failed</span>
                        <h4 className="mt-1 font-semibold text-foreground text-base">Android Scoped Storage Permission Denial</h4>
                      </div>
                      <HardDrive className="h-5 w-5 shrink-0 text-red-400" />
                    </div>
                    <div className="mt-3 space-y-2 text-xs text-muted-foreground">
                      <p><strong>Root Cause:</strong> The chosen folder on your USB drive or internal flash memory was blocked by Android 11+ security sandbox rules.</p>
                      <p><strong>Resolution:</strong> In IPTV Extreme Settings &gt; Recording &gt; Recording Folder, select the app&apos;s default internal storage directory or grant &quot;Manage All Files&quot; permission under Android System Settings &gt; Apps &gt; IPTV Extreme &gt; Permissions.</p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="font-mono text-xs font-semibold text-amber-400">Issue: iptvextreme.eu Reports &quot;MAC Address Not Found&quot;</span>
                        <h4 className="mt-1 font-semibold text-foreground text-base">Virtual MAC vs Hardware MAC Mismatch</h4>
                      </div>
                      <Globe className="h-5 w-5 shrink-0 text-amber-400" />
                    </div>
                    <div className="mt-3 space-y-2 text-xs text-muted-foreground">
                      <p><strong>Root Cause:</strong> Submitting your TV&apos;s physical Wi-Fi/Ethernet MAC address rather than the virtual identifier generated by the app.</p>
                      <p><strong>Resolution:</strong> Launch IPTV Extreme &gt; select Settings &gt; About. Copy the exact 12-character hexadecimal string shown under &quot;Application MAC&quot;.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQs */}
              <div>
                <h2 className="font-headline text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Frequently Asked Questions About IPTV Extreme
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
                  <CardTitle className="text-lg text-foreground">TryIPTV + IPTV Extreme</CardTitle>
                  <CardDescription className="text-xs">
                    Easy web configuration with scheduled DVR streaming
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
                      <span>Full compatibility with iptvextreme.eu</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Over {PRODUCT_TRUTHS.channels} live TV channels</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Reliable XMLTV EPG schedule sources</span>
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
                      Dedicated TV remote interface and SMB network DVR.
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
                  <CardTitle className="text-base text-foreground">Setup Guides</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-xs">
                  <Link href="/guides/what-is-m3u" className="block text-muted-foreground hover:text-primary">
                    → What Is an M3U Playlist &amp; How Does It Work?
                  </Link>
                  <Link href="/guides/what-is-epg" className="block text-muted-foreground hover:text-primary">
                    → How Electronic Program Guides (EPG) Work
                  </Link>
                  <Link href="/devices/firestick-iptv" className="block text-muted-foreground hover:text-primary">
                    → Firestick IPTV Setup &amp; Sideloading Guide
                  </Link>
                  <Link href="/help/iptv-buffering" className="block text-muted-foreground hover:text-primary">
                    → How to Stop IPTV Buffering
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
