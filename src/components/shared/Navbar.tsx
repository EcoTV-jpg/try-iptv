
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/shared/Container';
import { Logo } from '@/components/shared/Logo';
import { MobileNav } from '@/components/shared/MobileNav';
import { navLinks } from '@/lib/site-data/nav';
import { ArrowUpRight } from 'lucide-react';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.07] bg-background/90 backdrop-blur-xl">
      <Container>
        <div className="flex h-[72px] items-center">
          <Logo />
          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center space-x-7 lg:flex" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-muted-foreground transition-colors duration-200 hover:text-foreground"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <Button asChild className="hidden sm:inline-flex">
              <Link href="/iptv-free-trial">
                Start free trial
                <ArrowUpRight />
              </Link>
            </Button>
            <MobileNav />
          </div>
        </div>
      </Container>
    </header>
  );
}
