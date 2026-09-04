import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { HardHat, CheckCircle2, ArrowRight } from "lucide-react";

export default function JettyWorksRepairsPage() {
  return (
    <div className="py-12 space-y-16">
      
      {/* ─── HEADER BANNER ─── */}
      <section className="bg-[#0B1B4F] text-white py-14 sm:py-18 px-4 sm:px-6 lg:px-8 border-b border-[#00C2FF]/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#00C2FF_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
        <div className="max-w-6xl mx-auto space-y-4 relative z-10">
          <Breadcrumb />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
            <HardHat className="w-3.5 h-3.5" />
            CIVIL SECTOR
          </div>
          <h1 className="section-heading text-white text-3xl sm:text-5xl font-extrabold tracking-tight">Jetty Construction &amp; Repairs</h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Civil construction including supply and installation of jetty fixtures: buffer stops, bollards, cleats, fenders, handrails, ladders, mast &amp; deck light assemblies.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-infini-navy">Jetty Civil Works & Fixtures Scope</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              INFINI Infra executes structural jetty repairs, deck rehabilitation, pile cap casting, and complete fixture fitting for port jetties, oil terminals, naval vessel berthing, and passenger ferry terminals.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm font-bold text-infini-navy flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-infini-emerald shrink-0" /> Buffer Stops & Bollards
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm font-bold text-infini-navy flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-infini-emerald shrink-0" /> Marine Fenders & Cleats
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm font-bold text-infini-navy flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-infini-emerald shrink-0" /> Handrails & Ladders
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm font-bold text-infini-navy flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-infini-emerald shrink-0" /> Mast & Deck Lighting
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm font-bold text-infini-navy flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-infini-emerald shrink-0" /> Concrete Deck Repairs
            </div>
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="glass-card-dark p-6 rounded-3xl text-white space-y-6 border border-infini-emerald/30 shadow-2xl">
            <h3 className="text-lg font-bold text-infini-emerald">Inquire Jetty Works</h3>
            <p className="text-xs text-slate-300">Submit your jetty repair or construction specifications.</p>
            <Link 
              href="/contact" 
              className="w-full bg-infini-emerald text-white hover:bg-white hover:text-infini-navy text-center py-3 rounded-xl text-xs font-bold block transition-all duration-300 shadow-lg"
            >
              Contact Marine Engineers →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
