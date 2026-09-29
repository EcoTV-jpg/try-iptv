import type React from 'react';
import { cn } from '@/lib/utils';

type SectionProps = React.ComponentPropsWithoutRef<'section'> & {
  variant?: 'default' | 'alt';
};

export function Section({ className, variant = 'default', ...props }: SectionProps) {
  return (
    <section
      className={cn(
        'py-16 sm:py-20 lg:py-20 xl:py-24',
        variant === 'alt' && 'border-y border-white/[0.06] bg-[#070a08]',
        className
      )}
      {...props}
    />
  );
}
