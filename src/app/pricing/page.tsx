import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Pricing } from "@/components/sections/Pricing";
import { FaqList } from "@/components/sections/FAQ";
import SemanticContent from "@/components/shared/SemanticContent";
import { getPricingPageData } from "@/lib/data/pricing-page";
import { Schema } from "@/components/shared/Schema";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";
import { 
  Check, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  CirclePlay, 
  MessageCircle, 
  Package, 
  CreditCard, 
  Tv, 
  Film,
  Zap, 
  Sparkles, 
  Calendar, 
  Layers, 
  Smartphone, 
  Lock, 
  RefreshCw, 
  HelpCircle, 
  Info, 
  FileCode 
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function generateMetadata(): Metadata {
    const title = "IPTV Subscription Plans & Pricing — TryIPTV";
    const description = "Compare TryIPTV prepaid plans from $16. Access 25,000+ live channels, 120,000+ movies & TV shows, 4K streams, and 2 simultaneous connections. Zero contracts, no auto-renewal.";
    
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
      semanticContent, 
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
      
      <SemanticContent 
        primaryEntity={semanticContent.primaryEntity}
        relatedEntities={semanticContent.relatedEntities}
        semanticClusters={semanticContent.semanticClusters}
        contextualKeywords={semanticContent.contextualKeywords}
      />
      
      {/* 1. Breadcrumb & 2. H1: IPTV Subscription Plans & Pricing */}
      <Section className="relative overflow-hidden border-b border-white/[0.07] pt-12 pb-14 sm:pt-16 sm:pb-20">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
        <Container className="relative">
          <Breadcrumb items={[{ label: "Pricing" }]} align="center" />
          <SectionHeader
            as="h1"
            eyebrow="Prepaid IPTV Plans & Transparent Pricing"
            title="IPTV Subscription Plans & Pricing"
            subtitle="Compare TryIPTV prepaid subscription plans starting at $16/month (or $7.50/month equivalent on our 12-month plan). Every plan includes 2 simultaneous device connections, 25,000+ live channels, 120,000+ movies and TV shows, and 4K streaming with zero contracts and no auto-renewals."
          />
          <div className="mt-8 flex flex-wrap justify-center items-center gap-3 text-xs font-semibold sm:text-sm">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.09] bg-card px-3.5 py-1.5 text-muted-foreground">
              <Check className="h-4 w-4 text-primary" /> 2 Simultaneous Connections
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.09] bg-card px-3.5 py-1.5 text-muted-foreground">
              <Check className="h-4 w-4 text-primary" /> 25,000+ Live Channels Worldwide
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.09] bg-card px-3.5 py-1.5 text-muted-foreground">
              <Check className="h-4 w-4 text-primary" /> 120,000+ Movies &amp; TV Shows
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.09] bg-card px-3.5 py-1.5 text-muted-foreground">
              <Check className="h-4 w-4 text-primary" /> 24-Hour Free Trial Available
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.09] bg-card px-3.5 py-1.5 text-muted-foreground">
              <Check className="h-4 w-4 text-primary" /> 7-Day Technical Refund Policy
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. Direct answer: How much does TryIPTV cost? */}
      <Section className="border-b border-white/[0.06] bg-[#070a08] py-12 sm:py-16">
        <Container>
          <div className="mx-auto max-w-4xl rounded-2xl border border-primary/25 bg-[#0b120e] p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,240,120,0.05)]">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
              <HelpCircle className="h-4 w-4" /> Direct Answer
            </div>
            <h2 className="mt-3 font-headline text-2xl font-extrabold text-foreground sm:text-3xl">
              How much does TryIPTV cost?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              TryIPTV costs between <strong className="text-foreground font-semibold">$16.00 and $90.00</strong> as a one-time prepaid payment depending on the subscription length you choose:
            </p>
            
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {/* 1 Month */}
              <div className="rounded-xl border border-white/[0.08] bg-card/60 p-4">
                <div className="text-xs font-bold uppercase text-muted-foreground">1 Month</div>
                <div className="mt-1 text-2xl font-extrabold text-foreground">$16.00</div>
                <div className="text-xs text-primary font-medium">$16.00 / month</div>
                <p className="mt-2 text-xs text-muted-foreground">Base monthly prepaid rate. Ideal for short-term evaluation.</p>
              </div>
              {/* 3 Months */}
              <div className="rounded-xl border border-white/[0.08] bg-card/60 p-4">
                <div className="text-xs font-bold uppercase text-muted-foreground">3 Months</div>
                <div className="mt-1 text-2xl font-extrabold text-foreground">$39.00</div>
                <div className="text-xs text-primary font-medium">$13.00 / mo equiv. (Save 19%)</div>
                <p className="mt-2 text-xs text-muted-foreground">Save $9.00 vs paying monthly. Great for a full sports season.</p>
              </div>
              {/* 6 Months */}
              <div className="rounded-xl border border-white/[0.08] bg-card/60 p-4">
                <div className="text-xs font-bold uppercase text-muted-foreground">6 Months</div>
                <div className="mt-1 text-2xl font-extrabold text-foreground">$60.00</div>
                <div className="text-xs text-primary font-medium">$10.00 / mo equiv. (Save 38%)</div>
                <p className="mt-2 text-xs text-muted-foreground">Save $36.00 vs paying monthly. Semi-annual entertainment savings.</p>
              </div>
              {/* 12 Months */}
              <div className="relative rounded-xl border border-primary/40 bg-primary/[0.04] p-4">
                <span className="absolute -top-2.5 right-3 rounded-full bg-primary px-2 py-0.5 text-[10px] font-extrabold uppercase text-primary-foreground">Best Value</span>
                <div className="text-xs font-bold uppercase text-primary">12 Months</div>
                <div className="mt-1 text-2xl font-extrabold text-foreground">$90.00</div>
                <div className="text-xs text-primary font-medium">$7.50 / mo equiv. (Save 53%)</div>
                <p className="mt-2 text-xs text-muted-foreground">Save $102.00 vs paying monthly. Lowest equivalent rate at ~$0.25/day.</p>
              </div>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Every plan includes the exact same features: <strong className="text-foreground">2 simultaneous connections</strong>, 25,000+ live channels, 120,000+ movies and TV shows, Smart EPG, PPV events, and 4K streaming where available. All purchases are strictly one-time prepaid payments with zero contracts, no hidden activation fees, and no recurring auto-renewals. You can also test the full service with a <Link href="/iptv-free-trial" className="font-semibold text-primary underline underline-offset-4 hover:text-primary/80">24-hour free trial</Link> before paying.
            </p>
          </div>
        </Container>
      </Section>

      {/* 4. Pricing Comparison Table */}
      <Section className="border-b border-white/[0.06] py-14 sm:py-18">
        <Container>
          <SectionHeader
            eyebrow="Side-by-Side Comparison"
            title="IPTV Pricing Comparison Table"
            subtitle="Compare upfront costs, effective monthly pricing, total savings, and package inclusions across all available subscription options."
          />
          
          <div className="mt-10 overflow-x-auto rounded-xl border border-white/[0.09] bg-card">
            <table className="w-full min-w-[700px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-white/[0.09] bg-white/[0.02]">
                  <th className="p-4 font-headline text-xs font-extrabold uppercase tracking-wider text-muted-foreground">Plan Duration</th>
                  <th className="p-4 font-headline text-xs font-extrabold uppercase tracking-wider text-muted-foreground">Upfront Price</th>
                  <th className="p-4 font-headline text-xs font-extrabold uppercase tracking-wider text-muted-foreground">Monthly Equivalent</th>
                  <th className="p-4 font-headline text-xs font-extrabold uppercase tracking-wider text-muted-foreground">Savings vs Monthly</th>
                  <th className="p-4 font-headline text-xs font-extrabold uppercase tracking-wider text-muted-foreground">Connections</th>
                  <th className="p-4 font-headline text-xs font-extrabold uppercase tracking-wider text-muted-foreground">Content Catalog</th>
                  <th className="p-4 font-headline text-xs font-extrabold uppercase tracking-wider text-muted-foreground text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06]">
                {/* 1 Month */}
                <tr className="transition-colors hover:bg-white/[0.015]">
                  <td className="p-4 font-bold text-foreground">1 Month</td>
                  <td className="p-4 font-extrabold text-foreground text-base">$16.00</td>
                  <td className="p-4 text-muted-foreground">$16.00 / month</td>
                  <td className="p-4 text-muted-foreground">Base Rate</td>
                  <td className="p-4 text-foreground font-medium">2 Simultaneous</td>
                  <td className="p-4 text-muted-foreground">25,000+ Live / 120,000+ VOD</td>
                  <td className="p-4 text-right">
                    <Button asChild size="sm" variant="outline">
                      <Link href="/checkout?plan=1-month">Select Plan</Link>
                    </Button>
                  </td>
                </tr>
                {/* 3 Months */}
                <tr className="transition-colors hover:bg-white/[0.015]">
                  <td className="p-4 font-bold text-foreground">3 Months</td>
                  <td className="p-4 font-extrabold text-foreground text-base">$39.00</td>
                  <td className="p-4 text-muted-foreground">$13.00 / month</td>
                  <td className="p-4 text-primary font-semibold">Save $9.00 (19%)</td>
                  <td className="p-4 text-foreground font-medium">2 Simultaneous</td>
                  <td className="p-4 text-muted-foreground">25,000+ Live / 120,000+ VOD</td>
                  <td className="p-4 text-right">
                    <Button asChild size="sm" variant="outline">
                      <Link href="/checkout?plan=3-months">Select Plan</Link>
                    </Button>
                  </td>
                </tr>
                {/* 6 Months */}
                <tr className="transition-colors hover:bg-white/[0.015]">
                  <td className="p-4 font-bold text-foreground">6 Months</td>
                  <td className="p-4 font-extrabold text-foreground text-base">$60.00</td>
                  <td className="p-4 text-muted-foreground">$10.00 / month</td>
                  <td className="p-4 text-primary font-semibold">Save $36.00 (38%)</td>
                  <td className="p-4 text-foreground font-medium">2 Simultaneous</td>
                  <td className="p-4 text-muted-foreground">25,000+ Live / 120,000+ VOD</td>
                  <td className="p-4 text-right">
                    <Button asChild size="sm" variant="outline">
                      <Link href="/checkout?plan=6-months">Select Plan</Link>
                    </Button>
                  </td>
                </tr>
                {/* 12 Months */}
                <tr className="bg-primary/[0.03] transition-colors hover:bg-primary/[0.06]">
                  <td className="p-4 font-bold text-foreground">
                    <div className="flex items-center gap-2">
                      12 Months
                      <span className="rounded bg-primary/20 px-2 py-0.5 text-[10px] font-extrabold text-primary">Best Value</span>
                    </div>
                  </td>
                  <td className="p-4 font-extrabold text-primary text-base">$90.00</td>
                  <td className="p-4 text-primary font-semibold">$7.50 / month</td>
                  <td className="p-4 text-primary font-bold">Save $102.00 (53%)</td>
                  <td className="p-4 text-foreground font-medium">2 Simultaneous</td>
                  <td className="p-4 text-muted-foreground">25,000+ Live / 120,000+ VOD</td>
                  <td className="p-4 text-right">
                    <Button asChild size="sm">
                      <Link href="/checkout?plan=12-months">Select Plan</Link>
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
            <span>* All plans include 4K/FHD streaming, Smart EPG, Catch-Up TV, Premium PPV events, and 24/7 customer support.</span>
            <span>Prepaid flat billing • No recurring charges • Zero contracts</span>
          </div>
        </Container>
      </Section>

      {/* 5. Pricing Cards */}
      <Pricing />

      {/* 6. How monthly-equivalent pricing works */}
      <Section className="border-t border-white/[0.06] bg-[#070a08] py-14 sm:py-18">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <p className="eyebrow mb-2">Cost Breakdown Explained</p>
              <h2 className="font-headline text-3xl font-extrabold sm:text-4xl">
                How Monthly-Equivalent Pricing Works
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                TryIPTV operates strictly as a <strong className="text-foreground">prepaid service</strong>. When you purchase a multi-month plan, you pay once upfront for the entire duration—you are not billed every month.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                We display a <strong className="text-foreground">monthly-equivalent rate</strong> so you can easily compare the real cost of different subscription durations against the standard 1-month plan:
              </p>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span><strong className="text-foreground">Simple Calculation:</strong> Total Upfront Cost ÷ Number of Months = Effective Monthly Rate.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span><strong className="text-foreground">Real-World Example:</strong> The 12-month plan costs $90.00 upfront. Dividing $90.00 by 12 equals <strong className="text-foreground">$7.50 per month</strong>, compared to $16.00 per month on the single-month plan.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span><strong className="text-foreground">Zero Re-billing Risk:</strong> Your payment method is never charged recurring monthly fees. Once your prepaid time ends, service stops unless you actively choose to renew.</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-xl border border-white/[0.08] bg-card p-6 sm:p-8">
                <h3 className="font-headline text-xl font-bold text-foreground">Monthly Equivalent at a Glance</h3>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                    <div>
                      <div className="font-bold text-foreground">1 Month Plan</div>
                      <div className="text-xs text-muted-foreground">$16.00 paid upfront</div>
                    </div>
                    <div className="text-right">
                      <div className="font-extrabold text-foreground text-lg">$16.00 / mo</div>
                      <div className="text-xs text-muted-foreground">Standard base rate</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                    <div>
                      <div className="font-bold text-foreground">3 Months Plan</div>
                      <div className="text-xs text-muted-foreground">$39.00 paid upfront</div>
                    </div>
                    <div className="text-right">
                      <div className="font-extrabold text-primary text-lg">$13.00 / mo</div>
                      <div className="text-xs text-muted-foreground">Save $3.00 / month</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                    <div>
                      <div className="font-bold text-foreground">6 Months Plan</div>
                      <div className="text-xs text-muted-foreground">$60.00 paid upfront</div>
                    </div>
                    <div className="text-right">
                      <div className="font-extrabold text-primary text-lg">$10.00 / mo</div>
                      <div className="text-xs text-muted-foreground">Save $6.00 / month</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-1">
                    <div>
                      <div className="font-bold text-primary flex items-center gap-2">
                        12 Months Plan <span className="rounded bg-primary/20 px-1.5 py-0.5 text-[10px] text-primary">Top Pick</span>
                      </div>
                      <div className="text-xs text-muted-foreground">$90.00 paid upfront</div>
                    </div>
                    <div className="text-right">
                      <div className="font-extrabold text-primary text-2xl">$7.50 / mo</div>
                      <div className="text-xs text-primary font-semibold">Save $8.50 / month</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 7. How much you save with longer plans */}
      <Section className="border-t border-white/[0.06] py-14 sm:py-18">
        <Container>
          <SectionHeader
            eyebrow="Maximum Value"
            title="How Much You Save with Longer Plans"
            subtitle="Comparing the upfront cost of multi-month subscriptions against renewing month-to-month at the $16 base rate."
          />

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* 1 Month */}
            <Card className="border-white/[0.08] bg-card">
              <CardHeader className="pb-3">
                <Badge variant="outline" className="w-fit text-xs">Base Plan</Badge>
                <CardTitle className="pt-2 font-headline text-xl">1 Month</CardTitle>
                <div className="pt-1 text-3xl font-extrabold text-foreground">$16.00</div>
                <CardDescription>Upfront one-time cost</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between border-t border-white/[0.06] pt-3">
                  <span>Base monthly rate:</span>
                  <strong className="text-foreground">$16.00/mo</strong>
                </div>
                <div className="flex justify-between">
                  <span>Month-to-month cost:</span>
                  <span>$16.00</span>
                </div>
                <div className="flex justify-between font-semibold text-foreground">
                  <span>Total Savings:</span>
                  <span>$0.00</span>
                </div>
                <p className="pt-2 text-xs text-muted-foreground">Best for testing the service beyond the 24h trial before buying a longer package.</p>
              </CardContent>
            </Card>

            {/* 3 Months */}
            <Card className="border-white/[0.08] bg-card">
              <CardHeader className="pb-3">
                <Badge className="w-fit bg-primary/10 text-primary border-primary/20 text-xs">Save 19%</Badge>
                <CardTitle className="pt-2 font-headline text-xl">3 Months</CardTitle>
                <div className="pt-1 text-3xl font-extrabold text-foreground">$39.00</div>
                <CardDescription>Upfront one-time cost</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between border-t border-white/[0.06] pt-3">
                  <span>Effective monthly rate:</span>
                  <strong className="text-primary">$13.00/mo</strong>
                </div>
                <div className="flex justify-between">
                  <span>If paid month-to-month:</span>
                  <span className="line-through">$48.00</span>
                </div>
                <div className="flex justify-between font-bold text-primary">
                  <span>You Save:</span>
                  <span>$9.00 (19%)</span>
                </div>
                <p className="pt-2 text-xs text-muted-foreground">Ideal for sports seasons, tournaments, or short-term living arrangements.</p>
              </CardContent>
            </Card>

            {/* 6 Months */}
            <Card className="border-white/[0.08] bg-card">
              <CardHeader className="pb-3">
                <Badge className="w-fit bg-primary/10 text-primary border-primary/20 text-xs">Save 38%</Badge>
                <CardTitle className="pt-2 font-headline text-xl">6 Months</CardTitle>
                <div className="pt-1 text-3xl font-extrabold text-foreground">$60.00</div>
                <CardDescription>Upfront one-time cost</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between border-t border-white/[0.06] pt-3">
                  <span>Effective monthly rate:</span>
                  <strong className="text-primary">$10.00/mo</strong>
                </div>
                <div className="flex justify-between">
                  <span>If paid month-to-month:</span>
                  <span className="line-through">$96.00</span>
                </div>
                <div className="flex justify-between font-bold text-primary">
                  <span>You Save:</span>
                  <span>$36.00 (38%)</span>
                </div>
                <p className="pt-2 text-xs text-muted-foreground">Half-year entertainment with the monthly equivalent dropping to just $10.00.</p>
              </CardContent>
            </Card>

            {/* 12 Months */}
            <Card className="border-primary/40 bg-[#0d1711] shadow-[0_20px_60px_rgba(0,240,120,0.06)]">
              <CardHeader className="pb-3">
                <Badge className="w-fit bg-primary text-primary-foreground font-bold text-xs">Save 53% • Top Value</Badge>
                <CardTitle className="pt-2 font-headline text-xl">12 Months</CardTitle>
                <div className="pt-1 text-3xl font-extrabold text-primary">$90.00</div>
                <CardDescription>Upfront one-time cost</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between border-t border-white/[0.06] pt-3">
                  <span>Effective monthly rate:</span>
                  <strong className="text-primary font-bold">$7.50/mo</strong>
                </div>
                <div className="flex justify-between">
                  <span>If paid month-to-month:</span>
                  <span className="line-through">$192.00</span>
                </div>
                <div className="flex justify-between font-extrabold text-primary text-base">
                  <span>You Save:</span>
                  <span>$102.00 (53%)</span>
                </div>
                <p className="pt-2 text-xs text-muted-foreground">Maximum savings of $102/year. Equivalent to approximately $0.25 per day for 2 screens.</p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 8. What's included in every plan */}
      <Section className="border-t border-white/[0.06] bg-[#070a08] py-14 sm:py-18">
        <Container>
          <SectionHeader
            eyebrow="No Feature Tiering"
            title="What's Included in Every Plan"
            subtitle="We never hold back features, channels, or stream quality behind expensive tiers. Every subscriber gets our full premium service regardless of duration."
          />

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Feature 1 */}
            <div className="rounded-xl border border-white/[0.08] bg-card p-6">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
                <Tv className="h-5 w-5" />
              </div>
              <h3 className="font-headline text-lg font-bold text-foreground">25,000+ Live Channels</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Full global coverage across USA, UK, Canada, Europe, Latin America, Arabic, and international regions covering live sports, news, and entertainment.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="rounded-xl border border-white/[0.08] bg-card p-6">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
                <Film className="h-5 w-5" />
              </div>
              <h3 className="font-headline text-lg font-bold text-foreground">120,000+ Movies &amp; Shows</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Massive on-demand VOD library including new Hollywood releases, cinema classics, documentaries, and full television series updated continuously.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="rounded-xl border border-white/[0.08] bg-card p-6">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="font-headline text-lg font-bold text-foreground">4K &amp; Full HD Streams</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Crystal-clear 4K Ultra HD and 1080p Full HD playback where supported by original broadcast feeds, paired with smooth adaptive bitrate streaming.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="rounded-xl border border-white/[0.08] bg-card p-6">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="font-headline text-lg font-bold text-foreground">Premium PPV Events</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Live pay-per-view fights, UFC matches, championship boxing, WWE, international football tournaments, and major sports championships included at zero extra fee.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="rounded-xl border border-white/[0.08] bg-card p-6">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
                <Calendar className="h-5 w-5" />
              </div>
              <h3 className="font-headline text-lg font-bold text-foreground">Smart EPG &amp; Catch-Up TV</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Accurate Electronic Program Guide (EPG) schedules with real-time metadata and catch-up TV functionality on popular live broadcast channels.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="rounded-xl border border-white/[0.08] bg-card p-6">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
                <Layers className="h-5 w-5" />
              </div>
              <h3 className="font-headline text-lg font-bold text-foreground">2 Simultaneous Connections</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Stream simultaneously on up to two separate screens in your household at the exact same moment without purchasing an additional subscription.
              </p>
            </div>

            {/* Feature 7 */}
            <div className="rounded-xl border border-white/[0.08] bg-card p-6">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
                <Smartphone className="h-5 w-5" />
              </div>
              <h3 className="font-headline text-lg font-bold text-foreground">Multi-Device Compatibility</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Seamless support for Fire TV, Android TV, Apple TV, Smart TVs (Samsung &amp; LG), Windows, Mac, iOS, and MAG boxes using standard IPTV players.
              </p>
            </div>

            {/* Feature 8 */}
            <div className="rounded-xl border border-white/[0.08] bg-card p-6">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="font-headline text-lg font-bold text-foreground">24/7 Support &amp; 7-Day Refund</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Round-the-clock technical assistance via WhatsApp and email, backed by our 7-day refund policy for technical setup problems support cannot resolve.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* 9. What do 2 connections mean? */}
      <Section className="border-t border-white/[0.06] py-14 sm:py-18">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <p className="eyebrow mb-2">Simultaneous Streaming</p>
              <h2 className="font-headline text-3xl font-extrabold sm:text-4xl">
                What Do 2 Connections Mean?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                In IPTV terminology, a <strong className="text-foreground">connection</strong> represents an active video stream playing at any single point in time. Having <strong className="text-foreground">2 simultaneous connections</strong> means two different screens can stream live TV or on-demand content concurrently under the same account.
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-foreground">Unlimited Device Installations</h3>
                    <p className="text-sm text-muted-foreground">You can install and configure your M3U playlist or Xtream Codes credentials on 5, 10, or more devices (living room TV, bedroom TV, tablet, phone, laptop). You do not pay extra per device installed.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-foreground">Two Concurrent Streams</h3>
                    <p className="text-sm text-muted-foreground">One person can watch live Premier League soccer in the living room while someone else watches a movie or documentary in the bedroom on an Apple TV or tablet.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-foreground">Flexible Household Streaming</h3>
                    <p className="text-sm text-muted-foreground">Both streams can be used on your home Wi-Fi network or while traveling on mobile data, as long as no more than two devices are actively playing at the exact same moment.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-white/[0.08] bg-[#0c130f] p-6 sm:p-8">
                <h3 className="font-headline text-xl font-bold text-foreground mb-4">Connection Scenarios</h3>
                <div className="space-y-4">
                  <div className="rounded-lg border border-primary/20 bg-primary/[0.04] p-4">
                    <div className="flex items-center gap-2 font-bold text-primary text-sm">
                      <Check className="h-4 w-4" /> Active Scenario: Permitted (2 of 2 Streams Active)
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      Screen 1 (Fire TV in Living Room playing Live NFL) + Screen 2 (iPad in Bedroom playing Movie) = <strong className="text-foreground">Both stream smoothly in HD/4K without conflict.</strong>
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/[0.08] bg-card/60 p-4">
                    <div className="flex items-center gap-2 font-bold text-foreground text-sm">
                      <Info className="h-4 w-4 text-muted-foreground" /> What happens if a 3rd device connects?
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      If a 3rd screen attempts to stream while 2 are already playing, the IPTV server will pause playback on one stream or display a connection limit alert. Simply pause or close one active stream to start playing on the third device.
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/[0.08] bg-card/60 p-4">
                    <div className="flex items-center gap-2 font-bold text-foreground text-sm">
                      <ShieldCheck className="h-4 w-4 text-primary" /> Included Standard on All Plans
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      While many competitors charge extra for a second connection or restrict single plans to 1 screen, TryIPTV includes 2 connections standard on every 1, 3, 6, and 12-month package.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 10. Which subscription length should you choose? */}
      <Section className="border-t border-white/[0.06] bg-[#070a08] py-14 sm:py-18">
        <Container>
          <SectionHeader
            eyebrow="Decision Guide"
            title="Which Subscription Length Should You Choose?"
            subtitle="Match your household entertainment routine, budget, and viewing timeframe to the ideal prepaid plan."
          />

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* 1 Month Plan */}
            <div className="rounded-xl border border-white/[0.08] bg-card p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase text-muted-foreground">1 Month</span>
                  <span className="text-xl font-extrabold text-foreground">$16.00</span>
                </div>
                <h3 className="mt-3 font-headline text-lg font-bold">Best for First-Time Testing</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  If you recently tested our 24-hour trial and want to experience TryIPTV across 30 days of real-world weekend sports, PPV events, and family viewing before making a multi-month commitment.
                </p>
              </div>
              <div className="mt-6 border-t border-white/[0.08] pt-4">
                <Button asChild variant="outline" className="w-full">
                  <Link href="/checkout?plan=1-month">Choose 1 Month</Link>
                </Button>
              </div>
            </div>

            {/* 3 Months Plan */}
            <div className="rounded-xl border border-white/[0.08] bg-card p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase text-muted-foreground">3 Months</span>
                  <span className="text-xl font-extrabold text-foreground">$39.00</span>
                </div>
                <h3 className="mt-3 font-headline text-lg font-bold">Best for Sports Seasons</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Ideal for sports enthusiasts following an entire regular season, playoff tournament, or quarterly cord-cutting window. Saves 19% ($9.00) while dropping your cost to $13.00/month.
                </p>
              </div>
              <div className="mt-6 border-t border-white/[0.08] pt-4">
                <Button asChild variant="outline" className="w-full">
                  <Link href="/checkout?plan=3-months">Choose 3 Months</Link>
                </Button>
              </div>
            </div>

            {/* 6 Months Plan */}
            <div className="rounded-xl border border-white/[0.08] bg-card p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase text-muted-foreground">6 Months</span>
                  <span className="text-xl font-extrabold text-foreground">$60.00</span>
                </div>
                <h3 className="mt-3 font-headline text-lg font-bold">Best Balanced Value</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  A popular choice for households that want half a year of uninterrupted television for just $10.00 per month equivalent. Saves $36.00 compared to monthly renewals.
                </p>
              </div>
              <div className="mt-6 border-t border-white/[0.08] pt-4">
                <Button asChild variant="outline" className="w-full">
                  <Link href="/checkout?plan=6-months">Choose 6 Months</Link>
                </Button>
              </div>
            </div>

            {/* 12 Months Plan */}
            <div className="relative rounded-xl border border-primary/40 bg-[#0d1711] p-6 flex flex-col justify-between shadow-[0_20px_60px_rgba(0,240,120,0.06)]">
              <span className="absolute -top-3 right-4 rounded-full bg-primary px-2.5 py-0.5 text-xs font-extrabold uppercase text-primary-foreground">Most Popular</span>
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase text-primary">12 Months</span>
                  <span className="text-xl font-extrabold text-primary">$90.00</span>
                </div>
                <h3 className="mt-3 font-headline text-lg font-bold">Best Everyday Savings</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Our most popular plan by far. Delivers 365 days of full cable replacement at only $7.50/month equivalent—saving you $102.00 per year with zero monthly billing worries.
                </p>
              </div>
              <div className="mt-6 border-t border-white/[0.08] pt-4">
                <Button asChild className="w-full">
                  <Link href="/checkout?plan=12-months">Choose 12 Months</Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 11. Try free for 24 hours before paying */}
      <Section className="border-t border-white/[0.06] py-14 sm:py-18">
        <Container>
          <div className="relative overflow-hidden rounded-2xl border border-primary/25 bg-[#0b100d] p-7 sm:p-10 lg:p-12">
            <div className="absolute inset-y-0 left-0 w-1.5 bg-primary" />
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  <Sparkles className="h-3.5 w-3.5" /> 100% Risk-Free Evaluation
                </div>
                <h2 className="font-headline text-2xl font-extrabold text-foreground sm:text-3xl lg:text-4xl">
                  Try Free for 24 Hours Before Paying
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  We believe you should experience our channel reliability, server speed, and picture clarity on your own television before spending any money. That is why we offer a completely free 24-hour trial with zero obligations.
                </p>
                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3 text-sm">
                  <div className="flex items-center gap-2 font-medium text-foreground">
                    <Check className="h-4 w-4 text-primary shrink-0" /> No credit card required
                  </div>
                  <div className="flex items-center gap-2 font-medium text-foreground">
                    <Check className="h-4 w-4 text-primary shrink-0" /> Full catalog unlocked
                  </div>
                  <div className="flex items-center gap-2 font-medium text-foreground">
                    <Check className="h-4 w-4 text-primary shrink-0" /> 2 simultaneous streams
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center gap-3 sm:flex-row lg:col-span-4 lg:flex-col">
                <Button asChild size="lg" className="w-full">
                  <Link href="/iptv-free-trial">
                    <CirclePlay className="mr-2 h-4 w-4" /> Start 24-Hour Free Trial
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full">
                  <Link href="/contact">
                    <MessageCircle className="mr-2 h-4 w-4" /> Ask Support Questions
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 12. How billing works */}
      <Section className="border-t border-white/[0.06] bg-[#070a08] py-14 sm:py-18">
        <Container>
          <SectionHeader
            eyebrow="Transparent & Predictable"
            title="How Billing Works"
            subtitle="Straightforward terms with zero recurring contracts, no surprise surcharges, and total control over your payments."
          />

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* 1. Prepaid */}
            <div className="rounded-xl border border-white/[0.08] bg-card p-6">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
                <Package className="h-5 w-5" />
              </div>
              <h3 className="font-headline text-lg font-bold text-foreground">Prepaid Billing</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                You pay upfront for the exact subscription duration you choose (1, 3, 6, or 12 months). There are no setup fees, equipment rental charges, or unexpected billing surprises.
              </p>
            </div>

            {/* 2. One-Time Payment */}
            <div className="rounded-xl border border-white/[0.08] bg-card p-6">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
                <Lock className="h-5 w-5" />
              </div>
              <h3 className="font-headline text-lg font-bold text-foreground">One-Time Payment</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Every purchase is treated as a separate, standalone transaction. You never sign an ongoing agreement or lock yourself into an indefinite recurring financial commitment.
              </p>
            </div>

            {/* 3. No Auto Renewal */}
            <div className="rounded-xl border border-white/[0.08] bg-card p-6">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
                <RefreshCw className="h-5 w-5" />
              </div>
              <h3 className="font-headline text-lg font-bold text-foreground">No Auto-Renewal</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                We never store your payment card to rebill you automatically. When your term is nearing its end date, you decide if and when you want to purchase a renewal.
              </p>
            </div>

            {/* 4. Payment Methods */}
            <div className="rounded-xl border border-white/[0.08] bg-card p-6">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
                <CreditCard className="h-5 w-5" />
              </div>
              <h3 className="font-headline text-lg font-bold text-foreground">Payment Methods &amp; Delivery</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                We accept major credit and debit cards (Visa, Mastercard, Amex) and popular cryptocurrencies. Your M3U playlist and Xtream Codes credentials are sent to your email immediately upon payment confirmation.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* 13. Devices & setup */}
      <Section className="border-t border-white/[0.06] py-14 sm:py-18">
        <Container>
          <SectionHeader
            eyebrow="Universal Compatibility"
            title="Devices & Setup"
            subtitle="TryIPTV works seamlessly across all major streaming devices, operating systems, and IPTV player applications."
          />

          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <div className="rounded-xl border border-white/[0.08] bg-card p-6 sm:p-8">
                <h3 className="font-headline text-xl font-bold text-foreground">Two Standard Setup Methods</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  After checkout or trial activation, we email you two industry-standard connection formats compatible with every popular player application:
                </p>
                <div className="mt-6 space-y-4">
                  <div className="rounded-lg border border-white/[0.06] bg-background/50 p-4">
                    <div className="flex items-center gap-2 font-bold text-primary text-sm">
                      <FileCode className="h-4 w-4" /> Xtream Codes API (Recommended)
                    </div>
                    <p className="mt-1.5 text-xs text-muted-foreground">
                      Enter your Server URL, Username, and Password into apps like TiviMate, IPTV Smarters Pro, or XCIPTV for fast channel syncing and automatic EPG loading.
                    </p>
                  </div>
                  <div className="rounded-lg border border-white/[0.06] bg-background/50 p-4">
                    <div className="flex items-center gap-2 font-bold text-primary text-sm">
                      <FileCode className="h-4 w-4" /> M3U Playlist URL
                    </div>
                    <p className="mt-1.5 text-xs text-muted-foreground">
                      Copy and paste your personal M3U plus URL into VLC Player, GSE Smart IPTV, Perfect Player, or native Smart TV apps.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <h3 className="font-headline text-lg font-bold text-foreground mb-4">Supported Devices &amp; Setup Guides</h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {[
                  { name: "Fire TV / Stick", href: "/devices/fire-tv", note: "TiviMate & Smarters" },
                  { name: "Android TV", href: "/devices/android", note: "Shield, Chromecast, Sony" },
                  { name: "Apple TV", href: "/devices/apple-tv", note: "tvOS, GSE, IPTVX" },
                  { name: "iOS (iPhone/iPad)", href: "/devices/ios", note: "Smarters & GSE" },
                  { name: "Samsung Smart TV", href: "/devices/samsung-tv", note: "Tizen IPTV Apps" },
                  { name: "LG Smart TV", href: "/devices/lg-tv", note: "webOS Media Players" },
                  { name: "Windows PC", href: "/devices/windows", note: "VLC & Smarters Pro" },
                  { name: "macOS", href: "/devices/macos", note: "VLC & Iptv Pro" },
                  { name: "MAG Boxes", href: "/devices/mag", note: "Stalker Portal MAC" },
                  { name: "Roku Devices", href: "/devices/roku", note: "Screen Casting / M3U" },
                ].map((device) => (
                  <Link
                    key={device.name}
                    href={device.href}
                    className="group rounded-lg border border-white/[0.08] bg-card p-3.5 transition-all duration-150 hover:border-primary/40 hover:bg-card/80"
                  >
                    <div className="font-bold text-sm text-foreground group-hover:text-primary transition-colors flex items-center justify-between">
                      <span>{device.name}</span>
                      <ArrowRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">{device.note}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 14. FAQ */}
      <Section id="faq" className="border-t border-white/[0.06] bg-[#070a08] py-14 sm:py-18">
        <Container>
          <SectionHeader
            eyebrow="Questions Answered"
            title="Frequently Asked Questions"
            subtitle="Find clear, verified answers regarding TryIPTV pricing plans, billing policies, connections, and service setup."
          />
          <FaqList items={pricingPageFaqs} />

          <div className="mt-10 text-center">
            <p className="text-sm text-muted-foreground sm:text-base">
              Have more questions before ordering?{" "}
              <Link href="/contact" className="font-semibold text-primary underline underline-offset-4 hover:text-primary/80">
                Contact our support team
              </Link>
              . Available 24/7 via WhatsApp and email.
            </p>
          </div>
        </Container>
      </Section>

      {/* 15. Final CTA : /pricing */}
      <Section className="border-t border-white/[0.06] py-16 sm:py-20 bg-gradient-to-b from-[#070a08] to-[#040605]">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 text-xs">Ready to Start?</Badge>
            <h2 className="font-headline text-3xl font-extrabold text-foreground sm:text-4xl lg:text-5xl">
              Start Streaming with TryIPTV Today
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Choose a prepaid plan starting at $16 for 1 month or save up to 53% with our $90 annual subscription. Every plan includes 2 simultaneous connections, 25,000+ live channels, and 120,000+ movies &amp; TV shows.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-12 px-8 text-base">
                <Link href="#pricing-plans">
                  Choose Your Plan <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 px-8 text-base">
                <Link href="/iptv-free-trial">
                  <CirclePlay className="mr-2 h-4 w-4" /> Start 24-Hour Free Trial
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 px-8 text-base">
                <Link href="/contact">
                  <SiWhatsapp className="mr-2 h-4 w-4 text-[#25D366]" /> Chat on WhatsApp
                </Link>
              </Button>
            </div>
            <p className="mt-6 text-xs text-muted-foreground">
              Prepaid flat rates • Zero contracts • No automatic rebilling • 7-day technical refund guarantee
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
