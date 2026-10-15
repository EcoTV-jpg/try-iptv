import Link from "next/link";
import { footerLinks } from "@/lib/site-data/footer";

type DeviceSlug =
  | "firestick-iptv"
  | "android-tv-iptv"
  | "apple-tv-iptv"
  | "samsung-tv-iptv"
  | "lg-tv-iptv"
  | "chromecast-iptv"
  | "mag-box-iptv"
  | "roku-iptv"
  | "windows-iptv"
  | "mac-iptv";

const deviceNames = new Map(footerLinks.supportedLinks.map((link) => [link.href, link.name]));

export function RelatedSetupLinks({ devices }: { devices: DeviceSlug[] }) {
  return (
    <nav
      aria-label="Device setup guides and pricing"
      className="mx-auto mt-12 max-w-4xl rounded-xl border border-primary/20 bg-primary/[0.05] p-5 sm:p-6"
    >
      <p className="text-xs font-semibold uppercase tracking-wider text-foreground">Set up on your device</p>
      <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-sm">
        {devices.map((slug) => {
          const href = `/devices/${slug}`;
          return (
            <li key={slug}>
              <Link href={href} className="text-primary underline underline-offset-4 hover:text-foreground">
                IPTV setup on {deviceNames.get(href)}
              </Link>
            </li>
          );
        })}
        <li>
          <Link href="/pricing" className="text-primary underline underline-offset-4 hover:text-foreground">
            Compare TryIPTV plans and pricing
          </Link>
        </li>
      </ul>
    </nav>
  );
}
