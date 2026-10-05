import Link from "next/link";
import { Container } from "../shared/Container";
import { SectionHeader } from "../shared/SectionHeader";
import { devices } from "@/lib/site-data/devices";
import { DeviceIcon } from "./DeviceIcon";
import { Section } from "../shared/Section";
import { ArrowRight } from "lucide-react";

export function Devices() {
  return (
    <Section id="devices" className="border-y border-white/[0.06] bg-[#070a08]">
      <Container>
        <SectionHeader
          title="One IPTV Subscription. All Your Favorite Devices."
          subtitle="Stream your TryIPTV subscription across your preferred hardware. Our service supports popular IPTV player apps on Amazon Fire TV, Android TV and mobile, Apple TV, iPhone, iPad, Windows, macOS, Samsung and LG Smart TVs, Roku, and MAG boxes with simple setup guides for every platform."
          eyebrow="Device Compatibility"
        />
        <div className="grid grid-cols-3 gap-3 sm:gap-3.5 lg:grid-cols-9 lg:gap-4">
          {devices.map((device) => (
            <DeviceIcon key={device.name} name={device.name} iconName={device.icon} href={device.href} />
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-center">
          <Link
            href="/devices"
            className="inline-flex items-center gap-2 text-[15px] font-semibold text-primary hover:underline"
          >
            <span>View all step-by-step device setup guides</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/players"
            className="inline-flex items-center gap-2 text-[15px] font-semibold text-primary hover:underline"
          >
            <span>Browse compatible IPTV players</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
