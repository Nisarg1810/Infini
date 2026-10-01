import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { Ship, Plane, Anchor, ArrowRight, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Tourism & Marine Waterfront Infrastructure | INFINI",
  description:
    "INFINI Infrastructure designs, supplies, and installs modular floating pontoon docks, seaplane landing platforms, and marine equipment leasing for coastal tourism, passenger ferries, and defense bases across India.",
  openGraph: {
    title: "Tourism & Marine Waterfront Infrastructure | INFINI",
    description:
      "Specialist supplier of floating docks, jetties, and seaplane platforms for coastal tourism, passenger terminals, naval defense installations, and marine infrastructure.",
    images: [{ url: "/images/tourism/modular_hdpe_floating_jetty_hd.jpg", width: 1200, height: 630, alt: "INFINI Tourism Marine Sector Floating Docks" }],
  },
};

export default function TourismSectorPage() {
  const services = [
    {
      id: "floating-docks",
      title: "Floating Docks, Platforms & Jetties",
      subtitle: "Modular HDPE, Marine Aluminium & Concrete Pontoons",
      description: "Modular pontoon dock systems, anti-skid HDPE cubes, drive-on jet ski berths, and heavy wave-attenuating concrete breakwaters for coastal tourism, ferry terminals, and ports.",
      href: "/sectors/tourism/floating-docks-jetties",
      image: "/images/tourism/modular_hdpe_floating_jetty_hd.jpg",
      icon: Ship,
      badge: "High-Density Polyethylene & Aluminium",
    },
    {
      id: "seaplane",
      title: "Seaplane Landing Platforms",
      subtitle: "DGCA-Compliant Water Aerodromes",
      description: "Precision low-freeboard pontoon docks, non-marking elastomer fendering, articulated ADA-compliant passenger ramps, and Seaflex submerged moorings for coastal and island aviation.",
      href: "/sectors/tourism/seaplane-platforms",
      image: "/images/tourism/seaplane_floating_platform_hd.jpg",
      icon: Plane,
      badge: "DGCA & ICAO Compliant",
    },
    {
      id: "marina-berths",
      title: "Luxury Marina & Berth Infrastructure",
      subtitle: "Aluminium Pontoon Walkways & Pedestals",
      description: "Structural marine aluminium 6061-T6 finger pontoons with composite teak decking, IP67 smart service pedestals (power & potable water), and silent pile guide collars.",
      href: "/sectors/tourism/floating-docks-jetties",
      image: "/images/tourism/aluminium_marina_pontoons_hd.jpg",
      icon: Anchor,
      badge: "Marine-Grade 6061-T6",
    }
  ];

  return (
    <div className="pb-16 space-y-16">
      {/* ─── HEADER BANNER WITH VIDEO BACKGROUND ─── */}
      <section className="relative bg-[#0B1B4F] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#00C2FF]/20 overflow-hidden">
        {/* Looping Ambient Marine Video */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover opacity-30"
          >
            <source src="/videos/marine_bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1B4F] via-[#0B1B4F]/85 to-[#0B1B4F]/95" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,194,255,0.2),transparent_60%)]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto space-y-4">
          <Breadcrumb />
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00C2FF]/15 border border-[#00C2FF]/30 text-[#00C2FF] text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
            <Ship className="w-3.5 h-3.5" />
            WATERFRONT &amp; MARINA SECTOR
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight max-w-4xl">
            Waterfront, Marina &amp; <span className="text-[#00C2FF]">Tourism Infrastructure</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-3xl leading-relaxed font-light">
            Engineered modular floating pontoon docks, water aerodrome seaplane terminals, articulated tidal gangways, and marina berthing solutions for coastal tourism and government installations.
          </p>
        </div>
      </section>

      {/* ─── SERVICES GRID ─── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.id} 
                id={item.id} 
                className="glass-card-interactive rounded-3xl overflow-hidden border border-slate-200/80 flex flex-col justify-between group hover:border-[#00C2FF]/50 transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                    <Image 
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-3 text-[10px] font-bold uppercase tracking-wider bg-[#0B1B4F]/90 text-[#00C2FF] border border-[#00C2FF]/30 px-2.5 py-0.5 rounded-full backdrop-blur-sm">
                      {item.badge}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-xl bg-[#00C2FF]/10 text-[#00C2FF] flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{item.subtitle}</span>
                    </div>
                    <h3 className="text-lg font-bold text-[#0B1B4F] group-hover:text-[#00C2FF] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between">
                  <Link 
                    href={item.href} 
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B1B4F] group-hover:text-[#00C2FF] transition-colors"
                  >
                    Explore Technical Specs <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link 
                    href="/contact" 
                    className="text-[11px] font-semibold text-slate-400 hover:text-amber-600 transition-colors"
                  >
                    Inquire →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── VETTING & CREDIBILITY STRIP ─── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <h4 className="text-base font-bold text-[#0B1B4F] flex items-center gap-2 justify-center md:justify-start">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              Engineered &amp; Certified for Maritime Tenders
            </h4>
            <p className="text-xs text-slate-600 max-w-2xl">
              All floating structures and tidal mooring calculations undergo rigorous hydrodynamic modeling compliant with PIANC marina guidelines, Ocean Engineering institutional vetting, and State Maritime Board safety standards.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 bg-[#0B1B4F] text-white hover:bg-[#00C2FF] hover:text-[#0B1B4F] text-xs font-bold px-6 py-3.5 rounded-xl transition-all duration-300 shadow-md"
          >
            Consult Waterfront Specialists
          </Link>
        </div>
      </section>

    </div>
  );
}
