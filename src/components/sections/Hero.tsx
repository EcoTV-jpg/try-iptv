import Link from 'next/link';
import { ArrowRight, CirclePlay, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/shared/Container';

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.07]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
      <Container className="relative py-12 sm:py-16 lg:py-20">
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
          {/* Eyebrow */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/[0.06] px-3.5 py-1.5 text-xs font-extrabold text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Prepaid IPTV Streaming • 2 Connections Standard
          </div>

          {/* H1 */}
          <h1 className="max-w-none font-headline text-3xl font-extrabold leading-[1.08] sm:max-w-2xl sm:text-5xl sm:leading-[1.06] lg:text-[2.85rem] xl:text-[3.45rem]">
            Best IPTV Service for <span className="text-primary">Live TV, Sports &amp; VOD</span>
          </h1>

          {/* Supporting copy */}
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            TryIPTV delivers 25,000+ live television channels, major sports networks, and an extensive library of 120,000+ movies and series in HD, Full HD, and available 4K. Stream across your preferred devices with Xtream Codes and M3U support, 2 simultaneous connections, flat prepaid plans from $16, and a risk-free 24-hour trial.
          </p>

          {/* Dual CTAs */}
          <div className="mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button asChild size="lg" className="h-12 px-7 text-base">
              <Link href="/iptv-free-trial">
                <CirclePlay className="mr-2 h-4 w-4" /> Start Free Trial
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 px-7 text-base">
              <Link href="/pricing">
                View Pricing <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Truthful proof points */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground sm:text-sm">
            <span className="inline-flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-primary" /> 24-Hour Free Trial
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-primary" /> 2 Simultaneous Streams
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-primary" /> Xtream Codes &amp; M3U
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-primary" /> Flat Prepaid • No Auto-Renewal
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-primary" /> HD / FHD / Available 4K
            </span>
          </div>

          {/* Stat strip */}
          <div className="mt-8 grid w-full max-w-2xl grid-cols-2 divide-y divide-white/[0.09] border-y border-white/[0.09] py-4 sm:grid-cols-4 sm:divide-x sm:divide-y-0">
            {[
              ['25,000+', 'Live channels'],
              ['120,000+', 'Movies & series'],
              ['2 Screens', 'Simultaneous streams'],
              ['HD / 4K', 'Available quality']
            ].map(([value, label]) => (
              <div key={label} className="px-3 py-2 text-center sm:px-4 sm:py-0">
                <p className="text-sm font-extrabold leading-5 text-foreground sm:text-base">{value}</p>
                <p className="mt-1 text-[11px] leading-4 text-muted-foreground sm:text-xs">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
