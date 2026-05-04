import {
  getCheckoutUrl,
  included,
  pricing,
} from "@/content/landing";
import { CtaLink } from "./CtaLink";
import { Section } from "./Section";

export function PricingSection() {
  const checkout = getCheckoutUrl();

  return (
    <Section id={pricing.id} className="scroll-mt-24 bg-background">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">
          {pricing.sectionLabel}
        </p>
        <h2 className="mt-3 whitespace-pre-line font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
          {pricing.title}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {pricing.rationale}
        </p>
      </div>

      <div className="relative mx-auto mt-12 max-w-lg overflow-hidden rounded-3xl border-2 border-accent/40 bg-card p-8 shadow-xl sm:p-10">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent/0 via-accent to-accent/0"
          aria-hidden
        />
        <p className="text-center text-sm font-medium uppercase tracking-widest text-muted">
          {pricing.productName}
        </p>

        <div className="mt-6 flex flex-col items-center">
          <p className="text-xs font-medium uppercase tracking-widest text-muted">
            12x sem juros
          </p>
          <p className="mt-1 font-display text-5xl font-bold leading-none text-accent sm:text-6xl">
            {pricing.installmentLabel}
          </p>
        </div>

        <div className="mt-6 flex items-center gap-3 text-muted">
          <span className="h-px flex-1 bg-border" aria-hidden />
          <span className="text-xs uppercase tracking-widest">ou</span>
          <span className="h-px flex-1 bg-border" aria-hidden />
        </div>

        <p className="mt-6 text-center font-display text-3xl font-semibold text-foreground sm:text-4xl">
          {pricing.cashLabel.replace(/^ou\s*/, "")}
        </p>
        <p className="mt-1 text-center text-sm text-muted">à vista no Pix ou cartão</p>

        <div className="mt-10 flex flex-col items-center gap-3">
          <CtaLink href={checkout} className="w-full sm:w-auto">
            {pricing.ctaLabel}
          </CtaLink>
          <p className="text-sm text-muted">{pricing.paymentNote}</p>
        </div>

        <div className="mt-10 rounded-2xl bg-accent-soft/80 p-6 text-center">
          <p className="text-2xl" aria-hidden>
            {pricing.guarantee.icon}
          </p>
          <h3 className="mt-2 font-display text-lg font-semibold text-foreground">
            {pricing.guarantee.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {pricing.guarantee.body}
          </p>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-2xl">
        <h3 className="text-center font-display text-xl font-semibold text-foreground">
          {included.title}
        </h3>
        <ul className="mt-8 space-y-4">
          {included.items.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span
                className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white"
                aria-hidden
              >
                ✓
              </span>
              <span className="text-base text-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
