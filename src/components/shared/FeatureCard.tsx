import type React from "react";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon?: LucideIcon | React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  className?: string;
  align?: 'left' | 'center';
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
  align = 'left',
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "flex h-full flex-col rounded-2xl border border-white/[0.08] bg-[#07080a] p-7 text-card-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-all duration-200 hover:border-white/[0.16] hover:bg-[#090b0c] motion-safe:hover:-translate-y-0.5",
        align === 'center' && "text-center",
        className
      )}
    >
      {Icon && (
        <div
          className={cn(
            "mb-7 grid h-11 w-11 place-items-center rounded-lg border border-white/[0.09] bg-white/[0.035] text-primary",
            align === 'center' && "mx-auto"
          )}
        >
          <Icon className="h-5 w-5" />
        </div>
      )}
      <h3 className="font-headline text-[19px] font-semibold leading-7 text-foreground">
        {title}
      </h3>
      <p className="mt-3 text-[15px] leading-7 text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
