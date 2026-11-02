import { Link, createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BedDouble,
  Building2,
  Car,
  Droplets,
  Dumbbell,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Store,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";
import heroBuilding from "@/assets/hero-building.jpg";
import apartmentInterior from "@/assets/apartment-interior.jpg";
import gymImage from "@/assets/gym.jpg";
import commercialImage from "@/assets/commercial.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Dear Mama Apartment — Rentals, Shops & Gym in Thika",
        description:
          "Dear Mama Apartment in Thika (Makongeni Phase 5 area) offers residential rentals, ground-floor commercial spaces, and the Dear Mama Apartment Gym. Call +254 758 272431.",
      },
      { property: "og:title", content: "Dear Mama Apartment — Rentals, Shops & Gym in Thika" },
      {
        property: "og:description",
        content:
          "Residential and mixed-use building in Thika: rentals, commercial spaces, and a community gym. Call +254 758 272431.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LodgingBusiness",
          name: "Dear Mama Apartment",
          telephone: "+254758272431",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Thika",
            addressRegion: "Kiambu",
            addressCountry: "KE",
          },
        }),
      },
    ],
  }),
  component: Index,
});

const features = [
  {
    icon: Building2,
    title: "Residential Rentals",
    text: "Comfortable, self-contained apartments for individuals, couples and small families in the heart of Thika.",
    to: "/rentals",
    cta: "View rentals",
  },
  {
    icon: Store,
    title: "Commercial Spaces",
    text: "Ground-floor shops and business spaces that serve the neighbourhood — retail, services and more.",
    to: "/contact",
    cta: "Enquire about a space",
  },
  {
    icon: Dumbbell,
    title: "Dear Mama Gym",
    text: "A fully equipped fitness facility right in the building — train before or after work, without the commute.",
    to: "/gym",
    cta: "Explore the gym",
  },
];

const livingHighlights = [
  { icon: Droplets, label: "Reliable water supply" },
  { icon: ShieldCheck, label: "Secure living" },
  { icon: Car, label: "Parking on site" },
  { icon: Zap, label: " dependable power" },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroBuilding}
          alt="Dear Mama Apartment building in Thika"
          width={1024}
          height={1024}
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <div className="hero-overlay absolute inset-0 -z-10" />
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
          <p className="kicker text-accent">Thika · Makongeni Phase 5</p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl font-extrabold leading-tight text-primary-foreground sm:text-6xl">
            Live, work and train at <span className="text-accent">Dear Mama Apartment</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
            A residential and mixed-use building serving the Thika community —
            modern rentals, thriving ground-floor businesses, and its own gym.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="gap-2">
              <Link to="/rentals">
                Find a home
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="gap-2 border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <a href={SITE.whatsapp} target="_blank" rel="noreferrer">
                <MessageCircle className="size-4" />
                WhatsApp us
              </a>
            </Button>
          </div>
          <div className="mt-12 flex flex-wrap gap-3 text-sm font-semibold text-primary-foreground">
            {["Rentals", "Commercial spaces", "Community gym", "Prime A3 location"].map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-white/25 bg-white/10 px-4 py-2 backdrop-blur-sm"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Feature cards */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="kicker">One building, three ways in</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">
            Everything a Thika household needs, under one roof
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group flex flex-col rounded-3xl border border-border bg-card p-7 shadow-card transition-transform hover:-translate-y-1"
            >
              <span className="flex size-12 items-center justify-center rounded-2xl bg-secondary text-primary">
                <feature.icon className="size-6" />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold">{feature.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{feature.text}</p>
              <Link
                to={feature.to}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-primary transition-colors group-hover:text-accent"
              >
                {feature.cta}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Rentals teaser */}
      <section className="bg-secondary/60">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-2">
          <div>
            <p className="kicker">Residential</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">
              Homes designed for everyday comfort
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              From compact bedsitters to spacious family units, Dear Mama
              Apartment offers bright, self-contained rentals in a lively,
              well-connected part of Thika.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-3">
              {livingHighlights.map((item) => (
                <li key={item.label} className="flex items-center gap-2.5 text-sm font-semibold">
                  <item.icon className="size-4 shrink-0 text-primary" />
                  {item.label.trim()}
                </li>
              ))}
            </ul>
            <Button asChild className="mt-8 gap-2">
              <Link to="/rentals">
                See unit types
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
          <img
            src={apartmentInterior}
            alt="A bright apartment interior at Dear Mama Apartment"
            loading="lazy"
            width={1024}
            height={1024}
            className="w-full rounded-3xl object-cover shadow-elegant"
          />
        </div>
      </section>

      {/* Gym teaser */}
      <section>
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-2">
          <img
            src={gymImage}
            alt="Dear Mama Apartment Gym — weights and cardio equipment"
            loading="lazy"
            width={1024}
            height={1024}
            className="w-full rounded-3xl object-cover shadow-elegant md:order-first"
          />
          <div>
            <p className="kicker">Fitness</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">
              Dear Mama Apartment Gym
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              No long commutes, no excuses. A fully equipped community gym
              inside the building — strength training, cardio and functional
              fitness for residents and neighbours alike.
            </p>
            <Button asChild variant="outline" className="mt-8 gap-2">
              <Link to="/gym">
                Train with us
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Commercial teaser */}
      <section className="bg-secondary/60">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-2">
          <div>
            <p className="kicker">Commercial</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">
              Ground-floor shops that serve the neighbourhood
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              The building's commercial spaces host local businesses — shops,
              services and everyday essentials — making Dear Mama Apartment a
              genuine mixed-use hub for Makongeni Phase 5.
            </p>
            <Button asChild className="mt-8 gap-2">
              <a href={SITE.phoneTel} className="gap-2">
                <Phone className="size-4" />
                Ask about a space
              </a>
            </Button>
          </div>
          <img
            src={commercialImage}
            alt="Commercial shops on the ground floor of the building"
            loading="lazy"
            width={1024}
            height={1024}
            className="w-full rounded-3xl object-cover shadow-elegant"
          />
        </div>
      </section>

      {/* Location + contact CTA */}
      <section className="band-deep text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 md:grid-cols-2">
          <div>
            <p className="kicker text-accent">Location</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">
              Easy to reach, easy to live with
            </h2>
            <p className="mt-4 leading-relaxed text-primary-foreground/80">
              Dear Mama Apartment sits in the Makongeni Phase 5 area of Thika,
              on the A3 (Garissa Highway) side of town — minutes from Thika
              town centre, schools, and matatu routes.
            </p>
            <div className="mt-6 flex items-start gap-3 text-primary-foreground/80">
              <MapPin className="mt-1 size-5 shrink-0 text-accent" />
              <p className="text-sm leading-relaxed">
                {SITE.address}
                <br />
                {SITE.addressDetail}
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
            <h3 className="font-display text-2xl font-bold">Book a viewing today</h3>
            <p className="mt-2 text-sm leading-relaxed text-primary-foreground/80">
              Call or WhatsApp us for current availability, rents, and gym
              membership.
            </p>
            <a
              href={SITE.phoneTel}
              className="mt-6 font-display text-2xl font-extrabold tracking-tight text-accent sm:text-3xl"
            >
              {SITE.phoneDisplay}
            </a>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild className="gap-2">
                <a href={SITE.phoneTel} className="gap-2">
                  <Phone className="size-4" />
                  Call now
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="gap-2 border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
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
