
import { Container } from "../shared/Container";
import { SectionHeader } from "../shared/SectionHeader";
import { devices } from "@/lib/site-data/devices";
import { DeviceIcon } from "./DeviceIcon";
import { Section } from "../shared/Section";

export function Devices() {
  return (
    <Section id="devices" className="border-y border-white/[0.06] bg-[#070a08]">
      <Container>
        <SectionHeader
          title="One IPTV Subscription. All Your Favorite Devices."
          subtitle="Stream your TryIPTV subscription across your preferred hardware. Our service supports popular IPTV player apps on Amazon Fire TV, Android TV and mobile, Apple TV, iPhone, iPad, Windows, macOS, Samsung and LG Smart TVs, Roku, and MAG boxes with simple setup guides for every platform."
          eyebrow="Device Compatibility"
        />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {devices.map((device) => (
              <DeviceIcon key={device.name} name={device.name} iconName={device.icon} href={device.href} />
            ))}
          </div>
      </Container>
    </Section>
  );
}
