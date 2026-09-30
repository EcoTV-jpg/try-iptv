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
}

export function CTA({
  title = "Start Your 24-Hour IPTV Free Trial",
  subtitle = "Not sure whether TryIPTV will work smoothly on your device and network? Test our channel lineup, HD & 4K picture quality, and easy setup before choosing a paid plan—with no credit card required.",
  eyebrow = "Not Sure TryIPTV Is Right for You?",
  buttonText = "Start Free Trial",
  buttonHref = "/iptv-free-trial",
  className,
  badgeIcon = <CircleCheck className="h-4 w-4" />,
}: CTAProps = {}) {
  const isExternal = buttonHref.startsWith("http");
  const LinkComp = isExternal ? "a" : Link;
  const externalProps = isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <Section className={className}>
      <Container>
        <div className="relative overflow-hidden rounded-2xl border border-primary/25 bg-[#07080a] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] sm:p-9 md:p-10 lg:flex lg:items-center lg:justify-between lg:text-left xl:p-12">
          <div className="pointer-events-none absolute -right-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-primary/[0.08] blur-3xl" />
          <div className="max-w-3xl">
            {eyebrow && (
              <p className="eyebrow mb-3 flex items-center justify-center gap-2 lg:justify-start">
                {badgeIcon}
                {eyebrow}
              </p>
            )}
            <h2 className="font-headline text-3xl font-semibold leading-[1.12] sm:text-4xl">
              {title}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-muted-foreground sm:text-base lg:mx-0">
              {subtitle}
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="mt-8 lg:ml-10 lg:mt-0 lg:shrink-0"
          >
            <LinkComp href={buttonHref} {...externalProps}>
              {buttonText} <ArrowRight />
            </LinkComp>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
