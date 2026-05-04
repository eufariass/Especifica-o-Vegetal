import { finalCta, getCheckoutUrl } from "@/content/landing";
import { CtaLink } from "./CtaLink";
import { Section } from "./Section";

export function FinalCta() {
  const checkout = getCheckoutUrl();

  return (
    <Section className="bg-accent pb-28 pt-16 text-white sm:pb-24 sm:pt-20 lg:pb-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
          {finalCta.title}
        </h2>
        <p className="mt-4 text-lg font-medium text-white/95">{finalCta.subtitle}</p>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/85">
          {finalCta.note}
        </p>
        <div className="mt-10 flex flex-col items-center gap-4">
          <CtaLink href={checkout} variant="onAccent">
            {finalCta.ctaLabel}
          </CtaLink>
          <p className="text-sm text-white/80">{finalCta.priceLine}</p>
        </div>
      </div>
    </Section>
  );
}
