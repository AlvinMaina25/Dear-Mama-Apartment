export const SITE = {
  name: "Dear Mama Apartment",
  town: "Thika",
  phoneDisplay: "+254 758 272431",
  phoneTel: "tel:+254758272431",
  waNumber: "254758272431",
  whatsapp:
    "https://wa.me/254758272431?text=Hello%20Dear%20Mama%20Apartment%2C%20I%20would%20like%20to%20inquire%20about%20availability.",
  address: "Makongeni Phase 5 area, Thika",
  addressDetail: "Along the A3 (Garissa Highway) side of Thika, Kiambu County, Kenya",
} as const;

/** WhatsApp link with a custom pre-filled message. */
export function waLink(message: string) {
  return `https://wa.me/${SITE.waNumber}?text=${encodeURIComponent(message)}`;
}

/** 25000 -> "KES 25,000" (manual formatting keeps server/browser output identical). */
export function formatKes(amount: number) {
  return `KES ${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
}

/* ------------------------------------------------------------------ *
 *  EDIT HERE — prices, deposits, availability, gym rates and hours.
 *
 *  Anything left as `null` automatically shows "Call for rate" /
 *  "Call to confirm" on the site, so nothing is invented. Fill in a
 *  value and the site updates everywhere.
 * ------------------------------------------------------------------ */

export type Availability = "available" | "few" | "full" | "ask";

export const AVAILABILITY_LABEL: Record<Availability, string> = {
  available: "Available now",
  few: "Few units left",
  full: "Fully occupied",
  ask: "Call for availability",
};

export type Unit = {
  id: string;
  name: string;
  tagline: string;
  points: string[];
  /** Monthly rent in KES, e.g. 8000. null = "Call for rate". */
  rent: number | null;
  /** Deposit text, e.g. "One month's rent" or "KES 8,000". null = "Ask us". */
  deposit: string | null;
  availability: Availability;
  waMessage: string;
};

export const UNITS: Unit[] = [
  {
    id: "bedsitter",
    name: "Bedsitter / Studio",
    tagline: "Compact and affordable",
    points: [
      "Self-contained with private bathroom",
      "Ideal for students and young professionals",
      "Close to matatu routes",
    ],
    rent: null,
    deposit: null,
    availability: "ask",
    waMessage: "Hi Dear Mama Apartment, I'm interested in a bedsitter. Is one available, and what is the rent?",
  },
  {
    id: "one-bedroom",
    name: "One Bedroom",
    tagline: "Room to breathe",
    points: ["Separate bedroom and living area", "Modern finishes throughout", "Great for couples"],
    rent: null,
    deposit: null,
    availability: "ask",
    waMessage: "Hi Dear Mama Apartment, I'm interested in a one-bedroom. Is one available, and what is the rent?",
  },
  {
    id: "two-bedroom",
    name: "Two Bedroom",
    tagline: "Made for families",
    points: ["Spacious family living", "Balcony on select units", "Everything within reach downstairs"],
    rent: null,
    deposit: null,
    availability: "ask",
    waMessage: "Hi Dear Mama Apartment, I'm interested in a two-bedroom. Is one available, and what is the rent?",
  },
];

export const GYM = {
  /** Prices in KES. null = "Call for rate". */
  rates: [
    { label: "Daily pass", price: null as number | null },
    { label: "Monthly membership", price: null as number | null },
  ],
  /** time e.g. "5:30 AM – 9:00 PM". null = "Call to confirm". */
  hours: [
    { days: "Monday – Friday", time: null as string | null },
    { days: "Saturday", time: null as string | null },
    { days: "Sunday", time: null as string | null },
  ],
  waMessage: "Hi Dear Mama Gym, I'd like to know your membership rates and opening hours.",
};

export const FAQS = [
  {
    q: "How much is the deposit?",
    a: "The deposit depends on the unit type. Where it's listed on a unit card above, that's the amount; otherwise message us on WhatsApp and we'll give you the exact figure for the unit you want.",
  },
  {
    q: "Is there water and power?",
    a: "Yes. The building has a reliable water supply with storage and dependable power. Ask us how utilities are billed for the unit you're interested in.",
  },
  {
    q: "Is there parking?",
    a: "Yes, there is on-site parking. Mention it when you book a viewing and we'll show you the parking arrangement.",
  },
  {
    q: "When can I view a unit?",
    a: "Call or WhatsApp us to book a viewing. We'll confirm the current viewing times and which units are open to see.",
  },
  {
    q: "Is the building secure?",
    a: "Yes. It's a gated, secure compound, with ground-floor shops and the gym on site.",
  },
  {
    q: "Can I rent a shop or commercial space?",
    a: "Ground-floor commercial spaces are available from time to time. Call or WhatsApp us to ask what's currently open.",
  },
];
