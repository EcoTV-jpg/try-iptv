import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Pricing } from "@/components/sections/Pricing";
import { FaqList } from "@/components/sections/FAQ";
import { SubscriptionFeatures } from "@/components/sections/SubscriptionFeatures";
import { getPricingPageData } from "@/lib/data/pricing-page";
import { Schema } from "@/components/shared/Schema";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";
import { Check, ShieldCheck, ArrowRight, CirclePlay, MessageCircle, Package, CreditCard, Tv } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function generateMetadata(): Metadata {
    const title = "TryIPTV Pricing Plans — Best IPTV Subscription From $16";
    const description = "Compare TryIPTV subscription plans from $16. 24,000+ live channels, 80,000+ VOD movies and series, 2 simultaneous device connections, and 24-hour free trial.";
    
    return {
      ...generatePageMetadata({
          title,
          description,
          canonical: "/pricing",
      }),
      title: {
        absolute: title,
      }
    };
}

export default async function IPTVSubscription() {
    const { 
      productSchema,
      breadcrumbSchema, 
      faqSchema,
      pricingPageFaqs
    } = await getPricingPageData();

  return (
    <>
      <Schema id="product" schema={productSchema} />
      <Schema id="breadcrumb" schema={breadcrumbSchema} />
      <Schema id="faq" schema={faqSchema} />
      
      {/* 1. Header Section */}
      <Section className="relative overflow-hidden border-b border-white/[0.07] pt-12 pb-14 sm:pt-16 sm:pb-20">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
        <Container className="relative">
          <Breadcrumb items={[{ label: "Pricing" }]} align="center" />
          <SectionHeader
            as="h1"
            eyebrow="Most Popular IPTV Subscription Plans"
            title="TryIPTV Pricing Plans"
            subtitle="Choose the best IPTV plan for your home, from $16/month (or $7.50/month equivalent on our 12-month prepaid plan). All plans include 2 simultaneous connections, 24,000+ live channels, and HD & 4K streams with no contracts."
          />
          <div className="mt-8 flex flex-wrap justify-center items-center gap-3 text-xs font-semibold sm:text-sm">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.09] bg-card px-3.5 py-1.5 text-muted-foreground">
              <Check className="h-4 w-4 text-primary" /> 2 Simultaneous Connections
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.09] bg-card px-3.5 py-1.5 text-muted-foreground">
              <Check className="h-4 w-4 text-primary" /> 24,000+ Live Channels
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.09] bg-card px-3.5 py-1.5 text-muted-foreground">
              <Check className="h-4 w-4 text-primary" /> 80,000+ Movies &amp; Series
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.09] bg-card px-3.5 py-1.5 text-muted-foreground">
              <Check className="h-4 w-4 text-primary" /> 24-Hour Free Trial
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.09] bg-card px-3.5 py-1.5 text-muted-foreground">
              <Check className="h-4 w-4 text-primary" /> 7-Day Refund Policy
            </div>
          </div>
        </Container>
      </Section>

      {/* 2. Pricing Plans Grid */}
      <Pricing />

      {/* 3. How Does TryIPTV Work? */}
      <Section className="border-t border-white/[0.06] bg-[#070a08]">
        <Container>
          <SectionHeader
            eyebrow="Simple 3-Step Process"
            title="How Does TryIPTV Work?"
            subtitle="Order a plan, complete checkout, and start watching. Your login credentials and playlist links are delivered to your email following payment confirmation."
          />
          <div className="grid grid-cols-1 border-y border-white/[0.09] md:grid-cols-3 md:divide-x md:divide-white/[0.09]">
            <div className="relative border-b border-white/[0.09] px-6 py-8 last:border-b-0 md:border-b-0 md:px-8 md:py-9">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-xs font-extrabold text-muted-foreground">01</span>
                <span className="grid h-11 w-11 place-items-center rounded-md border border-primary/20 bg-primary/[0.06]">
                  <Package className="h-5 w-5 text-primary" />
                </span>
              </div>
              <h3 className="mb-3 font-headline text-xl font-extrabold leading-7">Pick your plan</h3>
              <p className="text-sm leading-6 text-muted-foreground">
                Choose 1, 3, 6, or 12 months with 2 simultaneous device connections included. Plans start at $16 for one month.
              </p>
            </div>

            <div className="relative border-b border-white/[0.09] px-6 py-8 last:border-b-0 md:border-b-0 md:px-8 md:py-9">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-xs font-extrabold text-muted-foreground">02</span>
                <span className="grid h-11 w-11 place-items-center rounded-md border border-primary/20 bg-primary/[0.06]">
                  <CreditCard className="h-5 w-5 text-primary" />
                </span>
              </div>
              <h3 className="mb-3 font-headline text-xl font-extrabold leading-7">Secure checkout</h3>
              <p className="text-sm leading-6 text-muted-foreground">
                Complete your purchase quickly and securely with zero contracts, hidden fees, or automatic recurring renewals.
              </p>
            </div>

            <div className="relative border-b border-white/[0.09] px-6 py-8 last:border-b-0 md:border-b-0 md:px-8 md:py-9">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-xs font-extrabold text-muted-foreground">03</span>
                <span className="grid h-11 w-11 place-items-center rounded-md border border-primary/20 bg-primary/[0.06]">
                  <Tv className="h-5 w-5 text-primary" />
                </span>
              </div>
              <h3 className="mb-3 font-headline text-xl font-extrabold leading-7">Start streaming</h3>
              <p className="text-sm leading-6 text-muted-foreground">
                We send your M3U playlist URL and Xtream Codes login details by email following payment. Works on Fire TV, Android, Apple TV, Smart TVs, and PC.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* 4. Stream Smarter with TryIPTV & What You Get */}
      <Section className="border-t border-white/[0.06]">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <p className="eyebrow mb-3">Transparent Value</p>
              <h2 className="font-headline text-3xl font-extrabold leading-tight sm:text-4xl">
                Stream Smarter with TryIPTV
              </h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
                TryIPTV plans start at $16 for one month and drop to an equivalent of $7.50 per month on the 12-month prepaid plan. Every plan includes 24,000+ live channels and 80,000+ movies and series, with 2 simultaneous device connections, regular EPG schedule updates, and 24/7 support.
              </p>
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-white/[0.08] bg-card p-3.5 text-sm font-semibold text-foreground">
                  ✓ 2 Connections Included
                </div>
                <div className="rounded-lg border border-white/[0.08] bg-card p-3.5 text-sm font-semibold text-foreground">
                  ✓ Setup Credentials via Email
                </div>
                <div className="rounded-lg border border-white/[0.08] bg-card p-3.5 text-sm font-semibold text-foreground">
                  ✓ 24/7 Customer Support
                </div>
                <div className="rounded-lg border border-white/[0.08] bg-card p-3.5 text-sm font-semibold text-foreground">
                  ✓ No Auto-Renewals
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <Card className="border-primary/25 bg-[#0d1711] shadow-[0_20px_60px_rgba(0,240,120,0.05)]">
                <CardHeader className="pb-4">
                  <p className="eyebrow mb-1">Standard Inclusions</p>
                  <CardTitle as="h2" className="font-headline text-xl sm:text-2xl font-extrabold">What You Get With Every Plan</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3.5 text-sm sm:text-base">
                    {[
                      "24,000+ live TV channels & major sports events",
                      "80,000+ movies & series on demand (VOD)",
                      "Smart EPG (TV guide) with regular schedule updates",
                      "HD & 4K streams where available from broadcast source",
                      "Works on Fire TV, Android, Apple TV, Smart TVs & PC",
                      "2 simultaneous device connections on every plan",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* 5. Risk-Free Trial Callout */}
      <Section className="border-t border-white/[0.06] bg-[#070a08]">
        <Container>
          <div className="relative overflow-hidden rounded-lg border border-primary/25 bg-[#0b100d] p-7 sm:p-8 md:p-10 lg:flex lg:items-center lg:justify-between lg:text-left">
            <div className="absolute inset-y-0 left-0 w-1 bg-primary" />
            <div className="max-w-2xl">
              <p className="eyebrow mb-3 flex items-center justify-center gap-2 lg:justify-start">
                <ShieldCheck className="h-4 w-4 text-primary" /> Risk-Free Evaluation
              </p>
              <h2 className="font-headline text-3xl font-extrabold leading-[1.12] sm:text-4xl">
                Risk-Free to Try
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted-foreground lg:mx-0">
                Test TryIPTV first with a free 24-hour trial before you buy a plan. Eligible purchases are also backed by our 7-day refund policy if you encounter technical issues our support team cannot resolve.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:ml-10 lg:mt-0 lg:shrink-0">
              <Button asChild size="lg">
                <Link href="/iptv-free-trial">
                  <CirclePlay className="mr-2 h-4 w-4" /> Start 24-Hour Free Trial
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">
                  <MessageCircle className="mr-2 h-4 w-4" /> Contact Support
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* 6. Everything You Need to Stream */}
      <SubscriptionFeatures />

      {/* 7. Frequently Asked Questions */}
      <Section id="faq" className="border-t border-white/[0.06]">
        <Container>
          <SectionHeader
            eyebrow="Questions Answered"
            title="Frequently Asked Questions"
            subtitle="Have questions about our pricing, device setup, or trial? Find quick answers below."
          />
          <FaqList items={pricingPageFaqs} />

          <div className="mt-10 text-center">
            <p className="text-sm text-muted-foreground sm:text-base">
              Questions?{" "}
              <Link href="/contact" className="font-semibold text-primary underline underline-offset-4 hover:text-primary/80">
                Contact our support team
              </Link>
              . Available via WhatsApp and email.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
