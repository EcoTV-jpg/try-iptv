import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Pricing } from "@/components/sections/Pricing";
import { FaqList } from "@/components/sections/FAQ";
import { getPricingPageData } from "@/lib/data/pricing-page";
import { Schema } from "@/components/shared/Schema";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";
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
        </Container>
      </Section>

      {/* 2. Interactive Pricing Plans Cards */}
      <Pricing showHeader={false} />

      {/* 3. Plan Comparison Matrix (Monthly vs Yearly Cost Breakdown) */}
      <Section className="border-t border-white/[0.06] bg-[#070a08]">
        <Container>
          <SectionHeader
            eyebrow="Cost Comparison"
            title="Compare IPTV Plans: Monthly vs Yearly Cost Breakdown"
            subtitle="A transparent side-by-side comparison of subscription prices, equivalent monthly rates, total savings, and stream features across all four prepaid durations."
          />
          <div className="overflow-x-auto rounded-xl border border-white/[0.09] bg-card shadow-[0_18px_60px_rgba(0,0,0,0.2)]">
            <table className="w-full text-left text-sm whitespace-nowrap lg:whitespace-normal">
              <thead>
                <tr className="border-b border-white/[0.09] bg-white/[0.03] text-xs font-extrabold uppercase text-muted-foreground">
                  <th className="py-4 px-5 sm:px-6">Plan Option</th>
                  <th className="py-4 px-5 sm:px-6">1 Month</th>
                  <th className="py-4 px-5 sm:px-6">3 Months</th>
                  <th className="py-4 px-5 sm:px-6">6 Months</th>
                  <th className="py-4 px-5 sm:px-6 text-primary">12 Months (Best Value)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06] text-muted-foreground">
                <tr>
                  <td className="py-3.5 px-5 sm:px-6 font-semibold text-foreground">Total Prepaid Cost</td>
                  <td className="py-3.5 px-5 sm:px-6 font-bold text-foreground">$16.00</td>
                  <td className="py-3.5 px-5 sm:px-6 font-bold text-foreground">$39.00</td>
                  <td className="py-3.5 px-5 sm:px-6 font-bold text-foreground">$60.00</td>
                  <td className="py-3.5 px-5 sm:px-6 font-bold text-primary">$90.00</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-5 sm:px-6 font-semibold text-foreground">Monthly Equivalent</td>
                  <td className="py-3.5 px-5 sm:px-6">$16.00 / mo</td>
                  <td className="py-3.5 px-5 sm:px-6 text-foreground font-medium">$13.00 / mo</td>
                  <td className="py-3.5 px-5 sm:px-6 text-foreground font-medium">$10.00 / mo</td>
                  <td className="py-3.5 px-5 sm:px-6 text-primary font-bold">$7.50 / mo</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-5 sm:px-6 font-semibold text-foreground">Prepaid Savings</td>
                  <td className="py-3.5 px-5 sm:px-6">Standard Rate</td>
                  <td className="py-3.5 px-5 sm:px-6 text-primary font-semibold">Save 19%</td>
                  <td className="py-3.5 px-5 sm:px-6 text-primary font-semibold">Save 38%</td>
                  <td className="py-3.5 px-5 sm:px-6 text-primary font-bold">Save 53% ($102 saved/yr)</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-5 sm:px-6 font-semibold text-foreground">Simultaneous Streams</td>
                  <td className="py-3.5 px-5 sm:px-6">2 Connections</td>
                  <td className="py-3.5 px-5 sm:px-6">2 Connections</td>
                  <td className="py-3.5 px-5 sm:px-6">2 Connections</td>
                  <td className="py-3.5 px-5 sm:px-6 text-foreground font-medium">2 Connections</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-5 sm:px-6 font-semibold text-foreground">Live Channels</td>
                  <td className="py-3.5 px-5 sm:px-6">24,000+ Channels</td>
                  <td className="py-3.5 px-5 sm:px-6">24,000+ Channels</td>
                  <td className="py-3.5 px-5 sm:px-6">24,000+ Channels</td>
                  <td className="py-3.5 px-5 sm:px-6 text-foreground font-medium">24,000+ Channels</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-5 sm:px-6 font-semibold text-foreground">On-Demand Library</td>
                  <td className="py-3.5 px-5 sm:px-6">80,000+ VOD Titles</td>
                  <td className="py-3.5 px-5 sm:px-6">80,000+ VOD Titles</td>
                  <td className="py-3.5 px-5 sm:px-6">80,000+ VOD Titles</td>
                  <td className="py-3.5 px-5 sm:px-6 text-foreground font-medium">80,000+ VOD Titles</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-5 sm:px-6 font-semibold text-foreground">Resolution &amp; Formats</td>
                  <td className="py-3.5 px-5 sm:px-6">HD &amp; 4K Ultra HD</td>
                  <td className="py-3.5 px-5 sm:px-6">HD &amp; 4K Ultra HD</td>
                  <td className="py-3.5 px-5 sm:px-6">HD &amp; 4K Ultra HD</td>
                  <td className="py-3.5 px-5 sm:px-6">HD &amp; 4K Ultra HD</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-5 sm:px-6 font-semibold text-foreground">EPG TV Guide</td>
                  <td className="py-3.5 px-5 sm:px-6">Included</td>
                  <td className="py-3.5 px-5 sm:px-6">Included</td>
                  <td className="py-3.5 px-5 sm:px-6">Included</td>
                  <td className="py-3.5 px-5 sm:px-6">Included</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-5 sm:px-6 font-semibold text-foreground">Automatic Renewal</td>
                  <td className="py-3.5 px-5 sm:px-6">Never (Prepaid)</td>
                  <td className="py-3.5 px-5 sm:px-6">Never (Prepaid)</td>
                  <td className="py-3.5 px-5 sm:px-6">Never (Prepaid)</td>
                  <td className="py-3.5 px-5 sm:px-6">Never (Prepaid)</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-5 sm:px-6 font-semibold text-foreground">Best Suited For</td>
                  <td className="py-3.5 px-5 sm:px-6 text-xs">Testing &amp; Short-Term</td>
                  <td className="py-3.5 px-5 sm:px-6 text-xs">Sports Tournaments</td>
                  <td className="py-3.5 px-5 sm:px-6 text-xs">Multi-Month Value</td>
                  <td className="py-3.5 px-5 sm:px-6 text-xs text-primary font-semibold">Maximum Annual Savings</td>
                </tr>
                <tr>
                  <td className="py-4 px-5 sm:px-6 font-semibold text-foreground">Direct Order</td>
                  {plans.map((p) => (
                    <td key={p.name} className="py-4 px-5 sm:px-6">
                      <Button asChild size="sm" variant={p.isPopular ? "default" : "outline"} className="w-full">
                        <Link href={p.checkoutUrl}>Get {p.name}</Link>
                      </Button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
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
                Our most popular subscription. At $90 for an entire year ($7.50/month equivalent), you save 53% compared to monthly renewals—giving your household 365 days of 4K live TV and sports at the lowest cost.
              </p>
              <ul className="space-y-2 text-xs text-muted-foreground border-t border-white/[0.08] pt-4">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary shrink-0" /> Maximum annual savings ($102 saved compared to monthly)
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary shrink-0" /> Uninterrupted streaming with zero monthly rebilling
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary shrink-0" /> Dedicated priority 24/7 technical customer support
                </li>
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 5. Prepaid Subscription Rules & Billing Transparency */}
      <Section className="border-t border-white/[0.06] bg-[#070a08]">
        <Container>
          <SectionHeader
            eyebrow="Commercial Rules"
            title="Transparent Prepaid Billing — No Hidden Costs"
            subtitle="We operate with straightforward prepaid pricing so you always maintain complete control over your subscription."
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-white/[0.08] bg-card p-6 shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
              <div className="mb-4 grid h-11 w-11 place-items-center rounded-lg border border-primary/20 bg-primary/[0.06] text-primary">
                <CreditCard className="h-5 w-5" />
              </div>
              <h3 className="font-headline text-base font-extrabold text-foreground mb-2">100% Prepaid Plans</h3>
              <p className="text-xs leading-5 text-muted-foreground">
                All subscriptions are paid upfront for the exact term chosen (1, 3, 6, or 12 months). No credit card is stored for recurring debits.
              </p>
            </div>

            <div className="rounded-xl border border-white/[0.08] bg-card p-6 shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
              <div className="mb-4 grid h-11 w-11 place-items-center rounded-lg border border-primary/20 bg-primary/[0.06] text-primary">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="font-headline text-base font-extrabold text-foreground mb-2">Zero Auto-Renewals</h3>
              <p className="text-xs leading-5 text-muted-foreground">
                When your subscription period concludes, access simply expires. You choose whether and when to renew, with zero surprise invoices.
              </p>
            </div>

            <div className="rounded-xl border border-white/[0.08] bg-card p-6 shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
              <div className="mb-4 grid h-11 w-11 place-items-center rounded-lg border border-primary/20 bg-primary/[0.06] text-primary">
                <Tv className="h-5 w-5" />
              </div>
              <h3 className="font-headline text-base font-extrabold text-foreground mb-2">2 Streams Standard</h3>
              <p className="text-xs leading-5 text-muted-foreground">
                Every plan includes 2 simultaneous connections standard. Stream on your living room TV and a tablet or bedroom TV simultaneously.
              </p>
            </div>

            <div className="rounded-xl border border-white/[0.08] bg-card p-6 shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
              <div className="mb-4 grid h-11 w-11 place-items-center rounded-lg border border-primary/20 bg-primary/[0.06] text-primary">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="font-headline text-base font-extrabold text-foreground mb-2">5–15 Min Delivery</h3>
              <p className="text-xs leading-5 text-muted-foreground">
                Xtream Codes credentials and M3U playlist URLs are delivered to your email within 5–15 minutes after payment confirmation.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* 6. Risk-Free Trial Callout */}
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
                Experience all 24,000+ live channels, 80,000+ movies and series, 4K picture quality, and 2 connections on your own TV with our 24-hour free trial. No credit card required.
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

      {/* 7. Frequently Asked Questions (Targeted to Pricing Intent) */}
      <Section id="faq" className="border-t border-white/[0.06] bg-[#070a08]">
        <Container>
          <SectionHeader
            eyebrow="Pricing &amp; Cost Questions"
            title="Frequently Asked Questions About IPTV Pricing"
            subtitle="Straightforward answers about plan durations, payment methods, renewal policies, and multi-device connections."
          />
          <FaqList items={pricingPageFaqs} />

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
