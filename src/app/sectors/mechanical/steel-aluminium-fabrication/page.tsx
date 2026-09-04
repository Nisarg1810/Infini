import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { Wrench, CheckCircle2, ArrowRight } from "lucide-react";

export default function SteelAluminiumFabricationPage() {
  return (
    <div className="py-12 space-y-16">
      
      {/* ─── HEADER BANNER ─── */}
      <section className="bg-[#0B1B4F] text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-[#00C2FF]/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#00C2FF_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto space-y-4 relative z-10">
          <Breadcrumb />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00C2FF]/10 border border-[#00C2FF]/30 text-[#00C2FF] text-xs font-semibold">
            <Wrench className="w-3.5 h-3.5" />
            MECHANICAL SECTOR
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight">Steel &amp; Aluminium Fabrication</h1>
          <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
            Custom heavy structural steel and aluminium fabrication, including reefer platforms, walkways, structural gantries, and industrial components.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#0B1B4F]">Fabrication Excellence &amp; Scope</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              INFINI Infra delivers precision cutting, welding, assembly, and anti-corrosion finishing for structural steel and aluminium assemblies. We specialize in port infrastructure equipment, reefer container access platforms, and marine grade fabrications.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="glass-card p-5 rounded-2xl border-l-4 border-l-[#00C2FF] space-y-2">
                <h4 className="font-bold text-[#0B1B4F] text-sm">Reefer Container Platforms</h4>
                <p className="text-xs text-slate-500">Multi-tier structural steel access walkways and safety platforms for container terminals.</p>
              </div>
              <div className="glass-card p-5 rounded-2xl border-l-4 border-l-[#00C2FF] space-y-2">
                <h4 className="font-bold text-[#0B1B4F] text-sm">Marine &amp; Industrial Gantries</h4>
                <p className="text-xs text-slate-500">Heavy structural steel frames, equipment mounting skids, and aluminium gangways.</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#0B1B4F]">Key Highlights</h3>
            <ul className="space-y-3 text-xs text-slate-700">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00C2FF] shrink-0 mt-0.5" />
                <span>MIG/TIG and submerged arc welding carried out by qualified certified welders.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00C2FF] shrink-0 mt-0.5" />
                <span>Surface grit blasting, hot-dip galvanizing, and protective epoxy/Metguard coating applications.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00C2FF] shrink-0 mt-0.5" />
                <span>3D CAD modeling, structural load calculation, and factory pre-assembly testing before deployment.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="glass-card-dark p-6 rounded-3xl text-white space-y-6 border border-[#00C2FF]/30 shadow-2xl sticky top-24">
            <h3 className="text-lg font-bold text-[#00C2FF]">Fabrication Inquiry</h3>
            <p className="text-xs text-slate-300">Submit your structural drawings for custom steel &amp; aluminium fabrication quotes.</p>
            <Link 
              href="/contact" 
              className="w-full bg-[#00C2FF] text-[#0B1B4F] hover:bg-white text-center py-3 rounded-xl text-xs font-bold block transition-all duration-300 shadow-lg"
            >
              Get Fabrication Estimate →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
