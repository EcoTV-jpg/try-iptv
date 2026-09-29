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
        "rounded-lg border border-white/[0.09] bg-card p-6 text-card-foreground shadow-[0_18px_60px_rgba(0,0,0,0.2)] transition-all duration-200 hover:-translate-y-0.5 hover:border-white/20",
        align === 'center' && "text-center",
        className
      )}
    >
      {Icon && (
        <div
          className={cn(
            "mb-5 grid h-11 w-11 place-items-center rounded-md border border-primary/20 bg-primary/[0.06] text-primary",
            align === 'center' && "mx-auto"
          )}
        >
          <Icon className="h-5 w-5" />
        </div>
      )}
      <h3 className="font-headline text-lg sm:text-xl font-extrabold leading-7 text-foreground">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
