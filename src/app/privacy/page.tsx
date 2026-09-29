import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/shared/Container';
import { Section } from '@/components/shared/Section';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { generateMetadata as generatePageMetadata } from '@/lib/site-config';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck, ArrowRight, Lock, EyeOff, Server, Database } from 'lucide-react';

export function generateMetadata(): Metadata {
  return generatePageMetadata({
    title: "Privacy Policy",
    description: "Learn how TryIPTV safeguards your personal data, enforces zero streaming activity logs, and protects your privacy.",
    canonical: "/privacy",
  });
}

export default function PrivacyPage() {
  const lastUpdated = "September 2026";

  return (
    <>
      <Section className="relative overflow-hidden border-b border-white/[0.07] pt-12 pb-14 sm:pt-16 sm:pb-20">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
        <Container className="relative text-center">
          <Breadcrumb items={[{ label: "Privacy Policy" }]} align="center" />
          <SectionHeader
            as="h1"
            eyebrow="Trust & Transparency"
            title="Privacy Policy"
            subtitle={`Last updated: ${lastUpdated}. We believe in privacy by design, zero stream-logging, and minimal data collection.`}
          />
        </Container>
      </Section>

      <Section>
        <Container className="max-w-4xl">
          <div className="space-y-10">
            {/* Highlights Grid */}
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg border border-white/[0.08] bg-[#101512] p-5">
                <EyeOff className="h-6 w-6 text-primary mb-3" />
                <h2 className="text-base font-extrabold text-foreground">Zero Activity Logs</h2>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  We never monitor, track, or record the channels, movies, or sporting events you watch.
                </p>
              </div>
              <div className="rounded-lg border border-white/[0.08] bg-[#101512] p-5">
                <Lock className="h-6 w-6 text-primary mb-3" />
                <h2 className="text-base font-extrabold text-foreground">No Stored Card Data</h2>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  All transactions are handled by PCI-DSS compliant gateways. We never hold card details.
                </p>
              </div>
              <div className="rounded-lg border border-white/[0.08] bg-[#101512] p-5">
                <Server className="h-6 w-6 text-primary mb-3" />
                <h2 className="text-base font-extrabold text-foreground">Minimal Data Stored</h2>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  Only the email needed to dispatch your credentials and temporary connection counters.
                </p>
              </div>
            </div>

            {/* Section 1 */}
            <Card>
              <CardContent className="pt-6 space-y-3">
                <h2 className="text-xl font-extrabold text-foreground">1. Our Core Privacy Commitment</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  At TryIPTV, we respect your right to digital privacy. We operate on a strict data-minimization framework: we only collect the minimum information required to deliver your streaming subscription and provide customer support. We do not sell, rent, trade, or share your personal data with third-party advertisers or data brokers under any circumstances.
                </p>
              </CardContent>
            </Card>

            {/* Section 2 */}
            <Card>
              <CardContent className="pt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="grid h-8 w-8 place-items-center rounded-md bg-primary/10 text-primary">
                    <Database className="h-4 w-4" />
                  </div>
                  <h2 className="text-xl font-extrabold text-foreground">2. Information We Collect</h2>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Depending on your interaction with TryIPTV, we collect:
                </p>
                <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                  <li><strong>Account Delivery Email:</strong> When you request a 24-hour free trial or purchase a subscription, we collect your email address solely to deliver your Xtream Codes credentials, M3U URL, and setup instructions.</li>
                  <li><strong>Transaction Identifiers:</strong> We retain payment transaction reference IDs supplied by our third-party payment processors to verify order completion and facilitate support.</li>
                  <li><strong>Live Stream Connection Counters:</strong> To enforce the 2 simultaneous connection limit per active account, our authentication server tracks active real-time sessions. This session state is volatile and automatically cleared when a playback stream terminates.</li>
                  <li><strong>Support Inquiries:</strong> Any messages or technical details you voluntarily provide via email or WhatsApp when requesting setup assistance.</li>
                </ul>
              </CardContent>
            </Card>

            {/* Section 3 */}
            <Card>
              <CardContent className="pt-6 space-y-3">
                <h2 className="text-xl font-extrabold text-foreground">3. What We Strictly Do NOT Collect (Zero Stream Logs)</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Unlike traditional cable providers or ad-supported streaming platforms, TryIPTV does NOT build user behavioral profiles. Specifically:
                </p>
                <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                  <li>We do not record your channel viewing habits or search queries.</li>
                  <li>We do not log which VOD movies or TV series you play.</li>
                  <li>We do not track your physical browsing behavior across the web.</li>
                  <li>We do not store IP address history associated with your streaming content consumption.</li>
                </ul>
              </CardContent>
            </Card>

            {/* Section 4 */}
            <Card>
              <CardContent className="pt-6 space-y-3">
                <h2 className="text-xl font-extrabold text-foreground">4. Payment Processing Security</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  All financial transactions are conducted through secure, industry-standard encrypted payment gateways. TryIPTV never stores, views, or processes credit card numbers, CVVs, or sensitive banking credentials on our web servers. Because all subscriptions are prepaid and non-recurring, your payment information is never stored for automated rebilling.
                </p>
              </CardContent>
            </Card>

            {/* Section 5 */}
            <Card>
              <CardContent className="pt-6 space-y-3">
                <h2 className="text-xl font-extrabold text-foreground">5. Data Retention & Right to Erasure</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  We retain contact and subscription records only for as long as necessary to manage your active account and comply with basic accounting and legal obligations.
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  <strong>Your Rights:</strong> Under applicable data protection regulations (including GDPR and CCPA), you have the right to request a copy of your stored personal information, request corrections, or request immediate permanent erasure of your account record by contacting our privacy team at <a href="mailto:support@tryiptv.com" className="text-primary hover:underline font-semibold">support@tryiptv.com</a>.
                </p>
              </CardContent>
            </Card>

            {/* Section 6 */}
            <Card>
              <CardContent className="pt-6 space-y-3">
                <h2 className="text-xl font-extrabold text-foreground">6. Security Measures</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  We deploy end-to-end TLS/SSL encryption across all website interactions, account portals, and API communication. Access to administrative systems is strictly controlled using multi-factor authentication and role-based operational permissions.
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
                <Link href="/terms" className="text-primary hover:underline flex items-center gap-1 font-semibold">
                  Terms of Service <ArrowRight className="h-3 w-3" />
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
