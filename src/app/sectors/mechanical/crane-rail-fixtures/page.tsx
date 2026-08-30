import Link from "next/link";
import { Wrench, CheckCircle2, ArrowRight, ShieldCheck, PhoneCall } from "lucide-react";

export default function CraneRailFixturesPage() {
  return (
    <div className="py-12 space-y-16">
      <section className="bg-infini-navy text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-infini-cyan/20">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-infini-cyan/10 border border-infini-cyan/30 text-infini-cyan text-xs font-semibold">
            <Wrench className="w-3.5 h-3.5" />
            MECHANICAL SECTOR
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight">Crane Rail Fixtures – Supply & Installation</h1>
          <p className="text-slate-300 text-sm max-w-2xl">
            Turnkey supply, engineering alignment, fixing, and installation works for heavy crane rails across Ports, Shipyards, Container Terminals, Steel & Cement Plants.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-infini-navy">Engineering Capabilities & Scope</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              INFINI Infra provides complete crane rail fixing solutions tailored for high-load industrial environments. Our specialized crews handle high-precision laser alignment, soleplate positioning, resilient pad placement, adjustable clip fixing, and continuous rail jointing.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="glass-card p-5 rounded-2xl border-l-4 border-l-infini-cyan space-y-2">
                <h4 className="font-bold text-infini-navy text-sm">Port & Shipyard Crane Tracks</h4>
                <p className="text-xs text-slate-500">STS quay cranes, RTG gantries, and shipyard heavy load slipway rails.</p>
              </div>
              <div className="glass-card p-5 rounded-2xl border-l-4 border-l-infini-cyan space-y-2">
                <h4 className="font-bold text-infini-navy text-sm">Industrial Heavy Plant Rails</h4>
                <p className="text-xs text-slate-500">Overhead EOT crane runway rails for steel mills, cement plants, and fabrication bays.</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-infini-navy">Key Highlights</h3>
            <ul className="space-y-3 text-xs text-slate-700">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-infini-cyan shrink-0 mt-0.5" />
                <span>High-strength adjustable rail clip systems and vulcanized elastomeric pads for vibration damping.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-infini-cyan shrink-0 mt-0.5" />
                <span>Precision elevation, gauge, and line laser surveying to meet international ISO crane runway tolerances.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-infini-cyan shrink-0 mt-0.5" />
                <span>Full inspection, maintenance, re-alignment, and refurbishment of existing worn crane tracks.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="glass-card-dark p-6 rounded-3xl text-white space-y-6 border border-infini-cyan/30">
            <h3 className="text-lg font-bold text-infini-cyan">Request Crane Rail Quotation</h3>
            <p className="text-xs text-slate-300">Submit your port or plant specifications to our engineering team.</p>
            <Link 
              href="/contact" 
              className="w-full bg-infini-cyan text-infini-navy hover:bg-white text-center py-3 rounded-xl text-xs font-bold block transition-colors shadow-lg"
            >
              Contact Engineers →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
