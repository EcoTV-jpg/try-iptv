import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Code, Globe, List, Tv } from "lucide-react";
import { FaqList } from "@/components/sections/FAQ";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Container } from "@/components/shared/Container";
import { Schema } from "@/components/shared/Schema";
import { Section } from "@/components/shared/Section";
import { Button } from "@/components/ui/button";
import {
  ArticleCodeBlock,
  ArticleProse,
  ArticleSummary,
  ArticleTermGrid,
} from "@/components/guide";
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
  generateFAQPageSchema,
} from "@/lib/schema";
import { SITE_URL, generateMetadata as generatePageMetadata } from "@/lib/site-config";

const title = "What Is an M3U Playlist? Structure, Syntax, and IPTV Usage";
const description =
  "A comprehensive technical guide to M3U and M3U8 playlists in IPTV: header syntax, #EXTINF tags, community metadata attributes, and file handling.";
const canonical = "/guides/what-is-m3u";
const publishedDate = "2026-10-04";

/**
 * What Is M3U Guide
 * Canonical: https://www.tryiptv.com/guides/what-is-m3u
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
    question: "What is the difference between an M3U and an M3U8 file?",
    answer:
      "Both formats are text-based playlists that list media stream locations. The primary distinction relates to character encoding conventions. The .m3u8 extension is used specifically to indicate that the file is encoded using UTF-8 Unicode, allowing it to correctly display international characters, non-Latin scripts, and accents. While modern .m3u files often use UTF-8 as well, historically they could use legacy local character sets. In HTTP Live Streaming (HLS, RFC 8216), UTF-8 encoding is strictly mandatory.",
  },
  {
    question: "Is an M3U file an actual video or media file?",
    answer:
      "No. An M3U file is a plain-text index. It contains no video or audio data itself. Instead, it contains text directives and web addresses (URLs) that point your media player to where the actual streaming video files (such as HLS manifests or MPEG Transport Streams) are hosted on remote web servers.",
  },
  {
    question: "What does the #EXTM3U tag mean at the top of the file?",
    answer:
      "The #EXTM3U tag is a mandatory opening directive that identifies the text file as an Extended M3U playlist rather than a simple, unadorned list of file paths. Under media standards such as RFC 8216, it must appear on the very first line of the playlist file.",
  },
  {
    question: "What does #EXTINF:-1 signify in an IPTV playlist?",
    answer:
      "In standard HTTP Live Streaming (HLS), the number following #EXTINF indicates the duration of a video segment in seconds. In live IPTV broadcasting, streams are ongoing broadcasts without a predetermined duration. The IPTV community adopted the convention of setting this value to -1 (or sometimes 0) to indicate to player parsers that the media is an open-ended live linear channel.",
  },
  {
    question: "Are tags like tvg-id, tvg-logo, and group-title official Internet standards?",
    answer:
      "No. These tags are not defined in official IETF standards such as RFC 8216. They are community extensions popularized by open-source media centers (including MythTV, Kodi, and VLC) to allow players to pair live streams with TV guide (EPG) schedules, display station logos, and organize channels into genre categories.",
  },
  {
    question: "Can I download an M3U playlist and save it locally on my computer or device?",
    answer:
      "Yes. An M3U playlist can be downloaded and stored locally as a static .m3u or .m3u8 file. However, because it is a static local snapshot, it will not receive automated updates if your IPTV provider adds new channels, updates stream addresses, or migrates server domains. Loading the playlist via a remote URL allows your player app to fetch fresh channel lists when refreshed.",
  },
  {
    question: "Why doesn't my downloaded local playlist reflect channel changes?",
    answer:
      "When you download a playlist file to your device's local drive, you create an offline snapshot of that specific moment. Unlike a remote URL—which your player queries over the web upon refresh—the offline file has no link to the server. If a provider changes stream URLs or renames channels, you must manually download an updated copy.",
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
  { name: "What Is an M3U Playlist?", item: `${SITE_URL}${canonical}` },
]);

const faqSchema = generateFAQPageSchema(faqs);

export default function WhatIsM3uPage() {
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
              { label: "What Is an M3U Playlist?" },
            ]}
            align="center"
          />
          <div className="mx-auto max-w-4xl text-center">
            <p className="eyebrow mb-3">Format Architecture & Syntax</p>
            <h1 className="font-headline text-3xl font-extrabold leading-[1.15] text-foreground sm:text-4xl lg:text-5xl">
              What Is an M3U Playlist? Structure, Syntax, and IPTV Usage
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
              An M3U playlist is a plain-text file that directs media players to streaming video
              locations. Explore the difference between basic M3U and HLS M3U8, the syntax of Extended M3U
              directives, and how IPTV applications parse channel data.
            </p>
          </div>
        </Container>
      </Section>

      {/* Main Content Article */}
      <Section className="pt-10 pb-12 sm:pt-14 sm:pb-16 lg:pb-16">
        <Container>
          <article className="mx-auto max-w-3xl">
            {/* Quick Answer Callout */}
            <ArticleSummary title="Quick Summary: What Is an M3U Playlist?">
              <p>
                An <strong className="text-foreground font-semibold">M3U playlist</strong> is a plain-text
                file containing an ordered list of media resources and URLs. It contains no video or audio data
                itself; rather, it acts as an index instructing media players where to locate streams on a
                local storage drive or across the internet.
              </p>
              <p>
                In IPTV, services use an evolved format known as{" "}
                <strong className="text-foreground font-semibold">Extended M3U</strong>. By placing metadata
                tags (such as <code>#EXTINF</code>) before each stream address, an Extended M3U playlist
                supplies channel names, genre categories, program guide IDs, and station logos to compatible
                IPTV applications.
              </p>
            </ArticleSummary>

            <ArticleProse>
              <h2>The Evolution of M3U and M3U8</h2>
              <p>
                The M3U format originated in the late 1990s as a simple playlist format for desktop audio
                players (such as Winamp) to organize MP3 audio files. In its earliest and simplest form, a basic
                M3U file was merely a text file containing file paths or URLs, with each entry placed on a new
                line.
              </p>
              <p>
                As digital media evolved, the format developed into two distinct branches that are widely used
                today:
              </p>
              <ul>
                <li>
                  <strong>Extended M3U:</strong> Added structured comment directives beginning with{" "}
                  <code>#EXT</code>, allowing playlist creators to specify track titles, durations, and
                  metadata before each media location.
                </li>
                <li>
                  <strong>M3U8:</strong> Adopted the <code>.m3u8</code> file extension specifically to signal
                  that the text file is encoded using the UTF-8 Unicode character set. This distinction ensures
                  that international channel titles, non-Latin alphabets, and special characters render
                  reliably across different operating systems.
                </li>
              </ul>

              <h2>HTTP Live Streaming and the Scope of RFC 8216</h2>
              <p>
                A frequent point of confusion is how formal Internet standards relate to IPTV playlists.
              </p>
              <p>
                In 2017, the Internet Engineering Task Force (IETF) published{" "}
                <strong>RFC 8216</strong> (&quot;HTTP Live Streaming&quot;), edited by Apple Inc. Section 4 of
                RFC 8216 establishes that an HTTP Live Streaming (HLS) playlist is an Extended M3U playlist
                derived from the older informal format.
              </p>
              <p>
                Under RFC 8216, specific rules are formally standardized for HLS streaming:
              </p>
              <ul>
                <li>
                  <strong>Mandatory UTF-8:</strong> Section 4.1 mandates that HLS playlists MUST be encoded in
                  UTF-8.
                </li>
                <li>
                  <strong>Opening Header Directive:</strong> Section 4.3.1.1 defines <code>#EXTM3U</code>,
                  which must appear on the first line of every valid extended playlist.
                </li>
                <li>
                  <strong>Segment Duration Tag:</strong> Section 4.3.2.1 defines <code>#EXTINF</code> to
                  specify the exact duration (often as a floating-point number of seconds) of a media segment
                  chunk, followed by an optional title.
                </li>
              </ul>
              <p>
                <strong>Critical Scope Distinction:</strong> RFC 8216 specifies how video players ingest
                short, chunked media segments for adaptive streaming. It does <em>not</em> define or govern
                broadcaster-level IPTV channel playlists, channel category groups, or TV guide metadata tags.
              </p>

              <h2>Anatomy of an Extended M3U Playlist in IPTV</h2>
              <p>
                In IPTV environments, media players adapted the Extended M3U syntax to describe entire live
                television channels rather than brief segmented video files. A typical IPTV playlist entry
                consists of a metadata directive line followed immediately by the stream destination URL:
              </p>
            </ArticleProse>

            {/* Code Block Example */}
            <ArticleCodeBlock
              title="Example: Extended M3U Channel Syntax"
              code={`#EXTM3U\n#EXTINF:-1 tvg-id="example.news" tvg-name="Example News" tvg-logo="https://example.com/logo.png" group-title="News",Example News HD\nhttps://stream.example.com/live/channel.m3u8`}
            />

            <ArticleProse>
              <h3>Deconstructing the Entry Directives</h3>
              <p>
                Each component of the entry serves a distinct technical role for the player&apos;s parser:
              </p>
              <ul>
                <li>
                  <strong><code>#EXTM3U</code>:</strong> Declares the file as an Extended M3U playlist. Most
                  parsers reject playlists that do not begin with this header.
                </li>
                <li>
                  <strong><code>#EXTINF</code>:</strong> The &quot;Extended Information&quot; tag that begins
                  the metadata block for the upcoming stream.
                </li>
                <li>
                  <strong>The <code>-1</code> Duration Flag:</strong> While RFC 8216 uses positive numbers to
                  denote finite segment durations (e.g., <code>#EXTINF:6.008</code>), IPTV playlists use the
                  community convention of <code>-1</code> (or occasionally <code>0</code>) to signify an
                  open-ended, continuous live stream with no fixed end time.
                </li>
                <li>
                  <strong>The Comma and Channel Title:</strong> Following the metadata parameters, a comma
                  delimits the attributes from the display title (<code>Example News HD</code>), which the
                  player presents in the channel list.
                </li>
                <li>
                  <strong>The Resource URL:</strong> The next line provides the network address. This can point
                  directly to an MPEG Transport Stream (<code>.ts</code>), an HLS manifest (<code>.m3u8</code>),
                  or an RTSP stream.
                </li>
              </ul>

              <h2>Common IPTV Metadata Attributes</h2>
              <p>
                Over time, open-source media player communities (such as MythTV, VideoLAN VLC, and Kodi&apos;s
                IPTV Simple Client) introduced attribute tags inside the <code>#EXTINF</code> line. Although
                these are community conventions rather than IETF standards, they are widely recognized by
                modern IPTV applications:
              </p>
            </ArticleProse>

            {/* Term / Attribute Cards */}
            <ArticleTermGrid
              items={[
                {
                  name: "tvg-id",
                  icon: Code,
                  description:
                    "The unique channel identifier used to match this stream with an Electronic Programme Guide (EPG) entry in an associated XMLTV schedule file.",
                },
                {
                  name: "group-title",
                  icon: List,
                  description:
                    'The category or genre name (such as "Sports," "News," or a country region) used by player apps to sort channels into organized menu folders.',
                },
                {
                  name: "tvg-logo",
                  icon: Globe,
                  description:
                    "A direct web URL pointing to a PNG or JPG image of the network's official station logo, which the player downloads and renders in the guide grid.",
                },
                {
                  name: "tvg-chno",
                  icon: Tv,
                  description:
                    "A suggested numerical channel position (logical channel number) to allow numeric keypad remote control tuning.",
                },
              ]}
            />

            <ArticleProse>
              <h2>Remote URLs vs. Downloaded Local Files</h2>
              <p>
                IPTV providers typically supply an M3U playlist as a web link (e.g.,{" "}
                <code>https://provider.example.com/get.php?username=...&amp;type=m3u_plus</code>). Users
                generally handle this in one of two ways:
              </p>

              <h3>1. Loading via Remote URL</h3>
              <p>
                When you paste the remote URL directly into an application like TiviMate, Televizo, or
                IPTV Smarters, the player contacts the server over HTTP or HTTPS and downloads the current
                lineup into memory.
              </p>
              <ul>
                <li>
                  <strong>Dynamic Updates:</strong> Whenever the application refreshes its playlist data, it
                  re-fetches the latest version, reflecting newly added channels, removed streams, or updated
                  server domain names.
                </li>
                <li>
                  <strong>Application-Dependent Caching:</strong> Applications manage local caching
                  differently; some cache the list for 24 hours, while others check upon every startup.
                </li>
              </ul>

              <h3>2. Saving as a Local File</h3>
              <p>
                You can also download the playlist using a web browser and save it locally on your computer or
                device as a static <code>.m3u</code> or <code>.m3u8</code> file.
              </p>
              <ul>
                <li>
                  <strong>Offline Resilience:</strong> A local file can be opened even if the provider&apos;s
                  account portal is temporarily unreachable, provided the media stream URLs themselves remain
                  online.
                </li>
                <li>
                  <strong>Static Limitation:</strong> A downloaded file is a fixed snapshot in time. It will
                  never update automatically. If your provider modifies stream ports, migrates servers, or
                  updates channel lineups, the static local file will point to obsolete URLs until you
                  manually replace it.
                </li>
              </ul>

              <h2>Large Playlist Ingestion and Device Considerations</h2>
              <p>
                Because an M3U file is plain text, every channel entry requires reading lines, extracting
                metadata attributes via regular expressions or string tokenizers, and instantiating channel
                objects in the device&apos;s memory.
              </p>
              <p>
                How smoothly this process occurs depends on several factors:
              </p>
              <ul>
                <li>
                  <strong>Available RAM:</strong> Streaming devices with modest memory reserves (such as
                  budget TV sticks) must balance playlist object allocation with active video decoding buffers.
                </li>
                <li>
                  <strong>Parser Efficiency:</strong> Optimized media player applications process playlists
                  as streaming token streams and cache entries into lightweight local SQLite databases,
                  avoiding memory spikes. Less optimized parsers attempt to load the entire text file into
                  RAM at once, which can lead to application pauses during initial startup.
                </li>
                <li>
                  <strong>Playlist Scope:</strong> Unfiltered playlists that include tens of thousands of
                  international channels, foreign VOD titles, and multiple resolution tiers take longer to
                  download and parse than trimmed playlists focused on specific regional categories.
                </li>
              </ul>
            </ArticleProse>

            {/* Contextual TryIPTV Note */}
            <div className="mt-12 sm:mt-14 mb-0 rounded-xl sm:rounded-2xl border border-white/[0.08] bg-[#07080a] p-6 sm:p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
              <h3 className="font-headline text-lg sm:text-xl font-bold text-foreground">
                Flexible Playlist Integration
              </h3>
              <p className="mt-2.5 text-sm sm:text-base leading-relaxed text-muted-foreground">
                TryIPTV provides both standard Extended M3U playlist URLs and Xtream-compatible API logins.
                Whether you are using a dedicated television app like TiviMate or a media player like VLC, you
                can choose the connection format that best suits your player application and hardware setup.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Button asChild size="sm" variant="outline" className="border-white/[0.14] bg-white/[0.03] text-foreground hover:bg-white/[0.08]">
                  <Link href="/iptv-free-trial">
                    Explore Free Trial <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                  </Link>
                </Button>
                <Button asChild size="sm" variant="ghost" className="text-muted-foreground hover:text-foreground">
                  <Link href="/help/m3u-not-loading">Troubleshoot Playlist Loading</Link>
                </Button>
              </div>
            </div>
          </article>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section className="border-t border-white/[0.07] bg-black/20 pt-12 pb-16 sm:pt-14 sm:pb-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 text-center sm:text-left">
              <p className="eyebrow mb-2">Frequently Asked Questions</p>
              <h2 className="font-headline text-2xl font-bold text-foreground sm:text-3xl">
                Common Questions About M3U Playlists
              </h2>
            </div>
            <FaqList items={faqs} />
          </div>
        </Container>
      </Section>
    </>
  );
}
