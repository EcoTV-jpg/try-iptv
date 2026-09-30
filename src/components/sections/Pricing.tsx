
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { plans } from "@/lib/site-data/pricing";
import { Container } from "../shared/Container";
import { SectionHeader } from "../shared/SectionHeader";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { Section } from "../shared/Section";

export function Pricing() {
  return (
    <Section id="pricing" className="bg-[#050706]">
      <Container>
        <SectionHeader
          title="Choose the Best IPTV Plan for You"
          subtitle="All plans are one-time prepaid subscriptions with no hidden fees and no automatic renewals. Every package includes full access to 24,000+ live channels, VOD, and 2 simultaneous connections."
          eyebrow="Prepaid IPTV Plans"
        />
        <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, i) => (
              <Card className={cn(
                "relative flex h-full min-h-[580px] flex-col overflow-hidden bg-[#07080a] transition-all duration-200 hover:border-white/[0.16] motion-safe:hover:-translate-y-0.5",
                plan.isPopular && "border-primary/50 bg-[linear-gradient(180deg,rgba(0,240,120,0.045),rgba(7,8,10,0)_44%),#07080a]"
              )} key={plan.name}>
                {plan.isPopular && (
                  <Badge className="absolute right-4 top-4 rounded-md border border-primary/25 bg-primary/[0.08] text-[10px] font-semibold uppercase tracking-[0.08em] text-primary hover:bg-primary/[0.08]">Best value</Badge>
                )}
                <CardHeader className="min-h-[178px] p-7 pb-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">{String(i + 1).padStart(2, '0')} / plan</p>
                  <CardTitle className="pt-3 font-headline text-2xl font-semibold">{plan.name}</CardTitle>
                  <CardDescription className="pt-3">
                    <span className="text-[3.25rem] font-semibold leading-none text-foreground">${plan.price}</span>
                    <span className="text-[13px] text-muted-foreground"> prepaid</span>
                  </CardDescription>
                  <p className="min-h-5 pt-1 text-sm leading-6 text-muted-foreground">
                  {plan.price_monthly !== plan.price ? (
                    <>
                      Equivalent to ${plan.price_monthly.toFixed(2)}/month
                    </>
                  ) : (
                    <>Standard 1-month prepaid access</>
                  )}
                  </p>
                </CardHeader>
                <CardContent className="flex-1 px-7">
                  <ul className="space-y-3 border-t border-white/[0.1] pt-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                        <span className="text-sm leading-6 text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="px-7 pb-7 pt-6">
                  <Button asChild className="w-full" variant={plan.isPopular ? "default" : "outline"}>
                    <Link href={plan.checkoutUrl}>Choose {plan.name}</Link>
                  </Button>
                </CardFooter>
              </Card>
          ))}
        </div>
        <div className="mt-8 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4 text-center text-xs text-muted-foreground sm:text-sm">
          Every plan includes identical service features: 24,000+ live channels, 80,000+ VOD titles, EPG TV guide, and 2 simultaneous device connections. Only duration and prepaid savings differ.
        </div>
      </Container>
    </Section>
  );
}
