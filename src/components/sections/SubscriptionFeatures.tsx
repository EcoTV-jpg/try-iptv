import { Tv, Shield, MessageCircle, Smartphone, Film, Calendar } from "lucide-react";
import { Container } from "../shared/Container";
import { Section } from "../shared/Section";
import { SectionHeader } from "../shared/SectionHeader";
import { FeatureCard } from "../shared/FeatureCard";

const features = [
    { 
        icon: Smartphone, 
        title: "Broad Device Compatibility",
        description: "Android, Fire TV, Apple TV, Smart TVs, Windows, macOS, and MAG: stream across your preferred hardware."
    },
    { 
        icon: Tv, 
        title: "Smooth Streaming",
        description: "Optimized streaming infrastructure designed for consistent playback across live sports, news channels, and video on demand."
    },
    { 
        icon: Film, 
        title: "High Quality Video",
        description: "HD, Full HD, and 4K resolution where available from broadcast sources, featuring crisp picture and clear audio."
    },
    { 
        icon: Calendar, 
        title: "Smart EPG TV Guide",
        description: "Electronic Program Guide listings included so you can always check current and upcoming programming."
    },
    { 
        icon: Shield, 
        title: "Transparent Pricing",
        description: "Flat prepaid pricing with no hidden charges, unexpected contracts, or recurring automatic renewals."
    },
    { 
        icon: MessageCircle, 
        title: "24/7 Customer Support",
        description: "Technical assistance available whenever you need help configuring your playlist or player app via WhatsApp and email."
    },
];

export function SubscriptionFeatures() {
    return (
        <Section variant="alt" className="border-t border-white/[0.06]">
          <Container>
            <SectionHeader
              eyebrow="Streaming Features"
              title="Everything You Need to Stream"
              subtitle="Built for smooth everyday viewing: reliable infrastructure, simple setup, and crystal-clear picture quality."
            />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {features.map((feature, i) => (
                    <FeatureCard
                      key={i}
                      icon={feature.icon}
                      title={feature.title}
                      description={feature.description}
                    />
                ))}
            </div>
          </Container>
        </Section>
    );
}
