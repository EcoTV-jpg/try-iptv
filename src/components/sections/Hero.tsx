import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CirclePlay } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/Container";

export function Hero() {
  return (
    <section className="relative -mt-20 overflow-hidden pt-24 pb-8 sm:pt-28 sm:pb-10 lg:pt-32 lg:pb-12">
      {/* Ambient background wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 -z-10 w-full bg-gradient-to-l from-primary/10 via-primary/[0.02] to-transparent lg:w-2/3 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px] opacity-40 [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]"
      />

      <Container className="relative">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/[0.08] px-3.5 py-1 text-xs font-mono font-semibold uppercase tracking-wider text-primary">
              <span className="size-1.5 rounded-full bg-primary animate-pulse" />
              Best IPTV Streaming • 2 Connections Included
            </div>

            <h1 className="mt-4 font-headline text-[32px] sm:text-[42px] lg:text-[48px] font-bold leading-[1.1] tracking-tight text-foreground">
              TryIPTV — <span className="text-primary">Best IPTV Service</span> in USA, UK &amp; Worldwide
            </h1>

            <p className="mt-4 max-w-xl text-[15.5px] sm:text-[16.5px] leading-relaxed text-muted-foreground/90">
              Tired of expensive TV packages and juggling multiple streaming apps? TryIPTV brings 24,000+ live channels, sports, movies and series together in one IPTV subscription, with HD &amp; 4K streaming on your favorite devices. Plans start at $16 with a 24-hour free trial available.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg" className="h-11 min-h-[44px] rounded-xl px-7 text-sm font-semibold">
                <Link href="/pricing">
                  View IPTV Plans <ArrowRight className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-11 min-h-[44px] rounded-xl border-white/[0.12] bg-[#07080a] px-6 text-sm font-semibold hover:bg-white/[0.05]">
                <Link href="/iptv-free-trial">
                  <CirclePlay className="mr-2 h-4 w-4 text-primary" /> Start Free Trial
                </Link>
              </Button>
            </div>

            <p className="mt-3.5 text-xs font-medium text-muted-foreground/85">
              2 simultaneous connections • Flat prepaid pricing • No auto-renewal
            </p>
          </div>

          {/* Right Column: Hero Image (best-iptv-service.png) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              <div className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#07080a] shadow-[0_12px_40px_rgba(0,0,0,0.6)]">
                <Image
                  src="/images/best-iptv-service.png"
                  alt="Couple watching TV with TryIPTV streaming service"
                  width={1024}
                  height={682}
                  priority
                  className="h-auto w-full object-cover transition-transform duration-300 hover:scale-[1.01]"
                  sizes="(min-width: 1024px) 460px, (min-width: 640px) 512px, 100vw"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Compact Hero Stats Strip */}
        <div className="mt-7 sm:mt-8 rounded-2xl border border-white/[0.06] bg-[#07080a]/90 py-3 px-3.5 sm:py-3.5 sm:px-5 shadow-sm">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.05]">
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left px-2 sm:px-4 py-1 sm:py-0">
              <span className="font-headline text-xl sm:text-[22px] font-bold tracking-tight text-foreground">
                24,000+
              </span>
              <span className="mt-0.5 text-[12px] sm:text-[12.5px] font-medium text-muted-foreground/85">
                Live Channels
              </span>
            </div>
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left px-2 sm:px-4 py-1 sm:py-0">
              <span className="font-headline text-xl sm:text-[22px] font-bold tracking-tight text-foreground">
                80,000+
              </span>
              <span className="mt-0.5 text-[12px] sm:text-[12.5px] font-medium text-muted-foreground/85">
                Movies &amp; Series
              </span>
            </div>
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left px-2 sm:px-4 py-1 sm:py-0">
              <span className="font-headline text-xl sm:text-[22px] font-bold tracking-tight text-foreground">
                2
              </span>
              <span className="mt-0.5 text-[12px] sm:text-[12.5px] font-medium text-muted-foreground/85">
                Connections
              </span>
            </div>
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left px-2 sm:px-4 py-1 sm:py-0">
              <span className="font-headline text-xl sm:text-[22px] font-bold tracking-tight text-foreground">
                HD &amp; 4K
              </span>
              <span className="mt-0.5 text-[12px] sm:text-[12.5px] font-medium text-muted-foreground/85">
                Quality
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
