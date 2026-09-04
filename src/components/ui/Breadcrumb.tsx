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
  about: "About",
  contact: "Contact",
  career: "Career",
  gallery: "Gallery",
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

export default function Breadcrumb() {
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
    <nav aria-label="Breadcrumb" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 pb-1">
      <ol className="flex flex-wrap items-center gap-1 text-xs text-slate-500">
        <li>
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-[#0B1B4F] font-semibold hover:text-[#00C2FF] transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            Home
          </Link>
        </li>

        {crumbs.map((crumb) => (
          <li key={crumb.href} className="inline-flex items-center gap-1">
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            {crumb.isLast ? (
              <span className="text-slate-400 font-medium">{crumb.label}</span>
            ) : (
              <Link
                href={crumb.href}
                className="text-[#0B1B4F] font-semibold hover:text-[#00C2FF] transition-colors"
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
