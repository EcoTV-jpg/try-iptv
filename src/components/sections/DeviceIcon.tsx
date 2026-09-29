import type { ComponentType } from "react";
import { Flame, Monitor, Smartphone, Tablet, Tv } from "lucide-react";
import {
  SiAndroid,
  SiAppletv,
  SiLg,
  SiMacos,
  SiRoku,
  SiSamsung,
} from "react-icons/si";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface DeviceIconProps {
  name: string;
  iconName: string;
  href: string;
}

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  Smartphone,
  Tablet,
  SiMacos,
  Macos: SiMacos,
  SiAndroid,
  Android: SiAndroid,
  Monitor,
  SiRoku,
  Roku: SiRoku,
  SiSamsung,
  Samsung: SiSamsung,
  SiLg,
  Lg: SiLg,
  Flame,
  Tv,
  SiAppletv,
  Appletv: SiAppletv,
};

export function DeviceIcon({ name, iconName, href }: DeviceIconProps) {
  const Icon = iconMap[iconName] || iconMap[`Si${iconName}`] || Tv;

  const isInternal = href.startsWith('/');
  const Component = isInternal ? Link : 'a';

  return (
    <Component
      href={href}
      className={cn(
        "group flex min-h-28 flex-col items-center justify-center gap-3 rounded-lg border border-white/[0.09] bg-card px-3 text-center transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-white/20 motion-reduce:transform-none",
        !isInternal && "cursor-pointer",
        href === '#' && "pointer-events-none opacity-50"
      )}
      aria-label={name}
    >
      <span className="grid h-10 w-10 place-items-center text-muted-foreground transition-colors duration-200 group-hover:text-primary">
        <Icon className="h-7 w-7" />
      </span>
      <span className="text-xs font-extrabold leading-4 text-foreground">{name}</span>
    </Component>
  );
}
