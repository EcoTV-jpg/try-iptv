
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
    <Section id="pricing-plans">
      <Container>
        <SectionHeader
          title="Choose the Best IPTV Plan for You"
          subtitle="All plans are one-time prepaid subscriptions with no hidden fees and no automatic renewals. Every package includes full access to 24,000+ live channels, VOD, and 2 simultaneous connections."
          eyebrow="Prepaid IPTV Plans"
        />
        <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, i) => (
              <Card className={cn(
                "relative flex h-full min-h-[610px] flex-col transition-all duration-200 hover:-translate-y-0.5 hover:border-white/20",
                plan.isPopular && "border-primary/55 bg-[#0d1711] shadow-[0_20px_60px_rgba(0,240,120,0.07)]"
              )} key={plan.name}>
                {plan.isPopular && (
                  <Badge className="absolute right-4 top-4 rounded-md border border-primary/20 bg-primary/10 text-primary hover:bg-primary/10">Best value</Badge>
                )}
                <CardHeader className="min-h-[178px] pb-5">
                  <p className="text-xs font-extrabold uppercase text-muted-foreground">{String(i + 1).padStart(2, '0')} / plan</p>
                  <CardTitle className="pt-3 font-headline text-xl">{plan.name}</CardTitle>
                  <CardDescription className="pt-2">
                    <span className="text-4xl font-extrabold leading-none text-foreground">${plan.price}</span>
                    <span className="text-xs text-muted-foreground"> prepaid</span>
                  </CardDescription>
                  <p className="min-h-5 text-sm leading-5 text-muted-foreground">
                  {plan.price_monthly !== plan.price ? (
                    <>
                      Equivalent to ${plan.price_monthly.toFixed(2)}/month
                    </>
                  ) : (
                    <>Standard 1-month prepaid access</>
                  )}
                  </p>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3 border-t border-white/[0.08] pt-5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <Check className="h-4 w-4 flex-shrink-0 text-primary" />
                        <span className="text-sm leading-5 text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full" variant={plan.isPopular ? "default" : "outline"}>
                    <Link href={plan.url}>Choose {plan.name}</Link>
                  </Button>
                </CardFooter>
              </Card>
          ))}
        </div>
        <div className="mt-8 rounded-lg border border-white/[0.08] bg-card/60 p-4 text-center text-xs text-muted-foreground sm:text-sm">
          Every plan includes identical service features: 25,000+ live channels, 120,000+ movies &amp; TV shows, EPG TV guide, and 2 simultaneous device connections. Only duration and prepaid savings differ.
        </div>
      </Container>
    </Section>
  );
}
