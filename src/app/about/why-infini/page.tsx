import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { 
  Award, 
  ShieldCheck, 
  Users, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  HardHat, 
  FileCheck, 
  Wrench, 
  PhoneCall, 
  Check, 
  Building2 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Why Choose INFINI Infra | Turnkey Civil & Mechanical Contractor",
  description:
    "Discover why leading port authorities, industrial plants, and railway operators choose INFINI Infrastructure & Engineering: experienced promoter leadership, in-house technical crews, strict safety protocols, and dependable on-time execution.",
  openGraph: {
    title: "Why Choose INFINI Infra | Reliable Infrastructure Partner",
    description:
      "Single-source accountability, certified rail welders, marine engineers, and strategic Metguard protective coating partnerships across India & Middle East.",
    images: [{ url: "/images/hero_bg.png", width: 1200, height: 630, alt: "Why Choose INFINI Infrastructure" }],
  },
};

export default function WhyInfiniPage() {
  return (
    <div className="pb-16 space-y-16">
      
      {/* ─── HEADER BANNER ─── */}
      <section className="relative bg-[#0B1B4F] text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#00C2FF]/20 overflow-hidden">
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

        <div className="relative z-10 max-w-6xl mx-auto space-y-4">
          <Breadcrumb />
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00C2FF]/15 border border-[#00C2FF]/30 text-[#00C2FF] text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
            <Award className="w-3.5 h-3.5" />
            WHY INFINI INFRA
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight max-w-3xl">
            Why Partner with <span className="text-[#00C2FF]">INFINI Infra</span>
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-3xl leading-relaxed font-normal">
            Your trusted, single-source turnkey contractor for marine dock construction, rail infrastructure, protective anti-corrosion coatings, and industrial civil engineering across India and the Middle East.
          </p>
        </div>
      </section>

      {/* ─── SECTION 1: PROMOTER LEADERSHIP & SINGLE-SOURCE ACCOUNTABILITY ─── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-slate-200/80 shadow-md space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1B4F]/5 text-[#0B1B4F] text-xs font-bold uppercase tracking-wider">
            <HardHat className="w-3.5 h-3.5 text-[#00C2FF]" />
            Promoter-Led Accountability
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B4F] tracking-tight">
            Direct Leadership with Zero Finger-Pointing
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            <p>
              Large infrastructure projects often suffer from fragmented sub-contractors, miscommunication, and unexpected budget blowouts. At <strong>INFINI Infrastructure &amp; Engineering</strong>, we eliminate this frustration by delivering end-to-end turnkey accountability under one single, dependable roof.
            </p>
            <p>
              Our chief promoter and engineering leadership bring decades of direct, on-site construction experience across major Indian sea ports, railway yards, thermal power plants, and coastal industrial zones. When you partner with us, you work directly with seasoned decision-makers who understand complex engineering blueprints, local soil and tidal mechanics, and strict regulatory deadlines.
            </p>
            <p>
              From initial geotechnical surveys and technical BOQ budgeting to heavy structural erection and final handover certifications, our leadership team stays actively involved at every single milestone.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-200/70">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#00C2FF] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-[#0B1B4F] text-sm">Direct Promoter Access</h4>
                <p className="text-xs text-slate-600 mt-0.5">Quick decisions without bureaucratic delays</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-[#0B1B4F] text-sm">Single Turnkey Contractor</h4>
                <p className="text-xs text-slate-600 mt-0.5">Civil, mechanical &amp; coatings under one roof</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-[#0B1B4F] text-sm">Transparent Costing</h4>
                <p className="text-xs text-slate-600 mt-0.5">Detailed BOQs with no hidden surprises</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: 4 CORE REASONS CLIENTS CHOOSE US ─── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00C2FF]/10 text-[#0B1B4F] text-xs font-bold tracking-wider uppercase">
            Proven Advantages
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B4F] tracking-tight">
            The Four Pillars of Why Clients Choose Us
          </h2>
          <p className="text-base text-slate-600 font-normal leading-relaxed">
            Every project we undertake is built upon qualified people, uncompromising safety standards, punctuality, and dependable industrial backing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Pillar 1 */}
          <div className="glass-card p-8 rounded-3xl space-y-4 hover:border-[#00C2FF] hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-2xl bg-[#0B1B4F]/5 border border-[#0B1B4F]/15 flex items-center justify-center text-[#0B1B4F] shadow-sm group-hover:bg-[#0B1B4F] group-hover:text-[#00C2FF] group-hover:border-[#0B1B4F] transition-all duration-300">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-extrabold text-[#0B1B4F]">1. Qualified Technical Workforce</h3>
            <p className="text-base text-slate-700 leading-relaxed font-normal">
              We do not rely on inexperienced third-party labor for critical engineering tasks. Our core workforce includes certified RDSO rail welders, licensed civil surveyors, structural fabricators, and marine dock technicians. Our crews are trained to follow exact standard operating procedures (SOPs) on every shift.
            </p>
            <div className="pt-2 flex flex-wrap gap-2">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">RDSO Certified Welders</span>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">Marine Surveyors</span>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">Civil Engineers</span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="glass-card p-8 rounded-3xl space-y-4 hover:border-emerald-500 hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 shadow-sm group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition-all duration-300">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-extrabold text-[#0B1B4F]">2. Zero-Compromise Safety &amp; Quality</h3>
            <p className="text-base text-slate-700 leading-relaxed font-normal">
              Safety is never treated as a formality. We adhere strictly to port authority regulations, industrial plant protocols, and environmental standards. From daily toolbox talks and mandatory PPE to non-destructive weld testing and certified crane inspections, we maintain an exemplary zero-harm record.
            </p>
            <div className="pt-2 flex flex-wrap gap-2">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">Zero-Harm Philosophy</span>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">NDT Quality Checks</span>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">ISO Norms</span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="glass-card p-8 rounded-3xl space-y-4 hover:border-amber-500 hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 shadow-sm group-hover:bg-amber-500 group-hover:text-white group-hover:border-amber-500 transition-all duration-300">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-extrabold text-[#0B1B4F]">3. On-Time Project Delivery</h3>
            <p className="text-base text-slate-700 leading-relaxed font-normal">
              In heavy infrastructure, downtime means steep financial penalties. We manage projects using detailed Gantt milestones, continuous progress tracking, and rapid material staging. Our structured planning ensures port berths reopen on schedule and railway tracks resume operations on time.
            </p>
            <div className="pt-2 flex flex-wrap gap-2">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-amber-50 text-amber-700 border border-amber-200">Gantt Milestone Tracking</span>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-amber-50 text-amber-700 border border-amber-200">Rapid Mobilization</span>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-amber-50 text-amber-700 border border-amber-200">24/7 Shift Capability</span>
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="glass-card p-8 rounded-3xl space-y-4 hover:border-[#00C2FF] hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-2xl bg-[#00C2FF]/10 border border-[#00C2FF]/25 flex items-center justify-center text-[#00C2FF] shadow-sm group-hover:bg-[#00C2FF] group-hover:text-[#0B1B4F] group-hover:border-[#00C2FF] transition-all duration-300">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-extrabold text-[#0B1B4F]">4. Modern Fleet &amp; Strategic Partnerships</h3>
            <p className="text-base text-slate-700 leading-relaxed font-normal">
              We own and maintain specialized execution equipment, including heavy-duty cranes, hydraulic vibrators, weld preheating rigs, and hydro-blasting systems. Furthermore, as authorized partners for Visioncraft Metguard protective coatings, we provide factory-backed coating warranties across 4 Indian states and overseas.
            </p>
            <div className="pt-2 flex flex-wrap gap-2">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-cyan-50 text-cyan-800 border border-cyan-200">Self-Owned Machinery</span>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-cyan-50 text-cyan-800 border border-cyan-200">Metguard Authorized</span>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-cyan-50 text-cyan-800 border border-cyan-200">Regional Warehouses</span>
            </div>
          </div>

        </div>
      </section>

      {/* ─── SECTION 3: HOW WE WORK WITH YOU (SIMPLE 3-STEP JOURNEY) ─── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00C2FF]/10 text-[#0B1B4F] text-xs font-bold tracking-wider uppercase">
            Simple Process
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B4F] tracking-tight">
            How We Work With You
          </h2>
          <p className="text-base text-slate-600 font-normal leading-relaxed">
            We make contracting seamless, predictable, and stress-free from the initial conversation to final project sign-off.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm space-y-4 hover:border-[#00C2FF] transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#00C2FF]/10 text-[#00C2FF] font-extrabold text-xl flex items-center justify-center">
              01
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-[#0B1B4F]">Site Survey &amp; Clear Proposal</h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Our engineering team visits your site to study ground realities, inspect existing structures, and review your drawings. We provide an honest technical assessment and a crystal-clear, itemized BOQ estimate.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm space-y-4 hover:border-[#00C2FF] transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#0B1B4F] text-white font-extrabold text-xl flex items-center justify-center">
              02
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-[#0B1B4F]">Mobilization &amp; Execution</h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Upon approval, our crews and equipment mobilize swiftly. A dedicated site engineer oversees daily progress, coordinates logistics, and ensures all safety protocols and quality benchmarks are strictly met.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm space-y-4 hover:border-[#00C2FF] transition-all">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white font-extrabold text-xl flex items-center justify-center">
              03
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-[#0B1B4F]">Rigorous Testing &amp; Handover</h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              We don&apos;t just pack up when work is completed. Every weld is tested, concrete cubes undergo compressive load tests, and coating thicknesses are measured before issuing complete quality handover dossiers.
            </p>
          </div>

        </div>
      </section>

      {/* ─── SECTION 4: KEY TRACK RECORD STATS ─── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B1B4F] text-white rounded-3xl p-8 sm:p-12 space-y-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,194,255,0.15),transparent_60%)] pointer-events-none" />

          <div className="relative z-10 text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[#00C2FF] text-xs font-bold tracking-widest uppercase">By The Numbers</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Our Track Record at a Glance</h3>
            <p className="text-slate-300 text-sm sm:text-base font-light">
              Numbers that reflect our dedication to structural safety, client trust, and timely infrastructure execution.
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-[#00C2FF]">100+</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-200">Completed Projects</div>
              <p className="text-[11px] text-slate-400">Ports, rails, civil &amp; marine</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-emerald-400">100%</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-200">Safety Compliance</div>
              <p className="text-[11px] text-slate-400">Zero critical site incidents</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-amber-400">RDSO</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-200">Approved Procedures</div>
              <p className="text-[11px] text-slate-400">Standardized welding norms</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-[#00C2FF]">4+ States</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-200">&amp; Middle East</div>
              <p className="text-[11px] text-slate-400">Rapid nationwide mobilization</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: CALL TO ACTION BANNER ─── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#0B1B4F] via-[#0E2368] to-[#0B1B4F] text-white p-8 sm:p-12 rounded-3xl border border-[#00C2FF]/30 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center lg:text-left max-w-2xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00C2FF]/15 border border-[#00C2FF]/30 text-[#00C2FF] text-xs font-bold uppercase tracking-wider">
                Start Your Project
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Ready to Work With an Accountable Engineering Partner?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                Whether you need a marine pontoon berth, high-precision crane rail welding, anti-corrosion coating, or civil foundation works, our technical team is ready to assist you.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <Link 
                href="/contact" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#00C2FF] text-[#0B1B4F] hover:bg-white px-7 py-3.5 rounded-full font-bold text-sm shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
              >
                <PhoneCall className="w-4 h-4" />
                Get an Estimate
              </Link>

              <Link 
                href="/career" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3.5 rounded-full font-semibold text-sm transition-all duration-300"
              >
                Join Our Team <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
