import { createFileRoute, Link } from "@tanstack/react-router";
import { WHATSAPP_URL, whatsappHref, trackWhatsAppClick } from "@/lib/site-config";

const TITLE = "Join the WhatsApp Group | Writerpreneur Academy";
const DESC = "You're almost in. A few quick notes before you join the Write 2 Earn WhatsApp group.";

export const Route = createFileRoute("/join")({
  component: JoinPage,
  head: () => ({
    meta: [{ title: TITLE }, { name: "description", content: DESC }],
  }),
});

function JoinPage() {
  return (
    <div className="min-h-screen bg-background px-5 py-12 sm:px-8 md:py-20">
      <div className="mx-auto w-full max-w-lg text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-gold">
          You&apos;re Almost In
        </p>
        <h1 className="text-3xl leading-tight sm:text-4xl">
          Join the <span className="gold-text">Write 2 Earn</span> WhatsApp Group
        </h1>
        <p className="mt-4 text-sm text-muted-foreground sm:text-base">
          Tap the button below to join. A couple of quick notes first, so nothing catches you off
          guard.
        </p>

        <div className="panel mt-8 p-6 text-left sm:p-8">
          <p className="flex items-center gap-2 text-base font-semibold text-gold">
            <span aria-hidden="true">📌</span> Read this before you tap the button
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            If tapping the button below takes you to a &quot;Download WhatsApp&quot; page instead of
            the group, don&apos;t panic, you already have WhatsApp. Just do this:
          </p>
          <ol className="mt-4 space-y-3 text-sm text-foreground">
            <li className="flex gap-2">
              <span aria-hidden="true">👉</span>
              <span>Tap the three dots (⋮) at the top right corner of your screen</span>
            </li>
            <li className="flex gap-2">
              <span aria-hidden="true">👉</span>
              <span>Select &quot;Open in Browser&quot;</span>
            </li>
            <li className="flex gap-2">
              <span aria-hidden="true">👉</span>
              <span>Tap the Join button again, it&apos;ll take you straight in</span>
            </li>
          </ol>
          <p className="mt-5 text-sm font-medium text-gold">
            That&apos;s it. Don&apos;t download anything, you&apos;re already good to go.
          </p>
        </div>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            trackWhatsAppClick("join-page");
            e.currentTarget.href = whatsappHref();
          }}
          className="group mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 font-semibold uppercase tracking-wide text-ink shadow-gold transition-transform duration-200 hover:scale-[1.02] active:scale-[0.99] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gold/40 sm:gap-3 sm:px-7 sm:py-4"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-4 w-4 shrink-0 fill-current sm:h-5 sm:w-5"
          >
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.38a9.9 9.9 0 0 0 4.76 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm0 18.02h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.13.82.84-3.05-.2-.31a8.16 8.16 0 0 1-1.25-4.35c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.83 2.41a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.21-8.24 8.21Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.8-.23-.09-.39-.13-.56.12s-.64.8-.79.97c-.14.16-.29.18-.54.06-.25-.13-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.22.25-.85.83-.85 2.02s.87 2.34.99 2.51c.12.16 1.71 2.61 4.15 3.66.58.25 1.03.4 1.39.51.58.19 1.11.16 1.53.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29Z" />
          </svg>
          <span className="whitespace-nowrap">JOIN WHATSAPP GROUP</span>
        </a>

        <p className="mt-6 text-xs text-muted-foreground">
          <Link to="/" className="underline underline-offset-4 hover:text-gold">
            Back to homepage
          </Link>
        </p>
      </div>
    </div>
  );
}
