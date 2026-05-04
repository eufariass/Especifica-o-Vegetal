import Image from "next/image";
import { testimonialScreenshots } from "@/content/landing";
import { Section } from "./Section";

export function TestimonialScreenshots() {
  return (
    <Section className="bg-background">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">
          {testimonialScreenshots.sectionLabel}
        </p>
        <h2 className="mt-3 whitespace-pre-line font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
          {testimonialScreenshots.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {testimonialScreenshots.subtitle}
        </p>
      </div>

      <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-2 lg:gap-6">
        {testimonialScreenshots.items.map((item) => (
          <figure
            key={item.src}
            className="mb-5 break-inside-avoid overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md lg:mb-6"
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
              className="h-auto w-full"
              sizes="(min-width: 1024px) 560px, (min-width: 640px) 50vw, 100vw"
            />
          </figure>
        ))}
      </div>
    </Section>
  );
}
