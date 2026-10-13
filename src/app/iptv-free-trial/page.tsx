import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, CheckCircle2, Film, KeyRound, Tv, Wifi } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Schema } from "@/components/shared/Schema";
import { getIptvFreeTrialPageData } from "@/lib/data/iptv-free-trial-page";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";

const freeTrialWhatsAppUrl =
  "https://wa.me/15205648298?text=Hello%20TryIPTV%2C%20I%20would%20like%20to%20start%20my%20free%20IPTV%20trial.";

export function generateMetadata(): Metadata {
  const title = "24-Hour IPTV Free Trial — Test TryIPTV with No Credit Card";
  const description =
    "Test TryIPTV free for 24 hours on your own device. No credit card or auto-renewal. Check live channels, VOD, EPG, and available HD or 4K quality before choosing a plan.";

  return {
    ...generatePageMetadata({ title, description, canonical: "/iptv-free-trial" }),
    title: { absolute: title },
  };
}

const inclusions = [
  [Tv, "25,000+ Live Channels", "Test the specific news, sports, local, or international channels you actually watch."],
  [Film, "120,000+ Movies & TV Shows", "Check VOD playback, seeking, subtitles, and audio tracks where available."],
  [Wifi, "HD, Full HD & 4K Where Available", "Evaluate the picture quality and resolution available on your device and chosen stream."],
  [Calendar, "EPG TV Guide", "Check whether the programme guide information you need loads correctly."],
  [KeyRound, "Xtream Codes + M3U", "Use the login format issued for your trial in a compatible player."],
  [CheckCircle2, "2 Simultaneous Connections", "Test the included connection allowance on the devices you plan to use."],
] as const;

const trialSteps = [
  ["01", "Request Your Trial", "Open WhatsApp and share the device or player you plan to test. No card or billing details are required."],
  ["02", "Receive Your Login", "Credentials typically arrive within 5–15 minutes after confirmation and may include a server URL, username, password, and M3U link."],
  ["03", "Set Up and Test", "Enter the details in your player, then use the setup, device, or player guides if you need installation help."],
] as const;

const testingChecks = [
  "Test the channels you actually watch, including sports, news, and local or international programming.",
  "Test during your normal viewing hours so the trial reflects your real use.",
  "Use your main TV, streaming device, or player rather than testing only on a secondary screen.",
  "Check channel switching, startup time, buffering, and audio/video sync.",
  "Test VOD playback, seeking, subtitles, and audio tracks where available.",
  "Check that the EPG information important to you loads correctly.",
];

const supportedDevices = [
  ["Fire TV / Firestick", "/devices/firestick-iptv"],
  ["Android TV / Google TV", "/devices/android-tv-iptv"],
  ["Samsung TV", "/devices/samsung-tv-iptv"],
  ["LG TV", "/devices/lg-tv-iptv"],
  ["Apple TV", "/devices/apple-tv-iptv"],
  ["Chromecast", "/devices/chromecast-iptv"],
  ["Roku", "/devices/roku-iptv"],
  ["MAG, Windows & Mac", "/devices"],
] as const;

export default async function IptvFreeTrialPage() {
  const { breadcrumbSchema, serviceSchema, trialFaqs } = await getIptvFreeTrialPageData();

  return (
    <>
      <Schema id="breadcrumb" schema={breadcrumbSchema} />
      <Schema id="service" schema={serviceSchema} />

      <Section className="relative overflow-hidden border-b border-white/[0.07] pt-12 pb-14 sm:pt-16 sm:pb-20">
        <Container className="relative">
          <div className="mx-auto max-w-4xl text-center">
            <Breadcrumb items={[{ label: "IPTV Free Trial" }]} align="center" />
            <p className="eyebrow mb-3">24 Hours · Full Access · No Credit Card</p>
            <h1 className="font-headline text-3xl font-extrabold leading-[1.08] text-foreground sm:text-5xl lg:text-6xl">
              24-Hour IPTV Free Trial — Test TryIPTV Before You Pay
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Test TryIPTV on your own TV or streaming device for 24 hours before choosing a paid plan. Check the channels, picture quality, EPG, VOD, and device compatibility that matter to you. No credit card and no automatic renewal.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg"><a href={freeTrialWhatsAppUrl} target="_blank" rel="noopener noreferrer"><SiWhatsapp className="mr-2 h-4 w-4" /> Start My Free Trial</a></Button>
              <Button asChild size="lg" variant="outline"><Link href="/pricing">See Plans &amp; Pricing</Link></Button>
            </div>
            <div className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs font-semibold text-muted-foreground">
              <span>No credit card</span><span>No auto-renewal</span><span>24-hour access</span>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="border-b border-white/[0.06] bg-[#070a08] py-10 sm:py-14">
        <Container>
          <article className="mx-auto max-w-3xl">
            <SectionHeader eyebrow="Quick Answer" title="How Does the TryIPTV Free Trial Work?" />
            <p className="text-base leading-8 text-muted-foreground sm:text-lg">
              Request the trial through WhatsApp and share your device or player when useful. After confirmation, support typically sends your Xtream Codes credentials and/or M3U playlist within 5–15 minutes. Enter the details in a compatible player and test the available live TV, VOD, EPG, and picture quality for 24 hours. The trial costs $0, requires no payment method, and does not automatically convert to a paid subscription.
            </p>
          </article>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader eyebrow="Trial Inclusions" title="What Do You Get With the 24-Hour IPTV Free Trial?" subtitle="Use the trial to evaluate the parts of the service that matter to your viewing setup." />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {inclusions.map(([Icon, title, description]) => (
              <div key={title} className="rounded-lg border border-white/[0.09] bg-card p-5">
                <Icon className="mb-3 h-5 w-5 text-primary" aria-hidden="true" />
                <h3 className="font-headline text-lg font-extrabold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="alt" className="border-y border-white/[0.06] bg-[#070a08]">
        <Container>
          <SectionHeader eyebrow="Start Here" title="How Do I Start My IPTV Free Trial?" subtitle="A short path from the WhatsApp request to testing the service." />
          <div className="grid grid-cols-1 border-y border-white/[0.09] md:grid-cols-3 md:divide-x md:divide-white/[0.09]">
            {trialSteps.map(([number, title, description]) => (
              <div key={number} className="border-b border-white/[0.09] px-5 py-6 last:border-b-0 md:border-b-0 md:px-6 md:py-7">
                <span className="font-mono text-xs font-bold text-primary">{number}</span>
                <h3 className="mt-3 font-headline text-lg font-extrabold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-semibold">
            <Link href="/setup" className="inline-flex items-center gap-1.5 text-primary hover:underline">Universal setup guide <ArrowRight className="h-4 w-4" /></Link>
            <Link href="/devices" className="inline-flex items-center gap-1.5 text-primary hover:underline">Device guides <ArrowRight className="h-4 w-4" /></Link>
            <Link href="/players" className="inline-flex items-center gap-1.5 text-primary hover:underline">Player guides <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader eyebrow="Practical Checklist" title="What Should You Test During the 24 Hours?" subtitle="Test the service under the same conditions you expect to use after purchase." />
          <div className="mx-auto grid max-w-4xl gap-3 sm:grid-cols-2">
            {testingChecks.map((check, index) => (
              <div key={check} className="flex items-start gap-3 rounded-lg border border-white/[0.08] bg-card/60 p-4">
                <span className="font-mono text-xs font-bold text-primary">{String(index + 1).padStart(2, "0")}</span>
                <p className="text-sm leading-6 text-muted-foreground">{check}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-6 text-muted-foreground">If playback issues persist, use the <Link href="/help/iptv-buffering" className="font-semibold text-primary underline underline-offset-4">IPTV buffering guide</Link> to separate device, network, player, and stream-source factors.</p>
        </Container>
      </Section>

      <Section variant="alt" className="border-y border-white/[0.06] bg-[#070a08]">
        <Container>
          <SectionHeader eyebrow="Device Compatibility" title="Which Devices Can I Use for the IPTV Free Trial?" subtitle="Use the trial on a supported TV, streaming device, computer, or player, then open the relevant guide if you need setup help." />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {supportedDevices.map(([name, href]) => (
              <Link key={name} href={href} className="group rounded-lg border border-white/[0.09] bg-card p-4 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary">{name} <ArrowRight className="ml-1 inline h-3.5 w-3.5" /></Link>
            ))}
          </div>
          <p className="mt-5 text-center text-sm text-muted-foreground">Compare compatible apps in the <Link href="/players" className="font-semibold text-primary underline underline-offset-4">IPTV player guides</Link> or follow the <Link href="/setup" className="font-semibold text-primary underline underline-offset-4">universal setup path</Link>.</p>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader eyebrow="After the Trial" title="What Happens After the 24-Hour Trial?" subtitle="The trial ends after its 24-hour access period and does not automatically become a paid subscription." />
          <div className="mx-auto max-w-3xl overflow-x-auto rounded-lg border border-white/[0.09] bg-card">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead className="border-b border-white/[0.09] bg-white/[0.02] text-xs font-extrabold uppercase text-muted-foreground"><tr><th className="px-5 py-3">Free Trial</th><th className="px-5 py-3 text-primary">Paid Plans</th></tr></thead>
              <tbody className="divide-y divide-white/[0.06] text-muted-foreground"><tr><td className="px-5 py-3">$0 · 24 hours · no card</td><td className="px-5 py-3">$16 / 1 month · $39 / 3 months · $60 / 6 months · $90 / 12 months</td></tr><tr><td className="px-5 py-3">No automatic renewal</td><td className="px-5 py-3">Prepaid · 2 simultaneous connections</td></tr></tbody>
            </table>
          </div>
          <div className="mt-5 text-center"><Link href="/pricing" className="font-semibold text-primary underline underline-offset-4">View all plans and pricing</Link></div>
        </Container>
      </Section>

      <Section className="border-t border-white/[0.06] bg-[#070a08]">
        <Container>
          <SectionHeader eyebrow="Trial Questions" title="Frequently Asked Questions About the Free Trial" subtitle="Short answers about access, setup, testing, and what happens next." />
          <div className="mx-auto max-w-[880px] overflow-hidden rounded-lg border border-white/[0.08] bg-[#07080a]">
            {trialFaqs.map((faq) => (
              <details key={faq.question} className="group border-b border-white/[0.07] px-5 last:border-b-0 sm:px-7"><summary className="flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-4 py-4 text-left text-sm font-semibold text-foreground sm:text-base [&::-webkit-details-marker]:hidden">{faq.question}<span className="text-primary transition-transform group-open:rotate-45">+</span></summary><p className="pb-5 pr-6 text-sm leading-6 text-muted-foreground">{faq.answer}</p></details>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-muted-foreground">Need help with a specific issue? <Link href="/contact-us" className="font-semibold text-primary underline underline-offset-4">Contact support</Link>.</p>
        </Container>
      </Section>

      <Section className="border-t border-white/[0.06]">
        <Container>
          <div className="relative overflow-hidden rounded-lg border border-primary/25 bg-[#0b100d] p-7 text-center sm:p-9">
            <p className="eyebrow mb-3">Test Before You Buy</p>
            <h2 className="font-headline text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">Test TryIPTV Before You Pay</h2>
            <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-muted-foreground">24 hours to test the channels, devices, and viewing quality that matter to you. No credit card and no automatic renewal.</p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row"><Button asChild size="lg"><a href={freeTrialWhatsAppUrl} target="_blank" rel="noopener noreferrer"><SiWhatsapp className="mr-2 h-4 w-4" /> Start My Free Trial</a></Button><Button asChild size="lg" variant="outline"><Link href="/pricing">See Plans &amp; Pricing</Link></Button></div>
          </div>
        </Container>
      </Section>
    </>
  );
}
