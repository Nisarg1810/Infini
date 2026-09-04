import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { Wrench, CheckCircle2, ArrowRight } from "lucide-react";

export default function RailwaySidingWorksPage() {
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
          <h1 className="text-4xl font-extrabold tracking-tight">Railway Siding Works for Container Terminals &amp; Ports</h1>
          <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
            Turnkey railway siding construction, track linking, turnout installation, and ballast maintenance for container terminals, ICDs, ports, and steel plants.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#0B1B4F]">Complete Track Linking &amp; Siding Execution</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              INFINI Infra executes complete private and port railway siding projects from earthworks grading and ballast spreading to sleeper laying, rail installation, turnout assembly, and final destressing.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="glass-card p-5 rounded-2xl border-l-4 border-l-[#00C2FF] space-y-2">
                <h4 className="font-bold text-[#0B1B4F] text-sm">In-Plant Private Sidings</h4>
                <p className="text-xs text-slate-500">Dedicated industrial siding tracks for steel, cement, power, and logistics facilities.</p>
              </div>
              <div className="glass-card p-5 rounded-2xl border-l-4 border-l-[#00C2FF] space-y-2">
                <h4 className="font-bold text-[#0B1B4F] text-sm">Port &amp; ICD Container Tracks</h4>
                <p className="text-xs text-slate-500">Heavy haul CWR track laying for inland container depots and seaport rail yards.</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#0B1B4F]">Key Highlights</h3>
            <ul className="space-y-3 text-xs text-slate-700">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00C2FF] shrink-0 mt-0.5" />
                <span>Turnkey track linking including PSC sleepers, 60kg rail installation, elastic rail clips, and rubber pads.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00C2FF] shrink-0 mt-0.5" />
                <span>Precision turnout assembly, diamond crossings, buffer stop installation, and track geometry alignment.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00C2FF] shrink-0 mt-0.5" />
                <span>Routine siding maintenance, ballast tamping, rail joint thermit welding, and safety inspections.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="glass-card-dark p-6 rounded-3xl text-white space-y-6 border border-[#00C2FF]/30 shadow-2xl sticky top-24">
            <h3 className="text-lg font-bold text-[#00C2FF]">Railway Siding Inquiry</h3>
            <p className="text-xs text-slate-300">Consult with our railway engineering specialists for track layout &amp; siding quotes.</p>
            <Link 
              href="/contact" 
              className="w-full bg-[#00C2FF] text-[#0B1B4F] hover:bg-white text-center py-3 rounded-xl text-xs font-bold block transition-all duration-300 shadow-lg"
            >
              Request Siding Quote →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
