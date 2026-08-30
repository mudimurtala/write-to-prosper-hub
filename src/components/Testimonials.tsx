import { useState } from "react";

const t1 = "/images/testimonial1.jpeg";
const t2 = "/images/testimonial2.jpeg";
const t3 = "/images/testimonial3.jpeg";
const t4 = "/images/testimonial4.jpeg";
const t5 = "/images/testimonial5.jpeg";
const t6 = "/images/testimonial6.jpeg";
const t7 = "/images/testimonial7.jpeg";

const shots = [t1, t2, t3, t4, t5, t6, t7];

export function Testimonials() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <>
      <ul className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 lg:grid-cols-4">
        {shots.map((s, i) => (
          <li
            key={s}
            className="w-[74vw] shrink-0 snap-center sm:w-[46vw] md:w-auto"
          >
            <button
              type="button"
              onClick={() => setOpen(s)}
              className="block w-full overflow-hidden rounded-xl border border-gold/25 bg-ink-soft focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gold/40"
              aria-label={`Open student testimonial ${i + 1} full size`}
            >
              <img
                src={s}
                alt={`Authentic Writerpreneur Academy student testimonial screenshot ${i + 1}`}
                loading="lazy"
                decoding="async"
                className="h-[360px] w-full object-cover object-top transition-opacity hover:opacity-90"
              />
            </button>
          </li>
        ))}
      </ul>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Testimonial full size"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setOpen(null)}
        >
          <img
            src={open}
            alt="Writerpreneur Academy student testimonial, full size"
            className="max-h-[88vh] w-auto rounded-lg border border-gold/30"
          />
          <button
            type="button"
            onClick={() => setOpen(null)}
            className="absolute right-4 top-4 rounded-full border border-gold/40 px-4 py-2 text-sm text-gold"
          >
            Close
          </button>
        </div>
      )}
    </>
  );
}
