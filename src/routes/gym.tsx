import { createFileRoute } from "@tanstack/react-router";
import {
  Bike,
  Clock,
  Dumbbell,
  HeartPulse,
  Wallet,
  MessageCircle,
  Phone,
  Timer,
  Users,
  Weight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { GYM, SITE, formatKes, waLink } from "@/lib/site";
import gymImage from "@/assets/gym.jpg";

export const Route = createFileRoute("/gym")({
  head: () => ({
    meta: [
      {
        title: "Dear Mama Apartment Gym — Thika",
        description:
          "Train at the Dear Mama Apartment Gym in Thika — strength, cardio and functional fitness. Call +254 758 272431 for membership rates and opening hours.",
      },
      { property: "og:title", content: "Dear Mama Apartment Gym — Thika" },
      {
        property: "og:description",
        content:
          "A fully equipped community gym in Thika. Call +254 758 272431 for membership rates and opening hours.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GymPage,
});

const offerings = [
  {
    icon: Weight,
    title: "Strength training",
    text: "Free weights, dumbbell racks, benches and barbell stations for every level.",
  },
  {
    icon: Bike,
    title: "Cardio",
    text: "Treadmills and spin bikes to build endurance, whatever the weather outside.",
  },
  {
    icon: Dumbbell,
    title: "Functional fitness",
    text: "Mats and functional kit for mobility, core and conditioning work.",
  },
  {
    icon: Timer,
    title: "Train on your schedule",
    text: "Inside the building — squeeze in a session before or after work.",
  },
  {
    icon: Users,
    title: "Community vibe",
    text: "A friendly neighbourhood gym where regulars and newcomers train side by side.",
  },
  {
    icon: HeartPulse,
    title: "For everyone",
    text: "Whether you're starting out or chasing PRs, there's a place for you here.",
  },
];

function GymPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img
          src={gymImage}
          alt="Dear Mama Apartment Gym training floor"
          width={1024}
          height={1024}
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <div className="hero-overlay absolute inset-0 -z-10" />
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-28">
          <p className="kicker text-accent">Fitness</p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl font-extrabold text-primary-foreground sm:text-5xl">
            Dear Mama Apartment Gym
          </h1>
          <p className="mt-4 max-w-xl leading-relaxed text-primary-foreground/85">
            Strength, cardio and functional training in the heart of Thika —
            open to residents and the wider community.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="gap-2">
              <a href={SITE.phoneTel} className="gap-2">
                <Phone className="size-4" />
                {SITE.phoneDisplay}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="gap-2 border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <a href={waLink(GYM.waMessage)} target="_blank" rel="noreferrer" className="gap-2">
                <MessageCircle className="size-4" />
                Ask about membership
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="kicker">What's inside</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">
            Everything you need to stay strong
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {offerings.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-border bg-card p-7 shadow-card transition-transform hover:-translate-y-1"
            >
              <span className="flex size-12 items-center justify-center rounded-2xl bg-secondary text-primary">
                <item.icon className="size-6" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold">{item.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-2xl bg-secondary text-primary">
                <Wallet className="size-5" />
              </span>
              <h2 className="font-display text-xl font-extrabold">Membership rates</h2>
            </div>
            <ul className="mt-5 divide-y divide-border">
              {GYM.rates.map((rate) => (
                <li key={rate.label} className="flex items-center justify-between gap-4 py-3">
                  <span className="text-sm font-semibold">{rate.label}</span>
                  <span className="text-right font-display text-lg font-extrabold text-primary">
                    {rate.price !== null ? formatKes(rate.price) : "Call for rate"}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-2xl bg-secondary text-primary">
                <Clock className="size-5" />
              </span>
              <h2 className="font-display text-xl font-extrabold">Opening hours</h2>
            </div>
            <ul className="mt-5 divide-y divide-border">
              {GYM.hours.map((row) => (
                <li key={row.days} className="flex items-center justify-between gap-4 py-3">
                  <span className="text-sm font-semibold">{row.days}</span>
                  <span className="text-right text-sm font-bold text-primary">
                    {row.time ?? "Call to confirm"}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 rounded-3xl band-deep p-8 text-center text-primary-foreground sm:p-12">
          <h2 className="font-display text-2xl font-extrabold sm:text-3xl">
            Membership made simple
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-primary-foreground/80">
            Call or WhatsApp us for current membership rates, opening hours and
            how to get started — we'll answer within working hours.
          </p>
          <a
            href={SITE.phoneTel}
            className="mt-6 inline-block font-display text-2xl font-extrabold tracking-tight text-accent sm:text-3xl"
          >
            {SITE.phoneDisplay}
          </a>
          <div className="mt-6 flex justify-center">
            <Button asChild variant="outline" className="gap-2 border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <a href={waLink(GYM.waMessage)} target="_blank" rel="noreferrer" className="gap-2">
                <MessageCircle className="size-4" />
                WhatsApp about membership
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
