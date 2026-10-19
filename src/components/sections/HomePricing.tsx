import { CheckIcon } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "../shared/Container";
import { Section } from "../shared/Section";
import { SectionHeader } from "../shared/SectionHeader";
import { cn } from "@/lib/utils";

const PLANS = [
  {
    name: "1 Month",
    price: "$16",
    monthlyEquivalent: "$16",
    checkoutUrl: "https://wa.me/15205648298?text=I%20would%20like%20to%20order%20the%201%20Month%20IPTV%20plan.",
    badge: null,
  },
  {
    name: "3 Months",
    price: "$39",
    monthlyEquivalent: "$13",
    checkoutUrl: "https://wa.me/15205648298?text=I%20would%20like%20to%20order%20the%203%20Months%20IPTV%20plan.",
    badge: null,
  },
  {
    name: "6 Months",
    price: "$60",
    monthlyEquivalent: "$10",
    checkoutUrl: "https://wa.me/15205648298?text=I%20would%20like%20to%20order%20the%206%20Months%20IPTV%20plan.",
    badge: null,
  },
  {
    name: "12 Months",
    price: "$90",
    monthlyEquivalent: "$7.50",
    checkoutUrl: "https://wa.me/15205648298?text=I%20would%20like%20to%20order%20the%2012%20Months%20IPTV%20plan.",
    badge: "Lowest monthly price",
  },
] as const;

// Only confirmed facts. [TO CONFIRM] before adding: "4K Ultra HD", "PPV events", "Smart EPG & catch-up".
const INCLUDED_IN_EVERY_PLAN = [
  "25,000+ live channels and 120,000+ movies and TV shows",
  "Access with Xtream Codes or an M3U playlist URL in a compatible IPTV player",
  "2 simultaneous connections",
  "Prepaid for the full term, with no auto-renewal",
  "Login details typically within about 5–15 minutes of payment confirmation",
] as const;

const link = "font-semibold text-primary underline-offset-4 hover:underline";

export function HomePricing() {
  return (
    <Section id="pricing" className="border-t border-white/[0.07]">
      <Container>
        <SectionHeader
          eyebrow="Prepaid Subscriptions"
          title="TryIPTV Subscription Plans"
          subtitle="Simple prepaid plans with no automatic renewal. Every plan includes the same service; only the duration changes."
        />

        <div className="mx-auto max-w-4xl">
          <div className="overflow-hidden rounded-2xl border border-white/[0.07] bg-card">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">TryIPTV prepaid plans: price, monthly equivalent and order link</caption>
              <thead className="border-b border-white/[0.07] text-[11px] uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th scope="col" className="px-3 py-3 font-semibold sm:px-6">Plan</th>
                  <th scope="col" className="px-2 py-3 font-semibold sm:px-6">Price</th>
                  <th scope="col" className="px-2 py-3 font-semibold sm:px-6">Per month</th>
                  <th scope="col" className="px-3 py-3 text-right font-semibold sm:px-6"><span className="sr-only">Order</span></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06]">
                {PLANS.map((plan) => (
                  <tr key={plan.name} className={cn(plan.badge && "bg-primary/[0.04]")}>
                    <th scope="row" className="px-3 py-4 align-middle font-semibold text-foreground sm:px-6">
                      {plan.name}
                      {plan.badge && (
                        <span className="mt-1 block w-max rounded-full border border-primary/25 bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary">
                          {plan.badge}
                        </span>
                      )}
                    </th>
                    <td className="px-2 py-4 align-middle font-headline text-lg font-bold tabular-nums text-foreground sm:px-6 sm:text-xl">
                      {plan.price}
                    </td>
                    <td className="px-2 py-4 align-middle tabular-nums text-muted-foreground sm:px-6">
                      {plan.monthlyEquivalent}
                    </td>
                    <td className="px-3 py-4 text-right align-middle sm:px-6">
                      <Button asChild size="sm" variant={plan.badge ? "default" : "outline"} className="min-h-11 px-3 sm:px-4">
                        <a href={plan.checkoutUrl} target="_blank" rel="noopener noreferrer">
                          Order<span className="sr-only sm:not-sr-only">{plan.name}</span>
                          <span className="sr-only"> plan on WhatsApp (opens in a new tab)</span>
                        </a>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            Ordering opens WhatsApp, where support sends payment instructions. See the{" "}
            <Link href="/pricing" className={link}>
              full plan comparison on the pricing page
            </Link>
            .
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/[0.07] bg-card p-5 sm:p-6">
              <h3 className="font-headline text-lg font-bold text-foreground">Included in every plan</h3>
              <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-muted-foreground">
                {INCLUDED_IN_EVERY_PLAN.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckIcon className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-white/[0.07] bg-card p-5 sm:p-6">
              <h3 className="font-headline text-lg font-bold text-foreground">How billing works</h3>
              <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-muted-foreground">
                <li><strong className="text-foreground">Prepaid:</strong> you pay once for the term you choose.</li>
                <li><strong className="text-foreground">No auto-renewal:</strong> access stops when the term ends unless you buy another.</li>
                <li><strong className="text-foreground">2 connections:</strong> two devices can stream at the same time.</li>
                <li>
                  <strong className="text-foreground">Try first:</strong>{" "}
                  <Link href="/iptv-free-trial" className={link}>24-hour IPTV free trial</Link> for $0, no credit card.
                </li>
                <li>
                  <strong className="text-foreground">Refunds:</strong> technical problems support cannot resolve within 7 days of purchase may qualify for a refund; refunds are discretionary. See the{" "}
                  <Link href="/refund-policy" className={link}>refund policy</Link>.
                </li>
              </ul>
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
