import type { Metadata } from "next";
import Link from "next/link";
import { Home, Wrench, Phone, HardHat, Ship, ArrowRight, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "404 – Page Not Found",
  description: "The page you are looking for doesn't exist or has been moved.",
  robots: { index: false, follow: false },
};

const quickLinks = [
  { label: "Mechanical Sector", href: "/sectors/mechanical", icon: Wrench, color: "text-[#00C2FF]", bg: "bg-[#00C2FF]/10" },
  { label: "Civil Sector", href: "/sectors/civil", icon: HardHat, color: "text-emerald-500", bg: "bg-emerald-500/10" },
  { label: "Tourism & Marine", href: "/sectors/tourism", icon: Ship, color: "text-amber-500", bg: "bg-amber-500/10" },
  { label: "Contact Us", href: "/contact", icon: Phone, color: "text-[#0B1B4F]", bg: "bg-[#0B1B4F]/10" },
];

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-16 text-center bg-white">

      {/* Large branded 404 */}
      <div className="relative mb-6 select-none">
        <div className="text-[120px] sm:text-[160px] font-extrabold leading-none text-[#0B1B4F]/5 tracking-tighter pointer-events-none select-none">
          404
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <div className="w-16 h-16 rounded-2xl bg-[#0B1B4F]/5 border border-[#0B1B4F]/10 flex items-center justify-center">
              <AlertTriangle className="w-8 h-8 text-[#00C2FF]" />
            </div>
            <div className="text-4xl sm:text-5xl font-extrabold text-[#0B1B4F] tracking-tight">
              404
            </div>
          </div>
        </div>
      </div>

      {/* Message */}
      <div className="space-y-3 max-w-lg mb-10">
        <h1 className="section-heading text-2xl sm:text-3xl">Page Not Found</h1>
        <p className="text-sm text-slate-500 leading-relaxed">
          The page you're looking for doesn't exist, may have been moved, or the URL may be incorrect.
          Let us help you find what you need.
        </p>
      </div>

      {/* Primary CTA */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-[#0B1B4F] text-white font-bold px-7 py-3.5 rounded-full text-sm hover:bg-[#00C2FF] hover:text-[#0B1B4F] transition-all duration-300 shadow-lg mb-12"
      >
        <Home className="w-4 h-4" />
        Back to Homepage
      </Link>

      {/* Divider */}
      <div className="flex items-center gap-4 w-full max-w-md mb-8">
        <div className="flex-1 h-px bg-slate-200" />
        <span className="text-xs text-slate-400 font-medium uppercase tracking-widest">Or browse a sector</span>
        <div className="flex-1 h-px bg-slate-200" />
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-2xl">
        {quickLinks.map((link) => {
          const Icon = link.icon;
          return (
            <Link
              key={link.href}
              href={link.href}
              className="glass-card flex flex-col items-center gap-2.5 p-4 rounded-2xl hover:border-[#00C2FF] hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className={`w-10 h-10 rounded-xl ${link.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <Icon className={`w-5 h-5 ${link.color}`} />
              </div>
              <span className="text-xs font-semibold text-[#0B1B4F] text-center leading-tight">{link.label}</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#00C2FF] transition-colors" />
            </Link>
          );
        })}
      </div>

      {/* Footer note */}
      <p className="mt-10 text-[11px] text-slate-400">
        Need help?{" "}
        <Link href="/contact" className="text-[#00C2FF] font-semibold hover:underline">
          Contact our team
        </Link>{" "}
        or call{" "}
        <a href="tel:+919920350663" className="text-[#0B1B4F] font-semibold hover:text-[#00C2FF] transition-colors">
          +91 9920350663
        </a>
      </p>

    </div>
  );
}
