import Link from "next/link";
import { HardHat, CheckCircle2, ArrowRight } from "lucide-react";

export default function JettyWorksRepairsPage() {
  return (
    <div className="py-12 space-y-16">
      
      {/* Hero Banner with Realistic Image Background */}
      <section className="relative text-white py-20 px-4 sm:px-6 lg:px-8 border-b border-infini-emerald/20 overflow-hidden min-h-[45vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/jetty_construction.png" 
            alt="Jetty Civil Construction" 
            className="w-full h-full object-cover filter brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-infini-navy-dark/95 via-infini-navy/85 to-infini-navy-dark/75"></div>
        </div>

        <div className="max-w-7xl mx-auto space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-infini-emerald/20 border border-infini-emerald/40 text-infini-emerald text-xs font-semibold backdrop-blur-md">
            <HardHat className="w-3.5 h-3.5" />
            CIVIL SECTOR
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight">Jetty Construction & Repairs</h1>
          <p className="text-slate-200 text-sm max-w-2xl leading-relaxed">
            Civil construction including supply and installation of jetty fixtures: buffer stops, bollards, cleats, fenders, handrails, ladders, mast & deck light assemblies.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
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
