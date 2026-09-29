import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { FaqList } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Check, Tv, Zap, Shield, MessageCircle, Smartphone, UserCheck, Star } from "lucide-react";
import type { Metadata } from "next";
import { SiWhatsapp } from "react-icons/si";
import SemanticContent from "@/components/shared/SemanticContent";
import { getIptvFreeTrialPageData } from "@/lib/data/iptv-free-trial-page";
import { Schema } from "@/components/shared/Schema";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";

export function generateMetadata(): Metadata {
    const title = "IPTV Free Trial 2026: Start Streaming in 5 Minutes (No Card Needed)";
    const description = "Start your IPTV free trial today. Access 500+ live channels, sports & movies. No credit card required. Instant activation. Try before you buy →";
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

const trialFeatures = [
    { icon: Tv, text: "20,000+ Live Channels & VOD" },
    { icon: Zap, text: "4K/HD Stream Quality" },
    { icon: Smartphone, text: "All Device Compatibility" },
    { icon: MessageCircle, text: "24/7 Support During Trial" },
];

const whyChooseFeatures = [
    { icon: UserCheck, title: "No Credit Card Required", description: "We don't ask for payment details upfront. Enjoy a genuinely free, no-strings-attached trial experience." },
    { icon: Check, title: "Full Access to All Features", description: "Your trial includes our entire channel lineup, VOD library, and all premium features. No restrictions." },
    { icon: Shield, title: "24/7 Premium Support", description: "Even as a trial user, you get complete access to our expert support team, ready to help you anytime." },
    { icon: Star, title: "Easy, No-Pressure Upgrade", description: "Love the service? Upgrading to a full plan is simple. If not, the trial simply expires. No hassle." },
];

const howItWorksSteps = [
    {
        number: 1,
        title: "Contact Us on WhatsApp",
        description: "Click the 'Start Free Trial' button to open a chat with our team on WhatsApp.",
    },
    {
        number: 2,
        title: "Request Your Trial",
        description: "Send us a message asking for your free trial. Our team will generate your unique access credentials."
    },
    {
        number: 3,
        title: "Start Streaming Instantly",
        description: "Use the credentials and our easy setup guides to log in on your favorite device and start watching immediately."
    }
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

            {/* Hero Section */}
            <Section className="relative overflow-hidden border-b border-white/[0.07] pt-12 pb-14 sm:pt-16 sm:pb-20">
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
                <Container className="relative text-center">
                    <Breadcrumb items={[{ label: "IPTV Free Trial" }]} align="center" />
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/[0.06] px-3.5 py-1.5 text-xs font-extrabold text-primary">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-40" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                        </span>
                        No credit card required • Instant access
                    </div>
                    <h1 className="font-headline text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl max-w-3xl mx-auto">
                        Start Your IPTV Free Trial Now
                    </h1>
                    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                        20,000+ Channels. Zero Commitment. Instant Access.
                    </p>
                    <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Button asChild size="lg">
                            <a href="https://wa.me/447848197761" target="_blank" rel="noopener noreferrer">
                                <SiWhatsapp className="mr-2 h-4 w-4" />
                                Start Free Trial on WhatsApp
                            </a>
                        </Button>
                    </div>
                    <p className="mt-4 text-xs font-semibold text-muted-foreground">
                        No credit card required • Cancel anytime • 24hr access
                    </p>
                </Container>
            </Section>

            {/* What You Get Section */}
            <Section>
                <Container>
                    <SectionHeader
                        eyebrow="Trial features"
                        title="What You Get in Your IPTV Free Trial"
                        subtitle="Experience the full power of our premium IPTV service with absolutely no limitations during your 24-hour trial."
                    />
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {trialFeatures.map((feature, index) => (
                            <div
                                key={index}
                                className="rounded-lg border border-white/[0.09] bg-card p-6 text-center shadow-[0_18px_60px_rgba(0,0,0,0.2)] transition-all duration-200 hover:-translate-y-0.5 hover:border-white/20"
                            >
                                <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-md border border-primary/20 bg-primary/[0.06] text-primary">
                                    <feature.icon className="h-6 w-6" />
                                </div>
                                <p className="font-headline text-lg font-extrabold leading-6 text-foreground">{feature.text}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* How It Works Section */}
            <Section variant="alt" className="border-y border-white/[0.06]">
                <Container>
                    <SectionHeader
                        eyebrow="From message to playback"
                        title="Get Your Free Trial in 3 Easy Steps"
                        subtitle="We've made the process incredibly simple. You'll be streaming in just a few minutes."
                    />
                    <div className="grid grid-cols-1 border-y border-white/[0.09] md:grid-cols-3 md:divide-x md:divide-white/[0.09]">
                        {howItWorksSteps.map((step, i) => (
                            <div key={step.number} className="relative border-b border-white/[0.09] px-6 py-8 last:border-b-0 md:border-b-0 md:px-8 md:py-9">
                                {i < howItWorksSteps.length - 1 && (
                                    <span className="absolute right-0 top-12 hidden h-px w-10 translate-x-1/2 bg-primary/30 md:block" />
                                )}
                                <div className="mb-8 flex items-center justify-between">
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
                </Container>
            </Section>

            {/* Why Choose Our Trial Section */}
            <Section>
                <Container>
                    <SectionHeader
                        eyebrow="The TryIPTV difference"
                        title="Why Our Free Trial is Better"
                        subtitle="We offer a truly risk-free way to test our service, focused on quality and customer trust."
                    />
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {whyChooseFeatures.map((feature) => (
                            <div
                                key={feature.title}
                                className="flex items-start gap-4 rounded-lg border border-white/[0.09] bg-card p-6 shadow-[0_18px_60px_rgba(0,0,0,0.2)] transition-all duration-200 hover:-translate-y-0.5 hover:border-white/20"
                            >
                                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-primary/20 bg-primary/[0.06] text-primary">
                                    <feature.icon className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="font-headline text-lg font-extrabold leading-6 text-foreground">{feature.title}</h3>
                                    <p className="mt-1.5 text-sm leading-6 text-muted-foreground">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>
            
            {/* FAQ Section */}
            <Section id="faq" className="border-t border-white/[0.06]">
                <Container>
                    <SectionHeader
                        eyebrow="Trial FAQ"
                        title="Free Trial — Frequently Asked Questions"
                        subtitle="Got questions about the trial? We have answers."
                    />
                    <FaqList items={trialFaqs} />
                </Container>
            </Section>

            {/* Final CTA Section */}
            <CTA
                title="Ready to Start Streaming?"
                subtitle="Your 24-hour, all-access pass to the best entertainment is just one click away."
                eyebrow="Instant activation"
                buttonText="Start Free Trial on WhatsApp"
                buttonHref="https://wa.me/447848197761"
            />
        </>
    );
}
