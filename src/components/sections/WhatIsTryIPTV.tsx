import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "../shared/Container";
import { Section } from "../shared/Section";
import { SectionHeader } from "../shared/SectionHeader";

const QUICK_LINKS = [
  { href: "/iptv-free-trial", label: "Request a 24-hour IPTV free trial" },
  { href: "/setup", label: "Follow the universal IPTV setup guide" },
  { href: "/devices", label: "Find setup steps for your device" },
  { href: "/players", label: "Compare compatible IPTV player apps" },
  { href: "/guides", label: "Read IPTV guides and explainers" },
  { href: "/help", label: "Fix common problems with troubleshooting guides" },
  { href: "/faq", label: "Read all IPTV FAQs" },
] as const;

export function WhatIsTryIPTV() {
  return (
    <Section id="what-is-tryiptv" className="border-t border-white/[0.07]">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <SectionHeader
              align="left"
              eyebrow="About the Service"
              title="What TryIPTV Is (and Is Not)"
              className="mb-4 sm:mb-5 lg:mb-5"
            />
            <p className="text-base leading-relaxed text-muted-foreground sm:text-[17px]">
              TryIPTV is an IPTV service provider. We supply live TV channels and on-demand movies and TV shows that you
              watch on your own device. TryIPTV is not a player app: you install a compatible IPTV player, such as
              TiviMate or IPTV Smarters, and sign in with the Xtream Codes login or M3U playlist URL we send you. Every
              prepaid plan includes the same service and 2 simultaneous connections; only the plan length changes.
            </p>
            {/* TODO: link to /about ("Who runs TryIPTV") once /about is final and deployed. */}
          </div>

          <nav aria-label="Get started with TryIPTV" className="lg:col-span-5">
            <ul className="divide-y divide-white/[0.06] rounded-2xl border border-white/[0.07] bg-card px-2">
              {QUICK_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex min-h-12 items-center justify-between gap-3 px-3 py-2.5 text-sm font-semibold text-foreground/90 hover:text-primary"
                  >
                    {item.label}
                    <ArrowRight className="size-4 shrink-0 text-primary transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none" aria-hidden />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </Section>
  );
}
