import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { HardHat, CheckCircle2, ArrowRight } from "lucide-react";

export default function PaverBlockWorksPage() {
  return (
    <div className="py-12 space-y-16">
      {/* ─── HEADER BANNER ─── */}
      <section className="bg-[#0B1B4F] text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-[#00C2FF]/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#00C2FF_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto space-y-4 relative z-10">
          <Breadcrumb />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
            <HardHat className="w-3.5 h-3.5" />
            CIVIL SECTOR
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight">Paver Block Installation</h1>
          <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
            Heavy-duty industrial interlocking paver block installation for container yards, port logistics bays, industrial plants, and commercial roadways.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-infini-navy">Industrial Paving Solutions</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              We execute sub-base preparation, sand bed compaction, edge restraint laying, and high-strength M40/M50 interlocking concrete paver block laying designed to withstand heavy axle container reach stackers and freight vehicles.
            </p>
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="glass-card-dark p-6 rounded-3xl text-white space-y-6 border border-infini-emerald/30">
            <h3 className="text-lg font-bold text-infini-emerald">Paver Block Inquiry</h3>
            <p className="text-xs text-slate-300">Request pricing for industrial paving & container yard block laying.</p>
            <Link 
              href="/contact" 
              className="w-full bg-infini-emerald text-white hover:bg-white hover:text-infini-navy text-center py-3 rounded-xl text-xs font-bold block transition-colors shadow-lg"
            >
              Get Paving Estimate →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
