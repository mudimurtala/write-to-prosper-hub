/**
 * Single configuration point for external values.
 * Replace the placeholders below when the Academy supplies the real values.
 */

/** WhatsApp Business destination. Replace with the link supplied by the Academy. */
export const WHATSAPP_URL = "https://wa.me/0000000000?text=I%20want%20to%20join%20the%20FREE%20WRITE%202%20EARN%20Webinar";

/** Meta Pixel ID. Leave empty to disable the pixel. */
export const META_PIXEL_ID = "";

/** Google Analytics measurement ID (G-XXXXXXX). Leave empty to disable. */
export const GA_MEASUREMENT_ID = "";

/** Appends the current page's UTM/campaign params to the WhatsApp link. */
export function whatsappHref(): string {
  if (typeof window === "undefined") return WHATSAPP_URL;
  try {
    const src = new URLSearchParams(window.location.search);
    const keep = [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_content",
      "utm_term",
      "fbclid",
    ];
    const carried = keep
      .filter((k) => src.get(k))
      .map((k) => `${k}=${src.get(k)}`)
      .join(" ");
    if (!carried) return WHATSAPP_URL;
    const url = new URL(WHATSAPP_URL);
    const text = url.searchParams.get("text") ?? "";
    url.searchParams.set("text", `${text} [${carried}]`.trim());
    return url.toString();
  } catch {
    return WHATSAPP_URL;
  }
}

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

/** Fires conversion events for a WhatsApp CTA click. */
export function trackWhatsAppClick(location: string): void {
  if (typeof window === "undefined") return;
  window.fbq?.("track", "Lead", { content_name: "Write 2 Earn Webinar", location });
  window.gtag?.("event", "whatsapp_click", { location });
}
