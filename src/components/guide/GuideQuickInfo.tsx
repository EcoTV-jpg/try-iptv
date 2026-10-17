import React from "react";
import Link from "next/link";
import { Tv, KeyRound, Wrench, ShieldCheck } from "lucide-react";

const LOGIN_TERMS = [
  { phrase: "Xtream Codes", href: "/guides/what-are-xtream-codes" },
  { phrase: "M3U", href: "/guides/what-is-m3u" },
] as const;

function LoginFormatValue({ value }: { value: string }) {
  const nodes: React.ReactNode[] = [];
  let rest = value;
  let key = 0;

  while (rest.length > 0) {
    let earliest: { index: number; phrase: string; href: string } | null = null;
    for (const term of LOGIN_TERMS) {
      const index = rest.indexOf(term.phrase);
      if (index !== -1 && (earliest === null || index < earliest.index)) {
        earliest = { index, phrase: term.phrase, href: term.href };
      }
    }
    if (!earliest) {
      nodes.push(rest);
      break;
    }
    if (earliest.index > 0) nodes.push(rest.slice(0, earliest.index));
    nodes.push(
      <Link key={key} href={earliest.href} className="text-primary underline underline-offset-2">
        {earliest.phrase}
      </Link>
    );
    key += 1;
    rest = rest.slice(earliest.index + earliest.phrase.length);
  }

  return <>{nodes}</>;
}

interface GuideQuickInfoProps {
  device?: string;
  setupMethod?: string;
  loginFormat?: string;
  difficulty?: string;
  className?: string;
}

export function GuideQuickInfo({
  device = "Amazon Fire TV Stick",
  setupMethod = "IPTV Player + Credentials",
  loginFormat = "Xtream Codes or M3U",
  difficulty = "Simple Guided Setup",
  className,
}: GuideQuickInfoProps) {
  const items = [
    { label: "Device", value: device, icon: Tv },
    { label: "Setup Method", value: setupMethod, icon: Wrench },
    { label: "Login Format", value: loginFormat, icon: KeyRound },
    { label: "Difficulty", value: difficulty, icon: ShieldCheck },
  ];

  return (
    <div
      className={`grid grid-cols-2 lg:grid-cols-4 gap-3 my-6 rounded-xl border border-white/[0.08] bg-[#07080a] p-3.5 sm:p-4 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] ${className || ""}`}
      aria-label="Quick setup specifications"
    >
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <div key={index} className="flex flex-col justify-between py-0.5">
            <span className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-primary/80 mb-1">
              <Icon className="h-3 w-3 shrink-0 text-primary" aria-hidden="true" />
              {item.label}
            </span>
            <span className="text-xs sm:text-sm font-semibold text-foreground truncate" title={item.value}>
              {item.label === "Login Format" ? <LoginFormatValue value={item.value} /> : item.value}
            </span>
          </div>
        );
      })}
    </div>
  );
}
