import { cn } from '@/lib/utils';
import type React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  eyebrow?: string;
  align?: 'left' | 'center';
  as?: 'h1' | 'h2';
  badge?: React.ReactNode;
}

export function SectionHeader({
  title,
  subtitle,
  className,
  eyebrow,
  align = 'center',
  as: Heading = 'h2',
  badge,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-10 max-w-3xl sm:mb-12",
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      {badge && <div className="mb-4">{badge}</div>}
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <Heading
        className={cn(
          "font-headline font-extrabold leading-[1.12]",
          Heading === 'h1'
            ? "text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.06]"
            : "text-3xl sm:text-4xl lg:text-[2.625rem]"
        )}
      >
        {title}
      </Heading>
      {subtitle && (
        <p
          className={cn(
            "mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg",
            align === 'center' && 'mx-auto'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
