import { audience } from "@/content/landing";
import { Section } from "./Section";

export function AudienceSection() {
  return (
    <Section className="bg-muted-bg">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">
          {audience.sectionLabel}
        </p>
        <h2 className="mt-3 whitespace-pre-line font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
          {audience.title}
        </h2>
      </div>

      <ul className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-3">
        {audience.items.map((item) => (
          <li key={item.title}>
            <article className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
              <h3 className="font-display text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted">{item.body}</p>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}
