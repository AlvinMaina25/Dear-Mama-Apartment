import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/lib/site";

export function FaqSection() {
  return (
    <section className="mt-16">
      <div className="mx-auto max-w-2xl text-center">
        <p className="kicker">Good to know</p>
        <h2 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">
          Frequently asked questions
        </h2>
      </div>
      <Accordion
        type="single"
        collapsible
        className="mx-auto mt-8 max-w-3xl rounded-3xl border border-border bg-card px-5 shadow-card sm:px-7"
      >
        {FAQS.map((item, i) => (
          <AccordionItem key={item.q} value={`faq-${i}`} className="last:border-b-0">
            <AccordionTrigger className="text-base font-semibold">{item.q}</AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
              {item.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
