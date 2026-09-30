import { cn } from '@/lib/utils';
import type React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function Container({ children, className, as: Component = 'div' }: ContainerProps) {
  return (
    <Component className={cn('mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-10', className)}>
      {children}
    </Component>
  );
}
