import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { Ship, CheckCircle2, ArrowRight } from "lucide-react";

export default function SeaplanePlatformsPage() {
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
          <h1 className="text-4xl font-extrabold tracking-tight">Seaplane Landing Platforms</h1>
          <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
            Engineered waterfront floating platforms, boarding ramps, and floating access structures for coastal &amp; island seaplane aviation.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#0B1B4F]">Seaplane Terminal Infrastructure</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              We design and install floating seaplane docks equipped with soft marine fender protection, non-slip decking, passenger waiting walkways, and heavy mooring anchors compliant with civil aviation and maritime safety norms.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="glass-card p-5 rounded-2xl border-l-4 border-l-amber-500 space-y-2">
                <h4 className="font-bold text-[#0B1B4F] text-sm">Floating Aviation Decks</h4>
                <p className="text-xs text-slate-500">Soft-buffered pontoon boarding platforms for seaplane passengers and crew.</p>
              </div>
              <div className="glass-card p-5 rounded-2xl border-l-4 border-l-amber-500 space-y-2">
                <h4 className="font-bold text-[#0B1B4F] text-sm">Coastal &amp; Island Terminals</h4>
                <p className="text-xs text-slate-500">Tidal-adaptive gangways and heavy anchor systems for island tourism routes.</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#0B1B4F]">Key Highlights</h3>
            <ul className="space-y-3 text-xs text-slate-700">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>Impact-resistant soft rubber fender collars to prevent float fuselage damage during docking.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>Heavy-duty mooring systems engineered for high wave action and rapid passenger embarking.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>Compliance with Director General of Civil Aviation (DGCA) waterfront safety guidelines.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="glass-card-dark p-6 rounded-3xl text-white space-y-6 border border-amber-500/30 shadow-2xl sticky top-24">
            <h3 className="text-lg font-bold text-amber-400">Inquire Seaplane Docks</h3>
            <p className="text-xs text-slate-300">Consult on seaplane landing platform installation and island aviation infrastructure.</p>
            <Link 
              href="/contact" 
              className="w-full bg-amber-500 text-white hover:bg-white hover:text-[#0B1B4F] text-center py-3 rounded-xl text-xs font-bold block transition-all duration-300 shadow-lg"
            >
              Contact Aviation Docks Team →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
