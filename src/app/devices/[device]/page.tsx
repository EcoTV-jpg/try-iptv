import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { FaqList } from "@/components/sections/FAQ";
import { howToArticles, getSafeArticleData, isRedirectedDevice } from "@/lib/how-to";
import { Clock, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import InternalLinks from "@/components/shared/InternalLinks";
import { Schema } from "@/components/shared/Schema";
import { generateArticleSchema, generateHowToSchema, generateFAQPageSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { siteConfig, generateMetadata as generatePageMetadata } from "@/lib/site-config";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { getPlaceholderImage } from "@/lib/server/image-blur-server";
import {
  GuideQuickInfo,
  GuideRequirements,
  GuideStepList,
  GuideComparisonTable,
  GuideTroubleshooting,
  GuideBufferingChecklist,
  GuideCallout,
  GuideScreenshot,
  GuideToc,
  GuideCta,
  type TocItem,
} from "@/components/guide";

type Props = {
  params: Promise<{ device: string }>;
};

type ArticleType = ReturnType<typeof getSafeArticleData> & { 
    image?: { 
        imageUrl: string; 
        imageHint: string; 
        width?: number; 
        height?: number; 
        blurDataURL?: string;
    } 
};

async function getArticleData(deviceId: string): Promise<ArticleType | undefined> {
    const article = getSafeArticleData(deviceId);
    if (!article) return undefined;

    const imageInfo = PlaceHolderImages.find(img => img.id === `guide-image-${article.id}`);
    if (!imageInfo) return { ...article, image: undefined };

    const blurDataURL = await getPlaceholderImage(imageInfo.imageUrl);
    return {
        ...article,
        image: {
            ...imageInfo,
            blurDataURL,
        },
    };
}

function StructuredData({ article }: { article: ArticleType }) {
    if (!article) return null;
    const { id, title, description, steps, faqs, image, datePublished, dateModified, totalTime } = article;
    const baseUrl = siteConfig.url;

    const articleSchema = generateArticleSchema({
        headline: title,
        description,
        image: image?.imageUrl,
        datePublished,
        dateModified,
        url: `${baseUrl}/devices/${id}`,
    });

    const howToSchema = generateHowToSchema({
        name: title,
        description: description,
        totalTime: totalTime,
        image: image ? {
            url: image.imageUrl,
            width: image.width,
            height: image.height
        } : undefined,
        steps: steps.map((step, index) => ({
            name: step.title,
            text: step.description,
            url: `${baseUrl}/devices/${id}#step-${index + 1}`,
        })),
    });

    const faqSchema = faqs ? generateFAQPageSchema(faqs) : null;

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", item: `${baseUrl}/` },
        { name: "Devices", item: `${baseUrl}/devices` },
        { name: title, item: `${baseUrl}/devices/${id}` }
    ]);

    return (
        <>
            <Schema id="article" schema={articleSchema} />
            <Schema id="how-to" schema={howToSchema} />
            {faqSchema && <Schema id="faq" schema={faqSchema} />}
            <Schema id="breadcrumb" schema={breadcrumbSchema} />
        </>
    );
}

// Per-device metadata overrides where the SERP <title> or meta description
// needs to differ from the on-page H1 / visible lede paragraph.
const DEVICE_SEO_OVERRIDES: Record<string, { seoTitle?: string; metaDescription?: string }> = {
  firestick: {
    seoTitle: 'How to Install IPTV on Firestick (2026 Setup Guide)',
    metaDescription: 'Learn how to install IPTV on Firestick step by step. Set up an IPTV player using Xtream Codes or M3U, load your EPG, and fix common Fire TV issues.',
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { device } = await params;
  const article = getSafeArticleData(device);

  if (!article) {
    notFound();
  }

  const overrides = DEVICE_SEO_OVERRIDES[device];
  const title = overrides?.seoTitle ?? article.title;
  const description = overrides?.metaDescription ?? article.description;

  return generatePageMetadata({
    title,
    description,
    canonical: `/devices/${device}`,
  });
}

export default async function HowToPage({ params }: Props) {
  const { device } = await params;
  const article = await getArticleData(device);

  if (!article) {
    notFound();
  }
  
  const { title, description, steps, extraSections, faqs, image, primaryKeyword, id, totalTime, dateModified } = article;
  const totalTimeInMinutes = totalTime?.replace('PT', '').replace('M', '');
  const isFirestick = id === "firestick";

  // Table of Contents definition
  const firestickTocItems: TocItem[] = [
    { id: "what-you-need", label: "What You'll Need" },
    { id: "setup-steps", label: "7-Step Installation" },
    { id: "service-vs-player", label: "Service vs Player" },
    { id: "m3u-vs-xtream", label: "M3U vs Xtream Codes" },
    { id: "developer-options", label: "Developer Options" },
    { id: "xtream-setup-detail", label: "Xtream Codes Setup" },
    { id: "m3u-setup-detail", label: "M3U Playlist Setup" },
    { id: "epg-detail", label: "EPG (TV Guide) Setup" },
    { id: "troubleshooting", label: "Troubleshooting Matrix" },
    { id: "buffering", label: "Buffering Checklist" },
    { id: "two-firesticks", label: "Two Simultaneous Streams" },
    { id: "before-paying", label: "24-Hour Free Trial" },
    { id: "storage", label: "Storage Management" },
    { id: "security", label: "Sideloading Security" },
    ...(faqs ? [{ id: "faq", label: "Frequently Asked Questions" }] : []),
  ];

  const defaultTocItems: TocItem[] = [
    { id: "what-you-need", label: "What You'll Need" },
    { id: "setup-steps", label: "Setup Steps" },
    ...(extraSections || []).map((s) => ({ id: s.id, label: s.title })),
    ...(faqs ? [{ id: "faq", label: "Frequently Asked Questions" }] : []),
  ];

  const tocItems = isFirestick ? firestickTocItems : defaultTocItems;

  return (
    <>
      <StructuredData article={article} />
      <Section className="pt-8 pb-16 sm:pt-12 sm:pb-24">
        <Container>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Devices", href: "/devices" }, { label: title }]} />
          
          <article className="mt-6">
            {/* Editorial Header */}
            <header className="mb-12 text-center max-w-4xl mx-auto">
              <p className="eyebrow mb-2.5">Installation Guide</p>
              <h1 className="font-headline text-3xl font-extrabold leading-[1.15] sm:text-4xl lg:text-[46px] xl:text-[48px] text-foreground tracking-tight max-w-4xl mx-auto">
                {title}
              </h1>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                {description}
              </p>

              {/* Informational Specs Rail */}
              <GuideQuickInfo
                device={primaryKeyword}
                setupMethod="IPTV Player + Credentials"
                loginFormat="Xtream Codes or M3U"
                difficulty="Simple Guided Setup"
              />

              {/* Badges: Time & Last Reviewed */}
              <div className="mt-5 flex flex-wrap justify-center items-center gap-3 text-xs">
                {totalTimeInMinutes && (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.09] bg-[#07080a] px-3 py-1 text-muted-foreground">
                    <Clock className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                    <span>Estimated time: {totalTimeInMinutes} minutes</span>
                  </span>
                )}
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.09] bg-[#07080a] px-3 py-1 text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                  <span>Updated:</span>
                  <time dateTime={dateModified} className="text-foreground font-semibold">
                    {new Date(dateModified).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })}
                  </time>
                </span>
              </div>

              {/* Mobile Table of Contents */}
              <GuideToc items={tocItems} variant="mobile" />
            </header>

            {/* Editorial Grid: Main Article + Sticky Sidebar */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-start">
              {/* Main Reading Column (capped at comfortable reading width ~760-820px) */}
              <div className="lg:col-span-8 w-full max-w-[820px] space-y-12 sm:space-y-14">
                {/* Prerequisites Grid */}
                <GuideRequirements primaryKeyword={primaryKeyword} />

                {/* Step-by-Step Sequence */}
                <GuideStepList steps={steps} primaryKeyword={primaryKeyword} />

                {/* Stream Isolation Callout right after steps */}
                {isFirestick && (
                  <GuideCallout type="important" title="Stream Isolation Rule">
                    <p>
                      If one specific channel fails while other channels in your player stream smoothly, the issue is stream-specific.
                      Do not immediately replace your account credentials or reset the player application.
                    </p>
                  </GuideCallout>
                )}

                {/* Firestick-Specific Rich Sections */}
                {isFirestick && extraSections && (
                  <div className="space-y-12">
                    {/* Service vs Player */}
                    {extraSections.find((s) => s.id === "service-vs-player") && (
                      <div id="service-vs-player" className="scroll-mt-28 pt-8 border-t border-white/[0.08]">
                        <h2 className="font-headline text-2xl sm:text-3xl font-extrabold text-foreground mb-4">
                          {extraSections.find((s) => s.id === "service-vs-player")?.title}
                        </h2>
                        <div
                          className="text-sm sm:text-base leading-relaxed text-muted-foreground space-y-4 [&>p]:leading-relaxed [&>ul]:space-y-2 [&>ul]:list-disc [&>ul]:pl-5 [&>strong]:text-foreground [&>strong]:font-semibold"
                          dangerouslySetInnerHTML={{
                            __html: extraSections.find((s) => s.id === "service-vs-player")?.content || "",
                          }}
                        />
                      </div>
                    )}

                    {/* M3U vs Xtream Codes */}
                    {extraSections.find((s) => s.id === "m3u-vs-xtream") && (
                      <div id="m3u-vs-xtream" className="scroll-mt-28 pt-8 border-t border-white/[0.08]">
                        <h2 className="font-headline text-2xl sm:text-3xl font-extrabold text-foreground mb-4">
                          {extraSections.find((s) => s.id === "m3u-vs-xtream")?.title}
                        </h2>
                        <div
                          className="text-sm sm:text-base leading-relaxed text-muted-foreground space-y-4 [&>p]:leading-relaxed [&>strong]:text-foreground [&>strong]:font-semibold"
                          dangerouslySetInnerHTML={{
                            __html: extraSections.find((s) => s.id === "m3u-vs-xtream")?.content || "",
                          }}
                        />
                        <GuideComparisonTable />
                        <GuideCallout type="tip" title="Fire TV Remote Navigation">
                          <p>
                            Xtream Codes is generally easier to enter using a Fire TV remote because credentials are separated into
                            three distinct fields (server URL, username, password), significantly reducing on-screen typing errors compared to long URLs.
                          </p>
                        </GuideCallout>
                      </div>
                    )}

                    {/* Developer Options & Sideloading */}
                    {extraSections.find((s) => s.id === "developer-options") && (
                      <div id="developer-options" className="scroll-mt-28 pt-8 border-t border-white/[0.08]">
                        <h2 className="font-headline text-2xl sm:text-3xl font-extrabold text-foreground mb-4">
                          {extraSections.find((s) => s.id === "developer-options")?.title}
                        </h2>
                        <div
                          className="text-sm sm:text-base leading-relaxed text-muted-foreground space-y-4 [&>p]:leading-relaxed [&>ol]:space-y-2.5 [&>ol]:list-decimal [&>ol]:pl-5 [&>strong]:text-foreground [&>strong]:font-semibold"
                          dangerouslySetInnerHTML={{
                            __html: extraSections.find((s) => s.id === "developer-options")?.content || "",
                          }}
                        />

                        {/* Visual Evidence: Developer Options / Unknown Sources */}
                        <GuideScreenshot
                          src="/images/guides/firestick/firestick-developer-options-unknown-sources.webp"
                          alt="Developer Options on Fire TV showing Apps from Unknown Sources enabled"
                          caption="Developer Options on a Fire TV version showing Apps from Unknown Sources."
                          note="Menu names can vary by Fire TV model and Fire OS version. Some devices use “Install Unknown Apps” instead."
                          width={1024}
                          height={576}
                        />

                        {/* Visual Evidence: Unknown Sources Warning Dialog */}
                        <GuideScreenshot
                          src="/images/guides/firestick/firestick-unknown-sources-warning.webp"
                          alt="Fire TV warning prompt before allowing installation from outside Appstore"
                          caption="Fire TV warning shown before allowing installation from outside the Amazon Appstore."
                          width={1024}
                          height={572}
                        />

                        <GuideCallout type="security" title="Sideloading Permission Control">
                          <p>
                            Developer Options and unknown source permissions are only needed if your chosen player is unavailable in the Amazon Appstore.
                            Once installation finishes, you can disable the Downloader permission to keep your device secure.
                          </p>
                        </GuideCallout>
                      </div>
                    )}

                    {/* Xtream Setup Detail */}
                    {extraSections.find((s) => s.id === "xtream-setup-detail") && (
                      <div id="xtream-setup-detail" className="scroll-mt-28 pt-8 border-t border-white/[0.08]">
                        <h2 className="font-headline text-2xl sm:text-3xl font-extrabold text-foreground mb-4">
                          {extraSections.find((s) => s.id === "xtream-setup-detail")?.title}
                        </h2>
                        <div
                          className="text-sm sm:text-base leading-relaxed text-muted-foreground space-y-4 [&>p]:leading-relaxed [&>ul]:space-y-2 [&>ul]:list-disc [&>ul]:pl-5 [&>strong]:text-foreground [&>strong]:font-semibold"
                          dangerouslySetInnerHTML={{
                            __html: extraSections.find((s) => s.id === "xtream-setup-detail")?.content || "",
                          }}
                        />
                      </div>
                    )}

                    {/* M3U Setup Detail */}
                    {extraSections.find((s) => s.id === "m3u-setup-detail") && (
                      <div id="m3u-setup-detail" className="scroll-mt-28 pt-8 border-t border-white/[0.08]">
                        <h2 className="font-headline text-2xl sm:text-3xl font-extrabold text-foreground mb-4">
                          {extraSections.find((s) => s.id === "m3u-setup-detail")?.title}
                        </h2>
                        <div
                          className="text-sm sm:text-base leading-relaxed text-muted-foreground space-y-4 [&>p]:leading-relaxed [&>strong]:text-foreground [&>strong]:font-semibold"
                          dangerouslySetInnerHTML={{
                            __html: extraSections.find((s) => s.id === "m3u-setup-detail")?.content || "",
                          }}
                        />
                      </div>
                    )}

                    {/* EPG Setup Detail */}
                    {extraSections.find((s) => s.id === "epg-detail") && (
                      <div id="epg-detail" className="scroll-mt-28 pt-8 border-t border-white/[0.08]">
                        <h2 className="font-headline text-2xl sm:text-3xl font-extrabold text-foreground mb-4">
                          {extraSections.find((s) => s.id === "epg-detail")?.title}
                        </h2>
                        <div
                          className="text-sm sm:text-base leading-relaxed text-muted-foreground space-y-4 [&>p]:leading-relaxed [&>ul]:space-y-2 [&>ul]:list-disc [&>ul]:pl-5 [&>strong]:text-foreground [&>strong]:font-semibold"
                          dangerouslySetInnerHTML={{
                            __html: extraSections.find((s) => s.id === "epg-detail")?.content || "",
                          }}
                        />
                      </div>
                    )}

                    {/* Diagnostic Troubleshooting Interface */}
                    <GuideTroubleshooting />

                    {/* Buffering Decision Checklist */}
                    <GuideBufferingChecklist />

                    {/* Two Firesticks */}
                    {extraSections.find((s) => s.id === "two-firesticks") && (
                      <div id="two-firesticks" className="scroll-mt-28 pt-8 border-t border-white/[0.08]">
                        <div className="rounded-xl border border-white/[0.08] bg-[#07080a] p-5 sm:p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/[0.08] border border-primary/20 rounded px-2 py-0.5 inline-block mb-3">
                            Device Policy
                          </span>
                          <h2 className="font-headline text-xl sm:text-2xl font-bold text-foreground mb-3">
                            {extraSections.find((s) => s.id === "two-firesticks")?.title}
                          </h2>
                          <div
                            className="text-xs sm:text-sm leading-relaxed text-muted-foreground space-y-3 [&>p]:leading-relaxed [&>strong]:text-foreground [&>strong]:font-semibold"
                            dangerouslySetInnerHTML={{
                              __html: extraSections.find((s) => s.id === "two-firesticks")?.content || "",
                            }}
                          />
                        </div>
                      </div>
                    )}

                    {/* Before Paying / Free Trial Section */}
                    {extraSections.find((s) => s.id === "before-paying") && (
                      <div id="before-paying" className="scroll-mt-28 pt-8 border-t border-white/[0.08]">
                        <div className="rounded-xl border border-white/[0.08] bg-[#07080a] p-5 sm:p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground bg-white/[0.04] border border-white/[0.1] rounded px-2 py-0.5 inline-block mb-3">
                            Trial Terms
                          </span>
                          <h2 className="font-headline text-xl sm:text-2xl font-bold text-foreground mb-3">
                            {extraSections.find((s) => s.id === "before-paying")?.title}
                          </h2>
                          <div
                            className="text-xs sm:text-sm leading-relaxed text-muted-foreground space-y-3 [&>p]:leading-relaxed [&>strong]:text-foreground [&>strong]:font-semibold [&>a]:text-primary [&>a]:underline [&>a]:underline-offset-4"
                            dangerouslySetInnerHTML={{
                              __html: extraSections.find((s) => s.id === "before-paying")?.content || "",
                            }}
                          />
                        </div>
                      </div>
                    )}

                    {/* Storage Management */}
                    {extraSections.find((s) => s.id === "storage") && (
                      <div id="storage" className="scroll-mt-28 pt-8 border-t border-white/[0.08]">
                        <div className="rounded-xl border border-white/[0.08] bg-[#07080a] p-5 sm:p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-400/[0.08] border border-amber-400/20 rounded px-2 py-0.5 inline-block mb-3">
                            Device Maintenance
                          </span>
                          <h2 className="font-headline text-xl sm:text-2xl font-bold text-foreground mb-3">
                            {extraSections.find((s) => s.id === "storage")?.title}
                          </h2>
                          <div
                            className="text-xs sm:text-sm leading-relaxed text-muted-foreground space-y-3 [&>p]:leading-relaxed [&>ul]:space-y-1.5 [&>ul]:list-disc [&>ul]:pl-5 [&>strong]:text-foreground [&>strong]:font-semibold"
                            dangerouslySetInnerHTML={{
                              __html: extraSections.find((s) => s.id === "storage")?.content || "",
                            }}
                          />
                        </div>
                      </div>
                    )}

                    {/* Sideloading Security */}
                    {extraSections.find((s) => s.id === "security") && (
                      <div id="security" className="scroll-mt-28 pt-8 border-t border-white/[0.08]">
                        <div className="rounded-xl border border-white/[0.08] bg-[#07080a] p-5 sm:p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] space-y-4">
                          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-sky-400 bg-sky-400/[0.08] border border-sky-400/20 rounded px-2 py-0.5 inline-block">
                            Security Verification
                          </span>
                          <h2 className="font-headline text-xl sm:text-2xl font-bold text-foreground">
                            {extraSections.find((s) => s.id === "security")?.title}
                          </h2>
                          <div
                            className="text-xs sm:text-sm leading-relaxed text-muted-foreground space-y-3 [&>p]:leading-relaxed [&>strong]:text-foreground [&>strong]:font-semibold"
                            dangerouslySetInnerHTML={{
                              __html: extraSections.find((s) => s.id === "security")?.content || "",
                            }}
                          />
                          <GuideCallout type="security" title="Keep Credentials Private">
                            <p>
                              Never expose your M3U playlist URL, username, password, or server credentials in public forums, social media, or shared screenshots.
                              Always download player APKs directly from the player developer&apos;s verified website.
                            </p>
                          </GuideCallout>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Generic fallback for non-Firestick devices with extraSections (e.g. Mac) */}
                {!isFirestick && extraSections && extraSections.length > 0 && (
                  <div className="space-y-12">
                    {extraSections.map((section) => (
                      <div key={section.id} id={section.id} className="scroll-mt-28 pt-8 border-t border-white/[0.08]">
                        <h2 className="font-headline text-2xl sm:text-3xl font-extrabold text-foreground mb-4">
                          {section.title}
                        </h2>
                        <div
                          className="text-sm sm:text-base leading-relaxed text-muted-foreground space-y-4 [&>p]:leading-relaxed [&>ul]:space-y-2 [&>ul]:list-disc [&>ul]:pl-5 [&>ol]:space-y-2 [&>ol]:list-decimal [&>ol]:pl-5 [&>strong]:text-foreground [&>strong]:font-semibold [&>a]:text-primary [&>a]:underline [&>a]:underline-offset-4"
                          dangerouslySetInnerHTML={{ __html: section.content }}
                        />
                      </div>
                    ))}
                  </div>
                )}

                {/* Integrated Technical CTA Box */}
                <GuideCta primaryKeyword={primaryKeyword} />

                {/* Frequently Asked Questions */}
                {faqs && (
                  <div id="faq" className="scroll-mt-28 pt-8 border-t border-white/[0.08]">
                    <div className="mb-6">
                      <p className="eyebrow mb-1">Direct Answers</p>
                      <h2 className="font-headline text-2xl sm:text-3xl font-extrabold text-foreground">
                        Frequently Asked Questions
                      </h2>
                      <p className="mt-2 text-sm sm:text-base leading-relaxed text-muted-foreground">
                        Clear, non-marketing answers to common setup, compatibility, and playback questions for {primaryKeyword}.
                      </p>
                    </div>
                    <FaqList items={faqs} />
                  </div>
                )}
              </div>

              {/* Sidebar Column: Sticky TOC + Image + Related Guides */}
              <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
                <GuideToc items={tocItems} variant="desktop" />

                {image && image.blurDataURL && (
                  <Card className="overflow-hidden border border-white/[0.08] bg-[#07080a] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                    <CardContent className="p-0">
                      <Image
                        src={image.imageUrl}
                        alt={`${primaryKeyword} - ${title}`}
                        width={image.width || 600}
                        height={image.height || 400}
                        data-ai-hint={image.imageHint}
                        priority
                        className="object-cover w-full h-auto"
                        placeholder="blur"
                        blurDataURL={image.blurDataURL}
                      />
                    </CardContent>
                  </Card>
                )}

                <InternalLinks currentId={id} />
              </aside>
            </div>
          </article>
        </Container>
      </Section>
    </>
  );
}

export async function generateStaticParams() {
  return howToArticles
    .filter((article) => !isRedirectedDevice(article.id))
    .map((article) => ({
      device: article.id,
    }));
}
