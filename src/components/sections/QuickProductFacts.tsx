import { Container } from "../shared/Container";
import { 
  CirclePlay, 
  Layers, 
  Clock, 
  KeyRound, 
  CreditCard, 
  RefreshCwOff, 
  Tv, 
  Zap 
} from "lucide-react";

const facts = [
  {
    icon: CirclePlay,
    label: "Free Trial",
    value: "24 Hours ($0 Free)",
    sub: "No credit card required"
  },
  {
    icon: Layers,
    label: "Simultaneous Streams",
    value: "2 Connections",
    sub: "Included on every plan"
  },
  {
    icon: Clock,
    label: "Account Activation",
    value: "5–15 Minutes",
    sub: "Delivered via email"
  },
  {
    icon: KeyRound,
    label: "Login Formats",
    value: "Xtream Codes & M3U",
    sub: "Universal app compatibility"
  },
  {
    icon: CreditCard,
    label: "Billing Structure",
    value: "Flat Prepaid",
    sub: "Plans from $16 (1–12 mos)"
  },
  {
    icon: RefreshCwOff,
    label: "Automatic Renewal",
    value: "Zero Auto-Rebill",
    sub: "No stored recurring charges"
  },
  {
    icon: Tv,
    label: "Hardware Support",
    value: "All Major Devices",
    sub: "Fire TV, Android, Apple, Smart TVs"
  },
  {
    icon: Zap,
    label: "Stream Resolution",
    value: "HD, FHD & 4K",
    sub: "Source-dependent quality"
  }
];

export function QuickProductFacts() {
  return (
    <section className="border-b border-white/[0.06] bg-[#070a08] py-8 sm:py-10">
      <Container>
        <div className="mb-4 text-center">
          <p className="eyebrow">Service Summary at a Glance</p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
          {facts.map((fact) => (
            <div 
              key={fact.label} 
              className="flex flex-col rounded-lg border border-white/[0.07] bg-card/60 p-3 text-center transition-colors hover:border-white/20"
            >
              <div className="mx-auto mb-2 grid h-8 w-8 place-items-center rounded-md border border-primary/20 bg-primary/10 text-primary">
                <fact.icon className="h-4 w-4" />
              </div>
              <p className="text-[11px] font-semibold text-muted-foreground">{fact.label}</p>
              <p className="mt-0.5 text-xs font-bold text-foreground sm:text-sm">{fact.value}</p>
              <p className="mt-1 text-[10px] text-muted-foreground">{fact.sub}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
