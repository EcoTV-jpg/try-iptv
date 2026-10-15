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
  const title = "Content Licensing & Legal Standing – TryIPTV";
  return {
    ...generatePageMetadata({
      title,
      description: "Content licensing at TryIPTV: where the channel and on-demand catalog comes from, what the catalog counts mean, personal-use terms, and copyright contacts.",
      canonical: "/licensing",
      noIndex: !isPublishReady(),
    }),
    title: { absolute: title },
  };
}

export default function LicensingPage() {
  const baseUrl = siteConfig.url;
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: `${baseUrl}/` },
    { name: "Licensing", item: `${baseUrl}/licensing` },
  ]);

  return (
    <>
      <Schema id="breadcrumb" schema={breadcrumbSchema} />

      <Section className="relative overflow-hidden border-b border-white/[0.07] pt-12 pb-14 sm:pt-16 sm:pb-20">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
        <Container className="relative text-center">
          <Breadcrumb items={[{ label: "Licensing" }]} align="center" />
          <SectionHeader
            as="h1"
            eyebrow="Legal & Notice"
            title="Content Licensing & Legal Standing"
            subtitle="Where our catalog comes from, what the published figures mean, and how rights holders can reach us."
          />
        </Container>
      </Section>

      <Section className="py-12 sm:py-16">
        <Container className="max-w-4xl">
          <div className="space-y-8 text-sm sm:text-base leading-relaxed text-muted-foreground">
            <div className="space-y-3">
              <h2 className="font-headline text-xl sm:text-2xl font-bold text-foreground">1. Content source</h2>
              {BUSINESS_INFO.contentSource ? (
                <p>{BUSINESS_INFO.contentSource}</p>
              ) : (
                <p>
                  Questions about the source of the channel and on-demand catalog can be sent to{" "}
                  <a href={`mailto:${siteConfig.links.email}`} className="text-primary underline">
                    {siteConfig.links.email}
                  </a>.
                </p>
              )}
            </div>

            <div className="space-y-3">
              <h2 className="font-headline text-xl sm:text-2xl font-bold text-foreground">2. What the catalog figures mean</h2>
              <p>
                The figures shown on this site ({PRODUCT_TRUTHS.channels} live channels and {PRODUCT_TRUTHS.vod} movies and TV shows) describe the size of the current lineup. Lineups change over time, and availability of individual channels, titles, and EPG data varies by region and upstream broadcast changes.
              </p>
              {BUSINESS_INFO.catalogEvidence && <p>{BUSINESS_INFO.catalogEvidence}</p>}
            </div>

            <div className="space-y-3">
              <h2 className="font-headline text-xl sm:text-2xl font-bold text-foreground">3. Personal use only</h2>
              <p>
                Subscriptions are for personal household use. Reselling, restreaming, public broadcasting, or redistributing account credentials without written authorization is prohibited under our{" "}
                <Link href="/terms-conditions" className="text-primary underline">Terms &amp; Conditions</Link>.
                You are responsible for making sure your use of streaming services complies with the laws where you live.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-headline text-xl sm:text-2xl font-bold text-foreground">4. Copyright and takedown requests</h2>
              <p>
                TryIPTV respects the rights of content owners. Rights holders can submit infringement notices and counter-notices through our{" "}
                <Link href="/dmca-report" className="text-primary underline">DMCA Notice &amp; Copyright Policy</Link>.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-headline text-xl sm:text-2xl font-bold text-foreground">5. Trademarks and third-party apps</h2>
              <p>
                Device and app names mentioned on this site belong to their owners and are used only to describe compatibility. TryIPTV is not affiliated with those companies and does not develop the third-party player apps covered in our guides. See the{" "}
                <Link href="/disclaimer" className="text-primary underline">Legal Disclaimer</Link> for details.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
