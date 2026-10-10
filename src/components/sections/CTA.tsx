import { Button } from "@/components/ui/button";
import { Container } from "../shared/Container";
import Link from "next/link";
import { ArrowRight, CircleCheck } from "lucide-react";
import { Section } from "../shared/Section";
import type React from "react";

import { cn } from "@/lib/utils";

interface CTAProps {
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  buttonText?: string;
  buttonHref?: string;
  className?: string;
  badgeIcon?: React.ReactNode;
  showTrustPills?: boolean;
}

export function CTA({
  title = "Start Your 24-Hour IPTV Free Trial",
  subtitle = "Not sure whether TryIPTV will work smoothly on your device and network? Test our channel lineup, HD & 4K picture quality, and easy setup before choosing a paid plan with our 24-hour trial ($0).",
  eyebrow = "Not Sure TryIPTV Is Right for You?",
  buttonText = "Start Free Trial",
  buttonHref = "/iptv-free-trial",
  className,
  badgeIcon = <CircleCheck className="h-4 w-4" />,
  showTrustPills,
}: CTAProps = {}) {
  const isExternal = buttonHref.startsWith("http");
  const LinkComp = isExternal ? "a" : Link;
  const externalProps = isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {};
  const shouldShowPills = showTrustPills ?? buttonHref.includes("trial");

  return (
    <Section className={cn("py-12 sm:py-16 lg:py-18", className)}>
      <Container>
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl sm:rounded-[22px] border border-primary/25 bg-[linear-gradient(135deg,#07130b_0%,#050807_50%,#040506_100%)] p-6 sm:p-8 lg:p-9 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] lg:flex lg:items-center lg:justify-between lg:text-left gap-8">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
          
          <div className="relative z-10 max-w-xl lg:max-w-2xl">
            {eyebrow && (
              <p className="mb-2.5 flex items-center justify-start gap-2 font-mono text-xs font-bold uppercase tracking-wider text-primary">
                {badgeIcon}
                {eyebrow}
              </p>
            )}
            <h2 className="font-headline text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-[32px] leading-tight">
              {title}
            </h2>
            <p className="mt-3 text-[15px] sm:text-base leading-relaxed text-muted-foreground/90">
              {subtitle}
            </p>

            {shouldShowPills && (
              <div className="mt-5 flex flex-wrap items-center gap-2 sm:gap-2.5 text-xs sm:text-[13px] text-muted-foreground/95">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 font-medium">
                  <span className="size-1.5 rounded-full bg-primary" />
                  24-Hour Trial — $0
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 font-medium">
                  <span className="size-1.5 rounded-full bg-primary" />
                  24-hour access
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 font-medium">
                  <span className="size-1.5 rounded-full bg-primary" />
                  Fast activation
                </span>
              </div>
            )}
          </div>

          <div className="relative z-10 mt-7 lg:mt-0 lg:shrink-0">
            <Button
              asChild
              size="lg"
              className="h-11 min-h-[44px] px-7.5 text-sm font-semibold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20"
            >
              <LinkComp href={buttonHref} {...externalProps}>
                {buttonText} <ArrowRight className="ml-1.5 h-4 w-4" />
              </LinkComp>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
