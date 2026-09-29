import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Container } from '@/components/shared/Container';
import { Section } from '@/components/shared/Section';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { ContactForm } from '@/components/shared/ContactForm';
import SemanticContent from '@/components/shared/SemanticContent';
import { getContactPageData } from '@/lib/data/contact-page';
import { Schema } from '@/components/shared/Schema';
import { generateMetadata as generatePageMetadata } from '@/lib/site-config';
import { Mail, MessageCircle, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

export function generateMetadata(): Metadata {
    return generatePageMetadata({
        title: "Contact Us",
        description: "Get in touch with our team. Whether you have a question about TryIPTV or need support, we're here to help.",
        canonical: "/contact",
    });
}

export default async function ContactPage() {
    const { breadcrumbSchema, semanticContent } = await getContactPageData();

    return (
        <>
            <Schema id="breadcrumb" schema={breadcrumbSchema} />
            <SemanticContent 
                primaryEntity={semanticContent.primaryEntity}
                relatedEntities={semanticContent.relatedEntities}
                semanticClusters={semanticContent.semanticClusters}
                contextualKeywords={semanticContent.contextualKeywords}
            />

            <Section className="relative overflow-hidden border-b border-white/[0.07] pt-12 pb-14 sm:pt-16 sm:pb-20">
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
                <Container className="relative text-center">
                    <Breadcrumb items={[{ label: "Contact Us" }]} align="center" />
                    <SectionHeader
                        as="h1"
                        eyebrow="Support when you need it"
                        title="Contact TryIPTV"
                        subtitle="Tell us what you need help with and our support team will get back to you."
                    />
                </Container>
            </Section>

            <Section>
                <Container>
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.3fr] lg:gap-12">
                        {/* Direct Channels Column */}
                        <div className="space-y-6">
                            <Card>
                                <CardHeader>
                                    <p className="eyebrow mb-1">Direct support</p>
                                    <CardTitle className="font-headline text-2xl font-extrabold">Instant Assistance</CardTitle>
                                    <CardDescription>Connect directly with our support specialists for setup, billing, or technical help.</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <a
                                        href="https://wa.me/447848197761"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-start gap-4 rounded-lg border border-white/[0.08] bg-[#101512] p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/[0.05]"
                                    >
                                        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-primary/20 bg-primary/[0.06] text-primary">
                                            <MessageCircle className="h-5 w-5" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between">
                                                <p className="text-sm font-extrabold text-foreground group-hover:text-primary">WhatsApp Live Chat</p>
                                                <span className="flex items-center gap-1.5 text-[10px] font-bold text-primary">
                                                    <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Online
                                                </span>
                                            </div>
                                            <p className="mt-1 text-xs text-muted-foreground">Fastest response time, typically under 5 minutes.</p>
                                        </div>
                                    </a>

                                    <a
                                        href="mailto:support@tryiptv.com"
                                        className="group flex items-start gap-4 rounded-lg border border-white/[0.08] bg-[#101512] p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/[0.05]"
                                    >
                                        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-primary/20 bg-primary/[0.06] text-primary">
                                            <Mail className="h-5 w-5" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm font-extrabold text-foreground group-hover:text-primary">Email Support</p>
                                            <p className="mt-1 text-xs text-muted-foreground">support@tryiptv.com • Checked around the clock.</p>
                                        </div>
                                    </a>
                                </CardContent>
                            </Card>

                            <div className="rounded-lg border border-white/[0.09] bg-[#070a08] p-6 space-y-4">
                                <div className="flex items-center gap-3 text-xs font-semibold text-muted-foreground">
                                    <Clock className="h-4 w-4 text-primary" />
                                    <span>24/7 / 365 Days Availability</span>
                                </div>
                                <div className="flex items-center gap-3 text-xs font-semibold text-muted-foreground">
                                    <ShieldCheck className="h-4 w-4 text-primary" />
                                    <span>Encrypted &amp; Confidential Communication</span>
                                </div>
                                <div className="pt-2 border-t border-white/[0.08]">
                                    <Link
                                        href="/iptv-free-trial"
                                        className="inline-flex items-center gap-2 text-xs font-extrabold text-primary hover:underline"
                                    >
                                        Looking for a trial? Request 24h access <ArrowRight className="h-3 w-3" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form Column */}
                        <div>
                            <Card>
                                <CardHeader>
                                    <p className="eyebrow mb-1">Send a message</p>
                                    <CardTitle className="font-headline text-2xl font-extrabold">Send Us a Message</CardTitle>
                                    <CardDescription>
                                        Have a question or need support? Fill out the form below and we&apos;ll get back to you shortly.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ContactForm />
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </Container>
            </Section>
        </>
    );
}
