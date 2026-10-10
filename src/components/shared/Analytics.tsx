'use client';

import { useEffect } from 'react';

const GA_ID = 'G-76FDX71VDQ';

export function Analytics() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      return;
    }

    let loaded = false;

    const loadGA = () => {
      if (loaded) return;
      loaded = true;

      (window as any).dataLayer = (window as any).dataLayer || [];
      function gtag(...args: any[]) {
        (window as any).dataLayer.push(args);
      }
      gtag('js', new Date());
      gtag('config', GA_ID, {
        page_path: window.location.pathname,
      });

      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
      script.async = true;
      document.head.appendChild(script);
    };

    const events = ['scroll', 'touchstart', 'click', 'keydown', 'pointerdown'];
    const handleInteraction = () => {
      loadGA();
      events.forEach((e) => window.removeEventListener(e, handleInteraction));
    };

    events.forEach((e) =>
      window.addEventListener(e, handleInteraction, { passive: true, once: true })
    );

    const timer = setTimeout(loadGA, 4500);

    return () => {
      clearTimeout(timer);
      events.forEach((e) => window.removeEventListener(e, handleInteraction));
    };
  }, []);

  return null;
}
