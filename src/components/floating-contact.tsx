import { useEffect, useState } from "react";
import { Phone, X } from "lucide-react";
import { SITE, waLink } from "@/lib/site";

const GREETING = "Hello Dear Mama Apartment, I'd like to inquire about availability.";
const DISMISS_KEY = "wa-bubble-dismissed";

/** WhatsApp glyph (lucide has no brand icon). */
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false" className={className} fill="currentColor">
      <path d="M16.003 3C8.83 3 3 8.83 3 16c0 2.292.6 4.53 1.74 6.5L3 29l6.68-1.72A12.95 12.95 0 0 0 16.003 29C23.17 29 29 23.17 29 16S23.17 3 16.003 3Zm0 23.7c-1.95 0-3.86-.53-5.53-1.52l-.4-.24-3.96 1.02 1.06-3.86-.26-.4A10.66 10.66 0 0 1 5.3 16c0-5.9 4.8-10.7 10.703-10.7S26.7 10.1 26.7 16s-4.8 10.7-10.697 10.7Zm5.87-8c-.32-.16-1.9-.94-2.2-1.04-.3-.11-.5-.16-.72.16-.21.32-.83 1.04-1.02 1.26-.19.21-.38.24-.7.08-.32-.16-1.36-.5-2.59-1.6-.96-.85-1.6-1.9-1.79-2.22-.19-.32-.02-.5.14-.66.15-.14.32-.38.48-.56.16-.19.21-.32.32-.54.1-.21.05-.4-.03-.56-.08-.16-.72-1.74-.99-2.38-.26-.62-.52-.54-.72-.55h-.62c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66s1.15 3.09 1.31 3.3c.16.21 2.26 3.45 5.47 4.84.76.33 1.36.53 1.82.68.77.24 1.46.2 2.01.12.61-.09 1.9-.78 2.17-1.53.27-.75.27-1.4.19-1.53-.08-.13-.29-.21-.61-.37Z" />
    </svg>
  );
}

/**
 * Floating contact stack, bottom-right on every page:
 *  - greeting bubble (appears after a few seconds, dismissible)
 *  - Call button (phones only)
 *  - WhatsApp button
 * Everything is position:fixed, so it can never widen the page.
 */
export function FloatingContact() {
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(DISMISS_KEY)) return;
    } catch {
      /* storage unavailable — just show the bubble */
    }
    const show = setTimeout(() => setShowBubble(true), 5000);
    const hide = setTimeout(() => setShowBubble(false), 22000);
    return () => {
      clearTimeout(show);
      clearTimeout(hide);
    };
  }, []);

  function dismiss() {
    setShowBubble(false);
    try {
      sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {
      /* ignore */
    }
  }

  return (
    <div
      className="fixed z-[60] flex flex-col items-end gap-3"
      style={{
        right: "max(1rem, env(safe-area-inset-right))",
        bottom: "max(1rem, env(safe-area-inset-bottom))",
      }}
    >
      {showBubble && (
        <div
          role="status"
          className="relative max-w-[min(16rem,calc(100vw-2rem))] rounded-2xl border border-border bg-card p-3 pr-9 text-sm text-card-foreground shadow-elegant animate-in fade-in slide-in-from-bottom-2 duration-300"
        >
          <a
            href={waLink(GREETING)}
            target="_blank"
            rel="noreferrer noopener"
            onClick={dismiss}
            className="block leading-snug"
          >
            Looking for a house? <span className="font-bold text-primary">Chat with us</span> on WhatsApp.
          </a>
          <button
            type="button"
            onClick={dismiss}
            aria-label="Dismiss message"
            className="absolute right-1.5 top-1.5 inline-flex size-6 items-center justify-center rounded-full text-muted-foreground hover:bg-secondary"
          >
            <X className="size-3.5" />
          </button>
        </div>
      )}

      <a
        href={SITE.phoneTel}
        aria-label={`Call us on ${SITE.phoneDisplay}`}
        className="flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-elegant ring-1 ring-black/5 transition-transform active:scale-95 sm:hidden"
      >
        <Phone className="size-6" />
      </a>

      <a
        href={SITE.whatsapp}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Chat with us on WhatsApp"
        className="relative flex items-center gap-2 rounded-full bg-[#25D366] p-3.5 text-white shadow-elegant ring-1 ring-black/5 transition-transform duration-200 hover:scale-105 hover:bg-[#1ebe5a] active:scale-95 sm:px-5 sm:py-3"
      >
        <span
          aria-hidden="true"
          className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/50 motion-reduce:hidden"
        />
        <WhatsAppIcon className="size-7 shrink-0" />
        <span className="hidden text-sm font-bold sm:inline">Chat on WhatsApp</span>
      </a>
    </div>
  );
}
