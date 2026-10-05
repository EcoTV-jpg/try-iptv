import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Database,
  Globe,
  HelpCircle,
  Key,
  Layers,
  Lock,
  Server,
  ShieldAlert,
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

const title = "What Are Xtream Codes? The IPTV API Login Format Explained";
const description =
  "A clear guide explaining what Xtream Codes credentials are, how the API-based login format works in IPTV players, and essential security considerations.";
const canonical = "/guides/what-are-xtream-codes";
const publishedDate = "2026-10-04";

/**
 * What Are Xtream Codes Guide
 * Canonical: https://www.tryiptv.com/guides/what-are-xtream-codes
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
    question: "Is Xtream Codes the same as an IPTV player app?",
    answer:
      "No. Xtream Codes is a client-server API connection format, not a media player application. Applications such as TiviMate, IPTV Smarters, Televizo, and XCIPTV are independent media players designed to log into IPTV services that support this API structure.",
  },
  {
    question: "Is Xtream Codes an official Internet or telecom standard?",
    answer:
      "No. Xtream Codes was originally proprietary server panel software developed in the mid-2010s by Xtream Codes Ltd. While the original software platform is no longer active, its client-server API structure became a de facto convention widely implemented by modern IPTV middleware and third-party player applications. It has never been formalized as an IETF, W3C, or ISO standard.",
  },
  {
    question: "What information do I need to log into an Xtream-compatible player?",
    answer:
      "To connect an Xtream-compatible player, you generally need three core pieces of information supplied by your IPTV provider: a Server URL (such as http://example.com:8080), a Username, and a Password. Some player interfaces also provide a friendly 'Account Name' field for your own reference.",
  },
  {
    question: "Is the server port always entered in a separate field?",
    answer:
      "No. Port handling depends on the user interface of the specific player app you use. Many modern applications (like TiviMate and IPTV Smarters) ask for a single Server URL field where the port is included at the end (e.g., http://tv.server.net:8000). Other players provide a distinct 'Port' field. When connecting over standard HTTP (port 80) or HTTPS (port 443), explicit port numbers are often omitted.",
  },
  {
    question: "Are Xtream Codes credentials safe to share?",
    answer:
      "No. Your Xtream credentials grant direct access to your subscription and allow streaming on your account. Because traditional Xtream requests pass your username and password in the URL query string, sharing full links or screenshots exposes your private login details.",
  },
  {
    question: "What should I do if my Xtream Codes login fails?",
    answer:
      "If you receive an 'Invalid Details' or 401 Unauthorized error, verify that you haven't accidentally copied trailing whitespace into the username or password fields, verify that the server protocol (http:// vs. https://) and port are accurate, and confirm that your account subscription remains active with your provider.",
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
  { name: "What Are Xtream Codes?", item: `${SITE_URL}${canonical}` },
]);

const faqSchema = generateFAQPageSchema(faqs);

export default function WhatAreXtreamCodesPage() {
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
              { label: "What Are Xtream Codes?" },
            ]}
            align="center"
          />
          <div className="mx-auto max-w-4xl text-center">
            <p className="eyebrow mb-3">API Concepts & Architecture</p>
            <h1 className="font-headline text-3xl font-extrabold leading-[1.15] text-foreground sm:text-4xl lg:text-5xl">
              What Are Xtream Codes? The IPTV API Login Format Explained
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
              Xtream Codes is a widely used API-style login format supported by many IPTV applications.
              Learn how it communicates with streaming servers, what information you enter, and how it
              organizes content.
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
                Quick Summary: What Is the Xtream Codes Format?
              </h2>
              <p className="mt-3 text-base leading-7 text-muted-foreground">
                In modern IPTV, <strong className="text-foreground font-semibold">Xtream Codes</strong> refers
                to a structured client-server login format that uses a{" "}
                <span className="text-foreground font-medium">Server URL</span>,{" "}
                <span className="text-foreground font-medium">Username</span>, and{" "}
                <span className="text-foreground font-medium">Password</span> to connect your player app to an
                IPTV service.
              </p>
              <p className="mt-3 text-base leading-7 text-muted-foreground">
                Instead of reading a single static text playlist, an Xtream-compatible player issues
                lightweight HTTP/HTTPS requests to retrieve structured JSON data—allowing it to fetch
                categories, channel lists, on-demand movies, and TV guide (EPG) schedules dynamically. It is
                not a formal standards body specification, but rather a de facto compatibility convention
                adopted across third-party IPTV software.
              </p>
            </div>

            <div className="prose prose-lg max-w-none dark:prose-invert">
              <h2>Origins and Evolution of the Format</h2>
              <p>
                To understand why Xtream Codes exists, it helps to look at its history. In the mid-2010s, a
                software company named Xtream Codes Ltd created a popular commercial streaming management
                panel. The panel featured an internal Application Programming Interface (API) that enabled
                mobile and TV apps to authenticate users, check subscription validity, and fetch channel
                lineups.
              </p>
              <p>
                Although the original company ceased operations in September 2019 following European legal
                enforcement actions, the client-server API architecture it popularized had already become the
                unspoken standard for third-party media players. Today, alternative IPTV middleware platforms
                and open-source panels emulate the identical API endpoints so that popular applications
                (including TiviMate, IPTV Smarters, Televizo, and XCIPTV) continue to work seamlessly.
              </p>
              <p>
                <strong>Important Distinction:</strong> Xtream Codes is <em>not</em> an official Internet
                standard ratified by the IETF, W3C, ISO, or ITU. It is a de facto protocol convention that
                gained widespread adoption because its structured API allows compatible apps to query
                categories and account data on demand rather than relying only on a static playlist file.
              </p>

              <h2>What Information Does the User Enter?</h2>
              <p>
                When you configure an IPTV player using an Xtream Codes login option, the application typically
                presents a login dialog requesting three primary credentials:
              </p>
            </div>

            <div className="my-8 grid gap-4 sm:grid-cols-3">
              <Card className="border-white/[0.08] bg-card/60">
                <CardHeader className="pb-3">
                  <CardTitle as="h3" className="flex items-center gap-2 text-base font-bold text-foreground">
                    <Globe className="h-5 w-5 text-primary" />
                    Server URL
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-6 text-muted-foreground">
                  The base web address of the streaming server (e.g., <code>http://tv.example.com:8080</code>).
                  It points your player to the provider&apos;s API endpoint.
                </CardContent>
              </Card>

              <Card className="border-white/[0.08] bg-card/60">
                <CardHeader className="pb-3">
                  <CardTitle as="h3" className="flex items-center gap-2 text-base font-bold text-foreground">
                    <Key className="h-5 w-5 text-primary" />
                    Username
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-6 text-muted-foreground">
                  Your unique account identifier assigned by your IPTV service provider to track your
                  subscription profile.
                </CardContent>
              </Card>

              <Card className="border-white/[0.08] bg-card/60">
                <CardHeader className="pb-3">
                  <CardTitle as="h3" className="flex items-center gap-2 text-base font-bold text-foreground">
                    <Lock className="h-5 w-5 text-primary" />
                    Password
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-6 text-muted-foreground">
                  The secret authentication token or passphrase associated with your account username.
                </CardContent>
              </Card>
            </div>

            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p>
                <strong>Port Handling Varies by App:</strong> Some older tutorials claim that four separate
                fields are universally mandatory: Server, Port, Username, and Password. In reality, field
                layout depends on the specific app interface. Modern players frequently expect the port to be
                included directly inside the Server URL (e.g., <code>http://example.com:8080</code>). When a
                service operates over standard HTTP (port 80) or standard HTTPS (port 443), no port number is
                required at all.
              </p>

              <h2>How Common Xtream-Compatible APIs Function</h2>
              <p>
                While implementations vary across different server panels, common Xtream-compatible systems
                expose a core API endpoint—traditionally named <code>/player_api.php</code>.
              </p>
              <p>
                When a player launches or synchronizes content, it initiates an HTTP or HTTPS request to this
                endpoint, supplying the user&apos;s credentials as URL query parameters.
              </p>

              <h3>Illustrative Request Example</h3>
              <p>
                In a standard initial handshake, the player sends an authentication request structured
                similarly to this conceptual example:
              </p>
              <pre className="overflow-x-auto rounded-lg border border-white/[0.08] bg-[#07080a] p-4 text-xs sm:text-sm text-foreground">
                <code>{`GET /player_api.php?username=EXAMPLE_USER&password=EXAMPLE_PASS HTTP/1.1\nHost: example.com`}</code>
              </pre>
              <p className="text-sm text-muted-foreground">
                <em>Note: The URL above is a sanitized illustrative example. Never share your active provider
                credentials publicly.</em>
              </p>

              <h3>Structured JSON Response</h3>
              <p>
                If authentication succeeds, the server returns a structured JSON payload rather than a raw
                video stream. Common responses include:
              </p>
              <ul>
                <li>
                  <strong>User Information (<code>user_info</code>):</strong> Account status (active/expired),
                  subscription expiration timestamp, created date, and maximum concurrent connections allowed.
                </li>
                <li>
                  <strong>Server Information (<code>server_info</code>):</strong> Server timezone, active
                  protocol, supported container formats (such as MPEG-TS or HLS), and server port.
                </li>
              </ul>

              <h3>On-Demand Content Queries</h3>
              <p>
                Once authenticated, the player can request specific subsets of content using dedicated query
                actions:
              </p>
              <ul>
                <li><code>action=get_live_categories</code>: Retrieves live TV genre groupings (e.g., Sports, News).</li>
                <li><code>action=get_live_streams&amp;category_id=...</code>: Retrieves channels within a selected category.</li>
                <li><code>action=get_vod_categories</code>: Retrieves video-on-demand movie categories.</li>
                <li><code>action=get_series</code>: Retrieves organized TV series with seasons and episode metadata.</li>
                <li><code>action=get_short_epg&amp;stream_id=...</code>: Fetches program guide data for specific channels.</li>
              </ul>

              <h2>How Xtream Codes Organizes Content</h2>
              <p>
                The primary practical benefit of an API-based system like Xtream Codes is structured content
                organization. Because the server groups content into discrete categories, player applications
                can display clean, interactive menus:
              </p>
              <ul>
                <li>
                  <strong>Hierarchical Navigation:</strong> Live channels, movies, and TV series are
                  separated into dedicated application sections rather than lumped into an unorganized list.
                </li>
                <li>
                  <strong>Metadata Integration:</strong> Movie and series entries can include poster artwork,
                  plot summaries, cast lists, release years, and episodic structures directly from the API.
                </li>
                <li>
                  <strong>Dynamic EPG Association:</strong> Program guide information is linked directly to
                  internal stream IDs, minimizing the need for users to manually configure third-party XMLTV
                  guide URLs.
                </li>
              </ul>

              <h2>Security and Privacy Considerations</h2>
              <p>
                Understanding how Xtream Codes handles security is essential for keeping your account
                protected:
              </p>

              <h3>1. Query String Credentials (RFC 9110 Considerations)</h3>
              <p>
                In standard Xtream implementations, your username and password are transmitted as query
                parameters in the URI string (<code>?username=...&amp;password=...</code>).
              </p>
              <p>
                As documented in Section 9.3.1 of RFC 9110 (HTTP Semantics), placing sensitive authentication
                information inside URIs introduces security risks:
              </p>
              <ul>
                <li>URIs are frequently logged in plain text by web servers, reverse proxies, and firewalls.</li>
                <li>URIs appear in browser histories, application logs, and clipboard managers.</li>
                <li>If a user shares a raw stream URL with a friend, their embedded username and password are exposed.</li>
              </ul>

              <h3>2. The Role of HTTPS (TLS Encryption)</h3>
              <p>
                If your provider&apos;s server URL uses <code>https://</code>, the connection between your device
                and the server is encrypted using Transport Layer Security (TLS). This prevents third parties
                on your local network, your router, or intermediate internet nodes from eavesdropping on your
                credentials in transit.
              </p>
              <p>
                However, if your server URL uses unencrypted <code>http://</code>, query parameters are
                transmitted in plain text across your local network and the public internet.
              </p>

              <h3>3. Dispelling Security Myths</h3>
              <p>
                Several widespread claims regarding Xtream Codes security are technically inaccurate:
              </p>
              <ul>
                <li>
                  <strong>No Universal Token Rotation:</strong> Baseline Xtream Codes does not feature
                  automatic token expiration or OAuth-style rolling tokens; it relies on static credentials
                  unless a specific modern panel implements proprietary extensions.
                </li>
                <li>
                  <strong>No Built-In Encryption Layer:</strong> The protocol itself does not encrypt data;
                  all transit protection depends entirely on whether the server operates over standard HTTPS.
                </li>
              </ul>

              <h2>Xtream Codes vs. The IPTV Player App</h2>
              <p>
                Newcomers frequently confuse the API connection with the player software. It is important to
                recognize that:
              </p>
              <ul>
                <li>
                  <strong>The Player (e.g., TiviMate, Smarters):</strong> Is the software program running on
                  your device (Fire TV, Android TV, phone). It handles the user interface, video decoding, and
                  remote control navigation.
                </li>
                <li>
                  <strong>Xtream Codes:</strong> Is the communication format that allows that player to talk to
                  your provider&apos;s server.
                </li>
              </ul>
              <p>
                Having an Xtream-compatible player does not provide any video content on its own. You must have
                an active subscription with an IPTV service provider to supply valid server, username, and
                password details.
              </p>

              <h2>Summary: What Xtream Codes Is and Is Not</h2>
              <div className="overflow-hidden rounded-lg border border-white/[0.08] not-prose my-6">
                <table className="w-full text-left text-sm">
                  <thead className="bg-card px-4 py-3 font-semibold text-foreground border-b border-white/[0.08]">
                    <tr>
                      <th className="p-3">Xtream Codes Is:</th>
                      <th className="p-3">Xtream Codes Is NOT:</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.08] text-muted-foreground">
                    <tr>
                      <td className="p-3">A widely supported client-server API format</td>
                      <td className="p-3">An official IETF, W3C, or ISO standard</td>
                    </tr>
                    <tr>
                      <td className="p-3">A login method using Server, Username, and Password</td>
                      <td className="p-3">A standalone IPTV player application</td>
                    </tr>
                    <tr>
                      <td className="p-3">A way to query categorized JSON channel and EPG data</td>
                      <td className="p-3">An IPTV subscription or media content provider</td>
                    </tr>
                    <tr>
                      <td className="p-3">Protected in transit only when configured with HTTPS</td>
                      <td className="p-3">Inherently encrypted or self-securing by default</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Contextual TryIPTV Note */}
            <div className="my-10 rounded-xl border border-white/[0.08] bg-card/40 p-6 sm:p-8">
              <h3 className="text-lg font-bold text-foreground">
                Connecting Your IPTV Service
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Whether you prefer the structured navigation of an Xtream-compatible login or the simplicity of
                an M3U playlist, TryIPTV supports both connection methods. You can choose whichever format best
                matches your preferred player application, operating system, and streaming hardware.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Button asChild size="sm" variant="outline">
                  <Link href="/iptv-free-trial">
                    Test With a Free Trial <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                  </Link>
                </Button>
                <Button asChild size="sm" variant="ghost">
                  <Link href="/help/iptv-login-not-working">Troubleshoot Login Issues</Link>
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
                Common Questions About Xtream Codes
              </h2>
            </div>
            <FaqList items={faqs} />
          </div>
        </Container>
      </Section>
    </>
  );
}
