import { Container } from "../shared/Container";

const facts = [
  { label: "Free trial", value: "24 hours" },
  { label: "Starting price", value: "$16" },
  { label: "Connections", value: "2 simultaneous" },
  { label: "Billing", value: "Prepaid" },
  { label: "Auto-renewal", value: "No" },
  { label: "Login formats", value: "Xtream Codes & M3U" },
  { label: "Activation", value: "Typically 5–15 minutes" },
  { label: "Devices", value: "Smart TVs, Fire TV, Android, Apple TV, Windows, Mac & more" },
] as const;

export function WhatYouGet() {
  return (
    <section id="what-you-get" className="bg-[#050706] px-4 pt-2 pb-8 sm:px-6 sm:pb-10 lg:px-8">
      <Container>
        <h2 className="font-headline text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          What You Get With TryIPTV
        </h2>
        <dl className="mt-4 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.label} className="bg-[#07080a] px-4 py-3 sm:px-4 sm:py-3.5">
              <dt className="text-[11px] font-mono font-semibold uppercase tracking-[0.08em] text-muted-foreground/75">
                {fact.label}
              </dt>
              <dd className="mt-1 text-[14px] sm:text-[14.5px] font-semibold leading-snug text-foreground">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
