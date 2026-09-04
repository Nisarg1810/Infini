import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { Ship, Anchor, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Tourism & Marine Sector",
  description:
    "INFINI Infrastructure supplies and installs modular floating pontoon docks, seaplane landing platforms, marine jetties, and offers marine equipment leasing services for coastal tourism and defense projects across India.",
  openGraph: {
    title: "Tourism & Marine Sector | INFINI Infrastructure & Engineering",
    description:
      "Specialist supplier of floating docks, jetties, and seaplane platforms for coastal tourism, passenger terminals, naval defense installations, and marine infrastructure.",
    images: [{ url: "/images/marine_jetty.png", width: 1200, height: 630, alt: "INFINI Tourism Marine Sector Floating Docks" }],
  },
};

export default function TourismSectorPage() {
  const services = [
    {
      id: "floating-docks",
      title: "Floating Docks - Platforms - Jetties",
      description: "Modular floating dock systems, platforms, and floating jetties for coastal tourism projects, commercial ports, shipyards, and naval vessel docking."
    },
    {
      id: "seaplane",
      title: "Seaplane Landing Platforms",
      description: "Engineered waterfront floating platforms and access structures for island tourism, coastal aviation, and seaplane boarding terminals."
    },
    {
      id: "marine-hiring",
      title: "Marine Equipment Leasing & Hiring Services",
      description: "Leasing services for marine equipment including barges, dredgers, life-rafts, marine navigation beacons, and personal passenger boats / yachts."
    }
  ];

  return (
    <div className="pb-12 space-y-16">
      {/* ─── HEADER BANNER ─── */}
      <section className="relative bg-[#0B1B4F] text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-[#00C2FF]/20 overflow-hidden">
        {/* Glow & Grid Overlays */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,194,255,0.18),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(11,27,79,0.95),transparent_70%)]" />
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
              backgroundSize: "36px 36px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto space-y-4">
          <Breadcrumb />
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00C2FF]/15 border border-[#00C2FF]/30 text-[#00C2FF] text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
            <Ship className="w-3.5 h-3.5" />
            TOURISM &amp; MARINE SECTOR
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight max-w-3xl">
            Tourism &amp; Waterfront <span className="text-[#00C2FF]">Sector</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed font-light">
            Floating docks, seaplane landing platforms, naval vessel docking, and marine equipment hiring services.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((item) => (
            <div key={item.id} id={item.id} className="glass-card-interactive p-8 rounded-3xl space-y-4 border-l-4 border-l-amber-500 flex flex-col justify-between group hover:border-amber-500">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-600 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 shadow-sm">
                  <Ship className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0B1B4F] group-hover:text-amber-600 transition-colors">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
              </div>
              <div className="pt-4 border-t border-slate-200">
                <Link href="/contact" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B1B4F] hover:text-amber-600 transition-colors">
                  Inquire for Requirements <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
