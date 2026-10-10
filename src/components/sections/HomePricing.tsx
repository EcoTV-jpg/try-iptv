import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { plans } from "@/lib/site-data/pricing";
import { Container } from "../shared/Container";
import { SectionHeader } from "../shared/SectionHeader";
import Link from "next/link";
import { Section } from "../shared/Section";

export function HomePricing() {
  return (
    <Section id="pricing" className="bg-[#050706]">
      <Container>
        <SectionHeader
          title="TryIPTV Subscription Plans"
          subtitle="Simple, flat prepaid plans with no hidden fees and no automatic renewals. Every subscription includes 2 simultaneous connections, 24,000+ live channels, and HD & 4K streams."
          eyebrow="Prepaid Subscriptions"
        />
        <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {plans.map((plan, i) => (
            <Card
              key={plan.name}
              className={cn(
                "relative flex h-full flex-col justify-between overflow-hidden rounded-[18px] border border-white/[0.08] bg-[#07080a] p-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] transition-all duration-200 hover:border-white/[0.16] hover:bg-[#090b0d] motion-safe:hover:-translate-y-0.5",
                plan.isPopular && "border-primary/40 bg-[linear-gradient(180deg,rgba(0,240,120,0.05),rgba(7,8,10,0)_42%),#07080a] hover:border-primary/60"
              )}
            >
              {plan.isPopular && (
                <div className="absolute right-4 top-4 rounded-md border border-primary/25 bg-primary/[0.08] px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-primary">
                  Best Value
                </div>
              )}
              <CardHeader className="p-6 pb-4 sm:p-7 sm:pb-4">
                <p className="text-[11px] font-mono font-semibold uppercase tracking-[0.08em] text-muted-foreground/80">
                  {String(i + 1).padStart(2, '0')} / Plan
                </p>
                <CardTitle className="pt-2 font-headline text-xl font-bold tracking-tight text-foreground">
                  {plan.name}
                </CardTitle>
                <div className="pt-3">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-headline text-[38px] sm:text-[42px] font-bold tracking-tight text-foreground leading-none">
                      ${plan.price}
                    </span>
                    <span className="text-xs font-medium text-muted-foreground">prepaid</span>
                  </div>
                  <div className="mt-1.5 flex min-h-[22px] items-center text-xs text-muted-foreground">
                    {plan.price_monthly !== plan.price ? (
                      <>
                        <span className="text-foreground/90 font-medium">${plan.price_monthly.toFixed(2)}/mo</span>
                        {plan.savings && (
                          <span className="ml-1.5 inline-block rounded bg-primary/10 px-1.5 py-0.2 text-[10px] font-semibold text-primary">
                            {plan.savings}
                          </span>
                        )}
                      </>
                    ) : (
                      <>Standard 1-month prepaid access</>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1 px-6 sm:px-7">
                <ul className="space-y-2.5 border-t border-white/[0.08] pt-4 text-[13px] text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 shrink-0 text-primary" />
                    <span>2 Simultaneous Connections</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 shrink-0 text-primary" />
                    <span>24,000+ Live Channels</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 shrink-0 text-primary" />
                    <span>80,000+ Movies &amp; Series</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 shrink-0 text-primary" />
                    <span>Zero Contracts / No Auto-Renewal</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-4 sm:px-7 sm:pb-7">
                <Button
                  asChild
                  className="w-full h-12 min-h-[48px] rounded-xl text-sm font-semibold"
                  variant={plan.isPopular ? "default" : "outline"}
                >
                  <a href={plan.checkoutUrl}>Choose {plan.name}</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Clear bridge to detailed pricing comparison and free trial */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 sm:p-5 text-xs sm:text-sm text-muted-foreground">
          <div>
            Need detailed monthly vs. yearly breakdown and cost comparison?{" "}
            <Link href="/pricing" className="font-semibold text-primary hover:underline inline-flex items-center gap-1">
              Compare all plans on our Pricing page <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="shrink-0">
            <Link href="/iptv-free-trial" className="font-medium text-muted-foreground hover:text-foreground underline underline-offset-4">
              Or test with a 24-hour free trial &rarr;
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
