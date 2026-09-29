'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { getRelatedPostsAction } from '@/app/actions';
import { Skeleton } from '../ui/skeleton';

interface RelatedLink {
  href: string;
  title: string;
}

const RelatedLinksSkeleton = () => (
    <div className="space-y-3">
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-5 w-2/3" />
        <Skeleton className="h-5 w-5/6" />
    </div>
);

export default function InternalLinks({ currentId }: { currentId: string }) {
  const [relatedLinks, setRelatedLinks] = useState<RelatedLink[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRelatedPosts = async () => {
      setIsLoading(true);
      const posts = await getRelatedPostsAction(currentId);
      const links = posts.map(post => ({
        href: `/devices/${post.id}`,
        title: post.title,
      }));
      setRelatedLinks(links);
      setIsLoading(false);
    };

    fetchRelatedPosts();
  }, [currentId]);

  if (!isLoading && relatedLinks.length === 0) {
    return null;
  }
  
  return (
    <Card className="not-prose">
      <CardHeader>
        <p className="eyebrow mb-1">Explore</p>
        <CardTitle className="font-headline text-lg font-extrabold">Related Guides</CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
            <RelatedLinksSkeleton />
        ) : (
            <ul className="space-y-3">
                {relatedLinks.map((link) => (
                    <li key={link.href}>
                        <Link
                            href={link.href}
                            title={link.title}
                            className="group flex items-center justify-between text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                            <span className="line-clamp-1 group-hover:text-primary">{link.title}</span>
                            <ArrowRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-primary" />
                        </Link>
                    </li>
                ))}
            </ul>
        )}
      </CardContent>
    </Card>
  );
}
