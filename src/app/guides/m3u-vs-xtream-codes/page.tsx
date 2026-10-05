import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  FileText,
  HelpCircle,
  KeyRound,
  Layers,
  ListFilter,
  MonitorPlay,
  Server,
  Tv,
} from "lucide-react";
import { FaqList } from "@/components/sections/FAQ";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Container } from "@/components/shared/Container";
import { Schema } from "@/components/shared/Schema";
import { Section } from "@/components/shared/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
  generateFAQPageSchema,
} from "@/lib/schema";
import { SITE_URL, generateMetadata as generatePageMetadata } from "@/lib/site-config";

const title = "M3U vs Xtream Codes: What's the Difference?";
const description =
  "A neutral comparison between M3U playlists and Xtream-compatible API logins for IPTV: data delivery models, content organization, player support, and practical trade-offs.";
const canonical = "/guides/m3u-vs-xtream-codes";
const publishedDate = "2026-10-05";

/**
 * M3U vs Xtream Codes Comparison Guide
 * Canonical: https://www.tryiptv.com/guides/m3u-vs-xtream-codes
 * Source of truth: src/lib/site-routes.ts (indexable: true)
 */
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
    question: "Do M3U and Xtream Codes provide access to different channels?",
    answer:
      "Generally no, assuming both methods are connected to the same subscription profile with the same IPTV provider. The underlying streams and content library are typically identical. The difference lies in how the information is packaged and delivered to your player application—as a continuous text playlist or through structured API queries.",
  },
  {
    question: "Is Xtream Codes universally better than M3U?",
    answer:
      "Neither method is universally superior. An Xtream-compatible login offers convenient category organization and integrated account checks when supported by modern player apps. However, M3U playlists offer broader portability across a wider range of media players, hardware platforms, and standalone media tools that do not support custom API integrations.",
  },
  {
    question: "Does Xtream Codes automatically guarantee that TV guide (EPG) data will work?",
    answer:
      "No. While common Xtream-compatible APIs expose EPG endpoints that compatible players can query automatically, guide data accuracy still depends entirely on whether the provider maintains valid schedule listings for those stream IDs. If the server lacks guide data for a specific channel, an Xtream login cannot supply it.",
  },
  {
    question: "Can I use an M3U playlist with an Electronic Programme Guide?",
    answer:
      "Yes. Most modern IPTV players allow users to pair an M3U playlist with one or more external XMLTV guide URLs. If the channel entries in the playlist include standard community tags (such as tvg-id), the player can automatically match the channels to the external schedule data.",
  },
  {
    question: "Can I save an Xtream Codes login as a local file?",
    answer:
      "No. An Xtream Codes connection relies on interactive communication between the player and the server's API endpoints. In contrast, an M3U playlist can be downloaded and stored locally on your device as a static .m3u or .m3u8 text file if offline portability is required.",
  },
  {
    question: "Can I switch between M3U and Xtream Codes without changing my subscription?",
    answer:
      "In most IPTV services, yes. Providers commonly supply both an M3U playlist URL and Xtream Codes credentials (Server URL, Username, and Password) for the same subscription, allowing you to configure whichever connection method best suits your player application.",
  },
];

const comparisonRows = [
  {
    feature: "Information entered by user",
    m3u: "A single playlist web link (URL) or a saved local .m3u/.m3u8 file.",
    xtream: "Server URL, Username, and Password (port entered separately or in URL).",
  },
  {
    feature: "Data delivery model",
    m3u: "Downloads or parses a complete list of media stream entries.",
    xtream: "Communicates via HTTP requests to retrieve structured JSON data.",
  },
  {
    feature: "Content categorization",
    m3u: "Groups channels based on text attributes (e.g., group-title) inside the playlist.",
    xtream: "Queries server-defined categories for Live TV, Movies, and TV Series.",
  },
  {
    feature: "TV Guide (EPG) handling",
    m3u: "Often paired with a separate XMLTV URL; matched via tvg-id tags.",
    xtream: "Common implementations expose EPG endpoints queried by the player.",
  },
  {
    feature: "VOD & Series organization",
    m3u: "VOD streams appear as playlist entries; structure depends on file generator.",
    xtream: "Common APIs expose dedicated series, season, and episode metadata.",
  },
  {
    feature: "Local file support",
    m3u: "Can be saved locally on storage as a static offline text file.",
    xtream: "Requires live network communication with server API endpoints.",
  },
  {
    feature: "Player compatibility",
    m3u: "Broad compatibility across dedicated IPTV apps, VLC, Kodi, and media centers.",
    xtream: "Supported by specialized IPTV players (e.g., TiviMate, Smarters, Televizo).",
  },
  {
    feature: "Troubleshooting focus",
    m3u: "URL reachability, line syntax, parsing integrity, and character encoding.",
    xtream: "API endpoint status, credential authentication, and port reachability.",
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
  { name: "Guides", item: `${SITE_URL}/guides` },
  { name: "M3U vs Xtream Codes", item: `${SITE_URL}${canonical}` },
]);

const faqSchema = generateFAQPageSchema(faqs);

export default function M3uVsXtreamCodesPage() {
  return (
    <>
      <Schema id="article" schema={articleSchema} />
      <Schema id="breadcrumb" schema={breadcrumbSchema} />
      <Schema id="faq" schema={faqSchema} />

      {/* Hero Header */}
      <Section className="border-b border-white/[0.07] pt-10 pb-14 sm:pt-14 sm:pb-20">
        <Container>
          <Breadcrumb
            items={[
              { label: "Guides", href: "/guides" },
              { label: "M3U vs Xtream Codes" },
            ]}
            align="center"
          />
          <div className="mx-auto max-w-4xl text-center">
            <p className="eyebrow mb-3">Format Comparison</p>
            <h1 className="font-headline text-3xl font-extrabold leading-[1.15] text-foreground sm:text-4xl lg:text-5xl">
              M3U vs Xtream Codes: What&apos;s the Difference?
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
              When configuring an IPTV player, services typically offer two connection options: an M3U
              playlist or an Xtream-compatible login. Understand how each method operates, where their
              practical differences lie, and how to choose the right format for your setup.
            </p>
          </div>
        </Container>
      </Section>

      {/* Main Content Article */}
      <Section>
        <Container>
          <article className="mx-auto max-w-4xl">
            {/* Quick Answer Callout */}
            <div className="mb-10 rounded-xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
              <h2 className="text-lg font-bold text-foreground sm:text-xl">
                The Core Distinction: Delivery Models Compared
              </h2>
              <p className="mt-3 text-base leading-7 text-muted-foreground">
                In most IPTV setups, an <strong className="text-foreground font-semibold">M3U playlist</strong> and
                an <strong className="text-foreground font-semibold">Xtream Codes login</strong> provide access
                to the exact same channel streams and video library. The primary difference is how that data is
                delivered to and ingested by your media player.
              </p>
              <p className="mt-3 text-base leading-7 text-muted-foreground">
                An M3U connection provides a text file listing stream URLs and associated channel tags. An
                Xtream-compatible login allows the player to communicate with the provider&apos;s server via
                structured API queries, fetching categories, account status, and guide data interactively.
                Neither format is universally superior; your choice depends on the capabilities of your
                player application and your device requirements.
              </p>
            </div>

            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p>
                To understand the underlying specifications of each format in detail, you can read our
                dedicated technical guides on{" "}
                <Link href="/guides/what-is-m3u" className="text-primary hover:underline">
                  what an M3U playlist is
                </Link>{" "}
                and{" "}
                <Link href="/guides/what-are-xtream-codes" className="text-primary hover:underline">
                  how Xtream Codes API logins work
                </Link>
                . Below, we compare their practical characteristics directly.
              </p>

              <h2>Direct Comparison Overview</h2>
              <p>
                The table below outlines how M3U playlists and Xtream-compatible connections handle common
                aspects of media delivery:
              </p>
            </div>

            {/* Comparison Table */}
            <div className="my-8 overflow-hidden rounded-xl border border-white/[0.08]">
              <div className="grid grid-cols-1 bg-card px-4 py-3 text-xs sm:text-sm font-bold text-foreground sm:grid-cols-12 border-b border-white/[0.08]">
                <div className="sm:col-span-3">Feature</div>
                <div className="sm:col-span-4">M3U Playlist</div>
                <div className="sm:col-span-5">Xtream-Compatible API</div>
              </div>
              {comparisonRows.map((row, idx) => (
                <div
                  key={row.feature}
                  className={`grid grid-cols-1 gap-2 px-4 py-4 text-xs sm:text-sm leading-6 sm:grid-cols-12 ${
                    idx !== 0 ? "border-t border-white/[0.08]" : ""
                  } ${idx % 2 === 1 ? "bg-white/[0.01]" : ""}`}
                >
                  <div className="font-semibold text-foreground sm:col-span-3">{row.feature}</div>
                  <div className="text-muted-foreground sm:col-span-4">{row.m3u}</div>
                  <div className="text-muted-foreground sm:col-span-5">{row.xtream}</div>
                </div>
              ))}
            </div>

            <div className="prose prose-lg max-w-none dark:prose-invert">
              <h2>Architectural Ingestion Models</h2>
              <p>
                The fundamental technical divergence between these two approaches lies in their ingestion
                architecture—how the player reads and processes content:
              </p>

              <h3>The M3U File Ingestion Model</h3>
              <p>
                When a player connects via M3U, it typically requests a single text document containing every
                available channel. The player&apos;s internal parser must:
              </p>
              <ul>
                <li>Download the playlist text over HTTP or HTTPS (or read it from local disk).</li>
                <li>Iterate through lines sequentially, reading directives such as <code>#EXTINF</code>.</li>
                <li>Extract metadata attributes (such as <code>group-title</code> and <code>tvg-id</code>).</li>
                <li>Instantiate in-memory objects or store entries into an internal application cache.</li>
              </ul>
              <p>
                Because this model is self-contained in a standard text file, it requires no special API logic.
                Any player capable of reading URLs and parsing plain text can open an M3U file.
              </p>

              <h3>The Xtream API Query Model</h3>
              <p>
                An Xtream-compatible connection functions as an interactive client-server dialogue. Instead of
                downloading every entry in one monolithic document, the player sends structured HTTP requests
                to API endpoints (commonly <code>/player_api.php</code>):
              </p>
              <ul>
                <li>An initial authentication request checks subscription validity and server metadata.</li>
                <li>Subsequent requests query specific category lists on demand (e.g., Live Categories).</li>
                <li>Stream lists and program schedule data are retrieved in structured JSON blocks.</li>
              </ul>
              <p>
                <strong>Architectural Note:</strong> These represent two different software designs. While some
                users observe performance differences between apps when loading large libraries, actual
                startup times and responsiveness depend on how efficiently an individual application indexes
                data and manages device memory, rather than an inherent superiority of either protocol.
              </p>

              <h2>Electronic Programme Guide (EPG) Integration</h2>
              <p>
                Displaying an on-screen TV guide schedule is central to the television viewing experience, but
                the two formats coordinate guide data differently:
              </p>
              <ul>
                <li>
                  <strong>With M3U:</strong> The playlist file supplies channel entries with an identifying tag
                  (commonly <code>tvg-id</code>). To display schedules, the user or player commonly pairs the
                  playlist with a separate XMLTV guide link. While this requires managing two data sources, it
                  gives users the flexibility to attach custom or third-party EPG sources if a provider&apos;s
                  default listings are incomplete.
                </li>
                <li>
                  <strong>With Xtream Codes:</strong> Common server implementations expose built-in guide data
                  directly through the API. When supported, the player maps guide data automatically using
                  internal stream identifiers, reducing manual configuration. However, guide data accuracy
                  remains dependent on the provider maintaining valid listings on their server.
                </li>
              </ul>

              <h2>Video on Demand and TV Series Presentation</h2>
              <p>
                How on-demand movies and episodic series appear inside your player depends heavily on the
                connection method:
              </p>
              <ul>
                <li>
                  <strong>M3U Playlists:</strong> On-demand titles appear as individual stream entries within
                  the text file. A provider can group them into categories using <code>group-title</code> tags,
                  but standard M3U directives do not natively define hierarchical relationships between TV
                  shows, seasons, and episodes. How effectively these titles are organized depends on how the
                  playlist was generated and how intelligently the player interprets title strings.
                </li>
                <li>
                  <strong>Xtream-Compatible APIs:</strong> Common implementations provide dedicated API actions
                  specifically designed for on-demand catalogs (such as <code>get_vod_categories</code> and{" "}
                  <code>get_series</code>). This allows compatible players to present dedicated movie and series
                  interfaces, complete with season folders, episode ordering, and movie poster artwork where
                  supported.
                </li>
              </ul>

              <h2>Player and Hardware Compatibility</h2>
              <p>
                Compatibility is a primary factor when choosing between connection methods:
              </p>
            </div>

            <div className="my-8 grid gap-4 sm:grid-cols-2">
              <Card className="border-white/[0.08] bg-card/60">
                <CardHeader>
                  <CardTitle as="h3" className="flex items-center gap-2 text-base font-bold text-foreground">
                    <FileText className="h-5 w-5 text-primary" />
                    Broad Portability with M3U
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm leading-6 text-muted-foreground">
                  <p>
                    M3U is supported across virtually the entire media landscape, including:
                  </p>
                  <ul className="list-disc space-y-1 pl-5">
                    <li>Universal desktop players (VLC, MPV, PotPlayer).</li>
                    <li>Home theater software (Kodi with PVR IPTV Simple Client).</li>
                    <li>Smart TV apps and legacy media set-top boxes.</li>
                    <li>Local network media servers and custom automation scripts.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-white/[0.08] bg-card/60">
                <CardHeader>
                  <CardTitle as="h3" className="flex items-center gap-2 text-base font-bold text-foreground">
                    <KeyRound className="h-5 w-5 text-primary" />
                    Interactive Features with Xtream
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm leading-6 text-muted-foreground">
                  <p>
                    Xtream-compatible logins are supported by specialized IPTV players, including:
                  </p>
                  <ul className="list-disc space-y-1 pl-5">
                    <li>Dedicated TV apps (TiviMate, IPTV Smarters Pro).</li>
                    <li>Modern multi-platform clients (Televizo, XCIPTV).</li>
                    <li>Advanced Android TV players with multi-screen support.</li>
                    <li>Applications with dedicated VOD and series browsing tabs.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="prose prose-lg max-w-none dark:prose-invert">
              <h2>Which Method Should You Choose?</h2>
              <p>
                Because most IPTV subscriptions support both methods simultaneously, your choice should be
                guided by your current viewing context:
              </p>

              <h3>Choose an M3U Playlist When:</h3>
              <ul>
                <li>You are using general-purpose media software like VLC, Kodi, or an operating system tool that only accepts playlist URLs or local files.</li>
                <li>You want to store a static snapshot of your playlist locally on your computer or home server.</li>
                <li>You prefer to customize, filter, or reorder channels using a local text editor or playlist management utility.</li>
                <li>You wish to link custom third-party XMLTV guide data from an external source.</li>
              </ul>

              <h3>Choose an Xtream-Compatible Login When:</h3>
              <ul>
                <li>Your preferred player application (such as TiviMate or IPTV Smarters) provides an Xtream login interface.</li>
                <li>You regularly watch on-demand TV series and appreciate automated season and episode grouping.</li>
                <li>You prefer automated guide matching without needing to copy and manage secondary XMLTV guide links.</li>
                <li>You want to monitor your subscription expiration date and active connection status directly within your player&apos;s settings menu.</li>
              </ul>
            </div>

            {/* Contextual TryIPTV Note */}
            <div className="my-10 rounded-xl border border-white/[0.08] bg-card/40 p-6 sm:p-8">
              <h3 className="text-lg font-bold text-foreground">
                Dual-Format Access with TryIPTV
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                TryIPTV provides both standard Extended M3U playlist links and Xtream-compatible credentials
                with every subscription. You can test both connection formats during our free trial to decide
                which interface delivers the most comfortable experience on your television or mobile setup.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Button asChild size="sm" variant="outline">
                  <Link href="/iptv-free-trial">
                    Explore Free Trial <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                  </Link>
                </Button>
                <Button asChild size="sm" variant="ghost">
                  <Link href="/pricing">View Subscription Plans</Link>
                </Button>
              </div>
            </div>
          </article>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section className="border-t border-white/[0.07] bg-black/20">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center sm:text-left">
              <p className="eyebrow mb-2">Frequently Asked Questions</p>
              <h2 className="font-headline text-2xl font-bold text-foreground sm:text-3xl">
                Common Questions: M3U vs Xtream Codes
              </h2>
            </div>
            <FaqList items={faqs} />
          </div>
        </Container>
      </Section>
    </>
  );
}
