import { createFileRoute } from "@tanstack/react-router";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { Testimonials } from "@/components/Testimonials";
import { Faq, faqs } from "@/components/Faq";

const logo = "/images/Logo Writerpreneur Academy.jpeg";
const coach = "/images/Coach photograph — Afeez Amusa Onireke.jpeg";
const promo = "/images/new-promo-image.jpeg";

const TITLE = "WRITE 2 EARN — FREE Webinar | Writerpreneur Academy";
const DESC =
  "Join the FREE Write 2 Earn Webinar by Writerpreneur Academy and learn how to turn your writing skills into income, opportunities and lasting impact.";

export const Route = createFileRoute("/")({
  component: LandingPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: promo },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: promo },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
});

const skills = [
  "Content Writing",
  "Copywriting",
  "Creative Writing",
  "Ghostwriting",
  "Scriptwriting",
  "Book Writing",
  "SOP & LOI Writing",
  "Business Plan & Proposal Writing",
  "Career Document Writing",
  "Editing & Proofreading",
];

const learn = [
  { k: "Discover", v: "Profitable writing opportunities" },
  { k: "Learn", v: "In-demand writing skills" },
  { k: "Monetize", v: "Your writing from day one" },
  { k: "Build", v: "Influence with your words" },
  { k: "Create", v: "Impact and lasting value" },
];

const audience = [
  "Writer",
  "Student",
  "Graduate",
  "Teacher",
  "Entrepreneur",
  "Professional",
  "Job Seeker",
  "Aspiring Freelancer",
  "Artisan",
  "Fresh Graduate",
  "Corps Member",
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-gold">{children}</p>
  );
}

function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`px-5 py-16 sm:px-8 md:py-24 ${className}`}>
      <div className="mx-auto w-full max-w-5xl">{children}</div>
    </section>
  );
}

function LandingPage() {
  return (
    <div className="min-h-screen bg-background pb-24 md:pb-0">
      {/* Hero */}
      <header className="relative overflow-hidden border-b border-gold/20">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-5 pb-16 pt-10 sm:px-8 md:grid-cols-[1.1fr_0.9fr] md:pb-24 md:pt-14">
          <div>
            <div className="text-center md:text-left">
              <img
                src={logo}
                alt="Writerpreneur Academy logo — Write. Earn. Impact."
                width={132}
                height={132}
                className="mx-auto mb-8 h-28 w-28 rounded-xl object-cover sm:h-32 sm:w-32 md:mx-0"
              />
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
                Free Webinar · Limited Slots Available
              </p>
              <h1 className="text-[clamp(2rem,9vw,3rem)] leading-[0.95] sm:text-6xl md:text-7xl">
                <span className="text-white">WRITE </span>
                <span className="text-gold text-[1.25em]">2</span>
                <span className="text-white"> EARN</span>
              </h1>
            </div>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              Learn how to turn your writing skills into income and create real value with your
              words. Discover the writing skills you can learn, package and offer as professional
              services even if you are just starting out.
            </p>
            <div className="mt-8">
              <WhatsAppCTA location="hero" />
            </div>
            <p className="mt-4 text-center text-xs uppercase tracking-[0.2em] text-muted-foreground md:text-left">
              Hosted by Afeez Amusa Onireke · Clarity Coach
            </p>
          </div>
          <div className="relative">
            <div
              className="absolute -inset-3 rounded-2xl border border-gold/25"
              aria-hidden="true"
            />
            <img
              src={promo}
              alt="WRITE 2 EARN free webinar promotional artwork featuring host Afeez Amusa Onireke"
              className="relative w-full rounded-xl object-cover"
              fetchPriority="high"
            />
          </div>
        </div>
      </header>

      {/* Problem */}
      <Section className="bg-ink-soft">
        <Eyebrow>The Real Gap</Eyebrow>
        <h2 className="max-w-3xl text-3xl leading-tight sm:text-4xl md:text-5xl">
          Knowing how to write is <span className="gold-text">not</span> the same as knowing how to
          earn from writing.
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="panel p-6">
            <h3 className="text-lg text-gold">You can already write</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {[
                "Social media posts",
                "School assignments",
                "Reports",
                "Stories",
                "Emails",
                "Business documents",
              ].map((i) => (
                <li key={i} className="flex gap-2">
                  <span aria-hidden="true">—</span>
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="panel p-6">
            <h3 className="text-lg text-gold">But you may not know</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {[
                "What writing services people actually pay for",
                "Which writing skill is right for you",
                "How to package your skill",
                "Where to find clients",
                "How to position yourself professionally",
                "How to turn writing into a sustainable career",
              ].map((i) => (
                <li key={i} className="flex gap-2">
                  <span aria-hidden="true">—</span>
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-8 text-lg text-foreground">
          That&apos;s what this webinar is designed to help you understand.
        </p>
      </Section>

      {/* What you will learn */}
      <Section>
        <Eyebrow>What You Will Learn</Eyebrow>
        <h2 className="text-3xl leading-tight sm:text-4xl">Outcomes you leave the webinar with</h2>
        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {learn.map((l, i) => (
            <li key={l.k} className="panel p-6">
              <span className="text-xs tracking-[0.2em] text-gold/70">0{i + 1}</span>
              <h3 className="mt-2 text-xl text-gold">{l.k}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{l.v}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10 text-center">
          <WhatsAppCTA location="after-benefits" label="GET MY FREE WEBINAR SEAT" />
        </div>
      </Section>

      {/* 10 skills */}
      <Section className="bg-ink-soft">
        <Eyebrow>The Opportunity Map</Eyebrow>
        <h2 className="text-3xl leading-tight sm:text-4xl md:text-5xl">
          10 Writing Skills. <span className="gold-text">Countless Opportunities.</span>
        </h2>
        <p className="mt-5 max-w-2xl text-muted-foreground">
          Writing is not just one skill. There are different types of writing that solve different
          problems for individuals, businesses and organisations. Discover the opportunities within
          them.
        </p>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => (
            <li
              key={s}
              className="flex items-center gap-4 rounded-lg border border-gold/20 bg-background px-5 py-4"
            >
              <span className="font-display text-lg text-gold/70">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-sm font-medium">{s}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Who it's for */}
      <Section>
        <Eyebrow>Who Should Attend</Eyebrow>
        <h2 className="text-3xl leading-tight sm:text-4xl">
          This webinar is for you if you are a:
        </h2>
        <ul className="mt-8 flex flex-wrap gap-3">
          {audience.map((a) => (
            <li
              key={a}
              className="rounded-full border border-gold/35 px-5 py-2 text-sm font-medium text-gold-soft"
            >
              {a}
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
          You want to learn a writing skill, turn it into a service and create an additional source
          of income.
        </p>
      </Section>

      {/* Coach */}
      <Section className="bg-ink-soft">
        <div className="grid items-center gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <img
            src={coach}
            alt="Afeez Amusa Onireke, Founder of Writerpreneur Academy"
            loading="lazy"
            decoding="async"
            className="w-full rounded-xl border border-gold/25 object-cover"
          />
          <div>
            <Eyebrow>Your Host</Eyebrow>
            <h2 className="text-3xl sm:text-4xl">Afeez Amusa Onireke</h2>
            <p className="mt-2 text-sm uppercase tracking-[0.18em] text-gold">
              Writer | Author | Writerpreneur | Clarity Coach
            </p>
            <p className="mt-1 text-sm text-muted-foreground">Founder, Writerpreneur Academy</p>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Afeez is a writer, author, entrepreneur and technology consultant who has spent years
              helping people turn writing ability into paid, professional work. As the Clarity Coach
              behind Writerpreneur Academy, he trains writers to choose the right skill, package it
              as a service and position themselves for real opportunities.
            </p>
            <div className="mt-8 text-center md:text-left">
              <WhatsAppCTA location="after-coach" size="md" label="JOIN FREE ON WHATSAPP" />
            </div>
          </div>
        </div>
      </Section>

      {/* About academy */}
      <Section>
        <div className="panel p-8 md:p-12">
          <Eyebrow>About the Academy</Eyebrow>
          <h2 className="text-2xl leading-snug sm:text-3xl">
            Writerpreneur Academy is a practical writing education platform designed to help people
            learn valuable writing skills, turn those skills into professional services and build
            sustainable writing careers.
          </h2>
          <p className="mt-6 font-display text-xl tracking-wide text-gold">Write. Earn. Impact.</p>
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="bg-ink-soft">
        <Eyebrow>Student Testimonies</Eyebrow>
        <h2 className="text-3xl sm:text-4xl">Real words from real students</h2>
        <p className="mt-4 text-sm text-muted-foreground">
          Tap any screenshot to view it full size.
        </p>
        <div className="mt-10">
          <Testimonials />
        </div>
      </Section>

      {/* Free offer */}
      <Section>
        <div className="rounded-2xl border border-gold/35 bg-ink-soft p-5 text-center sm:p-10 md:p-14">
          <h2 className="text-[clamp(1.5rem,7vw,2.25rem)] sm:text-5xl">
            <span className="gold-text">Your seat is free.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            There is no registration fee for this webinar. Limited slots available.
          </p>
          <div className="mt-8">
            <WhatsAppCTA location="free-offer" />
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-ink-soft">
        <Eyebrow>Questions</Eyebrow>
        <h2 className="text-3xl sm:text-4xl">Before you join</h2>
        <div className="mt-8">
          <Faq />
        </div>
      </Section>

      {/* Final CTA */}
      <Section>
        <div className="text-center">
          <h2 className="text-4xl leading-tight sm:text-5xl">
            READY TO WRITE <span className="text-[1.25em]">2</span> EARN?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            Join the FREE Write 2 Earn Webinar and discover how your writing skills can become
            valuable professional opportunities.
          </p>
          <div className="mt-8">
            <WhatsAppCTA location="final" />
          </div>
          <div className="gold-rule mx-auto mt-14 max-w-sm" />
          <p className="mt-8 font-display text-2xl tracking-wide">WRITERPRENEUR ACADEMY</p>
          <p className="mt-1 text-sm uppercase tracking-[0.3em] text-gold">Write. Earn. Impact.</p>
        </div>
      </Section>

      <footer className="border-t border-gold/20 px-5 py-8 text-center sm:px-8">
        <img
          src={logo}
          alt="Writerpreneur Academy"
          loading="lazy"
          className="mx-auto h-14 w-14 rounded-lg object-cover"
        />
        <p className="mt-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Writerpreneur Academy · Write. Earn. Impact.
        </p>
        <p className="mt-4 text-sm text-muted-foreground">
          Contact:{" "}
          <a
            href="tel:+2348160482356"
            className="font-medium text-gold underline-offset-4 hover:underline"
          >
            +234 816 048 2356
          </a>
        </p>
        <p className="mt-2 text-xs text-muted-foreground/70">
          © {new Date().getFullYear()} Writerpreneur Academy. All rights reserved.
        </p>
      </footer>

      {/* Sticky mobile CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gold/25 bg-background/95 px-4 py-3 backdrop-blur md:hidden">
        <WhatsAppCTA
          location="sticky-mobile"
          label="JOIN FREE ON WHATSAPP"
          className="w-full"
          size="md"
        />
      </div>
    </div>
  );
}
