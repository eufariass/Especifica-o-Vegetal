import Link from "next/link";
import { footer, site } from "@/content/landing";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:flex-row lg:justify-between lg:text-left lg:px-8">
        <div>
          <p className="font-display text-lg font-semibold text-foreground">
            {site.shortTitle}
          </p>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
          <Link href="/privacidade" className="text-muted hover:text-foreground">
            {footer.legalLine}
          </Link>
          <Link href="/termos" className="text-muted hover:text-foreground">
            {footer.termsLine}
          </Link>
        </nav>
        <p className="text-sm text-muted">
          © {site.copyrightYear} Alexander Hulsmeyer — Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}
