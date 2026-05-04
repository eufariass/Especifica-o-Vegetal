import { bonus } from "@/content/landing";
import { Section } from "./Section";

export function BonusSection() {
  return (
    <Section className="border-y border-border bg-card">
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center sm:flex-row sm:text-left">
        <span
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-accent text-2xl text-white"
          aria-hidden
        >
          {bonus.icon}
        </span>
        <div className="mt-6 sm:ml-8 sm:mt-0">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            {bonus.label}
          </p>
          <h2 className="mt-2 font-display text-2xl font-semibold text-foreground sm:text-3xl">
            {bonus.title}
          </h2>
          <p className="mt-2 text-muted">{bonus.description}</p>
        </div>
      </div>
    </Section>
  );
}
