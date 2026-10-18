import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { howToArticles, getDeviceSlug } from '@/lib/how-to';

interface InternalLinksProps {
  currentId: string;
}

const CROSS_CLUSTER_LINKS = [
  {
    href: '/players',
    label: 'Browse IPTV players',
  },
  {
    href: '/setup',
    label: 'Universal IPTV setup guide',
  },
  {
    href: '/help',
    label: 'Help & troubleshooting',
  },
] as const;

export default function InternalLinks({ currentId }: InternalLinksProps) {
  // Deterministic related guides from static site data (Server Component)
  const relatedGuides = howToArticles
    .filter(article => article.id !== currentId)
    .slice(0, 5);

  if (relatedGuides.length === 0) {
    return null;
  }

  return (
    <Card className="not-prose">
      <CardHeader className="pb-3">
        <p className="eyebrow mb-1">Explore</p>
        <h2 className="font-headline text-lg font-extrabold text-foreground">Related Setup Guides</h2>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {relatedGuides.map((guide) => (
            <li key={guide.id}>
              <Link
                href={`/devices/${getDeviceSlug(guide.id)}`}
                title={guide.title}
                className="group flex items-center justify-between text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <span className="line-clamp-1 group-hover:text-primary">{guide.title}</span>
                <ArrowRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-primary" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-4 space-y-2.5 border-t border-white/[0.08] pt-3">
          <Link
            href="/devices"
            className="group flex items-center justify-between text-xs font-semibold text-primary transition-colors hover:underline"
          >
            <span>Browse all device guides</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
          {CROSS_CLUSTER_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex items-center justify-between text-xs font-medium text-muted-foreground transition-colors hover:text-primary hover:underline"
            >
              <span>{link.label}</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
