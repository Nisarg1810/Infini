import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { Award, CheckCircle2, ArrowRight } from "lucide-react";

export default function RDSOThermitWeldingPage() {
  return (
    <div className="py-12 space-y-16">
      
      {/* ─── HEADER BANNER ─── */}
      <section className="bg-[#0B1B4F] text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-[#00C2FF]/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#00C2FF_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto space-y-4 relative z-10">
          <Breadcrumb />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00C2FF]/10 border border-[#00C2FF]/30 text-[#00C2FF] text-xs font-semibold">
            <Award className="w-3.5 h-3.5" />
            MECHANICAL SECTOR
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight">RDSO Approved Alumina Thermit Welding Kits</h1>
          <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
            Supply and execution of RDSO-approved alumina thermit welding kits for heavy haul rail tracks, crane rails, and port siding networks.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#0B1B4F]">RDSO Certified Welding Execution</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Our thermit welding crews are trained and certified to perform in-track joint welding adhering to Indian Railways Research Designs and Standards Organisation (RDSO) guidelines. We supply high-purity thermit portions, pre-fabricated moulds, crucibles, and pre-heating equipment.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="glass-card p-5 rounded-2xl border-l-4 border-l-[#00C2FF] space-y-2">
                <h4 className="font-bold text-[#0B1B4F] text-sm">Port Siding Tracks</h4>
                <p className="text-xs text-slate-500">Continuous welded rail (CWR) execution for container logistics tracks.</p>
              </div>
              <div className="glass-card p-5 rounded-2xl border-l-4 border-l-[#00C2FF] space-y-2">
                <h4 className="font-bold text-[#0B1B4F] text-sm">Industrial Heavy Crane Rails</h4>
                <p className="text-xs text-slate-500">Thermit joint welding for smooth gantry crane movement and reduced wheel wear.</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#0B1B4F]">Key Highlights</h3>
            <ul className="space-y-3 text-xs text-slate-700">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00C2FF] shrink-0 mt-0.5" />
                <span>Full compliance with Indian Railways RDSO Manual for Fusion Welding of Rails by Alumina Thermit Process.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00C2FF] shrink-0 mt-0.5" />
                <span>Certified portion supply, pre-heating equipment, auto-tapping crucibles, and single-use pre-fabricated moulds.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00C2FF] shrink-0 mt-0.5" />
                <span>On-site non-destructive testing (NDT), ultrasonic flaw detection, and weld collar trimming for smooth rail profiles.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="glass-card-dark p-6 rounded-3xl text-white space-y-6 border border-[#00C2FF]/30 shadow-2xl sticky top-24">
            <h3 className="text-lg font-bold text-[#00C2FF]">Thermit Kits Inquiry</h3>
            <p className="text-xs text-slate-300">Inquire for RDSO thermit portion supply &amp; welding team execution.</p>
            <Link 
              href="/contact" 
              className="w-full bg-[#00C2FF] text-[#0B1B4F] hover:bg-white text-center py-3 rounded-xl text-xs font-bold block transition-all duration-300 shadow-lg"
            >
              Get Welding Quote →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
