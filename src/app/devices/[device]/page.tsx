import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { FaqList } from "@/components/sections/FAQ";
import { howToArticles, getSafeArticleData } from "@/lib/how-to";
import { Check, Clock } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import InternalLinks from "@/components/shared/InternalLinks";
import { Schema } from "@/components/shared/Schema";
import { generateArticleSchema, generateHowToSchema, generateFAQPageSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { siteConfig, generateMetadata as generatePageMetadata } from "@/lib/site-config";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { getPlaceholderImage } from "@/lib/server/image-blur-server";

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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { device } = await params;
  const article = getSafeArticleData(device);

  if (!article) {
    notFound();
  }

  const { title, description } = article;

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

  return (
    <>
      <StructuredData article={article} />
      <Section className="pt-10 pb-16 sm:pt-14 sm:pb-24">
        <Container>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Devices", href: "/devices" }, { label: title }]} />
          
          <article>
            <header className="mb-12 text-center max-w-4xl mx-auto">
              <p className="eyebrow mb-3">Installation Guide</p>
              <h1 className="font-headline text-3xl font-extrabold leading-[1.1] sm:text-4xl lg:text-5xl text-foreground">
                {title}
              </h1>
              <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground leading-7">
                {description}
              </p>
              <div className="mt-6 flex flex-wrap justify-center items-center gap-3 text-xs">
                {totalTimeInMinutes && (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.09] bg-card px-3 py-1 text-muted-foreground">
                    <Clock className="h-3.5 w-3.5 text-primary" />
                    <span>Estimated time: {totalTimeInMinutes} minutes</span>
                  </span>
                )}
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.09] bg-card px-3 py-1 text-muted-foreground">
                  <span>Updated:</span>
                  <time dateTime={dateModified} className="text-foreground font-semibold">
                    {new Date(dateModified).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </time>
                </span>
              </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 items-start">
              <div className="lg:col-span-2">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <Card className="not-prose my-6">
                    <CardHeader>
                      <p className="eyebrow mb-1">Prerequisites</p>
                      <h2 className="font-headline text-xl font-extrabold text-foreground">What You&apos;ll Need</h2>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 my-0">
                        <li className="flex items-center gap-3 text-sm leading-6 text-muted-foreground">
                          <Check className="h-4 w-4 flex-shrink-0 text-primary" /> A compatible {primaryKeyword}
                        </li>
                        <li className="flex items-center gap-3 text-sm leading-6 text-muted-foreground">
                          <Check className="h-4 w-4 flex-shrink-0 text-primary" /> A stable internet connection
                        </li>
                        <li className="flex items-center gap-3 text-sm leading-6 text-muted-foreground">
                          <Check className="h-4 w-4 flex-shrink-0 text-primary" /> An active TryIPTV subscription
                        </li>
                        <li className="flex items-center gap-3 text-sm leading-6 text-muted-foreground">
                          <Check className="h-4 w-4 flex-shrink-0 text-primary" /> Your M3U link or Xtream credentials
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <h2 className="font-headline text-2xl sm:text-3xl font-extrabold mt-10 mb-3 text-foreground">
                    Step-by-Step Installation Guide for {primaryKeyword}
                  </h2>
                  <p className="text-base leading-7 text-muted-foreground">
                    Follow these simple steps to get TryIPTV running on your {primaryKeyword}. The entire process should only take a few minutes.
                  </p>

                  <div className="space-y-8 mt-8 not-prose">
                    {steps.map((step, index) => (
                      <div key={index} id={`step-${index + 1}`} className="flex gap-5">
                        <div className="flex flex-col items-center">
                          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-primary/20 bg-primary/[0.06] text-primary font-extrabold text-sm">
                            {index + 1}
                          </div>
                          {index < steps.length - 1 && <div className="w-px flex-grow bg-white/[0.09] my-2" />}
                        </div>
                        <div className="pb-4">
                          <h3 className="font-headline text-xl font-extrabold text-foreground mb-2">{step.title}</h3>
                          <div className="text-sm sm:text-base leading-7 text-muted-foreground" dangerouslySetInnerHTML={{ __html: step.description }} />
                        </div>
                      </div>
                    ))}
                  </div>

                  {extraSections?.map(section => (
                    <div key={section.id} className="my-10">
                      <h2 className="font-headline text-2xl sm:text-3xl font-extrabold text-foreground mb-4">{section.title}</h2>
                      <div className="text-base leading-7 text-muted-foreground" dangerouslySetInnerHTML={{ __html: section.content }} />
                    </div>
                  ))}

                  <div className="not-prose relative overflow-hidden rounded-lg border border-primary/25 bg-[#0b100d] p-6 sm:p-8 my-10 text-center">
                    <div className="absolute inset-x-0 top-0 h-1 bg-primary sm:inset-y-0 sm:left-0 sm:h-full sm:w-1" />
                    <p className="eyebrow mb-2">Ready to stream</p>
                    <h2 className="font-headline text-2xl font-extrabold text-foreground">
                      Ready to Start Watching on Your {primaryKeyword}?
                    </h2>
                    <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
                      Get your TryIPTV subscription today and unlock 24,000+ live channels and 80,000+ movies and series.
                    </p>
                    <div className="mt-6 flex flex-wrap justify-center gap-3">
                      <Button asChild>
                        <Link href="/pricing">Get Your Subscription Now</Link>
                      </Button>
                      <Button asChild variant="outline">
                        <Link href="/iptv-free-trial">Start Free Trial</Link>
                      </Button>
                    </div>
                  </div>

                  {faqs && (
                    <div className="not-prose mt-12">
                      <h2 className="font-headline text-2xl sm:text-3xl font-extrabold text-foreground mb-6">
                        Frequently Asked Questions
                      </h2>
                      <FaqList items={faqs} />
                    </div>
                  )}
                </div>
              </div>

              <aside className="lg:col-span-1 space-y-6 lg:sticky lg:top-24">
                {image && image.blurDataURL && (
                  <Card className="overflow-hidden">
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
  return howToArticles.map((article) => ({
    device: article.id,
  }));
}
