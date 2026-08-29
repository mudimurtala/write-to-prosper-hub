import { useEffect } from "react";
import { GA_MEASUREMENT_ID, META_PIXEL_ID } from "@/lib/site-config";

/**
 * Loads Meta Pixel and Google Analytics only when IDs are configured
 * in src/lib/site-config.ts. No IDs configured = zero extra requests.
 */
export function Analytics() {
  useEffect(() => {
    if (META_PIXEL_ID && !window.fbq) {
      const s = document.createElement("script");
      s.async = true;
      s.src = "https://connect.facebook.net/en_US/fbevents.js";
      document.head.appendChild(s);
      const q: unknown[][] = [];
      const fbq = (...args: unknown[]) => {
        q.push(args);
        const w = window as unknown as { _fbq_queue?: unknown[][] };
        w._fbq_queue = q;
      };
      window.fbq = fbq;
      s.onload = () => {
        window.fbq?.("init", META_PIXEL_ID);
        window.fbq?.("track", "PageView");
      };
    }

    if (GA_MEASUREMENT_ID && !window.gtag) {
      const s = document.createElement("script");
      s.async = true;
      s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      document.head.appendChild(s);
      const dl = ((window as unknown as { dataLayer?: unknown[] }).dataLayer ??= []);
      window.gtag = (...args: unknown[]) => {
        dl.push(args);
      };
      window.gtag("js", new Date());
      window.gtag("config", GA_MEASUREMENT_ID);
    }
  }, []);

  return null;
}
