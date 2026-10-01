import type { Metadata } from "next";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Container } from "@/components/shared/Container";
import { Schema } from "@/components/shared/Schema";
import { Section } from "@/components/shared/Section";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { siteConfig, generateMetadata as generatePageMetadata } from "@/lib/site-config";

export function generateMetadata(): Metadata {
  return generatePageMetadata({
    title: "About TryIPTV | Prepaid IPTV Streaming Service",
    description:
      "Learn about TryIPTV, the prepaid IPTV subscription service available at tryiptv.com, including how the service works, supported devices, plans, trials and official support channels.",
    canonical: "/about",
  });
}

export default function AboutPage() {
  const baseUrl = siteConfig.url;

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: `${baseUrl}/` },
    { name: "About TryIPTV", item: `${baseUrl}/about` },
  ]);

  return (
    <>
      <Schema id="breadcrumb" schema={breadcrumbSchema} />

      <Section className="relative overflow-hidden border-b border-white/[0.07] pt-12 pb-14 sm:pt-16 sm:pb-20">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
        <Container className="relative text-center">
          <Breadcrumb items={[{ label: "About TryIPTV" }]} align="center" />
          <SectionHeader
            as="h1"
            eyebrow="About the Service"
            title="About TryIPTV"
            subtitle="Prepaid IPTV access for live television, sports, and on-demand entertainment across compatible devices and applications."
          />
        </Container>
      </Section>

      <Section className="py-12 sm:py-16">
        <Container className="max-w-4xl">
          <div className="space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <p>
              TryIPTV is a prepaid IPTV subscription service available at{" "}
              <a href={siteConfig.url} className="text-primary underline">
                https://www.tryiptv.com/
              </a>
              . The service provides live television, sports and on-demand streaming across compatible IPTV devices and
              applications.
            </p>

            <p>
              TryIPTV offers fixed-term prepaid plans with no automatic renewal, two simultaneous connections, and a
              24-hour trial with no card required.
            </p>

            <div className="space-y-3">
              <h2 className="font-headline text-xl font-bold text-foreground sm:text-2xl">How TryIPTV Works</h2>
              <p>
                After choosing a prepaid plan or requesting a trial, customers receive IPTV access details for use with
                compatible IPTV player applications and supported devices. Plans are fixed-term prepaid subscriptions,
                so there is no automatic renewal or recurring charge.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-headline text-xl font-bold text-foreground sm:text-2xl">Supported Streaming</h2>
              <p>
                TryIPTV supports live TV, sports, and on-demand streaming across compatible IPTV devices and
                applications, including common IPTV player apps that accept M3U playlist URLs or Xtream Codes API
                credentials.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-headline text-xl font-bold text-foreground sm:text-2xl">Official Support</h2>
              <p>
                Official TryIPTV support is available by email at{" "}
                <a href={`mailto:${siteConfig.links.email}`} className="text-primary underline">
                  {siteConfig.links.email}
                </a>{" "}
                and through the contact options listed on the{" "}
                <a href="/contact" className="text-primary underline">
                  TryIPTV contact page
                </a>
                .
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
