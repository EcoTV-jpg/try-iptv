import { Container } from "../shared/Container";
import { Section } from "../shared/Section";
import { SectionHeader } from "../shared/SectionHeader";
import { Server, MonitorPlay, Check, AlertCircle } from "lucide-react";

export function ServiceVsPlayer() {
  return (
    <Section id="service-vs-player" className="border-b border-white/[0.06] bg-[#070a08]">
      <Container>
        <SectionHeader
          eyebrow="Key Distinction"
          title="IPTV Service vs. IPTV Player: What's the Difference?"
          subtitle="Understanding the role of your IPTV provider versus the viewing application on your device."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Box 1: The Service (TryIPTV) */}
          <div className="rounded-2xl border border-primary/30 bg-[#0a130e] p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="grid h-10 w-10 place-items-center rounded-lg border border-primary/25 bg-primary/10 text-primary">
                <Server className="h-5 w-5" />
              </span>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary">The Feed &amp; Content</span>
                <h3 className="font-headline text-xl font-bold text-foreground">TryIPTV (The IPTV Service)</h3>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              TryIPTV is the underlying <strong>service and content provider</strong>. We host and distribute the live broadcast streams, sport channels, video on demand (VOD) catalog, and Electronic Program Guide (EPG) schedules.
            </p>
            <ul className="mt-5 space-y-2.5 text-xs sm:text-sm text-muted-foreground border-t border-white/[0.08] pt-4">
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>Provides your Xtream Codes API credentials (Server URL, Username, Password).</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>Supplies your personal M3U and M3U8 streaming playlist links.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>Maintains stream uptime, video servers, and catalog updates.</span>
              </li>
            </ul>
          </div>

          {/* Box 2: The Player (TiviMate, Smarters, etc.) */}
          <div className="rounded-2xl border border-white/[0.08] bg-card p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="grid h-10 w-10 place-items-center rounded-lg border border-white/[0.15] bg-white/[0.04] text-muted-foreground">
                <MonitorPlay className="h-5 w-5" />
              </span>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">The Playback Software</span>
                <h3 className="font-headline text-xl font-bold text-foreground">IPTV Players (The Apps)</h3>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Applications like <strong>TiviMate, IPTV Smarters Pro, XCIPTV, and GSE Smart IPTV</strong> are independent media players. They provide the on-screen user interface, remote navigation, and video decoder on your device.
            </p>
            <ul className="mt-5 space-y-2.5 text-xs sm:text-sm text-muted-foreground border-t border-white/[0.08] pt-4">
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                <span>Players contain no built-in channels until you enter your service credentials.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                <span>You can choose any player app you prefer that supports Xtream Codes or M3U.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                <span>TryIPTV does not own or develop third-party player apps, but works seamlessly with them.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 flex items-start gap-2.5 rounded-lg border border-white/[0.08] bg-card/60 p-4 text-xs text-muted-foreground">
          <AlertCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
          <span>
            <strong>Summary:</strong> You install an IPTV player on your television or phone, then enter your TryIPTV login credentials into that app to start streaming.
          </span>
        </div>
      </Container>
    </Section>
  );
}
