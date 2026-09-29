import Link from "next/link";
import { Container } from "../shared/Container";
import { Section } from "../shared/Section";
import { SectionHeader } from "../shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check } from "lucide-react";

const previewPlans = [
  {
    name: "1 Month",
    price: "$16.00",
    billing: "One-time prepaid payment",
    equivalent: "$16.00 / month",
    popular: false,
    highlight: "Standard 30-day access",
    url: "/checkout?plan=1-month"
  },
  {
    name: "3 Months",
    price: "$39.00",
    billing: "One-time prepaid payment",
    equivalent: "$13.00 / month equivalent",
    popular: false,
    highlight: "Save 19% ($9.00 off)",
    url: "/checkout?plan=3-months"
  },
  {
    name: "6 Months",
    price: "$60.00",
    billing: "One-time prepaid payment",
    equivalent: "$10.00 / month equivalent",
    popular: false,
    highlight: "Save 38% ($36.00 off)",
    url: "/checkout?plan=6-months"
  },
  {
    name: "12 Months",
    price: "$90.00",
    billing: "One-time prepaid payment",
    equivalent: "$7.50/month equivalent on the $90 annual prepaid plan",
    popular: true,
    highlight: "Save 53% ($102.00 off)",
    url: "/checkout?plan=12-months"
  }
];

export function PricingPreview() {
  return (
    <Section id="pricing-preview" className="border-b border-white/[0.06]">
      <Container>
        <SectionHeader
          eyebrow="Prepaid Subscriptions"
          title="Simple, Transparent Pricing"
          subtitle="All plans are flat prepaid purchases with no hidden fees and zero automatic renewals. Every package includes identical features: 2 simultaneous connections, 25,000+ live channels, and 120,000+ VOD titles."
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {previewPlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col justify-between rounded-xl border p-5 transition-all duration-200 hover:-translate-y-0.5 ${
                plan.popular
                  ? "border-primary/50 bg-[#0d1711] shadow-[0_15px_40px_rgba(0,240,120,0.06)]"
                  : "border-white/[0.08] bg-card hover:border-white/20"
              }`}
            >
              {plan.popular && (
                <Badge className="absolute right-4 top-4 rounded bg-primary px-2 py-0.5 text-[10px] font-extrabold text-primary-foreground">
                  Best Value
                </Badge>
              )}
              <div>
                <p className="text-xs font-extrabold uppercase text-muted-foreground">{plan.name}</p>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-foreground">{plan.price}</span>
                  <span className="text-xs text-muted-foreground">total</span>
                </div>
                <p className="mt-1 text-xs font-semibold text-primary">{plan.highlight}</p>
                <p className="mt-1 text-[11px] text-muted-foreground leading-snug">{plan.equivalent}</p>
                
                <ul className="mt-4 space-y-2 border-t border-white/[0.07] pt-4 text-xs text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-primary shrink-0" />
                    <span>2 simultaneous connections</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-primary shrink-0" />
                    <span>25K+ live TV &amp; 120K+ VOD</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-primary shrink-0" />
                    <span>No recurring contract</span>
                  </li>
                </ul>
              </div>

              <div className="mt-5 pt-3 border-t border-white/[0.06]">
                <Button asChild className="w-full" size="sm" variant={plan.popular ? "default" : "outline"}>
                  <Link href={plan.url}>Choose {plan.name}</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl border border-white/[0.08] bg-card/60 p-5">
          <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
            Need a detailed feature breakdown, monthly-equivalent math, or refund policy terms?
          </p>
          <Button asChild variant="outline" className="shrink-0">
            <Link href="/pricing">
              Compare IPTV Pricing <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
