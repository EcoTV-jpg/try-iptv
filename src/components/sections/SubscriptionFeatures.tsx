import { Tv, Shield, MessageCircle, Smartphone, Film, Trophy, Clock, GitCommit } from "lucide-react";
import { Container } from "../shared/Container";
import { Section } from "../shared/Section";
import { SectionHeader } from "../shared/SectionHeader";
import { FeatureCard } from "../shared/FeatureCard";

const features = [
    { 
        icon: Tv, 
        title: "24,000+ Live Channels",
        description: "Access premium channels from the USA, UK, Canada, and worldwide, covering news, entertainment, and kids' programming."
    },
    { 
        icon: Film, 
        title: "80,000+ VOD Library",
        description: "Stream the latest movies and binge-worthy TV series. Our on-demand library is updated daily with new releases and classics."
    },
    { 
        icon: Smartphone, 
        title: "Multi-Device Streaming",
        description: "Watch on any device—Smart TV, Android, iOS, Fire Stick, and more. Your subscription works everywhere, at home or on the go."
    },
    { 
        icon: Clock, 
        title: "Instant Activation",
        description: "No waiting. Your IPTV subscription is activated within minutes of payment, with credentials delivered instantly to your email."
    },
    { 
        icon: Trophy, 
        title: "All Sports & PPV Events",
        description: "Never miss a game. Get live access to NFL, NBA, MLB, NHL, Premier League, UFC, Boxing, and all major PPV events."
    },
    { 
        icon: Shield, 
        title: "Anti-Freeze Technology",
        description: "Our advanced anti-freeze technology and load balancing ensure smooth, uninterrupted streaming with 99.9% uptime."
    },
    { 
        icon: MessageCircle,
        title: "24/7 Customer Support",
        description: "Get help whenever you need it. Our expert support team is available around the clock via live chat, email, and WhatsApp."
    },
    { 
        icon: GitCommit,
        title: "Electronic Program Guide (EPG)",
        description: "A full TV guide shows you what's on now and what's coming up. Set reminders and never miss your favorite shows."
    },
];

export function SubscriptionFeatures() {
    return (
        <Section variant="alt" className="border-t border-white/[0.06]">
          <Container>
            <SectionHeader
              eyebrow="Included features"
              title="What's Included in Every IPTV Subscription"
              subtitle="No matter which plan you choose, you get access to our complete feature set."
            />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
