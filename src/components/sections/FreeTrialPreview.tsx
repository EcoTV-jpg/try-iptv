import Link from "next/link";
import { Container } from "../shared/Container";
import { Section } from "../shared/Section";
import { Button } from "@/components/ui/button";
import { CirclePlay, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";

export function FreeTrialPreview() {
  return (
    <Section id="free-trial-preview" className="border-b border-white/[0.06] bg-[#070a08]">
      <Container>
        <div className="relative overflow-hidden rounded-2xl border border-primary/25 bg-[#0b100d] p-7 sm:p-10 lg:p-12">
          <div className="absolute inset-y-0 left-0 w-1.5 bg-primary" />
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                <ShieldCheck className="h-3.5 w-3.5" /> 100% Risk-Free Evaluation
              </div>
              <h2 className="font-headline text-2xl font-extrabold text-foreground sm:text-3xl lg:text-4xl">
                Test TryIPTV Free for 24 Hours
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Evaluate our live sports streams, picture clarity, and device compatibility directly in your home. No credit card, no auto-renewing subscription, and zero obligation.
              </p>
              <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-3 text-xs sm:text-sm">
                <div className="flex items-center gap-2 font-medium text-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> Zero Payment Info Needed
                </div>
                <div className="flex items-center gap-2 font-medium text-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> Full 25K+ Catalog Unlocked
                </div>
                <div className="flex items-center gap-2 font-medium text-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> 2 Simultaneous Connections
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-3 sm:flex-row lg:col-span-4 lg:flex-col">
              <Button asChild size="lg" className="w-full h-12 text-base">
                <Link href="/iptv-free-trial">
                  <CirclePlay className="mr-2 h-4 w-4" /> Start Free Trial
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full">
                <Link href="/iptv-free-trial">
                  Learn How Trial Works <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
