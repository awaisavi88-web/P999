import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface Crumb {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  crumbs: Crumb[];
}

export default function Breadcrumbs({ crumbs }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center gap-1 text-xs text-slate-500 flex-wrap"
    >
      <Link
        href="/"
        className="flex items-center gap-1 hover:text-gold-400 transition-colors"
      >
        <Home size={11} />
        <span>Home</span>
      </Link>
      {crumbs.map((crumb, i) => (
        <span key={i} className="flex items-center gap-1">
          <ChevronRight size={11} className="text-slate-700 flex-shrink-0" />
          {crumb.href ? (
            <Link
              href={crumb.href}
              className="hover:text-gold-400 transition-colors"
            >
              {crumb.label}
            </Link>
          ) : (
            <span className="text-slate-400">{crumb.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
