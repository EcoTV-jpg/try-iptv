import { Button } from "@/components/ui/button";
import { Container } from "../shared/Container";
import Link from "next/link";
import { ArrowRight, CircleCheck } from "lucide-react";
import { Section } from "../shared/Section";
import type React from "react";

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
    <Section className={className}>
      <Container>
        <div className="relative overflow-hidden rounded-[20px] border border-primary/30 bg-[linear-gradient(135deg,#07130b_0%,#050807_50%,#040506_100%)] p-7 sm:p-9 md:p-11 shadow-[inset_0_1px_0_rgba(0,240,120,0.12)] lg:flex lg:items-center lg:justify-between lg:text-left">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
          
          <div className="relative z-10 max-w-2xl">
            {eyebrow && (
              <p className="mb-3 flex items-center justify-start gap-2 font-mono text-xs font-bold uppercase tracking-wider text-primary">
                {badgeIcon}
                {eyebrow}
              </p>
            )}
            <h2 className="font-headline text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-[34px] leading-tight">
              {title}
            </h2>
            <p className="mt-3.5 text-[15px] sm:text-base leading-relaxed text-muted-foreground">
              {subtitle}
            </p>

            {shouldShowPills && (
              <div className="mt-6 flex flex-wrap items-center gap-2.5 sm:gap-3 text-[13px] text-muted-foreground">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3.5 py-1 font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  24-Hour Trial — $0
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3.5 py-1 font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  24-hour access
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3.5 py-1 font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Fast activation
                </span>
              </div>
            )}
          </div>

          <div className="relative z-10 mt-8 lg:ml-10 lg:mt-0 lg:shrink-0">
            <Button
              asChild
              size="lg"
              className="h-12 min-h-[48px] px-8 text-[15px] font-semibold rounded-xl"
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
