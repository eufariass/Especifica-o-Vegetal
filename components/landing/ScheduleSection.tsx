import { schedule } from "@/content/landing";
import { Section } from "./Section";

export function ScheduleSection() {
  return (
    <Section className="bg-background">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">
          {schedule.sectionLabel}
        </p>
        <h2 className="mt-3 whitespace-pre-line font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
          {schedule.title}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {schedule.description}
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
        {schedule.sessions.map((s) => (
          <article
            key={s.day}
            className="rounded-2xl border-2 border-accent/30 bg-accent-soft/40 p-6 text-center sm:p-8"
          >
            <div className="flex items-center justify-center gap-2 text-accent">
              <span className="text-sm font-semibold uppercase tracking-wide">
                {s.month}
              </span>
            </div>
            <p className="mt-2 font-display text-5xl font-bold tabular-nums text-foreground">
              {s.day}
            </p>
            <h3 className="mt-4 font-display text-xl font-semibold text-foreground">
              {s.title}
            </h3>
            <p className="mt-2 text-sm text-muted sm:text-base">{s.hours}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
