import { getCheckoutUrl, hero } from "@/content/landing";
import { CtaLink } from "./CtaLink";

export function Hero() {
  const checkout = getCheckoutUrl();

  return (
    <header className="relative overflow-hidden bg-[#0b1f15] pb-16 pt-10 sm:pb-20 sm:pt-14 lg:pb-40 lg:pt-32 xl:pb-48 xl:pt-40">
      <video
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(11,31,21,0.55)_0%,rgba(11,31,21,0.8)_70%,rgba(11,31,21,0.95)_100%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
          </span>
          <p className="text-xs font-semibold uppercase tracking-widest text-white sm:text-sm">
            {hero.eyebrow}
          </p>
        </div>
        <p className="mt-4 text-center text-sm text-white/75 sm:text-base lg:mt-6">
          {hero.courseName}
        </p>

        <h1
          className="mx-auto mt-8 max-w-4xl text-balance text-center font-display text-[clamp(2rem,5.5vw,3.75rem)] font-semibold leading-[1.1] tracking-tight text-white lg:mt-12"
          style={{ textShadow: "0 2px 24px rgba(0,0,0,0.45)" }}
        >
          {hero.headline.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-center font-display text-xl font-medium text-accent-soft sm:text-2xl lg:mt-10">
          {hero.subheadline}
        </p>
        <p
          className="mx-auto mt-5 max-w-2xl text-center text-base leading-relaxed text-white/85 sm:text-lg lg:mt-7"
          style={{ textShadow: "0 1px 12px rgba(0,0,0,0.35)" }}
        >
          {hero.supporting}
        </p>

        <div className="mt-10 flex flex-col items-center lg:mt-14">
          <CtaLink href={checkout} className="px-8 py-4 text-lg shadow-xl shadow-black/30">
            {hero.ctaLabel}
          </CtaLink>
        </div>
      </div>
    </header>
  );
}
