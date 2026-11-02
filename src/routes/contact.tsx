import { createFileRoute } from "@tanstack/react-router";
import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      {
        title: "Contact & Location — Dear Mama Apartment, Thika",
        description:
          "Reach Dear Mama Apartment in Thika: call or WhatsApp +254 758 272431. Located in the Makongeni Phase 5 area, on the A3 (Garissa Highway) side of Thika.",
      },
      { property: "og:title", content: "Contact & Location — Dear Mama Apartment, Thika" },
      {
        property: "og:description",
        content: "Call or WhatsApp +254 758 272431. Makongeni Phase 5, Thika, Kiambu County.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const channels = [
  {
    icon: Phone,
    title: "Call us",
    value: SITE.phoneDisplay,
    href: SITE.phoneTel,
    hint: "Best for bookings, availability and quick questions",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "Chat with us",
    href: SITE.whatsapp,
    hint: "Send photos, ask about rents or gym membership",
  },
  {
    icon: MapPin,
    title: "Visit us",
    value: SITE.address,
    href: "https://www.openstreetmap.org/search?query=Thika%20Makongeni%20Phase%205",
    hint: SITE.addressDetail,
  },
];

function ContactPage() {
  return (
    <>
      <section className="band-deep text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <p className="kicker text-accent">Contact</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold sm:text-5xl">
            We'd love to hear from you
          </h1>
          <p className="mt-4 max-w-xl leading-relaxed text-primary-foreground/85">
            Questions about a rental, a commercial space, or the gym? Reach us
            directly — no forms, no waiting.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {channels.map((channel) => (
            <a
              key={channel.title}
              href={channel.href}
              target={channel.href.startsWith("http") ? "_blank" : undefined}
              rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
              className="group flex flex-col rounded-3xl border border-border bg-card p-7 shadow-card transition-transform hover:-translate-y-1"
            >
              <span className="flex size-12 items-center justify-center rounded-2xl bg-secondary text-primary">
                <channel.icon className="size-6" />
              </span>
              <h2 className="mt-5 font-display text-lg font-bold">{channel.title}</h2>
              <p className="mt-1 text-base font-semibold text-primary">{channel.value}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{channel.hint}</p>
            </a>
          ))}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          <div className="overflow-hidden rounded-3xl border border-border shadow-card lg:col-span-3">
            <iframe
              title="Map of Thika, Makongeni area"
              src="https://www.openstreetmap.org/export/embed.html?bbox=37.045%2C-1.075%2C37.135%2C-1.005&layer=mapnik"
              className="h-80 w-full lg:h-full"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col justify-center rounded-3xl bg-secondary/70 p-6 sm:p-8 lg:col-span-2">
            <h2 className="font-display text-2xl font-extrabold">Finding the building</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Dear Mama Apartment is in the Makongeni Phase 5 area of Thika,
              with units also reported around the Thika general area. Look for
              the mixed-use building with ground-floor shops along the A3 side
              of town.
            </p>
            <div className="mt-5 flex items-start gap-3 text-sm text-muted-foreground">
              <Clock className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>
                For viewing times and gym opening hours, call or WhatsApp —
                we'll confirm the current schedule.
              </span>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild className="gap-2">
                <a href={SITE.phoneTel} className="gap-2">
                  <Phone className="size-4" />
                  Call {SITE.phoneDisplay}
                </a>
              </Button>
              <Button asChild variant="outline" className="gap-2">
                <a href={SITE.whatsapp} target="_blank" rel="noreferrer" className="gap-2">
                  <MessageCircle className="size-4" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
