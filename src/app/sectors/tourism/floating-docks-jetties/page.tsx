import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { Ship, CheckCircle2, ArrowRight } from "lucide-react";

export default function FloatingDocksJettiesPage() {
  return (
    <div className="py-12 space-y-16">
      
      {/* ─── HEADER BANNER ─── */}
      <section className="bg-[#0B1B4F] text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-[#00C2FF]/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#00C2FF_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto space-y-4 relative z-10">
          <Breadcrumb />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
            <Ship className="w-3.5 h-3.5" />
            TOURISM &amp; MARINE SECTOR
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight">Floating Docks - Platforms - Jetties</h1>
          <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
            Modular floating dock systems, floating platforms, and floating jetties for tourism projects, ports, shipyards, and naval vessel docking.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#0B1B4F]">Floating Structure Solutions</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              INFINI Infra designs, supplies, anchors, and installs floating pontoon docks, high-density polyethylene (HDPE) or concrete floating jetties, gangways, and pile guide systems engineered for fluctuating tidal zones.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="glass-card p-5 rounded-2xl border-l-4 border-l-amber-500 space-y-2">
                <h4 className="font-bold text-[#0B1B4F] text-sm">Tourism Waterfront Jetties</h4>
                <p className="text-xs text-slate-500">Floating passenger gangways and pontoon berths for luxury yachts and ferries.</p>
              </div>
              <div className="glass-card p-5 rounded-2xl border-l-4 border-l-amber-500 space-y-2">
                <h4 className="font-bold text-[#0B1B4F] text-sm">Naval &amp; Shipyard Berthing</h4>
                <p className="text-xs text-slate-500">Heavy-duty floating platforms for naval vessel docking and shipyard repairs.</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#0B1B4F]">Key Highlights</h3>
            <ul className="space-y-3 text-xs text-slate-700">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>Modular HDPE cube floaters and marine-grade aluminium frame pontoons with composite decking.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>Self-adjusting gangway bridges, pile guide collars, and heavy chain/seaflex anchoring for high tidal ranges.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>Complete turnkey installation for resort marinas, passenger water transport, and seaplane boarding.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="glass-card-dark p-6 rounded-3xl text-white space-y-6 border border-amber-500/30 shadow-2xl sticky top-24">
            <h3 className="text-lg font-bold text-amber-400">Floating Dock Inquiry</h3>
            <p className="text-xs text-slate-300">Request floating jetty design &amp; tidal anchoring consultation.</p>
            <Link 
              href="/contact" 
              className="w-full bg-amber-500 text-white hover:bg-white hover:text-[#0B1B4F] text-center py-3 rounded-xl text-xs font-bold block transition-all duration-300 shadow-lg"
            >
              Consult Floating Dock Crew →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
