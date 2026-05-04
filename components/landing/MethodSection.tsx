import {
  methodIntro,
  methodQuote,
  methodQuoteAttribution,
  methodSteps,
} from "@/content/landing";
import { Section } from "./Section";

export function MethodSection() {
  return (
    <Section className="bg-background">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">
          {methodIntro.kicker}
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
          {methodIntro.title}
        </h2>
        <p className="mt-2 font-display text-xl text-accent sm:text-2xl">
          {methodIntro.subtitle}
        </p>
        <p className="mx-auto mt-8 max-w-3xl text-left text-base leading-relaxed text-muted sm:text-lg md:text-center">
          {methodIntro.intro}
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:gap-8">
        {methodSteps.map((step) => (
          <article
            key={step.n}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8"
          >
            <span
              className="pointer-events-none absolute -right-2 -top-4 select-none font-display text-7xl font-bold leading-none text-accent/10 sm:text-8xl"
              aria-hidden
            >
              {step.n}
            </span>
            <span className="relative inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1 font-display text-xs font-semibold uppercase tracking-widest text-accent">
              <span className="h-1 w-1 rounded-full bg-accent" aria-hidden />
              Etapa {step.n}
            </span>
            <h3 className="relative mt-5 font-display text-xl font-semibold text-foreground">
              {step.title}
            </h3>
            <p className="relative mt-3 text-base leading-relaxed text-muted">
              {step.body}
            </p>
          </article>
        ))}
      </div>

      <blockquote className="mx-auto mt-14 max-w-3xl rounded-2xl border border-accent/20 bg-accent-soft/50 px-6 py-8 text-center sm:px-10">
        <p className="font-display text-lg italic leading-relaxed text-foreground sm:text-xl">
          {methodQuote}
        </p>
        <footer className="mt-4 text-sm font-medium text-accent">
          {methodQuoteAttribution}
        </footer>
      </blockquote>
    </Section>
  );
}
