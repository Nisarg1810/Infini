import Link from "next/link";
import { Wrench, CheckCircle2, ArrowRight } from "lucide-react";

export default function SteelAluminiumFabricationPage() {
  return (
    <div className="py-12 space-y-16">
      <section className="bg-infini-navy text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-infini-cyan/20">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-infini-cyan/10 border border-infini-cyan/30 text-infini-cyan text-xs font-semibold">
            <Wrench className="w-3.5 h-3.5" />
            MECHANICAL SECTOR
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight">Steel & Aluminium Fabrication</h1>
          <p className="text-slate-300 text-sm max-w-2xl">
            Custom heavy structural steel and aluminium fabrication, including reefer platforms, walkways, structural gantries, and industrial components.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-infini-navy">Fabrication Excellence & Scope</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              INFINI Infra delivers precision cutting, welding, assembly, and anti-corrosion finishing for structural steel and aluminium assemblies. We specialize in port infrastructure equipment, reefer container access platforms, and marine grade fabrications.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="glass-card p-6 rounded-2xl border-l-4 border-l-infini-cyan space-y-2">
              <h4 className="font-bold text-infini-navy text-sm">Reefer Container Platforms</h4>
              <p className="text-xs text-slate-500">Multi-tier refrigerated container access gantries and heavy aluminium walkways.</p>
            </div>
            <div className="glass-card p-6 rounded-2xl border-l-4 border-l-infini-cyan space-y-2">
              <h4 className="font-bold text-infini-navy text-sm">Heavy Structural Steel</h4>
              <p className="text-xs text-slate-500">Port fixtures, crane boom extensions, gangways, and industrial support frames.</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="glass-card-dark p-6 rounded-3xl text-white space-y-6 border border-infini-cyan/30">
            <h3 className="text-lg font-bold text-infini-cyan">Custom Fabrication Quote</h3>
            <p className="text-xs text-slate-300">Send your drawings or CAD files for estimation.</p>
            <Link 
              href="/contact" 
              className="w-full bg-infini-cyan text-infini-navy hover:bg-white text-center py-3 rounded-xl text-xs font-bold block transition-colors shadow-lg"
            >
              Submit Design Files →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
