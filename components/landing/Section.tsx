import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
};

export function Section({
  id,
  children,
  className = "",
  containerClassName = "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
}: SectionProps) {
  return (
    <section id={id} className={`py-14 sm:py-20 lg:py-24 ${className}`}>
      <div className={containerClassName}>{children}</div>
    </section>
  );
}
