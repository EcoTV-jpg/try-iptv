import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/shared/Container';
import { Section } from '@/components/shared/Section';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { generateMetadata as generatePageMetadata } from '@/lib/site-config';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck, ArrowRight, FileText } from 'lucide-react';

export function generateMetadata(): Metadata {
  return generatePageMetadata({
    title: "Terms of Service",
    description: "Terms and conditions governing the use of TryIPTV subscription services, streaming credentials, and account policies.",
    canonical: "/terms",
  });
}

export default function TermsPage() {
  const lastUpdated = "September 2026";

  return (
    <>
      <Section className="relative overflow-hidden border-b border-white/[0.07] pt-12 pb-14 sm:pt-16 sm:pb-20">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
        <Container className="relative text-center">
          <Breadcrumb items={[{ label: "Terms of Service" }]} align="center" />
          <SectionHeader
            as="h1"
            eyebrow="Legal & Service Agreement"
            title="Terms of Service"
            subtitle={`Last updated: ${lastUpdated}. Clear, transparent terms governing your TryIPTV streaming subscription.`}
          />
        </Container>
      </Section>

      <Section>
        <Container className="max-w-4xl">
          <div className="space-y-10">
            {/* Section 1 */}
            <Card>
              <CardContent className="pt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="grid h-8 w-8 place-items-center rounded-md bg-primary/10 text-primary">
                    <FileText className="h-4 w-4" />
                  </div>
                  <h2 className="text-xl font-extrabold text-foreground">1. Service Description & Credential Provision</h2>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  TryIPTV (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) provides high-definition and 4K digital streaming feed access delivered via standard Xtream Codes API credentials and M3U playlist URLs. We provide the streaming infrastructure and subscription credentials that connect your independent media player to our streaming servers.
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  <strong>Third-Party Players:</strong> TryIPTV does not develop, sell, or bundle third-party media player applications (such as TiviMate, IPTV Smarters Pro, XCIPTV, or IBO Player). Users are responsible for installing and configuring their preferred media player on their own compatible hardware devices.
                </p>
              </CardContent>
            </Card>

            {/* Section 2 */}
            <Card>
              <CardContent className="pt-6 space-y-3">
                <h2 className="text-xl font-extrabold text-foreground">2. Simultaneous Connections & Account Integrity</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Every active TryIPTV paid subscription includes support for up to <strong>two (2) simultaneous active streams</strong>.
                </p>
                <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                  <li>You may configure your credentials on multiple personal devices (Smart TV, mobile phone, tablet, streaming stick).</li>
                  <li>At any given moment, no more than two devices may concurrently access the stream. Exceeding this limit will cause stream buffering or automatic session termination on secondary devices.</li>
                  <li>Account credentials are for personal household use only. Reselling, restreaming, rebroadcasting, or public redistribution of credentials without prior commercial written authorization is strictly prohibited and results in immediate account revocation without refund.</li>
                </ul>
              </CardContent>
            </Card>

            {/* Section 3 */}
            <Card>
              <CardContent className="pt-6 space-y-3">
                <h2 className="text-xl font-extrabold text-foreground">3. Subscription Billing & No Auto-Renewal</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  All TryIPTV plans (1 Month, 3 Months, 6 Months, and 12 Months) are strictly <strong>prepaid, one-time transactions</strong>.
                </p>
                <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                  <li>We never store credit card numbers or initiate automated recurring subscription renewals.</li>
                  <li>When your subscription term reaches expiration, your access simply concludes unless you choose to renew by purchasing a new period.</li>
                  <li>Pricing is charged in USD as published on our <Link href="/pricing" className="text-primary hover:underline font-semibold">Pricing Page</Link> at the time of purchase.</li>
                </ul>
              </CardContent>
            </Card>

            {/* Section 4 */}
            <Card>
              <CardContent className="pt-6 space-y-3">
                <h2 className="text-xl font-extrabold text-foreground">4. 24-Hour Free Trial Evaluation</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  We provide a 24-hour evaluation trial at zero financial cost with no credit card required. Prospective customers are strongly encouraged to utilize the trial on their specific home internet connection, router, and playback hardware before purchasing an extended subscription.
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Trials automatically expire after 24 hours without any obligation to subscribe. Multiple sequential trial requests by the same household or IP address may be filtered or rejected by our automated activation safeguards.
                </p>
              </CardContent>
            </Card>

            {/* Section 5 */}
            <Card>
              <CardContent className="pt-6 space-y-3">
                <h2 className="text-xl font-extrabold text-foreground">5. Network Requirements & Performance Factors</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Smooth streaming playback requires an active, stable internet connection:
                </p>
                <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                  <li>Minimum 15 Mbps for reliable 1080p Full HD playback.</li>
                  <li>Minimum 30 Mbps for 4K Ultra HD streams.</li>
                  <li>We strongly recommend a hardwired Ethernet connection or a 5 GHz Wi-Fi band to avoid local wireless packet drops and packet jitter.</li>
                  <li>TryIPTV cannot be held liable for degradation caused by local ISP bandwidth throttling, public Wi-Fi limitations, or local hardware performance issues.</li>
                </ul>
              </CardContent>
            </Card>

            {/* Section 6 */}
            <Card>
              <CardContent className="pt-6 space-y-3">
                <h2 className="text-xl font-extrabold text-foreground">6. Service Availability & Maintenance</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  We maintain high-availability, load-balanced European and North American streaming clusters with targeted 99.9% uptime. Periodic routine server maintenance, software patches, and channel lineup synchronizations are conducted during off-peak windows to maintain infrastructure stability.
                </p>
              </CardContent>
            </Card>

            {/* Section 7 */}
            <Card>
              <CardContent className="pt-6 space-y-3">
                <h2 className="text-xl font-extrabold text-foreground">7. Contact & Inquiries</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  For questions regarding these Terms of Service or for account assistance, please contact our support team at <a href="mailto:support@tryiptv.com" className="text-primary hover:underline font-semibold">support@tryiptv.com</a> or message our 24/7 team via our <Link href="/contact" className="text-primary hover:underline font-semibold">Contact Page</Link>.
                </p>
              </CardContent>
            </Card>

            {/* Bottom Quick Links */}
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-lg border border-white/[0.08] bg-[#070a08] p-6">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold text-foreground">Review related legal documentation:</span>
              </div>
              <div className="flex items-center gap-6 text-sm">
                <Link href="/privacy" className="text-primary hover:underline flex items-center gap-1 font-semibold">
                  Privacy Policy <ArrowRight className="h-3 w-3" />
                </Link>
                <Link href="/refund-policy" className="text-primary hover:underline flex items-center gap-1 font-semibold">
                  Refund Policy <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
