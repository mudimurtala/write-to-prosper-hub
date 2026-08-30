import { trackWhatsAppClick, whatsappHref, WHATSAPP_URL } from "@/lib/site-config";
type Props = {
  label?: string;
  location: string;
  size?: "lg" | "md";
  className?: string;
};
export function WhatsAppCTA({
  label = "JOIN THE FREE WEBINAR ON WHATSAPP",
  location,
  size = "lg",
  className = "",
}: Props) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        trackWhatsAppClick(location);
        e.currentTarget.href = whatsappHref();
      }}
      className={[
        "group inline-flex items-center justify-center gap-2 rounded-full sm:gap-3",
        "bg-gold text-ink font-semibold tracking-wide uppercase",
        "shadow-gold transition-transform duration-200 hover:scale-[1.02] active:scale-[0.99]",
        "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gold/40",
        size === "lg" ? "px-5 py-3 sm:px-7 sm:py-4" : "px-4 py-2.5 sm:px-5 sm:py-3",
        className,
      ].join(" ")}
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-4 w-4 shrink-0 fill-current sm:h-5 sm:w-5"
      >
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.38a9.9 9.9 0 0 0 4.76 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm0 18.02h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.13.82.84-3.05-.2-.31a8.16 8.16 0 0 1-1.25-4.35c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.83 2.41a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.21-8.24 8.21Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.8-.23-.09-.39-.13-.56.12s-.64.8-.79.97c-.14.16-.29.18-.54.06-.25-.13-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.22.25-.85.83-.85 2.02s.87 2.34.99 2.51c.12.16 1.71 2.61 4.15 3.66.58.25 1.03.4 1.39.51.58.19 1.11.16 1.53.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29Z" />
      </svg>
      <span className="whitespace-nowrap text-center text-[clamp(0.55rem,3vw,0.875rem)] sm:text-sm md:text-base">
        {label}
      </span>
    </a>
  );
}
