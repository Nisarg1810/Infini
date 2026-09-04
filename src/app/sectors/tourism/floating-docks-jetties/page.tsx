import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { Ship, Anchor, CheckCircle2, ArrowRight } from "lucide-react";

export default function FloatingDocksJettiesPage() {
  return (
    <div className="py-12 space-y-16">
      
      {/* ─── HEADER BANNER ─── */}
      <section className="bg-[#0B1B4F] text-white py-14 sm:py-18 px-4 sm:px-6 lg:px-8 border-b border-[#00C2FF]/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#00C2FF_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
        <div className="max-w-6xl mx-auto space-y-4 relative z-10">
          <Breadcrumb />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
            <Ship className="w-3.5 h-3.5" />
            TOURISM &amp; MARINE SECTOR
          </div>
          <h1 className="section-heading text-white text-3xl sm:text-5xl font-extrabold tracking-tight">Floating Docks – Platforms – Jetties</h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Modular floating dock systems, floating platforms, and floating jetties for tourism projects, ports, shipyards, and naval vessel docking.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-infini-navy">Floating Structure Solutions</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              INFINI Infra designs, supplies, anchors, and installs floating pontoon docks, high-density polyethylene (HDPE) or concrete floating jetties, gangways, and pile guide systems engineered for fluctuating tidal zones.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="glass-card p-6 rounded-2xl border-l-4 border-l-infini-amber space-y-2">
              <h4 className="font-bold text-infini-navy text-sm">Tourism Waterfront Jetties</h4>
              <p className="text-xs text-slate-500">Floating passenger gangways and pontoon berths for luxury yachts and ferries.</p>
            </div>
            <div className="glass-card p-6 rounded-2xl border-l-4 border-l-infini-amber space-y-2">
              <h4 className="font-bold text-infini-navy text-sm">Naval & Shipyard Berthing</h4>
              <p className="text-xs text-slate-500">Heavy-duty floating platforms for naval vessel docking and shipyard repairs.</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="glass-card-dark p-6 rounded-3xl text-white space-y-6 border border-infini-amber/30 shadow-2xl">
            <h3 className="text-lg font-bold text-infini-amber">Floating Dock Inquiry</h3>
            <p className="text-xs text-slate-300">Request floating jetty design & tidal anchoring consultation.</p>
            <Link 
              href="/contact" 
              className="w-full bg-infini-amber text-white hover:bg-white hover:text-infini-navy text-center py-3 rounded-xl text-xs font-bold block transition-all duration-300 shadow-lg"
            >
              Consult Floating Dock Crew →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
