import { problems } from "@/content/landing";
import { Section } from "./Section";

export function ProblemsSection() {
  return (
    <Section className="bg-background">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">
          {problems.sectionLabel}
        </p>
        <h2 className="mt-3 whitespace-pre-line font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
          {problems.title}
        </h2>
        <p className="mt-4 text-lg text-muted">{problems.subtitle}</p>
      </div>

      <ul className="mx-auto mt-12 max-w-3xl space-y-4">
        {problems.items.map((item) => (
          <li
            key={item}
            className="flex gap-4 rounded-xl border border-border bg-card px-4 py-4 sm:px-6"
          >
            <span
              className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-600"
              aria-hidden
            >
              ✕
            </span>
            <span className="text-base leading-relaxed text-foreground">{item}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
