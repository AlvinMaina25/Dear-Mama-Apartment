import { Link } from "@tanstack/react-router";
import { Building2, MapPin, MessageCircle, Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="band-deep text-primary-foreground/90">
      <div className="mx-auto grid max-w-6xl gap-10 break-words px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex size-9 items-center justify-center rounded-xl bg-accent text-accent-foreground">
              <Building2 className="size-5" />
            </span>
            <span className="font-display text-lg font-extrabold tracking-tight text-primary-foreground">
              Dear Mama Apartment
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
            Residential and mixed-use living in Thika — rentals, local
            businesses, and a community gym under one roof.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-widest text-accent">
            Explore
          </h3>
          <ul className="mt-4 space-y-2 text-sm font-medium">
            <li><Link to="/" className="transition-colors hover:text-accent">Home</Link></li>
            <li><Link to="/rentals" className="transition-colors hover:text-accent">Rentals</Link></li>
            <li><Link to="/gym" className="transition-colors hover:text-accent">Dear Mama Gym</Link></li>
            <li><Link to="/contact" className="transition-colors hover:text-accent">Contact & Location</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-widest text-accent">
            Get in touch
          </h3>
          <ul className="mt-4 space-y-3 text-sm font-medium">
            <li>
              <a href={SITE.phoneTel} className="flex items-center gap-2.5 transition-colors hover:text-accent">
                <Phone className="size-4 shrink-0" />
                {SITE.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 transition-colors hover:text-accent"
              >
                <MessageCircle className="size-4 shrink-0" />
                Chat on WhatsApp
              </a>
            </li>
            <li className="flex items-start gap-2.5 text-primary-foreground/70">
              <MapPin className="mt-0.5 size-4 shrink-0" />
              <span>
                {SITE.address}
                <br />
                {SITE.addressDetail}
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 pb-32 text-center text-xs sm:pb-5 text-primary-foreground/60">
        © {new Date().getFullYear()} Dear Mama Apartment · Thika, Kenya
      </div>
    </footer>
  );
}
