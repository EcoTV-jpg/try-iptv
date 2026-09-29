import Link from "next/link";
import { MonitorPlay } from "lucide-react";

export function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="TryIPTV homepage">
      <span className="grid h-9 w-9 place-items-center rounded-md border border-primary/35 bg-primary/[0.08] text-primary transition-colors group-hover:bg-primary/[0.14]">
        <MonitorPlay className="h-5 w-5" />
      </span>
      <strong className="font-headline text-lg font-extrabold">
        Try<span className="text-primary">IPTV</span>
      </strong>
    </Link>
  );
}
