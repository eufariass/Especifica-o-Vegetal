import Image from "next/image";
import { professor } from "@/content/landing";
import { Section } from "./Section";

export function ProfessorSection() {
  return (
    <Section className="bg-muted-bg">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-2xl shadow-lg lg:mx-0">
          <Image
            src={professor.imageSrc}
            alt={professor.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 480px"
            priority={false}
          />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            {professor.eyebrow}
          </p>
          <p className="mt-2 text-sm font-medium text-muted">{professor.title}</p>
          <h2 className="mt-4 whitespace-pre-line font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
            {professor.name}
          </h2>
          {professor.bio.map((paragraph, i) => (
            <p key={i} className="mt-6 text-base leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
          <ul className="mt-8 flex flex-wrap gap-2">
            {professor.roles.map((role) => (
              <li key={role}>
                <span className="inline-block rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground">
                  {role}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
