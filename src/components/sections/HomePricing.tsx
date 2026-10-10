import { CheckIcon, SparklesIcon, ArrowRight } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BlurFade } from "@/components/velora/blur-fade";
import { BorderBeam } from "@/components/velora/border-beam";
import { DotPattern } from "@/components/velora/grid-pattern";
import { Container } from "../shared/Container";
import { cn } from "@/lib/utils";

const PLANS = [
  {
    index: "01 / Plan",
    name: "1 Month",
    price: 16,
    suffix: "prepaid",
    description: "Standard 1-month prepaid access",
    monthlyEquivalent: null,
    savings: null,
    cta: "Choose 1 Month",
    checkoutUrl: "https://flujipay.com/payment/e1JWrpo7MBOGuaq0axpgtaxxIBTcFRoj",
    featured: false,
    badge: null,
    features: [
      "2 Simultaneous Connections",
      "24,000+ Live Channels",
      "80,000+ Movies & Series",
      "Zero Contracts / No Auto-Renewal",
    ],
  },
  {
    index: "02 / Plan",
    name: "3 Months",
    price: 39,
    suffix: "prepaid",
    description: null,
    monthlyEquivalent: "$13.00/mo",
    savings: "Save 19%",
    cta: "Choose 3 Months",
    checkoutUrl: "https://flujipay.com/payment/npi8bNFKa60nGloEpZuBguh6tBFSueUN",
    featured: false,
    badge: null,
    features: [
      "2 Simultaneous Connections",
      "24,000+ Live Channels",
      "80,000+ Movies & Series",
      "Zero Contracts / No Auto-Renewal",
    ],
  },
  {
    index: "03 / Plan",
    name: "6 Months",
    price: 60,
    suffix: "prepaid",
    description: null,
    monthlyEquivalent: "$10.00/mo",
    savings: "Save 38%",
    cta: "Choose 6 Months",
    checkoutUrl: "https://flujipay.com/payment/DkNU7UJ2dliHkpGRF7HHhW3JJajmwi3m",
    featured: false,
    badge: null,
    features: [
      "2 Simultaneous Connections",
      "24,000+ Live Channels",
      "80,000+ Movies & Series",
      "Zero Contracts / No Auto-Renewal",
    ],
  },
  {
    index: "04 / Plan",
    name: "12 Months",
    price: 90,
    suffix: "prepaid",
    description: null,
    monthlyEquivalent: "$7.50/mo",
    savings: "Save 53%",
    cta: "Choose 12 Months",
    checkoutUrl: "https://flujipay.com/payment/y59giDeQUiwnLBXIMYDo4ZRbLBpjeNmG",
    featured: true,
    badge: "Best Value",
    features: [
      "2 Simultaneous Connections",
      "24,000+ Live Channels",
      "80,000+ Movies & Series",
      "Zero Contracts / No Auto-Renewal",
    ],
  },
] as const;

export function HomePricing() {
  return (
    <section id="pricing" className="relative isolate overflow-hidden bg-[#050706] px-4 pt-10 pb-14 sm:px-6 sm:pt-14 sm:pb-18 lg:px-8 lg:pt-16 lg:pb-20">
      <DotPattern
        aria-hidden
        className="absolute inset-0 -z-10 size-full fill-white/[0.05] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-72 max-w-3xl rounded-full bg-gradient-to-r from-primary/15 via-primary/5 to-primary/15 blur-3xl"
      />

      <Container className="relative">
        <BlurFade className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-mono font-bold uppercase tracking-[0.08em] text-primary">
            Prepaid Subscriptions
          </p>
          <h2 className="mt-2.5 font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[38px] leading-tight">
            TryIPTV Subscription Plans
          </h2>
          <p className="mt-3 text-[15px] sm:text-base leading-relaxed text-muted-foreground/90">
            Simple, flat prepaid plans with no hidden fees and no automatic renewals. Every subscription includes 2 simultaneous connections, 24,000+ live channels, and HD &amp; 4K streams.
          </p>
        </BlurFade>

        <div className="mx-auto mt-10 sm:mt-12 grid max-w-md items-stretch gap-5 sm:max-w-none sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {PLANS.map((plan, i) => (
            <BlurFade
              key={plan.name}
              delay={0.08 + i * 0.05}
              className="h-full flex"
            >
              <article
                className={cn(
                  "relative flex h-full w-full flex-col justify-between rounded-2xl border border-white/[0.07] bg-[#07080a]/95 p-5.5 sm:p-6 shadow-sm transition-all duration-200 hover:border-white/[0.14] hover:bg-[#090b0d]",
                  plan.featured &&
                    "border-primary/25 bg-gradient-to-b from-primary/[0.06] via-[#07080a] to-[#07080a] shadow-xl shadow-primary/5 hover:border-primary/45"
                )}
              >
                {plan.featured && <BorderBeam size={120} duration={8} />}

                <div>
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-[11px] font-mono font-semibold uppercase tracking-[0.08em] text-muted-foreground/80">
                      {plan.index}
                    </p>
                    {plan.featured && (
                      <Badge className="gap-1 rounded-full border border-primary/25 bg-primary/10 px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-primary">
                        <SparklesIcon className="size-3 text-primary" aria-hidden />
                        {plan.badge}
                      </Badge>
                    )}
                  </div>

                  <h3 className="mt-2.5 font-headline text-xl font-bold tracking-tight text-foreground">
                    {plan.name}
                  </h3>

                  <div className="mt-5 flex items-baseline gap-1.5">
                    <span className="font-headline text-4xl sm:text-[44px] font-bold tracking-tight text-foreground tabular-nums">
                      ${plan.price}
                    </span>
                    <span className="text-xs font-medium text-muted-foreground">
                      {plan.suffix}
                    </span>
                  </div>

                  <div className="mt-2 flex min-h-[24px] items-center text-xs text-muted-foreground">
                    {plan.monthlyEquivalent ? (
                      <>
                        <span className="font-medium text-foreground/90">
                          {plan.monthlyEquivalent}
                        </span>
                        {plan.savings && (
                          <span className="ml-1.5 inline-block rounded bg-primary/10 px-1.5 py-0.2 text-[10px] font-semibold text-primary">
                            {plan.savings}
                          </span>
                        )}
                      </>
                    ) : (
                      <span className="text-muted-foreground/90 font-medium">{plan.description}</span>
                    )}
                  </div>

                  <Button
                    asChild
                    size="lg"
                    variant={plan.featured ? "default" : "outline"}
                    className={cn(
                      "mt-5 h-11 min-h-[44px] w-full rounded-xl text-sm font-semibold",
                      !plan.featured && "border-white/[0.14] bg-white/[0.03] text-foreground hover:bg-white/[0.08] hover:border-white/[0.25]"
                    )}
                  >
                    <a href={plan.checkoutUrl}>
                      {plan.cta}
                      <span className="sr-only"> — {plan.name} plan</span>
                    </a>
                  </Button>

                  <ul className="mt-5 space-y-2.5 border-t border-white/[0.07] pt-5 text-sm">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5 text-[13.5px] sm:text-[14px] leading-relaxed text-muted-foreground/95">
                        <CheckIcon
                          aria-hidden
                          className={cn(
                            "size-4 shrink-0",
                            plan.featured ? "text-primary" : "text-primary/70"
                          )}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </BlurFade>
          ))}
        </div>

        {/* Clear bridge to detailed pricing comparison and free trial */}
        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl border border-white/[0.07] bg-white/[0.02] p-4 sm:p-4.5 text-xs sm:text-sm text-muted-foreground">
          <div>
            Need detailed monthly vs. yearly breakdown and cost comparison?{" "}
            <Link href="/pricing" className="font-semibold text-primary hover:underline inline-flex items-center gap-1">
              Compare all plans on our Pricing page <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="shrink-0">
            <Link href="/iptv-free-trial" className="font-medium text-muted-foreground/90 hover:text-foreground underline underline-offset-4">
              Or test with a 24-hour free trial &rarr;
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
