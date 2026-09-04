import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { Wrench, CheckCircle2, ArrowRight, Compass } from "lucide-react";

export default function LandRailSurveyPage() {
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
            <Compass className="w-3.5 h-3.5" />
            MECHANICAL SECTOR
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight max-w-3xl">
            Land &amp; Rail <span className="text-[#00C2FF]">Survey Works</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed font-light">
            Precision geodetic surveying, track alignment mapping, laser profile measurement, and land topography for railway sidings, ports, and industrial yards.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-infini-navy">Survey Capabilities</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Equipped with total stations, digital levels, and DGPS technology, INFINI Infra conducts comprehensive rail track geometry mapping, slope stability analysis, elevation modeling, and land boundaries survey.
            </p>
          </div>

          <div className="space-y-3 text-xs text-slate-700">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-infini-cyan shrink-0" />
              <span>Rail Track Geometry & Alignment Surveys for Railway Sidings</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-infini-cyan shrink-0" />
              <span>Port Quay Crane Runway Elevation & Parallelism Mapping</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-infini-cyan shrink-0" />
              <span>Topographical Land Mapping for Infrastructure Construction</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="glass-card-dark p-6 rounded-3xl text-white space-y-6 border border-infini-cyan/30">
            <h3 className="text-lg font-bold text-infini-cyan">Book Survey Team</h3>
            <p className="text-xs text-slate-300">Deploy qualified survey engineers to your site.</p>
            <Link 
              href="/contact" 
              className="w-full bg-infini-cyan text-infini-navy hover:bg-white text-center py-3 rounded-xl text-xs font-bold block transition-colors shadow-lg"
            >
              Request Survey Crew →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
