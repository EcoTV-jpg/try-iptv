import type React from 'react';
import { cn } from '@/lib/utils';

type SectionProps = React.ComponentPropsWithoutRef<'section'> & {
  variant?: 'default' | 'alt';
};

export function Section({ className, variant = 'default', ...props }: SectionProps) {
  return (
    <section
      className={cn(
        'py-14 sm:py-[4.5rem] lg:py-24 xl:py-[7.5rem]',
        variant === 'alt' && 'bg-[#07080a]',
        className
      )}
      {...props}
    />
  );
}
