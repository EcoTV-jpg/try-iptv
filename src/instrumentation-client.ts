import { loadSentry } from "@/lib/client/sentry";

function scheduleSentry(): void {
  const start = () => {
    void loadSentry();
  };

  if (typeof window.requestIdleCallback === "function") {
    window.requestIdleCallback(start, { timeout: 4000 });
  } else {
    window.setTimeout(start, 1);
  }
}

// Keep the client SDK off the initial HTML. The homepage LCP image is already
// downloaded early; Sentry's chunk was parsing on the main thread before paint.
if (document.readyState === "complete") {
  scheduleSentry();
} else {
  window.addEventListener("load", scheduleSentry, { once: true });
}
