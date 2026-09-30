import Link from 'next/link';
import { ArrowRight, CirclePlay } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/shared/Container';

export function Hero() {
  return (
    <section className="relative -mt-20 overflow-hidden pt-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_16%,rgba(0,240,120,0.09),transparent_34rem)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.022)_1px,transparent_1px)] bg-[size:56px_56px] opacity-70 [mask-image:radial-gradient(circle_at_center,black,transparent_68%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,transparent_0,transparent_34rem,#040506_72rem)]" />
      <Container className="relative flex min-h-[700px] items-center py-16 sm:py-20 lg:min-h-[770px] lg:py-24">
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
          <div className="mb-7 inline-flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.035] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
            <span className="relative flex h-2 w-2">
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Prepaid IPTV Streaming • 2 Connections Included
          </div>

          <h1 className="max-w-none font-headline text-[2.55rem] font-medium leading-[1.08] sm:max-w-3xl sm:text-5xl sm:leading-[1.06] lg:text-[3.8rem]">
            TryIPTV — <span className="text-primary">Best IPTV Service</span> in USA, UK &amp; Worldwide
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-muted-foreground sm:text-[17px] sm:leading-8">
            Tired of expensive TV packages and juggling multiple streaming apps? TryIPTV brings 24,000+ live channels, sports, movies and series together in one IPTV subscription, with HD &amp; 4K streaming on your favorite devices. Plans start at $16 with a 24-hour free trial available.
          </p>

          <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button asChild size="lg">
              <Link href="#pricing">View IPTV Plans <ArrowRight /></Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/iptv-free-trial"><CirclePlay /> Start Free Trial</Link>
            </Button>
          </div>

          <p className="mt-5 text-xs font-medium text-muted-foreground">
            2 simultaneous connections • Flat prepaid pricing • No auto-renewal
          </p>

          <div className="mt-11 flex w-full max-w-3xl flex-wrap items-center justify-center gap-x-4 gap-y-3 border-y border-white/[0.1] py-4 text-sm text-muted-foreground sm:gap-x-0">
            {[
              '24K+ Live Channels',
              '80K+ Movies & Series',
              '2 Screens',
              'HD / 4K'
            ].map((value, index) => (
              <div key={value} className="flex items-center gap-4">
                <span className="font-medium text-foreground">{value}</span>
                {index < 3 && <span className="hidden h-4 w-px bg-white/[0.12] sm:block" />}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
