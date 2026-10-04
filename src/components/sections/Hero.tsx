import Link from 'next/link';
import { ArrowRight, CirclePlay } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/shared/Container';

const stats = [
  { value: '24,000+', label: 'Live Channels' },
  { value: '80,000+', label: 'Movies & Series' },
  { value: '2', label: 'Connections' },
  { value: 'HD & 4K', label: 'Quality' },
];

export function Hero() {
  return (
    <section className="relative -mt-20 overflow-hidden pt-20">
      {/* Background illumination */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(0,240,120,0.07),transparent_32rem)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px] opacity-40 [mask-image:radial-gradient(circle_at_center,black,transparent_75%)]" />

      <Container className="relative flex flex-col items-center justify-center py-14 sm:py-18 lg:py-22">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/[0.08] px-4 py-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-primary">
            Prepaid IPTV Streaming • 2 Connections Included
          </div>

          {/* Dominant H1 */}
          <h1 className="mt-5 font-headline text-[34px] font-bold leading-[1.08] tracking-tight text-foreground sm:text-[46px] lg:text-[52px]">
            TryIPTV — <span className="text-primary">Best IPTV Service</span> in USA, UK &amp; Worldwide
          </h1>

          {/* Supporting Lede Paragraph */}
          <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-muted-foreground sm:text-[17px]">
            Tired of expensive TV packages and juggling multiple streaming apps? TryIPTV brings 24,000+ live channels, sports, movies and series together in one IPTV subscription, with HD &amp; 4K streaming on your favorite devices. Plans start at $16 with a 24-hour free trial available.
          </p>

          {/* CTA Button Group */}
          <div className="mt-8 flex w-full flex-col items-center justify-center gap-3.5 sm:w-auto sm:flex-row">
            <Button asChild size="lg" className="h-12 min-h-[48px] w-full px-8 text-base font-semibold sm:w-auto">
              <Link href="#pricing">
                View IPTV Plans <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 min-h-[48px] w-full border-white/[0.12] bg-[#07080a] px-7 text-base font-semibold hover:bg-white/[0.05] sm:w-auto">
              <Link href="/iptv-free-trial">
                <CirclePlay className="mr-2 h-4 w-4 text-primary" /> Start Free Trial
              </Link>
            </Button>
          </div>

          {/* Trust and Policy Micro-line */}
          <p className="mt-4 text-[13px] font-medium text-muted-foreground/80">
            2 simultaneous connections • Flat prepaid pricing • No auto-renewal
          </p>

          {/* 4 Clean Factual Stats */}
          <div className="mt-12 grid w-full grid-cols-2 gap-3 sm:mt-14 sm:grid-cols-4 sm:gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center rounded-[16px] border border-white/[0.08] bg-[#07080a] p-4 sm:p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
              >
                <span className="font-headline text-2xl font-bold tracking-tight text-foreground sm:text-[28px] leading-none">
                  {stat.value}
                </span>
                <span className="mt-2 text-[13px] font-medium text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

