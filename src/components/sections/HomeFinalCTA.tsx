import Link from "next/link";
import { Container } from "../shared/Container";
import { Section } from "../shared/Section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CirclePlay, ArrowRight } from "lucide-react";

export function HomeFinalCTA() {
  return (
    <Section className="py-16 sm:py-20 bg-gradient-to-b from-[#070a08] to-[#040605]">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 text-xs">
            Risk-Free Evaluation
          </Badge>
          <h2 className="font-headline text-3xl font-extrabold text-foreground sm:text-4xl lg:text-5xl">
            See How TryIPTV Works on Your Own Device
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Experience our 25,000+ live channels, sports broadcasts, and 120,000+ VOD library with zero financial commitment. Test on your television, phone, or tablet before you decide.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-12 px-8 text-base">
              <Link href="/iptv-free-trial">
                <CirclePlay className="mr-2 h-4 w-4" /> Start Free Trial
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 px-8 text-base">
              <Link href="/pricing">
                Compare Plans <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            24-hour full access • No credit card required • 2 simultaneous streams • Instant setup
          </p>
        </div>
      </Container>
    </Section>
  );
}
