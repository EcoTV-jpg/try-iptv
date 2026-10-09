import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Pricing } from "@/components/sections/Pricing";
import { getPricingPageData } from "@/lib/data/pricing-page";
import { Schema } from "@/components/shared/Schema";
import { PRODUCT_TRUTHS, generateMetadata as generatePageMetadata } from "@/lib/site-config";
import { plans } from "@/lib/site-data/pricing";
import {
  Check,
  ShieldCheck,
  ArrowRight,
  CirclePlay,
  MessageCircle,
  CreditCard,
  Tv,
  Calendar,
  Sparkles,
  Zap,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function generateMetadata(): Metadata {
  const title = "TryIPTV IPTV Pricing & Subscription Plans — From $16";
  const description =
    "Compare TryIPTV subscription plans and pricing. Monthly and yearly prepaid IPTV plans from $16 (or $7.50/mo on 12 months) with 24,000+ channels, 2 connections, and zero auto-renewals.";

  return {
    ...generatePageMetadata({
      title,
      description,
      canonical: "/pricing",
    }),
    title: {
      absolute: title,
    },
  };
}

export default async function IPTVSubscription() {
  const { productSchema, breadcrumbSchema, faqSchema, pricingPageFaqs } =
    await getPricingPageData();

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
            eyebrow="IPTV Pricing & Subscription Plans"
            title="TryIPTV Pricing & Subscription Plans"
            subtitle="Compare prepaid IPTV subscription plans from $16 for one month down to $7.50 per month equivalent on our 12-month prepaid plan. All plans include 2 simultaneous connections, 24,000+ live channels, and HD & 4K streams with no contracts and zero auto-renewals."
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
              <Check className="h-4 w-4 text-primary" /> Prepaid (No Auto-Renewal)
            </div>
          </div>

          {/* Answer-First Pricing Summary */}
          <div className="mx-auto mt-8 max-w-3xl rounded-lg border border-primary/20 bg-primary/[0.04] p-4 text-left sm:p-5">
            <h2 className="font-headline text-xs font-bold uppercase tracking-wider text-primary">
              IPTV Subscription Pricing
            </h2>
            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">
              TryIPTV plans start at $16 for 1 month. Longer prepaid plans reduce the effective monthly cost: $39 for 3 months, $60 for 6 months, and $90 for 12 months. Each plan includes 2 simultaneous connections and does not renew automatically.
            </p>
          </div>
        </Container>
      </Section>

      {/* 2. Interactive Pricing Plans Cards */}
      <Pricing showHeader={false} />

      {/* 3. Plan Comparison Table */}
      <Section className="border-t border-white/[0.06] bg-[#070a08]">
        <Container>
          <SectionHeader
            eyebrow="Cost Comparison"
            title="Compare IPTV Subscription Plans"
            subtitle="A transparent side-by-side comparison of total prepaid costs, equivalent monthly rates, connections, and billing terms across all four durations."
          />
          <div className="mx-auto max-w-3xl overflow-hidden rounded-xl border border-white/[0.09] bg-card shadow-[0_18px_60px_rgba(0,0,0,0.2)]">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-white/[0.09] bg-white/[0.03] text-[11px] sm:text-xs font-extrabold uppercase text-muted-foreground">
                    <th className="py-3.5 px-4 sm:px-6">Plan</th>
                    <th className="py-3.5 px-4 sm:px-6">Total Price</th>
                    <th className="py-3.5 px-4 sm:px-6">Effective Monthly Cost</th>
                    <th className="py-3.5 px-3 sm:px-6 text-center">Connections</th>
                    <th className="py-3.5 px-4 sm:px-6">Billing</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.06] text-muted-foreground">
                  <tr>
                    <td className="py-3 px-4 sm:px-6 font-semibold text-foreground">1 Month</td>
                    <td className="py-3 px-4 sm:px-6 font-bold text-foreground">$16</td>
                    <td className="py-3 px-4 sm:px-6">$16.00/mo</td>
                    <td className="py-3 px-3 sm:px-6 text-center text-foreground">2</td>
                    <td className="py-3 px-4 sm:px-6">Prepaid</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 sm:px-6 font-semibold text-foreground">3 Months</td>
                    <td className="py-3 px-4 sm:px-6 font-bold text-foreground">$39</td>
                    <td className="py-3 px-4 sm:px-6 text-foreground font-medium">$13.00/mo</td>
                    <td className="py-3 px-3 sm:px-6 text-center text-foreground">2</td>
                    <td className="py-3 px-4 sm:px-6">Prepaid</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 sm:px-6 font-semibold text-foreground">6 Months</td>
                    <td className="py-3 px-4 sm:px-6 font-bold text-foreground">$60</td>
                    <td className="py-3 px-4 sm:px-6 text-foreground font-medium">$10.00/mo</td>
                    <td className="py-3 px-3 sm:px-6 text-center text-foreground">2</td>
                    <td className="py-3 px-4 sm:px-6">Prepaid</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 sm:px-6 font-semibold text-foreground">12 Months</td>
                    <td className="py-3 px-4 sm:px-6 font-bold text-primary">$90</td>
                    <td className="py-3 px-4 sm:px-6 text-primary font-bold">$7.50/mo</td>
                    <td className="py-3 px-3 sm:px-6 text-center text-foreground">2</td>
                    <td className="py-3 px-4 sm:px-6">Prepaid</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <p className="mt-3.5 text-center text-xs text-muted-foreground">
            Effective monthly cost is shown for comparison only. Each plan is paid upfront and does not renew automatically.
          </p>
        </Container>
      </Section>

      {/* 4. Which IPTV Plan Should You Choose? (Buyer's Guide) */}
      <Section className="border-t border-white/[0.06]">
        <Container>
          <SectionHeader
            eyebrow="Plan Selection Guide"
            title="Which IPTV Plan Should You Choose?"
            subtitle="Understand how each subscription duration matches your streaming habits, device setup, and household budget."
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card className="border-white/[0.09] bg-card p-6 shadow-[0_18px_60px_rgba(0,0,0,0.2)]">
              <div className="mb-4 flex items-center justify-between">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Flexible Option
                </span>
                <span className="font-headline text-lg font-bold text-foreground">$16 / Month</span>
              </div>
              <h3 className="font-headline text-xl font-extrabold text-foreground mb-2.5">
                1-Month Plan: Maximum Flexibility
              </h3>
              <p className="text-sm leading-6 text-muted-foreground mb-4">
                The 1-month plan is ideal if you are new to IPTV, testing our channel lineup on your devices after your 24-hour free trial, or want month-to-month freedom without multi-month prepayment.
              </p>
              <ul className="space-y-2 text-xs text-muted-foreground border-t border-white/[0.08] pt-4">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary shrink-0" /> Full access to all 24,000+ live channels &amp; VOD
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary shrink-0" /> 2 simultaneous device streams included
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary shrink-0" /> No long-term commitment or cancellation hassle
                </li>
              </ul>
            </Card>

            <Card className="border-white/[0.09] bg-card p-6 shadow-[0_18px_60px_rgba(0,0,0,0.2)]">
              <div className="mb-4 flex items-center justify-between">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Seasonal Option
                </span>
                <span className="font-headline text-lg font-bold text-foreground">$13 &amp; $10 / Mo Eq.</span>
              </div>
              <h3 className="font-headline text-xl font-extrabold text-foreground mb-2.5">
                3 &amp; 6-Month Plans: Seasonal Value
              </h3>
              <p className="text-sm leading-6 text-muted-foreground mb-4">
                Prepay $39 for 3 months (save 19%) or $60 for 6 months (save 38%). Perfect for locking in discounted rates during major soccer, football, basketball, or racing seasons without monthly rebilling.
              </p>
              <ul className="space-y-2 text-xs text-muted-foreground border-t border-white/[0.08] pt-4">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary shrink-0" /> Saves $9 on 3 months, $36 on 6 months vs monthly renewals
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary shrink-0" /> Premium PPV events and smart EPG guide included
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary shrink-0" /> Seamless renewal without changing player credentials
                </li>
              </ul>
            </Card>

            <Card className="border-primary/30 bg-[linear-gradient(180deg,rgba(0,240,120,0.04),rgba(7,8,10,0)_50%),#07080a] p-6 shadow-[0_18px_60px_rgba(0,240,120,0.06)] relative">
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-md border border-primary/25 bg-primary/[0.08] px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-primary">
                  Best Value
                </span>
                <span className="font-headline text-lg font-bold text-primary">$7.50 / Mo Eq.</span>
              </div>
              <h3 className="font-headline text-xl font-extrabold text-foreground mb-2.5">
                12-Month Plan: Lowest Subscription Cost
              </h3>
              <p className="text-sm leading-6 text-muted-foreground mb-4">
                Our lowest effective monthly rate. At $90 for an entire year ($7.50/month equivalent), you save 53% compared to monthly renewals—giving your household 365 days of 4K live TV and sports at the lowest cost.
              </p>
              <ul className="space-y-2 text-xs text-muted-foreground border-t border-white/[0.08] pt-4">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary shrink-0" /> Maximum annual savings ($102 saved compared to monthly)
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary shrink-0" /> Uninterrupted streaming with zero monthly rebilling
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary shrink-0" /> Standard 24/7 technical customer support included
                </li>
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 5. What's Included with Every Plan */}
      <Section className="border-t border-white/[0.06] bg-[#070a08]">
        <Container>
          <SectionHeader
            eyebrow="Universal Features"
            title="What’s Included with Every Plan"
            subtitle="Every TryIPTV prepaid subscription includes identical full-access features regardless of duration."
          />
          <div className="mx-auto max-w-3xl rounded-xl border border-white/[0.09] bg-card p-6 shadow-[0_18px_60px_rgba(0,0,0,0.2)]">
            <ul className="grid grid-cols-1 gap-3.5 text-xs text-muted-foreground sm:grid-cols-2 sm:text-sm">
              <li className="flex items-start gap-2.5">
                <Check className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                <span><strong className="text-foreground">2 simultaneous connections</strong> on every plan</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                <span><strong className="text-foreground">24,000+ live TV channels</strong> with sports &amp; news</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                <span><strong className="text-foreground">80,000+ movies &amp; series</strong> on demand (VOD)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                <span><strong className="text-foreground">Smart EPG TV guide</strong> for scheduling and timelines</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                <span><strong className="text-foreground">M3U playlist link</strong> for universal media players</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                <span><strong className="text-foreground">Xtream Codes API login</strong> for dedicated player apps</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                <span><strong className="text-foreground">Compatible with TVs, streaming sticks &amp; computers</strong></span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                <span><strong className="text-foreground">No automatic renewal</strong> with strictly prepaid checkout</span>
              </li>
            </ul>
          </div>
        </Container>
      </Section>

      {/* 6. How Much Does a TryIPTV Subscription Cost? */}
      <Section className="border-t border-white/[0.06]">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-headline text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              How Much Does a TryIPTV Subscription Cost?
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              A TryIPTV subscription costs $16 for 1 month, $39 for 3 months, $60 for 6 months, or $90 for 12 months. Because the plans are prepaid, longer plans reduce the effective monthly cost from $16 per month on the 1-month plan to $7.50 per month on the 12-month plan.
            </p>
          </div>
        </Container>
      </Section>

      {/* 7. How to Start */}
      <Section className="border-t border-white/[0.06] bg-[#070a08]">
        <Container>
          <SectionHeader
            eyebrow="Getting Started"
            title="How to Start"
            subtitle="Starting your subscription takes only three straightforward steps."
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-white/[0.08] bg-card p-6 shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
              <div className="text-xs font-mono font-bold text-primary mb-2">STEP 01</div>
              <h3 className="font-headline text-base font-extrabold text-foreground mb-2">
                1. Choose a Prepaid Plan
              </h3>
              <p className="text-xs leading-5 text-muted-foreground">
                Select your preferred subscription duration (1, 3, 6, or 12 months) based on your viewing needs and savings preference.
              </p>
            </div>
            <div className="rounded-xl border border-white/[0.08] bg-card p-6 shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
              <div className="text-xs font-mono font-bold text-primary mb-2">STEP 02</div>
              <h3 className="font-headline text-base font-extrabold text-foreground mb-2">
                2. Complete Checkout
              </h3>
              <p className="text-xs leading-5 text-muted-foreground">
                Complete your one-time prepaid order using {PRODUCT_TRUTHS.paymentMethods.join(", ")}. No payment details are stored for recurring debits.
              </p>
            </div>
            <div className="rounded-xl border border-white/[0.08] bg-card p-6 shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
              <div className="text-xs font-mono font-bold text-primary mb-2">STEP 03</div>
              <h3 className="font-headline text-base font-extrabold text-foreground mb-2">
                3. Receive Details &amp; Stream
              </h3>
              <p className="text-xs leading-5 text-muted-foreground">
                Receive your Xtream Codes and M3U details by email typically within 5–15 minutes, then enter them into your preferred IPTV player.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* 8. Risk-Free Trial Callout */}
      <Section className="border-t border-white/[0.06]">
        <Container>
          <div className="relative overflow-hidden rounded-xl border border-primary/25 bg-[#0b100d] p-7 sm:p-8 md:p-10 lg:flex lg:items-center lg:justify-between lg:text-left">
            <div className="absolute inset-y-0 left-0 w-1 bg-primary" />
            <div className="max-w-2xl">
              <p className="eyebrow mb-3 flex items-center justify-center gap-2 lg:justify-start">
                <ShieldCheck className="h-4 w-4 text-primary" /> Evaluate Before Subscribing
              </p>
              <h2 className="font-headline text-3xl font-extrabold leading-[1.12] sm:text-4xl text-foreground">
                Want to Test TryIPTV Before Choosing a Plan?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted-foreground lg:mx-0">
                Not ready to choose a plan? Test the service first with the 24-hour IPTV free trial. Experience all 24,000+ live channels, 80,000+ movies and series, 4K picture quality, and 2 connections on your own TV. No credit card required.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:ml-10 lg:mt-0 lg:shrink-0">
              <Button asChild size="lg">
                <Link href="/iptv-free-trial">
                  <CirclePlay className="mr-2 h-4 w-4" /> Start 24-Hour Free Trial
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact-us">
                  <MessageCircle className="mr-2 h-4 w-4" /> Contact Support
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* 9. Frequently Asked Questions (Targeted to Pricing Intent) */}
      <Section id="faq" className="border-t border-white/[0.06] bg-[#070a08]">
        <Container>
          <SectionHeader
            eyebrow="Pricing &amp; Cost Questions"
            title="Frequently Asked Questions About IPTV Pricing"
            subtitle="Straightforward answers about plan durations, payment methods, renewal policies, and multi-device connections."
          />
          <div className="mx-auto max-w-[880px] overflow-hidden rounded-[18px] border border-white/[0.08] bg-[#07080a] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
            {pricingPageFaqs.map((faq, index) => (
              <details
                key={index}
                className="group border-b border-white/[0.07] px-6 sm:px-8 last:border-b-0"
              >
                <summary className="flex min-h-[68px] cursor-pointer list-none items-center justify-between gap-4 py-5 sm:py-6 text-left text-[16px] font-semibold leading-snug text-foreground/90 hover:text-foreground transition-colors sm:text-[17px] [&::-webkit-details-marker]:hidden">
                  <span>{faq.question}</span>
                  <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <div className="pb-6 sm:pb-8 pr-4 sm:pr-8 text-[15px] sm:text-[16px] leading-relaxed text-muted-foreground">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm text-muted-foreground sm:text-base">
              Questions about custom connections or payments?{" "}
              <Link href="/contact-us" className="font-semibold text-primary underline underline-offset-4 hover:text-primary/80">
                Contact our support team
              </Link>
              . Available 24/7 via WhatsApp and email.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
