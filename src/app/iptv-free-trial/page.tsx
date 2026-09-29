import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { FaqList } from "@/components/sections/FAQ";
import { Check, Tv, Zap, Shield, ShieldCheck, MessageCircle, Smartphone, Film, Calendar, Clock, ArrowRight, Sparkles } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import SemanticContent from "@/components/shared/SemanticContent";
import { getIptvFreeTrialPageData } from "@/lib/data/iptv-free-trial-page";
import { Schema } from "@/components/shared/Schema";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";
import { plans } from "@/lib/site-data/pricing";
import { cn } from "@/lib/utils";

export function generateMetadata(): Metadata {
    const title = "IPTV Free Trial: 24 Hours of Full Access, No Credit Card Needed";
    const description = "Test TryIPTV free for 24 hours. Access 24,000+ live channels, 80,000+ movies & series, HD & 4K streams, and 2 simultaneous connections with no credit card required.";
    return {
      ...generatePageMetadata({
          title,
          description,
          canonical: "/iptv-free-trial",
      }),
      title: {
        absolute: title,
      }
    };
}

const trialInclusions = [
    { 
        icon: Tv, 
        title: "24,000+ Live Channels", 
        description: "Comprehensive selection of live sports, news, entertainment, and international networks with nothing restricted." 
    },
    { 
        icon: Film, 
        title: "80,000+ Movies & Series", 
        description: "The complete on-demand VOD library is unlocked during your 24 hours, exactly as paying subscribers see it." 
    },
    { 
        icon: Zap, 
        title: "HD & 4K Streaming Quality", 
        description: "Streams play at native broadcast resolution (HD, Full HD, and 4K where available) so you can evaluate picture quality." 
    },
    { 
        icon: Calendar, 
        title: "Smart EPG TV Guide", 
        description: "The full Electronic Program Guide is active so you can verify that listings accurately match current airings." 
    },
    { 
        icon: Smartphone, 
        title: "Broad Device Compatibility", 
        description: "Supported on Amazon Fire TV, Android TV and mobile, Apple TV, Smart TVs, Windows, macOS, and MAG boxes." 
    },
    { 
        icon: MessageCircle, 
        title: "24/7 Customer Support", 
        description: "Technical assistance via WhatsApp and email is available to trial users to guide setup and player configuration." 
    },
];

const howItWorksSteps = [
    {
        number: 1,
        title: "Request Your Free Trial",
        description: "Contact our support team on WhatsApp or send a message. No credit card or billing details are ever requested.",
    },
    {
        number: 2,
        title: "Receive Your Credentials",
        description: "Our team provides your unique M3U playlist URL, Xtream Codes credentials, and setup instructions for your player app.",
    },
    {
        number: 3,
        title: "Start Streaming",
        description: "Sign in on your preferred device using any compatible IPTV player (like TiviMate, IPTV Smarters, or GSE Smart IPTV) and your 24 hours begin.",
    }
];

const testingGuide = [
    {
        number: "01",
        title: "Run a Peak-Hour Test",
        description: "Stream live TV between 7:00 PM and 11:00 PM when residential network traffic is highest to evaluate stream stability and server responsiveness under real-world load."
    },
    {
        number: "02",
        title: "Open Your Must-Have Channels",
        description: "Check the live sports networks, local news stations, premium movie channels, and international broadcasts that matter to your family to confirm they play smoothly."
    },
    {
        number: "03",
        title: "Test Across Every Screen & Guide",
        description: "Log in on your main TV and a second device, check that the Electronic Program Guide (EPG) aligns with live broadcasts, and test channel zapping speed."
    }
];

const trustMetrics = [
    {
        icon: ShieldCheck,
        metric: "$0",
        title: "Trial Signup",
        description: "No credit card or payment details requested or stored."
    },
    {
        icon: Clock,
        metric: "24h",
        title: "Full Access",
        description: "Complete catalog access with zero features downgraded."
    },
    {
        icon: Tv,
        metric: "2",
        title: "Connections",
        description: "Stream simultaneously on up to two screens in your home."
    },
    {
        icon: Shield,
        metric: "7 Days",
        title: "Refund Policy",
        description: "Backing paid plans if technical issues cannot be resolved."
    },
];

export default async function IptvFreeTrialPage() {
    const { semanticContent, breadcrumbSchema, faqSchema, serviceSchema, trialFaqs } = await getIptvFreeTrialPageData();

    return (
        <>
            <Schema id="breadcrumb" schema={breadcrumbSchema} />
            <Schema id="faq" schema={faqSchema} />
            <Schema id="service" schema={serviceSchema} />

            <SemanticContent 
                primaryEntity={semanticContent.primaryEntity}
                relatedEntities={semanticContent.relatedEntities}
                semanticClusters={semanticContent.semanticClusters}
                contextualKeywords={semanticContent.contextualKeywords}
            />

            {/* 1. Hero Section */}
            <Section className="relative overflow-hidden border-b border-white/[0.07] pt-12 pb-14 sm:pt-16 sm:pb-20">
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
                <Container className="relative text-center">
                    <Breadcrumb items={[{ label: "IPTV Free Trial" }]} align="center" />
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/[0.06] px-3.5 py-1.5 text-xs font-extrabold text-primary">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-40" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                        </span>
                        24 Hours • Full Access • No Credit Card Needed
                    </div>
                    <h1 className="font-headline text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl max-w-4xl mx-auto">
                        IPTV Free Trial: 24 Hours of Full Access, No Credit Card Needed
                    </h1>
                    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                        Try the full TryIPTV service on your own screens before paying anything. The free trial opens all 24,000+ live channels, the 80,000+ movie and series library, HD &amp; 4K streams, and the complete EPG TV guide for 24 hours. No credit card, no auto-renew, and zero commitment.
                    </p>
                    <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Button asChild size="lg">
                            <a href="https://wa.me/447848197761" target="_blank" rel="noopener noreferrer">
                                <SiWhatsapp className="mr-2 h-4 w-4" />
                                Start Free Trial on WhatsApp
                            </a>
                        </Button>
                        <Button asChild size="lg" variant="outline">
                            <Link href="/pricing">
                                See Plans &amp; Pricing
                            </Link>
                        </Button>
                    </div>
                    <div className="mt-8 flex flex-wrap justify-center items-center gap-3 text-xs font-semibold sm:text-sm">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.09] bg-card px-3.5 py-1.5 text-muted-foreground">
                            <Check className="h-4 w-4 text-primary" /> No credit card required
                        </div>
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.09] bg-card px-3.5 py-1.5 text-muted-foreground">
                            <Check className="h-4 w-4 text-primary" /> No auto-renew
                        </div>
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.09] bg-card px-3.5 py-1.5 text-muted-foreground">
                            <Check className="h-4 w-4 text-primary" /> 2 simultaneous connections
                        </div>
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.09] bg-card px-3.5 py-1.5 text-muted-foreground">
                            <Check className="h-4 w-4 text-primary" /> Full access, nothing locked
                        </div>
                    </div>
                </Container>
            </Section>

            {/* 2. What's Included Section */}
            <Section>
                <Container>
                    <SectionHeader
                        eyebrow="What's Included"
                        title="What Do You Get With the TryIPTV Free Trial?"
                        subtitle="The TryIPTV free trial includes everything our paid subscriptions include for a full 24 hours. Nothing is locked behind a paywall, no channels are hidden, and stream quality is never throttled."
                    />
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {trialInclusions.map((feature, index) => (
                            <div
                                key={index}
                                className="rounded-lg border border-white/[0.09] bg-card p-6 shadow-[0_18px_60px_rgba(0,0,0,0.2)] transition-all duration-200 hover:-translate-y-0.5 hover:border-white/20"
                            >
                                <div className="mb-4 grid h-12 w-12 place-items-center rounded-md border border-primary/20 bg-primary/[0.06] text-primary">
                                    <feature.icon className="h-6 w-6" />
                                </div>
                                <h3 className="font-headline text-lg font-extrabold leading-6 text-foreground">{feature.title}</h3>
                                <p className="mt-2 text-sm leading-6 text-muted-foreground">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* 3. How It Works Section */}
            <Section variant="alt" className="border-y border-white/[0.06] bg-[#070a08]">
                <Container>
                    <SectionHeader
                        eyebrow="How It Works"
                        title="How Do I Get My IPTV Free Trial?"
                        subtitle="Getting your free trial takes less than two minutes, with zero payment information or credit cards requested."
                    />
                    <div className="grid grid-cols-1 border-y border-white/[0.09] md:grid-cols-3 md:divide-x md:divide-white/[0.09]">
                        {howItWorksSteps.map((step) => (
                            <div key={step.number} className="relative border-b border-white/[0.09] px-6 py-8 last:border-b-0 md:border-b-0 md:px-8 md:py-9">
                                <div className="mb-6 flex items-center justify-between">
                                    <span className="text-xs font-extrabold text-muted-foreground">0{step.number}</span>
                                    <span className="grid h-11 w-11 place-items-center rounded-md border border-primary/20 bg-primary/[0.06] text-primary font-extrabold text-sm">
                                        0{step.number}
                                    </span>
                                </div>
                                <h3 className="mb-3 font-headline text-xl font-extrabold leading-7 text-foreground">{step.title}</h3>
                                <p className="text-sm leading-6 text-muted-foreground">{step.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 rounded-lg border border-white/[0.08] bg-card/60 p-4 text-center text-xs text-muted-foreground sm:text-sm">
                        Credential messages are dispatched promptly by our support team. If you request trial details by email, please check your spam folder before assuming delivery failed.
                    </div>
                </Container>
            </Section>

            {/* 4. Make The Most Of It (Testing Walkthrough) */}
            <Section>
                <Container>
                    <SectionHeader
                        eyebrow="Make The Most Of It"
                        title="How Should You Test IPTV During Your 24 Hours?"
                        subtitle="Test TryIPTV the way your household actually watches TV: on your primary screens, over your home internet, and during peak hours."
                    />
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        {testingGuide.map((item) => (
                            <div
                                key={item.number}
                                className="relative rounded-lg border border-white/[0.09] bg-card p-6 shadow-[0_18px_60px_rgba(0,0,0,0.2)]"
                            >
                                <span className="mb-3 inline-block font-mono text-xs font-extrabold text-primary">
                                    STEP {item.number}
                                </span>
                                <h3 className="font-headline text-xl font-extrabold leading-7 text-foreground">{item.title}</h3>
                                <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* 5. After The Trial (Pricing Transparency) */}
            <Section variant="alt" className="border-t border-white/[0.06] bg-[#070a08]">
                <Container>
                    <SectionHeader
                        eyebrow="After The Trial"
                        title="What Do TryIPTV Plans Cost After Your Free Trial?"
                        subtitle="If the trial convinces you, plans start at $16 for one month with zero contracts and no auto-renewals. Every plan includes 2 simultaneous connections."
                    />
                    <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-2 lg:grid-cols-4">
                        {plans.map((plan, i) => (
                            <Card className={cn(
                                "relative flex h-full min-h-[610px] flex-col transition-all duration-200 hover:-translate-y-0.5 hover:border-white/20",
                                plan.isPopular && "border-primary/55 bg-[#0d1711] shadow-[0_20px_60px_rgba(0,240,120,0.07)]"
                            )} key={plan.name}>
                                {plan.isPopular && (
                                    <Badge className="absolute right-4 top-4 rounded-md border border-primary/20 bg-primary/10 text-primary hover:bg-primary/10">Best value</Badge>
                                )}
                                <CardHeader className="min-h-[178px] pb-5">
                                    <p className="text-xs font-extrabold uppercase text-muted-foreground">{String(i + 1).padStart(2, '0')} / plan</p>
                                    <CardTitle className="pt-3 font-headline text-xl">{plan.name}</CardTitle>
                                    <CardDescription className="pt-2">
                                        <span className="text-4xl font-extrabold leading-none text-foreground">${plan.price}</span>
                                        <span className="text-xs text-muted-foreground"> prepaid</span>
                                    </CardDescription>
                                    <p className="min-h-5 text-sm leading-5 text-muted-foreground">
                                        {plan.price_monthly !== plan.price ? (
                                            <>Equivalent to ${plan.price_monthly.toFixed(2)}/month</>
                                        ) : (
                                            <>Standard 1-month prepaid access</>
                                        )}
                                    </p>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <ul className="space-y-3 border-t border-white/[0.08] pt-5">
                                        {plan.features.map((feature) => (
                                            <li key={feature} className="flex items-center gap-3">
                                                <Check className="h-4 w-4 flex-shrink-0 text-primary" />
                                                <span className="text-sm leading-5 text-muted-foreground">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Button asChild className="w-full" variant={plan.isPopular ? "default" : "outline"}>
                                        <Link href={plan.url}>Choose {plan.name}</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                    <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-lg border border-white/[0.08] bg-card/60 p-5 text-center sm:flex-row sm:text-left">
                        <p className="text-xs text-muted-foreground sm:text-sm">
                            Every paid plan includes the full service you tested: 24,000+ live channels, 80,000+ VOD titles, EPG TV guide, and 2 simultaneous connections.
                        </p>
                        <Button asChild variant="outline" size="sm" className="shrink-0">
                            <Link href="/pricing">
                                View Full Pricing Page <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                            </Link>
                        </Button>
                    </div>
                </Container>
            </Section>

            {/* 6. Why Trust TryIPTV for Your Free Trial */}
            <Section className="border-t border-white/[0.06]">
                <Container>
                    <SectionHeader
                        eyebrow="Why TryIPTV"
                        title="Why Trust TryIPTV for Your Free Trial?"
                        subtitle="Our trial is completely genuine: no payment method is collected at signup, so you cannot be auto-charged when your 24 hours end. When the trial finishes, the next move is entirely yours."
                    />
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {trustMetrics.map((item) => (
                            <div
                                key={item.title}
                                className="rounded-lg border border-white/[0.09] bg-card p-6 text-center shadow-[0_18px_60px_rgba(0,0,0,0.2)]"
                            >
                                <div className="mx-auto mb-3 grid h-11 w-11 place-items-center rounded-md border border-primary/20 bg-primary/[0.06] text-primary">
                                    <item.icon className="h-5 w-5" />
                                </div>
                                <span className="font-headline text-3xl font-extrabold text-foreground">{item.metric}</span>
                                <h3 className="mt-1 font-headline text-base font-extrabold text-foreground">{item.title}</h3>
                                <p className="mt-1.5 text-xs leading-5 text-muted-foreground">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>
            
            {/* 7. FAQ Section */}
            <Section id="faq" className="border-t border-white/[0.06] bg-[#070a08]">
                <Container>
                    <SectionHeader
                        eyebrow="Questions &amp; Answers"
                        title="IPTV Free Trial FAQ"
                        subtitle="Quick, self-contained answers to the questions viewers ask most often before starting an IPTV free trial."
                    />
                    <FaqList items={trialFaqs} />
                    <div className="mt-10 text-center">
                        <p className="text-sm text-muted-foreground sm:text-base">
                            Still have questions?{" "}
                            <Link href="/contact" className="font-semibold text-primary underline underline-offset-4 hover:text-primary/80">
                                Contact our 24/7 support team
                            </Link>
                            . Available via WhatsApp and email.
                        </p>
                    </div>
                </Container>
            </Section>

            {/* 8. Final CTA Section */}
            <Section className="border-t border-white/[0.06]">
                <Container>
                    <div className="relative overflow-hidden rounded-lg border border-primary/25 bg-[#0b100d] p-7 sm:p-8 md:p-10 lg:flex lg:items-center lg:justify-between lg:text-left">
                        <div className="absolute inset-y-0 left-0 w-1 bg-primary" />
                        <div className="max-w-2xl">
                            <p className="eyebrow mb-3 flex items-center justify-center gap-2 lg:justify-start">
                                <Sparkles className="h-4 w-4 text-primary" /> Start Streaming Tonight
                            </p>
                            <h2 className="font-headline text-3xl font-extrabold leading-[1.12] sm:text-4xl">
                                Start Your Free IPTV Trial Tonight
                            </h2>
                            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted-foreground lg:mx-0">
                                24 hours of full access to TryIPTV on every device you own. No credit card, no auto-renew, and no hidden catch. If the service earns your subscription, choose a plan. If not, walk away owing nothing.
                            </p>
                        </div>
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:ml-10 lg:mt-0 lg:shrink-0">
                            <Button asChild size="lg">
                                <a href="https://wa.me/447848197761" target="_blank" rel="noopener noreferrer">
                                    <SiWhatsapp className="mr-2 h-4 w-4" /> Start Free Trial on WhatsApp
                                </a>
                            </Button>
                            <Button asChild size="lg" variant="outline">
                                <Link href="/pricing">
                                    See Plans &amp; Pricing
                                </Link>
                            </Button>
                        </div>
                    </div>
                </Container>
            </Section>
        </>
    );
}
