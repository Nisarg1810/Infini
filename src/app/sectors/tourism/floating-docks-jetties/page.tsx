import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { Ship, Anchor, CheckCircle2, ArrowRight } from "lucide-react";

export default function FloatingDocksJettiesPage() {
  return (
    <div className="py-12 space-y-16">
      
      {/* Hero Banner with Realistic Image Background */}
      <section className="relative text-white py-20 px-4 sm:px-6 lg:px-8 border-b border-infini-amber/20 overflow-hidden min-h-[45vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/floating_dock.png" 
            alt="Floating Pontoon Docks & Jetties" 
            fill
            className="object-cover brightness-75"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-infini-navy-dark/95 via-infini-navy/85 to-infini-navy-dark/75"></div>
        </div>

        <div className="max-w-7xl mx-auto space-y-4 relative z-10">
          <Breadcrumb />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-infini-amber/20 border border-infini-amber/40 text-infini-amber text-xs font-semibold backdrop-blur-md">
            <Ship className="w-3.5 h-3.5" />
            TOURISM SECTOR
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight">Floating Docks - Platforms - Jetties</h1>
          <p className="text-slate-200 text-sm max-w-2xl leading-relaxed">
            Modular floating dock systems, floating platforms, and floating jetties for tourism projects, ports, shipyards, and naval vessel docking.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
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
