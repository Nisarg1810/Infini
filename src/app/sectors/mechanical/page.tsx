import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { Wrench, Shield, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Mechanical Engineering Sector",
  description:
    "INFINI Infrastructure's Mechanical Engineering division offers crane rail fixture installation, RDSO approved alumina thermit welding, Metguard anti-corrosion coating, steel & aluminium fabrication, and railway siding works.",
  openGraph: {
    title: "Mechanical Engineering Sector | INFINI Infrastructure & Engineering",
    description:
      "Expert crane rail supply & alignment, thermit welding, protective coating supply & application across ports, shipyards, and industrial railways in India & Middle East.",
    images: [{ url: "/images/crane_rail.png", width: 1200, height: 630, alt: "INFINI Mechanical Engineering Sector" }],
  },
};

export default function MechanicalSectorPage() {
  const services = [
    {
      id: "crane-rail",
      title: "Crane Rail Fixtures – Supply & Install",
      description: "Precision crane rail design, supply, alignment, and installation works for Ports, Shipyards, Container Terminals, Steel & Cement Plants."
    },
    {
      id: "metguard",
      title: "Anti Corrosion Coating Substance (Metguard)",
      description: "Official channel partner for Visioncraft Industries Metguard protective coating substance (Supply & Application) across Maharashtra, Goa, Gujarat, Andhra Pradesh & Middle East."
    },
    {
      id: "fabrication",
      title: "Steel & Aluminium Fabrication",
      description: "All types of heavy industrial steel and aluminium structural fabrication, including reefer platforms and specialized marine structures."
    },
    {
      id: "survey",
      title: "Land & Rail Survey Works",
      description: "Topographical surveying, rail alignment, land mapping, and precision geodetic measurement services."
    },
    {
      id: "thermit-welding",
      title: "RDSO Approved Alumina Thermit Welding Kits",
      description: "Supply and installation of RDSO approved alumina thermit welding kits for all types of rail track welding works."
    },
    {
      id: "railway-siding",
      title: "Railway Siding Works",
      description: "Turnkey railway siding construction and track maintenance for container terminals, ports, and industrial logistics parks."
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
            <Wrench className="w-3.5 h-3.5" />
            MECHANICAL SECTOR
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight max-w-3xl">
            Mechanical Engineering <span className="text-[#00C2FF]">Sector</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed font-light">
            Crane rail installations, RDSO thermit welding, Metguard protective coatings, and heavy structural fabrication.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((item) => (
            <div key={item.id} id={item.id} className="glass-card-interactive p-8 rounded-3xl space-y-4 border-l-4 border-l-[#00C2FF] group">
              <div className="w-12 h-12 rounded-2xl bg-[#0B1B4F]/5 border border-[#0B1B4F]/15 text-[#0B1B4F] flex items-center justify-center group-hover:bg-[#0B1B4F] group-hover:text-[#00C2FF] transition-all duration-300 shadow-sm">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0B1B4F] group-hover:text-[#00C2FF] transition-colors">{item.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
              <div className="pt-2">
                <Link href="/contact" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B1B4F] hover:text-[#00C2FF] transition-colors">
                  Inquire for {item.title.split("–")[0]} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
