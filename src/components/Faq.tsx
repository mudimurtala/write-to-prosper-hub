import { useState } from "react";

export const faqs = [
  { q: "Is the webinar really free?", a: "Yes." },
  {
    q: "Who is the webinar for?",
    a: "Writers, students, graduates, teachers, entrepreneurs, professionals and anyone interested in developing writing skills and turning them into income.",
  },
  {
    q: "Do I need to be an experienced writer?",
    a: "No. The webinar is designed to help both beginners and people who already have some writing experience.",
  },
  {
    q: "Where will the webinar take place?",
    a: "Online. Participants will receive the relevant details through WhatsApp.",
  },
  {
    q: "How do I join?",
    a: "Click the JOIN FREE ON WHATSAPP button and follow the instructions.",
  },
  {
    q: "Do I need to buy anything?",
    a: "No. The webinar itself is free. Any further training or products are presented separately and transparently after participants have received value.",
  },
];

export function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="divide-y divide-gold/15 overflow-hidden rounded-xl border border-gold/20 bg-ink-soft">
      {faqs.map((f, i) => {
        const isOpen = openIdx === i;
        return (
          <div key={f.q}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpenIdx(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-base font-medium text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50"
              >
                <span className="font-sans">{f.q}</span>
                <span
                  aria-hidden="true"
                  className={`text-gold transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}
                >
                  +
                </span>
              </button>
            </h3>
            {isOpen && (
              <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
