import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, ChevronDown, CirclePlay, MessageCircle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Schema } from "@/components/shared/Schema";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";
import { getPricingPageData } from "@/lib/data/pricing-page";
import { plans } from "@/lib/site-data/pricing";

export function generateMetadata(): Metadata {
  const title = "TryIPTV Pricing & IPTV Subscription Plans From $16";
  const description =
    "Compare TryIPTV prepaid subscription plans from $16 to $90. Choose 1, 3, 6, or 12 months with 2 simultaneous connections, no automatic renewal, and a 24-hour free trial.";

  return {
    ...generatePageMetadata({ title, description, canonical: "/pricing" }),
    title: { absolute: title },
  };
}

const includedFeatures = [
  "2 simultaneous connections",
  "25,000+ live channels",
  "120,000+ movies & TV shows",
  "Smart EPG",
  "M3U playlist",
  "Xtream Codes",
  "HD / Full HD / 4K where available",
  "Prepaid billing with no automatic renewal",
];

const planChoices = [
  ["1 Month — Best for Testing", "Try a paid plan without making a longer commitment."],
  ["3 Months — Short-Term Savings", "A lower monthly equivalent for short-term use."],
  ["6 Months — Balanced Value", "A middle ground between upfront cost and longer-term savings."],
  ["12 Months — Lowest Monthly Equivalent", "The lowest effective monthly price for a longer-term plan."],
];

const planBestFor: Record<string, string> = {
  "1-month": "Testing short-term",
  "3-months": "Short-term savings",
  "6-months": "Balanced value",
  "12-months": "Lowest monthly equivalent",
};

export default async function IPTVSubscription() {
  const { productSchema, breadcrumbSchema, pricingPageFaqs } =
    await getPricingPageData();

  return (
    <>
      <Schema id="product" schema={productSchema} />
      <Schema id="breadcrumb" schema={breadcrumbSchema} />

      <Section className="relative overflow-hidden border-b border-white/[0.07] pt-8 pb-10 sm:pt-12 sm:pb-14">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
        <Container className="relative">
          <Breadcrumb items={[{ label: "Pricing" }]} align="center" />
          <SectionHeader as="h1" eyebrow="Simple Prepaid Pricing" title="TryIPTV Pricing & Subscription Plans" subtitle="Choose 1, 3, 6, or 12 months of prepaid IPTV access. Plans start at $16, and longer terms reduce the effective monthly cost while every plan keeps the same core service and 2 simultaneous connections." />
          <div className="mt-5 flex flex-wrap justify-center gap-2.5 text-xs font-semibold sm:mt-6 sm:text-sm">
            {["From $16", "2 Simultaneous Connections", "Prepaid — No Auto-Renewal", "24-Hour Free Trial Available"].map((fact) => <div key={fact} className="inline-flex items-center gap-2 rounded-full border border-white/[0.09] bg-card px-3.5 py-1.5 text-muted-foreground"><Check className="h-4 w-4 text-primary" /> {fact}</div>)}
          </div>
        </Container>
      </Section>

      <Section id="pricing-plans" className="bg-[#050706]">
        <Container>
          <SectionHeader eyebrow="Prepaid IPTV Plans" title="Choose Your IPTV Plan" subtitle="Compare total prepaid cost, equivalent monthly rate, savings, and duration. Each plan is paid upfront and does not renew automatically." />
          <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {plans.map((plan, index) => {
              const planNote = plan.id === "1-month" ? "Maximum flexibility" : plan.id === "3-months" ? "Save $9 vs three 1-month purchases" : plan.id === "6-months" ? "Save $36 vs six 1-month purchases" : "Save $102 vs twelve 1-month purchases";
              return <article key={plan.id} className={`relative flex h-full flex-col justify-between overflow-hidden rounded-[18px] border bg-[#07080a] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] ${plan.isPopular ? "border-primary/40 bg-[linear-gradient(180deg,rgba(0,240,120,0.05),rgba(7,8,10,0)_42%),#07080a]" : "border-white/[0.08]"}`}>
                {plan.isPopular && <div className="absolute right-4 top-4 rounded-md border border-primary/25 bg-primary/[0.08] px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-primary">Best Value</div>}
                <div className="p-6 sm:p-7"><p className="text-[11px] font-mono font-semibold uppercase tracking-[0.08em] text-muted-foreground/80">{String(index + 1).padStart(2, "0")} / Plan</p><h3 className="pt-2 font-headline text-xl font-bold tracking-tight text-foreground">{plan.name}</h3><div className="pt-4"><div className="flex items-baseline gap-1.5"><span className="font-headline text-[40px] font-bold leading-none tracking-tight text-foreground sm:text-[44px]">${plan.price}</span><span className="text-xs font-medium text-muted-foreground">prepaid</span></div><p className="mt-2 text-xs text-muted-foreground"><span className="font-medium text-foreground/90">${plan.price_monthly.toFixed(2)}/month equivalent</span>{plan.savings && <span className="ml-1.5 inline-block rounded bg-primary/10 px-1.5 py-0.5 text-[10px] font-semibold text-primary">{plan.savings}</span>}</p><p className="mt-3 min-h-10 text-xs leading-5 text-muted-foreground">{planNote}</p></div></div>
                <div className="px-6 pb-6 sm:px-7 sm:pb-7"><Button asChild className="h-12 min-h-[48px] w-full rounded-xl text-[15px] font-semibold" variant={plan.isPopular ? "default" : "outline"}><Link href={plan.checkoutUrl}>Choose {plan.name}</Link></Button></div>
                <ul className="mx-6 mb-6 space-y-2 border-t border-white/[0.07] pt-5 text-[13.5px] leading-relaxed text-muted-foreground/95 sm:mx-7 sm:mb-7">
                  {includedFeatures.map((feature) => <li key={feature} className="flex items-start gap-2.5"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary/75" /><span>{feature}</span></li>)}
                </ul>
              </article>;
            })}
          </div>

          <div className="mt-8 rounded-xl border border-white/[0.08] bg-card">
            <div className="border-b border-white/[0.07] px-5 py-4 sm:px-6">
              <h2 className="font-headline text-xl font-extrabold text-foreground">TryIPTV Plan Comparison</h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">Every plan includes the same 2 simultaneous connections. Only the term and prepaid total change.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-left text-sm">
                <caption className="sr-only">TryIPTV prepaid plan prices and best use cases</caption>
                <thead className="border-b border-white/[0.07] text-xs uppercase tracking-wide text-muted-foreground">
                  <tr>
                    <th className="px-5 py-3 font-semibold sm:px-6">Plan</th>
                    <th className="px-5 py-3 font-semibold">Total price</th>
                    <th className="px-5 py-3 font-semibold">Monthly equivalent</th>
                    <th className="px-5 py-3 font-semibold">Connections</th>
                    <th className="px-5 py-3 font-semibold">Best for</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.06] text-muted-foreground">
                  {plans.map((plan) => (
                    <tr key={`comparison-${plan.id}`}>
                      <th scope="row" className="whitespace-nowrap px-5 py-3 font-semibold text-foreground sm:px-6">{plan.name}</th>
                      <td className="whitespace-nowrap px-5 py-3 text-foreground">${plan.price % 1 === 0 ? plan.price.toFixed(0) : plan.price.toFixed(2)}</td>
                      <td className="whitespace-nowrap px-5 py-3">${plan.price_monthly % 1 === 0 ? plan.price_monthly.toFixed(0) : plan.price_monthly.toFixed(2)}/month</td>
                      <td className="whitespace-nowrap px-5 py-3">2 simultaneous</td>
                      <td className="px-5 py-3">{planBestFor[plan.id]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="border-t border-white/[0.07] px-5 py-4 text-sm leading-6 text-muted-foreground sm:px-6"><span className="font-semibold text-foreground">What does 2 connections mean?</span> Up to two devices can stream at the same time. You can configure the service across more than two devices; the limit applies to simultaneous streams.</p>
          </div>

          <div className="mt-4 grid gap-3 text-sm leading-6 text-muted-foreground sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-white/[0.07] bg-card px-4 py-3"><span className="font-semibold text-foreground">Prepaid billing:</span> Pay once for the selected term; plans do not renew automatically.</div>
            <div className="rounded-lg border border-white/[0.07] bg-card px-4 py-3"><span className="font-semibold text-foreground">Payment:</span> Contact support through your selected plan button for the currently available payment instructions.</div>
            <div className="rounded-lg border border-white/[0.07] bg-card px-4 py-3"><span className="font-semibold text-foreground">Activation:</span> Credentials are typically delivered within 5–15 minutes after payment confirmation.</div>
            <div className="rounded-lg border border-white/[0.07] bg-card px-4 py-3"><span className="font-semibold text-foreground">Refunds:</span> Technical issues that support cannot resolve may qualify under the <Link href="/refund-policy" className="font-semibold text-primary underline underline-offset-4">refund policy</Link>.</div>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-white/[0.06]"><Container><SectionHeader eyebrow="Plan Selection Guide" title="Which Plan Should You Choose?" subtitle="Pick the duration that best matches your upfront budget and how long you expect to use the service." /><div className="mx-auto grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2">{planChoices.map(([title, description]) => <div key={title} className="rounded-xl border border-white/[0.08] bg-card p-5"><h3 className="font-headline text-base font-extrabold text-foreground">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p></div>)}</div></Container></Section>

      <Section className="border-t border-white/[0.06] bg-[#070a08]"><Container><SectionHeader eyebrow="Getting Started" title="How Does Buying a TryIPTV Plan Work?" subtitle="Three straightforward steps take you from plan selection to streaming." /><div className="grid grid-cols-1 gap-4 md:grid-cols-3">{[["STEP 01", "Choose Your Plan", "Select 1, 3, 6, or 12 months."], ["STEP 02", "Complete Your Prepaid Payment", "Use the payment method currently offered at checkout. This is a one-time prepaid purchase and does not automatically renew."], ["STEP 03", "Receive Your IPTV Details", "Credentials are typically sent within 5–15 minutes after payment confirmation. You receive the server URL, username, password, M3U URL, and setup instructions."]].map(([step, title, description]) => <div key={step} className="rounded-xl border border-white/[0.08] bg-card p-5"><div className="mb-2 text-xs font-mono font-bold text-primary">{step}</div><h3 className="mb-2 font-headline text-base font-extrabold text-foreground">{title}</h3><p className="text-xs leading-5 text-muted-foreground">{description}</p></div>)}</div><p className="mt-5 text-center text-sm text-muted-foreground">Need setup help? <Link href="/setup" className="font-semibold text-primary underline underline-offset-4">View the setup guide <ArrowRight className="inline h-3.5 w-3.5" /></Link></p></Container></Section>

      <Section className="border-t border-white/[0.06]"><Container><div className="relative overflow-hidden rounded-xl border border-primary/25 bg-[#0b100d] p-7 sm:p-8 md:p-10 lg:flex lg:items-center lg:justify-between lg:text-left"><div className="absolute inset-y-0 left-0 w-1 bg-primary" /><div className="max-w-2xl"><p className="eyebrow mb-3 flex items-center justify-center gap-2 lg:justify-start"><ShieldCheck className="h-4 w-4 text-primary" /> Evaluate Before Subscribing</p><h2 className="font-headline text-3xl font-extrabold leading-[1.12] text-foreground sm:text-4xl">Want to Test TryIPTV Before Paying?</h2><p className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted-foreground lg:mx-0">Use the 24-hour free trial to test TryIPTV on your own devices before choosing a prepaid subscription. No credit card and no automatic renewal.</p></div><div className="mt-8 flex flex-col gap-3 sm:flex-row lg:ml-10 lg:mt-0 lg:shrink-0"><Button asChild size="lg"><Link href="/iptv-free-trial"><CirclePlay className="mr-2 h-4 w-4" /> Start 24-Hour Free Trial</Link></Button><Button asChild size="lg" variant="outline"><Link href="/contact-us"><MessageCircle className="mr-2 h-4 w-4" /> Contact Support</Link></Button></div></div></Container></Section>

      <Section id="faq" className="border-t border-white/[0.06] bg-[#070a08]"><Container><SectionHeader eyebrow="Pricing & Cost Questions" title="Frequently Asked Questions About IPTV Pricing" subtitle="Straightforward answers about plan durations, payment methods, renewal policies, and connections." /><div className="mx-auto max-w-[880px] overflow-hidden rounded-[18px] border border-white/[0.08] bg-[#07080a]">{pricingPageFaqs.map((faq, index) => <details key={index} className="group border-b border-white/[0.07] px-6 last:border-b-0 sm:px-8"><summary className="flex min-h-[64px] cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-[16px] font-semibold leading-snug text-foreground/90 [&::-webkit-details-marker]:hidden"><span>{faq.question}</span><ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180" /></summary><div className="pb-5 pr-4 text-[15px] leading-relaxed text-muted-foreground sm:pr-8"><p>{faq.answer}</p></div></details>)}</div><p className="mt-8 text-center text-sm text-muted-foreground">Questions about payments or connections? <Link href="/contact-us" className="font-semibold text-primary underline underline-offset-4">Contact our support team</Link>.</p></Container></Section>
    </>
  );
}
