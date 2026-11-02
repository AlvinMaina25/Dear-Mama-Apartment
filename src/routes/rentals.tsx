import { Link, createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BedDouble,
  Building2,
  Car,
  Droplets,
  Maximize,
  MessageCircle,
  Phone,
  ShieldCheck,
  Wind,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AVAILABILITY_LABEL, FAQS, SITE, UNITS, formatKes, waLink, type Availability } from "@/lib/site";
import { FaqSection } from "@/components/faq-section";
import apartmentInterior from "@/assets/apartment-interior.jpg";

export const Route = createFileRoute("/rentals")({
  head: () => ({
    meta: [
      {
        title: "Rentals — Dear Mama Apartment, Thika",
        description:
          "Bedsitters, one- and two-bedroom apartments at Dear Mama Apartment, Makongeni Phase 5, Thika. Call +254 758 272431 for availability and rates.",
      },
      { property: "og:title", content: "Rentals — Dear Mama Apartment, Thika" },
      {
        property: "og:description",
        content:
          "Self-contained rentals in Thika's Makongeni Phase 5. Call +254 758 272431 for availability and rates.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: RentalsPage,
});

const unitIcons = {
  bedsitter: BedDouble,
  "one-bedroom": Building2,
  "two-bedroom": Maximize,
} as const;

const badgeStyles: Record<Availability, string> = {
  available: "bg-emerald-100 text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-300",
  few: "bg-amber-100 text-amber-800 dark:bg-amber-500/20 dark:text-amber-300",
  full: "bg-muted text-muted-foreground",
  ask: "bg-secondary text-secondary-foreground",
};

const amenities = [
  { icon: Droplets, label: "Reliable water supply with storage" },
  { icon: ShieldCheck, label: "Gated, secure living environment" },
  { icon: Car, label: "On-site parking" },
  { icon: Wind, label: "Bright, well-ventilated units" },
];

function RentalsPage() {
  return (
    <>
      <section className="band-deep text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <p className="kicker text-accent">Rentals</p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl font-extrabold sm:text-5xl">
            Find your next home in Thika
          </h1>
          <p className="mt-4 max-w-xl leading-relaxed text-primary-foreground/85">
            Dear Mama Apartment offers self-contained residential units in the
            Makongeni Phase 5 area. Contact us for current availability and
            monthly rent.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {UNITS.map((unit) => {
            const Icon = unitIcons[unit.id as keyof typeof unitIcons] ?? Building2;
            return (
              <article
                key={unit.id}
                className="flex flex-col rounded-3xl border border-border bg-card p-6 shadow-card transition-transform hover:-translate-y-1 sm:p-7"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary">
                    <Icon className="size-6" />
                  </span>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold ${badgeStyles[unit.availability]}`}
                  >
                    {AVAILABILITY_LABEL[unit.availability]}
                  </span>
                </div>
                <h2 className="mt-5 font-display text-xl font-bold">{unit.name}</h2>
                <p className="mt-1 text-sm font-semibold text-muted-foreground">{unit.tagline}</p>

                <div className="mt-4 rounded-2xl bg-secondary/60 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Rent per month
                  </p>
                  <p className="font-display text-2xl font-extrabold text-foreground">
                    {unit.rent !== null ? formatKes(unit.rent) : "Call for rate"}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Deposit: <span className="font-semibold">{unit.deposit ?? "Ask us"}</span>
                  </p>
                </div>

                <ul className="mt-4 flex-1 space-y-2.5 text-sm text-muted-foreground">
                  {unit.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>

                <Button asChild className="mt-6 w-full gap-2">
                  <a href={waLink(unit.waMessage)} target="_blank" rel="noreferrer">
                    <MessageCircle className="size-4" />
                    Ask about this unit
                  </a>
                </Button>
              </article>
            );
          })}
        </div>

        <div className="mt-10 grid items-center gap-10 rounded-3xl border border-border bg-card p-5 shadow-card sm:p-8 md:grid-cols-2">
          <img
            src={apartmentInterior}
            alt="Apartment interior at Dear Mama Apartment"
            loading="lazy"
            width={1024}
            height={1024}
            className="w-full rounded-2xl object-cover"
          />
          <div>
            <h2 className="font-display text-2xl font-extrabold">Building amenities</h2>
            <ul className="mt-5 space-y-3">
              {amenities.map((item) => (
                <li key={item.label} className="flex items-center gap-3 text-sm font-semibold">
                  <item.icon className="size-5 shrink-0 text-primary" />
                  {item.label}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-muted-foreground">
              Ground-floor shops mean groceries, services and the gym are all
              a few steps from your door.
            </p>
            <Link to="/gym" className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-primary">
              See the gym <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>

        <FaqSection />

        <div className="mt-16 rounded-3xl band-deep p-8 text-center text-primary-foreground sm:p-12">
          <h2 className="font-display text-2xl font-extrabold sm:text-3xl">Ready to move in?</h2>
          <p className="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-primary-foreground/80">
            Unit availability changes often — call or WhatsApp us for the
            latest vacancies, rents and viewing times.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button asChild className="gap-2">
              <a href={SITE.phoneTel} className="gap-2">
                <Phone className="size-4" />
                {SITE.phoneDisplay}
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="gap-2 border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <a href={SITE.whatsapp} target="_blank" rel="noreferrer" className="gap-2">
                <MessageCircle className="size-4" />
                WhatsApp us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
