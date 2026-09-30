import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Lock, CheckCircle2, Zap } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { SiWhatsapp } from "react-icons/si";
import { Schema } from "@/components/shared/Schema";
import { getCheckoutPageData } from "@/lib/data/checkout-page";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";

export function generateMetadata(): Metadata {
    const meta = generatePageMetadata({
        title: "Order Activation",
        description: "Complete your TryIPTV subscription. Direct crypto payment with no recurring charges and 5–15 minute typical activation.",
        canonical: "/checkout",
    });

    return {
        ...meta,
        robots: {
            index: false,
            follow: true,
        },
    };
}

export default async function CheckoutPage() {
    const { breadcrumbSchema } = await getCheckoutPageData();

    return (
        <>
            <Schema id="breadcrumb" schema={breadcrumbSchema} />

            <Section className="relative overflow-hidden border-b border-white/[0.07] pt-12 pb-14 sm:pt-16 sm:pb-20">
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
                <Container className="relative text-center">
                    <Breadcrumb items={[{ label: "Checkout" }]} align="center" />
                    <SectionHeader 
                        as="h1"
                        eyebrow="5–15 Min Typical Activation"
                        title="Complete Your Order via WhatsApp"
                        subtitle="All TryIPTV plans are prepaid with secure crypto payments and zero automatic renewals. Contact our activation team on WhatsApp to finalize your subscription."
                    />
                </Container>
            </Section>

            <Section>
                <Container>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
                        <div className="order-2 md:order-1">
                            <Card>
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <CardTitle as="h2" className="font-headline text-xl sm:text-2xl font-extrabold">Payment & Activation</CardTitle>
                                        <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                            <Lock className="h-3.5 w-3.5 text-primary" /> Direct & Encrypted
                                        </span>
                                    </div>
                                    <CardDescription>Prepaid crypto billing with no automatic renewals or recurring charges.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-5">
                                        <div className="rounded-lg border border-white/[0.08] bg-[#101512] p-4 space-y-3 text-sm">
                                            <p className="font-semibold text-foreground">How Order Activation Works:</p>
                                            <div className="flex items-start gap-2.5 text-xs text-muted-foreground">
                                                <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                                <span><strong className="text-foreground">Step 1:</strong> Tap below to message our activation team on WhatsApp with your desired plan.</span>
                                            </div>
                                            <div className="flex items-start gap-2.5 text-xs text-muted-foreground">
                                                <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                                <span><strong className="text-foreground">Step 2:</strong> Receive payment instructions (Crypto / USDT / BTC accepted).</span>
                                            </div>
                                            <div className="flex items-start gap-2.5 text-xs text-muted-foreground">
                                                <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                                <span><strong className="text-foreground">Step 3:</strong> Once confirmed, receive your M3U playlist URL and Xtream Codes within 5–15 minutes.</span>
                                            </div>
                                        </div>

                                        <div className="pt-2">
                                            <Button asChild size="lg" className="w-full">
                                                <Link href="https://wa.me/447848197761" target="_blank" rel="noopener noreferrer">
                                                    <SiWhatsapp className="mr-2 h-4 w-4" />
                                                    Contact on WhatsApp to Complete Order
                                                </Link>
                                            </Button>
                                        </div>
                                        <p className="text-center text-xs text-muted-foreground">
                                            Typical activation in 5–15 minutes • 2 simultaneous connections included
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="order-1 md:order-2">
                            <Card className="border-primary/30 bg-[#0d1711] shadow-[0_20px_60px_rgba(0,240,120,0.07)]">
                                <CardHeader>
                                    <p className="eyebrow mb-1">Standard Plan</p>
                                    <CardTitle as="h2" className="font-headline text-xl sm:text-2xl font-extrabold">Order Summary</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex justify-between text-sm">
                                        <p className="text-muted-foreground">12-Month Prepaid Plan</p>
                                        <p className="font-semibold text-foreground">$90.00</p>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <p className="text-muted-foreground">Simultaneous Connections</p>
                                        <p className="font-semibold text-primary">2 Devices Included</p>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <p className="text-muted-foreground">Live Channels & VOD</p>
                                        <p className="font-semibold text-foreground">24,000+ Channels / 80k+ VOD</p>
                                    </div>
                                    <hr className="border-white/[0.08]"/>
                                    <div className="flex justify-between items-baseline">
                                        <p className="font-headline font-extrabold text-foreground">Total due today</p>
                                        <p className="font-headline text-3xl font-extrabold text-foreground">$90.00</p>
                                    </div>
                                    <div className="rounded-md border border-white/[0.08] bg-[#101512] p-4 text-xs space-y-2">
                                        <div className="flex items-center gap-2 text-foreground font-semibold">
                                            <ShieldCheck className="h-4 w-4 text-primary" />
                                            <span>Prepaid & Non-Recurring</span>
                                        </div>
                                        <p className="text-muted-foreground">
                                            No hidden fees or automatic billing cycles. Renewable only upon manual request.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </Container>
            </Section>
        </>
    );
}
