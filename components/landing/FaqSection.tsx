import { faq } from "@/content/landing";
import { Section } from "./Section";

export function FaqSection() {
  return (
    <Section className="bg-muted-bg">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">
          {faq.sectionLabel}
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-foreground sm:text-4xl">
          {faq.title}
        </h2>
      </div>

      <div className="mx-auto mt-12 max-w-3xl space-y-3">
        {faq.items.map((item) => (
          <details
            key={item.q}
            className="group rounded-xl border border-border bg-card px-5 py-2 shadow-sm open:shadow-md"
          >
            <summary className="cursor-pointer list-none py-4 font-semibold text-foreground marker:content-none [&::-webkit-details-marker]:hidden">
              <span className="flex items-center justify-between gap-4">
                {item.q}
                <span
                  className="text-xl text-accent transition-transform group-open:rotate-45"
                  aria-hidden
                >
                  +
                </span>
              </span>
            </summary>
            <p className="border-t border-border pb-4 pt-2 text-base leading-relaxed text-muted">
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </Section>
  );
}
