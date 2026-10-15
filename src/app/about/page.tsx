import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Schema } from "@/components/shared/Schema";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { PRODUCT_TRUTHS, siteConfig, generateMetadata as generatePageMetadata } from "@/lib/site-config";
import { BUSINESS_INFO, isPublishReady } from "@/lib/site-data/business-info";

export function generateMetadata(): Metadata {
  const title = "About TryIPTV – Who Runs the Service and How It Works";
  return {
    ...generatePageMetadata({
      title,
      description: "About TryIPTV: who operates the prepaid IPTV service, what the subscription includes, how support works, and where to find our legal and refund policies.",
      canonical: "/about",
      noIndex: !isPublishReady(),
    }),
    title: { absolute: title },
  };
}

export default function AboutPage() {
  const baseUrl = siteConfig.url;
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: `${baseUrl}/` },
    { name: "About", item: `${baseUrl}/about` },
  ]);
  const operatorDetails = [
    { label: "Operated by", value: BUSINESS_INFO.legalName },
    { label: "Registration", value: BUSINESS_INFO.registration },
    { label: "Address", value: BUSINESS_INFO.address },
  ].filter((item): item is { label: string; value: string } => item.value !== null);

  return (
    <>
      <Schema id="breadcrumb" schema={breadcrumbSchema} />

      <Section className="relative overflow-hidden border-b border-white/[0.07] pt-12 pb-14 sm:pt-16 sm:pb-20">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
        <Container className="relative text-center">
          <Breadcrumb items={[{ label: "About" }]} align="center" />
          <SectionHeader
            as="h1"
            eyebrow="About Us"
            title="About TryIPTV"
            subtitle="Who runs the service, what a subscription includes, and how to reach us."
          />
        </Container>
      </Section>

      <Section className="py-12 sm:py-16">
        <Container className="max-w-4xl">
          <div className="space-y-8 text-sm sm:text-base leading-relaxed text-muted-foreground">
            <div className="space-y-3">
              <h2 className="font-headline text-xl sm:text-2xl font-bold text-foreground">What TryIPTV is</h2>
              <p>
                TryIPTV ({siteConfig.url}) is a prepaid IPTV subscription service. A subscription gives you playlist access for live TV, sports, and on-demand titles, plus technical support for setting it up in compatible third-party player apps such as IPTV Smarters Pro, TiviMate, XCIPTV, and VLC.
              </p>
              <p>
                We do not manufacture streaming hardware, and we do not develop or distribute the player apps recommended in our guides.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-headline text-xl sm:text-2xl font-bold text-foreground">Who runs the service</h2>
              {operatorDetails.length > 0 ? (
                <dl className="space-y-1.5">
                  {operatorDetails.map((item) => (
                    <div key={item.label} className="flex flex-wrap gap-2">
                      <dt className="font-semibold text-foreground">{item.label}:</dt>
                      <dd>{item.value}</dd>
                    </div>
                  ))}
                </dl>
              ) : null}
              <p>
                For any question about the business behind TryIPTV, email{" "}
                <a href={`mailto:${siteConfig.links.email}`} className="text-primary underline">
                  {siteConfig.links.email}
                </a>.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-headline text-xl sm:text-2xl font-bold text-foreground">How subscriptions work</h2>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Plans are one-time prepaid purchases of 1, 3, 6, or 12 months, starting at ${PRODUCT_TRUTHS.plans[0].price}. They never renew automatically.</li>
                <li>Every plan includes {PRODUCT_TRUTHS.connections} simultaneous connections for personal household use.</li>
                <li>A 24-hour free trial is available with no credit card required, limited to one per household.</li>
                <li>Credentials are typically delivered {PRODUCT_TRUTHS.activationTime} after payment confirmation.</li>
                <li>Accepted payment methods: {PRODUCT_TRUTHS.paymentMethods.join(", ")}.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="font-headline text-xl sm:text-2xl font-bold text-foreground">Support</h2>
              <p>
                Support is available by WhatsApp and by email at{" "}
                <a href={`mailto:${siteConfig.links.email}`} className="text-primary underline">
                  {siteConfig.links.email}
                </a>
                , or through our <Link href="/contact-us" className="text-primary underline">contact page</Link>.
                {BUSINESS_INFO.supportHours && <> Support hours: {BUSINESS_INFO.supportHours}.</>}
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-headline text-xl sm:text-2xl font-bold text-foreground">Policies</h2>
              <ul className="list-disc pl-5 space-y-1.5">
                <li><Link href="/terms-conditions" className="text-primary underline">Terms &amp; Conditions</Link></li>
                <li><Link href="/refund-policy" className="text-primary underline">Refund Policy</Link></li>
                <li><Link href="/privacy-policy" className="text-primary underline">Privacy Policy</Link></li>
                <li><Link href="/licensing" className="text-primary underline">Content Licensing &amp; Legal Standing</Link></li>
                <li><Link href="/dmca-report" className="text-primary underline">DMCA Notice &amp; Copyright Policy</Link></li>
                <li><Link href="/disclaimer" className="text-primary underline">Legal Disclaimer</Link></li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
