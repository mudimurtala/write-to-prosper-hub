/**
 * Single configuration point for external values.
 * Replace the placeholders below when the Academy supplies the real values.
 */

/** WhatsApp Business destination. Replace with the link supplied by the Academy. */
export const WHATSAPP_URL = "https://chat.whatsapp.com/LjjvORk6RZ6KD9vsB7HnsT?s=cl&p=a&mlu=4";
/** Meta Pixel ID. Leave empty to disable the pixel. */
export const META_PIXEL_ID = "";

/** Google Analytics measurement ID (G-XXXXXXX). Leave empty to disable. */
export const GA_MEASUREMENT_ID = "";

/** Returns the WhatsApp group invite link as-is (group links can't carry a pre-filled message or extra tracking params). */
export function whatsappHref(): string {
  return WHATSAPP_URL;
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
