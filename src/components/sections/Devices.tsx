import type { ComponentType } from "react";
import Link from "next/link";
import { ArrowRight, Flame, Monitor, Tv } from "lucide-react";
import {
  SiAndroid,
  SiAppletv,
  SiLg,
  SiMacos,
  SiRoku,
  SiSamsung,
} from "react-icons/si";

import { Container } from "../shared/Container";
import { SectionHeader } from "../shared/SectionHeader";
import { Section } from "../shared/Section";
import { devices } from "@/lib/site-data/devices";
import { Marquee } from "@/components/velora/marquee";

const deviceIconMap: Record<string, ComponentType<{ className?: string }>> = {
  SiMacos,
  SiAndroid,
  Monitor,
  SiRoku,
  SiSamsung,
  SiLg,
  Flame,
  Tv,
  SiAppletv,
};

export function Devices() {
  return (
    <Section id="devices" className="border-y border-white/[0.06] bg-[#070a08] py-14 sm:py-18 lg:py-20">
      <Container>
        <SectionHeader
          title="One IPTV Subscription. All Your Favorite Devices."
          subtitle="Stream your TryIPTV subscription across your preferred hardware. Our service supports popular IPTV player apps on Amazon Fire TV, Android TV and mobile, Apple TV, iPhone, iPad, Windows, macOS, Samsung and LG Smart TVs, Roku, and MAG boxes with simple setup guides for every platform."
          eyebrow="Device Compatibility"
          className="mb-0 max-w-3xl"
        />

        <div className="relative mt-8 sm:mt-10">
          {/* Top border line with gradient fade */}
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.12] to-transparent"
          />

          {/* Left and right fade gradient overlays */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 sm:w-36 bg-gradient-to-r from-[#070a08] to-transparent"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 sm:w-36 bg-gradient-to-l from-[#070a08] to-transparent"
          />

          <Marquee
            pauseOnHover
            repeat={4}
            role="list"
            aria-label="Supported devices"
            className="py-5 sm:py-6 [--duration:38s] [--gap:1.25rem] sm:[--gap:1.5rem]"
          >
            {devices.map((device) => {
              const Icon = deviceIconMap[device.icon] || Tv;
              return (
                <Link
                  key={device.name}
                  href={device.href}
                  role="listitem"
                  className="group flex shrink-0 items-center gap-3.5 rounded-xl border border-white/[0.08] bg-[#070908] px-5 py-3 shadow-sm transition-all duration-200 hover:border-primary/40 hover:bg-[#080d0a] hover:shadow-md hover:shadow-primary/5 motion-reduce:transition-none"
                  aria-label={`${device.name} IPTV setup guide`}
                >
                  <span className="grid size-9.5 place-items-center rounded-lg border border-white/[0.07] bg-white/[0.025] text-foreground/80 transition-all duration-200 group-hover:border-primary/30 group-hover:bg-primary/[0.08] group-hover:text-primary">
                    <Icon className="size-4.5 shrink-0" />
                  </span>
                  <span className="font-headline text-[14px] sm:text-[14.5px] font-semibold tracking-tight text-foreground/95 transition-colors duration-200 group-hover:text-foreground whitespace-nowrap">
                    {device.name}
                  </span>
                </Link>
              );
            })}
          </Marquee>

          {/* Bottom border line with gradient fade */}
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/[0.12] to-transparent"
          />
        </div>

        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-center">
          <Link
            href="/devices"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
          >
            <span>View all step-by-step device setup guides</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
