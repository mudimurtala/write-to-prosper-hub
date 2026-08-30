/**
 * Fallback WhatsApp link, used only if the live Firestore value hasn't loaded yet.
 * The real, editable link lives in Firestore (site-config/main), managed from /admin.
 */
export const WHATSAPP_URL = "https://chat.whatsapp.com/LjjvORk6RZ6KD9vsB7HnsT?s=cl&p=a&mlu=4";

/** Meta Pixel ID. Leave empty to disable the pixel. */
export const META_PIXEL_ID = "";

/** Google Analytics measurement ID (G-XXXXXXX). Leave empty to disable. */
export const GA_MEASUREMENT_ID = "";

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
