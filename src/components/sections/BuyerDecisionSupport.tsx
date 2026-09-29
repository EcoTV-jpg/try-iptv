import { Container } from "../shared/Container";
import { Section } from "../shared/Section";
import { SectionHeader } from "../shared/SectionHeader";
import { Check } from "lucide-react";

const checklist = [
  {
    feature: "Free Trial Availability",
    lookFor: "At least 24 hours of full catalog access without submitting credit card or banking details.",
    tryiptv: "24-hour full access trial with zero payment information required"
  },
  {
    feature: "Hardware & App Compatibility",
    lookFor: "Native support for Firestick, Android, Apple TV, Smart TVs, and standard third-party player apps.",
    tryiptv: "Compatible with all major hardware and players via Xtream Codes & M3U"
  },
  {
    feature: "Simultaneous Screen Limit",
    lookFor: "A minimum of 2 concurrent streams standard so multi-device households don't need double plans.",
    tryiptv: "2 simultaneous connections included on every 1, 3, 6, and 12-month plan"
  },
  {
    feature: "Pricing & Billing Transparency",
    lookFor: "Flat prepaid terms that state total upfront cost and do NOT enroll you in automated recurring rebilling.",
    tryiptv: "100% prepaid plans ($16 to $90) with zero contracts and no auto-renewal"
  },
  {
    feature: "Standard Connection Formats",
    lookFor: "Providers offering both Xtream Codes API (server/user/pass) and direct M3U playlist URLs.",
    tryiptv: "Both Xtream Codes API credentials and M3U URLs delivered automatically"
  },
  {
    feature: "Integrated EPG (TV Guide) & VOD",
    lookFor: "Continuously updated TV schedules and a populated video-on-demand library with subtitles.",
    tryiptv: "Electronic Program Guide and 120,000+ movies and series updated regularly"
  },
  {
    feature: "Real-Time Setup Assistance",
    lookFor: "Accessible customer care via live chat, WhatsApp, or responsive email rather than dead ticket queues.",
    tryiptv: "24/7 technical assistance available via direct WhatsApp messaging and email"
  }
];

export function BuyerDecisionSupport() {
  return (
    <Section id="decision-support" className="border-b border-white/[0.06]">
      <Container>
        <SectionHeader
          eyebrow="Objective Buying Guide"
          title="What to Check Before Choosing an IPTV Provider"
          subtitle="Use this practical checklist to evaluate any IPTV service on technical merits, household utility, and customer-first policies."
        />

        <div className="mt-8 overflow-x-auto rounded-xl border border-white/[0.09] bg-card">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-white/[0.09] bg-white/[0.02]">
                <th className="p-4 font-headline text-xs font-extrabold uppercase tracking-wider text-muted-foreground w-1/4">Evaluation Factor</th>
                <th className="p-4 font-headline text-xs font-extrabold uppercase tracking-wider text-muted-foreground w-2/5">What to Look For</th>
                <th className="p-4 font-headline text-xs font-extrabold uppercase tracking-wider text-primary w-1/3">TryIPTV Standard</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.06]">
              {checklist.map((item) => (
                <tr key={item.feature} className="transition-colors hover:bg-white/[0.015]">
                  <td className="p-4 font-bold text-foreground align-top">{item.feature}</td>
                  <td className="p-4 text-xs sm:text-sm text-muted-foreground align-top leading-relaxed">{item.lookFor}</td>
                  <td className="p-4 text-xs sm:text-sm text-foreground align-top font-medium leading-relaxed">
                    <span className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>{item.tryiptv}</span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </Section>
  );
}
