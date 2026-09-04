import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { Shield, CheckCircle2, ArrowRight, MapPin } from "lucide-react";

export default function AntiCorrosionCoatingPage() {
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
            <Shield className="w-3.5 h-3.5" />
            MECHANICAL SECTOR
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight max-w-3xl">
            Metguard Anti-Corrosion <span className="text-[#00C2FF]">Coating Substance</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed font-light">
            Official Channel Partners &amp; Business Development Associates for Visioncraft Industries Metguard (Supply &amp; Application) across India &amp; Middle East.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-infini-navy">Regional Partnership Territories</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              INFINI Infra leads marketing, business development, surface preparation, and professional application for Visioncraft Industries Metguard protective coating substance across 4 Indian states and international Middle East markets:
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="bg-white p-4 rounded-xl border border-slate-200 text-center font-bold text-xs text-infini-navy shadow-sm">
                <MapPin className="w-4 h-4 text-infini-cyan mx-auto mb-1" /> Maharashtra
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200 text-center font-bold text-xs text-infini-navy shadow-sm">
                <MapPin className="w-4 h-4 text-infini-cyan mx-auto mb-1" /> Gujarat
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200 text-center font-bold text-xs text-infini-navy shadow-sm">
                <MapPin className="w-4 h-4 text-infini-cyan mx-auto mb-1" /> Goa
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200 text-center font-bold text-xs text-infini-navy shadow-sm">
                <MapPin className="w-4 h-4 text-infini-cyan mx-auto mb-1" /> Andhra Pradesh
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-infini-navy">Application Areas</h3>
            <ul className="space-y-3 text-xs text-slate-700">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-infini-cyan shrink-0 mt-0.5" />
                <span>Marine splash-zone steel structures, jetties, piling, and naval vessel docking equipment.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-infini-cyan shrink-0 mt-0.5" />
                <span>Industrial steel pipelines, storage tanks, reefer platforms, and chemical plant structures.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="glass-card-dark p-6 rounded-3xl text-white space-y-6 border border-infini-cyan/30">
            <h3 className="text-lg font-bold text-infini-cyan">Inquire Metguard Supply & Apply</h3>
            <p className="text-xs text-slate-300">Get technical datasheets and pricing for Metguard protective coating.</p>
            <Link 
              href="/contact" 
              className="w-full bg-infini-cyan text-infini-navy hover:bg-white text-center py-3 rounded-xl text-xs font-bold block transition-colors shadow-lg"
            >
              Contact Sales Team →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
