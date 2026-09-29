import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/shared/Container';
import { Section } from '@/components/shared/Section';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { generateMetadata as generatePageMetadata } from '@/lib/site-config';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck, ArrowRight, CheckCircle2, AlertCircle, HelpCircle } from 'lucide-react';

export function generateMetadata(): Metadata {
  return generatePageMetadata({
    title: "Refund Policy",
    description: "Understand TryIPTV's refund, trial testing, and customer satisfaction policies.",
    canonical: "/refund-policy",
  });
}

export default function RefundPolicyPage() {
  const lastUpdated = "September 2026";

  return (
    <>
      <Section className="relative overflow-hidden border-b border-white/[0.07] pt-12 pb-14 sm:pt-16 sm:pb-20">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
        <Container className="relative text-center">
          <Breadcrumb items={[{ label: "Refund Policy" }]} align="center" />
          <SectionHeader
            as="h1"
            eyebrow="Billing Transparency"
            title="Refund Policy & Guarantee"
            subtitle={`Last updated: ${lastUpdated}. Fair, transparent expectations backed by our 24-hour zero-risk trial.`}
          />
        </Container>
      </Section>

      <Section>
        <Container className="max-w-4xl">
          <div className="space-y-10">
            {/* The Free Trial First Notice */}
            <div className="rounded-xl border border-primary/20 bg-primary/[0.04] p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-lg font-extrabold text-foreground">Why We Offer a 24-Hour Free Trial</h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Because streaming quality depends on home internet speeds, ISP routing, Wi-Fi stability, and player compatibility, we provide a <strong>100% free, 24-hour full-access trial without requiring a credit card</strong>. We strongly advise every prospective user to test our streams on their actual hardware before purchasing a paid plan.
                  </p>
                  <div className="pt-2">
                    <Link
                      href="/iptv-free-trial"
                      className="inline-flex items-center gap-1.5 text-xs font-extrabold text-primary hover:underline"
                    >
                      Request your 24-hour test credentials <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 1 */}
            <Card>
              <CardContent className="pt-6 space-y-3">
                <h2 className="text-xl font-extrabold text-foreground">1. Troubleshooting First Commitment</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  In over 95% of reported cases, playback issues (such as audio desync, channel loading delays, or buffering) are caused by incorrect media player settings, outdated DNS resolvers, or local router cache congestion rather than server outages.
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  If you encounter any streaming difficulty with a paid subscription, our 24/7 technical team will actively assist you with:
                </p>
                <ul className="list-disc space-y-1.5 pl-5 text-sm text-muted-foreground">
                  <li>Alternative server routing endpoints and secure port configurations.</li>
                  <li>Buffer size adjustments in popular players like TiviMate and IPTV Smarters.</li>
                  <li>EPG sync troubleshooting and playlist refresh methods.</li>
                </ul>
              </CardContent>
            </Card>

            {/* Section 2 */}
            <Card>
              <CardContent className="pt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="grid h-8 w-8 place-items-center rounded-md bg-primary/10 text-primary">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <h2 className="text-xl font-extrabold text-foreground">2. Refund Eligibility Criteria</h2>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  We stand behind our infrastructure. You are eligible for a full refund under the following conditions:
                </p>
                <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                  <li><strong>Non-Delivery of Credentials:</strong> If we fail to deliver valid login credentials within 24 hours of verified payment completion.</li>
                  <li><strong>Unresolvable Technical Fault:</strong> If our streaming service experiences a continuous, verified server-side failure that our support engineers cannot resolve within 48 hours of your support ticket.</li>
                </ul>
              </CardContent>
            </Card>

            {/* Section 3 */}
            <Card>
              <CardContent className="pt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="grid h-8 w-8 place-items-center rounded-md bg-amber-500/10 text-amber-500">
                    <AlertCircle className="h-4 w-4" />
                  </div>
                  <h2 className="text-xl font-extrabold text-foreground">3. Non-Refundable Circumstances</h2>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Refunds are not issued under the following circumstances:
                </p>
                <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                  <li><strong>Change of Mind:</strong> We encourage all buyers to evaluate the service thoroughly via the 24-hour free trial before purchasing.</li>
                  <li><strong>Third-Party Application Purchases:</strong> Any payments made to third-party app developers (such as purchasing a TiviMate Premium license or an IBO Player activation) are entirely separate and non-refundable by TryIPTV.</li>
                  <li><strong>Local ISP Throttling or Hardware Incompatibility:</strong> Issues caused by incompatible local hardware or ISP blocking where the user declined to test via the free trial beforehand.</li>
                  <li><strong>Account Revocation for Abuse:</strong> Accounts terminated for restreaming, credential reselling, or violating the 2-connection limit are forfeit and ineligible for refund.</li>
                </ul>
              </CardContent>
            </Card>

            {/* Section 4 */}
            <Card>
              <CardContent className="pt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="grid h-8 w-8 place-items-center rounded-md bg-primary/10 text-primary">
                    <HelpCircle className="h-4 w-4" />
                  </div>
                  <h2 className="text-xl font-extrabold text-foreground">4. No Auto-Renewal Guarantee</h2>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Unlike traditional cable contracts or streaming services that enroll you in difficult-to-cancel monthly auto-billing, TryIPTV operates exclusively on a <strong>prepaid, one-time payment structure</strong>. You never need to submit a cancellation request to avoid future unexpected charges—when your prepaid period ends, your subscription simply concludes.
                </p>
              </CardContent>
            </Card>

            {/* Section 5 */}
            <Card>
              <CardContent className="pt-6 space-y-3">
                <h2 className="text-xl font-extrabold text-foreground">5. How to Request Support or a Refund</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  To open a technical inquiry or request a refund evaluation, email our support department at <a href="mailto:support@tryiptv.com" className="text-primary hover:underline font-semibold">support@tryiptv.com</a> with your:
                </p>
                <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                  <li>Payment transaction reference ID</li>
                  <li>Subscription email address</li>
                  <li>Detailed description of the issue encountered and steps already attempted</li>
                </ul>
                <p className="text-sm leading-relaxed text-muted-foreground pt-1">
                  Our billing team reviews all requests within 24 to 48 business hours. Approved refunds are credited back to the original method of payment within 5 to 10 banking days.
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
                <Link href="/privacy" className="text-primary hover:underline flex items-center gap-1 font-semibold">
                  Privacy Policy <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
