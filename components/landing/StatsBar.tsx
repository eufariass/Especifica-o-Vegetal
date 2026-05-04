import { stats } from "@/content/landing";

export function StatsBar() {
  return (
    <div className="border-y border-border bg-card">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px divide-x divide-border bg-border lg:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center justify-center bg-card px-4 py-8 text-center sm:py-10"
          >
            <p className="font-display text-3xl font-bold tabular-nums text-accent sm:text-4xl whitespace-pre-line">
              {item.value}
            </p>
            <p className="mt-2 text-xs font-medium uppercase tracking-wide text-muted sm:text-sm">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
