import Link from 'next/link';
import { ArrowRight, CirclePlay } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/shared/Container';

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.07]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
      <Container className="relative py-12 sm:py-14 lg:py-16">
        {/* Left Column: Text & CTAs */}
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
          {/* 1. Eyebrow */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/[0.06] px-3.5 py-1.5 text-xs font-extrabold text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Prepaid IPTV Streaming • 2 Connections Included
          </div>

          {/* 2. H1 */}
          <h1 className="max-w-none font-headline text-3xl font-extrabold leading-[1.08] sm:max-w-2xl sm:text-5xl sm:leading-[1.06] lg:text-[2.85rem] xl:text-[3.45rem]">
            TryIPTV — <span className="text-primary">Best IPTV Service</span> in USA, UK &amp; Worldwide
          </h1>

          {/* 3. Supporting copy */}
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Tired of expensive TV packages and juggling multiple streaming apps? TryIPTV brings 24,000+ live channels, sports, movies and series together in one IPTV subscription, with HD &amp; 4K streaming on your favorite devices. Plans start at $16 with a 24-hour free trial available.
          </p>

          {/* 4. CTAs */}
          <div className="mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button asChild size="lg">
              <Link href="#pricing">View IPTV Plans <ArrowRight /></Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/iptv-free-trial"><CirclePlay /> Start Free Trial</Link>
            </Button>
          </div>

          {/* Microcopy below CTA */}
          <p className="mt-4 text-xs font-medium text-muted-foreground">
            2 simultaneous connections • Flat prepaid pricing • No auto-renewal
          </p>

          {/* 5. Product facts */}
          <div className="mt-8 grid w-full max-w-2xl grid-cols-2 divide-y divide-white/[0.09] border-y border-white/[0.09] py-4 sm:grid-cols-4 sm:divide-x sm:divide-y-0">
            {[
              ['24K+', 'Live channels'],
              ['80K+', 'Movies & series'],
              ['2 Screens', 'Simultaneous streams'],
              ['HD / 4K', 'Stream quality']
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
