import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { CreditCard, ShieldCheck, Lock } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { SiWhatsapp } from "react-icons/si";
import SemanticContent from "@/components/shared/SemanticContent";
import { Schema } from "@/components/shared/Schema";
import { getCheckoutPageData } from "@/lib/data/checkout-page";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";

export function generateMetadata(): Metadata {
    const meta = generatePageMetadata({
        title: "Secure Checkout",
        description: "Complete your TryIPTV subscription securely. Enter your payment details to get instant access to thousands of channels.",
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
    const { breadcrumbSchema, semanticContent } = await getCheckoutPageData();

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
                    <Breadcrumb items={[{ label: "Checkout" }]} align="center" />
                    <SectionHeader 
                        as="h1"
                        eyebrow="Instant Activation"
                        title="Contact Us to Purchase"
                        subtitle="To complete your purchase, please contact us via WhatsApp. Our team is ready to assist you."
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
                                        <CardTitle className="font-headline text-xl sm:text-2xl font-extrabold">Payment Information</CardTitle>
                                        <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                            <Lock className="h-3.5 w-3.5 text-primary" /> 256-bit SSL
                                        </span>
                                    </div>
                                    <CardDescription>All transactions are secure and encrypted.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-5">
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email Address</Label>
                                            <Input id="email" type="email" placeholder="you@example.com" disabled />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="card-number">Card Details</Label>
                                            <div className="relative">
                                                <Input id="card-number" placeholder="Card Number" disabled />
                                                <CreditCard className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="expiry">Expiry Date</Label>
                                                <Input id="expiry" placeholder="MM / YY" disabled />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="cvc">CVC</Label>
                                                <Input id="cvc" placeholder="CVC" disabled />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="name">Cardholder Name</Label>
                                            <Input id="name" placeholder="Full Name" disabled />
                                        </div>
                                        <div className="pt-2">
                                            <Button asChild size="lg" className="w-full">
                                                <Link href="https://wa.me/447848197761" target="_blank" rel="noopener noreferrer">
                                                    <SiWhatsapp className="mr-2 h-4 w-4" />
                                                    Contact on WhatsApp to Complete
                                                </Link>
                                            </Button>
                                        </div>
                                        <p className="text-center text-xs text-muted-foreground">
                                            Instant activation after confirmation • No waiting period
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="order-1 md:order-2">
                            <Card className="border-primary/30 bg-[#0d1711] shadow-[0_20px_60px_rgba(0,240,120,0.07)]">
                                <CardHeader>
                                    <p className="eyebrow mb-1">Your order</p>
                                    <CardTitle className="font-headline text-xl sm:text-2xl font-extrabold">Order Summary</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex justify-between text-sm">
                                        <p className="text-muted-foreground">12-Month Plan</p>
                                        <p className="font-semibold text-foreground">$90.00</p>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <p className="text-muted-foreground">Discount applied</p>
                                        <p className="font-semibold text-primary">-$102.00</p>
                                    </div>
                                    <hr className="border-white/[0.08]"/>
                                    <div className="flex justify-between items-baseline">
                                        <p className="font-headline font-extrabold text-foreground">Total due today</p>
                                        <p className="font-headline text-3xl font-extrabold text-foreground">$90.00</p>
                                    </div>
                                    <div className="rounded-md border border-white/[0.08] bg-[#101512] p-4 text-xs space-y-2">
                                        <div className="flex items-center gap-2 text-foreground font-semibold">
                                            <ShieldCheck className="h-4 w-4 text-primary" />
                                            <span>7-Day Money-Back Guarantee</span>
                                        </div>
                                        <p className="text-muted-foreground">
                                            Full refund within the first 7 days if you&apos;re not completely satisfied. Cancel anytime.
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
