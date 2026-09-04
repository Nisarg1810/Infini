"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

// Maps path segments to human-readable labels
const segmentLabels: Record<string, string> = {
  sectors: "Sectors",
  mechanical: "Mechanical",
  civil: "Civil",
  tourism: "Tourism & Marine",
  about: "About Us",
  contact: "Contact Us",
  career: "Careers",
  gallery: "Project Gallery",
  "crane-rail-fixtures": "Crane Rail Fixtures",
  "anti-corrosion-coating": "Anti-Corrosion Coating",
  "steel-aluminium-fabrication": "Steel & Aluminium Fabrication",
  "land-rail-survey": "Land & Rail Survey",
  "rdso-thermit-welding": "RDSO Thermit Welding",
  "railway-siding-works": "Railway Siding Works",
  "jetty-works-repairs": "Jetty Works & Repairs",
  "paver-block-works": "Paver Block Works",
  "drainage-works": "Drainage Works",
  "mass-concrete-works": "Mass Concrete Works",
  "rcc-pcc-girders": "RCC & PCC Girders",
  "floating-docks-jetties": "Floating Docks & Jetties",
  "seaplane-platforms": "Seaplane Platforms",
  "vision-mission": "Vision & Mission",
  "why-infini": "Why INFINI",
  "media-news": "Media & News",
};

// Segments that have no real page — skip them from the breadcrumb trail
const skipSegments = new Set(["sectors"]);

export default function Breadcrumb({ className = "" }: { className?: string }) {
  const pathname = usePathname();

  // Don't show breadcrumb on home page
  if (!pathname || pathname === "/") return null;

  const segments = pathname.split("/").filter(Boolean);

  // Build cumulative hrefs — skip any segment in skipSegments
  const crumbs: { label: string; href: string; isLast: boolean }[] = [];
  segments.forEach((seg, i) => {
    if (skipSegments.has(seg)) return; // skip this segment entirely
    crumbs.push({
      label: segmentLabels[seg] ?? seg.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
      href: "/" + segments.slice(0, i + 1).join("/"),
      isLast: false,
    });
  });

  // Mark last item
  if (crumbs.length > 0) crumbs[crumbs.length - 1].isLast = true;

  return (
    <nav aria-label="Breadcrumb" className={`mb-3 sm:mb-4 ${className}`}>
      <ol className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm text-slate-300">
        <li className="inline-flex items-center gap-1.5">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-slate-300 hover:text-white font-medium transition-colors"
          >
            <Home className="w-3.5 h-3.5 text-slate-400" />
            Home
          </Link>
        </li>

        {crumbs.map((crumb) => (
          <li key={crumb.href} className="inline-flex items-center gap-1.5">
            <ChevronRight className="w-3.5 h-3.5 text-slate-400/80 shrink-0" />
            {crumb.isLast ? (
              <span className="text-white font-semibold">{crumb.label}</span>
            ) : (
              <Link
                href={crumb.href}
                className="text-slate-300 hover:text-white font-medium transition-colors"
              >
                {crumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

