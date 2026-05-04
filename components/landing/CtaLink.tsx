import Link from "next/link";
import type { ReactNode } from "react";

type CtaLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "onAccent";
  className?: string;
  icon?: ReactNode;
};

export function CtaLink({
  href,
  children,
  variant = "primary",
  className = "",
  icon,
}: CtaLinkProps) {
  const base =
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-center text-base font-semibold transition-colors motion-safe:transition-transform motion-safe:active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

  const styles = {
    primary:
      "bg-accent text-white hover:bg-accent-hover focus-visible:outline-accent",
    secondary:
      "border-2 border-accent bg-card text-accent hover:bg-accent-soft focus-visible:outline-accent",
    ghost:
      "text-accent underline-offset-4 hover:underline focus-visible:outline-accent",
    onAccent:
      "bg-white text-accent hover:bg-accent-soft focus-visible:outline-white",
  };

  const isExternal = href.startsWith("http");
  const combined = `${base} ${styles[variant]} ${className}`;

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combined}
      >
        {children}
        {icon ??
          (variant === "primary" || variant === "onAccent" ? (
            <span aria-hidden>→</span>
          ) : null)}
      </a>
    );
  }

  return (
    <Link href={href} className={combined}>
      {children}
      {icon ??
        (variant === "primary" || variant === "onAccent" ? (
          <span aria-hidden>→</span>
        ) : null)}
    </Link>
  );
}
