import Link from "next/link";
import { Ship, CheckCircle2, ArrowRight } from "lucide-react";

export default function SeaplanePlatformsPage() {
  return (
    <div className="py-12 space-y-16">
      <section className="bg-infini-navy text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-infini-amber/20">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-infini-amber/10 border border-infini-amber/30 text-infini-amber text-xs font-semibold">
            <Ship className="w-3.5 h-3.5" />
            TOURISM SECTOR
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight">Seaplane Landing Platforms</h1>
          <p className="text-slate-300 text-sm max-w-2xl">
            Engineered waterfront floating platforms, boarding ramps, and floating access structures for coastal & island seaplane aviation.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-infini-navy">Seaplane Terminal Infrastructure</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              We design and install floating seaplane docks equipped with soft marine fender protection, non-slip decking, passenger waiting walkways, and heavy mooring anchors compliant with civil aviation and maritime safety norms.
            </p>
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="glass-card-dark p-6 rounded-3xl text-white space-y-6 border border-infini-amber/30">
            <h3 className="text-lg font-bold text-infini-amber">Inquire Seaplane Docks</h3>
            <p className="text-xs text-slate-300">Consult on seaplane landing platform installation.</p>
            <Link 
              href="/contact" 
              className="w-full bg-infini-amber text-white hover:bg-white hover:text-infini-navy text-center py-3 rounded-xl text-xs font-bold block transition-colors shadow-lg"
            >
              Contact Aviation Docks Team →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
