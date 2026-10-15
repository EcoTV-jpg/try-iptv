"use client";

import { useEffect, useId, useRef } from "react";
import Script from "next/script";

type TurnstileApi = {
  render: (
    element: HTMLElement,
    options: { sitekey: string; theme?: string },
  ) => string;
  remove: (widgetId: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

type TurnstileFieldProps = {
  theme?: "auto" | "light" | "dark";
};

/**
 * Loads Cloudflare Turnstile only when a contact form mounts (not globally).
 * Uses explicit render so the widget still appears when the script loads after
 * the form (ContactSheet open) or on remount.
 *
 * Avoid `turnstile.ready()` — Next.js Script injects api.js with async, and
 * Cloudflare rejects ready() in that mode.
 */
export function TurnstileField({ theme = "auto" }: TurnstileFieldProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const sitekey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const reactId = useId();
  const scriptId = `cf-turnstile-${reactId.replace(/:/g, "")}`;

  const renderWidget = () => {
    const container = containerRef.current;
    const turnstile = window.turnstile;
    if (!container || !turnstile || !sitekey) return;

    if (widgetIdRef.current) {
      turnstile.remove(widgetIdRef.current);
      widgetIdRef.current = null;
    }

    container.innerHTML = "";
    widgetIdRef.current = turnstile.render(container, { sitekey, theme });
  };

  useEffect(() => {
    if (window.turnstile) {
      renderWidget();
    }

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
    // sitekey/theme are build-time / stable props for this field
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sitekey, theme]);

  if (!sitekey) {
    return null;
  }

  return (
    <>
      <Script
        id={scriptId}
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onLoad={renderWidget}
      />
      <div ref={containerRef} />
    </>
  );
}
