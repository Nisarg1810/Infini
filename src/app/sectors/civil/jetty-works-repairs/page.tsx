import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { HardHat, CheckCircle2, ArrowRight } from "lucide-react";

export default function JettyWorksRepairsPage() {
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
            <HardHat className="w-3.5 h-3.5" />
            CIVIL SECTOR
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight max-w-3xl">
            Jetty Construction &amp; <span className="text-[#00C2FF]">Repairs</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed font-light">
            Civil construction including supply and installation of jetty fixtures: buffer stops, bollards, cleats, fenders, handrails, ladders, mast &amp; deck light assemblies.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#0B1B4F]">Jetty Civil Works &amp; Fixtures Scope</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              INFINI Infra executes structural jetty repairs, deck rehabilitation, pile cap casting, and complete fixture fitting for port jetties, oil terminals, naval vessel berthing, and passenger ferry terminals.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="glass-card p-5 rounded-2xl border-l-4 border-l-emerald-500 space-y-2">
                <h4 className="font-bold text-[#0B1B4F] text-sm">Jetty Fixtures &amp; Hardware</h4>
                <p className="text-xs text-slate-500">Mooring bollards, cleats, buffer stops, rubber fenders, and access ladders.</p>
              </div>
              <div className="glass-card p-5 rounded-2xl border-l-4 border-l-emerald-500 space-y-2">
                <h4 className="font-bold text-[#0B1B4F] text-sm">Concrete Deck &amp; Structural Repair</h4>
                <p className="text-xs text-slate-500">Pile cap casting, deck slab retrofitting, expansion jointing, and marine lighting.</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#0B1B4F]">Key Highlights</h3>
            <ul className="space-y-3 text-xs text-slate-700">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Heavy marine bollard anchoring (5T to 150T capacity) and arch/cell rubber fender system installation.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Structural concrete spall repair, cathodically protected deck overlays, and high-mast lighting poles.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Safety handrails, marine stainless steel ladders, and non-slip walkway coating applications.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="glass-card-dark p-6 rounded-3xl text-white space-y-6 border border-emerald-500/30 shadow-2xl sticky top-24">
            <h3 className="text-lg font-bold text-emerald-400">Inquire Jetty Works</h3>
            <p className="text-xs text-slate-300">Submit your jetty repair or construction specifications for technical consultation.</p>
            <Link 
              href="/contact" 
              className="w-full bg-emerald-500 text-white hover:bg-white hover:text-[#0B1B4F] text-center py-3 rounded-xl text-xs font-bold block transition-all duration-300 shadow-lg"
            >
              Contact Marine Engineers →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
